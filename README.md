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
const customUrl = require("custom-url-check");

// --| customURL(url, filter);
// --| The below URL is not a valid YouTube URL
customUrl("amazon.co.uk", "youtube");
customUrl("www.google.pl", "YouTube");
customUrl("https://www.github.com", "youtube");

// --| customURL(url, filter);
// --| The below URL is a valid YouTube URL
customUrl("https://www.youtube.com/", "YouTube");
customUrl("www.youtube.com", "youtube");
customUrl("youtube.com", "YouTUBE");
customUrl("https://www.youtube.com/watch?v=w3jLJU7DT5E", "Youtube");
```

# Example

```javascript
const customUrl = require("custom-url-check");

const testUrl = [
    "https://www.npmjs.com/",
    "www.googl.co.uk",
    "www.youtube.ro",
    "http://google.com",
    "https://www.google.com",
    "http://www.google.com",
    "www.google.com",
    "google.com"
];

testUrl.forEach((element) => {
    if (customUrl(element, "GoOgLe")) {
        console.log(element + " It's a valid Google URL! ✅");
    }

    else {
        console.log(element + " Is not a valid Google URL! ❌");
    }
});
```

# Result of the example above

<p align="center">
  <img src="https://i.imgur.com/2B0b4nQ.png"><br/>
</p>

<p align="center">🐜</p>
