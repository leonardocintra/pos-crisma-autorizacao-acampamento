import { FormularioAutorizacao } from "@/components/formulario-autorizacao";

export default function FormularioPage() {
  return (
    <div className="flex flex-1 flex-col items-center bg-muted/30 py-12 px-4 sm:px-6">
      <div className="w-full max-w-3xl">
        <div className="mb-8 flex flex-col gap-2">
          <h1 className="font-heading text-3xl font-semibold tracking-tight">
            Autorização de viagem para menores
          </h1>
          <p className="text-sm text-muted-foreground">
            Preencha os dados do responsável e do jovem participante.
          </p>
        </div>
        <FormularioAutorizacao />
      </div>
    </div>
  );
}
