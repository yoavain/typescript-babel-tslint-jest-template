module.exports = {
    "*.{ts,tsx}": [
        "prettier --write",
        "tslint -c tslint.json 'src/**/*.ts,test/**/*' --fix"
    ],
    "*.{json,md}": [
        "prettier --write"
    ]
};