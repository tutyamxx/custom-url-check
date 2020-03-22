/**
 *  check-custom-url - Simple NPM package to check a string for a valid custom filtered URL!
 *  @version: v1.1.6
 *  @link: https://github.com/tutyamxx/custom-url-check
 *  @license: MIT
 **/

module.exports = (url, filter) =>
{
    if(url.length <= 0 || !url || typeof url !== "string")
    {
        return false;
    }

    if(filter.length <= 0 || !filter || typeof filter !== "string")
    {
        throw "@filter parameter cannot be empty!";
    }

    const ProvidedURL = url.trim();
    const RegexCheckCustomURL = new RegExp("^(?:https?:\/\/)?(?:www\.)?" + filter.toString() + "\.[-=;:?!#@$&_~'+,a-zA-Z0-9./]+$", "gi");

    if(ProvidedURL.match(RegexCheckCustomURL))
    {
        return true;
    }
};