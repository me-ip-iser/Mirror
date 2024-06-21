let video = document.getElementById("mir")
navigator.mediaDevices.getUserMedia({
    audio:false,
    video:true
}).then (stream => {
    video.srcObject = stream;  
}).catch(eror);