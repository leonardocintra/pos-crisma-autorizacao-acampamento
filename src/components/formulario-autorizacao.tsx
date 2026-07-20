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
import { Switch } from "@/components/ui/switch";
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

  const [planoSaude, setPlanoSaude] = React.useState(false);
  const [problemaSaude, setProblemaSaude] = React.useState(false);
  const [tratamento, setTratamento] = React.useState(false);
  const [convulsao, setConvulsao] = React.useState(false);
  const [vacinaTetanica, setVacinaTetanica] = React.useState(false);
  const [alergia, setAlergia] = React.useState(false);
  const [restricaoAlimentar, setRestricaoAlimentar] = React.useState(false);
  const [restricaoExercicios, setRestricaoExercicios] = React.useState(false);
  const [diabetico, setDiabetico] = React.useState(false);
  const [usoInsulina, setUsoInsulina] = React.useState(false);
  const [tratamentoMedico, setTratamentoMedico] = React.useState(false);
  const [remedios, setRemedios] = React.useState<
    { id: number; nome: string; dose: string; horario: string }[]
  >([]);

  function adicionarRemedio() {
    setRemedios((prev) => [
      ...prev,
      { id: Date.now(), nome: "", dose: "", horario: "" },
    ]);
  }

  function removerRemedio(id: number) {
    setRemedios((prev) => prev.filter((r) => r.id !== id));
  }

  function atualizarRemedio(
    id: number,
    campo: "nome" | "dose" | "horario",
    valor: string,
  ) {
    setRemedios((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [campo]: valor } : r)),
    );
  }

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
          <CardTitle>Dados de Saúde</CardTitle>
          <CardDescription>
            Informações sobre a saúde do jovem para fins de cuidado durante a atividade.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="plano-saude">
                  Possui algum plano ou convênio médico?
                </FieldLabel>
                <Switch
                  id="plano-saude"
                  name="planoSaude"
                  checked={planoSaude}
                  onCheckedChange={setPlanoSaude}
                />
              </div>
            </Field>
            {planoSaude && (
              <Field>
                <FieldLabel htmlFor="plano-saude-qual">Qual?</FieldLabel>
                <Input
                  id="plano-saude-qual"
                  name="planoSaudeQual"
                  autoComplete="off"
                />
              </Field>
            )}

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="problema-saude">
                  Possui algum problema de saúde?
                </FieldLabel>
                <Switch
                  id="problema-saude"
                  name="problemaSaude"
                  checked={problemaSaude}
                  onCheckedChange={setProblemaSaude}
                />
              </div>
            </Field>
            {problemaSaude && (
              <Field>
                <FieldLabel htmlFor="problema-saude-qual">Qual?</FieldLabel>
                <Input
                  id="problema-saude-qual"
                  name="problemaSaudeQual"
                  autoComplete="off"
                />
              </Field>
            )}

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="tratamento">
                  Está realizando algum tratamento?
                </FieldLabel>
                <Switch
                  id="tratamento"
                  name="tratamento"
                  checked={tratamento}
                  onCheckedChange={setTratamento}
                />
              </div>
            </Field>
            {tratamento && (
              <Field>
                <FieldLabel htmlFor="tratamento-qual">Qual?</FieldLabel>
                <Input
                  id="tratamento-qual"
                  name="tratamentoQual"
                  autoComplete="off"
                />
              </Field>
            )}

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="convulsao">
                  É propenso a convulsão?
                </FieldLabel>
                <Switch
                  id="convulsao"
                  name="convulsao"
                  checked={convulsao}
                  onCheckedChange={setConvulsao}
                />
              </div>
            </Field>
            {convulsao && (
              <Field>
                <FieldLabel htmlFor="convulsao-situacao">
                  Em que situação?
                </FieldLabel>
                <Input
                  id="convulsao-situacao"
                  name="convulsaoSituacao"
                  autoComplete="off"
                />
              </Field>
            )}

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="vacina-tetanica">
                  Já tomou vacina anti-tetânica?
                </FieldLabel>
                <Switch
                  id="vacina-tetanica"
                  name="vacinaTetanica"
                  checked={vacinaTetanica}
                  onCheckedChange={setVacinaTetanica}
                />
              </div>
            </Field>
            {vacinaTetanica && (
              <Field>
                <FieldLabel htmlFor="vacina-tetanica-quando">
                  Quando?
                </FieldLabel>
                <Input
                  id="vacina-tetanica-quando"
                  name="vacinaTetanicaQuando"
                  autoComplete="off"
                />
              </Field>
            )}

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="alergia">
                  Apresenta alguma alergia?
                </FieldLabel>
                <Switch
                  id="alergia"
                  name="alergia"
                  checked={alergia}
                  onCheckedChange={setAlergia}
                />
              </div>
            </Field>
            {alergia && (
              <Field>
                <FieldLabel htmlFor="alergia-qual">Qual?</FieldLabel>
                <Input
                  id="alergia-qual"
                  name="alergiaQual"
                  autoComplete="off"
                />
              </Field>
            )}

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="restricao-exercicios">
                  Possui restrição médica para exercícios físicos?
                </FieldLabel>
                <Switch
                  id="restricao-exercicios"
                  name="restricaoExercicios"
                  checked={restricaoExercicios}
                  onCheckedChange={setRestricaoExercicios}
                />
              </div>
            </Field>
            {restricaoExercicios && (
              <Field>
                <FieldLabel htmlFor="restricao-exercicios-detalhes">
                  Detalhes da restrição
                </FieldLabel>
                <Input
                  id="restricao-exercicios-detalhes"
                  name="restricaoExerciciosDetalhes"
                  placeholder="Descreva a restrição e orientações médicas"
                  autoComplete="off"
                />
              </Field>
            )}

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="restricao-alimentar">
                  Apresenta alguma restrição alimentar?
                </FieldLabel>
                <Switch
                  id="restricao-alimentar"
                  name="restricaoAlimentar"
                  checked={restricaoAlimentar}
                  onCheckedChange={setRestricaoAlimentar}
                />
              </div>
            </Field>
            {restricaoAlimentar && (
              <Field>
                <FieldLabel htmlFor="restricao-alimentar-qual">
                  Qual?
                </FieldLabel>
                <Input
                  id="restricao-alimentar-qual"
                  name="restricaoAlimentarQual"
                  autoComplete="off"
                />
              </Field>
            )}

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="diabetico">É diabético?</FieldLabel>
                <Switch
                  id="diabetico"
                  name="diabetico"
                  checked={diabetico}
                  onCheckedChange={setDiabetico}
                />
              </div>
            </Field>
            {diabetico && (
              <>
                <Field>
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="uso-insulina">
                      Se sim, faz uso de insulina?
                    </FieldLabel>
                    <Switch
                      id="uso-insulina"
                      name="usoInsulina"
                      checked={usoInsulina}
                      onCheckedChange={setUsoInsulina}
                    />
                  </div>
                </Field>
                {usoInsulina && (
                  <Field>
                    <FieldLabel htmlFor="frequencia-insulina">
                      Com qual frequência?
                    </FieldLabel>
                    <Input
                      id="frequencia-insulina"
                      name="frequenciaInsulina"
                      autoComplete="off"
                    />
                  </Field>
                )}
              </>
            )}

            <Field>
              <FieldLabel htmlFor="tipo-sanguineo">Tipo sanguíneo</FieldLabel>
              <Select name="tipoSanguineo">
                <SelectTrigger id="tipo-sanguineo" className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="A+">A+</SelectItem>
                    <SelectItem value="A-">A-</SelectItem>
                    <SelectItem value="B+">B+</SelectItem>
                    <SelectItem value="B-">B-</SelectItem>
                    <SelectItem value="AB+">AB+</SelectItem>
                    <SelectItem value="AB-">AB-</SelectItem>
                    <SelectItem value="O+">O+</SelectItem>
                    <SelectItem value="O-">O-</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <div className="flex items-center justify-between">
                <FieldLabel htmlFor="tratamento-medico">
                  Está em tratamento médico?
                </FieldLabel>
                <Switch
                  id="tratamento-medico"
                  name="tratamentoMedico"
                  checked={tratamentoMedico}
                  onCheckedChange={setTratamentoMedico}
                />
              </div>
            </Field>

            {tratamentoMedico && (
              <>
                {remedios.map((remedio, index) => (
                  <div
                    key={remedio.id}
                    className="flex flex-col gap-4 rounded-md border p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Remédio {index + 1}
                      </span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removerRemedio(remedio.id)}
                      >
                        Remover
                      </Button>
                    </div>
                    <FieldGroup>
                      <Field>
                        <FieldLabel htmlFor={`remedio-nome-${remedio.id}`}>
                          Nome do remédio
                        </FieldLabel>
                        <Input
                          id={`remedio-nome-${remedio.id}`}
                          name={`remedioNome-${remedio.id}`}
                          autoComplete="off"
                          value={remedio.nome}
                          onChange={(e) =>
                            atualizarRemedio(
                              remedio.id,
                              "nome",
                              e.target.value,
                            )
                          }
                        />
                      </Field>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <Field>
                          <FieldLabel htmlFor={`remedio-dose-${remedio.id}`}>
                            Dose
                          </FieldLabel>
                          <Input
                            id={`remedio-dose-${remedio.id}`}
                            name={`remedioDose-${remedio.id}`}
                            placeholder="Ex: 500mg"
                            autoComplete="off"
                            value={remedio.dose}
                            onChange={(e) =>
                              atualizarRemedio(
                                remedio.id,
                                "dose",
                                e.target.value,
                              )
                            }
                          />
                        </Field>
                        <Field>
                          <FieldLabel htmlFor={`remedio-horario-${remedio.id}`}>
                            Horário
                          </FieldLabel>
                          <Input
                            id={`remedio-horario-${remedio.id}`}
                            name={`remedioHorario-${remedio.id}`}
                            placeholder="Ex: 8h, 14h, 20h"
                            autoComplete="off"
                            value={remedio.horario}
                            onChange={(e) =>
                              atualizarRemedio(
                                remedio.id,
                                "horario",
                                e.target.value,
                              )
                            }
                          />
                        </Field>
                      </div>
                    </FieldGroup>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  onClick={adicionarRemedio}
                >
                  Adicionar outro remédio
                </Button>
              </>
            )}

            <Field>
              <FieldLabel className="text-base font-semibold">
                Como deverá ser medicado em caso de:
              </FieldLabel>
            </Field>

            <Field>
              <FieldLabel htmlFor="medicacao-febre">Febre</FieldLabel>
              <Input
                id="medicacao-febre"
                name="medicacaoFebre"
                placeholder="Ex: Dipirona 500mg, 6/6h"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="medicacao-dor-cabeca">
                Dor de cabeça
              </FieldLabel>
              <Input
                id="medicacao-dor-cabeca"
                name="medicacaoDorCabeca"
                placeholder="Ex: Paracetamol 750mg, 8/8h"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="medicacao-dor-garganta">
                Dor de garganta
              </FieldLabel>
              <Input
                id="medicacao-dor-garganta"
                name="medicacaoDorGarganta"
                placeholder="Ex: Benzetacil, conforme orientação médica"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="medicacao-contusao">
                Contusão muscular
              </FieldLabel>
              <Input
                id="medicacao-contusao"
                name="medicacaoContusao"
                placeholder="Ex: Cataflan gel, 3x ao dia"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="medicacao-corte">
                Corte ou arranhão
              </FieldLabel>
              <Input
                id="medicacao-corte"
                name="medicacaoCorte"
                placeholder="Ex: Água oxigenada + Band-aid"
                autoComplete="off"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="medicacao-diarreia">Diarreia</FieldLabel>
              <Input
                id="medicacao-diarreia"
                name="medicacaoDiarreia"
                placeholder="Ex: Probiótico, 1 envelope a cada 12h"
                autoComplete="off"
              />
            </Field>
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
