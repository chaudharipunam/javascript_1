// print natural numbers......(for)

/*
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  console.log(i);
}


//print natural number....(while)
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
let i=1;
while(i<=n){
  console.log(i);
  i++;
}


//reverse number.......
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
for(let  i=1; n>=i; n--){
  console.log(n);
}



//mulplication up to N or factorial of N..........
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
let mul=1;   //fact.....
for(let i=1; i<=n; i++){
   mul*=i;
}
console.log(mul);



//sum of all(N) natural numbers............
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
let sum=0;
for(let i=1; i<=n; i++){
   sum+=i;
}
console.log(sum);



//even numbers..........
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=2; i<=n; i+=2){
  console.log(i);
}


//or........even numbersss............
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  if(i%2==0){
    console.log(i);
  }
}


//odd numbers..........
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i+=2){
  console.log(i);
}


//or.......odd numbersss............
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  if(i%2!=0){
    console.log(i);
  }
}



// sum of the (input num)...........
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0;
for(let i=1; i<=n; i++){
   let N=Number(prompt("input num is: "));
   s+=N;
}
console.log(s);



//series........10,20,30,,,,,,300
for(let i=10; i<=300; i+=10){
  console.log(i);
}



//series......105,,,,,,,,,,,,7
i=105;
while(i>=7){
  console.log(i);
  i-=7;
}



//print first 15 natural even numbers.........
let n=15;
for(let i=1; i<=n*2; i++){
  if(i%2==0){
    console.log(i);
  }
} 



//1000 exceed sum........
let n=1000;
let i=2,s=0,c=0;
while(s<=1000){
  s+=i;
  c++;
  i+=2;
}
console.log(c,s);



//print below 100 that are divisible by 7.........
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<n; i++){
  if(i%7==0){
    console.log(i);
  }
}


//print natural even numbers that are divisible by 7..........
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=2; i<=n; i+=2){
  if(i%7==0){
    console.log(i);
  }
}


//print sum of square that are divisible by 3........... 
const prompt=require ("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0;
for(let i=1; i<=n; i++){
  if(i%3==0){
    let a=i**2;
    s+=a;
  }
}
console.log(s);


//perfect number...............
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0;
for(let i=1; i<=Math.sqrt(n); i++){
   if(n%i==0){
     s+=i;
     if(i!==n/i){
       s+=n/i;
     }
   }
}
s-=n;
if(s==n){
  console.log("It is Perfect number");
}
else{
  console.log("It is not Perfect number");
}


//series...5+55+555+5555.......
const prompt = require("prompt-sync")();
let n = Number(prompt("N is: "));
let s = 0;
for (let i = 1; i <= n; i++) {
    s = s * 10 + 5;
    console.log(s); // If you want to print each term in the series
}
// If you want to print the final result only
// console.log(s);



//factor of number..........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<n; i++){
  if(n%i==0){
    console.log(i);
  }
}


//series.........1+1/2+1/3+1/4+1/5......1/n.....
const prompt = require("prompt-sync")();
let n = Number(prompt("N is: "));
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += 1 / i + i;
    console.log(sum);
}
//console.log(sum);


const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0,r;
while(n>0){
  r=n%10;
  s=s*10+r;
  n=Math.floor(n/10);
}
console.log(s);



//table of any number................
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=10;
for(let i=1; i<=a; i++){
   let q=n*i;
   console.log(q);
}



//fibonacci series........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=0;
let b=1;
let c=0;
while(c<=n){
  console.log(c);
  a=b;
  b=c;
  c=a+b;
}



//prime number.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let c=0;
for(let i=1; i<=n; i++){
  if(n%i==0){
    c++;
  }
}
if(c==2){
  console.log("it is prime number");
}
else{
  console.log("it is not prime number");
}


//print.....series....1,4,9,16,25,36,49,64........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  let p=i**2;
  console.log(p);
}



//find min-max in given N numbers...........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let max=0,min=0;
for(let i=1; i<=n; i++){
   let q=Number(prompt("Q is: "));
   if(q>max){
     min=max;
     max=q;
   }
   else if(q>min){
       min=q;
   }
}
console.log(max,min);



//find Armstrong number.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let c=0,r,m=n,s=0,i=n;
while(n>0){
  r=n%10;
  c++;
  n=Math.floor(n/10);
}
while(m>0){
  let d1=m%10;
  s=s+d1**c;
  m=Math.floor(m/10);
}
if(s==i){
  console.log("it is armstrong number");
}
else{
  console.log("it is not armstrong number");
}



//take input from user & then give product............
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let p=1;
for(let i=1; i<=n; i++){
  let q=Number(prompt("input  is: "));
  p*=q;
}
console.log(p);



//print average & product up to given N number...........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0,p=1;
for(let i=1; i<=n; i++){
  p*=i;
  s+=i;
}
let A=s/n;
console.log(p,A);



//2nd max given numbers...........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let m=0,sm=0;
for(let i=1; i<=n; i++){
   let q=Number(prompt("Q is: "));
   if(q>m){
     sm=m;
     m=q;
   }
   else if(q>sm){
     sm=q;
   }
}
console.log(sm);


//print numbers below N that are divisible by 5 & 3........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  if(i%5==0 && i%3==0){
     console.log(i);
  }
}



//series.........1==49,2==48,3==47........48==2,49==1........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let j=n;
for(let i=1; i<=n; i++){
  console.log(i==n);
  n--;
}
for(; 0<j; j--){
  console.log(n==j);
  n++;
}



//sum of Kth power up to N natural number..........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0;
let k=Number(prompt("Kth power is: "));
for(let i=1; i<=n; i++){
  let q=i**k;
  console.log(q);
  s+=q;
}
console.log(s);



//print max in given N numbers..........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let m=0;
for(let i=1; i<=n; i++){
  let I=Number(prompt("Input is:  "));
  if(I>m){
    m=I;
  }
}
console.log(m);



//print min in given N numbers..........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let min=Infinity;
for(let i=1; i<=n; i++){
  let I=Number(prompt("Input is:  "));
  if(I<min){
    min=I;
  }
}
console.log(min);



// print perfect square within range [A to B]..& it's count.......
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let c=0;
for(; a<=b; a++){
  let t=Math.sqrt(a);
  if(Number.isInteger(t)){
    console.log(a);
    c++;
  }
}
console.log("Count is: ",c);



//print integer & it's square.....
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1;  i<=n; i++){
  let sq=i*i;
  console.log(i,sq);
}



//print sum of all digit of number.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0; 
while(n>0){
  let D=n%10;
  s+=D;
  n=Math.floor(n/10);
}
console.log(s);


//print product of all digit of number.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let p=1; 
while(n>0){
  let D=n%10;
  p*=D;
  n=Math.floor(n/10);
}
console.log(p);


//sum of ODD & EVEN number...........
//print sum of all digit of number.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0,p=0;
for(let i=1; i<=n; i+=2){
  s+=i;
}
for(let j=2; j<=n; j+=2){
  p+=j;
}
console.log(s,p);



//decimal to binary.....
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let str=' ';
while(n>0){
  let D=n%2;
  str=D+str;
  n=Math.floor(n/2);
}
console.log(str);


//binary to decimal.......
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0,i=0;
while(n>0){
  let D=n%10;
  s+=D*2**i;
  i++;
  n=Math.floor(n/10);
}
console.log(s);



//Infinite loop.......
let i=1;
while(i>0){
  console.log(i);
}



//or this one also infinite loop..........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i--){
  console.log("Hey..! Poonam");
}



//print harmonic series.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0;
let HarmoSeries=' ';
for(let i=1; i<=n;  i++){
  HarmoSeries+='1/'+i+' ';
  s+=1/i;
}
console.log("Harmonic series: ",HarmoSeries);
console.log("Sum of Harmonic Series: ",s);



//find LCM & HCF................
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let r;
let c=a*b;
while(b>0){
  r=b%a;
  a=b;
  b=r;
}
let HCF=a;
let LCM=Math.floor(c/HCF);
console.log("HCF is: ",HCF);
console.log("LCM: ",LCM);


//print the name of digit...........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0,r,a;
while(n>0){
  r=n%10;
  s=s*10+r;
  n=Math.floor(n/10);
  while(s>0){
  a=s%10;
  if(a==0){
    console.log("Zero");
  }
  else if(a==1){
    console.log("One");
  }
  else if(a==2){
    console.log("Two");
  }
  else if(a==3){
    console.log("Three");
  }
  else if(a==4){
    console.log("Four");
  }
  else if(a==5){
    console.log("Five");
  }
  else if(a==6){
    console.log("Six");
  }
  else if(a==7){
    console.log("Seven");
  }
  else if(a==8){
    console.log("Eight");
  }
  else if(a==9){
    console.log("Nine");
  }
  else{
    console.log("Invalid");
  }
  s=Math.floor(s/10);
  }
}


//max & min in given number.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let ma=0,mi=Infinity;
for(let i=1; i<=n; i++){
  let q=Number(prompt("Input is: "));
  if(q>ma){
    ma=q;
  }
  else if(q<mi){
    mi=q;
  }
}
console.log(ma,mi);




//series.........1+4-9+16-25+36.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=1;
for(let i=2; i<=n; i++){
  if(i%2==0){
    let p=i*i;
    s+=p;
    console.log(s);
  }
  else{
    let p=i*i;
    s=s-p;
    console.log(s);
  }
}
//console.log(s);



//find those numbers which are divisible by 7 & 5, between 1500 & 2700........
let n=2700;
for(let i=1500; i<=n; i++){
  if(i%7==0 && i%5==0){
    console.log(i);
  }
}


//company Bonus.......
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let c=0;
for(let i=1; i<=n; i++){
  if(i%3==0 && i%5==0){
    c++;
  }
}
console.log(c);


//sum of first digit & last digit of num...........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s;
let LD=n%10;
while(n>0){
  FD=n%10;
  n=Math.floor(n/10);
}
s=LD+FD;
console.log(s);



//input & sum the number until come negative number...........
const prompt=require("prompt-sync")();
let s=0; 
while(true){
  let n=Number(prompt("N is: "));
  if(n<0){
    break;
  }  
  s+=n;
}
console.log(s);



//consecutive number.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let p=null;
for(let i=1; i<=n; i++){
  let q=Number(prompt("input is: "));
  if(p!== null && q!==p+1){
    console.log("it is not consecutive number");
    process.exit();
  }
  p=q;
}
console.log("it is consecutive number"); 



//strong number.......sum of factorial of digit...............
const prompt=require("prompt-sync")();
let orgNum=Number(prompt("N is: "));
let n=orgNum;
let s=0,f=1,d;
while(n>0){
  d=n%10;
  f=1;
  for(let i=1; i<=d; i++){
    f*=i;
  }
  s+=f;
  n=Math.floor(n/10);
}
if(s==orgNum){
  console.log("It is strong number");
}
else{
  console.log("It is not strong number");
}



//palindrome number............
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0,d;
while(n>0){
  d=n%10;
  s=s*10+d;
  n=Math.floor(n/10);
}
console.log(s);



//harshad number.............
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0,d,p=n;
while(n>0){
  d=n%10;
  s=s+d;
  n=Math.floor(n/10);
}
if(p%s==0){
  console.log("Harshad Number");
}
else{
  console.log("Not Harshad Number");
}


//HCF of given N number...............
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let hcf=0,r;
for(let i=1; i<=n; i++){
  let p=Number(prompt("p is: "));
  while(p>0){
    r=hcf%p;
    hcf=p;
    p=r;
  }
}
console.log(hcf);


//sum of digit of number.........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let s=0,d;
while(n>0){
  d=n%10;
  s+=d;
  n=Math.floor(n/10);
}
console.log(s);



//series......7,10,8,11,9,12...........
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=7,b=10;
for(let i=1; i<=n; i++){
  if(i%2==0){
    process.stdout.write(b+" ");
    b+=1;
  }
  else{
    process.stdout.write(a+" ");
    a+=1;
  }
}




//series...............31,29,24,22,17,,,,,,,,,,,,,
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=31,b=29;
for(let i=1; i<=n; i++){
  if(i%2==0){
    process.stdout.write(b+" ");
    b-=7;
  }
  else{
    process.stdout.write(a+" ");
    a-=7;
  }
}





//Third Max in N numbers..........
N is: 4
input is: 123
input is: 7644
input is: 45
input is: 2
Third max is:  45.............output
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let m=0,sm=0,tm=0;
for(let i=1; i<=n; i++){
  let q=Number(prompt("input is: "));
  if(q>m){
    tm=sm;
    sm=m;
    m=q;
  }
  else if(q>sm && q!==m){
    tm=sm;
    sm=q;
  }
  else if(q>tm && q!==m && q!==sm){
    tm=q;
  }
}
console.log("Third max is: ",tm);


*/


















