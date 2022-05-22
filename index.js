/**
 *  check-custom-url - Simple NPM package to check a string for a valid custom filtered URL!
 *  @version: v1.2.5
 *  @link: https://github.com/tutyamxx/custom-url-check
 *  @license: MIT
 **/

module.exports = (url, filterParam) => {
    if (!url) throw new Error('@url parameter cannot be empty!');
    else if (typeof url !== 'string') throw new Error('@url parameter must be a string!');

    if (!filterParam) throw new Error('@filter parameter cannot be empty!');
    else if (typeof filterParam !== 'string') throw new Error('@filter parameter must be a string!');

    const providedURL = url?.trim();
    const regexCheckCustomUrl = new RegExp('^(?:https?:\/\/)?(?:www\.)?' + filterParam.toString() + '\.[-=;:?!#@$&_~\'+,a-zA-Z0-9./]+$', 'gi');

    return !!providedURL?.match(regexCheckCustomUrl);
};
