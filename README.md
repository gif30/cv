# My curriculum vitae (CV)

[![Deployment on GitHub Pages](https://github.com/gif30/cv/workflows/Deploy-GitHubPages/badge.svg)](https://github.com/gif30/cv/actions?query=workflow%3ADeploy-GitHubPages)

## Prospective employers

Visit the HTML version at <https://gif30.com/cv>.

Or, view the raw YAML at  <https://github.com/gif30/cv/blob/main/cv.yaml>.

## Background

The notion of a [JSONResume](https://jsonresume.org/) is amazing -- an standard
interchange for resume/CV data.  However, whilst JSON is great from a programmatic
point-of-view, it is simply too verbose and tedious for hand-crafting by a
human.  Have you ever forgotten a brace or added an extra comma?  Sure, me too.

Thankfully, despite the project being _called_ JSONResume, it now also
supports YAML because YAML, on the other hand, is easy to create and edit.
It's also extremely human readable and that's the main point of a
CV/resumé.

## First usage

``` bash
#sudo apt-get install libnss3
#sudo apt-get install ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils
npm ci

export JSONCV_THEME=kendall
#npm run export-pdf
npm run export-html
```

## How to create index.html manually (EASY WAY)

``` bash
# esto
npm run export-localtheme
# o esto
export JSONCV_THEME=flat
npm run export-html
# o en español
npm run export-spanish
```

## Building

Any commit or change made to this repository will automatically deploy the
changes to GitHub Pages.

To build locally, however, run the following:
    yarn install
    yarn
    export JSONCV_THEME=kendall
    yarn export

This will automatically build your cv as html and pdf.
