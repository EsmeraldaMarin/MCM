let listo_btn = document.getElementById("lis")
let limpiar_btn = document.getElementById("lim")
let textarea = document.getElementById('numeros')
let respuesta = document.getElementById('rta')

listo_btn.addEventListener('click', ()=>{
    let numeros = textarea.value
    numeros = numeros.replace(/\s/g, '')
    numeros = numeros.split(",")

    for(let i=0;i<numeros.length;i++){
        numeros[i] = parseInt(numeros[i],10)
    }

    function calcular_mcm(numeros){
        let mcm = 0
        let es_mult = true
        let multiptope = 1
        numeros.forEach(numero => {
            multiptope = numero * multiptope
        })
        while (multiptope != 0){
            numeros.forEach(num =>{
                if (multiptope % num != 0){
                    es_mult = false
                }
            })
                
            if (es_mult){
                mcm = multiptope
            }
            es_mult=true
            multiptope -= 1
        }
        return mcm
    }
    let rta = calcular_mcm(numeros)
    respuesta.innerHTML = `
    <div>La respuesta es:
        <span class="r">${rta}</span>
    </div>
    `


})
limpiar_btn.addEventListener('click', ()=>{
    textarea.value = ""
})
