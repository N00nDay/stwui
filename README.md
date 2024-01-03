<img src="logo.png" align="left" width="192px" height="192px"/>
<img align="left" width="0" height="192px" hspace="10"/>

[![Under Development](https://img.shields.io/badge/under-development-orange.svg)](https://stwui.vercel.app/) [![npm version](https://img.shields.io/npm/v/stwui?logo=npm&color=cb3837)](https://www.npmjs.com/package/stwui) [![Chat](https://img.shields.io/discord/1003691521280856084?label=chat&logo=discord&color=7289da)](https://discord.gg/YVgwp48Tcm) [![license](https://img.shields.io/badge/license-MIT-%23bada55)](https://github.com/N00nDay/stwui/blob/main/LICENSE)

Svelte-TailwindCSS UI (STWUI) is currently in pre-release. There has been a lot work already but a lot of work still needs to be done. Most of my inspiration comes from TawilwindUI with a desire to create a component library similar to React component libraries that are less reliant on remembering class names. Contributors and collaborators welcome!

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