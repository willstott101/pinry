import { getCSRFToken, csrfSafeMethod } from './helpers.js';

export const API_BASE = "/api/v2/";

function isPinEditable(pinObject) {
    return pinObject.submitter.username === ServerData.currentUser.username;
}

function csrfFetch(url, options) {
    if (!options)
        options = {};
    const method = options.method || 'GET';
    if (!csrfSafeMethod(method)) {
        if (!options.headers)
            options.headers = {};
        options.headers['X-CSRFToken'] = getCSRFToken();
    }
    return fetch(API_BASE + url, options);
}

// TODO: Create a PinLoader class, that remembers the offset.
// TODO: Smarter limit than 50 every single request.

export function fetchPins(offset, tagFilter, userFilter) {
    // Fetch our pins from the api using our current offset
    var url = 'pins/?format=json&ordering=-id&limit=50&offset='+String(offset || 0);
    if (tagFilter)
        url += '&tags__name=' + tagFilter;
    if (userFilter)
        url += '&submitter__username=' + userFilter;

    return csrfFetch(url)
        .then(response => response.json())
        .then(data => {
            // Set which items are editable by the current user
            var pins = data.results;
            for (var i = 0; i < pins.length; i++) {
                let pin = pins[i];
                pin.editable = isPinEditable(pin);
                pin.tags.sort(function (a, b) {
                    return a.toLowerCase().localeCompare(b.toLowerCase());
                });
            }
            return pins;
        });

}

