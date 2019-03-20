function menuFixed(id) {
    var obj = document.getElementById(id);
    var _getHeight = obj.offsetTop;
  
    window.onscroll = function() {
        changePos(_getHeight);
    }
  }
  function changePos(height) {
    var obj = document.getElementById('headnavnone');
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop < height) {
        obj.style.setProperty('display', 'none');
    } else {
        obj.style.setProperty('display', 'block');
    }
  }