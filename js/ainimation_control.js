/**
 * Created by joyce on 2017/4/15.
 */
$(function () {
    //        -----------------------------------------
    //        菜单切换功能
    $(".open_btn").click(function(){
        $(this).addClass("hide");
        $(".close_btn").removeClass("hide");
        $("#c_menu").fadeIn(500);
        $("#main_menu>ul>li>a").eq(0).delay(500).fadeIn(500);
        $("#main_menu>ul>li>a").eq(1).delay(1000).fadeIn(500);
        $("#main_menu>ul>li>a").eq(2).delay(1500).fadeIn(500);
        $("#main_menu>ul>li>a").eq(3).delay(2000).fadeIn(500);

    });

    $(".close_btn").click(function(){
        $(this).addClass("hide");
        $(".open_btn").removeClass("hide");
        $("#c_menu").fadeOut(500);
        $("#main_menu>ul>li>a").fadeOut();
    });

    $("#close_menu").click(function(){
        $(".close_btn").addClass("hide");
        $(".open_btn").removeClass("hide");
        $("#c_menu").fadeOut(500);
        $("#main_menu>ul>li>a").fadeOut();
    });



    //        -----------------------------------------
    //    分享图标
    //鼠标进入
    $(".share_f").on("mouseover",function(){
        $(this).attr("src","img/header_icn02_ov.png");
        $(this).css("cursor","pointer");
    });
    //鼠标离开
    $(".share_f").on("mouseleave",function(){
        $(this).attr("src","img/header_icn02.png");

    });
    //鼠标进入
    $(".share_t").on("mouseover",function(){
        $(this).attr("src","img/header_icn03_ov.png");
        $(this).css("cursor","pointer");
    });
    //鼠标离开
    $(".share_t").on("mouseleave",function(){
        $(this).attr("src","img/header_icn03.png");
    });

    //个性菜单动画
    $("#c_bg1_1").mouseenter(function () {
        $(this).css("cursor","pointer");
        $(".cover_c_bg").animate({
            left:0
        },500);
        $("#c_bg1_1 span").animate({
            left:"4rem"
        },500);
    });
    $("#c_bg1_1").mouseout(function () {
        $(".cover_c_bg").animate({
            left:"-40rem"
        },500);
        $("#c_bg1_1 span").animate({
            left:"2rem"
        },500);
    });
    $("#c_bg2_2").mouseenter(function () {
        $(this).css("cursor","pointer");
        $(".cover_c_bg").animate({
            left:0
        },500);
        $("#c_bg2_2 span").animate({
            left:"4rem"
        },500);
    });
    $("#c_bg2_2").mouseout(function () {
        $(".cover_c_bg").animate({
            left:"-40rem"
        },500);
        $("#c_bg2_2 span").animate({
            left:"2rem"
        },500);
    });
    $("#c_bg3_1").mouseenter(function () {
        $(this).css("cursor","pointer");
        $(".cover_c_bg").animate({
            left:0
        },500);
        $("#c_bg3_1 span").animate({
            left:"4rem"
        },500);

    });
    $("#c_bg3_1").mouseout(function () {
        $(".cover_c_bg").animate({
            left:"-40rem"
        },500);
        $("#c_bg3_1 span").animate({
            left:"2rem"
        },500);

    });


    //图片动画
    $("#c_blue2").mouseenter(function () {
        $(this).css("cursor","pointer");
        $(this).animate({
            right:"-16rem"
        },500);

    });
    $("#c_blue8").mouseenter(function () {
        $(this).css("cursor","pointer");
        $(this).animate({
            right:"-56rem"
        },500);

    });
    $("#c_blue6").mouseenter(function () {
        $(this).css("cursor","pointer");
        $(this).animate({
            right:"-56rem"
        },500);
    });
    $("#c_blue2").mouseout(function () {
        $(this).animate({
            right:"-12rem"
        },500);
    });
    $("#c_blue8").mouseout(function () {
        $(this).animate({
            right:"-52rem"
        },500);
    });
    $("#c_blue6").mouseout(function () {
        $(this).animate({
            right:"-52rem"
        },500);
    });

});

