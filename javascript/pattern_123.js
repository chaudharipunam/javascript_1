//1234..........triangle..(column wise same)...increment

/*
Enter the number:5
1
12
123
1234
12345

const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write( j +" ");
    }
    console.log();
}





//1234..............triangle...........(row wise same)....increment
Enter the number:5
1
22
333
4444
55555
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write( i .toString());
    }
    console.log();
}





//54321............decrement .........triangle
Enter the number:5
54321
5432
543
54
5
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write( j .toString());
    }
    console.log();
}




//12345..........decrement.........triangle
Enter the number:5
12345
1234
123
12
1
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; n>=i; n--) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write( j .toString());
    }
    console.log();
}




//55555.....same row decrement......triangle........
Enter the number:5
55555
4444
333
22
1
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; n>=i; n--) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write( n .toString());
    }
    console.log();
}




//triangle increment............5443332222
Enter the number:5
5
44
333
2222
11111	
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; n>=i; n--) {
    for (let j = 5; j >= n; j--) {
        process.stdout.write( n .toString());
    }
    console.log();
}




//triangle last me 1 ex.  54321,4321,321,21,1..............
Enter the number:5
1
21
321
4321
54321
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i<=n; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write( (i-j) .toString());
    }
    console.log();
}





//print only those number entered by user , print in whole triangle.............
Enter the number:5
give any one number for whole triangle:5
55555
5555
555
55
5
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let q = Number(prompt("give any one number for whole triangle:"));
for (let i = 1; i<=n; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write( q .toString());
    }
    console.log();
}




//triangle........1,23,456,78910,,,,,,,,,,,
Enter the number:5
1
23
456
78910
1112131415
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let a=0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        a++;
        process.stdout.write( a .toString());
    }
    console.log();
}





//triangle......gap(TWO),,,,,,1,234,56789.............
Enter the number:5
1
234
56789
10111213141516
171819202122232425
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let a=1,k=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=a; j++) {
        process.stdout.write( k .toString());
        k++;
    }
    console.log();
    a+=2;
}



//square............1234,1234,1234,1234............
Enter the number:5
12345
12345
12345
12345
12345
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=n; j++) {
        process.stdout.write( j .toString());
    }
    console.log();
}





//square........(Row same)......11111,22222,33333,44444
Enter the number:4
1111
2222
3333
4444
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=n; j++) {
        process.stdout.write( i .toString());
    }
    console.log();
}




//triangle...........odd nmu..........1,33,555,7777
Enter the number:5
1
33
555
7777
99999
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let m=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write( m .toString());
    }
    console.log();
    m+=2;
}




//triangle...........(square of num)....1,44,999,16161616........
Enter the number:5
1
44
999
16161616
2525252525
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write( (i*i) .toString());
    }
    console.log();
}




//triangle...........0,01,012,0123,01234...........
Enter the number:5
0
01
012
0123
01234
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write( j .toString());
    }
    console.log();
}





//triangle..........(in first time *GAP of two number* after that no)..........1,121,1231,12341,...........
1
121
1231
12341
123451
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i; j++) {
        process.stdout.write( j .toString());
    }
    if(i!=1){
        process.stdout.write("1");
    }
    console.log();
}



//triangle......(space),1,Space,21,Space,321.........
Enter the number:5
        1 
      2 2 
    3 3 3 
  4 4 4 4 
5 5 5 5 5 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=n; j++) {
      if(j<=n-i){
          process.stdout.write("  ");
      }
      else{
          process.stdout.write(p +" ");
      }
    }
    console.log();
    p+=1;
}




//triangle......(space),1,Space,33,Space,555.........(ODD NUM)...
Enter the number:5
        1 
      3 3 
    5 5 5 
  7 7 7 7 
9 9 9 9 9 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=n; j++) {
      if(j<=n-i){
          process.stdout.write("  ");
      }
      else{
          process.stdout.write(p +" ");
      }
    }
    console.log();
    p+=2;
}




//triangle......0,24,488,81616,16323232,..................
Enter the number:5
0
24
488
8161616
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=2;
console.log("0");
for (let i = 3; i <= n; i++) {
    for (let j = 2; j <=i; j++) {
      if(j==2){
          process.stdout.write(p.toString());
      }
      else{
          process.stdout.write((p*2).toString());
      }
    }
    console.log();
    p*=2;
}





//triangle+triangle..........12345_54321.....
Enter the number:5
5 4 3 2 1   1 2 3 4 5 
5 4 3 2       2 3 4 5 
5 4 3           3 4 5 
5 4               4 5 
5                   5 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let q=0;
for (let i = 1; i<=n; i++) {
    for (let j = n; j>=i; j--) {
        process.stdout.write(j+" ");
    }
    for (let s = 1; s<=q; s++) {
        process.stdout.write("  ");
    }
    for (let j = 1; j <=i; j++) {
        process.stdout.write("  ");
    }
    for (let j =i; j<=n; j++) {
        process.stdout.write(j+" ");
    }
    console.log();
    q+=1;
}




//triangle.......(STAR+NUMBERS).........1*2*3*4*5
Enter the number:5
1 * 2 * 3 * 4 * 5 * 6 
1 * 2 * 3 * 4 * 5 
1 * 2 * 3 * 4 
1 * 2 * 3 
1 * 2 
1
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=n*2;
for (let i = 1; i<=n; i++) {
    let s=1;
    for (let j =1; j<=p; j++){
      if(j%2==0){
        process.stdout.write("* ");
      }
      else{
        process.stdout.write(s+" ");
        s++;
      }
    }
    process.stdout.write(s+" ");
    console.log();
    p-=2;
}
console.log("1");





//triangle............012345,01234,0123,012,01,0.........
Enter the number:5
012345
01234
0123
012
01
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; n>=i; n--) {
    for (let j = 0; j <= n; j++) {
        process.stdout.write( j .toString());
    }
    console.log();
}





//triangle..........55555,4444,333,22,1...........
Enter the number:5
55555
4444
333
22
1
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; n>=i; n--) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write( n .toString());
    }
    console.log();
}




//triangle...........1,24,369,481216...............
Enter the number:5
1 
2 4 
3 6 9 
4 8 12 16 
5 10 15 20 25 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let k=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write( (k*j)+" ");
    }
    console.log();
    k++;
}





//triangle............1,32,654,10987......
Enter the number:5
1 
3 2 
6 5 4 
10 9 8 7 
15 14 13 12 11 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i; j++) {
          process.stdout.write(p+" ");
          p--;
    }
    console.log();
    p=p+(2*i)+1;
}





//triangle..............1,48,9279,16641664,,,,,,,,,,,,,,,
Enter the number:5
1 
4 8 
9 27 9 
16 64 16 64 
25 125 25 125 25 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=i; j++) {
      if(j%2==0){
          process.stdout.write(i**3+" ");
      }
      else{
          process.stdout.write(i**2+" ");
      }
    }
    console.log();
}




//triangle............(_)1,(_)12,(_)123,(_)1234..............
Enter the number:5
        1 
      1 2 
    1 2 3 
  1 2 3 4 
1 2 3 4 5 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=n-p; j++) {
          process.stdout.write("  ");
    }
    for(let k=1; k<=i; k++){
      process.stdout.write(k+" ");
    }
    console.log();
    p++;
}




//triangle.............10,108,1086,10864.............
Enter the number:5
10 
10 8 
10 8 6 
10 8 6 4 
10 8 6 4 2 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    let p=10;
    for (let j = 1; j <=i; j++) {
          process.stdout.write(p+" ");
          p-=2;
    }
    console.log();
}





//triangle...........0,101,21012,3210123..................
Enter the number:5
0 
1 0 1 
2 1 0 1 2 
3 2 1 0 1 2 3 
4 3 2 1 0 1 2 3 4 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let q=0;
for (let i=1; i<=n; i++) {
    for (let j=q; j>=0; j--){
          process.stdout.write(j+" ");
    }
    for(let k=1; k<=q; k++){
          process.stdout.write(k+" ");
    }
    console.log();
    q++;
}





//triangle................(_)1,(_)21,(_)321,(_)4321,(_)54321........
Enter the number:5
        1 
      2 1 
    3 2 1 
  4 3 2 1 
5 4 3 2 1 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <=n; j++) {
      if(j<=n-i){
          process.stdout.write("  ");
      }
      else{
          process.stdout.write(p +" ");
          p--;
      }
    }
    console.log();
    p+=1+i;
}





//triangle..........(_)1,(_)01,(_)101,(_)0101........
Enter the number:5
        1 
      0 1 
    1 0 1 
  0 1 0 1 
1 0 1 0 1 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i<=n; i++) {
    for (let j =1; j<=n; j++){
      if(j<=n-i){
        process.stdout.write("  ");
      }
      else if(j%2==0){
        process.stdout.write("0 ");
      }
      else{
        process.stdout.write("1 ");
      }
    }
    console.log();
}




//triangle.........11111,(_)2222,(_)333,(_)44,(_)5.........
Enter the number:5
1 1 1 1 1 
  2 2 2 2 
    3 3 3 
      4 4 
        5 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let k=0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n-k; j++) {
        process.stdout.write( i+" ");
    }
    console.log();
    for(let p=1; p<=i; p++){
        process.stdout.write("  ");
    }
    k++;
}




//triangle.......4321,(_)321,(_)21,(_)1.............
Enter the number:5
5 4 3 2 1 
  5 4 3 2 
    5 4 3 
      5 4 
        5 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let k=n;
for (let i = n; i>=0; i--) {
    for (let j = 1; j <= n; j++) {
      if(i+j<=n){
        process.stdout.write("  ");
      }
      else{
        process.stdout.write(k+" ");
        k--;
      }
    }
    console.log();
    k+=i;
}





//triangle.........(_)1,(_)101,(_)10101............
Enter the number:5
        1 
      101 
    10101 
  1010101 
101010101 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i<=n; i++) {
    for (let j = 1; j <= n; j++) {
      if(j<=n-i){
        process.stdout.write(" "+" ");
      }
      else if(j==n){
        process.stdout.write("1"+" ");
      }
      else{
        process.stdout.write("10"+" ");
      }
    }
    
    console.log();
}




//triangle...........54321,(_)9876,(_)121110,...............
Enter the number:5
5 4 3 2 1 
  9 8 7 6 
    12 11 10 
      14 13 
        15
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let s=0,p=n,m=n+4;
for (let i = 1; i<=n; i++) {
    for (let j = 1; j <= n-s; j++) {
        process.stdout.write(p+" ");
        p--;
    }
    console.log();
    for (let k=1; k<=i; k++) {
        process.stdout.write("  ");
    }
    p+=m;
    m-=2;
    s++;
}





//triangle...........1,234,56789..............
Enter the number:5
1 
2 3 4 
5 6 7 8 9 
10 11 12 13 14 15 16 
17 18 19 20 21 22 23 24 25 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let k=1,p=1;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= p; j++) {
        process.stdout.write( k+" ");
        k++;
    }
    console.log();
    p+=2;
}





//triangle........0,01,024,0369,0481216.............
Enter the number:5
0 
0 1 
0 2 4 
0 3 6 9 
0 4 8 12 16 
0 5 10 15 20 25 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write( (i*j)+" ");
    }
    console.log();
}





//triangle............0,01,014,0149,014916..............
Enter the number:5
0 
0 1 
0 1 4 
0 1 4 9 
0 1 4 9 16 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        process.stdout.write( (j**2)+" ");
    }
    console.log();
}




//triangle.............13579,1357,135,13,1
Enter the number:5
1 3 5 7 9 
3 5 7 9 
5 7 9 
7 9 
9 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let k=1;
for (let i = 1; n>=i; n--) {
    let p=k;
    for (let j = 1; j<=n; j++) {
        process.stdout.write( p+" ");
        p+=2;
    }
    console.log();
    k+=2;
}




//square.......12345,109876,1112131415.............
Enter the number:5
1 2 3 4 5 
10 9 8 7 6 
11 12 13 14 15 
20 19 18 17 16 
21 22 23 24 25 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let p=1;
for (let i = 1; i<=n; i++) {
    for (let j = 1; j<=n; j++) {
      if(i%2==0){
        process.stdout.write( p+" ");
        p--;
      }
      else{
        process.stdout.write(p+" ");
        p++;
      }
    }
    console.log();
    if(i%2==0){
      p+=6;
    }
    else{
      p+=4;
    }
}




//triangle.....................
Enter the number:5
        
      1  
    1  2  
  1  2  3  
1  2  3  4  
  1  2  3  4  
    1  2  3  
      1  2  
        1  
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i<=n; i++) {
    let p=1; 
    for (let j = 1; j < n; j++) {
      if(j+i<=n){
        process.stdout.write("  ");
      }
      else{
        process.stdout.write(p+"  ");
        p++;
      }
    }
    console.log();
}
let f=1;
for (let k=n-1; k>=1; k--){
  for(let r=1; r<=f; r++){
        process.stdout.write("  ");
  }
  let s=1;
  for(let t=1; t<=k; t++){
        process.stdout.write(s+"  ");
        s++;
  }
  console.log();
  f++;
}



*/


//square.............12345,22345,33345,44445,55555
Enter the number:5
1 2 3 4 5 
2 2 3 4 5 
3 3 3 4 5 
4 4 4 4 5 
5 5 5 5 5 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let r=n-2,p=1;
for (let i = 1; i<=n; i++) {
    for (let j = 1; j<=n; j++) {
      if(j<=i){
        process.stdout.write( p+" ");
      }
      else{
        p++;
        process.stdout.write(p+" ");
      }
    }
    console.log();
      p-=r;
      r+=(-1);
}





















