//メソッドfunction
function printHello(){
    console.log("Hello!Hello!Hello!Hello");
}

//呼び出す
printHello();

//戻り値
function sum(a,b){
    return a + b;
}

console.log(sum(4,7));

//デフォルトパラメーター（默认参数）
function print(str1, str2 = "世界", str3 = "!!!!"){
    console.log(str1 + " " + str2 + " " + str3);
}

//呼び出す
print("セッホー");
print("セッホー", "お");
print("セッホー", "o", "やつ");

//ラムダ
let add = (x, y) => x + y;
console.log(add(2,4));