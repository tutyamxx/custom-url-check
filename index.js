/**
 *  check-custom-url - Simple NPM package to check a string for a valid custom filtered URL!
 *  @version: v1.4.3
 *  @link: https://github.com/tutyamxx/custom-url-check
 *  @license: MIT
 **/


/**
 * Validates whether a URL matches a custom domain pattern.
 *
 * The function checks if the provided URL matches the given `filterParam`
 * (typically a domain name) and allows optional protocol and `www` prefix.
 *
 * @param {string} url - The URL to validate.
 * @param {string} filterParam - The domain or base pattern to match against.
 * @returns {boolean} Returns `true` if the URL matches the custom pattern, otherwise `false`.
 *
 * @throws {Error} If `url` is missing or not a string.
 * @throws {Error} If `filterParam` is missing or not a string.
 */
const customUrl = (url, filterParam) => {
    if (!url) throw new Error('@url parameter cannot be empty!');
    else if (typeof url !== 'string') throw new Error('@url parameter must be a string!');

    if (!filterParam) throw new Error('@filter parameter cannot be empty!');
    else if (typeof filterParam !== 'string') throw new Error('@filter parameter must be a string!');

    const providedURL = url?.trim();

    if (filterParam?.toLowerCase() === 'youtube') {
        const regexCheckYoutubeUrl = /^(?:https?:\/\/)?(?:www\.)?(youtube\.com(\/[^\s]*)?|youtu\.be\/[^\s]+)$/gi;
        return !!providedURL?.match(regexCheckYoutubeUrl);
    }

    const regexCheckCustomUrl = new RegExp('^(?:https?:\\/\\/)?(?:www\\.)?' + filterParam?.toString() + '\\.[-=;:?!#@$&_~\'+,a-zA-Z0-9./]+$', 'gi');

    return !!providedURL?.match(regexCheckCustomUrl);
};

// --| CommonJS export
module.exports = customUrl;

// --| ESM default export for `import` statements
module.exports.default = customUrl;
