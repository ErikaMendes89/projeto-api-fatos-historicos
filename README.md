# projeto-api-fatos-historicos 📚

## API REST de Fatos Históricos
Este é um projeto de API REST simples que fornece informações históricas com base no ano fornecido. Ele usa Node.js com Express para criar o servidor e JavaScript moderno (ES6) para o código.

## Estrutura do Projeto
<ul>
<li>index.js:</li> Arquivo principal que configura o servidor Express e define os endpoints da API.
<li>servico/servico.js:</li> Contém funções para validar o ano e buscar o fato histórico correspondente.
<li>dados/fatos.js:</li> Arquivo de dados que contém uma lista de fatos históricos com seus anos correspondentes.
</ul>

## Como Usar
Instale as dependências do projeto:
<ul>
<li>package.json:</li>
npm init -y (configure o arquivo)

<li>express:</li>
npm install express --save

<li>Inicie o servidor:</li>
node index.js

<li>a mensagsem:</li> "O servidor será iniciado na porta 8080 por padrão." Aparecera no terminal.
</ul> <br>

## Acesse a API:

Para buscar um fato histórico específico, envie uma requisição GET para http://localhost:8080/?ano=YYYY, onde YYYY é o ano desejado.

Exemplo de resposta para uma requisição válida:

json<br>
{<br>
  "fato": "Ocorre a quebra da bolsa de valores de Nova York."<br>
}<br>
Exemplo de resposta para uma requisição inválida:<br>

json<br>
{<br>
  "erro": "Parâmetro ano inválido"<br>
}<br>


## Observações
<ul>
<li>Este projeto é apenas um exemplo educacional e pode não contemplar todas as boas práticas de desenvolvimento de APIs.</li>
<li>Os dados históricos foram simplificados e podem não refletir totalmente a realidade dos eventos.</li>
<li>Sinta-se à vontade para modificar e expandir este projeto de acordo com suas necessidades.</li>
</ul>

![EwanMcgregorGIF](https://github.com/ErikaMendes89/projeto-api-fatos-historicos/assets/95776659/4dacc1f6-0a52-4e26-aeca-4df95139819b)


