# DOCUMENTO 2
Texto extraído
FICHA MÉDICA

JOVENS DO CRISMA / PÓS-CRISMA – PARÓQUIA SÃO PEDRO

Jovem: ___________________________________________

nascido(a) na cidade ______________________________ / ______

no dia ____ / ____ / ______

portador(a) do RG ______________________________

e CPF ______________________________

Nome dos pais ou responsável

Telefones para contato

Possui algum plano ou convênio médico?

( ) Sim

( ) Não

Qual: _______________________________________

Possui algum problema de saúde?

( ) Sim

( ) Não

Qual: _______________________________________

Está realizando algum tratamento?

( ) Sim

( ) Não

Qual: _______________________________________

É propenso a convulsão?

( ) Sim

( ) Não

Em que situação?

Já tomou vacina anti-tetânica?

( ) Sim

( ) Não

Quando?

Apresenta alguma alergia?

( ) Sim

( ) Não

Qual?

Apresenta alguma restrição alimentar?

( ) Sim

( ) Não

Qual?

É diabético?

( ) Sim

( ) Não

Se sim, faz uso de insulina?

( ) Sim

( ) Não

Com qual frequência?

Tipo sanguíneo ______________________

Fator RH ______________________

Em caso de tratamento médico, relacione os remédios que serão levados pelo jovem (se preciso detalhe no verso)

Remédio: ____________________

Dose: ____________________

Horários: ____________________

Remédio: ____________________

Dose: ____________________

Horários: ____________________

Remédio: ____________________

Dose: ____________________

Horários: ____________________

Remédio: ____________________

Dose: ____________________

Horários: ____________________

Como deverá ser medicado em caso de:

Febre

Remédio ______________________

Dose ______________________

Dor de cabeça

Remédio ______________________

Dose ______________________

Dor de garganta

Remédio ______________________

Dose ______________________

Contusão muscular

Remédio ______________________

Dose ______________________

Corte ou arranhão

Remédio ______________________

Dose ______________________

Diarreia

Remédio ______________________

Dose ______________________

O referido jovem possui alguma restrição médica em relação à prática de exercícios físicos?

( ) Sim (Importante: detalhar no verso)

( ) Não

Prompt para o GitHub Copilot
Crie uma página HTML moderna, responsiva e acessível utilizando apenas HTML5, CSS3 e JavaScript puro.

O objetivo é transformar uma ficha médica impressa em um formulário digital profissional.

Organize o formulário utilizando cards, fieldsets e uma boa hierarquia visual.

O layout deve possuir largura máxima de 950px.

Utilize Flexbox e CSS Grid.

Todos os campos devem possuir labels.

Todos os campos importantes devem utilizar validação HTML5.

Não utilizar tabelas.

Separar o projeto em:

- index.html
- style.css
- script.js

----------------------------------------
Título
----------------------------------------

Ficha Médica

Subtítulo

Jovens do Crisma / Pós-Crisma
Paróquia São Pedro

----------------------------------------
Seção 1 - Dados do Jovem
----------------------------------------

Campos:

- Nome completo
- Cidade de nascimento
- Estado de nascimento
- Data de nascimento
- RG
- CPF

Aplicar máscara para:

- CPF
- RG
- Data

----------------------------------------
Seção 2 - Responsáveis
----------------------------------------

Campos:

- Nome dos pais ou responsável
- Telefones para contato

Permitir múltiplos telefones.

----------------------------------------
Seção 3 - Informações Médicas
----------------------------------------

Para cada pergunta utilizar Radio Buttons (Sim / Não).

Quando a resposta for "Sim", mostrar dinamicamente um campo de texto correspondente.

Perguntas:

Possui plano ou convênio médico?

Campo:
Nome do plano.

Possui algum problema de saúde?

Campo:
Descrição.

Está realizando algum tratamento?

Campo:
Descrição.

É propenso a convulsão?

Campo:
Em quais situações.

Já tomou vacina anti-tetânica?

Campo:
Quando foi a última dose.

Apresenta alguma alergia?

Campo:
Descrição.

Apresenta alguma restrição alimentar?

Campo:
Descrição.

É diabético?

Campos condicionais:

- Faz uso de insulina?
- Frequência da aplicação

----------------------------------------
Seção 4 - Dados Clínicos
----------------------------------------

Campos:

Tipo sanguíneo

Select contendo:

A+
A-
B+
B-
AB+
AB-
O+
O-

Fator RH

Select:

Positivo
Negativo

----------------------------------------
Seção 5 - Medicamentos levados na viagem
----------------------------------------

Criar uma tabela dinâmica.

Cada linha deve possuir:

- Nome do medicamento
- Dose
- Horário

Adicionar botão

"+ Adicionar medicamento"

Permitir remover linhas.

Iniciar com uma linha vazia.

----------------------------------------
Seção 6 - Medicamentos autorizados
----------------------------------------

Criar um card contendo:

Febre

- Medicamento
- Dose

Dor de cabeça

- Medicamento
- Dose

Dor de garganta

- Medicamento
- Dose

Contusão muscular

- Medicamento
- Dose

Corte ou arranhão

- Medicamento
- Dose

Diarreia

- Medicamento
- Dose

Utilizar Grid com duas colunas quando houver espaço.

----------------------------------------
Seção 7 - Exercícios físicos
----------------------------------------

Pergunta:

"O jovem possui alguma restrição médica para prática de exercícios físicos?"

Radio:

( ) Sim

( ) Não

Caso escolha Sim, abrir automaticamente um TextArea para detalhamento.

----------------------------------------
Botões
----------------------------------------

Adicionar no final:

Salvar

Limpar formulário

Imprimir

Gerar PDF

O botão Imprimir deve utilizar window.print().

----------------------------------------
CSS
----------------------------------------

Criar um visual moderno.

Campos arredondados.

Sombras suaves.

Cards com bordas discretas.

Paleta utilizando:

Azul
Cinza claro
Branco

Criar CSS específico para impressão usando @media print.

Esconder botões durante a impressão.

----------------------------------------
JavaScript
----------------------------------------

Implementar:

Máscaras

Validação

Campos condicionais

Adicionar/remover medicamentos

Limpar formulário

Comentários explicando cada função.

Código organizado e reutilizável.