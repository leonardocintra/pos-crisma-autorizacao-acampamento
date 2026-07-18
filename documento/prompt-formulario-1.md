# Objetivo
Duas tarefas:
- Ajustar o formulario que gera a pagina 1 do PDF. 
- Ajustar o PDF gerado




## O que fazer
## Ajuste no formulario PDF (saida)
Para o PDF que é gerado use como base a imagem que esta em documento/doc-02.jpeg

Precisa ter um campo onde vai o logo/icone da pastroal pos crisma

O formulario precisa ser assim:

JOVENS DO CRISMA / PÓS-CRISMA – PARÓQUIA SÃO PEDRO

Padrinhos: _____________________ / _____________________

Eu, ________________________________________________, de nacionalidade ________________________, portador(a) do RG ______________________ e CPF ______________________,

domiciliado(a) à ______________________________________________,

Nº _________, no bairro _____________________________________,

Cidade _________________________________ / SP,

autorizo o(a) jovem _________________________________________________,

nascido(a) na cidade _________________________________ / ________,

no dia //________,

portador(a) do RG ______________________ e CPF ______________________,

a empreender viagem nacional com destino à Hotel Fazenda Villa da Fonte, estrada do Kinadi número 355, Palmeiras, cidade Suzano/SP, no dia 25 de novembro de 2026, com retorno no dia 29 de novembro de 2026, para participar do encontro de jovens do Crisma/Pós-Crisma da Paróquia São Pedro (Franca/SP).

Autorizo também a utilização de imagem (fotos/filmagens) do jovem acima:

( ) Sim

( ) Não

_____________________________________, _____ de __________________________ de 2025.

Assinatura do Pai, Mãe ou Responsável Legal

Os dados desta autorização são necessários para Transporte e Hospedagem.

No caso de jovem maior de idade não é necessária assinatura dos pais ou responsável legal.

### Ajuste no formulario HTML
Crie uma página HTML moderna e responsiva utilizando apenas HTML5, CSS3 e JavaScript puro.

O objetivo é reproduzir o formulário físico de autorização de viagem da Paróquia São Pedro em formato digital.

Requisitos:

- Utilize layout limpo em formato de formulário.
- Organize os campos em seções utilizando cards.
- O formulário deve ocupar no máximo 900px de largura.
- Todos os campos devem possuir labels.
- Utilize Flexbox e CSS Grid para organização.
- O formulário deve ser totalmente responsivo.
- Adicione validação HTML5.
- Campos obrigatórios devem possuir atributo required.
- Utilize inputs apropriados para cada informação.
- Não utilize tabelas.

Título da página:

"Autorização de Viagem - Jovens do Crisma / Pós-Crisma"

Subtítulo:

Paróquia São Pedro

Campos do formulário:

Seção "Padrinhos"

- Nome do padrinho
- Nome da madrinha

Seção "Responsável Legal"

- Nome completo
- Nacionalidade
- RG
- CPF

Seção "Endereço"

- Rua
- Número
- Bairro
- Cidade
- Estado (SP preenchido automaticamente)

Seção "Dados do Jovem"

- Nome completo
- Cidade de nascimento
- Estado de nascimento
- Data de nascimento
- RG
- CPF

Seção "Viagem"

Exibir um card somente leitura contendo:

Destino:
Hotel Fazenda Villa da Fonte

Endereço:
Estrada do Kinadi nº 355
Palmeiras
Suzano/SP

Saída:
25/11/2026

Retorno:
29/11/2026

Descrição:

"Participar do encontro de Jovens do Crisma/Pós-Crisma da Paróquia São Pedro (Franca/SP)."

Seção "Autorização de uso de imagem"

Campo obrigatório utilizando Radio Button:

( ) Sim
( ) Não

Seção "Data"

- Cidade
- Dia
- Mês
- Ano (preencher automaticamente com 2025)

Seção "Assinatura"

Adicionar uma área visual semelhante à assinatura do documento físico contendo:

"Assinatura do Pai, Mãe ou Responsável Legal"

Apenas uma linha horizontal centralizada.

Rodapé

Adicionar um box informativo com fundo cinza claro contendo:

"Os dados desta autorização são necessários para Transporte e Hospedagem."

"No caso de jovem maior de idade não é necessária assinatura dos pais ou responsável legal."

Extras:

- Máscara para CPF.
- Máscara para RG.
- Máscara para data.
- Layout elegante.
- Inputs com cantos arredondados.
- Botão "Imprimir" utilizando window.print().
- Botão "Salvar PDF" utilizando a janela de impressão do navegador.
- Botão "Limpar Formulário".
- Preparar CSS específico para impressão (@media print), escondendo os botões e mantendo apenas o formulário.
- Código organizado em três arquivos:
  - index.html
  - style.css
  - script.js
- Comentar o código para facilitar futuras alterações.

