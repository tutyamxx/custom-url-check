# custom-url-check

<p align="center">🐜</p>

* Simple NPM package to check a string for a valid custom filtered URL!
* See examples below

# Install via [NPM](https://www.npmjs.com/package/custom-url-check)

`$ npm i custom-url-check `

# Usage

- Returns a Boolean indicating whether `string` is a valid URL and contains the specified community `filter`
- `filter` parameter is case-insensitive

```javascript
const CheckCustomURL = require("custom-url-check");

// --| CheckCustomURL(url, filter);
// --| The below URL is not a valid YouTube URL
CheckCustomURL("amazon.com", "youtube");
CheckCustomURL("www.google.com", "YouTube");
CheckCustomURL("https://www.github.com", "youtube");

// --| CheckCustomURL(url, filter);
// --| The below URL is a valid YouTube URL
CheckCustomURL("https://www.youtube.com/", "YouTube");
CheckCustomURL("www.youtube.com", "youtube");
CheckCustomURL("youtube.com", "YouTUBE");
CheckCustomURL("https://www.youtube.com/watch?v=w3jLJU7DT5E", "Youtube");
```

# Example

```javascript
const CheckCustomURL = require("custom-url-check");

const TestURL = 
[
    "https://www.npmjs.com/",
    "www.googl.co.uk",
    "www.youtube.com",
    "http://google.com",
    "https://www.google.com",
    "http://www.google.com",
    "www.google.com",
    "google.com"
];

TestURL.forEach(element =>
{
    if(CheckCustomURL(element, "GoOgLe"))
    {
        console.log(element + " It's a valid Google URL! ✅");
    }

    else
    {
        console.log(element + " Is not a valid Google URL! ❌");
    }
});
```

# Result of the example above

![Result](https://github.com/tutyamxx/check-custom-url/blob/master/example.PNG)

<p align="center">🐜</p>
