/**
 * Created by Administrator on 2017/4/1 0001.
 */
/*分页*/
function paging(total,showTotal){
    // var total=7;//总页码数
    // var showTotal=6;//显示页码数

    var lis=$(".pagination>li");    //获取页码所在的所有li元素
    var as=$(".li_page>a"); //获取页码所在的所有a元素

// -------------------------------
    //翻页功能
    var pages=$(".c_pages");//获取所有页
// -------------------------------

    /*单击页码*/
    $(".li_page").on("click",function(){
        var index;  //当前点击事件对象的索引
        index=$(this).index();   //获取被点击的li的索引
        for(var i=0;i<lis.length;i++){
            if($(lis[i]).hasClass("active")==true){ //如果当前li有active类名，则
                $(lis[i]).removeClass("active");    //移除当前li的active类名
            }
        }

        $(lis[index]).addClass("active");

// -------------------------------
        //翻页功能
        if(index>=2){
            pages.addClass("hide");//隐藏所有页面
            pages.eq(index-2).removeClass("hide");//将索引为index-2的页面对象删除hide类选择器
        }
// -------------------------------

    });


    /*下一页*/
    $(".next").on("click",function(){
        var index;
        for(var i=1;i<lis.length-2;i++){
            if($(lis[i]).hasClass("active")==true){ //如果当前li有active类名，则
                index=$(lis[i]).index();    //获取当前li的索引
                $(lis[i]).removeClass("active");    //移除当前li的active类名
            };
        }
        if(index<showTotal){
            $(lis[index+1]).addClass("active"); //为索引为index+1的li，及下一个li增加active类名
        }else if(index>=showTotal) {
            var txt;
            for (var i = 0; i < showTotal; i++) {  //遍历页码所在的a标签
                txt = Number($(as[i]).text())+1; //每个a标签的文本+1
                if(Number($(as[showTotal-1]).text())<total) {
                    $(as[i]).text(txt);     //设置a标签的文本
                }else{
                    $(".disabled").css("display", "none");  //隐藏...
                    break;  //跳出循环
                }
            }

            $(lis[showTotal+1]).addClass("active"); //索引为showTotal+1的页码设为活动页
        }

// -------------------------------
        //翻页功能
        if(index>=1&&index<=showTotal){
            pages.addClass("hide");//隐藏所有页面
            pages.eq(index-1).removeClass("hide");//将索引为index-1的页面对象删除hide类选择器
        }
// -------------------------------

    });

    /*上一页*/
    $(".previous").on("click",function(){
        var index;
        for(var i=lis.length-2;i>2;i--){
            if($(lis[i]).hasClass("active")==true){
                index=$(lis[i]).index();
                $(lis[i]).removeClass("active");
            };
        }

        if(index>1){
            $(lis[index-1]).addClass("active");
        }else{
            var txt;
            for (var i = 0; i < showTotal; i++) {
                txt = Number($(as[i]).text())-1;
                if(Number($(as[i]).text())>1) { //$(as[i]).text())>1
                    $(as[i]).text(txt);
                    if(Number($(as[0]).text())==(total-showTotal)){
                        $(".disabled").css("display", "inline");
                    }
                }else{
                    break;
                }
            }
            $(lis[2]).addClass("active");
        }

// -------------------------------
        //翻页功能
        if(index>=3){
            pages.addClass("hide");//隐藏所有页面
            // alert(index);
            pages.eq(index-3).removeClass("hide");//将索引为index-3的页面对象删除hide类选择器
        }
// -------------------------------

    });

}




