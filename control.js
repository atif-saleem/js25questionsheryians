// let str="harsh bahi kase ho";
// let convertArray=str.split(" ").map(function(val){
//    return val.split("").reverse().join("") ;
// })
// console.log(convertArray.join(" "));
// //first is to convert string into array which done by splite method then reverse methd is used to reverse the array 
// join method join the the array into string
//2 check the type array or not
// let obj={
// name:'ali',
// age:25,
// eat(){
//     console.log("he can eat");
// }
// }
// let name=['ali','ahmad','yousaf'];
// Array.isArray(name);
//3 make length 0
// let numbers=[1,2,3,4,5,6];
// numbers.forEach(function(val){
//     console.log(val);
//      numbers.shift();
// }); not walid method it del only three time
// while(numbers.length>0){
//     numbers.pop();
// }
// numbers.length=0;  
//4 how would you check if na number is integer or not
// function checkInteger(num){
// if(num%1===0){
//     console.log("Number Is integer");
// }
// else{
//     console.log("number is not integer");
// }
// }
//Number.isInteger(1);
// checkInteger(10.1);
//5 h0w to duplicate that array
// function duplicateArray(arr){
//     return arr.concat(arr);
// }
// console.log(duplicateArray([1,2,3,4,5]));
//6 function write a function to revers the number
// function reverseNumber(num){
//     rev=0;
//     while(num>0){
//         var rem=num%10;
//         rev=rev*10+rem;
//         num=Math.floor(num/10);
        
//     }
//     return rev;
// }
// console.log(reverseNumber(12212));
//one liner mathod to solve this problem
// function reverseNumber(num){
//     return Number(num.toString().split("").reverse().join(""));
// }
// console.log(reverseNumber(234));
//7 to check wether a given string is palindroom are not

// function checkPalindrom(str){
//     let reversed=str.split("").reverse().join("");
//     if(reversed===str){
//         console.log("The given word is palindrom");
        
//     }
//     else{
//         console.log("The given word is not palindrom");
//     }
// }
// checkPalindrom("loop");
// checkPalindrom("poop");
//8 make function to sort letters in aplhabetic way
// function sortAplphabet(str){
//     return str.split("").sort().join("");
// }
// let str=prompt("enter a word to sort in aplhabetc order");
// console.log(sortAplphabet(str));
//9 make a function to make first letter of a word to upercase
// function toConvertUperCase(str){
//    let fianlstr= str.split(" ").map((element) => {
//        return element.charAt(0).toUpperCase()+element.substring(1);
//     });
//     return fianlstr.join(" ");
// }
// console.log(toConvertUperCase("i am atif"));
//10 write a function which tell the occurance
// function checkOcurance(str){
//     var occurance={};
//     str.split("").forEach(function (elem){
//         if(occurance.hasOwnProperty(elem)===false){
//             occurance[elem]=1;
//         }
//         else{
//             occurance[elem]++;
//         }
//     })
//     return occurance;
// }
// console.log(checkOcurance("apnaCollege"));
//reverse a string
//check that if a string is array or not
//make the array length to 0 dont loop it or reset it
//check that wether a word is integer or not
//write a function to reverse a number
//check wether a string is palindrom or not
//8 make function to sort letters in aplhabetic way
//9 write function which is first letter capital of word
//10 make a function which tell a string apear ho many times
// function wordCounter(word){
//     var timeAppear={};
//     word.split("").forEach(function(elem){
//         if(timeAppear.hasOwnProperty(elem)){
//             timeAppear[elem]++;
//         }
//         else timeAppear[elem]=1;
        
//     })
//    var ans=Object.keys(timeAppear).reduce(function(cur,next){
//     return timeAppear[cur]>timeAppear[next]?cur:next;
//    }
//    ); console.log(ans) 
// }
// (wordCounter("heLLo"));
//write a functio to calculate thr sum of all members of array
//make an function gender finder male and array have objects delete other gender
// function removeNonMAil(){

// }
// var arr=[
//     {name:'ali',gender:'mail'},
//     {name:'ali2',gender:'femailmail'},
//     {name:'ali3',gender:'femailmail'},
//     {name:'ali4',gender:'femailmail'},
// ]
// var count=0;
// arr.forEach(function(elem){
// if(elem.gender!=='mail'){
//     count++;
// }

// })


// for(var i=0;i<=count;i++){ 
// for(j=0;j<arr.length;j++){
//     if(arr[j].gender!=='mail'){
//         arr.splice(i,1);
//     } 

// }}
//12 colne an aray using forEach loop and spread operator map
//13tell the type of passing arguments 6 probabaly obj num str undef boolean func
//14function which show array member wiith given number firs on (arr,n=1)
//15to ye pehla wala aik array member print kare ga
//16 last se array ke meber print karwaye
//17write a function to find the most frequent member of array
//18 write a program to shuffle of an array
//19 write a js program a function to union of two array no repeat set




// var arr = [
//     { name: 'ali', gender: 'mail' },
//     { name: 'ali2', gender: 'femailmail' },
//     { name: 'ali3', gender: 'femailmail' },
//     { name: 'ali4', gender: 'femailmail' },
// ];

// // Iterate from the end to the beginning
// for (var i = arr.length - 1; i >= 0; i--) {
//     if (arr[i].gender !== 'mail') {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);
//15
// function printtype(str)
// {
//     console.log(typeof str);
// }
// printtype("i ma string")
// printtype([])
// printtype({})
// printtype(true)
// printtype()
// printtype(function(){})
//16,15
// function printMember(arr,n=1){
//     if(arr.length>=n){
//         for(let i=0;i<n;i++){
//             var length=arr.length;
//             console.log(arr[length-1-i]);
//         }
//     }
//     else{
//         console.log(`Number you want to the primt length is greater then array`);
//     }
// }
// printMember([1,2,3,45,6],4)
//17 find te most frequent member of an array
// function frequentMember(arr){
//     var frequent={};
//     arr.forEach(function(elem){
//         if(frequent.hasOwnProperty(elem)){
//             frequent[elem]++;
//         }
//         else frequent[elem]=1;
//     })
//     var ans=Object.keys(frequent).reduce(function(cur,next){
//         return frequent[cur]>frequent[next]?cur:next;
//     })
//     return ans;
    
// }
// console.log(frequentMember([1,2,3,4,5,6,7,7,6,6,7]))
// shifle in array
// function shuffleArray(arr)
// {
//     var count=arr.length;
//     for(let i=count-1;i>0;i--){
//         const temp=Math.floor(Math.random()*count);
//         [arr[i], arr[temp]] = [arr[temp], arr[i]];

       
//         console.log(arr);
//     }
//     return arr;
// }
//method 2
// console.log(shuffleArray([1,2,3,4,5,6,7]));
// function shuffleArray(arr)
// {
//     var totalShufflearea=arr.length;
//    while(totalShufflearea>0){
//     totalShufflearea--;
// ;
//     var indextobechange=Math.floor(Math.random()* totalShufflearea)
//     var temp =arr[totalShufflearea]
//     arr[totalShufflearea]=arr[indextobechange];
//     arr[indextobechange]=temp;

//    }
//     return arr;
// }
// console.log(shuffleArray([1,2,3,4,5,6,7]));
//19 write a js program a function to union of two array no repeat set
// function unionOfArray(arr1,arr2){
//    return [...new Set(arr1.concat(arr2))]
// }
// console.log(unionOfArray([1,2,3,4],[1,22,3,3,3,3]))
//12 clone an aray using forEach loop and spread operator map
//13tell the type of passing arguments 6 probabaly obj num str undef boolean func
//14function which show array member wiith given number firs on (arr,n=1)
//15to ye pehla wala aik array member print kare ga
//16 last se array ke meber print karwaye
//17write a function to find the most frequent member of array
//18 write a program to shuffle of an array
//19 write a js program a function to union of two array no repeat set
//reverse a string
//check that if a string is array or not
//make the array length to 0 dont loop it or reset it
//check that wether a word is integer or not
//write a function to reverse a number
//check wether a string is palindrom or not
//8 make function to sort letters in aplhabetic way
//9 write function which is first letter capital of word
//10 make a function which tell a string apear ho many times
(()=>{
    var a=10;
    return a;
})();
console.warn(a);













 





