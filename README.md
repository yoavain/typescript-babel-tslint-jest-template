Forked from https://github.com/rencire/typescript-babel-jest-starter

# Typescript-Babel-Jest

Simple, barebone starter Typescript project with Jest setup.  
Typescript compiler only used for code editing. Babel is solely responsible for transpilation.

# Build stages

```
npm run build
```
Does the following:
1. Runs prettier
2. Runs tslint
3. Runs tsc to compile all typescript. It writes only declaration files to the dist folder
4. Runs babel to transpile into dist folder (using @babel/typescript preset)

### Targeting browsers

Queries in `.browserslistrc` dictate which browsers babel should target when transpiling.

See [browserslist](https://github.com/browserslist/browserslist) for more details.

# Resources

- https://github.com/Microsoft/TypeScript
- https://github.com/palantir/tslint
- https://github.com/prettier/prettier
- https://github.com/alexjoverm/tslint-config-prettier

