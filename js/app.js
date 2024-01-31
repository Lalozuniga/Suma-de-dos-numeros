console.log('Conectado...')

const btnSuma = document.getElementById('btnSuma')

btnSuma.addEventListener('click', () =>{
    const num1 = document.getElementById('num1').value
    const num2 = document.getElementById('num2').value
    let suma
    if (num1=== '' && num2=== ''){
        alert('no has introducido nada, ghost')
    }else if (num1=== ''){
        suma  = parseInt(num2)
        } else if (num2 === ''){
            suma = parseInt(num1)
        } else {
            suma = parseInt(num1) + parseInt(num2)
        }
        alert('la suma es: ' + suma)
    console.log('@@@@ valores =>', num1, num2)
})

const mensaje = () => {
    alert('click desde el boton')
}
