<img src="logo.png" align="left" width="192px" height="192px"/>
<img align="left" width="0" height="192px" hspace="10"/>

[![Svelte 4](https://img.shields.io/badge/svelte-4-FF3E00.svg?logo=svelte)](https://svelte.dev/) [![GitHub stars](https://img.shields.io/github/stars/N00nDay/stwui?logo=github)](https://github.com/N00nDay/stwui/stargazers) [![npm version](https://img.shields.io/npm/v/stwui?logo=npm&color=cb3837)](https://www.npmjs.com/package/stwui) [![license](https://img.shields.io/badge/license-MIT-%23bada55)](https://github.com/N00nDay/stwui/blob/main/LICENSE)

Svelte-TailwindCSS UI (stwui) is an opinionated, customizable component library for Svelte and TailwindCSS. Inspired by Tailwind UI, it aims for a component API you compose with props instead of memorizing class names. A live showcase of all 49 components is at [stwui.vercel.app](https://stwui.vercel.app/).

## Status

stwui is stable and feature-complete for **Svelte 4 + TailwindCSS**, with 49 components. It grew to 450+ stars and is still installed from npm regularly.

It is no longer under active development and has not been migrated to Svelte 5, but it remains usable as-is for Svelte 4 projects. Issues and pull requests are still welcome.

<br />
<br />

A showcase can be found at [https://stwui.vercel.app/](https://stwui.vercel.app/). Documentation is still forthcoming but you can at least see the components being used.

# Installing

- Run `npm install stwui`
- Add `require('stwui/plugin')` to the `plugins` section of your `tailwind.config.cjs`
- Add `'./node_modules/stwui/**/*.{svelte,js,ts,html}'` to the `content` array of your `tailwind.config.cjs`

```
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/stwui/**/*.{svelte,js,ts,html}'
	],
	plugins: [
		require('@tailwindcss/forms'),
		require('stwui/plugin')
	]
};
```

# How to Contribute

- Clone the project to your local machine: ``git clone git@github.com:N00nDay/stwui.git MY-PROJECT-NAME && cd MY-PROJECT-NAME``
- Install dependancies with ``npm install``
- Start your dev server with ``npm run dev``
- Make changes, and submit your pull request.

📖 The docs are included in this repo which is itself a SvelteKit app. You'll find the pages for each component within `src/routes/`.

## Useful Resources

* [Contribution Guide](https://github.com/N00nDay/stwui/tree/main/.github/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/N00nDay/stwui/tree/main/.github/CODE_OF_CONDUCT.md)

## Contributors

<!-- Contributors START -->
Craig Howell N00nDay https://github.com/N00nDay
<!-- Contributors END -->
