# Markup plugin for [grammY](https://grammy.dev)

This plugin provides [telegraf](https://telegraf.js.org)-like keyboard and inline keyboard builders.

## Motivation

The [official plugin](https://grammy.dev/plugins/keyboard.html) provides an imperative API, which I don't really like.
This plugin, on the other hand, provides declarative helper functions inspired by [telegraf](https://telegraf.js.org).

See the comparison:

```ts
new InlineKeyboard([
  [IButton.text("Get random music", "random")],
  [IButton.switchInline("Send music to friends")],
])
```

vs

```ts
new InlineKeyboard()
  .text("Get random music", "random").row()
  .switchInline("Send music to friends")
```

The declarative approach is especially useful when you want to represent dynamic data in the menu (for example, obtained from the database):

```ts
const inlineKeyboard = new InlineKeyboard(items.map(
  (item) => [IButton.text(item.name, item.id)
))
```

vs

```ts
const inlineKeyboard = new InlineKeyboard()
for (const item of items) {
  inlineKeyboard.text(item.name, item.id).row()
}
```

Also it's easy to use all sorts of array utilities with declarative builder, like `chunk`:

```ts
const inlineKeyboard = new InlineKeyboard(chunk(
  items.map((item) => IButton.text(item.name, item.id))
  3,
))
```

## Installation

### Yarn

```bash
yarn add @loskir/grammy-markup
```

### NPM

```bash
npm i --save @loskir/grammy-markup
```

## Usage

### Deno

```ts
import {
    IButton,
    Button,
} from "https://github.com/Loskir/grammy-markup/raw/main/src/index.ts"
```

### Typescript

```ts
import {
    IButton,
    Button,
} from "@loskir/grammy-markup"
```

### Javascript

```js
const {
    IButton,
    Button,
} = require("@loskir/grammy-markup")
```

## Examples

### `IButton`

```ts
const inlineKeyboard = new InlineKeyboard([
    [IButton.text('text', 'callback_data')],
    [IButton.url('text', 'https://grammy.dev')],
    [IButton.webApp('text', 'https://grammy.dev?webApp')],
    [IButton.login('text', 'https://grammy.dev?login')],
    [
        IButton.switchInline('text', 'query'),
        IButton.switchInlineCurrent('text', 'query'),
    ],
    [IButton.game('text')],
    [IButton.pay('text')],
])
// ctx.reply('inline keyboard', {reply_markup: inlineKeyboard})
```

### `Button`

```ts
const keyboard = new Keyboard([
    [Button.text('text')],
    [Button.requestContact('text')],
    [Button.requestLocation('text')],
    [Button.requestPoll('text', 'quiz')],
    [Button.webApp('text', 'https://grammy.dev?webApp')],
])
// ctx.reply('keyboard', {reply_markup: keyboard})
```
