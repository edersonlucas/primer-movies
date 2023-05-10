<h1 align="center">
    <img alt="PRIMER MOVIE" src="screenshots/banner.png" width="100%" />
    <br>
</h1>
<h4 align="center">
  Bem-vindo(a) ao repositório da aplicação Primer Movie
</h4>

## 📋 Objetivo

Objetivo da aplicação é replicar um design de uma locadora de filmes pré-definido no Figma.

---

## 🚀 Tecnologias Utilizadas

- NextJS
- SwiperJS
- TypeScript
- TailwindCSS
- Axios
- Phosphor-react
- ESLint
- Prettier
- Docker
- Cypress

---

## 👁Deploy da aplicação

**link:** https://primer-movies.vercel.app/movies/1

---

## 🛠️ Como instalar

**#Clonar este repositório**

```
git clone https://github.com/edersonlucas/primer-movies
```

**#Entre na pasta do projeto**

```
cd primer-movies
```

---

⚠️**#Renomeie o arquivo ".env-example" que está na pasta raiz do projeto para ".env"**

⚠️**#Renomeie o arquivo "cypress.env.example.json" que está na pasta raiz do projeto para "cypress.env.json"**

---

#### 🖥️ Rodando sem Docker

⚠️ **Atenção**: Você precisa ter o Node.js LTS v16 (ou qualquer versão superior)

**#Instalando as dependencias**

```
npm install
```

**#Rodando o aplicação**

```
npm run dev
```

**#Acesse a aplicação no seguinte endereço**

```
http://localhost:3000/movies/1
```

#### **🧪Rodando os testes**

 ⚠️**Atenção**: Você precisa ter o Cypress em sua maquina para rodar os testes.

Para instalar no linux, execute:

```
apt-get update && apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```

 Para para rodar os testes, execute:

```
npm run test:e2e:open
```

ou

```
npm run test:e2e:run
```

---

#### 🐋 Rodando com Docker

**Atenção**: Você precisa ter o docker e o docker-compose instalados em sua máquina.

**#Rode o seguinte comando para subir o container (Pode demorar alguns minutos ☕)**

```
docker compose up --build
```

**#Acesse a aplicação no seguinte endereço**

```
http://localhost:3000/movies/1
```

🔴O comando **"docker exec -it primer-movies-app /bin/sh"** serve para você se conectar com o terminal do container. Depois que já estiver conectado não precisa mais usar😉

```
docker exec -it primer-movies-app /bin/sh
```

#### **🧪Rodando os testes**

 Para para rodar os testes, execute:

```
npm run test:e2e:open
```

ou

```
npm run test:e2e:run
```

---

#### [🚨](https://emojiterra.com/pt/luz-giratoria/) Em caso de dúvida, entre em contato.

[Email](edersonlucas@outlook.com.br)

[Linkedin](https://www.linkedin.com/in/edersonlucas/)

---

Desenvolvido por: [Ederson Lucas](https://www.linkedin.com/in/edersonlucas/)
