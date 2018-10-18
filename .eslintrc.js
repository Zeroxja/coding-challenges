module.exports = {
	"extends": ["eslint:recommended", "google", "plugin:node/recommended"],
	"rules": {
		"indent": ["error", "tab"],
		"no-tabs": 0,
		"quotes": ["error", "backtick"],
		"no-console": 0,
		"max-len": 0
	},
	"parserOptions": {
        "ecmaVersion": 2017
    },
    "env": {
        "es6": true
    }
};
