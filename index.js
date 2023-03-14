const add=(x,y)=>{
return x+y;
};
const subtract=(x,y)=>{
    return x-y;
    };

    const multiply=(x,y)=>{
        return x*y;
        };
        const division=(x,y)=>{
            return x/y;
        }
        console.log(add(1,2));
const operate=(operator,x,y)=>{
    x=Number(x);
    y=Number(y);
    
    if(operator=='+'){
        return add(x,y);
    }else if(operator=='-'){
        return subtract(x,y);
    }else if(operator=='*'){
        return multiply(x,y);
    }else if(operator=='/'){
        return division(x,y);
    }
}
console.log(operate("-","6","2"));
let a=0;
let b=0;
let res=0;
const display=document.querySelector(".display");
const numbers=document.querySelectorAll(".numbers button");
const operators=document.querySelectorAll(".operators button");
const equal=document.querySelector(".result");
let op="";
let op1="";
numbers.forEach((number)=>{
    number.addEventListener('click',(e)=>{
        
       
        display.textContent+=number.value;
        
        

    });
});

operators.forEach((operator)=>{
    operator.addEventListener('click',()=>{
      
        a=display.textContent;
        op1=operator.value;
        display.textContent="";
        
        
    })
    });



equal.addEventListener('click',()=>{
    
    //
    res=operate(op1,a,display.textContent);
    console.log(op1);
    console.log(display.innerHTML);
    console.log(a);
    display.innerHTML=res;
   

})


        