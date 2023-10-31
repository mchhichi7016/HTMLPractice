$(function(){
    //<ol>取得
    let list = $("#list");
    //追加<a>
    let newLink = $("<a>");
    //挿入
    newLink.html("www.apple.com");
    //末尾追加
    list.append(newLink);

    //新しい<li>作成
    let item = $("<li>");
    list.append(item);
    item.append(newLink);

    //要素remove
    list.remove();

    //要素 空
    list.empty();

    //onClick
    //$("#button1").click(() => {
    //    console.log("ボタン1");

   // });
   $("#button1").on("click",() => {
        //console.log("ボタン1");
        $("#text").css("color", "red");
   });

   $("#button1").on("click",() => {
    console.log("ボタン2");
});


});