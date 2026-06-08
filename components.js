(function () {
  // ── Edition (pinned to the briefing date for an accurate archive) ──
  var EDITION = { year: 2026, month: 6, day: 8, week: 24 };
  var dateKR = EDITION.year + '년 ' + EDITION.month + '월 ' + EDITION.day + '일';

  // Detect current page
  var path = location.pathname.split('/').pop() || 'index.html';
  if (path === '' || path.indexOf('.html') === -1) path = 'index.html';

  var navItems = [
    { href: 'index.html', label: 'Overview' },
    { href: 'gallery.html', label: '갤러리·전속' },
    { href: 'market.html', label: '옥션·페어' },
    { href: 'artists.html', label: '작가' },
    { href: 'exhibitions.html', label: '전시' },
    { href: 'policy.html', label: '정책·규제' },
    { href: 'calendar.html', label: '캘린더' }
  ];

  // Masthead
  var masthead = document.getElementById('masthead');
  if (masthead) {
    masthead.innerHTML =
      '<div class="masthead-inner">' +
        '<h1><a href="index.html"><span>KALDI</span> ART</a></h1>' +
        '<div class="masthead-meta">Global Monitor &mdash; ' + dateKR + ' &middot; Week ' + EDITION.week + '</div>' +
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
      ? '본 리포트는 KALDI ART 내부용으로 작성되었습니다.<br>' +
        '출처가 명시되지 않은 정보는 포함하지 않습니다.<br><br>'
      : '';
    footer.innerHTML =
      '<div class="container">' +
        '<strong>KALDI ART</strong> &middot; Global Monitor<br>' +
        extra +
        '&copy; ' + EDITION.year + ' KALDI ART. All rights reserved.' +
      '</div>';
  }
})();
