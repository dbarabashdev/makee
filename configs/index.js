const PRETTIER_RC_CONFIG = `
{
  "printWidth": 120,
  "tabWidth": 2,
  "tabs": false,
  "semi": false,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid"
}
`

const GITIGNORE_CONFIG = `
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

.vscode/
.idea/
`

module.exports = {
  GITIGNORE_CONFIG,
  PRETTIER_RC_CONFIG,
}
