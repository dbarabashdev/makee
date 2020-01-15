#!/usr/bin/env node
const fs = require("fs")
const { GITIGNORE_CONFIG, PRETTIER_RC_CONFIG } = require("./configs")

const createGitignoreConfig = () => {
  fs.writeFile(".gitignore", GITIGNORE_CONFIG, err => {
    if (err) {
      return console.log(err)
    }
    console.log("Created file .gitignore")
  })
}

const createPrettierRCConfig = () => {
  fs.writeFile(".prettierrc", PRETTIER_RC_CONFIG, err => {
    if (err) {
      return console.log(err)
    }
    console.log("Created file .prettierrc")
  })
}

createGitignoreConfig()
createPrettierRCConfig()
