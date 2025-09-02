# Sistema de visualização de usuários
Saudações!

Essa aplicação web faz parte do desafio [Desafio de Programação da Calpar](https://github.com/tiCalpar/frontend-dev-test) para a posição de **Desenvolvedor Front End**.
O objetivo era criar um projeto básico utilizando um framework web de minha escolha e demonstrar as seguintes habilidades:
 1. **Consumir uma API**
 2. **Desenvolver uma funcionalidade específica**

Os dados que retornam da [API](https://09441c3d-9208-4fa9-a576-ba237af6b17c.mock.pstmn.io/) são bem simples, é o "nome" em *string* e o status "disponivel" em *boolean*.

O que eu desenvolvi foi um sistema limpo, bonito e performático utilizando stacks atuais baseadas em suas documentações, exibindo os usuários de forma visual e otimizada, além de implementar dois extras, um switch de tema escuro e claro e uma pequena descrição no header para exibir a geolocalização do usuário utilizando ferramentas nativas do navegador.

---
### Como rodar o projeto (localhost):


1.  **Clone o repositório**

```bash
git  clone https://github.com/voronll/teste-web-dev
```
2.  **Navegue até o repositório**
```bash
cd teste-web-dev
```
3.  **Instale as dependências**
```bash
npm  install
```
4.  **Execute o projeto**
```bash
npm  run  dev
```
5.  **Acesse no navegador**
```
http://localhost:3000
```
---
### Estrutura de pastas e seus significados
```
src/
├── app/
│   ├── home/
│   │   └── page.tsx          # Página principal com data table
│   ├── layout.tsx            # Layout com ThemeProvider
│   └── page.tsx              # Página de login
├── components/
│   ├── ui/
│   │   ├── button.tsx        # Componente Button reutilizável
│   │   ├── input.tsx         # Componente Input
│   │   └── table.tsx         # Componentes de tabela
│   ├── header.tsx            # Header com tema e localização
│   ├── loading-table.tsx     # Skeleton de loading
│   └── usuarios-data-table/
│       ├── data-table.tsx    # Data table principal
│       └── columns.tsx       # Definição das colunas
├── contexts/
│   └── theme-context.tsx     # Contexto para tema escuro/claro
└── lib/
    ├── api.ts               # Funções de API
    └── utils.ts             # Utilitários (cn function)
```
## Funcionalidades

###  Data Table de Exibição dos Usuários
Para exibir os usuários, utilizei o [Data Table do Shadcn](https://ui.shadcn.com/docs/components/data-table), que oferece uma tabela modular e interativa, facilitando sua manutenção e aplicabilidade no projeto.  

### Geolocalização
Como funcionalidade adicional, aproveitei para adicionar um serviço de geolocalização, onde consumi uma [API da Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation) que utiliza a permissão do navegador para puxar a localização do usuário.

### Sistema de Temas
Implementei também uma funcionalidade de mudança de tema, onde quando o usuário clica no botão de lua/sol, as cores do sistema mudam. Ela funciona utilizando a lib **Theme** do próprio React, onde ela salva a escolha do tema no próprio localStorage (da para ser salva no *session*, caso exista interação com contas de usuários) e é estilizada na variável global de CSS e Tailwind.

## Stacks utilizadas

 - TypeScript
 - React
 - Next.JS
 - Tailwind.CSS
---