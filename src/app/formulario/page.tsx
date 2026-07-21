import { FormularioAutorizacao } from "@/components/formulario-autorizacao";

const hotelName = "Hotel Fazenda Villa da Fonte";
const tripDates = "25 a 29 de novembro de 2026";

export default function FormularioPage() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-slate-950 to-indigo-950 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_transparent_65%)]" />
        <div className="absolute -top-28 left-1/2 hidden h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-[120px] sm:block" />
      </div>

      <div className="relative z-10 w-full max-w-3xl space-y-8">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-900/60 backdrop-blur">
          <p className="text-[0.55rem] uppercase tracking-[0.4em] text-white/60">
            Autorização 2026
          </p>
          <h1 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Autorização de viagem para menores
          </h1>
          <p className="mt-2 text-sm text-white/70">
            Preencha os dados do responsável e do jovem participante com calma e
            confirme todas as informações antes de gerar o documento.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/90 p-4 text-slate-900 shadow-lg shadow-slate-900/30">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">
                Acomodação
              </p>
              <p className="mt-2 text-lg font-semibold leading-tight">
                {hotelName}
              </p>
            </div>
            <div className="rounded-2xl bg-white/90 p-4 text-slate-900 shadow-lg shadow-slate-900/30">
              <p className="text-[0.65rem] uppercase tracking-[0.35em] text-slate-500">
                Período
              </p>
              <p className="mt-2 text-lg font-semibold leading-tight">
                {tripDates}
              </p>
            </div>
          </div>
        </section>

        <FormularioAutorizacao />
      </div>
    </div>
  );
}
