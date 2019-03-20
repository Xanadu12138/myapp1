var $$ = Dom7;
var app = new Framework7({
  precompileTemplates: true,
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  theme: 'md', // Automatic theme detection
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
var template = document.getElementById('show-template').innerHTML;
var compiledTemplate = Template7(template).compile();
var jsonData = {
  goods1: [{
      background: "http://img02.liwushuo.com/image/181204/wjpg1yhxp.jpg",
      title: "秋冬凹造型，不能少了这几款气质爆灯的单鞋！"
    },
    {
      background: "http://img01.liwushuo.com/image/181204/1rkjvn1sk.jpg",
      title: "十款红红火火开运单品，本命年没有在怕的！"
    },
    {
      background: "http://img03.liwushuo.com/image/190127/71pefy643.jpg",
      title: "每逢新年，家家户户都要办年货鞋！"
    },
    {
      background: "http://img03.liwushuo.com/image/190125/c07ctzm65.jpg",
      title: "200元也能送出新意，就看这些创意情人节礼物"
    },
  ]
};
  var content=document.getElementById("content");
  var obj = document.getElementById("menu");
  var _getHeight = obj.offsetTop;
  //console.log(_getHeight);
  var obj1=document.getElementById("1");
  obj1.onscroll = function() {
    var obj=document.getElementById("menu");
    var tabheight=obj.offsetHeight;
    var card_content=document.getElementById("tab-1");
    var cardgood=document.getElementById("card_good");
    var cardheight=cardgood.offsetHeight;
    var obj1=document.getElementById("1");
    var objheight=cardgood.offsetHeight;
    console.log(objheight);
    content.style.setProperty('height',objheight+50+"px");
    //console.log(_getHeight);
    //console.log(tabheight);
    var scrollTop = document.documentElement.scrollTop || obj1.scrollTop;
    //console.log(scrollTop);
    if (scrollTop < _getHeight) {
      obj.style.setProperty('position', 'relative');
      card_content.style.setProperty('margin-top',"0px");
  } else {
      obj.style.setProperty('position', 'fixed');
      obj.style.setProperty('top', '0');
      
      //console.log(card_content);
      card_content.style.setProperty('margin-top',tabheight+"px");

  }
  }


var html = compiledTemplate(jsonData);
document.getElementById('content-wrap').innerHTML = html;

var template_card = document.getElementById('show_card').innerHTML; //媒体新闻
var compiledTemplate_card = Template7(template_card).compile();
app.request.get('http://132.232.57.130:8505/wp-json/tokennews/v1/cat', {
  id: 10,
  offset: 1,//待解决
  length: 10
}, function (data) {
  var card_data = JSON.parse(data);
  console.log(card_data);

  var html_card = compiledTemplate_card(card_data);
  document.getElementById('card_good').innerHTML = html_card;

});
var template_notice = document.getElementById("new-notice").innerHTML;
var compiledTemplate_notice = Template7(template_notice).compile();
app.request.get('http://132.232.57.130:8505/wp-json/tokennews/v1/cat', {
  id:7,
},
function (data) {
  var notice_data = JSON.parse(data);
  console.log(notice_data);
  var html_notice = compiledTemplate_notice(notice_data);
  document.getElementById("tab-2").innerHTML = html_notice;

});
var template_like = document.getElementById("new-like").innerHTML;
var compiledTemplate_like = Template7(template_like).compile();
app.request.json('http://132.232.57.130:8505/wp-json/tokennews/v1/favorite',{
  cardNo:'21498'
},function(data){
var html_like = compiledTemplate_notice(data);
  document.getElementById("tab-3").innerHTML = html_like;

});
