/*

//print natural numbers..........
N  is: 20
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20

const prompt=require('prompt-sync')();
let n=Number(prompt("N  is: "));
let a=[];
for(let i=0; i<n; i++){
  a[i]=i+1;
}
for(let j=0; j<n; j++){
  process.stdout.write(a[j]+" ".toString());
}





//reverse array...........
N is: 5
input 1 is: 3456
input 2 is: 234
input 3 is: 5
input 4 is: 67
input 5 is: 89
output..........89 67 5 234 3456 
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let q=Number(prompt(`input ${i+1} is: `));
  a.push(q);
}
let ar=[],p=0;
for(let j=n-1; j>=0; j--){
  ar[p]=a[j];
  p++;
}
for(let k=0; k<n; k++){
  process.stdout.write(ar[k]+" ".toString());
}





//print char in string..........
N is: 8
Char is: C
Char is: o
Char is: m
Char is: p
Char is: u
Char is: t
Char is: e
Char is: r
output............Computer
const prompt=require("prompt-sync")();
let n=(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let q=prompt("Char is: ");
  a.push(q);
  a[i]=q;
}
for(let j=0; j<n; j++){
  process.stdout.write(a[j].toString());
}




//print only odd number.........METHOD I...........
N is: 10
1 3 5 7 9 11 13 15 17 19
const prompt=require("prompt-sync")();
let n=(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  a[i]=(i*2+1);
}
for(let j=0; j<n; j++){
  process.stdout.write(a[j]+" ".toString());
}



//   METHOD II...........odd num.......
const prompt=require("prompt-sync")();
let n=(prompt("N is: "));
let a=[],p=1;
for(let i=0; i<n; i++){
  if(p%2!==0){
    a[i]=p;
    p+=2;
  }
}
for(let j=0; j<n; j++){
  process.stdout.write(a[j]+" ".toString());
}
 
 



//print  even number............METHOD I
N is: 5
2 4 6 8 10

const prompt=require("prompt-sync")();
let n=(prompt("N is: "));
let a=[],p=2;
for(let i=0; i<n; i++){
  if(p%2==0){
    a[i]=p;
    p+=2;
  }
}
for(let j=0; j<n; j++){
  process.stdout.write(a[j]+" ".toString());
}





//print even number...........METHOD II
N is: 5
2 4 6 8 10
const prompt=require("prompt-sync")();
let n=(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  a[i]=((i+1)*2);
}
for(let j=0; j<n; j++){
  process.stdout.write(a[j]+" ".toString());
}




//print alternate element...............
N is: 5
input is: 43
input is: 1
input is: 67
input is: 3
input is: 555
output.....43 67 555 
const prompt=require("prompt-sync")();
let n=(prompt("N is: "));
let a=[],ar=[],k=0;
for(let i=0; i<n; i++){
  let q=Number(prompt("input is: "));
  a.push(q);
}
for(let l=0; l<n; l+=2){
  ar[k]=a[l];
  k++;
}
for(let j=0; j<n/2; j++){
  process.stdout.write(ar[j]+" ".toString());
}





//Exist wala...........
N is: 5
number for searching: 9
input is: 34
input is: 9
input is: 3
input is: 8
input is: 76
it is Exsist
const prompt=require("prompt-sync")();
let n=(prompt("N is: "));
let p=(prompt("number for searching: "));
let a=[],isExist;
for(let i=0; i<n; i++){
  let q=Number(prompt("input is: "));
  a.push(q);
}
for(let l=0; l<n; l++){
  if(a[l]==p){
    isExist=1;
  }
}
if(isExist){
    process.stdout.write("it is Exsist");
  }
  else{
    process.stdout.write("it is Not Exsist");
  }




//sum & average..............
N is: 5
input is: 10
input is: 20
input is: 30
input is: 40
input is: 50
150.............sum
30......average

const prompt=require("prompt-sync")();
let n=(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let q=Number(prompt("input is: "));
  a.push(q);
}
let s=0;
for(let l=0; l<n; l++){
  s+=a[l];
}
let av=s/n;
console.log(s.toString());
console.log(av.toString());





//count the total occuference of numbers..............
N is: 6
Count is: 5
input is: 23
input is: 4
input is: 5
input is: 67
input is: 2
input is: 3
Total occurence of 5 in array: 1
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let c=Number(prompt("Count is: "));
let a=[],l=0;
for(let i=0; i<n; i++){
  let q=Number(prompt("input is: "));
  a.push(q); 
}
for(let j=0; j<n; j++){
  if(a[j]==c){
    l++;
  }
}
console.log(`Total occurence of ${c} in array: ${l}`);






//count positive & negative number................
N is: 6
input is: -1
input is: -5
input is: -6
input is: 6
input is: -8
input is: 6
2.....count positive..........output
4.....count negative........output
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=[],l=0;
for(let i=0; i<n; i++){
  let q=Number(prompt("input is: "));
  a.push(q); 
}
let cP=0,cN=0;
for(let j=0; j<n; j++){
  if(a[j]>0){
    cP++;
  }
  else if(a[j]<0){
    cN++;
  }
}
console.log(cP.toString());
console.log(cN.toString());




//print all factors of N number...........
N is: 68
Factors of 68: 1, 2, 4, 17, 34, 68
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=[];
for(let i=0; i<=n; i++){
  if(n%i==0){
    a.push(i);
  }
}
console.log("Factors of "+n+": "+a.join(", "));





//all prime no. up to N...............
N is: 20
Prime numbers up to 20:
2, 3, 5, 7, 11, 13, 17, 19
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let a=[];
for(let i=2; i<=n; i++){
    if(isPrime(i)){
      a.push(i);
    }
}
console.log(`Prime numbers up to ${n}:`);
console.log(a.join(', '));




//all perfect no. up to N...............
N is: 1000
Perfect numbers up to 1000:
6, 28, 496........output
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=[],c=0;
for(let num=2; num < n; num++) {
    let s=0;
    for(let i=1; i<=Math.sqrt(num); i++){
      if(num%i==0){
        if(i===num/i){
          s+=i;
        }
        else{
          s+=i+num/i;
        }
      }
    }
    s-=num;
    if(s===num){
      a[c]=num;
      c++;
    }
}
  console.log(`Perfect numbers up to ${n}:`);
  console.log(a.join(', '));





//factorial of N natural number...............
N is: 5
1 2 6 24 120 
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=[],p=1;
for(let i=0; i<n; i++){
  if(p<=n){
     let m=1;
     for(let j=1; j<=p; j++){
       m*=j;
     }
     a[i]=m;
     p++;
  }
}
for(let k=0; k<n; k++){
    process.stdout.write(a[k]+" ".toString());
}





//count of odd & even number...........
N is: 5
input is: 34
input is: 21
input is: 65
input is: 7890
input is: 54
Count of Even number: 3
Count of Odd number: 2
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let I=Number(prompt("input is: "));
  a.push(I);
}
let cO=0,cE=0;
for(let j=0; j<n; j++){
  if(a[j]%2==0){
    cE++;
  }
  else{
    cO++;
  }
}
console.log("Count of Even number: "+cE);
console.log("Count of Odd number: "+cO);





//sum of elements those odd position & those even indexing.......
N is: 5
input is: 10
input is: 20
input is: 30
input is: 40
input is: 50
Sum of Even number: 90
Sum of Odd number: 60
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let I=Number(prompt("input is: "));
  a.push(I);
}
let sO=0,sE=0;
for(let j=0; j<n; j++){
  if(j%2==0){
    sE+=a[j];
  }
  else{
    sO+=a[j];
  }
}
console.log("Sum of Even number: "+sE);
console.log("Sum of Odd number: "+sO);






//create array of N items & input Name add them to array..........
N is: 5
Name is: punu
Name is: rutu
Name is: ritu
Name is: anu
Name is: diu
punu rutu ritu anu diu --------output
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let Name=(prompt("Name is: "));
  a.push(Name);
}
for(let j=0; j<n; j++){
  process.stdout.write(a[j].toString()+" ");
}




//create array of N items & input Name add them to array & reverse it.......
N is: 5
Name is: punu
Name is: rutu
Name is: minu
Name is: tony
Name is: sinu
sinu tony minu rutu punu 
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[],h=n;
for(let i=0; i<n; i++){
  let Name=(prompt("Name is: "));
  a.push(Name);
}
let p=0,ar=[];
for(let j=0; n>p; j++){
  ar[j]=a[n-1];
  n--;
}
for(let k=0; k<h; k++){
  process.stdout.write(ar[k].toString()+" ");
}





//find max in array...........
N is: 5
Num is: 45
Num is: 34
Num is: 89
Num is: 67
Num is: 8
Max is: 89............output
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let Num=Number(prompt("Num is: "));
  a.push(Num);
}
let m=Number.NEGATIVE_INFINITY;
for(let j=0; j<n; j++){
  if(a[j]>m){
    m=a[j];
  }
}
console.log("Max is: "+m);





//store first N natural number & then print it as reverse form......
N is: 15
15 14 13 12 11 10 9 8 7 6 5 4 3 2 1..........output
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[],ar=[];
for(let i=0; i<n; i++){
  a[i]=(i+1);
}
let p=0;
for(j=n-1; j>=0; j--){
    ar[p]=a[j];
    p++;
}
for(let k=0; k<n; k++){
   process.stdout.write(ar[k]+" ");
}




//find maximum occurring number.......
Maxium occur number is: 2
let a=[9,2,2,5,6];
let n=a.length;
for(let i=0; i<n-1; i++){
  let c=0;
  for(let j=i+1; j<n; j++){
    if(a[j]==a[i]){
      c++;
    }
  }
  if(c>0){
    console.log("Maxium occur number is: "+a[i]);
  }
}




//given array find odd numbers from array......
23 25 25 33 71..............output
let a=[23,25,32,25,46,33,71,90];
let n=a.length;
let Odd=0,k=0,Od=[];
for(let i=0; i<n; i++){
  if(a[i]%2!=0){
    Odd++;
  }
}
for(let j=0; j<n; j++){
  if(a[j]%2!=0){
    Od[k]=a[j];
    k++;
  }
}
for(let s=0; s<Odd; s++){
   process.stdout.write(Od[s].toString()+" ");
}




//given the array print it as it is........
5 9 2 3 6.............output
let a=[5,9,2,3,6];
let n=a.length;
let ar=[];
for(let j=0; j<n; j++){
  ar[j]=a[j];
}
for(let i=0; i<n; i++){
  process.stdout.write(ar[i].toString()+" ");
}




//Duplicate number............
let a=[1,2,5,4,2,6,5,1,2,1];
let n=a.length;
let ar=[];
for(let j=0; j<n; j++){
  let c=1;
  if(a[j]===-1){
     continue;
  }
  for(let k=j+1; k<n; k++){
       if(a[k]===a[j]){
         c++;
         a[k]=-1;
       }
  }
  if(c>1){
     console.log("Duplicate Number: "+a[j]+" -Count is: "+c);
  }
}




//Mean......
5.333333333333333.................output
let a=[9,6,7,3,5,2];
let n=a.length;
let s=0;
for(let i=0; i<n; i++){
  s+=a[i];
}
let Mean=s/n;
console.log(Mean);




//Mode...........
Mode is: 6.............output
let a=[5,9,6,4,6,9,6];
let n=a.length;
let MaxCount=0,c=0,Mode;
for(let i=0; i<n; i++){
  for(let j=1; j<n; j++){
    a[i]==a[j];
    c++;
  }
  if(c>MaxCount){
    MaxCount=c;
    Mode=a[i];
  }
}
console.log("Mode is: "+Mode);





// find Median............
N is: 4
input is: 124
input is: 56
input is: 765
input is: 45
Median is: 90----------------------output
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=[],Median;
for(let i=0; i<n; i++){
  let q=Number(prompt("input is: "));
  a.push(q);
}
for(let j=0; j<n-1; j++){
  for(let k=0; k<n-j; k++){
     if(a[k]>a[k+1]){
       let temp=a[k];
       a[k]=a[k+1];
       a[k+1]=temp;
     }
  }
}
if(n%2==0){
  let mid1=a[n/2-1];
  let mid2=a[n/2];
  Median=(mid1+mid2)/2;
}
else{
  Median=a[Math.floor(n/2)];
}
console.log("Median is: "+Median);






//Merge two array..............
Merge Array is: 
5 4 9 3 6 1 2 7 3 9 6 ----------------output
let a=[5,4,9,3,6,1];
let ar=[2,7,3,9,6];
let n=a.length;
let m=ar.length;
let MergeArr=[];
let i=0,arI=0;
for(let aI=0; aI<n; aI++){
  MergeArr[i]=a[aI];
  i++;
}
for(; arI<m; arI++){
  MergeArr[i]=ar[arI];
  i++;
}
console.log("Merge Array is: ");
for(let j=0; j<i; j++){
  process.stdout.write(MergeArr[j].toString()+" ");
}





//Merge two array & sort it..............
Merge & Sort Array is: 
2 2 4 4 5 6 7 8 9 --------------output
let a=[9,6,5,2,4];
let ar=[4,7,8,2];
let n=a.length;
let m=ar.length;
let MergeArr=[];
let i=0,arI=0;
for(let aI=0; aI<n; aI++){
  MergeArr[i]=a[aI];
  i++;
}
for(; arI<m; arI++){
  MergeArr[i]=ar[arI];
  i++;
}
for(let l=0; l<i; l++){
  for(let s=0; s<i-l-1; s++){
    if(MergeArr[s]>MergeArr[s+1]){
      let temp=MergeArr[s];
      MergeArr[s]=MergeArr[s+1];
      MergeArr[s+1]=temp;
    }
  }
}
console.log("Merge & Sort Array is: ");
for(let j=0; j<i; j++){
  process.stdout.write(MergeArr[j].toString()+" ");
}





//Hospital Baby..........find Mean,Max,Min..............of weight
N is: 5
Input weight is: 32
Input weight is: 14
Input weight is: 56
Input weight is: 60
Input weight is: 6
Mean  is: 33.6
Max is: 60
Min is: 6
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let min=Infinity,max=Number.NEGATIVE_INFINITY,s=0;
for(let i=0; i<n; i++){
  let W=Number(prompt("Input weight is: "));
  s+=W;
  if(W>max){
    max=W;
  }
  if(W<min){
    min=W;
  }
}
let Mean=s/n;
console.log("Mean  is: "+Mean);
console.log("Max is: "+max);
console.log("Min is: "+min);





//Armstrong No. up to N................
N is: 1000
Armstrong No. up to N is: 
1  2  3  4  5  6  7  8  9  153  370  371  407..........output
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let a=[],p=0,r,r2;
for(let i=1; i<=n; i++){
  let j=i,c=0;
  while(j>0){
    r=j%10;
    c++;
    j=Math.floor(j/10);
  }
  let k=i,s=0;
  while(k>0){
    r2=k%10;
    s+=(r2**c);
    k=Math.floor(k/10);
  }
  if(s==i){
    a[p]=i;
    p++;
  }
}
console.log("Armstrong No. up to N is: ");
for(let m=0; m<p; m++){
  process.stdout.write(a[m]+"  ");
}





//Find Mean Mode Median................
Mean of Array is: 60
Mode of Array is: 52
Median of Array is: 57.5.......................output in 3 lines
let a=[91,6,63,73,52,52,91,52];
let n=a.length;
let sum=0,Median;
for(let i=0; i<n; i++){
  sum+=a[i];
}
let Mean=sum/n;
let MaxC=0, Mode=-1;
for(let j=0; j<n; j++){
  let c=0;
  for(let l=0; l<n; l++){
    if(a[j]==a[l]){
      c++;
    }
  }
  if(c>MaxC){
    MaxC=c;
    Mode=a[j];
  }
}
for(let s=0; s<n; s++){
  for(let r=s+1; r<n; r++){
    if(a[s]>a[r]){
      let temp=a[s];
      a[s]=a[r];
      a[r]=temp;
    }
  }
}
if(n%2==0){
  Median=(a[n/2-1]+a[n/2])/2;
}
else{
  Median=a[Math.floor(n/2)];
}
console.log("Mean of Array is: "+Mean);
console.log("Mode ofArray is: "+Mode);
console.log("Median Array is: "+Median);




//in the array, sum of three-three elements means---[1,2,3,4,5,6], (1+2+3=6),then(1+3+4=8),then(1+4+5=10)after........
//that sum all type like below.........Test Question......

N is: 6
input 1 is: 1
input 2 is: 2
input 3 is: 3
input 4 is: 4
input 5 is: 5
input 6 is: 6
36 33 26 15 5 6-------------output
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[],A,t,ar=[],m=0;
for(let i=0; i<n; i++){
  let q=Number(prompt(`input ${i+1} is: `));
  a.push(q);
}
for(let j=0; j<n; j++){
  let s=0;
  for(let p=j+1; p<n-1; p++){
    A=a[j]+a[p]+a[p+1];
    s+=A;
    t=s;
  }
  ar[m]=t;
  m++;
}
for(let k=0; k<n-2; k++){
  process.stdout.write(ar[k]+" ".toString());
}
process.stdout.write(a[n-2].toString()+" "+a[n-1]);





//create the array & find Duplicate Number..........
N is: 10
input 1 is: 1
input 2 is: 2
input 3 is: 5
input 4 is: 4
input 5 is: 2
input 6 is: 6
input 7 is: 5
input 8 is: 1
input 9 is: 2
input 10 is: 1
Duplicate number: 1 Count is: 3
Duplicate number: 2 Count is: 3
Duplicate number: 5 Count is: 2.............output in 3 liness
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let q=Number(prompt(`input ${i+1} is: `));
  a.push(q);
}
for(let i=0; i<n; i++){
  let c=1; 
  if(a[i]==-1){
    continue;
  }
  for(let j=i+1; j<n; j++){
    if(a[j]===a[i]){
      c++;
      a[j]=-1;
    }
  }
  if(c>1){
    console.log("Duplicate number: "+a[i]+" "+"Count is: "+c);
  }
}






//store random numbers in array & reverse it without using (j=n-1) like this......(swapping use)
 N is: 6
input 1 is: 344
input 2 is: 2
input 3 is: 34444
input 4 is: 56
input 5 is: 543
input 6 is: 1
1 543 56 34444 2 344..........................output
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let a=[];
for(let i=0; i<n; i++){
  let q=Number(prompt(`input ${i+1} is: `));
  a.push(q);
}
for(let j=0; j<Math.floor(n/2); j++){
  let temp=a[j];
  a[j]=a[n-j-1];
  a[n-j-1]=temp;
}
for(let k=0; k<n; k++){
  process.stdout.write(a[k]+" ");
}



*/

//K-Rotation.............
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let K=Number(prompt("K is: "));
let a=[];
for(let i=0; i<n; i++){
  let q=Number(prompt(`input ${i+1} is: `));
  a.push(q);
}
let A=[],t=0,c=1;
for(let m=0; m!==n; m++){
  for(let j=0; j<n; j++){
    if(a[j]>0){
      if(c==K){
         A[t]=a[j];
         a[j]=-1;
         t++;
         c=1;
      }
      else{
        c++;
      }
    }
  }
}
for(let s=0; s<n; s++){
  process.stdout.write(A[s]+" ");
}































