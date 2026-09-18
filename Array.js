let a=[1,2,4,5,3]; // Mutiple Value - Length
//     0,1,2 -->Index Value
/*a[0]=1;
a[1]=2;
a[2]=3;*/

console.log(a); // Multiple Value
console.log(a[0]); // Single Variable
console.log(a[1]); // Single Variable
console.log(a[2]);


a.push(4); // Add Element at the last
console.log(a);

a.pop() // Remove the last element
console.log(a);

a.unshift(0); //Add the element at the begining
console.log(a);

a.shift(); // Remove the Beginning element
console.log(a);

a.sort(); // Ascending the Order
console.log(a);

a.reverse(); //Descending the Order
console.log(a);

let b=[6,7,8,9];
let result=a.concat(b);
console.log(result); // Join the 2 Arrays

let c=[1,2,3]; // Reduce the array to the single value
let c1=c.reduce((total,number)=>total+number,0);
console.log(c1);
/*Step1: 0 +1 = 1
Step2 ; 1+2 =3 
Step 3 ; 3+3 = 6*/

let d=[1,2,3,4,5]; 
let d1=d.filter(number=>number>3);
console.log(d1);
/*Step1: 1>3 = false
step2: 2>3 = false
step3: 3>3 = false
step4: 4>3 = true
Step5: 5>3 = True*/

let e=[1,2,3,4];  // 
let e1=e.map(number=>number*2);
console.log(e1);
/*Step1: 1*2 =2 
step2: 2*2 =4
step3: 3*2 = 6
step4: 4*2=8*/
