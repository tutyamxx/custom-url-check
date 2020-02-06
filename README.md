# check-custom-url
* 🐜 Simple NPM package to check if a string is valid and a specific community URL!
* Check if a string is a custom community URL that you want!

# Install via NPM

`$ npm i check-custom-url `

# Usage

```javascript
CheckCustomURL(url, filter); // filter is case-insensitive


// --| The below URL is not a valid YouTube URL
CheckCustomURL("https://www.google.com", "YouTube");
CheckCustomURL("https://www.google.com", "YouTuBE");

// --| The below URL is a valid YouTube URL
CheckCustomURL("https://www.youtube.com/", "YouTube");
CheckCustomURL("https://www.youtube.com/", "youtuBE");
```

# Example

```javascript
const CheckCustomURL = require("check-custom-url");

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
]

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