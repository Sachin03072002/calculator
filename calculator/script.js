let string ="";
let string_1="";
var bracket_count=1;
let buttons =document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    try{
      if(e.target.innerHTML == '='){
        string=eval(string);
        document.querySelector('input').value = string; 
      }else if(e.target.innerHTML == 'C'){
        string=" ";
        document.querySelector('input').value = string; 
      }
      else if(e.target.innerHTML == '()'){
        bracket_count+=0.5;
        if(bracket_count%2!=0){
          console.log(bracket_count);
          string="(";
          document.querySelector('input').value = string; 
          bracket_count+=1;
        }else{
          console.log(bracket_count);
          string+=")";
          document.querySelector('input').value = string; 
          bracket_count++;
          
        }
        
      }
      else if(e.target.innerHTML == '+/-'){
        string="(-";
        document.querySelector('input').value = string; 
      }
      else if(e.target.innerHTML == 'BACKSPACE'){
        var exp=Document.row.input.value;
        document.querySelector('input').value = string.substring(0,string.length()-1);
      }
      else{
        console.log(e.target)
        string=string + e.target.innerHTML;
        document.querySelector('input').value = string;
      }
    }catch(exception){
      console.log(exception);
      string="INVALID SYNTAX";
      document.querySelector('input').value=string;
    }
   
  })
})