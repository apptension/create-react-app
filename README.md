# Create React App (by Apptension) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)](https://github.com/facebook/create-react-app/pulls) 

[create-react-app](https://github.com/facebook/create-react-app) scripts customised for Apptension projects.

### Quick start
    
1. Run create-react-app with Apptension's scripts:
  ```shell
  $ npx create-react-app [app-name] --scripts-version @apptension/react-scripts
  ```

2. Start application:

  ```shell
  $ yarn start
  ```

## Documentation

Most features are covered by [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) documentation so don't forget to check it out first!

## Additional features

#### Messages

```Shell
yarn extract-intl language1, language2, [...]
```

Automatically generates `.json` files with messages gathered from application.

#### Linting

```Shell
yarn lint
```

Lints your JavaScript.

#### Code generation

Generate Redux module (reducer, saga, selectors, action types, action creators, tests):
```Shell
yarn plop module
```

Generate Redux container and its react component in specified path:
```Shell
yarn plop container
```

Generate React component in specified path
```Shell
yarn plop component
```

## License

This project is licensed under the MIT license, Copyright (c) 2017 Apptension. For more information see LICENSE.md.
