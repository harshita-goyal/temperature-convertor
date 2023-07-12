let calc= () =>{
    let num = document.getElementById("num").value;
    console.log(num);
    
    let temp=document.getElementById("temp");
    let valueT=temp.options[temp.selectedIndex].value;
    console.log(valueT);
   
    let fehtocel=(fah)=>{
         let celsius= Math.round((fah - 32) * 5/9);
        return celsius;
    }

    let celtofeh=(cal)=>{
         let fahrenheit= Math.round((cal * 9/5) + 32);
        return fahrenheit;
    }

     let result;
      
     if(valueT=='cel'){
        result=fehtocel(num);
       document.getElementById("resultbox").innerHTML=`= ${result}&deg;celsius`;
     }else{
        result=celtofeh(num);
        document.getElementById("resultbox").innerHTML=`= ${result}&deg;fahrenheit`;
     }
}