const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
    
   video.src=window.URL.createObjectURL(localMediaStream);
     
      video.play();
      
    })
    
}

function paintTocanvas(){
const width=video.videoWidth;
const height=video.videoHeight;
canvas.width=width;
canvas.height=Height;
 return setInterval(()=>{
 ctx.drawImage(video,0,0,width,height);

 },16);
}
video.addEventListener('canplay',paintTocanvas);