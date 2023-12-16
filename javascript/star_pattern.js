//star_square.......
/*
* * * * * 
* * * * * 
* * * * * 
* * * * * 
* * * * * 
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        process.stdout.write("* ");
    }
    console.log();
}




//(space, star).............triangle
N is: 5
        * 
      * * 
    * * * 
  * * * * 
* * * * * 
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    if(j<=n-i){
      process.stdout.write("  ");
    }
    else{
      process.stdout.write("* ");
    }
  }
  console.log();
}



//star decrement ......triangle......
* * * * * 
* * * * 
* * * 
* * 
* 
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; n>=i; n--){
  for(let j=1; j<=n; j++){
      process.stdout.write("* ");
  }
  console.log();
}




//star increment............triangle.......
N is: 5
* 
* * 
* * * 
* * * * 
* * * * * 
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
      process.stdout.write("* ");
  }
  console.log();
}




//Hollow star increment triangle...............
N is: 5
* 
* * 
*   * 
*     * 
* * * * * 
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
      if(i==n){
        process.stdout.write("* ");
      }
      else if(j==1){
        process.stdout.write("* ");
      }
      else if(j==i){
        process.stdout.write("* ");
      }
      else{
        process.stdout.write("  ");
      }
  }
  console.log();
}



//Hollow star decrement..........triangle..........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
let p=1;
for(let i=1; n>=i; n--){
  for(let j=1; j<=n; j++){
      if(n==i){
        process.stdout.write("* ");
      }
      else if(j==1){
        process.stdout.write("* ");
      }
      else if(n==p){
        process.stdout.write("* ");
      }
      else if(j==n){
        process.stdout.write("* ");
      }
      else{
        process.stdout.write("  ");
      }
  }
  console.log();
  for(let k=1; k<=p; k++){
    process.stdout.write("  ");
  }
  p++;
}




//acute angle triangle...................
N is: 5
        *   
      *   *   
    *   *   *   
  *   *   *   *   
*   *   *   *   *   
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    if(j<=n-i){
      process.stdout.write("  ");
    }
    else{
      process.stdout.write("*   ");
    }
  }
  console.log();
}




//star rectangle.............
Row is: 5
column is: 3
* * * 
* * * 
* * * 
* * * 
* * * 
const prompt=require('prompt-sync')();
let n=Number(prompt("Row is: "));
let m=Number(prompt("column is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=m; j++){
    process.stdout.write("* ");
  }
  console.log();
}





//star, space ulta triangle (gap two-two ki......)
N is: 5
                * 
            * * * 
        * * * * * 
    * * * * * * * 
* * * * * * * * * 
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let r=(n-1)*2,p=1;
for(let i=1; i<=n; i++){
  for(let j=1; j<=r; j++){
    process.stdout.write("  ");
  }
  for(let k=1; k<=p; k++){
    process.stdout.write("* ");
  }
  r-=2;
  p+=2;
  console.log();
}




//star........ulta triangle decrement.........
N is: 5
* * * * * 
  * * * * 
    * * * 
      * * 
        * 
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let r=n;
for(let i=1; i<=n; i++){
  for(let j=1; j<=r; j++){
    process.stdout.write("* ");
  }
  console.log();
  for(let k=1; k<=i; k++){
    process.stdout.write("  ");
  }
  r--;
}





//star..........ulta acute angle triangle.........
*   *   *   *   *   
  *   *   *   *   
    *   *   *   
      *   *   
        *   
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let r=0;
for(let i=1; i<=n; i++){
  for(let j=1; j<=n-r; j++){
    process.stdout.write("*   ");
  }
  console.log();
  for(let k=1; k<=i; k++){
    process.stdout.write("  ");
  }
  r++;
}





//star............left acute angle triangle...............
N is: 5
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write("* ");
  }
  console.log();
}
  for(let k=(n-1); k>=1; k--){
    for(let l=1; l<=k; l++){
      process.stdout.write("* ");
    }
    console.log();
  }





//right acute angle triangle..............
N is: 5
        * 
      * * 
    * * * 
  * * * * 
* * * * * 
  * * * * 
    * * * 
      * * 
        * 
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    if(i+j<=n){
      process.stdout.write("  ");
    }
    else{
      process.stdout.write("* ");
    }
  }
  console.log();
}
for(let k=1; k<=n; k++){
  for(let l=1; l<=n; l++){
    if(l<=k){
      process.stdout.write("  ");
    }
    else{
      process.stdout.write("* ");
    }
  }
  console.log();
}





//left 2(two) acute angle triangle..............star
N is: 5
* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write("* ");
  }
  console.log();
}
  for(let k=1; n>=k; n--){
    for(let l=1; l<=n; l++){
      process.stdout.write("* ");
    }
    console.log();
  }





//damru....star
N is: 5
*   *   *   *   *   
  *   *   *   *   
    *   *   *   
      *   *   
        *   
                    
        *   
      *   *   
    *   *   *   
  *   *   *   *   
*   *   *   *   *   
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=n-(i-1); j++){
      process.stdout.write("*   ");
  }
  console.log();
  for(let p=1; p<=i; p++){
      process.stdout.write("  ");
  }
}
  for(let k=0; k<=n; k++){
    for(let l=1; l<=n; l++){
      if(k+l<=n){
        process.stdout.write("  ");
      }
      else{
        process.stdout.write("*   ");
      }
    }
    console.log();
  }




//star........diamond.......
N is: 5
        *   
      *   *   
    *   *   *   
  *   *   *   *   
*   *   *   *   *   
  *   *   *   *   
    *   *   *   
      *   *   
        *   
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    if(j+i<=n){
      process.stdout.write("  ");
    }
    else{
      process.stdout.write("*   ");
    }
  }
  console.log();
}
  for(let k=n-1; k>=1; k--){
    for(let l=1; l<=n; l++){
      if(k+l<=n){
        process.stdout.write("  ");
      }
      else{
        process.stdout.write("*   ");
      }
    }
    console.log();
  }





//Hollow star diamond.................
N is: 5
* * * * * 
* * * * 
* * * 
* * 
* 
* 
* * 
* * * 
* * * * 
* * * * * 
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let r=n;
for(let i=1; n>=i; n--){
  for(let j=1; j<=n; j++){
      process.stdout.write("* ");
  }
  console.log();
}
  for(let k=1; k<=r; k++){
    for(let l=1; l<=k; l++){
        process.stdout.write("* ");
    }
    console.log();
  }




//(space, hashtag(#)).............ulta triangle
N is: 5
        # 
      # # 
    # # # 
  # # # # 
# # # # # 
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
for(let i=1; i<=n; i++){
  for(let j=1; j<=n; j++){
    if(j<=n-i){
      process.stdout.write("  ");
    }
    else{
      process.stdout.write("# ");
    }
  }
  console.log();
}





//star butterfly...........
N is: 5
*                 * 
* *             * * 
* * *         * * * 
* * * *     * * * * 
* * * * * * * * * * 
* * * * * * * * * * 
* * * *     * * * * 
* * *         * * * 
* *             * * 
*                 *
const prompt=require('prompt-sync')();
let n=Number(prompt("N is: "));
let p=n+3,r=0;
for(let i=1; i<=n; i++){
  for(let j=1; j<=i; j++){
    process.stdout.write("* ");
  }
  for(let k=1; k<=p; k++){
    process.stdout.write("  ");
  }
  for(let s=1; s<=i; s++){
    process.stdout.write("* ");
  }
  console.log();
  p-=2;
}
for(; n>=1; n--){
  for(let g=1; g<=n; g++){
    process.stdout.write("* ");
  }
  for(let l=1; l<=r; l++){
    process.stdout.write("  ");
  }
  for(let t=1; t<=n; t++){
    process.stdout.write("* ");
  }
  console.log();
  r+=2;
}


*/











