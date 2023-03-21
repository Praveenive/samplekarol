

function value1()
{
    // document.getElementById("myForm");
    
    let first=document.getElementById("first-name").value;
    document.getElementById("first").innerHTML=first;
    let last= document.getElementById("last-name").value;
    document.getElementById("lastName").innerHTML=last;
    let add1= document.getElementById("address1").value;
    let add2= document.getElementById("address2").value;
    document.getElementById("add").innerHTML=add1+" "+add2;
    let pin= document.getElementById("pincode").value;
    document.getElementById("pincode1").innerHTML=pin;
    let gen = document.getElementsByClassName("gender");
    for(let i=0;i<gen.length;i++)
    {
        if(gen[i].checked){
    document.getElementById("gender").innerHTML = gen[i].value;
        }
      }
      let count=0, foo = document.getElementsByClassName("food");
      let foodstring="";
      
      for(let j=0;j<foo.length;j++)
      {
        if(foo[j].checked)
        {
          count++;
          foodstring+=foo[j].value+"<br>";   
        }
      }
      document.getElementById("food").innerHTML=foodstring;
      if(count<2){
        alert("Kindly select atleast two food");
      }
    let state= document.getElementById("State").value;
    document.getElementById("state").innerHTML=state;
    let contry=document.getElementById("Country").value;
    document.getElementById("country").innerHTML=contry;
  
    
    
}
