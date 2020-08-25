function CheckFn(Fn)
{
	
var alpha = /^[A-Za-z]/;
    
   if (Fn=='')
  {
      document.getElementById('diserrorFn').innerHTML="Please Enter First Name";
       document.getElementById('fn').focus();
  }
   else if(!alpha.test(Fn))
   {
	document.getElementById('diserrorFn').innerHTML="Please Enter Alphabetic Value";  
	  document.getElementById('fn').focus();
   }
   else
   {
    document.getElementById('diserrorFn').innerHTML="";
    }
}
function CheckLn(Ln)
{
	
var alpha = /^[A-Za-z]/;

    
   if (Ln=='')
  {
      document.getElementById('diserrorLn').innerHTML="Please Enter Last Name";
       document.getElementById('ln').focus();
  }
   else if(!alpha.test(Ln))
   {
	document.getElementById('diserrorLn').innerHTML="Please Enter Alphabetic Value";  
	  document.getElementById('ln').focus();
   }
   else
   {
    document.getElementById('diserrorLn').innerHTML="";
    }
}
function CheckEm(Em)
{
	
var email=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    
   if (Em=='')
  {
      document.getElementById('diserrorEm').innerHTML="Please Enter Email Id";
       document.getElementById('emailid').focus();
  }
   else if(!email.test(Em))
   {
	document.getElementById('diserrorEm').innerHTML="Please Enter Valid EmailId";  
	  document.getElementById('emailid').focus();
   }
   else
   {
    document.getElementById('diserrorEm').innerHTML="";
    }
}
function CheckC(C)
{    
      var alpha = /^[A-Za-z]/;
   if (C=='')
  {
      document.getElementById('diserrorC').innerHTML="Please Enter Contact number";
       document.getElementById('contact').focus();
  }
   else if(alpha.test(C))
   {
	document.getElementById('diserrorC').innerHTML="Please Enter Digit";  
	  document.getElementById('contact').focus();
   }
    else if (C.length != 10)
	{
		document.getElementById('diserrorC').innerHTML="Please Enter 10 Digit";  
	  document.getElementById('contact').focus();
		}
   else
   {
    document.getElementById('diserrorC').innerHTML="";
    }
} 

function btnvalidation()
{
   if(document.getElementById('fn').value=='')
   {
       
      alert("please Enter First Name");
      document.getElementById('fn').focus();
      
   }
   else if(document.getElementById('ln').value=='')
   {
   alert("please Enter Last Name");
   }
   else if(document.getElementById('mssg').value=='')
      {
      alert("please Enter Message");
   }
   else if(document.getElementById('emailid').value=='')
   {
      alert("please Enter EmailId");
   }
   else if(document.getElementById('contact').value=='')
   {
      alert("please Enter Contact no");
   }
   else
   {
     alert('submitted successfully');
    
   }
}



