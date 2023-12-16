/*

//tables of number.......
N is: 5
1 2 3 4 5 6 7 8 9 10 
2 4 6 8 10 12 14 16 18 20 
3 6 9 12 15 18 21 24 27 30 
4 8 12 16 20 24 28 32 36 40 
5 10 15 20 25 30 35 40 45 50 

const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=10; j++){
    process.stdout.write((j*i+" ").toString());
  }
  console.log();
}




//sum of prime no. up to n..........
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let s=0;
for(let i=1; i<=n; i++){
  let c=0;
  for(let j=1; j<=i; j++){
    if(i%j==0){
      c++;
    }
  }
  if(c==2){
     console.log(i+" ".toString());
     s+=i;
  }
}
process.stdout.write(s+" ".toString());




//perfect number up to n...............
N is: 1000
6
28
496
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  let s=0;
  for(let j=1; j<i; j++){
    if(i%j==0){
      s+=j;
    }
  }
  if(s==i){
    console.log(i.toString());
  }
}





//print on ly prime factor of given number............
N is: 765
3
5
17
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let c=0;
for(let i=2; i<=n; i++){
  if(n%i==0){
    c=0;
    for(let j=1; j<=i; j++){
     if(i%j==0){
       c++;
     }
    }
    if(c==2){
      console.log(i.toString());
    }
  }
}





//twisted prime...........79-97.....
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let c=0,s=0,r;
for(let i=1; i<=n; i++){
  if(n%i==0){
    c++;
    for(let j=1; j<=i; j++){
     if(i%j==0){
       c++;
     }
    }
    if(c==2){
      console.log(n.toString());
      while(n>0){
        r=n%10;
        s=s*10+r;
        n=Math.floor(n/10);
      }
      let t=0;
      for(let j=1; j<=s; j++){
        if(s%j==0){
          t++;
        }
      }
      if(t==2){
         console.log(s.toString());
         process.stdout.write("it is twisted prime number");
      }
      else{
         process.stdout.write("no twisted prime number");  
      }
    }
  }
}




//print first n prime numbers number............
N is: 5
2
3
5
7
11
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let c=0,isprime,i=2;
while(c<n){
  isprime=1;
  for(let j=2; j<=i/2; j++){
     if(i%j==0){
       isprime=0;
       break;
     }
  }
  if(isprime){
      console.log(i.toString());
      c++;
  }
  i++;
}




//HCF of given number...................
N is: 3
Enter number 1: 240
Enter number 2: 300
Enter number 3: 450
HCF of the given numbers is: 30

const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let num=[];
for(let j=0; j<n; j++){
  num.push(Number(prompt(`Enter number ${j + 1}: `)));
}
  // Function to find HCF of two numbers
  function findHCF(a,b){
  while(b!==0){
      let temp=b;
      b=a%b;
      a=temp;
  }
  return a;
}
// Find HCF of the given numbers
let HCF=num[0];
for(let k=1; k<n; k++){
  HCF=findHCF(HCF,num[k]);
}
console.log(`HCF of the given numbers is: ${HCF}`);



*/


//consecutive fibonacci series....................
N is: 15
0 1 1 2 3 5 8 13 21 34 55 89 144 233 377...................
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=0, b=1, c;A is: 23
B is: 4
C is: 7
Second max is:  7

if(n>=1){
  process.stdout.write(a.toString()+" ");
}
if(n>=2){
  process.stdout.write(b.toString()+" ");
}
for(let i=3; i<=n; i++){
    c=a+b;
    process.stdout.write(c.toString()+" ");
    a=b;
    b=c;
}



















