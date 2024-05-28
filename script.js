function onlabel(id){

  // removing the default 0
  if (Id("l1").innerText == "0"){
      Id("l1").innerText = "";
  }

  // not entering double zero if label1 is empty
  if (Id("l1").innerText == "" & id == '00'){
    // replacing the 00 with 0
    id=0;
  }

    // checking for dots if user has already entered a dot
if(Id("l1").innerText.includes('.')&(id=='.')){//do nothing 
}else{
    Id("l1").innerText = "" + Id("l1").innerText + id;
}

  }

function operation(id){

  let have_op = check(id);

  switch (id){
    case '√':
      squareroot();
      break;
    case '+/-':
      chng_sign();
      break;
    case '=':
      calculate();
      break;
    case 'C':
      clear();
      break;
    case 'CE':
      clear_single();
      break;
    default:
      if (have_op == true){
        calculate();
      }
        Id("l2").innerText = Id("l1").innerText + id;
        Id("l1").innerText = "0";
      break;
      }
  
}

function check(){

  // if label 2 already have operation then return false else true
  if(Id("l2").innerText.trim()!=''){
    return true;
  }else return false;
}

function calculate(){
try{
  // calculating the result
  
  let text_l2=Id("l2").innerText.trim();

  let len_l1=text_l2.length;
  let op=text_l2.charAt(len_l1-1);
  let num1=parseFloat(text_l2.replace(op,''));
  let num2=parseFloat(Id("l1").innerText.trim());

  // check for '-' sign at begining and removed because of application of replace method above
  if((text_l2.startsWith("-")) & (op=="-")){
    num1="-"+num1;
  }

  // conversion of symbol in case of symbol × and ÷
  if(op=='×'){
    op='*';
  }else if(op=='÷'){
    op='/';
  }

  let result=0;
  
  // calculate the result in case of percent
  if(op == '%'){
    result=num1/100*num2;
    }else{
  let temp=num1+" "+op+" "+num2;
  result=eval(temp);
}

  // set result and clear label 2
  Id("l1").innerText=result+'';
  Id("l2").innerText="";
}catch(e){
  console.log(e);
  }
}

function clear(){

  Id("l1").innerText = "0";
  Id("l2").innerText = "";
}

function clear_single(){
  let length=Id("l1").innerText.length;

  let new_value="0";

  // removing the single char
new_value=Id("l1").innerText.slice(0,length-1);

// set the value to zero if label 1 is empty
     if (new_value==""){
       new_value=0;
     }

  // set the revised value
  Id("l1").innerText=new_value;
}

function squareroot(){
  if (Id("l1").innerText == "0"){
  //square root of label 2 text
    Id("l1").innerText=Math.sqrt(parseFloat(Id("l2").innerText.replace(Id("l2").innerText.charAt(Id("l2").innerText.length-1),'').trim()));

    // clearing the label 2
    Id("l2").innerText="";
    
  }else{
    // square root of label 1 text
    Id("l1").innerText = Math.sqrt(parseFloat(Id("l1").innerText));
  }
}

function chng_sign(){
  if (Id("l1").innerText != "0"){
    if (Id("l1").innerText.charAt(0) == '-'){
      Id("l1").innerText = Id("l1").innerText.slice(1);
    }else{
      Id("l1").innerText = "-" + Id("l1").innerText;
    }
  }
}
  

function Id(name){
  if (name=="l1"){
    return document.getElementById("label1");
  }else if (name=="l2"){
    return document.getElementById("label2");
  }
}
