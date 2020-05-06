<p align="center">
  <img src="https://i.imgur.com/Wh3jjrl.png" alt="André Ceratti da Rocha" />
</p>

# Desafio Fundamentos NodeJS

Este desafio era para implementar as rotas Get e Post usando os conceitos de repositorios, models e services com typescript para o curso GoStack da Rocketseat

Este aplicativo é o inicio do GoFinances utilizando apenas os fundamentos de node. É possivel nele guardar transações do tipo income e outcome em um array e conseguir o balanço total.

## Iniciando

Para rodar este app você apenas tem que clonar o repositório, navegar até a pagina e rodar o comando ```yarn dev:server```. O app vai rodar em http://localhost:3333/

Recomendo para utilizar usar o programa Insominia para testar as rotas.

- GET: ```http://localhost:3333/transactions```

- POST: ```http://localhost:3333/transactions```

Na rota post deve ser enviado dentro de um JSON um titulo, valor e um tipo. Os unicos typos aceitos são do tipo ```income``` e ```outcome```

Exemplo:
```
{
  "title": "Salário",
  "value": 3500,
  "type": "income"
}
```

Link desafio [[x](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-fundamentos-nodejs)]
