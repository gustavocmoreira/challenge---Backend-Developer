function verifyNumber(number){
    var text = 0;
    
    var  verificador = [3,5];
   
   for(j=0;j <= 1 ;j++){  
        var cont = '';
        var n = number
        while ( n > 0 ){
            n = n - verificador[j]; 
           
            if ( n == 0 ){
                text += ':'+verificador[j].toString();
            }
        }
        
    }
    return text;
    
}