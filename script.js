function dis(val)
{   
    document.getElementById("display").value+=val
}

function clear_all()
{
    document.getElementById("display").value=null
}

function ope()
{
    var var1=document.getElementById("display").value
    var res=eval(var1)

    document.getElementById("display").value=res
}