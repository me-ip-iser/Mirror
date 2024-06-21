navigator.mediaDevices.getUserMedia({
    audio:false,
    video:true,
}).then (stream => {
    let video = document.getElementById("mir")
    video.srcObject = stream;  
})
