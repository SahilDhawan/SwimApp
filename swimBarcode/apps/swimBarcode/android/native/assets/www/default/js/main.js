
/* JavaScript content from js/main.js in folder common */

	/*
	 * Application is started in offline mode as defined by a connectOnStartup property in initOptions.js file.
	 * In order to begin communicating with Worklight Server you need to either:
	 * 
	 * 1. Change connectOnStartup property in initOptions.js to true. 
	 *    This will make Worklight framework automatically attempt to connect to Worklight Server as a part of application start-up.
	 *    Keep in mind - this may increase application start-up time.
	 *    
	 * 2. Use WL.Client.connect() API once connectivity to a Worklight Server is required. 
	 *    This API needs to be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 *    Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
var FinalPrice = 0;
var imageCount = 0;
var FinalPrice1 = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;

function wlCommonInit(){
}

function login()
{
//	alert("This is test");
	var Email = $("#lEmailText").val();
	var Password = $("#lPasswordText").val();
	var invocationData = 
		{
			adapter : 'Contact',
			procedure : 'loginContact',
			parameters : [Email,Password]
		};
	var options = 
		{
			onSuccess : successfn2,
			onFailure : failfn2
		};
	WL.Client.invokeProcedure(invocationData,options);
}
function successfn2(result)
{
	if($("#lEmailText").val() == "" || $("#lPasswordText").val() == "")
		{
		document.getElementById("label0").innerHTML = "Invalid Email or Password !";
		}
	else
		{
	var l = result.invocationResult.resultSet.length;
	if(l>0)
		{

		var Name = result.invocationResult.resultSet[0].Name;
		var Address = result.invocationResult.resultSet[0].Address;
		var Mobile = result.invocationResult.resultSet[0].Mobile;
		var Email = result.invocationResult.resultSet[0].Email;
		
		document.getElementById("labelName").innerHTML =  Name;
		document.getElementById("labelAddress").innerHTML = Address;
		document.getElementById("labelMobile").innerHTML = Mobile;
		document.getElementById("labelEmail").innerHTML = Email;
		window.location.assign("#page");	
		}
	else
		{
			document.getElementById("label0").innerHTML = "Incorrect Email or Password !";
		}
	}
}
function failfn2()
{
	document.getElementById("label0").innerHTML = "Unsuccessful Login !";
}
function SignUp()
{
	//alert("Function Called !");
	var Name = $("#signName").val();
	var Address = $("#signAddress").val();
	var Mobile = $("#signMobile").val();
	var Email = $("#signEmail").val();
	var Password = $("#signPassword").val();
	var Confirm = $("#signConfirm").val();
	//alert(Name);
	document.getElementById("label1").innerHTML = "";
	//alert("Before Invocation Data");
	var invocationData = 
		{
			adapter : 'Contact',
			procedure : 'addContact',
			parameters : [Name,Address,Mobile,Email,Password]
		};
	//alert("After Invocation Data");
	var options = 
		{
			onSuccess : successfn1,
			onFailure : failfn1
		};
	//alert("After Options !");
	
	if(Password == Confirm)
		{
		WL.Client.invokeProcedure(invocationData,options);
		
		document.getElementById("labelName").innerHTML =  Name;
		document.getElementById("labelAddress").innerHTML = Address;
		document.getElementById("labelMobile").innerHTML = Mobile;
		document.getElementById("labelEmail").innerHTML = Email;

		}
	else 
		{
		document.getElementById("label1").innerHTML = "Passwords Don't Match";
		}
}
function successfn1()
{
	window.location.assign("#page");	
}
function failfn1()
{
	document.getElementById("label1").innerHTML = "Sign Up Unsuccessful !";
}


window.setInterval(function slide(){
	var image = document.getElementById("img");
	if(imageCount>=3)
	{
		imageCount = 0;
	}
else
	{
		imageCount = imageCount+1;
	}
	image.src = "swim_images/swim_image" + imageCount + ".jpg";
	
},5000);



function AtcJ5()
{
	var cart = document.getElementById("Cart");
	var check = document.getElementById("cartDiv");
	var j5  = document.createElement('div');
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	j5.id  = "j5Div";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/samsungj5.jpg');
	image.setAttribute('height','100');
	image.setAttribute('width','50');
	j5.appendChild(image);
	label.textContent = "Samsung Galaxy J5(2016)";
	price.textContent = "Rs 12,990";
	price.style.color = "red";
	FinalPrice = FinalPrice + 12990;
	document.getElementById("price").innerHTML = "Final Price :- ₹" + FinalPrice;
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Cart");
	a = a+1;
}

function AtcJ7()
{
	var cart = document.getElementById("Cart");
	var check = document.getElementById("cartDiv");
	var j5  = document.createElement('div');
	j5.id = "j7Div";
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/samsungj7.jpg');
	image.setAttribute('height','100');
	image.setAttribute('width','50');
	j5.appendChild(image);
	label.textContent = "Samsung Galaxy J7(2016)";
	price.textContent = "Rs 15,990";
	price.style.color = "red";
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Cart");
	FinalPrice = FinalPrice + 15990;
	document.getElementById("price").innerHTML = "Final Price :- ₹" + FinalPrice;
	b = b+1;
}

function AtcG5()
{
	var cart;
	cart=document.getElementById("Cart");
	var check = document.getElementById("cartDiv");
	var j5  = document.createElement('div');
	j5.id = "g5Div";
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/lgG5.jpg');
	image.setAttribute('height','100');
	image.setAttribute('width','50');
	j5.appendChild(image);
	label.textContent = "LG G5";
	price.textContent = "Rs 47,990";
	price.style.color = "red";
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Cart");
	FinalPrice = FinalPrice + 47990;
	document.getElementById("price").innerHTML = "Final Price :- ₹" + FinalPrice;
	c = c+1;
}


function AtcMac()
{
	var cart = document.getElementById("Cart");
	var check = document.getElementById("cartDiv");
	var j5  = document.createElement('div');
	j5.id = "macDiv";
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/mac_pro.jpg');
	image.setAttribute('height','75');
	image.setAttribute('width','125');
	j5.appendChild(image);
	label.textContent = "Apple Macbook Pro";
	price.textContent = "Rs 143,990";
	price.style.color = "red";
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Cart");
	FinalPrice = FinalPrice + 143990;
	document.getElementById("price").innerHTML = "Final Price :- ₹" + FinalPrice;
	d = d+1;
}

function AtcHp()
{
	var cart = document.getElementById("Cart");
	var check = document.getElementById("cartDiv");
	var j5  = document.createElement('div');
	j5.id = "hpDiv";
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/hp.jpg');
	image.setAttribute('height','75');
	image.setAttribute('width','125');
	j5.appendChild(image);
	label.textContent = "Hp 15-ac123tx";
	price.textContent = "Rs 40,990";
	price.style.color = "red";
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Cart");
	FinalPrice = FinalPrice + 40990;
	document.getElementById("price").innerHTML = "Final Price :- ₹" + FinalPrice;
	e = e+1;
}


function AtcAlien()
{
	
	var cart = document.getElementById("Cart");
	var check = document.getElementById("cartDiv");
	var j5  = document.createElement('div');
	j5.id = "alienDiv";
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/alienware.jpg');
	image.setAttribute('height','75');
	image.setAttribute('width','125');
	j5.appendChild(image);
	label.textContent = "Alienware R2";
	price.textContent = "Rs 166,991";
	price.style.color = "red";
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Cart");
	FinalPrice = FinalPrice + 166991;
	document.getElementById("price").innerHTML = "Final Price :- ₹" + FinalPrice;
	f = f+1;
}
function buyJ5()
{
	var cart = document.getElementById("Buy");
	var check = document.getElementById("payment");
	var j5  = document.createElement('div');
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/samsungj5.jpg');
	image.setAttribute('height','100');
	image.setAttribute('width','50');
	j5.appendChild(image);
	label.textContent = "Samsung Galaxy J5(2016)";
	price.textContent = "Rs 12,990";
	price.style.color = "red";
	FinalPrice1 = FinalPrice1 + 12990;
	document.getElementById("price1").innerHTML = "Final Price :- ₹" + FinalPrice1;
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Buy");
	document.getElementById("cartButton").style.display = "none";
}
function buyJ7()
{
//	alert("Before payment");
	var cart = document.getElementById("Buy");
	var check = document.getElementById("payment");
//	alert("After payment");
	var j5  = document.createElement('div');
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/samsungj7.jpg');
	image.setAttribute('height','100');
	image.setAttribute('width','50');
	j5.appendChild(image);
	label.textContent = "Samsung Galaxy J7(2016)";
	price.textContent = "Rs 15,990";
	price.style.color = "red";
	FinalPrice1 = FinalPrice1 + 15990;
//	alert("before price1");
	document.getElementById("price1").innerHTML = "Final Price :- ₹" + FinalPrice1;
//	alert("After price1");
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Buy");
	document.getElementById("cartButton").style.display = "none";
}
function buyG5()
{
//	alert("Before payment");
	var cart = document.getElementById("Buy");
	var check = document.getElementById("payment");
//	alert("After payment");
	var j5  = document.createElement('div');
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/lgG5.jpg');
	image.setAttribute('height','100');
	image.setAttribute('width','50');
	j5.appendChild(image);
	label.textContent = "LG G5";
	price.textContent = "Rs 47,990";
	price.style.color = "red";
	FinalPrice1 = FinalPrice1 + 47990;
//	alert("before price1");
	document.getElementById("price1").innerHTML = "Final Price :- ₹" + FinalPrice1;
//	alert("After price1");
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Buy");
	document.getElementById("cartButton").style.display = "none";
}
function buyMac()
{
//	alert("Before payment");
	var cart = document.getElementById("Buy");
	var check = document.getElementById("payment");
//	alert("After payment");
	var j5  = document.createElement('div');
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/mac_pro.jpg');
	image.setAttribute('height','75');
	image.setAttribute('width','125');
	j5.appendChild(image);
	label.textContent = "Apple Macbook Pro";
	price.textContent = "Rs 143,990";
	price.style.color = "red";
	FinalPrice1 = FinalPrice1 + 143990;
//	alert("before price1");
	document.getElementById("price1").innerHTML = "Final Price :- ₹" + FinalPrice1;
//	alert("After price1");
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Buy");
	document.getElementById("cartButton").style.display = "none";
}
function buyHp()
{
//	alert("Before payment");
	var cart = document.getElementById("Buy");
	var check = document.getElementById("payment");
//	alert("After payment");
	var j5  = document.createElement('div');
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/hp.jpg');
	image.setAttribute('height','75');
	image.setAttribute('width','125');
	j5.appendChild(image);
	label.textContent = "Hp 15-ac123tx";
	price.textContent = "Rs 40,990";
	price.style.color = "red";
	FinalPrice1 = FinalPrice1 + 40990;
//	alert("before price1");
	document.getElementById("price1").innerHTML = "Final Price :- ₹" + FinalPrice1;
//	alert("After price1");
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Buy");
	document.getElementById("cartButton").style.display = "none";
}
function buyAlien()
{
//	alert("Before payment");
	var cart = document.getElementById("Buy");
	var check = document.getElementById("payment");
//	alert("After payment");
	var j5  = document.createElement('div');
	j5.style.textAlign = "center";
	j5.style.width = "80%";
	j5.style.height = "300";
	j5.style.margin = "5% 10%";
	j5.style.border = "outset";
	var label = document.createElement('label');
	var price = document.createElement('label');
	var image = document.createElement('img');
	image.setAttribute('src','swim_images/alienware.jpg');
	image.setAttribute('height','75');
	image.setAttribute('width','125');
	j5.appendChild(image);
	label.textContent = "AlienWare R2";
	price.textContent = "Rs 166,991";
	price.style.color = "red";
	FinalPrice1 = FinalPrice1 + 166991;
//	alert("before price1");
	document.getElementById("price1").innerHTML = "Final Price :- ₹" + FinalPrice1;
//	alert("After price1");
	j5.appendChild(label);
	j5.appendChild(price);
	cart.insertBefore(j5,check);
	window.location.assign("#Buy");
	document.getElementById("cartButton").style.display = "none";
}
function proceed()
{
	
	var buy = document.getElementById("Buy");
	var payment = document.getElementById("payment");
	document.getElementById("price").innerHTML = "";
	if(document.getElementById("j5Div"))
		{
			while(a>0)
				{
					var j5 = document.getElementById("j5Div");
					buy.insertBefore(j5,payment);
					a--;
				}	
		}
	if(document.getElementById("j7Div"))
	{
		while(b>0)
			{
				var j7 = document.getElementById("j7Div");
				buy.insertBefore(j7,payment);
				b--;
			}	
	}
	if(document.getElementById("g5Div"))
	{
		while(c>0)
			{
				var g5 = document.getElementById("g5Div");
				buy.insertBefore(g5,payment);
				c--;
			}	
	}
	if(document.getElementById("macDiv"))
	{
		while(d>0)
			{
				var mac = document.getElementById("macDiv");
				buy.insertBefore(mac,payment);
				d--;
			}	
	}
	if(document.getElementById("hpDiv"))
	{
		while(e>0)
			{
				var hp = document.getElementById("hpDiv");
				buy.insertBefore(hp,payment);
				e--;
			}	
	}
	if(document.getElementById("alienDiv"))
	{
		while(f>0)
			{
				var alien = document.getElementById("alienDiv");
				buy.insertBefore(alien,payment);
				f--;
			}	
	}
	FinalPrice1 = FinalPrice1 + FinalPrice;
	document.getElementById("price1").innerHTML = "Final Price :- ₹" + FinalPrice1;
	window.location.assign("#Buy");
}
function clearText()
{
	//Sign Up Clear
	document.getElementById("signEmail").value = "";
	document.getElementById("signPassword").value = "";
	document.getElementById("signConfirm").value = "";
	document.getElementById("signName").value = "";
	document.getElementById("signMobile").value = "";
	document.getElementById("signAddress").value = "";
	document.getElementById("label1").innerHTML = "";
	
	//Login Clear
	document.getElementById("lEmailText").value = "";
	document.getElementById("lPasswordText").value = "";
	document.getElementById("label0").innerHTML = "";
	
	window.location.assign("#logIn");

}


