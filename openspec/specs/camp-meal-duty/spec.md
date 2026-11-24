# camp-meal-duty Specification

## Purpose

Deixa clara a vigia das refeições do acampamento, mostrando quem são os responsáveis por cada refeição em cada dia.

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
