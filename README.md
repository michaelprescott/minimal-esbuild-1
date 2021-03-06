# minimal-esbuild-1
Minimalistic esbuild - 1

About
=====
A minimalistic esbuild project.

NOTE: esbuild is amazingly fast; however, code splitting does not currently allow separating a vendor bundle from application code.  Notice how the app.js bundle is over 1MB here because React was compiled into our 12-line example application.

REFERENCE: https://github.com/evanw/esbuild/issues/16

Getting Started
---------------
1. Install NVM (Node Version Manager)
    * https://github.com/nvm-sh/nvm#installing-and-updating
2. Install Node.js using NVM
    * `nvm install node`
3. From the root of the project director
    * `npm install`
    * `npm run start`


Configure Environment
=====================

Sublime Text
------------
When using Sublime Text plugins that require Node.js, and using NVM (Node Version Manager), Sublime cannot locate `node` to run plugins that depend on it.  To solve this problem:

1. Sublime > Preferences > Settings
2. Revise the Preferences.sublime-settings to specify the node_path. For example:

```
{
  "ignored_packages":
  [
    "Vintage",
  ],
  "node_path": "/Users/yourusername/.nvm/versions/node/v17.3.1/bin/node"
}
```
