<h1 align="center">Welcome to tracking-api 👋</h1>
<p>
<a href="https://www.linkedin.com/in/alexsandrogomes/" target="_blank">
    <img alt="Alexsandro Gomes" src="https://img.shields.io/badge/-Alexsandro Gomes-000?style=flat&logo=Linkedin&logoColor=5965e0" />
  </a>
  <a href="https://www.npmjs.com/package/tracking-api" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/tracking-api.svg">
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> An API for tracking requests using post office services, calculating prices is deadlines and search postal code

## Building

You'll need [Node.js](https://nodejs.org) installed on your computer in order to build this app.

Access your preferred terminal, perform the steps below to start the application.

```bash
# Repository
git clone https://github.com/Alexsandrogms/tracking-api.git

# Directory
$ cd tracking-api/

# Install Dependencies
$ yarn install # or npm install

# Run application
$ yarn start # npm run start

# Run development 
$ yarn dev # npm run dev

```
## Usage

Link from api deploy in Heroku: https://tracking-api-srv.herokuapp.com/api/

Request for a zip code
> GET api/postal-code/:code

```json
// GET http://localhost:3333/api/postal-code/06385125

> Response:

{
  "cep": "06385-125",
  "logradouro": "Rua Sete de Setembro",
  "complemento": "",
  "bairro": "Parque Roseira",
  "localidade": "Carapicuíba",
  "uf": "SP",
  "ibge": "3510609",
  "gia": "2550",
  "ddd": "11",
  "siafi": "6313"
}

```

Request price and delivery time of an order
> POST api/postal-code

```json
// POST http://localhost:3333/api/price-term

> Request example 

body {
  "sCepOrigem":  "81200100",
  "sCepDestino":  "21770200",
  "nCdServico":  ["04014", "04510"],
  "nCdFormato":  "1",
  "nVlComprimento":  "20",
  "nVlAltura":  "20",
  "nVlLargura":  "20",
  "nVlDiametro":  "0",
  "nVlPeso":  "1",
}

> Attributes
- sCepOrigem: string/number ["Postal code"],
- sCepDestino: string/number ["Destination zip code"],
- nCdServico: array["string"]
[
  "04014 = SEDEX at sight", 
  "04065 = SEDEX viewing payment on delivery", 
  "04510 = PAC at sight",
  "04707 = PAC viewing payment on delivery",
  "40169 = SEDEX12 (viewing and billing)"
  "40215 = SEDEX 10 (viewing and billing)",
  "40290 = SEDEX Today retail",
],
- nCdFormato: number 
[
  "1 = Box/Package Format",
  "2 = Roll/Prism format",
  "3 = envelope",
],
- nVlComprimento: number ["Order length (including packaging) in centimeters"],
- nVlAltura: number ["Order height (including packaging) in centimeters.If the format is envelope, please enter zero (0)"],
- nVlLargura: number ["Order width (including packaging) in centimeters"],
- nVlDiametro: number ["Diâmetro da encomenda (incluindo embalagem), em centímetros"],
- sCdMaoPropria?: sim/não ["Indicates whether the order will be delivered with the additional hand service"],
- nVlValorDeclarado: number ["Indicates whether the order will be delivered with the additional value declared value.In this field the desired declared value should be presented in Reais"],
- sCdAvisoRecebimento?: sim/não ["Indicates whether the order will be delivered with the additional hand service"]

> Response:

[
  {
    "Codigo": "04014",
    "Valor": "25,80",
    "PrazoEntrega": "8",
    "ValorSemAdicionais": "25,80",
    "ValorMaoPropria": "0,00",
    "ValorAvisoRecebimento": "0,00",
    "ValorDeclarado": "0,00",
    "EntregaDomiciliar": "S",
    "EntregaSabado": "N",
    "Erro": "0"
  },
  {
    "Codigo": "04510",
    "Valor": "24,30",
    "PrazoEntrega": "10",
    "ValorSemAdicionais": "24,30",
    "ValorMaoPropria": "0,00",
    "ValorAvisoRecebimento": "0,00",
    "ValorDeclarado": "0,00",
    "EntregaDomiciliar": "S",
    "EntregaSabado": "N",
    "Erro": "0"
  }
]

```

Request Tracking for one or more requests - only for post office
> GET api/tracking/:code

```json
// GET http://localhost:3333/api/tracking/PX011111111BR

> Response: 

[
  {
    "status": "Objeto postado após o horário limite da unidade",
    "data": "09/03/2021",
    "hora": "18:55",
    "local": "Agência dos Correios - Santo Andre / SP"
  },
  {
    "status": "Objeto em trânsito - por favor aguarde",
    "data": "10/03/2021",
    "hora": "09:13",
    "origem": "Agência dos Correios - Santo Andre / SP",
    "destino": "Unidade de Tratamento - Cajamar / SP"
  },
  {
    "status": "Objeto em trânsito - por favor aguarde",
    "data": "11/03/2021",
    "hora": "05:42",
    "origem": "Unidade de Tratamento - Cajamar / SP",
    "destino": "Unidade de Tratamento - Salvador / BA"
  },
  {
    "status": "Objeto em trânsito - por favor aguarde",
    "data": "17/03/2021",
    "hora": "00:14",
    "origem": "Unidade de Tratamento - Salvador / BA",
    "destino": "Agência dos Correios - Santana / BA"
  },
]

```

For more details Check the tool [correios-brasil](https://www.npmjs.com/package/correios-brasil)

## Author

👤 **Alexsandro Gomes**

* Website: https://www.linkedin.com/in/alexsandrogomes/
* Github: [@alexsandrogms](https://github.com/alexsandrogms)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/alexsandrogomes\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/alexsandrogomes\/)


## Contribuindo 🤝

* Fork!
* Create your resource branch: git checkout -b my-new-feature
* Compromise your changes: git commit -am 'Add some feature'
* Push to the branch: git push origin my-new-feature
* Send a traction request

## Show your support

Give a ⭐️ if this project helped you!

***
This project is under the MIT license. Read morea 📗 [LICENÇA](https://github.com/Alexsandrogms/tracking-api/blob/main/LICENSE) for details.<br>