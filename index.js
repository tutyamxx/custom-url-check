/**
 *  check-custom-url - Check if a string is a custom community URL that you want!
 *  @version v1.0.1
 *  @link    
 *  @license MIT
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
    let RegexCheckCustomURL = new RegExp("^(?:https?:\/\/)?(?:www\.)?" + filter.toString() + "\.[-a-zA-Z0-9./]+$", "gi");
    
    if(ProvidedURL.match(RegexCheckCustomURL))
    {
        return true;
    }
};