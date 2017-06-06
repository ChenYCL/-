/**
 * Created by Administrator on 2017/5/3 0003.
 */
$(function () {
    //        菜单切换功能
    $(".open_btn").click(function () {
        $(this).addClass("hide");
        $(".close_btn").removeClass("hide");
        $("#c_menu").fadeIn(500);
        $("#main_menu>ul>li>a").eq(0).delay(500).fadeIn(500);
        $("#main_menu>ul>li>a").eq(1).delay(1000).fadeIn(500);
        $("#main_menu>ul>li>a").eq(2).delay(1500).fadeIn(500);
        $("#main_menu>ul>li>a").eq(3).delay(2000).fadeIn(500);

    });

    $(".close_btn").click(function () {
        $(this).addClass("hide");
        $(".open_btn").removeClass("hide");
        $("#c_menu").fadeOut(500);
        $("#main_menu>ul>li>a").fadeOut();
    });

    $("#close_menu").click(function () {
        $(".close_btn").addClass("hide");
        $(".open_btn").removeClass("hide");
        $("#c_menu").fadeOut(500);
        $("#main_menu>ul>li>a").fadeOut();
    });
});