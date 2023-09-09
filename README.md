Userscript libraries
====================

These are libraries for use in [userscripts][Wikipedia] by developers.

## How to use a library

Using `waitForElement.js` as an example – replace the filename in instructions
with the library you would like to use.

Add a [`@require` entry][vmRequire] to metadata of the userscript:

```
// @require https://github.com/rybak/userscript-libs/raw/<commit>/waitForElement.js
```

Replace the `<commit>` placeholder with the hash of the [commit][GitHubCommits]
that you want to use.

If you want to publish the userscript on Greasy Fork, you'll have to follow
their [policy on external scripts][GreasyForkPolicy].  This can be done using
the [JSDelivr CDN][JSDelivr] or other [content delivery networks approved by
Greasy Fork][GreasyForkCDNs].  Greasy Fork (rightly) doesn't allow using a
branch or a tag.

```
// @require https://cdn.jsdelivr.net/gh/rybak/userscript-libs@<commit>/waitForElement.js
```

## Libraries

### waitForElement

Provides a way for userscripts to wait for native HTML or SVG elements to be
loaded, before performing some operation on them.  Function `waitForElement`
takes a [selector][mdnSelector] as a parameter and returns a
[`Promise`][mdnPromise].  The returned `Promise` gets resolved with an
[`Element`][mdnElement] corresponding to the given selector, when the element
appears in the document.  Usage:

```js
waitForElement('#targetId').then(target => {
	// extract information from `target`:
	const text = target.innerText;
	// add your own elements to `target`:
	target.append("Hello, world!");
});
```

[Wikipedia]: https://en.wikipedia.org/wiki/Userscript
[vmRequire]: https://violentmonkey.github.io/api/metadata-block/#require
[GitHubCommits]: https://github.com/rybak/userscript-libs/commits/main
[GreasyForkPolicy]: https://greasyfork.org/en/help/external-scripts
[JSDelivr]: https://www.jsdelivr.com/?docs=gh
[GreasyForkCDNs]: https://greasyfork.org/en/help/cdns
[mdnSelector]: https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
[mdnPromise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[mdnElement]: https://developer.mozilla.org/en-US/docs/Web/API/Element
