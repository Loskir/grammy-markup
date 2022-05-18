# Markup plugin for [grammY](https://grammy.dev)

This plugin provides [telegraf](https://telegraf.js.org)-like keyboard and inline keyboard builders.

> Note: This plugin is not stable yet.

## Installation

### Yarn
```
yarn add @loskir/grammy-markup
```
### NPM
```
npm i --save @loskir/grammy-markup
```

## Usage

### Deno
```ts
import {
    InlineKeyboard,
    IButton,
    Keyboard,
    Button,
} from "https://github.com/Loskir/grammy-markup/raw/main/src/index.ts"
```

### Typescript
```ts
import {
    InlineKeyboard,
    IButton,
    Keyboard,
    Button,
} from "@loskir/grammy-markup"
```

### Javascript
```js
const {
    InlineKeyboard,
    IButton,
    Keyboard,
    Button,
} = require("@loskir/grammy-markup")
```

## Examples

### `InlineKeyboard` and `IButton`

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
### `Keyboard` and `Button`

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

> `one_time`, `resize`, `input_placeholder` and `selective` attributes are not supported out of the box.
> Please refer to [official docs](https://grammy.dev/plugins/keyboard.html#sending-a-custom-keyboard)
