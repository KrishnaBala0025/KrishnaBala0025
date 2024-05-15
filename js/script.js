$(document).ready(function() {
    $('#darkMode').change(function() {
      var theme = $('body').attr('data-bs-theme');
      $('body').attr('data-bs-theme','dark');
      if(theme === 'dark') {
        $('body').attr('data-bs-theme','');
      }
    });

    $('input[name="colorTheme"]').change(function() {
      var selectedTheme = $(this).val();
      $('html').attr('data-bs-theme', selectedTheme);
    });

  // navbar height
    var headerHeight = $('.mainHeader').outerHeight();
    $('.pageContent').css('padding-top', headerHeight + 'px');

  });
