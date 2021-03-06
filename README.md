# My curriculum vitae (CV)

[![Deployment on GitHub Pages](https://github.com/gif30/cv/workflows/Deploy-GitHubPages/badge.svg)](https://github.com/gif30/cv/actions?query=workflow%3ADeploy-GitHubPages)

## Prospective employers

Visit the HTML version at https://gif30.com/cv.

Or, view the raw YAML at  https://github.com/gif30/cv/blob/main/cv.yaml.

## Background

The notion of a [JSONResume](https://jsonresume.org/) is amazing -- an standard
interchange for resume/CV data.  However, whilst JSON is great from a programmatic
point-of-view, it is simply too verbose and tedious for hand-crafting by a
human.  Have you ever forgotten a brace or added an extra comma?  Sure, me too.

Thankfully, despite the project being _called_ JSONResume, it now also
supports YAML because YAML, on the other hand, is easy to create and edit.
It's also extremely human readable and that's the main point of a
CV/resumé.

## Building

Any commit or change made to this repository will automatically deploy the
changes to GitHub Pages.

To build locally, however, run the following:
    yarn install
    yarn
    export JSONCV_THEME=kendall
    yarn view

This will automatically build and display the resulting `cv.html` in your browser.
