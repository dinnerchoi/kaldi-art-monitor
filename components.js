(function () {
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var dateKR = year + '\uB144 ' + month + '\uC6D4 ' + day + '\uC77C';

  // ISO week number
  var d = new Date(Date.UTC(year, now.getMonth(), day));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var weekNum = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

  // Detect current page
  var path = location.pathname.split('/').pop() || 'index.html';
  if (path === '' || path.indexOf('.html') === -1) path = 'index.html';

  var navItems = [
    { href: 'index.html', label: 'Overview' },
    { href: 'fair.html', label: '\uD398\uC5B4' },
    { href: 'gallery-shows.html', label: '\uAC24\uB7EC\uB9AC \uC804\uC2DC' },
    { href: 'museum-shows.html', label: '\uAE30\uAD00 \uC804\uC2DC' }
  ];

  // Masthead
  var masthead = document.getElementById('masthead');
  if (masthead) {
    masthead.innerHTML =
      '<div class="masthead-inner">' +
        '<h1><a href="index.html"><span>KALDI</span> ART</a></h1>' +
        '<div class="masthead-meta">Global Monitor &mdash; ' + dateKR + ' &middot; Week ' + weekNum + '</div>' +
      '</div>';
  }

  // Nav
  var nav = document.getElementById('nav');
  if (nav) {
    var lis = '';
    for (var i = 0; i < navItems.length; i++) {
      var item = navItems[i];
      var cls = item.href === path ? ' class="active"' : '';
      lis += '<li><a href="' + item.href + '"' + cls + '>' + item.label + '</a></li>';
    }
    nav.innerHTML = '<ul>' + lis + '</ul>';
  }

  // Footer
  var footer = document.getElementById('footer');
  if (footer) {
    var isIndex = path === 'index.html';
    var extra = isIndex
      ? '\uBCF8 \uB9AC\uD3EC\uD2B8\uB294 KALDI ART \uB0B4\uBD80\uC6A9\uC73C\uB85C \uC791\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4.<br>' +
        '\uCD9C\uCC98\uAC00 \uBA85\uC2DC\uB418\uC9C0 \uC54A\uC740 \uC815\uBCF4\uB294 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br><br>'
      : '';
    footer.innerHTML =
      '<div class="container">' +
        '<strong>KALDI ART</strong> &middot; Global Monitor<br>' +
        extra +
        '&copy; ' + year + ' KALDI ART. All rights reserved.' +
      '</div>';
  }
})();
