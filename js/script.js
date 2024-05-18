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

   // change theme splash
   const themes = ['def', 'theme-color-1', 'theme-color-2'];
   let currentThemeIndex = 0;

   $('#theme-switcher').click(function() {
     currentThemeIndex = (currentThemeIndex + 1) % themes.length;
     $('html').attr('data-bs-theme', themes[currentThemeIndex]);
   });
  });
