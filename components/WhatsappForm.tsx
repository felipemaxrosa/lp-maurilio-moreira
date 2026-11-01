"use client";

import { useState } from "react";
import { Lock, Loader2 } from "lucide-react";
import { whatsappLink, demandMessage } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type Fields = { nome: string; bairro: string; telefone: string; mensagem: string };
const empty: Fields = { nome: "", bairro: "", telefone: "", mensagem: "" };

export function WhatsappForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [sending, setSending] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const valid = values.nome.trim() && values.bairro.trim() && values.telefone.trim().length >= 8 && values.mensagem.trim();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || sending) return;
    setSending(true);
    const url = whatsappLink(demandMessage(values));
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setSending(false), 1200);
  };

  const fieldClass = (filled: boolean) =>
    `w-full rounded-md border bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-teal focus:ring-2 focus:ring-teal/20 ${
      filled ? "border-verde" : "border-line"
    }`;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-2xl border border-line bg-mist/40 p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-ink">Nome</span>
          <input
            id="nome"
            value={values.nome}
            onChange={set("nome")}
            placeholder="Como podemos te chamar?"
            className={fieldClass(Boolean(values.nome.trim()))}
            required
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-ink">Bairro</span>
          <input
            id="bairro"
            value={values.bairro}
            onChange={set("bairro")}
            placeholder="De qual região você fala?"
            className={fieldClass(Boolean(values.bairro.trim()))}
            required
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-ink">Telefone / WhatsApp</span>
        <input
          id="telefone"
          type="tel"
          inputMode="tel"
          value={values.telefone}
          onChange={set("telefone")}
          placeholder="(12) 90000-0000"
          className={fieldClass(values.telefone.trim().length >= 8)}
          required
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-semibold text-ink">Sua demanda</span>
        <textarea
          id="mensagem"
          value={values.mensagem}
          onChange={set("mensagem")}
          placeholder="Conte o problema do seu bairro ou a sua sugestão de projeto."
          rows={4}
          className={`${fieldClass(Boolean(values.mensagem.trim()))} resize-y`}
          required
        />
      </label>

      <button
        type="submit"
        disabled={!valid || sending}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-whatsapp px-6 py-4 text-base font-bold text-whatsapp-ink shadow-lg transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {sending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Redirecionando…
          </>
        ) : (
          <>
            <WhatsAppIcon className="h-5 w-5" /> Enviar Demanda pelo WhatsApp
          </>
        )}
      </button>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-ink-soft">
        <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        Seus dados são protegidos e usados exclusivamente para que nossa equipe retorne o contato com a solução.
      </p>
    </form>
  );
}
