$(function(){
    //要素取得
    let text = $("#text1");
    //要素内容取得
    console.log(text.html());
    //变更
    text.html("GoodBye");
    console.log(text.html());
    //color变更
    text.css("color", "blue");


    //要素取得
    let textClass = $(".text-class");
    //要素内容取得
    console.log(textClass.eq(0).html());
    //color变更
    textClass.eq(1).css("color", "red");



    //要素取得
    let link = $("#link-1");
    //内容取得
    console.log(link.attr("href"));

    //变更
    link.attr("href", "https://www.google.com/");
    link.attr("target", "_blank");

});