routes = [
  {
    path: '/detail/:itemId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var itemId = routeTo.params.itemId;
      // Simulate Ajax Request

      setTimeout(function () {
        // We got user data from request

        // Hide Preloader
        app.preloader.hide();
        app.request.json('http://132.232.57.130:8505/wp-json/tokennews/v1/post',
        {
          id:itemId
        },function(result){
          console.log(result);
          resolve({
            componentUrl: './pages/itemdetail.html',
          }, {
            context: {
              news:result.data[0],
            }
          });
        }
        )




        // Resolve route to load page
        
      }, 50);
    },
  },
  {
    path: '(.*)',
    url: './pages/404.f7.html',
  },
];