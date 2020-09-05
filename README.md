# custom-url-check

<p align="center">🐜</p>

<p align="center"><a href="https://nodei.co/npm/custom-url-check/"><img src="https://nodei.co/npm/custom-url-check.png"></a></p>

* Simple NPM package to check a string for a valid custom filtered URL!
* See examples below

# Install via [NPM](https://www.npmjs.com/package/custom-url-check)

`$ npm i custom-url-check `

# Usage

- Returns a Boolean indicating whether `string` is a valid URL and contains the specified community `filter`
- `filter` parameter is case-insensitive

```javascript
const customURL = require("custom-url-check");

// --| customURL(url, filter);
// --| The below URL is not a valid YouTube URL
customURL("amazon.co.uk", "youtube");
customURL("www.google.pl", "YouTube");
customURL("https://www.github.com", "youtube");

// --| customURL(url, filter);
// --| The below URL is a valid YouTube URL
customURL("https://www.youtube.com/", "YouTube");
customURL("www.youtube.com", "youtube");
customURL("youtube.com", "YouTUBE");
customURL("https://www.youtube.com/watch?v=w3jLJU7DT5E", "Youtube");
```

# Example

```javascript
const customURL = require("custom-url-check");

const TestURL =
[
    "https://www.npmjs.com/",
    "www.googl.co.uk",
    "www.youtube.ro",
    "http://google.com",
    "https://www.google.com",
    "http://www.google.com",
    "www.google.com",
    "google.com"
];

TestURL.forEach(element =>
{
    if(customURL(element, "GoOgLe"))
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

<p align="center">
  <img src="https://i.imgur.com/2B0b4nQ.png"><br/>
</p>

<p align="center">🐜</p>
