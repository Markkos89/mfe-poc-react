# React micro-frontend PoC with Webpack Module Federation, Lerna and Typescript

## đ Stack

```
- React
- Typescript
- Chakra-UI
- Redux-Toolkit
- RKT Query
- Webpack
- Webpack Module Federation
- Babel
- React Router
- Yarn
- Jest
- React Testing Library
- Lerna
- ESLint
- Prettier
```

## âšī¸ Requirements

Requires Node JS version `14.17.0+`. Using `nvm`:

```sh
nvm install 14.17.0
nvm use 14.17.0
```

## đââī¸ Running the app locally

#### _Installing dependencies:_

```
yarn install
```

#### _Generating federate types:_

> For more info about this, have a look at the `Miscellaneous` section below.

```
yarn make-types
```

#### _Running in dev mode:_

> This will start all MFEs.

```
yarn start
```

#### _Build and serve:_

> This will build/serve all MFEs.

```
yarn build
yarn serve
```

#### _Running a single MFE:_

```
cd apps/MFE_DIR
yarn start
```

#### _Clean `dist` folders after a build:_

```
yarn clean
```

#### _Run scripts in batch:_

> You can run any remote (MFE) level script in a single batch by using the following format:

```
lerna run --parallel SCRIPT_NAME
```

## đĨ Adding a new MFE


To generate a new remote (MFE) run the following command:

```
yarn generate-mfe
```

This will run a CLI wizard (node app located in the `./cli-wizard` directory) that will generate a new remote (MFE) based on a set of 3 questions. Under the hood this CLI wizard clones a [mfe-boilerplate repository](https://github.com/Markkos89/mfe-boilerplate) and renames the content of certain files to match the prompts.

After generating a new remote (MFE), make sure to update the port numbers, as follows:

- `package.json` on `line 8`
- `webpack.dev.js` on `line 19` and on `line 24`

> If MFE of type `Shell`, make sure you also update the `remotes` object in the `federation.config.json` file

In an ideal world this CLI would be a node module and the ports would be automatically assigned, however this is out of scope for this PoC.

## đ§Š Miscellaneous

- To automate the type generation for the federate modules, the app is making use of the [`@pixability-ui/federated-types`](https://github.com/pixability/federated-types). To generate the federate types run `yarn make-types`.

- Each remote (MFE) is using a `federation.config.json` file to define the federate configuration. This config is then used in the webpack config files by both the `ModuleFederationPlugin` and `MFLiveReloadPlugin` plugins.

## đ Further reading

- [Building Micro-Frontends](https://www.oreilly.com/library/view/building-micro-frontends/9781492082989/), by Luca Mezzalira

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)

- [Micro-frontends](https://martinfowler.com/articles/micro-frontends.html), by Martin Fowler

## đ§­ Roadmap

- Add fallback for when a MFE fails - done!
- Automate port number assigment when generating a new remote (MFE)
- Add CI integration example
