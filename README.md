# STWUI

Svelte-TailwindCSS UI (STWUI) is currently in pre-release. There has been a lot work already but a lot of work still needs to be done. Most of my inspiration comes from TawilwindUI with a desire to create a component library similar to React component libraries that are less reliant on remembering class names. Contributors and collaborators welcome! 

Documentation is still a work in progress and has not been published at this time. To see the documentation fork/clone this repo to you computer and run `npm run dev` to see all components in use.

TO get started
`npm install stwui`

- Add `require('stwui/plugin')` to the `plugins` section of your `tailwind.config.cjs`
- Add `'./node_modules/stwui/**/*.{svelte,js,ts,html}'` to the `content` array of your `tailwind.config.cjs`
- Add `class` to the `darkMode` property of your `tailwind.config.cjs`

```
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [
    require('stwui/plugin')
  ],
  darkMode: 'class'
};
```

### The Components list:

- [x] Accordion
- [x] Alert
- [x] Avatar
- [x] AvatarGroup
- [x] AutoComplete
- [x] Badge
- [x] BottomNavigation
- [x] Breadcrumbs
- [x] Button
- [x] ButtonGroup
- [x] Card
- [x] Carousel
- [x] Checkbox
- [x] Chip
- [X] Col
- [x] Command Palette
- [x] Currency
- [x] DatePicker
- [x] Divider
- [x] Drawer
- [x] Dropdown
- [x] Empty
- [x] Feed
- [x] Icon
- [x] Input
- [x] Layout
- [x] LightBox
- [x] List
- [x] Media
- [x] Menu
- [x] Modal
- [x] Header
- [x] Notification
- [x] Pagination
- [x] Portal
- [x] Post
- [x] Progress
- [x] Radio
- [x] Rating
- [x] Row
- [x] Select
- [x] Sidebar
- [x] Slider
- [x] Statistic
- [x] Steps
- [x] Swap
- [x] Table
- [x] Tabs
- [x] TextArea
- [x] Timeline
- [x] Toggle

### The current Actions list:

- [x] clickOutside
- [x] tooltip

More to come!

