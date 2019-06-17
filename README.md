# giphy-cli

This is based off of a fork of [git-cli](https://github.com/IonicaBizau/gif-cli)

It adds support for the GIPHY API.

The main commandline script is `./bin/giphy-cli`

Usage is:

```
Usage: giphy-cli [options] [command]

View animated GIFs in the terminal using GIPHY

Options:
  -V, --version       output the version number
  -n, --no-loop       prevent looping endlessly
  -k, --key           GIPHY API Key, if needed.  If unspecified, will check env for GIPHY_API_KEY
  -s, --stickers      results should include stickers instead of gifs.  This option only applies when using search, random, or translate.
  -h, --help          output usage information

Commands:
  search <query>      Search for a GIF.  A random image is selected from the top results.
  translate <phrase>  translate the specified phrase into a GIF
  id <gifId>          Display a GIPHY gif by specifying its id
  random              Display a random GIPHY gif
  trending            Display a trending GIPHY gif
  open <file>         Opens and displays a local GIF file
  url <gifURL>        Opens and displays a gif with the specified URL
```

# Caveats for Mac 

Just a quick note from my personal experience....

Start by doing 
```
brew install gifsicle
brew install graphicsmagick
```
before you do npm -g install.

---------------------------
---------------------------

# Everything Below This Line is From the Original Repo's README.md

---------------------------
---------------------------


<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# `$ gif`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/gif-cli.svg)](https://www.npmjs.com/package/gif-cli) [![Downloads](https://img.shields.io/npm/dt/gif-cli.svg)](https://www.npmjs.com/package/gif-cli) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>

> Gif animations in your terminal!

[![gif-cli](doc/nyan.gif)](#)

## Installation


This tool uses `image-to-ascii` as dependency–that means you have to [install GraphicsMagick first](https://github.com/IonicaBizau/image-to-ascii#installation). Then you can install `gif-cli`:

```sh
$ npm i -g gif-cli
```

## CLI Usage

```sh
gif-cli my-animation.gif
# or even shorter
gif my-animation.gif
```


Then your animated gif will appear in your terminal. :tada:


## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm` (or `yarn`):

```sh
# Using npm
npm install --save gif-cli

# Using yarn
yarn add gif-cli
```



```js
// Dependencies
var GifCli = require("giphy-cli")
  , CliFrames = require("cli-frames")
  ;

// Convert the gif file into text frames
GifCli(__dirname + "/nyantocat.gif", function (err, frames) {
    if (err) { return Logger.log(err, "error"); }

    // Show the animation
    var animation = new CliFrames();
    animation.load(frames);
    animation.start({
        repeat: true
      , delay: 50
    });
});
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:



## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`reimertz`](https://github.com/reimertz/reimertz#readme) (by Pierre Reimertz)—pierre reimertz on the cli

## :scroll: License

[MIT][license] © [Ionică Bizău][website]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
