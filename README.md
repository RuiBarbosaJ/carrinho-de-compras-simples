# carrinho-de-compras-simples

Pequeno projeto de exemplo: um carrinho de compras simples criado com React + TypeScript + Vite.

## React + TypeScript + Vite

Este repositório usa uma template mínima para executar React com Vite, HMR e regras básicas de ESLint.

Atualmente, há dois plugins oficiais disponíveis para React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — usa Babel (ou oxc em cenários específicos) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — usa SWC para Fast Refresh

### React Compiler

O React Compiler não está habilitado neste template por causa do impacto em desempenho durante desenvolvimento e build. Para adicioná-lo, veja a documentação: https://react.dev/learn/react-compiler/installation

### Expandindo a configuração do ESLint

Se estiver desenvolvendo uma aplicação para produção, recomendamos ativar regras de lint que usam informações de tipo (type-aware):

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Exemplos de configurações recomendadas para projetos TypeScript
      tseslint.configs.recommendedTypeChecked,
      // Ou para regras mais rígidas
      tseslint.configs.strictTypeChecked,
      // Regras estilísticas opcionais
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

Você também pode instalar plugins como [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) e [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) para regras específicas de React.

---

Arquivo ajustado para resolver conflito de merge.
You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:
