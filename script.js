function dis(val)
{   
    document.getElementById("display").value+=val
}

function clear_all()
{
    document.getElementById("display").value=""
}

function clear_one()
{
    temp=document.getElementById("display").value
    temp=temp.slice(0,-1)
    document.getElementById("display").value=temp
}   

function ope()
{
    var var1=document.getElementById("display").value
    var res=eval(var1)

    document.getElementById("display").value=res
}

