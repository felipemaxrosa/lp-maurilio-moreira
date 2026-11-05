import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type SanityWebhookBody = { _type?: string };

// Webhook do Sanity → revalida o conteúdo ao publicar.
// Configurar em Sanity Manage → API → Webhooks (POST, com o mesmo secret).
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<SanityWebhookBody>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return new Response("Assinatura inválida", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Corpo sem _type", { status: 400 });
    }

    // Revalida o tipo específico e o guarda-chuva "sanity" (stale-while-revalidate).
    revalidateTag(body._type, "max");
    revalidateTag("sanity", "max");

    return NextResponse.json({
      revalidated: true,
      type: body._type,
      now: Date.now(),
    });
  } catch (err) {
    console.error("Erro no webhook de revalidação:", err);
    return new Response("Erro interno", { status: 500 });
  }
}
