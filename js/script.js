const form = document.getElementById('form');
form.addEventListener('submit' , function(event){
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi= (weight / (height * height)).toFixed(2);
    const value = document.getElementById('value');
    const ami= ((weight * 35 )/1000).toFixed(2);
const valor = document.getElementById('valor');


    
    let description = '';
   
    
    value.classList.add('attention');
    
    document.getElementById('infos').classList.remove('hidden');
    
    if(bmi < 18.5){
        description='Cuidado você esta abaixo do peso!'
    } else if (bmi >=18.5 && bmi <=25 ){
        description = 'Você esta no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');

    } else if (bmi >=25 && bmi <=30 ){
        description = 'Você esta com sobrepeso!';

    
    } else if (bmi >=30 && bmi <=35 ){
    description = 'Cuiado você esta com obseidade moderada!';

    } else if (bmi >=35 && bmi <=40 ){
    description = 'Cuiado você esta com obseidade severa!';
    
    }else {
    description = 'Cuidado você está com obseidade ma!';

}

    

    valor.textContent = ami.replace ('.',',');
    value.textContent = bmi.replace ('.',',');
    
    document.getElementById('description').textContent = description;
});


  

