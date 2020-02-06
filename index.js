/**
 *  check-custom-url - Check if a string is a custom community URL that you want!
 *  @version v1.0.1
 *  @link    
 *  @license MIT
 **/

module.exports = (url, options) =>
{
    if(url.length <= 0 || !url || typeof url !== "string")
    {
        return false;
    }

    if(options.length <= 0 || !options || typeof options !== "string")
    {
        throw "@options parameter cannot be empty!";
    }

    const ProvidedURL = url.trim();
    let RegexCheckCustomURL = new RegExp("^(?:https?:\/\/)?(?:www\.)?" + options.toString() + "\.[-a-zA-Z0-9./]+$", "gi");
    
    if(ProvidedURL.match(RegexCheckCustomURL))
    {
        return true;
    }
};