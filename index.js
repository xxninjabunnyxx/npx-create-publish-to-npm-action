#!/usr/bin/node

const fs = require('fs')

fs.mkdirSync('.github/workflows', { recursive: true })
fs.copyFileSync('./action.yml', '.github/workflows/publish-to-npm.yml')