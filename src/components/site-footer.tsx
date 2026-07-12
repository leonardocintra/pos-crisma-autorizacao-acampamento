import { FOOTER_CREDIT, RETREAT_METADATA } from "@/lib/constants";
import { formatDateRange } from "@/lib/formatters";

export function SiteFooter() {
  const dateRange = formatDateRange(
    RETREAT_METADATA.startDate,
    RETREAT_METADATA.endDate,
  );

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-zinc-500">
        <p>{FOOTER_CREDIT}</p>
        <p>
          Dúvidas? Fale com a equipe pelo WhatsApp ou e-mail. Datas: {dateRange}
        </p>
      </div>
    </footer>
  );
}
