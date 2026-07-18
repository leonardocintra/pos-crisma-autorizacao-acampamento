"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UF_STATES = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "DF",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
] as const;

function useNumericInput(initial = "", maxLength = 11) {
  const [value, setValue] = React.useState(initial);

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const digits = event.target.value.replace(/\D/g, "").slice(0, maxLength);
      setValue(digits);
    },
    [maxLength],
  );

  return { value, onChange };
}

export function FormularioAutorizacao() {
  const cpfResponsavel = useNumericInput();
  const cpfJovem = useNumericInput();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(Object.fromEntries(data.entries()));
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Dados dos pais e responsáveis</CardTitle>
          <CardDescription>
            Informações do responsável legal pelo menor.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="responsavel-nome">
                Nome completo do responsável
              </FieldLabel>
              <Input
                id="responsavel-nome"
                name="responsavelNome"
                autoComplete="name"
                required
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="responsavel-nacionalidade">
                Nacionalidade
              </FieldLabel>
              <Input
                id="responsavel-nacionalidade"
                name="responsavelNacionalidade"
                defaultValue="Brasileira"
                required
              />
            </Field>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="responsavel-rg">RG</FieldLabel>
                <Input
                  id="responsavel-rg"
                  name="responsavelRg"
                  autoComplete="off"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="responsavel-cpf">CPF</FieldLabel>
                <Input
                  id="responsavel-cpf"
                  name="responsavelCpf"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={11}
                  value={cpfResponsavel.value}
                  onChange={cpfResponsavel.onChange}
                  required
                />
                <FieldDescription>
                  Somente números, até 11 dígitos.
                </FieldDescription>
              </Field>
            </div>

            <div className="grid gap-6 sm:grid-cols-[3fr_1fr]">
              <Field>
                <FieldLabel htmlFor="responsavel-endereco">
                  Endereço (nome da rua)
                </FieldLabel>
                <Input
                  id="responsavel-endereco"
                  name="responsavelEndereco"
                  autoComplete="address-line1"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="responsavel-numero">Número</FieldLabel>
                <Input
                  id="responsavel-numero"
                  name="responsavelNumero"
                  inputMode="numeric"
                  autoComplete="off"
                  required
                />
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="responsavel-bairro">Bairro</FieldLabel>
              <Input
                id="responsavel-bairro"
                name="responsavelBairro"
                autoComplete="address-level3"
                required
              />
            </Field>

            <div className="grid gap-6 sm:grid-cols-[2fr_1fr]">
              <Field>
                <FieldLabel htmlFor="responsavel-cidade">Cidade</FieldLabel>
                <Input
                  id="responsavel-cidade"
                  name="responsavelCidade"
                  defaultValue="Franca"
                  autoComplete="address-level2"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="responsavel-uf">UF</FieldLabel>
                <Select defaultValue="SP" name="responsavelUf">
                  <SelectTrigger id="responsavel-uf" className="w-full">
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {UF_STATES.map((uf) => (
                        <SelectItem key={uf} value={uf}>
                          {uf}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>
          </FieldGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dados do Jovem</CardTitle>
          <CardDescription>
            Informações do jovem que participará da atividade.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="jovem-nome">
                Nome completo do jovem
              </FieldLabel>
              <Input
                id="jovem-nome"
                name="jovemNome"
                autoComplete="off"
                required
              />
            </Field>

            <div className="grid gap-6 sm:grid-cols-[2fr_1fr]">
              <Field>
                <FieldLabel htmlFor="jovem-cidade-nascimento">
                  Cidade de nascimento
                </FieldLabel>
                <Input
                  id="jovem-cidade-nascimento"
                  name="jovemCidadeNascimento"
                  autoComplete="off"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="jovem-estado-nascimento">
                  Estado de nascimento
                </FieldLabel>
                <Select name="jovemEstadoNascimento">
                  <SelectTrigger
                    id="jovem-estado-nascimento"
                    className="w-full"
                  >
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {UF_STATES.map((uf) => (
                        <SelectItem key={uf} value={uf}>
                          {uf}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <Field>
              <FieldLabel htmlFor="jovem-nascimento">
                Data de nascimento
              </FieldLabel>
              <Input
                id="jovem-nascimento"
                name="jovemNascimento"
                type="date"
                autoComplete="bday"
                required
              />
            </Field>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="jovem-rg">RG do jovem</FieldLabel>
                <Input
                  id="jovem-rg"
                  name="jovemRg"
                  autoComplete="off"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="jovem-cpf">CPF do jovem</FieldLabel>
                <Input
                  id="jovem-cpf"
                  name="jovemCpf"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={11}
                  value={cpfJovem.value}
                  onChange={cpfJovem.onChange}
                  required
                />
                <FieldDescription>
                  Somente números, até 11 dígitos.
                </FieldDescription>
              </Field>
            </div>
          </FieldGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Autorização de utilização de imagem</CardTitle>
          <CardDescription>
            Autorizo divulgar imagens e filmes do jovem.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            name="autorizoImagem"
            defaultValue="sim"
            className="flex flex-row gap-8"
          >
            <Field orientation="horizontal">
              <RadioGroupItem value="sim" id="autorizo-sim" />
              <FieldLabel htmlFor="autorizo-sim" className="font-normal">
                Sim
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="nao" id="autorizo-nao" />
              <FieldLabel htmlFor="autorizo-nao" className="font-normal">
                Não
              </FieldLabel>
            </Field>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button type="reset" variant="outline">
          Limpar
        </Button>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
