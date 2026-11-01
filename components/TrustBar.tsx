import { Vote, Scale, MapPin } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

type Item = { key: string; Icon: typeof Vote; value: React.ReactNode; label: string };

const items: Item[] = [
  {
    key: "votos",
    Icon: Vote,
    value: <CountUp to={1586} />,
    label: "votos de confiança em 2024",
  },
  {
    key: "lei",
    Icon: Scale,
    value: <>32/26</>,
    label: "lei aprovada por unanimidade",
  },
  {
    key: "bairros",
    Icon: MapPin,
    value: (
      <>
        +<CountUp to={7} duration={1.2} />
      </>
    ),
    label: "bairros com demandas atendidas",
  },
];

export function TrustBar() {
  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-6">
          {items.map(({ key, Icon, value, label }) => (
            <div
              key={key}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-6"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                <Icon className="h-7 w-7" />
              </span>
              <div className="flex min-w-0 flex-col">
                <span className="font-display text-3xl font-black leading-none tracking-tight text-petroleo lg:text-4xl">
                  {value}
                </span>
                <span className="mt-1.5 text-sm font-medium leading-snug text-ink-soft">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
