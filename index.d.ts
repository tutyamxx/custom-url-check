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
declare function customUrl(url: string | undefined | null, filterParam: string | undefined | null): boolean;

export = customUrl;
