# Desafio AppCoders

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)


**O desafio consiste em implementar um sistema que auxilie no cadastro e gestão dos inquilinos e unidades de um condomínio.**

O Sistema realiza as seguintes operações:

-  Cadastro de inquilinos
-  Visualização dos inquilinos cadastrados
- Cadastro de  Unidades
- Visualização das unidades cadastradas
- Cadastro de despesas
- Edição de despesas
- Visualização das despesas
- Filtro por unidade
- Filtro por despesa com fatura vencida

### Instruções para rodar o projeto

Requisitos necessários:

- **Node >= 16v**
-  **Npm**
- **Mysql**

Faça o clone do projeto e rode o comando `npm install` para instalar as dependências.

~~~javascript
npm install
~~~

Subir o servidor atravéz do comando `npm run dev` disponibilizará a porta 5000.

~~~javascript
npm run dev
~~~



Configurar a base de dados criando um arquivo `.env` na raiz do projeto, e seguindo o exemplo das variáveis de ambiente que estão no arquivo `.env.example`



Rodar o comando `npm run typeorm migration:run ` para gerar as migrations na base de dados.

~~~javascript
npm run typeorm migration:run
~~~

#### Testes
Rodar os teste unitários

~~~javascript
npm run test
~~~

### Endpoints da aplicação

### Rotas de Inquilinos

#### Criar um inquilino:

~~~javascript
[POST] <http://localhost:${port}/inquilinos>
~~~

Para criar inquilino `/inquilinos`.

Exemplo:



**body**
~~~javascript
{
	"nome": "Júlia Alexia",
	"idade": 38,
	"sexo": "feminino",
	"telefone": "498767-0927",
	"email": "julia@gmail.com"
}
~~~

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
{
	"nome": "Júlia Alexia",
	"idade": 38,
	"sexo": "feminino",
	"telefone": "498767-0927",
	"email": "julia@gmail.com",
	"id": "79a7dcbc-3dd7-461b-b151-9c542119cded",
	"created_At": "2022-01-23T02:25:21.000Z",
	"updated_At": "2022-01-23T02:25:21.000Z"
}
~~~

![Maintenance](https://img.shields.io/badge/BadRequest-400-red.svg)

~~~javascript
{
	"status": "error",
	"message": "Email address already used."
}
~~~

#### Listar os inquilinos cadastrados:
~~~javascript
[GET] <http://localhost:${port}/inquilinos>
~~~
Para listar os inquilinos `/inquilinos`. Retorna um `json` com os inquilinos cadastrados.
exemplo:

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
[
	{
		"id": "79a7dcbc-3dd7-461b-b151-9c542119cded",
		"nome": "Júlia Alexia",
		"idade": 38,
		"sexo": "feminino",
		"telefone": "498767-0927",
		"email": "julia@gmail.com",
		"created_At": "2022-01-23T02:25:21.000Z",
		"updated_At": "2022-01-23T02:25:21.000Z"
	},
	{
		"id": "a125310b-29bd-4ab4-886e-6a543835ac68",
		"nome": "Juca De Santos",
		"idade": 45,
		"sexo": "masculino",
		"telefone": "4798855-8785",
		"email": "juca@gmail.com",
		"created_At": "2022-01-19T01:03:47.000Z",
		"updated_At": "2022-01-19T01:03:47.000Z"
	},
]
~~~

### Rotas de unidades

#### Criar uma unidade:

~~~javascript
[POST] <http://localhost:${port}/inquilinos>
~~~

Para criar inquilino `/unidades`.

Exemplo:

**body**
~~~javascript
{
	"identificacao": "Green Ville",
	"proprietario": "Benedito De Paula",
	"condominio": 15,
	"endereco": "Av dos Estados N 2050"
}
~~~

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
	{
		"id": "7ada3c51-0565-4d07-9248-7c53e5859842",
		"identificacao": "Green Ville",
		"proprietario": "Benedito De Paula",
		"condominio": 15,
		"endereco": "Av dos Estados N 2050",
		"created_At": "2022-01-23T02:52:30.000Z",
		"updated_At": "2022-01-23T02:52:30.000Z"
	},
~~~

![Maintenance](https://img.shields.io/badge/BadRequest-400-red.svg)

~~~javascript
{
	"status": "error",
	"message": "Unity identify already exists."
}
~~~

#### Listar as unidades cadastrados:
~~~javascript
[GET] <http://localhost:${port}/unidades>
~~~
Para listar as unidades `/unidades`. Retorna um `json` com as unidades cadastradas.
exemplo:

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
[
	{
		"id": "7ada3c51-0565-4d07-9248-7c53e5859842",
		"identificacao": "Green Ville",
		"proprietario": "Benedito De Paula",
		"condominio": 15,
		"endereco": "Av dos Estados N 2050",
		"created_At": "2022-01-23T02:52:30.000Z",
		"updated_At": "2022-01-23T02:52:30.000Z"
	},
	{
		"id": "de87adf3-b958-4f8f-99af-3e38ae1330bd",
		"identificacao": "Alvorada",
		"proprietario": "João sem pão",
		"condominio": 12,
		"endereco": "Av Brasil N 1000",
		"created_At": "2022-01-19T23:26:20.000Z",
		"updated_At": "2022-01-19T23:26:20.000Z"
	}
]
~~~

### Rotas de despesas por unidade

#### Criar uma despesa:

~~~javascript
[POST] <http://localhost:${port}/despesas>
~~~

Para criar inquilino `/despesas`.

Exemplo:

**body**
~~~javascript
{
	"descricao": "Comprar Sofás novos hall de entrada",
	"tipo_despesa": "Estetica",
	"valor": 2250,
	"vencimento_fatura": "09/04/2022",
	"status_pagamento": false,
	"unidade_id": "de87adf3-b958-4f8f-99af-3e38ae1330b"
}
~~~

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
	{
		"id": "5702f131-6bd7-482e-8e29-61d0412e5479",
		"descricao": "Comprar Sofás novos hall de entrada",
		"tipo_despesa": "Estetica",
		"valor": "2250.00",
		"vencimento_fatura": "2022-04-09T00:00:00.000Z",
		"status_pagamento": false,
		"unidade_id": "de87adf3-b958-4f8f-99af-3e38ae1330bd",
		"created_At": "2022-01-23T00:55:50.000Z",
		"updated_At": "2022-01-23T00:55:50.000Z"
	},
~~~

![Maintenance](https://img.shields.io/badge/BadRequest-400-red.svg)

~~~javascript
{
	"status": "error",
	"message": "Unidade does not exist."
}
~~~

#### Listar as despesas cadastradas:
~~~javascript
[GET] <http://localhost:${port}/despesas>
~~~
Para listar as despesas `/despesas`. Retorna um `json` com as despesas cadastradas por unidade.
exemplo:

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
[
	{
		"id": "1d9e6b18-cd89-4962-a539-b28c0ab4e4c0",
		"descricao": "Concertar elevador",
		"tipo_despesa": "Manutenção",
		"valor": "250.85",
		"vencimento_fatura": "2022-02-03T00:00:00.000Z",
		"status_pagamento": false,
		"unidade_id": "565d52c8-d996-4370-b4d8-aea01a53ab5e",
		"created_At": "2022-01-20T01:39:05.000Z",
		"updated_At": "2022-01-20T01:39:05.000Z"
	},
	{
		"id": "5702f131-6bd7-482e-8e29-61d0412e5479",
		"descricao": "Comprar Sofás novos hall de entrada",
		"tipo_despesa": "Estetica",
		"valor": "2250.00",
		"vencimento_fatura": "2022-04-09T00:00:00.000Z",
		"status_pagamento": false,
		"unidade_id": "de87adf3-b958-4f8f-99af-3e38ae1330bd",
		"created_At": "2022-01-23T00:55:50.000Z",
		"updated_At": "2022-01-23T00:55:50.000Z"
	},
]
~~~

####  Listar uma despesa:
~~~javascript
[GET] <http://localhost:${port}/despesas/${id}>
~~~
para listar uma despesa `/despesa/id`, recebe um id como parâmetro. retorna a despesa.

Exemplo:

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
{
	"id": "5702f131-6bd7-482e-8e29-61d0412e5479",
	"descricao": "Comprar Sofás novos hall de entrada",
	"tipo_despesa": "Estetica",
	"valor": "2250.00",
	"vencimento_fatura": "2022-04-09T00:00:00.000Z",
	"status_pagamento": false,
	"unidade_id": "de87adf3-b958-4f8f-99af-3e38ae1330bd",
	"created_At": "2022-01-23T00:55:50.000Z",
	"updated_At": "2022-01-23T00:55:50.000Z"
}
~~~

![Maintenance](https://img.shields.io/badge/BadRequest-400-red.svg)

~~~javascript
{
	"status": "error",
	"message": "Despesa not found."
}
~~~


#### Atualizar uma despesa:

~~~javascript
[PUT] <http://localhost:${port}/despesas/${id}>
~~~

para atualizar `/despesas/id`, recebe um id como parâmetro. retorna a despesa atualizada

Exemplo:

**body**

~~~javascript
{
	"descricao": "Comprar Sofás novos hall de entrada",
	"tipo_despesa": "Estetica",
	"valor": 5530,
	"vencimento_fatura": "09/03/2022",
	"status_pagamento": false,
	"unidade_id": "de87adf3-b958-4f8f-99af-3e38ae1330bd"
}
~~~

**retorno**

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
{
	"id": "99d39d01-f555-454b-bcfd-34b1e88caec8",
	"descricao": "Comprar Sofás novos hall de entrada",
	"tipo_despesa": "Estetica",
	"valor": 5530,
	"vencimento_fatura": "2022-03-09",
	"status_pagamento": false,
	"unidade_id": "de87adf3-b958-4f8f-99af-3e38ae1330bd",
	"created_At": "2022-01-20T01:59:04.000Z",
	"updated_At": "2022-01-23T01:40:29.000Z"
}
~~~

![Maintenance](https://img.shields.io/badge/BadRequest-400-red.svg)

~~~javascript
{
	"status": "error",
	"message": "Despesa not found."
}
~~~

#### Filtrar despesa com fatura vencida:

~~~javascript
[GEt] <http://localhost:${port}/despesas/filter>
~~~

Exemplo:

**body**

~~~javascript
{
 "data": "29/03/2022"
}
~~~

**retorno**

![Generic badge](https://img.shields.io/badge/OK-200-<COLOR>.svg)

~~~javascript
[
	{
		"id": "1d9e6b18-cd89-4962-a539-b28c0ab4e4c0",
		"descricao": "Concertar elevador",
		"tipo_despesa": "Manutenção",
		"valor": "250.85",
		"vencimento_fatura": "2022-02-03T00:00:00.000Z",
		"status_pagamento": false,
		"unidade_id": "565d52c8-d996-4370-b4d8-aea01a53ab5e",
		"created_At": "2022-01-20T01:39:05.000Z",
		"updated_At": "2022-01-20T01:39:05.000Z"
	},
	{
		"id": "99d39d01-f555-454b-bcfd-34b1e88caec8",
		"descricao": "Comprar Sofás novos hall de entrada",
		"tipo_despesa": "Estetica",
		"valor": "5530.00",
		"vencimento_fatura": "2022-03-09T00:00:00.000Z",
		"status_pagamento": false,
		"unidade_id": "de87adf3-b958-4f8f-99af-3e38ae1330bd",
		"created_At": "2022-01-20T01:59:04.000Z",
		"updated_At": "2022-01-23T12:58:36.000Z"
	}
]
~~~
