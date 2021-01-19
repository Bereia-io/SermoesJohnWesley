# Sermões de John Wesley
O projeto Sermões de John Wesley é uma iniciativa independente, open source e sem fins lucrativos cujo objetivo é disponibilizar de forma fácil, simples e intuitiva todos os sermões pregados por Wesley.

John Wesley editou os sermões em dois momentos: logo depois do início da fase mais evangelista e da formação do movimento metodista, e mais tarde, a partir de 1778, no Arminian Magazine, revista editada por ele até o ano da sua morte, em 1791. As reflexões a respeito de Wesley e sua linha teológica tem sido motivo de várias pesquisas no país e no mundo. [Igreja Metodista - Portal Nacional](https://www.metodista.org.br/sermoes-de-john-wesley-disponiveis-para-download)

# Fontes de referência

- [Igreja Metodista - Portal Nacional](https://www.metodista.org.br/sermoes-de-john-wesley-disponiveis-para-download)
- [Centro de Estudos Wesleyanos](http://portal.metodista.br/cew/)

# Como contribuir
Apoie o desenvolvimento do projeto implementando e corrigindo o código (confira as issues abertas) e/ou cadastrando sermões ausentes e adicionando sermões em outros idiomas.

## Como cadastrar novos sermões
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
            "content": "...",
            "reference":"Referência de onde o sermão foi retirado"
        }
    ],
}
```

**Campos/Informações**

`title`: Título do sermão. Campo obrigatório.

`date`: Data de quando o sermão foi pregado, utilize a seguinte estrutura de data. Campo obrigatório.

`location`: Local onde o sermão foi pregado, não é um campo obrigatório, caso não tenha informações sobre a localização, deixe em branco.

`number`: Número do sermão. Campo obrigatório.

`language`: Não se refere ao idioma em que o sermão foi pregado, mas ao idioma em que o texto foi escrito. Campo obrigatório.

`verse`: Texto base do sermão. Campo obrigatório.

`outline`: Esboço do sermão. Campo obrigatório. Preencha utilizando uma estrutura HTML. Por exemplo: 

```json
{
    "outline":{"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet arcu ac sem pretium semper vel nec sapien.</p><p>Donec tincidunt vulputate erat, eget condimentum elit tempor suscipit. Suspendisse sed sapien velit. <p>Aliquam vitae ullamcorper sapien, consequat ultrices nisl. Integer auctor ex at finibus tincidunt./p><p>Nullam id urna vulputate, vestibulum ex a, iaculis leo. Phasellus pretium lacus nec orci fringilla facilisis.</p>"}
}
```

`content`: Conteúdo do sermão. Campo obrigatório. Preencha utilizando uma estrutura HTML.

`reference`: Referência de onde o texto foi retirado. Campo obrigatório.

**Suporte a outros idiomas**

Para adicionar outro idioma a um sermão que já foi cadastrado apenas duplique o objeto dentro do array `sermon` e preencha com os valores referentes ao idioma a ser adicionada. Por exemplo:

```json
{
    "sermon": [
        {
        "language":"pt-BR",
        "number":"...",
        "verse":"...",
        "outline":"...",
        "content":"...",
        "reference":"..."
        },
        {
        "language":"en",
        "number":"...",
        "verse":"...",
        "outline":"...",
        "content":"...",
        "reference":"..."
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

## Como rodar o projeto
Instale as dependências utilizando `yarn`.