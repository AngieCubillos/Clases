// Determinar cuales y cuantos números perfectos hay entre 1 y 1000? 
function perfecto() {
    let contador = 0;
    for (let i = 1; i < 100; i++) {
        var perfect =[]
        for (let a=0;a<=i;a++){
            if(i%a==0){
                perfect.push(i)
            }
        }
    }
    if  (perfect.lenght<3) {
        return `${contador} ES perfecto`;
    }
    else{
        return `${contador} NO es perfecto`;
    }
    }
perfecto()