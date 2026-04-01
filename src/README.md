# Teste Front-End — Econverse

Implementação em **React**, **TypeScript** e **Sass** da vitrine conforme o layout do teste (referência Figma). Os produtos vêm do JSON público da Econverse; ao clicar em um item, abre um **modal** com nome, preço, descrição e foto. **Sem** bibliotecas de UI (Bootstrap, etc.).

## Pré-requisitos

- Node.js 20 ou superior
- npm

## Instalação

Na **raiz do projeto** (pasta onde está o arquivo `package.json`):

```bash
npm install
```

Se você ainda tiver uma pasta vazia `teste-front-end-main` dentro da raiz (resto de zip antigo), pode apagá-la manualmente depois de fechar programas que estejam usando essa pasta.

### Imagens do layout (banner e parceiros)

Arquivos em `public/images/`:

- `hero-promo.jpg` — fundo do hero (“Venha conhecer nossas promoções”)
- `partners-bg.jpg` — fundo dos banners “Parceiros”

Você pode trocar por suas exportações do Figma mantendo esses nomes (veja `public/images/README.txt`).

## Rodar em desenvolvimento

```bash
npm run dev
```

Em desenvolvimento, `VITE_PRODUCTS_URL` aponta para uma rota relativa e o **proxy do Vite** (`vite.config.ts`) repassa `/teste-front-end/...` para `app.econverse.com.br`, evitando CORS no navegador.

## Build de produção

```bash
npm run build
```

Saída em `dist/`. Em produção, use a URL absoluta do JSON em `.env.production` (`VITE_PRODUCTS_URL`). Se a API não liberar CORS para o seu domínio, será preciso proxy no servidor ou mesmo host.

## Testes

Execução única (CI):

```bash
npm test
```

Modo desenvolvimento dos testes (Vitest em watch — reexecuta ao salvar arquivos):

```bash
npm run dev:test
```

Equivalente: `npm run test:watch`.

## Lint

```bash
npm run lint
```

## Preview do build

```bash
npm run preview
```

## Variáveis de ambiente

| Arquivo            | Função                          |
| ------------------ | ------------------------------- |
| `.env.development` | URL relativa + proxy local      |
| `.env.production`  | URL absoluta do `produtos.json` |

## Envio do teste (instruções originais)

- Fazer fork do repositório para a sua conta no GitHub.
- Enviar o link para **julia.gardiano@econverse.com.br** com o assunto **Teste Vaga FrontEnd**.

Fontes oficiais do desafio: [Figma](https://www.figma.com/design/pl8ccQrjQjEFIdoZuAPu1E/Teste-Front-End-Jr--c%C3%B3pia-?node-id=0-1) e [JSON de produtos](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json).
