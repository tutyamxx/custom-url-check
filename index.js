/**
 *  check-custom-url - Determinate if a string is a custom specific URL
 *  @version v1.0.0
 *  @link    
 *  @license MIT
 **/

module.exports = (url, options) =>
{
    if(url.length <= 0 && !url)
    {
        return false;
    }

    const ProvidedURL = url.trim();
    let RegexCheckCustomURL = new RegExp("^(?:https?:\/\/)?(?:www\.)?" + options.toString() + "\.[-a-zA-Z0-9./]+$", "gi");
    
    if(ProvidedURL.match(RegexCheckCustomURL))
    {
        return true;
    }
};