let allImages = document.querySelectorAll("img");
allImages.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})
let allVid = document.querySelectorAll("video");
allVid.forEach((value)=>{
    value.oncontextmenu = (e)=>{
        e.preventDefault();
    }
})