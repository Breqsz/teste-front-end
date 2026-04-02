# Teste front-end — Econverse

Vitrine desenvolvida em **React**, **TypeScript** e **Sass**, fiel ao layout proposto no desafio.

A listagem de produtos é baseada em um **JSON público** e, ao clicar em um item, é exibido um **modal** com mais detalhes.

Sem uso de bibliotecas de componentes prontas.

## 📌 Contato

| Campo | Informação |
| --- | --- |
| **Nome** | Guilherme Rocha Bianchini |
| **E-mail** | guirochabianchini@gmail.com |
| **WhatsApp** | +55 (34) 9 9919-4509 |
| **LinkedIn** | https://www.linkedin.com/in/guilhermebreq/ |
| **Portfólio** | https://breq.com.br |
| **Projeto online** | https://frontendbreq.netlify.app |

---

## ⚠️ Failed to fetch (CORS)

A requisição para o endpoint:

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

retorna **200 OK**, porém o navegador bloqueia o acesso por **CORS**, pois a API não possui o header `Access-Control-Allow-Origin` compatível com a origem do deploy.

Ou seja, a requisição funciona no servidor, mas o front-end não consegue acessar os dados em produção.

### 🚫 Decisão

Não foi implementado proxy (Netlify Functions ou backend), pois foge do escopo do teste, que é focado em front-end.

---

## ⚙️ Sobre o `.env`

O projeto versiona `.env.development` e `.env.production` com a variável:

`VITE_PRODUCTS_URL`

Como se trata de um dado público, isso foi feito para facilitar a execução do projeto sem configuração adicional.

Em ambiente real, o ideal é não versionar `.env`, utilizando `.env.example` e variáveis seguras no ambiente de deploy.

---

## 📋 Requisitos

- Node.js 20+
- npm

## 🚀 Instalação e execução

```bash
npm install

npm run dev          # ambiente de desenvolvimento
npm run build        # build de produção (dist/)
npm run preview      # visualizar build local
npm test             # testes com Vitest
npm run dev:test     # testes em watch
npm run lint         # ESLint
```

## 🧠 Observações técnicas

- Em desenvolvimento, o **proxy do Vite** contorna CORS.
- Em produção, foi utilizado **mock local**.

## 🖼️ Assets

`public/images/`

## 📎 Referências

- **Figma:** [Teste Front-End Jr](https://www.figma.com/design/pl8ccQrjQjEFIdoZuAPu1E/Teste-Front-End-Jr--c%C3%B3pia-?node-id=0-1)
- **JSON:** [produtos.json](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

Envio do teste (instruções originais): fork no GitHub e link para **julia.gardiano@econverse.com.br**, assunto **Teste Vaga FrontEnd**.
