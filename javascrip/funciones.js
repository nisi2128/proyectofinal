

document.getElementById("btn").addEventListener("click", function() {
    console.log('mostrar contenido oculto')
    document.getElementById("ocultar").style.display = "block";
    
});

document.getElementById("btn1").addEventListener("click", () => {
    console.log('ocultar contenido visible')
    document.getElementById("ocultar").style.display = "none";
})
document.getElementById("lab1").addEventListener("click", function() {
    console.log('mostrar contenido oculto')
    document.getElementById("ocullab").style.display = "block";});

document.getElementById("lab2").addEventListener("click", () => {
        console.log('ocultar contenido visible')
        document.getElementById("ocullab").style.display = "none";
    })   
    document.getElementById("compl2").addEventListener("click", function() {
        console.log('mostrar contenido oculto')
        document.getElementById("compl").style.display = "block";
        
    }); 
    
    document.getElementById("compl3").addEventListener("click", () => {
        console.log('ocultar contenido visible')
        document.getElementById("compl").style.display = "none";
    })   
    
    