(function() {
  var endsWith;

  $(function() {
    var android_download_file, banner_img_file, banner_link_file, childTag, sponsor_email_info_file, vals, windows_download_file, _fn, _i, _len, _ref;
    if (window.location.hash) {
      $('.languages .dropdown-menu > li > a').each(function() {
        return $(this).prop('href', $(this).prop('href') + window.location.hash);
      });
    }
    if ($('#faq-toc')) {
      childTag = $('#faq-toc').data('child-tag');
      $('.anchor-target').each(function() {
        var child, childLink;
        child = $(childTag).appendTo($('#faq-toc'));
        childLink = $('<a>').appendTo(child);
        return childLink.prop('href', '#' + $(this).prop('id')).text($(this).data('anchor-text'));
      });
    }
    $(window).resize(function() {
      return $('.row').find('.equal-height:first').each(function() {
        var maxHeight;
        maxHeight = 0;
        $(this).closest('.row').find('.equal-height').each(function() {
          var thisHeight;
          $(this).height('');
          thisHeight = $(this).height();
          if (thisHeight > maxHeight) {
            return maxHeight = thisHeight;
          }
        });
        return $(this).closest('.row').find('.equal-height').height(maxHeight);
      });
    });
    setTimeout(function() {
      return $(window).resize();
    }, 10);
    banner_img_file = $('.sponsor-banner img').prop('src');
    banner_link_file = $('.sponsor-banner img').data('link-file');
    $.ajax({
      type: 'HEAD',
      url: banner_img_file
    }).done(function() {
      $('.show-if-sponsored').toggleClass('hidden', false);
      return $('.show-if-not-sponsored').toggleClass('hidden', true);
    }).error(function() {
      $('.show-if-sponsored').toggleClass('hidden', true);
      return $('.show-if-not-sponsored').toggleClass('hidden', false);
    });
    android_download_file = $('html').data('android-download-path');
    windows_download_file = $('html').data('windows-download-path');
    _ref = [[android_download_file, '.show-if-android'], [windows_download_file, '.show-if-windows']];
    _fn = function(fname, selector) {
      return $.ajax({
        type: 'HEAD',
        url: fname
      }).done(function() {
        return $(selector).toggleClass('hidden', false);
      }).error(function() {
        return $(selector).toggleClass('hidden', true);
      });
    };
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      vals = _ref[_i];
      _fn(vals[0], vals[1]);
    }
    /*
    We're disabling the sponsor banner link (for now). Most of our users are
    blocked from getting to most of our sponsors, so offering them the ability
    to try a link to them is misleading and potentially dangerous.
    $.getJSON(banner_link_file)
      .done (url) ->
        $link = $('<a target="_blank">').attr('href', url)
        $('.sponsor-info .sponsor-banner img').wrap($link)
    */

    if ($('.sponsor-email').length) {
      sponsor_email_info_file = $('.sponsor-email').data('email-info-file');
      $.getJSON(sponsor_email_info_file).done(function(email) {
        return $('.sponsor-email').prop('href', "mailto:" + email).text(email);
      });
    }
    $.ajax(PATH_TO_ROOT + '/assets/google-analytics-id').done(function(gaID) {
      var newScriptElem;
      gaID = gaID.trim() || '';
      if (!gaID) {
        return;
      }
      newScriptElem = $('<script>').text("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create','" + gaID + "','auto');ga('send','pageview');");
      return newScriptElem.insertBefore($('script').eq(0));
    });
    if ($('.slabtext-container').length) {
      $(window).load(function() {
        $('.slabtext-container').each(function(idx, elem) {
          var opts;
          opts = {};
          if ($(elem).data('max-font-size')) {
            opts.maxFontSize = $(elem).data('max-font-size');
          }
          return $(elem).slabText(opts);
        });
        if (navigator.userAgent.match(/MSIE\s([\d.]+)/)) {
          window.resizeBy(1, 0);
          return setTimeout(function() {
            return window.resizeBy(-1, 0);
          }, 1);
        }
      });
    }
    $('.localize-date').each(function(idx, elem) {
      var date, locale;
      locale = $('html').prop('lang');
      if (locale === 'fa') {
        locale = "" + locale + "-u-ca-persian";
      }
      date = new Date($(elem).text());
      return $(elem).text(date.toLocaleDateString(locale));
    });
    if (endsWith(window.location.pathname, '/download.html')) {
      if (window.location.hash === '#direct') {
        return $('#direct').insertBefore('#direct-priority-insert');
      }
    }
  });

  endsWith = function(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  };

}).call(this);
