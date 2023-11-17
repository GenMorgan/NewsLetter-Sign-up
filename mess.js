

document.getElementById("showmer").style.display= "none"



function superr(){
   
    document.getElementById("hidemer").style.display= "none"
    let x = document.getElementById("floatingInput").value
    if(x==""){
        alert("Please type in your mail")
        document.getElementById("hidemer").style.display= "block"
    } else{
        document.getElementById("boldert").innerText = x
        document.getElementById("showmer").style.display= "block"
    }
    // $(document).ready(function () {
    //     var taketime= $("#tryye").val();
    //     $("#boldert").text(taketime);
    // });

    
        
   
}