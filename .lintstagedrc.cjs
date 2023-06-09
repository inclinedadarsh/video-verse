module.exports = {
    '*.{js,jsx,ts,tsx}': ['prettier --write', 'eslint . --fix'],
    '*.{css,styl,html,md,json,yml,yaml}': ['prettier --write'],
}