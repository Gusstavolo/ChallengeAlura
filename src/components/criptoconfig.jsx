export function clickButtonCripto() {
        const textAreaCripto = document.getElementById("criptografar-texarea");
        const textAreaDescripto = document.getElementById("descriptografar-texarea");
        
        if (textAreaCripto && textAreaCripto.value) {
            var txtValue = textAreaCripto.value;
            txtValue = txtValue.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/u/g, "ufat").replace(/o/g, "ober");
            textAreaDescripto.value = txtValue;
        }
    }
    
    export function clickButtonDescripto() {
        const textAreaCripto = document.getElementById("criptografar-texarea");
        const textAreaDescripto = document.getElementById("descriptografar-texarea");
        
        if (textAreaDescripto && textAreaDescripto.value) {
            var txtValueDes = textAreaDescripto.value;
            txtValueDes = txtValueDes.replace(/enter/g, "e").replace(/ai/g, "a").replace(/ufat/g, "u").replace(/imes/g, "i").replace(/ober/g, "o");
            textAreaDescripto.value = txtValueDes;
        }
    }