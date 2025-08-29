const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialChar=["+","-","/","*","=","%"]
let output="";


const calculate = (btnvalue)=>{
  if (btnvalue === "=" && output !==""){
    output =eval(output.replace("%","/100"))
  }else if(btnvalue==="AC"){
   output=""
  }else if(btnvalue==="X"){
  output=output.toString().slice(0,-1)
  }else{
    if(output === "" && specialChar.includes(btnvalue)) return;
    output+= btnvalue; 
}
display.value=output;
}

//add eventListner to buttons, call calcultae() on click.
buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        const btnValue = e.target.dataset.value;
        calculate(btnValue);
    });
});