$(function(){
    $(".sample-button").on("click",() => {
        $.ajax({
            url:'test.html',
            type:'GET',
            dataType:'html'
        }).done(function (data){
            $(".result").html(data);
        }).fail(function(){
            console.log("通讯が失败しました")
        });
    });
});