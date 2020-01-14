const fs = require("fs")
const { GITIGNORE_CONFIG } = require("../configs")

const createGitignoreConfig = () => {
  fs.writeFile(".gitignore", GITIGNORE_CONFIG, err => {
    if (err) {
      return console.log(err)
    }
    console.log("Created file .gitignore")
  })
}

module.exports = createGitignoreConfig
