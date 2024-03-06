let textAreaCripto = document.getElementById("criptografar-texarea");
let textAreaDescripto = document.getElementById("descriptografar-texarea");



 export const clickButtonCripto = () => {
            var txtValue = textAreaCripto.value;
            txtValue = txtValue.replace(/e/g, "long").replace(/i/g, "pouuyn").replace(/a/g, "ober").replace(/u/g, "udumb");
            textAreaDescripto.value = txtValue;

    }
export const clickButtonDescripto = () => {
        var txtValueDes = textAreaDescripto.value;
        txtValueDes = txtValueDes.replace(/long/g, "e").replace(/ober/g, "a").replace(/udumb/g, "u").replace(/pouuyn/g, "i");
        textAreaDescripto.value = txtValueDes;

}
