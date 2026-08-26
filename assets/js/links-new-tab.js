// Open external links in a new tab — including links generated dynamically
// after load (e.g. search results), by intercepting clicks instead of only
// tagging links present at DOMContentLoaded. Internal site navigation
// (same domain) is left alone and opens in the same tab, per usual
// website convention.
(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    // Skip anchors, mailto/tel, and links that already opt out.
    if (!href || href.charAt(0) === '#') return;
    if (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;

    var url;
    try {
      url = new URL(href, window.location.href);
    } catch (err) {
      return;
    }

    // Same domain (internal navigation) — let the browser handle it normally.
    if (url.hostname === window.location.hostname) return;

    // Different domain (external link) — open in a new tab.
    e.preventDefault();
    var win = window.open(url.href, '_blank', 'noopener');
    if (win) win.opener = null;
  });
})();

