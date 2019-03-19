var $$ = Dom7;
var app = new Framework7({
  precompileTemplates: true,
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  theme: 'auto', // Automatic theme detection
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  routes: routes,
  // ... other parameters
});

// Helper to format dates



var mainView = app.views.create('.view-main');
Template7.registerHelper('formatDate', function (date) {
  var months = ('01 02 03 04 05 06 07 08 09 10 11 12').split(' ');
  var _date = new Date(date);
  var month = months[_date.getMonth()];
  var day = _date.getDate();
  var year = _date.getFullYear();
  var h = _date.getHours();
  h = h < 10 ? '0' + h : h;
  var m = _date.getMinutes();
  m = m < 10 ? '0' + m : m;
  return year + "-" + month + "-" + day;
});



  app.request.get('http://132.232.57.130:8505/wp-json/tokennews/v1/recommended',
    function (data) {
      var re_data = JSON.parse(data);
      console.log(re_data);
      var template_re = document.getElementById("show-template").innerHTML; //
      var compiledTemplate_re = Template7(template_re).compile();
      var html_re = compiledTemplate_re(re_data);
      document.getElementById('content-wrap').innerHTML = html_re;
    });

var template_card = document.getElementById('show_card').innerHTML; //媒体新闻
var compiledTemplate_card = Template7(template_card).compile();
app.request.get('http://132.232.57.130:8505/wp-json/tokennews/v1/cat', {
  id: 10,
  offset: 1,//待解决
  length: 6
}, function (data) {
  var card_data = JSON.parse(data);
  console.log(card_data);

  var html_card = compiledTemplate_card(card_data);
  document.getElementById('card_good').innerHTML = html_card;

});
var template_notice = document.getElementById("new-notice").innerHTML; //最新通知
var compiledTemplate_notice = Template7(template_notice).compile();
app.request.get('http://132.232.57.130:8505/wp-json/tokennews/v1/cat', {
    id: 7,
  },
  function (data) {
    var notice_data = JSON.parse(data);
    console.log(notice_data);
    var html_notice = compiledTemplate_notice(notice_data);
    document.getElementById("tab-2").innerHTML = html_notice;

  });
var template_like = document.getElementById("new-like").innerHTML; //收藏
var compiledTemplate_like = Template7(template_like).compile();
app.request.json('http://132.232.57.130:8505/wp-json/tokennews/v1/favorite', {
  cardNo: '214198'
}, function (data) {
  //console.log(data);
  var html_like = compiledTemplate_notice(data);
  document.getElementById("tab-3").innerHTML = html_like;

});