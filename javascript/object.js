//object........

/*
let a={
  my_Name:"Poonam",
  last_Name:"Chaudhary",
  Age:20,
  Email:"punamchaudhari22@navgurukul.org",
  FavColor:["Brown","Blue","Pink","Red"],
  Living: {
    "District": "Gondia",
    "State": "Maharashtra",
    "Country": "India"
  },
  Loan: function(){
    return 20000;
  },
  FullName: function(){
    return this.my_Name+" "+this.last_Name;
  }
};   
console.log(a);
*/

/*
console.log(a.Email);
console.log(a["Email"]);

console.log(a.FavColor[2]);
console.log(a["FavColor"]);

console.log(a.Living.Country);
console.log(a.Loan());
console.log(a.FullName());
*/

/*
let a= new Object();
console.log(a);

a.F_Name="Priya";
a.L_Name="Chaudhary";
a.age=22;
a.height= 5+" Feet";
console.log(a);
//document.write(a.age);


//object in array......
let students=[
   {Name:"Ram",Age:15},
   {Name:"Lakhan",Age:16},
   {Name:"Rahul",Age:14}
];

console.log(students);
*/

//object.assign....(method)
let a={
  my_Name:"Poonam",
  last_Name:"Chaudhary",
  Age:20
}

let b={ 
   Frnd_Name: 'Priya' 
}

Object.assign(b,a);
console.log(b);






const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number: "));
let c = 0, r,s,j=n,p,R;
while (n > 0) {
  r = n % 10;
  while(j>0){
    s=j%10;
    c++;
    p = Math.pow(10, c - 1);
    R=p*s;
    console.log(R);
    j= Math.floor(j / 10);
  }
  n = Math.floor(n / 10);
}



const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number: "));
let Q = Number(prompt("select No. for replace: "));
let r,c=0,p=0;
while(n>0){
  r=n%10;
  if(Q==r){
    continue;
  }
  if(){}
}
for(let d=0; d<c; d++){
   console.log(s_arr[d]);
}





























