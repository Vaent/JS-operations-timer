module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2015
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "quotes": [
            "error",
            "double"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "comma-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "no-multi-spaces": "error",
        "semi": [
            "error",
            "always"
        ],
        "no-console": "warn",
        "no-undef": "off",
        "no-unused-vars": "warn"
    }
};
