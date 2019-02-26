# react-component-template

#### Creating new component from template
1. Make new empty repository
2. Create a bare clone of this repository
  ```bash
  $ git clone --bare https://github.com/opuscapita/react-component-template.git
  ```
3. Mirror push to the new repository
  ```bash
  $ cd old-repository.git
  $ git push --mirror https://github.com/opuscapita/react-your-component-name-here.git
  ```
4. Remove the temporary local repository you created in step 1.
  ```bash
  $ cd ..
  $ rm -rf react-component-template
  ```
5. Update README.md
  - Remove `Creating new component from template` section
  - Replace all occurences of `react-component-template` with `react-your-component-name`
  - Update Description, API and Code example
6. Update package.json
  - Replace all occurences of `react-component-template` and `React component template` with your component name
7. Put your component code under `src` and demo code under `src_docs\component`

### Description
Describe the component here

### Installation
```
npm install @opuscapita/react-component-template
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-component-template)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| propName                 | string           |                                          | Describe the prop here                   |

### Code example
```jsx
import React from 'react';
import { Example } from '@opuscapita/react-component-example';

export default class ReactView extends React.Component {
  render() {
    return (
      <Example
        propName="propValue"
      />
    );
  }
}
```
