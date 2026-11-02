// Mobile sidebar toggle
(function () {
  var btn = document.getElementById('menuBtn');
  var sidebar = document.getElementById('sidebar');
  if (btn && sidebar) {
    btn.addEventListener('click', function () { sidebar.classList.toggle('open'); });
    // close when a TOC link is tapped on mobile
    sidebar.addEventListener('click', function (e) {
      if (e.target.classList.contains('toc-link') && window.innerWidth <= 980) {
        sidebar.classList.remove('open');
      }
    });
  }
})();

// Scroll-spy: highlight the current section in the TOC
(function () {
  var links = Array.from(document.querySelectorAll('.toc-link'));
  var byId = {};
  links.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    byId[id] = a;
  });
  var targets = Object.keys(byId)
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  if (!('IntersectionObserver' in window) || targets.length === 0) return;

  var visible = new Set();
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target);
    });
    // pick the topmost visible target
    var best = null, bestTop = Infinity;
    visible.forEach(function (t) {
      var top = t.getBoundingClientRect().top;
      if (top < bestTop) { bestTop = top; best = t; }
    });
    if (best) {
      links.forEach(function (l) { l.classList.remove('active'); });
      var a = byId[best.id];
      if (a) {
        a.classList.add('active');
        // keep active link in view within the sidebar
        var sb = document.getElementById('sidebar');
        if (sb && a.offsetTop < sb.scrollTop || a.offsetTop > sb.scrollTop + sb.clientHeight) {
          // gentle nudge only
        }
      }
    }
  }, { rootMargin: '0px 0px -70% 0px', threshold: 0 });

  targets.forEach(function (t) { obs.observe(t); });
})();
