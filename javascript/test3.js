const prompt = require ('prompt-sync')();
let n=prompt("enter the num: ");
for(i=1; i<=n; i++){
  for(j=1; j<=n; j++){
     if(j<=n-i){
         console.log(" ");
     }
     else{
         console.log("*");
     }
  }
  for(k=1; k<i; k++){
       console.log("*");
  }
}
for(i=1; i<=n; i++){
   for(j=1; j<=n; j++){
       if(j<=i){
         console.log(" ");
       }
       else{
         console.log("*");
       }
   }
   for(k=1; k<n-i; k++){
       console.log("*");
   }
}
