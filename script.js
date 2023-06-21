var array = ' '

function add(value){
    console.log(value)
    array += value
    console.log(array)
    document.getElementById("answer").innerHTML = `${array} `
}

function equal(){
    var array1 = eval("[" + array + "]");
    if(array1.length>0){
        document.getElementById("answer").innerHTML = `${array} = ${array1[0]} `
        array = ' '
    }
    else{
        document.getElementById("answer").innerHTML = ` `
    }
}

function doMath(){

    var variable = document.getElementById('input_id').value;
    var array = eval("[" + variable + "]");
    console.log(variable)
    if(array.length>0){
        document.getElementById("answer").innerHTML = `${variable} = ${array[0]} `
    }
    else{
        document.getElementById("answer").innerHTML = ` `
    }
       

    
}
