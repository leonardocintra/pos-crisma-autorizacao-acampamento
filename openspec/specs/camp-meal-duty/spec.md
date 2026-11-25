# camp-meal-duty Specification

## Purpose

Deixa claras a vigia das refeições e a vigia noturna do acampamento, mostrando quem são os responsáveis por cada refeição e por cada turno da noite.

## Requirements

### Requirement: A escala é agrupada por dia e refeição

A página de escala SHALL apresentar cada dia do acampamento e, dentro dele, as refeições com os nomes dos responsáveis.

#### Scenario: Jantar de quarta-feira

- **WHEN** o visitante abre `/escala`
- **THEN** encontra o jantar de quarta-feira com Leonardo Cintra, Juliana, Adilson e Célia

### Requirement: Os avisos gerais da escala ficam destacados

A página SHALL destacar avisos que valem para todo o grupo, inclusive o pedido para que todos os padrinhos fiquem de olho nos jovens ao colocar as malas nos ônibus.

#### Scenario: Aviso das malas

- **WHEN** o visitante percorre a escala
- **THEN** o aviso sobre as malas nos ônibus aparece em um bloco de destaque, separado das refeições

### Requirement: A vigia noturna é apresentada por turnos

A página de escala SHALL apresentar os turnos da vigia noturna de quarta a sábado, com o intervalo de horário e os nomes dos responsáveis.

#### Scenario: Turno da madrugada de quarta-feira

- **WHEN** o visitante procura a vigia noturna de quarta-feira
- **THEN** encontra o turno das 2h30 às 4h com Marcos P. e Daniel

#### Scenario: Encerramento da sexta-feira

- **WHEN** o visitante lê o último turno da sexta-feira
- **THEN** o intervalo das 1h30 às 3h destaca que a equipe deve acordar os jovens para a Missa
