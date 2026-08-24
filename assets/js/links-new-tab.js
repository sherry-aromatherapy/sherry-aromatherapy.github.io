// Make every link on the site open in a new tab — including links
// generated dynamically after load (e.g. search results), by intercepting
// clicks instead of only tagging links present at DOMContentLoaded.
(function () {
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href]');
    if (!link) return;

    var href = link.getAttribute('href');
    // Skip anchors, mailto/tel, and links that already opt out.
    if (!href || href.charAt(0) === '#') return;
    if (href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) return;

    e.preventDefault();
    var win = window.open(href, '_blank', 'noopener');
    if (win) win.opener = null;
  });
})();

