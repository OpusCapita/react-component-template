### Development workflow
* Run `npm run docs`
* Open `index.html`

### Development workflow with project using the package
##### Link local package to your project
* Run `npm link` at `oc-common-ui` root to make your local package linkable
* Run `npm link @opuscapita/oc-common-ui` at project's dir that's using `oc-common-ui` to use local package
##### Build and watch the package
* Run `npm run dev` to run webpack in watch mode
##### Unlink local package
* Run `npm unlink @opuscapita/oc-common-ui` at project's dir that's using `oc-common-ui`
### Development
* Make a new branch for the changes
* Use `npm run hot` to develop the component

### Preparing the PR
* Reset `examples` and `lib` directories to master state
* Update `CHANGELOG.md` with your changes under the `<next>` header
* Make a pull request

### Preparing for new version
* Use `master` branch
* Add new version header to `CHANGELOG.md` and move everyting from `<next>` there (leave next header empty)
* Make sure `npm test` and `npm run lint` runs without errors

### Creating a new release
* Run `npm version [major|minor|patch]` [Info](https://docs.npmjs.com/cli/version)

### Publish new version to NPM
* Run `npm publish`
