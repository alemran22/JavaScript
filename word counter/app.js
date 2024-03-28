const para = prompt("Enter your text here");
console.log(`There are total ${para.length} characters in my Text.`);
// console.log(para.split(" ").length);
console.log(`There are total ${para.split(" ").length} words in my text.`);




var myAddress = "    My home district name is mymenshing.";
console.log(myAddress.split(" "))
console.log(myAddress.slice(4, 9))
console.log(myAddress.trim())
console.log(myAddress.toUpperCase())
console.log(myAddress.toLocaleLowerCase())
console.log(myAddress.replace("mymenshing" , "barishal"))
console.log(myAddress.repeat(2))
console.log(myAddress.indexOf("name"))
console.log(myAddress.includes("name"))