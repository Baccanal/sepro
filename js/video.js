/*
let listVideo = document.querySelectorAll('.small-video video');
//onsole.log(listVideo);
let mainVideo = document.querySelector('.main-video video');
//console.log(mainVideo);
let title = document.querySelector('.main-video .title');
//console.log(title);
listVideo.forEach(video =>{
    video.onclick = () => {
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if(video.classList.contains('active')){
            let src = video.getAttribute('src');
            console.log(src);
            mainVideo.setAttribute('src', src);
            //mainVideo.src = src;
            //let text = video.children[1].innerHTML;
            //title.innerHTML = text;
        };
    };

});


$(document).ready(function(){
    $('.v-container .v-wrapper .small-video video').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        /*let src = $(this).attr('src');
        console.log(src);
        $('.main-video').attr('src', src);
        
    });
});
*/

let videoList = document.querySelectorAll('.v-container .v-wrapper .small-video .title');
let mainVideo = document.querySelector('.main-video video');
videoList.forEach(video =>{
    video.addEventListener('click',(e) => {
        //remove active class
        videoList.forEach(vid =>{
            vid.previousElementSibling.classList.remove('active')
        });

        //get clicked target
        let selectedTitle = e.target.innerHTML;
        console.log(selectedTitle);
        let selectedSRC = e.target.previousElementSibling.getAttribute('src');
        console.log(selectedSRC);

        //set src for main video
        mainVideo.setAttribute('src',selectedSRC);

        // set Title for main video
        mainVideo.nextElementSibling.innerHTML = selectedTitle;

        //add class active to the clicked
        e.target.previousElementSibling.classList.add('active');
    });
})


    
    

