function check_input()
{		
	
	var a = check_username();
	var b = check_password();
	var c = check_confirm();
	if(a && b && c){
		alert("ע��ɹ�");
	}
	else{
		alert("�û���Ϣ��д����");
	}
}	
function check_confirm(){
	
	var confirm = document.getElementById("confirm").value;	
	var password = document.getElementById("password").value;	
	
	if(confirm!= password)
	{		
		document.getElementById("info_confim").style.color="red";
		document.getElementById("info_confim").innerHTML="�����������벻һ��";
		return false;
	}
	else{
		document.getElementById("info_confim").style.color="black";
		document.getElementById("info_confim").innerHTML="";
		return true;
	}
}
function check_password(){
	var password = document.getElementById("password").value;
	var reg_password = /^[a-zA-Z0-9_]{6,12}$/;	
	if(!reg_password.test(password))
	{
		document.getElementById("info_password").style.color="red";
		document.getElementById("info_password").innerHTML="���벻��������";
		return false;
	}
	else{
		document.getElementById("info_password").style.color="black";
		document.getElementById("info_password").innerHTML="";
		return true;
	}
}
function check_username(){
	var username = document.getElementById("username").value;	
	var reg_username = /^[a-zA-Z][a-zA-Z0-9]{5,16}$/;
	if(!reg_username.test(username)) //�û����ж�
	{		
		document.getElementById("info_username").style.color="red";
		document.getElementById("info_username").innerHTML="�û�������������";		
		return false;
	}else{
		document.getElementById("info_username").style.color="black";
		document.getElementById("info_username").innerHTML="";		
		return true;
	}
}	