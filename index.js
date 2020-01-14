#!/usr/bin/env node
const { createGitignoreConfig } = require("./core/make-gitignore")
const { createPrettierRCConfig } = require("./core/make-prettier")


createPrettierRCConfig()
createGitignoreConfig()