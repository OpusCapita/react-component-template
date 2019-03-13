# react-component-template

#### Creating new component from template
1. Make new repo for your component and clone it
   ```bash
   $ git clone https://github.com/opuscapita/react-your-component-name-here
   ```
2. Clone this repository
   ```bash
   $ cd ..
   $ git clone https://github.com/opuscapita/react-component-template
   ```
3. Copy template files recursively to your empty component directory
   ```bash
   $ cp -R * ../react-your-component-name-here
   $ cp .* ../react-your-component-name-here
   ```
4. Update package.json
  - Replace all occurences of `react-component-template` and `React component template` with your component name
5. Put your component code under `src` and demo code under `src_docs\component`
6. Develop component and demo with run `npm run hot` -> http://localhost:5555
7. Update README.md
  - Remove `Creating new component from template` section
  - Replace all occurences of `react-component-template` with `react-your-component-name`
  - Update Description, API and Code example
8. Build the component and demo `npm run build` 
9. Push initial commit to master branch
10. Enable demo from github repository settings -> HitHub Pages -> Source = `Master branch /docs folder`

### Description
Describe the component here

### Installation
```
npm install @opuscapita/react-component-template
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-component-template)

### Change log
View the [Change log](CHANGELOG.md)

### Migrate guide
View the [Migrate guide](MIGRATEGUIDE.md) between major versions

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
