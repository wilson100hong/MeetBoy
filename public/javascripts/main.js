 var PeerConnection = window.PeerConnection || window.webkitPeerConnection00 || window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.RTCPeerConnection;

(function(){
    if(PeerConnection) {
        console.log("create stream")
        rtc.createStream({
          "video": {"mandatory": {}, "optional": []},
          "audio": true
        }, function(stream) {
          document.getElementById('local').src = URL.createObjectURL(stream);
          document.getElementById('local').play();
          //document.getElementById('you').muted = true;
          //videos.push(document.getElementById('you'));
          //rtc.attachStream(stream, 'you');
          //subdivideVideos();
        }); 
    } else {
        alert('Your browser is not supported or you have to turn on flags. In chrome you go to chrome://flags and turn on Enable PeerConnection remember to restart chrome');
    }

    var room = window.location.hash.slice(1);
    console.log(room);
    console.log("ws:" + window.location.href.substring(window.location.protocol.length).split('#')[0]);
    rtc.connect("ws:" + window.location.href.substring(window.location.protocol.length).split('#')[0], room);

    // note: make sure hostname available to all connecting clients
    // (ie. probably not `localhost`)
    //rtc.connect('ws://yourserveraddress:8001');


    rtc.on('add remote stream', function(stream, socketId) {
        console.log("ADDING REMOTE STREAM...");
    /*
    var clone = cloneVideo('you', socketId);
    document.getElementById(clone.id).setAttribute("class", "");
    rtc.attachStream(stream, clone.id);
    subdivideVideos();
    */
    });


})();


function init() {
  
  var room = window.location.hash.slice(1);
  console.log(room);
  console.log("ws:" + window.location.href.substring(window.location.protocol.length).split('#')[0]);
  rtc.connect("ws:" + window.location.href.substring(window.location.protocol.length).split('#')[0], room);



  rtc.on('disconnect stream', function(data) {
    console.log('remove ' + data);
    removeVideo(data);
  });
  
 // initFullScreen();
  //initNewRoom();
//  initChat();
}