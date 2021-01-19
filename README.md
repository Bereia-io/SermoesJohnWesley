# Sermões de John Wesley

# Enviar sermões
Para cadastrar novos sermões de John Wesley copie o arquivo `sermon_exemple.json` presente na pasta `/data` e renomeie de acordo com o número do sermão. Por exemplo, se o sermão cadastrado for o de número 50 renomeie o arquivo como `sermon_50.json`.

O arquivo `sermon_exemple.json` possuí a seguinte estrutura:

```json
{
    "title":"Título do Sermão",
    "date":"Data do sermão",
    "location":"Onde foi pregado",
    "sermon": [
        {
            "language":"pt-BR",
            "number":"Número do sermão",
            "verse":"Versículo base",
            "outline": "Esboço do sermão",
            "content": "..."
        }
    ],
    "reference":""
}
ˋˋˋ

**Campos**

`title`: Título do sermão.
`date`: Data de quando o sermão foi pregado, utilize a seguinte estrutura de data.
`location`: Local onde o sermão foi pregado, não é um campo obrigatório, caso não tenha informações sobre a localização, deixe em branco.
`number`: Número do sermão.
`language`: Não se refere ao idioma em que o sermão foi pregado, mas ao idioma em que o texto foi escrito.
`verse`: Texto base do sermão.
`outline`: Esboço do sermão. Preencha utilizando uma estrutura HTML.
`content`: .... Preencha utilizando uma estrutura HTML.
`reference`: Referência de onde o texto foi retirado.

**Suporte à outros idiomas**

Para adicionar outro idioma a um sermão que já foi cadastrado apenas duplique o objeto dentro do array `sermon` e preencha com os valores referentes ao idioma a ser adicionada. Por exemplo:

```json
{
    "sermon": [
        {
        "language":"pt-BR",
        "number":"...",
        "verse":"...",
        "outline":"...",
        "content":"..."
        },
        {
        "language":"en",
        "number":"...",
        "verse":"...",
        "outline":"...",
        "content":"..."
        }
    ]   
}
```

É possível cadastrar mais de um idioma com dialetos diferentes. Por exemplo, um mesmo sermão pode ser cadastrado em português de Portugal e em portugês do Brasil da seguinte maneira:

```json
{
    "sermon": [
        {
        "language":"pt-BR"
        },
        {
        "language":"pt",
        }
    ]
}
```

**Atenção:** este recurso se destina exclusivamente para uso de múltiplos idiomas e não para multiplas traduções/versões. No momento o projeto não oferece suporte à versões em uma mesma língua.