<div align="center">
  <h1>
    API — NLW Heat 🔥
  </h1>

  > Back-end API da aplicação do mural de comentários do DoWhile 2K21, construída no evento **Next Level Week Heat** da Rocketseat.
</div>

## 💡 Você vai precisar

- Primeiramente de uma xícara de ☕ bem quentinho;
- [Node JS](https://nodejs.org/) instalado em sua máquina;
- Um [OAuth App](https://github.com/settings/developers) configurado no Github;

## 🎉 Começando

Clone o repositório:

```bash
git clone https://github.com/MattZ6/nlw-heat-node
```

Adentre a pasta do projeto:

```bash
cd nlw-heat-node
```

Instale as dependências:

```bash
yarn
```

## ⚙ Configurando

Com o **OAuth App criado em sua conta no Github**, você deve gerar um arquivo `.env` na raiz do projeto e preencher os valores das variáveis.

Copiar o arquivo `.env.example` para um `.env`:

```bash
cp .env.example .env
```

Preencha os valores das variáveis:

```yml
GITHUB_OAUTH_CLIENT_ID      = # Client ID do seu OAuth App.
GITHUB_OAUTH_CLIENT_SECRET  = # Client Secret para acesso ao seu OAuth App (caso você não tenha, pode criar um novo).

JWT_SECRET                  = # Alguma string aleatória/hash pra pode usar como secret na hora de gerar e validar o access token da API.
```


## 🔥 Executando

Antes de tudo você precisa rodar as migrations. Para isso, execute o comando:

```bash
yarn prisma migrate dev
```

A partir disso você pode executar o seguinte comando para iniciar a aplicação:

```bash
yarn dev
```

## 🤝 Contribuição

Contribuições, issues e novas features são sempre bem-vindas! <br/>
Fique à vontade para explorar as [issues](https://github.com/MattZ6/nlw-heat-node/issues).

## 👨‍🎤 Autor

Eu mesmo, [Matheus](https://github.com/MattZ6)! 👋
<br />
Quer conversar? [Chama aqui](https://www.linkedin.com/in/mattz6)!

## 📜 Licença

[Licença MIT](https://github.com/MattZ6/nlw-heat-node/blob/main/LICENSE.md) © 2021 [Matheus Felipe Zanin](https://github.com/MattZ6)

___

<div align="center">
  <strong>NLW Heat 🔥</strong>
</div>
