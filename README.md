# check-custom-url

<p align="center">🐜</p>

* Simple NPM package to check a string for a valid custom filtered URL!
* See examples below

# Install via NPM

`$ npm i check-custom-url `

# Usage

- Returns a Boolean indicating whether `string` is a valid URL and contains the specified community `filter`
- `filter` parameter is case-insensitive

```javascript
CheckCustomURL(url, filter);

// --| The below URL is not a valid YouTube URL
CheckCustomURL("amazon.com", "youtube");
CheckCustomURL("www.google.com", "YouTube");
CheckCustomURL("https://www.github.com", "youtube");


// --| The below URL is a valid YouTube URL
CheckCustomURL("https://www.youtube.com/", "YouTube");
CheckCustomURL("www.youtube.com", "youtube");
CheckCustomURL("youtube.com", "YouTUBE");
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
