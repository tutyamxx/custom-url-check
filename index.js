/**
 *  check-custom-url - Simple NPM package to check a string for a valid custom filtered URL!
 *  @version: v1.2.2
 *  @link: https://github.com/tutyamxx/custom-url-check
 *  @license: MIT
 **/

module.exports = (url, filterParam) => {
    if (url?.length <= 0 || !url || typeof url !== "string") return false;
    if (filterParam?.length <= 0 || !filterParam || typeof filterParam !== "string") throw "@filter parameter cannot be empty!";

    const providedURL = url.trim();
    const regexCheckCustomURL = new RegExp("^(?:https?:\/\/)?(?:www\.)?" + filterParam?.toString() + "\.[-=;:?!#@$&_~'+,a-zA-Z0-9./]+$", "gi");

    return providedURL.match(regexCheckCustomURL) ? true : false;
};
