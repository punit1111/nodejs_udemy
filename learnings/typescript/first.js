var numList = [];
var stringList = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
}
var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("It Worked");
    }, 1000);
    reject("not Worked");
});
myPromise.then(function (result) {
    console.log(result.split("w"));
});
