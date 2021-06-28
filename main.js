function Hisoblagich() {  
    let userInput = document.querySelector("#tugilganKun").value;  
    let input = new Date(userInput);  
      
    
    if(userInput==null || userInput==''){  
      document.querySelector("#ogohlantirish").textContent = "Sana kiriting!";    
      return false;   
    }else {  
      
    let yozuvShakli = userInput.toString();  
    let kiritilganYil = parseInt(yozuvShakli.substring(0,4), 10);  
    let kiritilganOy = parseInt(yozuvShakli.substring(5,7), 10);  
    let kiritilganKun = parseInt(yozuvShakli.substring(8,10), 10);   
    let bugun = new Date();  
    let tugilganKun = new Date(kiritilganYil, kiritilganOy-1, kiritilganKun);    
    let milliSekundaFarqi = bugun.valueOf() - tugilganKun.valueOf();        
    let yosh = Math.floor(milliSekundaFarqi / 31536000000);  
    let kun = Math.floor((milliSekundaFarqi % 31536000000) / 86400000);    
          
    let oy = Math.floor(kun/30);          
     kunKun = kun % 30;  
          
    let tMnt= (oy + (yosh*12));  
    let tDays =(tMnt*30) + kun;  
       
        
     if (input>bugun) {  
        document.querySelector("#natija").textContent = ("Xato!");  
      }  
      else {  
        document.querySelector("#natija").textContent ="Siz " + yosh + " yil yoki " + tMnt + " oy yoki " + tDays + " kundan beri yashayapsiz!"  
      }  
   }  
}  