import {
    type InlineKeyboardButton,
    type KeyboardButton,
    type LoginUrl,
} from "./deps.deno.ts";

export const Button = {
    /**
     * Adds a new text button. This button will simply send the given text as a
     * text message back to your bot if a user clicks on it.
     *
     * @param text The text to display
     */
    text(text: string): KeyboardButton.CommonButton {
        return { text };
    },
    /**
     * Adds a new contact request button. The user's phone number will be sent
     * as a contact when the button is pressed. Available in private chats only.
     *
     * @param text The text to display
     */
    requestContact(text: string): KeyboardButton.RequestContactButton {
        return { text, request_contact: true };
    },
    /**
     * Adds a new location request button. The user's current location will be
     * sent when the button is pressed. Available in private chats only.
     *
     * @param text The text to display
     */
    requestLocation(text: string): KeyboardButton.RequestLocationButton {
        return { text, request_location: true };
    },
    /**
     * Adds a new poll request button. The user will be asked to create a poll
     * and send it to the bot when the button is pressed. Available in private
     * chats only.
     *
     * @param text The text to display
     * @param type The type of permitted polls to create, omit if the user may send a poll of any type
     */
    requestPoll(text: string, type?: "quiz" | "regular"): KeyboardButton.RequestPollButton {
        return { text, request_poll: { type } };
    },
    /**
     * Adds a new web app button. The Web App that will be launched when the
     * user presses the button. The Web App will be able to send a
     * “web_app_data” service message. Available in private chats only.
     *
     * @param text Text text to display
     * @param url An HTTPS URL of a Web App to be opened with additional data
     */
    webApp(text: string, url: string): KeyboardButton.WebAppButton {
        return { text, web_app: { url } };
    },
}

export const IButton = {
    /**
     * Adds a new URL button. Telegram clients will open the provided URL when
     * the button is pressed.
     *
     * @param text The text to display
     * @param url HTTP or tg:// url to be opened when the button is pressed. Links tg://user?id=<user_id> can be used to mention a user by their ID without using a username, if this is allowed by their privacy settings.
     */
    url(text: string, url: string): InlineKeyboardButton.UrlButton {
        return { text, url };
    },
    /**
     * Adds a new callback query button. The button contains a text and a custom
     * payload. This payload will be sent back to your bot when the button is
     * pressed. If you omit the payload, the display text will be sent back to
     * your bot.
     *
     * Your bot will receive an update every time a user presses any of the text
     * buttons. You can listen to these updates like this:
     * ```ts
     * // Specific buttons:
     * bot.callbackQuery('button-data', ctx => { ... })
     * // Any button of any inline keyboard:
     * bot.on('callback_query:data',    ctx => { ... })
     * ```
     *
     * @param text The text to display
     * @param data The callback data to send back to your bot (default = text)
     */
    text(text: string, data = text): InlineKeyboardButton.CallbackButton {
        return { text, callback_data: data }
    },
    /**
     * Adds a new web app button, confer https://core.telegram.org/bots/webapps
     *
     * @param text The text to display
     * @param url An HTTPS URL of a Web App to be opened with additional data
     */
    webApp(text: string, url: string): InlineKeyboardButton.WebAppButton {
        return { text, web_app: { url } };
    },
    /**
     * Adds a new login button. This can be used as a replacement for the
     * Telegram Login Widget. You must specify an HTTP URL used to automatically
     * authorize the user.
     *
     * @param text The text to display
     * @param loginUrl The login URL as string or `LoginUrl` object
     */
    login(text: string, loginUrl: string | LoginUrl): InlineKeyboardButton.LoginButton {
        return {
            text,
            login_url: typeof loginUrl === "string"
                ? { url: loginUrl }
                : loginUrl,
        }
    },
    /**
     * Adds a new inline query button. Telegram clients will let the user pick a
     * chat when this button is pressed. This will start an inline query. The
     * selected chat will be prefilled with the name of your bot. You may
     * provide a text that is specified along with it.
     *
     * Your bot will in turn receive updates for inline queries. You can listen
     * to inline query updates like this:
     * ```ts
     * bot.on('inline_query', ctx => { ... })
     * ```
     *
     * @param text The text to display
     * @param query The (optional) inline query string to prefill
     */
    switchInline(text: string, query = ""): InlineKeyboardButton.SwitchInlineButton {
        return { text, switch_inline_query: query };
    },
    /**
     * Adds a new inline query button that act on the current chat. The selected
     * chat will be prefilled with the name of your bot. You may provide a text
     * that is specified along with it. This will start an inline query.
     *
     * Your bot will in turn receive updates for inline queries. You can listen
     * to inline query updates like this:
     * ```ts
     * bot.on('inline_query', ctx => { ... })
     * ```
     *
     * @param text The text to display
     * @param query The (optional) inline query string to prefill
     */
    switchInlineCurrent(text: string, query = ""): InlineKeyboardButton.SwitchInlineCurrentChatButton {
        return { text, switch_inline_query_current_chat: query };
    },
    /**
     * Adds a new game query button, confer
     * https://core.telegram.org/bots/api#games
     *
     * This type of button must always be the first button in the first row.
     *
     * @param text The text to display
     */
    game(text: string): InlineKeyboardButton.GameButton {
        return { text, callback_game: {} };
    },
    /**
     * Adds a new payment button, confer
     * https://core.telegram.org/bots/api#payments
     *
     * This type of button must always be the first button in the first row and
     * can only be used in invoice messages.
     *
     * @param text The text to display
     */
    pay(text: string): InlineKeyboardButton.PayButton {
        return { text, pay: true };
    },
}
