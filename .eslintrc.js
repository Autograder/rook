module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	"parserOptions": {
		"sourceType": "module",
	},
	"plugins": [
		"react",
	],
	"rules": {
		"no-mixed-spaces-and-tabs": [
			2, 
			"smart-tabs"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"sort-imports": ["error", {
			"ignoreCase": true,
			"ignoreDeclarationSort": false,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": ["none", "all", "single", "multiple"],
			"allowSeparatedGroups": false
		}]
	}
};
