function validate(){var e="";return document.getElementById("txtfirst").value==""&&(e+="Please enter your first name."),document.getElementById("txtlast").value==""&&(e+="Please enter your last name."),document.getElementById("txtphone").value==""&&(e+="\nPlease enter your phone number."),document.getElementById("txtemail").value==""?e+="\nPlease enter your email.":validateEmail(document.getElementById("txtemail").value)==0&&(e+="\nPlease enter a valid email address."),document.getElementById("txtchurch").value==""&&(e+="\nPlease enter the address of your church."),document.getElementById("txtcity").value==""&&(e+="\nPlease enter your city."),document.getElementById("txtstate").value==""&&(e+="\nPlease enter your state."),document.getElementById("txtzip").value==""&&(e+="\nPlease enter your zip."),document.getElementById("txtdatesinterested").value==""&&(e+="\nPlease enter the dates you are interested in."),document.getElementById("txtmessage").value==""&&(e+="\nPlease enter a message for us."),e==""?!0:(alert(e),!1)}function validateEmail(e){var t=new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"),n=t.test(e);return n};