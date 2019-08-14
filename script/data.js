module.exports = [
  // ["https://platform.twitter.com/widgets.js", ''],
  ['<script type="text/javascript" src="https://buttons.github.io/buttons.js"></script>', ''],
  [`<script>window.fbAsyncInit = function() {FB.init({appId:'1677033832619985',xfbml:true,version:'v2.7'});};(function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) {return;}js = d.createElement(s); js.id = id;js.src = '//connect.facebook.net/en_US/sdk.js';fjs.parentNode.insertBefore(js, fjs);}(document, 'script','facebook-jssdk'));
                </script>`, ''],
  ["https://connect.facebook.net/en_US/sdk.js", "/cdn/sdk.js"],
  ["https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.css", '/cdn/docsearch.min.css'],
  ["//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/solarized-dark.min.css", '/cdn/solarized-dark.min.css'],
  ["https://platform.twitter.com/widgets.js", "/cdn/widgets.js"],
  ["https://cdn.jsdelivr.net/docsearch.js/1/docsearch.min.js", '/cdn/docsearch.min.js'],
  ["https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js", '/cdn/focus-visible.min.js'],
  ["https://snack.expo.io/embed.js", '/cdn/embed.js'],
  ["https://facebook.github.io/react-native/js/codeblocks.js", "/cdn/codeblocks.js"],
  ["https://facebook.github.io/react-native/js/tabs.js", "/cdn/tabs.js"],
  ["https://unpkg.com/vanilla-back-to-top@7.1.14/dist/vanilla-back-to-top.min.js", "/cdn/vanilla-back-to-top.min.js"],
  ["https://facebook.github.io/react-native/js/scrollSpy.js", "/cdn/scrollSpy.js"],
  ["https://facebook.github.io/react-native/js/codetabs.js", "/cdn/codetabs.js"],
  ["https://facebook.github.io/react-native/js/dissectionAnimation.js", "/cdn/dissectionAnimation.js"],
  [
    `<script>
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-41298772-2', 'auto');
              ga('send', 'pageview');
            </script>`, ""
  ]
]