var Translator = {
    _translate: function(sourceText, source, target ) {
        //debugger;
        var newScript = document.createElement('script');
          newScript.className += "google-translation";
          newScript.type = 'text/javascript';
          //var sourceText = escape(document.getElementById("sourceText").innerHTML);
          // WARNING: be aware that YOUR-API-KEY inside html is viewable by all your users.
          // Restrict your key to designated domains or use a proxy to hide your key
          // to avoid misuage by other party.
          var source = 'https://www.googleapis.com/language/translate/v2?key=AIzaSyApA2wejNd02xrhP4AogpxdGOoz8DNd0Zs&source='+source+'&target='+target+'&callback=translateText&q=' + sourceText;
          newScript.src = source;

          // When we add this script to the head, the request is sent off.
          document.getElementsByTagName('head')[0].appendChild(newScript);
    },
    translate : function(sourceText, target) {
      var newScript = document.createElement('script');
          newScript.className += "google-translation";
          newScript.type = 'text/javascript';
          //var sourceText = escape(document.getElementById("sourceText").innerHTML);
          // WARNING: be aware that YOUR-API-KEY inside html is viewable by all your users.
          // Restrict your key to designated domains or use a proxy to hide your key
          // to avoid misuage by other party.
          var source = 'https://www.googleapis.com/language/translate/v2/detect?key=AIzaSyApA2wejNd02xrhP4AogpxdGOoz8DNd0Zs&q='+ sourceText + '&callback=detect';
          newScript.src = source;

          // When we add this script to the head, the request is sent off.
          document.getElementsByTagName('head')[0].appendChild(newScript);
    }
}

function detect(res) {
  var source = res.data.detections[0][0].language;
}

function translateText(response) {
    //debugger;
    var translateScripts = document.getElementsByClassName("google-translation");
    for(var i =0, length = translateScripts.length ;i< length; i++) {
         translateScripts[i].parentNode.removeChild(translateScripts[i]);    
    }
    var messages = document.getElementById('messages');

    messages.innerHTML = messages.innerHTML + response.data.translations[0].translatedText + '<br>';
    messages.scrollTop = 10000;

   //$(".msg").html(response.data.translations[0].translatedText); 
    //document.getElementById("translation").innerHTML += "<br>" + response.data.translations[0].translatedText;
}