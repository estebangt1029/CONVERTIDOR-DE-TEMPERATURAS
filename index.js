const boton=document.getElementById('boton')
const celcius=document.getElementById('celcius') 
const temperatura=document.getElementById('temperatura')

function convertir(){
    let gradosf=document.getElementById('farenheit').value
    let gradosc=(gradosf-32)*5/9
    celcius.innerHTML=""+gradosc
    if(gradosc>0){
        temperatura.innerHTML=""+gradosc
        temperatura.style.height=gradosc+'%'
    }
    
    
    
    

 
}
boton.addEventListener('click',convertir)










