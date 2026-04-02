# Teste front-end — Econverse

Vitrine em React, TypeScript e Sass, fiel ao layout do desafio. Lista de produtos via JSON público; clique no card abre um modal com detalhes. Sem biblioteca de componentes pronta.

## Contato (preencha)

| | |
|---|---|
| **Nome** | Guilherme Rocha Bianchini |
| **E-mail** | guirochabianchini@gmail.com|
| **WhatsApp** | +55 (34) 9 9919-4509 |
| **LinkedIn** | https://www.linkedin.com/in/guilhermebreq/|
| **Portfólio** | https://breq.com.br |

---

## Por que o `.env` está no repositório

Este projeto versiona `.env.development` e `.env.production` com a variável `VITE_PRODUCTS_URL` (URL do JSON — dado público, não é segredo).

**Motivo aqui:** quem clonar o repo ou rodar o build em CI consegue subir o projeto sem adivinhar variáveis.

**Na vida real** isso costuma ser evitado: credenciais e URLs internas não vão para o Git; usa-se `.env.example` (sem valores sensíveis), variáveis no painel da hospedagem ou um gerenciador de secrets. Sei que commitar `.env` não é o ideal em produção — foi uma escolha consciente **só** para este contexto.

---

## Requisitos

- Node.js 20+
- npm

## Instalação e scripts

```bash
npm install
npm run dev          # desenvolvimento
npm run build        # build de produção → pasta dist/
npm run preview      # servir o build localmente
npm test             # testes (Vitest)
npm run dev:test     # testes em modo watch
npm run lint         # ESLint
```

Em **dev**, a URL do JSON é relativa e o proxy do Vite (`vite.config.ts`) encaminha para `app.econverse.com.br`, contornando CORS. No **build**, vale o `.env.production` com a URL absoluta do `produtos.json`.

## Assets

Imagens estáticas em `public/images/` (ícones do header, categorias, `hero-promo.jpg`, `partners-bg.jpg`, favicon, etc.). Os nomes precisam bater com o que o código e o Sass referenciam.

## Referências do desafio

- [Figma](https://www.figma.com/design/pl8ccQrjQjEFIdoZuAPu1E/Teste-Front-End-Jr--c%C3%B3pia-?node-id=0-1)
- [JSON de produtos](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)

Envio do teste (instruções originais): fork no GitHub e link para **julia.gardiano@econverse.com.br**, assunto **Teste Vaga FrontEnd**.
