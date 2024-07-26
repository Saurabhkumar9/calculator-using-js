let input=document.getElementById("inputBox");
let buttons=document.querySelectorAll("button")

let string=""
let arr=array.from(buttons);
arr.forEach(button => {
    button.addEventlistener('click',(e)=>{
        if(e.target.innerHtml== '='){
            string=eval(string);
            input.value=string;
        }
        string+= e.target.innerHtml;
        input.value=string;
    })
});