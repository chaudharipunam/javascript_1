//compare 2 numbers..........

/*

const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
if(a<b){
  console.log("B is greater");
}
else{
  console.log("A is greater");
}


//day...........
const prompt=require("prompt-sync")();
let day=Number(prompt("day is: "));
if(day==0){
  console.log("MONDAY");
}
else if(day==1){
  console.log("TUESDAY");
}
else if(day==2){
  console.log("WEDNESDAY");
}
else if(day==3){
  console.log("THURSDAY");
}
else if(day==4){
  console.log("FRIDAY");
}
else if(day==5){
   console.log("SATURDAY");
}
else if(day==6){
   console.log("SUNDAY");
}
else{
   console.log("INVALID");
}



//month...........
const prompt=require("prompt-sync")();
let month=Number(prompt("month is: "));
if(month==1){
  console.log("JANUARY");
}
else if(month==2){
  console.log("FEBRUARY");
}
else if(month==3){
  console.log("MARCH");
}
else if(month==4){
  console.log("APRIL");
}
else if(month==5){
  console.log("MAY");
}
else if(month==6){
   console.log("JUNE");
}
else if(month==7){
   console.log("JULY");
}
else if(month==8){
   console.log("AUGUST");
}
else if(month==9){
  console.log("SEPTEMBER");
}
else if(month==10){
  console.log("OCTOBER");
}
else if(month==11){
  console.log("NOVEMBER");
}
else if(month==12){
  console.log("DECEMBER");
}
else{
   console.log("INVALID");
}


//profit percentage........
const prompt=require("prompt-sync")();
let sp=Number(prompt("SP is: "));
let cp=Number(prompt("CP is: "));
if(sp>cp){
  let p=sp-cp;
  let per=p/cp*100;
  console.log(p,per);
}



//loss percentage........
const prompt=require("prompt-sync")();
let cp=Number(prompt("CP is: "));
let sp=Number(prompt("SP is: "));
if(cp>sp){
  let l=cp-sp;
  let per=l/sp*100;
  console.log(l,per);
}


//square or rectangle.........
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let c=Number(prompt("C is: "));
let d=Number(prompt("D is: "));
if(a+b==c+d){
  console.log("It is square");
}
else{
  console.log("It is rectangle");
}



//lowest four digit number.............
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
if(a==1000){
   console.log("it is 4 digit smallest number");
}
else{
   console.log("it is not 4 digit smallest number"); 
}




//largest three digit number.............
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
if(a==999){
  console.log("it is 3 digit largest number");
}
else{
  console.log("it is not 3 digit largest number");
}


//divisible by 7 or not.................
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
if(a%7==0){
  console.log("it is divisible by 7");
}
else{
  console.log("it is not divisible by 7");
}



//last digit of nukmber is  divisible by three or not..........
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let r=a%10;
if(r%3==0){
  console.log("it is digit of divisible 3");
}
else{
  console.log("it is not divisible by 3 ");
}


//Hello & Bye........
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
if(a%5==0){
  console.log("HELLO");
}
else{
  console.log("BYE");
}



const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let c=Number(prompt("C is: "));
let d=Number(prompt("D is: "));
let e=Number(prompt("E is: "));
let f=Number(prompt("F is: "));
let a1=Number(prompt("A1 is: "));
let b1=Number(prompt("B1 is: "));
let c1=Number(prompt("C1 is: "));
let d1=Number(prompt("D1 is: "));
let e1=Number(prompt("E1 is: "));
let f1=Number(prompt("F1 is: "));
let A=a+b+c+d+e+f;
let B=a1+b1+c1+d1+e1+f1;
if(a<b){
   console.log("A is topper");
}
else{
   console.log("B is topper");
}



//bonus..............
const prompt=require("prompt-sync")();
let s=Number(prompt("S is: "));
let y=Number(prompt("Y is: "));
if(y>5){
   let net_bonus=s*5/100;
   console.log("It is Net Bonus",net_bonus);
}
else{
   console.log("Not eligible for Bonus");
}



//arithmetic operator.............
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let c=(prompt("C is: "));
if(c=='+'){
   console.log(a+b);
}
else if(c=='-'){
   console.log(a-b);
}
else if(c=='*'){
   console.log(a*b);
}
else if(c=='/'){
   console.log(a/b);
}
else{
   console.log("INVALID");
}



//max in 3 numbers............
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let c=Number(prompt("C is: "));
if(a>b){
  if(a>c){
    console.log(a);
  }
  else{
    console.log(c);
  }
}
else if(b>c){
   console.log(b);
}
else{
  console.log(c);
}



//positive, negative , zero............
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
if(a<0){
  console.log("It is Negative number");
}
else if(a==0){
  console.log("It if Zero");
}
else{
  console.log("It is Positive number");
}



//divisible by 5 & 11...........

const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
if(a%5==0 && a%11==0){
  console.log("Divisible");
}
else{
  console.log("Not Divisible");
}



//check UPPERCASE or LOWERCASE..........
const prompt=require("prompt-sync")();
let ch=(prompt("Char is: "));
if(ch>='a' && ch<='z'){
  console.log("It is lower case");
}
else if(ch>='A' && ch<='Z'){
  console.log("It is UPPER CASE");
}
else{
  console.log("INVALID");
}


//equi,scalene,isosceles...................
const prompt=require("prompt-sync")();
let s1=Number(prompt("S1 is: "));
let s2=Number(prompt("S2 is: "));
let s3=Number(prompt("S3 is: "));
if(s1==s2 && s2==s3){
  console.log("EQUILATERAL TRRIANGLE");
}
else if(s1==s2 && s2!=s3){
  console.log("ISOSCELES TRIANGLE");
}
else if(s1!=s2 && s2!=s3){
  console.log("SCALENE TRIANGLE");
}
else{
  console.log("INVALID");
}



//students grade (percentage).............
const prompt=require("prompt-sync")();
let s1=Number(prompt("Sub1 is: "));
let s2=Number(prompt("Sub2 is: "));
let s3=Number(prompt("Sub3 is: "));
let s4=Number(prompt("Sub4 is: "));
let s5=Number(prompt("Sub5 is: "));
let perc=s1+s2+s3+s4+s5/500;
if(perc>=90){
  console.log("Grade A");
}
else if(perc>=80){
  console.log("Grade B");
}
else if(perc>=70){
  console.log("Grade C");
}
else if(perc>=60){
  console.log("Grade D");
}
else if(perc>=40){
  console.log("Grade E");
}
else if(perc<40){
  console.log("Grade F");
}
else{
  console.log("INVALID");
}




//basic salary
const prompt=require("prompt-sync")();
let bs=Number(prompt("Sub1 is: "));
if(bs<=10000){
  let hra=20/100;
  let da=80/100;
  let gs=bs+bs*hra+bs*da;
  console.log(gs);
}
else if(bs<=20000){
  let hra=25/100;
  let da=90/100;
  let gs=bs+bs*hra+bs*da;
  console.log(gs);
}
else if(bs>20000){
  let hra=30/100;
  let da=95/100;
  let gs=bs+bs*hra+bs*da;
  console.log(gs);
}



//2nd max 4 numbers.............
const prompt=require("prompt-sync")();
let a=Number(prompt("num1 is: "));
let b=Number(prompt("num2 is: "));
let c=Number(prompt("num3 is: "));
let d=Number(prompt("num4 is: "));
if(a>b){
  m1=a;
  sm1=b;
}
else{
  m1=b;
  sm1=a;
}
if(c>d){
  m2=c;
  sm2=d;
}
else{
  m2=d;
  sm2=c;
}
if(m1>m2){
  if(m2>sm1){
    console.log(m2);
  }
  else{
    console.log(sm1);
  }
}
else if(m1>sm2){
  console.log(m1);
}
else{
  console.log(sm2);
} 



//max in 5 numbers.............
const prompt=require("prompt-sync")();
let a=Number(prompt("num1 is: "));
let b=Number(prompt("num2 is: "));
let c=Number(prompt("num3 is: "));
let d=Number(prompt("num4 is: "));
let e=Number(prompt("num5 is: "));
if(a>b){
  m1=a;
}
else{
  m1=b;
}
if(c>d){
  m2=c;
}
else{
  m2=d;
}
if(m1>m2){
  if(m1>e){
    console.log(m1);
  }
  else{
    console.log(e);
  }
}
else if(m2>e){
  console.log(m2);
}
else{
  console.log(e);
} 



//leap year or not....................
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
if(n%4==0){
  if(n%100==0){
    if(n%400==0){
        console.log("It is LEAP year");
    }
    else{
        console.log("It is COMMON year");
    }
  }
  else{
     console.log("It is LEAP year");
  }
}
else{
  console.log("It is COMMON year");
}



//shop discount...........
const prompt=require("prompt-sync")();
let n=Number(prompt("N is: "));
if(n>1000){
  let discount =Math.floor(n*(10/100));
  console.log(discount);
}
else{
  console.log(n);
}


//no profit, no loss, no inccured profit & loss............
const prompt=require("prompt-sync")();
let sp=Number(prompt("sp is: "));
let cp=Number(prompt("cp is: "));
if(sp>cp){
   let p=sp-cp;
   console.log("Profit is: ",p);
}
else if(cp>sp){
   let l=cp-sp;
   console.log("Loss is: ",l);
}
else if(sp==cp){
   console.log("No profit, No loss");
}
else{
   console.log("incurred profit, incurred loss");
}



//sum 15 to 20 ---output -20.........
const prompt=require("prompt-sync")();
let a=Number(prompt("a is: "));
let b=Number(prompt("b is: "));
let c=a+b;
if(c>=15 && c<=20){
   console.log("20");
}
else{
   console.log("Invalid");
}



//2nd max in .............
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let c=Number(prompt("C is: "));
let d=Number(prompt("D is: "));
let e=Number(prompt("E is: "));
let f=Number(prompt("F is: "));
let g=Number(prompt("G is: "));
let h=Number(prompt("H is: "));
let sm=b,m=a;
if(b>m){
  sm=m;
  m=b;
}
else if(b>sm){
  sm=b;
}
if(c>m){
  sm=m;
  m=c;
}
else if(c>sm){
  sm=c;
}
if(d>m){
  sm=m;
  m=d;
}
else if(d>sm){
  sm=d;
}
if(e>m){
  sm=m;
  m=e;
}
else if(e>sm){
  sm=e;
}
if(f>m){
  sm=m;
  m=f;
}
else if(f>sm){
  sm=f;
}
if(g>m){
  sm=m;
  m=g;
}
else if(g>m){
  sm=g;
}
if(h>m){
  sm=m;
  m=h;
}
else if(h>sm){
  sm=h;
}
console.log(sm);



//year, month, date...........
const prompt=require("prompt-sync")();
let d=Number(prompt("Date is: "));
let m=Number(prompt("Month is: "));
let y=Number(prompt("Year is: "));
if(y>0){
  if(d>=1){
    if(d<=31){
      if(m>=1){
        if(m<=12){
            console.log("Valid year");
        }
        else{
            console.log("Invalid year");
        }
      }
      else{
            console.log("Invalid year");
      }
    }
    else{
            console.log("Invalid year");
    }
  }
  else{
            console.log("Invalid year");
  }
}



//electricity bill...........
const prompt=require("prompt-sync")();
let u=Number(prompt("Unit is: "));
let a,b;
if(u<=50){
  a=u*0.50
  b=a*20/100+a;
  console.log(b);
}
else if(u<=150){
  a=50*0.50+(u-100)*0.75;
  b=a*20/100+a;
  console.log(b);
}
else if(u<=250){
  a=50*0.50+(100*0.75)+u-150*1.20;
  b=a*20/100+a;
  console.log(b);
}
else if(u>250){
  a=50*0.50+(100*0.75)+150*1.20+u-250*150;
  b=a*20/100+a;
  console.log(b);
}





//2nd max in 3 number............
A is: 23
B is: 4
C is: 7
Second max is:  7...............output
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let c=Number(prompt("C is: "));
if(a>b){
  m1=a;
  sm1=b;
}
else{
  m1=b;
  sm1=a;
}
if(m1>c){
  if(c>sm1){
    sm=c;
  }
  else{
    sm=sm1;
  }
}
else{
   sm=m1;
}
console.log("Second max is: ",sm);




//Third Max in 4 numbers..................
A is: 4
B is: 56
C is: 24
D is: 7
Third max is: 7
const prompt=require("prompt-sync")();
let a=Number(prompt("A is: "));
let b=Number(prompt("B is: "));
let c=Number(prompt("C is: "));
let d=Number(prompt("D is: "));
let m1,m2,sm1,sm2;
if(a<b){
  m1=a;
  sm1=b;
}
else{
  m1=b;
  sm1=a;
}
if(c<d){
  m2=c;
  sm2=d;
}
else{
  m2=d;
  sm2=c;
}
if(m1<m2){
  if(m2<sm1){
    tm=m2;
  }
  else{
    tm=sm1;
  }
}
else if(m1<sm2){
  tm=m1;
}
else{
  tm=sm2;
}
console.log("Third max is: "+tm);


*/






















