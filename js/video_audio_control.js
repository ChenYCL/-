/**
 * Created by joyce on 2017/4/12.
 */
$(function () {
    var vList = ["media/mov1.mp4", "media/mov2.mp4", "media/mov3.mp4"]; // 初始化播放列表
    var vLen = vList.length;    //播放列表的长度
    var curr = 0;   //当前播放的视频

    var video = document.getElementById("example_video_1");

    video.addEventListener('ended', autoplay);
    autoplay();
    function autoplay(e) {
        video.src = vList[curr];
//            video.load();
        video.play();

        $(".cover_video").slideDown(500); //覆盖层向下展开
        $(".cover_video").delay(100).slideUp(500);   //覆盖层向上收起

        curr++;
        if(curr >= vLen){
            curr = 0; // 播放完了，重新播放
        }

    }

});

$(function () {
//            -----------------------------------------
    /*背景音乐功能*/
    var audio=document.getElementById("bg_music");

//        鼠标进入
    $(".on_btn").on("mouseover",function(){
        $(this).attr("src","img/header_icn01_on_ov.png");
        $(this).css("cursor","pointer");
    });
    $(".off_btn").on("mouseover",function(){
        $(this).attr("src","img/header_icn01_off_ov.png");
        $(this).css("cursor","pointer");
    });
//        鼠标离开
    $(".on_btn").on("mouseleave",function(){
        $(this).attr("src","img/header_icn01_on.png");
    });
    $(".off_btn").on("mouseleave",function(){
        $(this).attr("src","img/header_icn01_off.png");
    });
//        暂停功能
    $(".on_btn").click(function(){
        $(this).addClass("hide");
        $(".off_btn").removeClass("hide");
        audio.pause();
    });
//        播放功能
    $(".off_btn").click(function(){
        $(this).addClass("hide");
        $(".on_btn").removeClass("hide");
        audio.play();
    });


});
