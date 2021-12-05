# prettier

`npm i --save-exact prettier -S`
`echo {}> .prettierrc.json`
`npx mrm@2 lint-staged`
`npm i -D eslint-config-prettier`

```json
// package.json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest", "prettier"]
  }
}
```

# commitlint

`npm install --save-dev @commitlint/{config-conventional,cli}`
`echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js`
`npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'`
[what is commitlint](https://github.com/conventional-changelog/commitlint#what-is-commitlint)

# jira-dev-tool

1. `npx imooc-jira-dev-tool` nodeVersion={14.13.1}
2. `npm i my-jira-dev-tool`
3. use

```javascript
// index.tsx

import { loadDevTools } from "jira-dev-tool";

loadDevTools(() =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
);
```
