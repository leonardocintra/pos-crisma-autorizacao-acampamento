## Objetivo
Criar um site que preenche formularios e depois gere um PDF para a pessoa assinar digitalmente usando o gob.br

## Especificacao
- Ter uma pagina inicial parecida como uma landing page explicando o que é o acampamento do Pos Crisma (a descricao vou mandar depois). Por enquant apenas um botão para ir para a pagina de Gerar Documento de aprovação
- Ter uma pagina de contato 
- Ter uma pagina de Gerar Documento de autorizacao onde ira ficar o formulario a ser crido

## Requistos de negocio
- Ser mobile-first
- O nextjs v16 ja foi criado nesse projeto mas sem nenhuma funcionalidade
- Criar um arquivo /data/padrinhos.json e criar usando o exemplo mostrado no topico (## Dados para se basear)
- Criar um arquivo /data/paroquias.json e criar usando o exemplo mostrado no topico (## Dados para se basear)
- O formulario deve basear-se nos campos do documento fisico documento/doc-01.jpeg e documento/doc-02.jpeg
- Na selecao de padrinhos deve mostrar o nome + descricao da paroquia
- usar biblioteca jspdf e @types/jspdf para geracao de PDF (usar npm install)

## Restrições
- Salvar em banco de dados
- Autenticação de ususarios

## Critérios de Aceitação
- Cadastro de formulario em uma unica pagina
- Gerar duas paginas PDF para o usuario baixar
- Campo no PDF para o usuario assinar digitalmente
- A data que o acampamento será realizado sera em 25 a 28 de Novembro de 2026
- Rodape escrito que foi desenvolvido com amor por Leonardo Cintra (https://leonardocintra.com.br)


## Dados para se basear
### Padrinhos
```json
{
  "padrinhos": [
    {
      "padrinho": "Leonardo Cintra",
      "madrinha": "Juliana Cintra",
      "paroquia": 1
    },
    {
      "padrinho": "Alessandro Carrijo",
      "madrinha": "Erica Aparecida",
      "paroquia": 2
    },
  ]
}
```

### Paroquias
```json
{
  "paroquias": [
    {
      "id": 1,
      "nome": "São Pedro",
      "endereco": {
        "cidade": "Franca",
        "uf": "SP"
      }
    },
    {
      "id": 2,
      "nome": "Catedral",
      "endereco": {
        "cidade": "Franca",
        "uf": "SP"
      }
    }
  ]
}
```
