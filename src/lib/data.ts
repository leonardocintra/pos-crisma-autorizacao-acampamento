import padrinhosJson from "@/../data/padrinhos.json";
import paroquiasJson from "@/../data/paroquias.json";

type RawParoquia = {
  readonly id: number;
  readonly nome: string;
  readonly endereco: {
    readonly cidade: string;
    readonly uf: string;
  };
};

type RawPadrinho = {
  readonly padrinho: string;
  readonly madrinha: string;
  readonly paroquia: number;
};

type ParoquiasFile = {
  readonly paroquias: readonly RawParoquia[];
};

type PadrinhosFile = {
  readonly padrinhos: readonly RawPadrinho[];
};

export type Paroquia = {
  readonly id: number;
  readonly name: string;
  readonly city: string;
  readonly state: string;
};

export type PadrinhoOption = {
  readonly id: string;
  readonly padrinho: string;
  readonly madrinha: string;
  readonly paroquia: Paroquia;
  readonly label: string;
};

const paroquiasFile = paroquiasJson as ParoquiasFile;
const padrinhosFile = padrinhosJson as PadrinhosFile;

export const PAROQUIAS: readonly Paroquia[] = paroquiasFile.paroquias.map(
  (paroquia) => ({
    id: paroquia.id,
    name: paroquia.nome,
    city: paroquia.endereco.cidade,
    state: paroquia.endereco.uf,
  }),
);

const PAROQUIA_BY_ID = new Map<number, Paroquia>(
  PAROQUIAS.map((item) => [item.id, item]),
);

export const PADRINHOS: readonly PadrinhoOption[] = padrinhosFile.padrinhos.map(
  (entry, index) => {
    const paroquia =
      PAROQUIA_BY_ID.get(entry.paroquia) ??
      ({
        id: 0,
        name: "Paróquia não informada",
        city: "",
        state: "",
      } satisfies Paroquia);

    const label = `${entry.padrinho} & ${entry.madrinha} — ${paroquia.name} (${paroquia.city}/${paroquia.state})`;

    return {
      id: `padrinho-${index + 1}`,
      padrinho: entry.padrinho,
      madrinha: entry.madrinha,
      paroquia,
      label,
    } satisfies PadrinhoOption;
  },
);

export const getPadrinhoById = (id: string): PadrinhoOption | undefined =>
  PADRINHOS.find((item) => item.id === id);
