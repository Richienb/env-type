"use strict"

const envCrosser = require("env-crosser")

module.exports = envCrosser({
    browser: "browser",
    worker: "worker",
    node: "node",
    fallback: undefined,
})
