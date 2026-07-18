import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <div className="flex flex-col items-center gap-6">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Pós-Crisma 2026
        </h1>
        <p className="max-w-md text-lg text-muted-foreground">
          Preencha a autorização de viagem para o acampamento de verão.
        </p>
        <Button
          render={<Link href="/formulario" />}
          nativeButton={false}
          size="lg"
        >
          Preencher autorização
        </Button>
      </div>
    </div>
  );
}
