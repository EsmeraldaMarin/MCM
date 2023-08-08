let listo_btn_mcm = document.getElementById("lis1")
let limpiar_btn_mcm = document.getElementById("lim1")

let listo_btn_mcd = document.getElementById("lis2")
let limpiar_btn_mcd = document.getElementById("lim2")



let textarea = document.getElementById('numeros')
let respuesta = document.getElementById('rta')

listo_btn_mcm?.addEventListener('click', ()=>{
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

listo_btn_mcd?.addEventListener('click', ()=>{
    let numeros = textarea.value
    numeros = numeros.replace(/\s/g, '')
    numeros = numeros.split(",")

    for(let i=0;i<numeros.length;i++){
        numeros[i] = parseInt(numeros[i],10)
    }

    function calcular_mcd(numeros){
        let mcd = 1
        let menor = numeros[0]
        let es_div_com = true
        numeros.forEach(numero => {
            if (numero < menor){
                menor = numero
            }
        })

        while (menor > 0){

            for(let numero of numeros){
                if (numero % menor != 0){
                    es_div_com = false
                    break
                }
            }
            if (es_div_com){
                mcd = menor
                break
            }
            es_div_com = true
            menor -= 1 
        }
        
        return mcd
    }
    let rta = calcular_mcd(numeros)
    respuesta.innerHTML = `
    <div>La respuesta es:
        <span class="r">${rta}</span>
    </div>
    `
})


limpiar_btn_mcm?.addEventListener('click', ()=>{
    textarea.value = ""
})
limpiar_btn_mcd?.addEventListener('click', ()=>{
    textarea.value = ""
})
