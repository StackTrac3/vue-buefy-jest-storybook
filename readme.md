<!-- prettier-ignore -->
<!-- ABOUT THE PROJECT -->
<img src="https://user-images.githubusercontent.com/5760856/106231656-2f4b2100-61c0-11eb-9bb6-1b4fe98c7273.png" alt="Logo">

# An Opinionated Boilerplate for Vue

- Ready-to-go libraries that are **AWESOME** for any app

- Beautiful folder structure and path aliases for [Atomic Design](#atomic-design)

- [Jest](https://jestjs.io/) unit testing, [Storybook](https://storybook.js.org/) visual testing

- ESlint and the **amazing** [Airbnb styleguide](https://github.com/airbnb/javascript) plugin

- Many config and dotfiles are present with common options

- Bulma, Buefy, and custom style sass

<!--
[![Product Name Screen Shot][product-screenshot]](https://example.com)
-->

---

## Configured With Vue 2 and

- Components:
  - [buefy](https://buefy.org/), [vee-validate](https://github.com/logaretm/vee-validate)
- ORM:
  - [vuex-orm](https://vuex-orm.org/)
- Router:
  - [vue-router](https://router.vuejs.org/)
- Store:
  - [vuex](https://vuex.vuejs.org/)
- [Style](#style):
  - [sass](https://sass-lang.com/), [bulma](https://bulma.io/), [pug](https://pugjs.org/)
- [Testing](#testing):
  - [jest](https://jestjs.io/), [storybook](https://storybook.js.org/), [vee-validate testing](https://logaretm.github.io/vee-validate/advanced/testing.html)
    , [vue-test-utils](https://vue-test-utils.vuejs.org/api/options.html)

---

# Getting Started

Make sure that you have the [Vue CLI](https://cli.vuejs.org/) installed

```sh
yarn install

# Serve the app for development with HMR
yarn serve
```

Prettier and ESlint extensions are highly recommended for your IDE.

# Testing

Developing components with hot reload is a practice of the past. Utilize on-save feedback from Jest and Storybook to drive your development.

It is recommended to use your preferred terminal to run unit tests if you have multiple monitors, and the Jest plugin for your IDE if you have a single monitor.

```sh
# Jest Unit tests
yarn test:unit optional:regex optional:--watch

# Serve Storybook on port 6006
yarn storybook
```

```sh
# Jest Coverage
yarn test:coverage optional:regex optional:--watch
```

# Style

## Atomic Design

Example components may be found in [components](src/components), along with the folder structure for Atomic Design (a methodology for grouping components into categories)

If you would _not_ like to use Atomic Design: Delete the atomic subfolders, and update aliases in [webpack.shared](webpack.shared.js)

## VUE SFC

- `<template>` Pug is a simple templating language that works _great_ with Vue
- `<script>` Linted to conform to the Airbnb styleguide (_and all `.js`_)
- `<style>` sass and scss with [variables.scss](src/sass/variables.scss) prepended

This boilerplate is linted with the [airbnb styleguide](https://github.com/airbnb/javascript) core plugin for `eslint`

It is best to let your editor handle linting. Alternatively, you may prefer to use the CLI instead of editor extensions:

```sh
# Lint all files in the project. Recommended to stash or commit changes first
yarn lint
npx prettier --write --config-precedence prefer-file  src/.
```

# Configuration

Notable files:
[vue.config.js](vue.config.js),
[jest.config.js](jest.config.js),
[.eslintrc](.eslintrc),
[prettierrc.js](prettierrc.js),
[storybook/config](storybook/config/main.js)

Entry files:
[main.js](src/js/main.js),
[jest/vueSetup.js](src/tests/vueSetup.js),
[storybook/preview.js](storybook/config/preview.js)

The webpack configuration is used in [vue.config.js](vue.config.js), [storybook/main.js](storybook/config/main.js) and [jest.config.js](jest.config.js). Storybook uses the webpack configuration exported by vue

Fonts and images may go in `src/assets`. Buefy's `b-icon` is preconfigured with Material Design Icons

<!-- LICENSE -->

# License

Costs 1 Github Star. _Just kidding._ **:)**

Distributed under the [Creative Commons CC0 1.0 License](https://creativecommons.org/publicdomain/zero/1.0/), meaning you are free to use it for any purpose, commercial or non-commercial, without any attribution back to me.
See `LICENSE` for more information.

# Contribute

_Pull requests are welcome_

## Todo:

Review babel configs

Some dependencies could be pinned

Add guidance for

- templates/pages pattern
- router

Improve demos for :

- storybook
- minimal atomic design
- vuex-orm
- vue-test-utils & jest

# Contact

Repository/Issues: [https://github.com/StackTrac3/vue2-buefy-jest-storybook](https://github.com/StackTrac3/vue2-buefy-jest-storybook)
