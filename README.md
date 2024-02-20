# projeto-api-fatos-historicos
## API REST de Fatos Históricos
Este é um projeto de API REST simples que fornece informações históricas com base no ano fornecido. Ele usa Node.js com Express para criar o servidor e JavaScript moderno (ES6) para o código.

## Estrutura do Projeto
### index.js: Arquivo principal que configura o servidor Express e define os endpoints da API.
### servico/servico.js: Contém funções para validar o ano e buscar o fato histórico correspondente.
### dados/fatos.js: Arquivo de dados que contém uma lista de fatos históricos com seus anos correspondentes.

## Como Usar
Instale as dependências do projeto:

package.json:
npm init -y (configure o arquivo)

express:
npm install express --save

Inicie o servidor:

node index.js

a mensagsem: "O servidor será iniciado na porta 8080 por padrão." Aparecera no terminal.

## Acesse a API:

Para buscar um fato histórico específico, envie uma requisição GET para http://localhost:8080/?ano=YYYY, onde YYYY é o ano desejado.

Exemplo de resposta para uma requisição válida:

json
{
  "fato": "Ocorre a quebra da bolsa de valores de Nova York."
}
Exemplo de resposta para uma requisição inválida:

json
{
  "erro": "Parâmetro ano inválido"
}


## Observações
Este projeto é apenas um exemplo educacional e pode não contemplar todas as boas práticas de desenvolvimento de APIs.
Os dados históricos foram simplificados e podem não refletir totalmente a realidade dos eventos.
Sinta-se à vontade para modificar e expandir este projeto de acordo com suas necessidades.
