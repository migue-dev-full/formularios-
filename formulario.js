// definir funcion

function formulario(){
    var form ="";
    var usuario = document.form1.usuario.value;
    var nombre = document.form1.nombre.value;
    var apellido = document.form1.apellido.value;
    var email = document.form1.email.value;
    var p1 = document.form1.password.value;
    var p2 = document.form1.password1.value;
    var hobbies = "";
    var b = document.form1.hobby.length;
    // console.log(b);
    
    for(a=0;a<b;a++){
        if(document.form1.hobby[a].checked){
            // hobbies = hobbies + document.form1.hobby[a].value + " ";
             hobbies += document.form1.hobby[a].value + " ";
        }
    }
    
    var pais = document.form1.pais.value;
    var sexo = document.form1.sexo.value;

    // console.log(sexo);

    // validamos que no esten vacios los campos
    if(usuario=="" || nombre=="" || apellido=="" || pais=="" || email=="" || sexo=="" || hobbies.length==0){
        // console.log('Los campos con (*) son abligatorios');
        alert('Los campos con (*) son abligatorios')
    }

    if(p1!=p2 || p1==""){
        alert('Las claves deben ser iguales y no puede estar en blanco');
    }

    form = "\nusuario: "+ usuario + "\nnombre; "+ nombre + "\napellido: "+ apellido + "\nemail: "+ email + "\nhobbies: "+ hobbies + "\npais: "+ pais + "\nsexo: "+ sexo
    alert(form)
    
}