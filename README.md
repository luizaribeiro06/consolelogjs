# Exercício Consolelog - js

## Integrantes
- Gabrielly Candido Camargo da Silva RM: 560916
- Luiza Saraçol Ribeiro RM: 560200
- João Victor Ferreira RM: 560439

## Primeiros Passos

- Criar um repositório no github
- Executar o comando git clone no cmd (com a url do repositório criado)
- Acessar a conta do npm (criada anteriormente) através do comando "npm login" (você irá receber um código de autenticação e o processo irá continuar logo após confirmar sua conta)
- Logo após, executar o comando "npm init --scope@luizaribeiro", usando o seu nome/usuário como o escopo do projeto
- Para acessar o VSCode, digite "code ." e conseguirá executar os comandos restantes no próprio terminal. Além de criar os arquivos de index e teste solicitados.

### Lembrando que é necessário publicar o módulo para conseguir acessar depois "npm publish --access public".

## 1. Como criar o Módulo?

### 1.1 Criar a pasta do módulo
```sh
mkdir consolelogjs
cd consolelogjs
```

### 1.2 Inicializar o `package.json`
```sh
npm init -y
```

### 1.3 Definir o tipo de módulo como ESM 
Edite o `package.json` e adicione essa linha:
```json
"type": "module"
```

### 1.4 Criar o arquivo principal do módulo
Crie um arquivo chamado `index.js` dentro da pasta `consolelogjs` e adicione:
```js
import chalk from "chalk";
import cows from "cows";

export default function coolsolelog(message) {
    const cowMessage = cows()[0]; // Pega um desenho de vaca aleatório
    console.log(chalk.blueBright(cowMessage)); // Deixa a vaca azul
    console.log(chalk.greenBright(message)); // Deixa a mensagem verde
}
```

### 1.5 Publicar o módulo no npm

#### Logar no npm (caso ainda não tenha feito)
```sh
npm login
```

#### Publicar o módulo
```sh
npm publish --access public
```

## 2. Testando o Módulo

### 2.1 Criar uma pasta separada para testes
```sh
mkdir teste-consolelogjs
cd teste-consolelogjs
```

### 2.2 Inicializar um novo `package.json`
```sh
npm init -y
```

### 2.3 Definir o tipo de módulo como ESM
Edite o `package.json` e adicione:
```json
"type": "module"
```

### 2.4 Instalar o módulo
```sh
npm install @luizaribeiro/consolelogjs
```

### 2.5 Criar o arquivo de teste
Crie um arquivo chamado `index.js` e adicione:
```js
import consolelogjs from "@luizaribeiro/consolelogjs";

consolelogjs("Teste do CP1-JS!!");
```

### 2.6 Rodar o teste
```sh
node index.js
```

---


