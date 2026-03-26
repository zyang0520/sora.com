function addMeta() {
    var meta = document.createElement('meta');
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no";
    document.getElementsByTagName('head')[0].appendChild(meta);
}

function getCookie() {
  var cookies = document.getCookie.split(';');
  var cookieObj = {};
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    var parts = cookie.split('=');
    var name = parts[0];
    var value = parts[1];
    cookieObj[name] = value;
  }
  return cookieObj;
}

function runConsole() {
  var cookieObj = getCookie();
  if (cookieObj['sora_console'] === 'true') {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/eruda';
    document.body.appendChild(script);
    script.onload = function() {
      eruda.init();
    };
  }
}