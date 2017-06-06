/**
 * Created by joyce on 2017/5/1.
 */

$(function () {
    $(".thumbnail>img").mouseenter(function () {
        var index=$(".thumbnail>img").index(this);
        $(".cover_img").eq(index).fadeIn(100);
        $(".cover_img>span").css("cursor","pointer");
    });
    $(".cover_img").mouseout(function () {
        $(this).fadeOut(100);
    });
    $(".list-group1>a:last-child").on("click",function () {
        $(".list-group2").toggleClass("isShow");
        if($(".list-group1>a:last-child>span:last-child").hasClass("glyphicon-menu-right")){
            $(".list-group1>a:last-child>span:last-child").removeClass("glyphicon-menu-right");
            $(".list-group1>a:last-child>span:last-child").addClass("glyphicon-menu-down");
        }else{
            $(".list-group1>a:last-child>span:last-child").removeClass("glyphicon-menu-down");
            $(".list-group1>a:last-child>span:last-child").addClass("glyphicon-menu-right");
        }
    });


    /*显示图片*/
    $(".cover_img").click(function () {
        $(".cover_showImg").fadeIn(300);
        //获取被点击的图片索引
        var index=$(".cover_img").index(this);
        //获取被点击的src
        var src=$(".thumbnail>img").eq(index).attr("src");
        //将获取的src设置成显示图片层中的img的src
        $(".cover_showImg>img").attr("src",src);
    });

    /*关闭显示图片层*/
    //点击关闭图标
    $(".glyphicon-remove-circle").on("click",function () {
        $(".cover_showImg").fadeOut(300);
    });
    //点击显示图片层
    $(".cover_showImg").on("click",function () {
        $(this).fadeOut(300);
    });

})
