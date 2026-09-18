/*for (let i = 1; i<=3; i++) {
    console.log(i); 
}       */                

//Background Process
/*i=1      123      log     ++
1        True     1       1+1
2        True     2       2+1
3        True     3       3+1
4        false    */

//For Loop Decrment-- Task

/*let j=1
while (j<=3) {
    console.log(j);
    j++;  
}

// Background Process
j=1
123   
log
++

Step1- 1
true
1
1+1

Step2 - 2
true
2
2+1

Step3 - 3
true
3
3+1

step4 - 4
False */

// Do While
/*let k=0
do {
    console.log(k);
    k++;
} while (k<=2);*/

//Nested For Loop
/*for (let a = 1; a<=3; a++) {                //Outer For loop - Row
    let empty=""                            //Empty String
    for (let b = 1; b<=5; b++) {            //Inner for Loop - Value
        empty+=b
    }
    console.log(empty);
    
}*/

// Output:
// 12345
// 12345
// 12345

// FOR Of Loop
// let pencilbox=[1,2,3,4]
// for (const bag of pencilbox) {
//     console.log(bag);
// }

// Decrement Task 

for (let i = 4; i>=1; i--) {
    console.log(i); 
}                    

//Background Process
/*i=4    4321      log     --
4        True     3       4-1
3       True     2      3-1
2        True     1       2-1
1       false    */
