/**
 * This is useful for userscripts that need some website's native {@link Element}
 * (most often, an {@link HTMLElement}) to load before the userscript can
 * continue execution.
 *
 * Adapted from a Stack Overflow answer by Yong Wang.
 *
 * 	https://stackoverflow.com/a/61511955/1083697
 *
 * Avoid calling this function twice for the same `selector`,
 * unless you can reasonably guarantee that the {@link Promise}
 * returned by the previous invocation has been resolved.
 *
 * @param {string} selector a CSS query selector for the required
 * element
 * @returns {Promise<Element>} a {@link Promise} that resolves with the
 * {@link Element} that the given `selector` corresponds to
 * according to the function {@link Document.querySelector}.
 */
function waitForElement(selector) {
	return new Promise(resolve => {
		const queryResult = document.querySelector(selector);
		if (queryResult) {
			return resolve(queryResult);
		}
		const observer = new MutationObserver(mutations => {
			const queryResult = document.querySelector(selector);
			if (queryResult) {
				/*
				 * Disconnect first, just in case the listeners
				 * on the returned Promise trigger the observer
				 * again.
				 */
				observer.disconnect();
				resolve(queryResult);
			}
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	});
}
