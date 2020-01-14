const fs = require("fs")
const { PRETTIER_RC_CONFIG } = require("../configs")

const createPrettierRCConfig = () => {
  fs.writeFile(".prettierrc", PRETTIER_RC_CONFIG, err => {
    if (err) {
      return console.log(err)
    }
    console.log("Created file .prettierrc")
  })
}

module.exports = createPrettierRCConfig
