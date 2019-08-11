import escapeHtml from '../node_modules/escape-html/index.js';

const reNL = /\r?\n/g;
const nlToBr = html => html.replace(reNL, '<br>');

const reURL = /https?:[/][/](?:www[.])?([^/]+)(?:[/]([.]?[^\s,.])+)?/g;
const urlToAnchor  = text => {
    text.replace(reURL, '<a href="$&" target="_blank">$1</a>')
};

// TODO: Should this be done in django?
    // Could have an htmlDescription key.
export function formatDescription(text) {
    return urlToAnchor(nlToBr(escapeHtml(text)));
};
