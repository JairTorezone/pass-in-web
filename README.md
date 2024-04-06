# <h1 align="center" > Pass-in-web </h1>

<p align="justify">
Esse projeto é o front-end de uma aplicação web que facilita o gerenciamento de participantes de um evento presencial (app da organização do evento). <br/>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<!-- Licença MIT -->
<p align="center"><a href="https://github.com/JairTorezone/pass-in-web/commit/f6b31d182264f6aa358a419ebc6468fe36216f6c">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000"></a>
</p>

<br>

<!-- Imagens do projeto -->
<p align="center"> Imagens da aplicação Pass-in-web</p>

<p >
  <img alt="diagrama da aplicação" src="https://glitter-crop-17e.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4b19087e-4c86-4f7f-8b98-207baca2a4c0%2Fbc1154a1-bc89-441f-b36a-dd4969cb329c%2Fpassinweb.jpg?table=block&id=8eb3d6aa-f83b-48c2-8673-019ba2a4400b&spaceId=4b19087e-4c86-4f7f-8b98-207baca2a4c0&width=1360&userId=&cache=v2" width="80%">
</p>

## 🚀 Tecnologias

<p align="left">
  <code><img height="23" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML">HTML</code>
  <code><img height="23" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" alt="CSS">CSS</code>
  <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="JavaScript">JavaScript</code>
  <code><img height="25" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" alt="React">React</code>
  <code><img height="25" src="https://i.postimg.cc/BbFrvMNM/vite-js.png" alt="ViteJS">ViteJS</code>
  <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="TypeScript"> TypeScript</code>
  <code><img height="24" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png" alt="TailWind"> TailWindCSS</code>
  <code><img height="23" src="https://github.com/dcastil/tailwind-merge/raw/v2.2.2/assets/logo.svg" alt="TailWind Merge"> TailWind Merge</code>
  <code><img height="22" src="https://i.postimg.cc/NMDYcNJT/logo-lucide.png" alt="Lucide React"> Lucide React</code>
  <code><img height="26" src="https://fakerjs.dev/logo.svg" alt="FakerJS"> FakerJS</code>
  <code><img height="21" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="VS Code"> VS Code</code>
</p>

- React
- Jsx and fragment
- Hooks (useState, useEffect)
- Vite
- TypeScript
- TailwindCSS
- FakerJS
- DayJS
- Lucide React

<br>

<!-- Learnning session -->
<h3> 👩‍💻 Aprendizado </h3>
<table>
  <tr>
    <td>
      <li>HTML/ CSS </li>
      <li>React</li>
      <li>TypeScript</li>
      <li>Tailwind</li>
      <li>Tailwind Merge</li>
    </td>
    <td>
      <li>DayJS</li>
      <li>Lucide react</li>
      <li>Pagination</li>
      <li>Search</li>
      <li>Boas práticas</li>
    </td>
    <td>
      <li>React hooks</li>
      <li>URL state</li>
      <li>ComponentProps</li>
      <li>Desestruturação</li>
      <li>Deploy na Vercel</li>
    </td>
  </tr>
</table>

<br>

<!-- Estructure session -->
<h3> 🗃️ Estrutura de pastas </h3>

```
├── 📁 public: arquivos públicos
├── 📁 src: arquivos do projeto
│   ├── 📁 assets: arquivos de imagem
│   ├── 📁 components: pasta com componentes da aplicação
│   ├──├── 📁 table: componentes que compões a tabela
│   │   ├── Attendee-list.tsx
│   │   ├── Header.tsx
│   │   ├── Icon-button.tsx
│   │   ├── Nav-link.tsx
│   ├── App.tsx: arquivo que contém a aplicação
│   ├── index.css: arquivo de estilização com a inicialização do Tailwind
│   ├── main.tsx: arquivo com a inicialização do React
├── index.html: arquivo com a estrutura da aplicação
```

<br>

## 📁 Clonar

### Como baixar o repositório

```
# Versões Node / NPM

$ node -v
v20.10.0

$ npm -v
9.7.2

```

```bash
# Clonar o repositório
git clone https://github.com/JairTorezone/pass-in-web

# Acessar a pasta pass-in-web
cd pass-in-web
```

### ✅ Como executar a aplicação

```bash
# Instalar as dependências
npm install

# Executar a aplicação
npm run dev

# Acessar http://localhost:5173 no seu navegador.
```

<br>

## 💻 Projeto

O app pass-in-web Este projeto foi desenvolvido durante o evento Next Level Week (NLW) da Rocketseat. Ele consiste em uma aplicação que lista usuários cadastrados em eventos por meio da API criada durante o evento, utilizando o conceito de URL State para gerenciar o estado da aplicação de forma eficiente.

## 🔖 Layout

Você pode visualizar o layout do projeto através [DESSE LINK](<https://www.figma.com/file/zlSMMCMx8KTEiAWx3gB3vW/ToDo-List-%E2%80%A2-Desafio-React-(Copy)?type=design&mode=design&t=SFmrOlaPWrntcc4N-0>). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

<!-- Future implementations session -->
<h2> 🔮 Implementações futuras: </h2>

- [ ] listar eventos
- [ ] gerir o cadastro dos eventos
- [ ] listar participantes de determinado evento, com e sem check-in
- [ ] gerir o cadastro dos participantes
- [ ] fazer o check-in manualmente na aplicação

<br>

## :memo: Licença

Esse projeto está sob a licença MIT.
