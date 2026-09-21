const js = require("@eslint/js");

module.exports = [
    {
        languageOptions: {
            globals: {
                require: "readonly",
                module: "readonly",
                process: "readonly",
                console: "readonly",
                describe: "readonly",
                test: "readonly",
                expect: "readonly"
            }
        },
        ...js.configs.recommended
    }
];
