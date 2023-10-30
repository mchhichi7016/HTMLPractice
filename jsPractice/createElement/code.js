let list = document.getElementById("list");

let newlink = document.createElement("a");

//挿入
newlink.innerHTML = "www.apple.com";
//最後の挿入
list.append(newlink);

//新しい<li>
let item = document.createElement("li");
list.append(item);
item.append(newlink);

//取得
let removeLink = document.getElementById("link-2");
//要素の削除
//removeLink.remove();
removeLink.parentNode.remove();

//ボタンをクリック
//ボタン1をクリック

let btnEvent = document.getElementById("button1");

/**document.getElementById("button").onclick = function() {
  // ここに#buttonをクリックしたら発生させる処理を記述する
}; */
//btnEvent.onclick = function(){
  //  console.log("ボタン1をクリックしました。");
//}

//btnEvent.onclick = function(){
  //  console.log("ボタン2をクリックしました。");
//}

/**対象の要素.addEventListener(種類, () => {
  // 処理を記述
}); */
// 対象の要素.addEventListener(種類, function() {
//    // 処理を記述
//  }, false);

btnEvent.addEventListener("click", ()=> {
    console.log("ボタン1をクリックしました。");
});

btnEvent.addEventListener("click", ()=> {
    console.log("ボタン2をクリックしました。");
});

//hello 
function hello(){
    console.log("Hello");
}