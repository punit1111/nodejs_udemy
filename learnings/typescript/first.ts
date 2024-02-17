let numList: number[] = [];
let stringList: String[] = [];

type numOrString = number | string;
type Result = { val: number; timestamp: Date };

type RequestBody = { text: string };

interface ResultObject {
  val: number;
  timestamp: Date;
}

function add(num1: numOrString, num2: numOrString) {
  // num1 as RequestBody
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + num2;
  }
}

const myPromise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("It Worked");
  }, 1000);
  reject("not Worked");
});

myPromise.then((result) => {
  console.log(result.split("w"));
});
