# Projeto Vite - Módulos e Build

Este projeto faz parte da entrega do oitavo tópico do roadmap de estágio, focado em configuração do Vite, criação de módulos com import/export e execução de build para produção.

## Tecnologias Utilizadas

- Vite
- React
- pnpm

## Estrutura do Projeto
```
src/
├── modules/
│   └── calculadora.jsx
├── App.jsx
├── App.css
└── assets/
```

## Módulos Criados

### calculadora.jsx

Módulo contendo funções matemáticas básicas para demonstrar o conceito de import/export:

- `soma(num1, num2)` - realiza a soma de dois números
- `subtracao(num1, num2)` - realiza a subtração de dois números
- `multiplicacao(num1, num2)` - realiza a multiplicação de dois números
- `divisao(num1, num2)` - realiza a divisão de dois números (com validação para divisão por zero)

### Importação

As funções foram importadas no arquivo `App.jsx` utilizando destructuring:
```javascript
import { soma, divisao, multiplicacao, subtracao } from './modules/calculadora.jsx'
```

As funções são utilizadas no componente para demonstrar o funcionamento dos módulos, exibindo resultados no JSX.

## 🔧 Como Rodar o Projeto

### Instalação
```bash
pnpm install
```

### Desenvolvimento
```bash
pnpm dev
```

### Build
```bash
pnpm build
```

### Preview
```bash
pnpm preview
```

## Resultado do Build

Após executar o comando `pnpm build`, é gerada a pasta `dist/` contendo:
- Arquivos HTML, CSS e JavaScript otimizados e minificados
- Assets com hash nos nomes para otimização de cache
- Código pronto para deploy em produção
