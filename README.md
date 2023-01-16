<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
npm install - instalar o projeto

npm run seed - popular tabelas de devices

npm run:dev - executar o projeto



## Endpoints disponiveis

### Criar um usuário:

```
@Post('/cadastro')

Body: {
	"nome":"teste",
	"email":"teste@gmail.com",
	"urlFoto":"www.google.com",
	"senha":"Cidade@01",
	"confirmacaoSenha":"Cidade@01",
	"endereco":{
		"CEP":"92425678",
		"endereco":"av imigrantes",
		"numero":"197",
		"bairro":"sao jose",
		"cidade":"canoas",
		"estado":"RS"
	}
}
```

**Resultado:**

```
{
	"mensagem": "usuario criado com sucesso"
}
```

### Efetuar Login:

```
POST: http://localhost:3000/auth/login

Body: {
	"email": "usuario2@teste.com.br",
	"senha": "Cidade@01"
}
```

**Resultado:**

```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsInByaW1laXJvTm9tZSI6ImNhZXRhbm8iLCJ1cmxGb3RvIjoid3d3Lmdvb2dsZS5jb20iLCJlbWFpbCI6ImNhZXRhbm9AZ21haWwuY29tIiwiaWF0IjoxNjczODIyODAzLCJleHAiOjE2NzM4Mjg4MDN9.3UotgG8V35QI11tREr07NgDov-nQQgLlXr9hjZjcH-4"
}
```

### Buscar um usuário:

```
GET: localhost:3000/users/:id
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
{
	"urlFoto": "www.google.com",
	"nome": "teste",
	"email": "sca5esssassa3ddfscddstanssaga@gmail8.com",
	"endereco": {
		"id": 9,
		"CEP": 92425678,
		"endereco": "av imigrantes",
		"numero": 197,
		"bairro": "sao jose",
		"cidade": "canoas",
		"estado": "RS",
		"complemento": null
	}
}
```

### Buscar devices disponiveis

```
PUT: http://localhost:3000/devices
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
[
	{
		"id": 73,
		"nome": "Lâmpada LED",
		"type": "Energia",
		"madeBy": "Intelbras",
		"urlFoto": "https://intelbras.vteximg.com.br/arquivos/ids/160115-1000-1000/ews_407_front_cor.jpg?v=637564221001370000"
	},
	{
		"id": 74,
		"nome": "Interruptor conector inteligente",
		"type": "Energia",
		"madeBy": "Intelbras",
		"urlFoto": "https://intelbras.vteximg.com.br/arquivos/ids/161376-1000-1000/ews_301_front_cima.jpg?v=637581675693070000"
	},
	{
		"id": 75,
		"nome": "Interruptor inteligente soquete",
		"type": "Energia",
		"madeBy": "Intelbras",
		"urlFoto": "https://intelbras.vteximg.com.br/arquivos/ids/160121-800-800/ews_400_front2.jpg?v=637564240561700000"
	},
	...
```

### Buscar dispositivos do usuario

```
GET: localhost:3000/users/devices/:id
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
{
	"id": 10,
	"nome": "caetano",
	"urlFoto": "www.google.com",
	"email": "caetano@gmail.com",
	"senha": "$2b$10$0ayqgbMtV4Ock9osO1C2U.RU2fJvvpsN7jZBcuWW0nX9npqUoHv9G",
	"telefone": null,
	"salt": "$2b$10$0ayqgbMtV4Ock9osO1C2U.",
	"createdAt": "2023-01-15T22:45:31.467Z",
	"user": [
		{
			"id": 59,
			"local": "fabrica",
			"is_on": true,
			"room": "sala",
			"virtual_id": "Gremio@01a",
			"ip_address": "192.168.0.10",
			"mac_address": "B0-52-16-25-15-C0",
			"signal": "-30 Dbmv"
		},
		{
			"id": 60,
			"local": "fabrica",
			"is_on": true,
			"room": "sala",
			"virtual_id": "Gremio@01a",
			"ip_address": "192.168.0.10",
			"mac_address": "B0-52-16-25-15-C0",
			"signal": "-30 Dbmv"
		}
	]
}
```



### Detalha dispositivo

```
GET: localhost:3000/users/details/:id_dispositivo
Headers: {
	"Authorization": "Bearer token"
}
```

**Resultado:**

```
{
	"id": 60,
	"local": "fabrica",
	"is_on": true,
	"room": "sala",
	"virtual_id": "Gremio@01a",
	"ip_address": "192.168.0.10",
	"mac_address": "B0-52-16-25-15-C0",
	"signal": "-30 Dbmv",
	"device": {
		"id": 75,
		"nome": "Interruptor inteligente soquete",
		"type": "Energia",
		"madeBy": "Intelbras",
		"urlFoto": "https://intelbras.vteximg.com.br/arquivos/ids/160121-800-800/ews_400_front2.jpg?v=637564240561700000"
	}
}
```

### Adicionar dispositivos ao usuário:

```
POST: localhost:3000/users/vinculaDevice/:idUsuario/:idDispositivo
Headers: {
	"Authorization": "Bearer token"
}

Body : 
{
	"local":"fabrica",
	"is_on":true,
	"room":"sala",
	"virtual_id":"Gremio@01a",
	"ip_address":"192.168.0.10",
	"mac_address":"B0-52-16-25-15-C0",
	"signal":"-30 Dbmv"
}

```

**Resultado:**

```
{
	"menssagem": "Dispositivo adicionado com sucesso!"
}
```

### Alteracao de senha

```
PUT: localhost:3000/users/:id
Headers: {
	"Authorization": "Bearer token"
}

Body :{
	"senha":"Cidade@04",
	"confirmacaoSenha":"Cidade@04"
}
```

**Resultado:**

```
{
	"mensagem": "Senha alterada com sucesso!"
}
```

