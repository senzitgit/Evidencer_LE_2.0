


$(document).ready(function(){
	
	
	
	
	
	$.ajax({
      	url: webServerUrl,
      	data: 'request=getLoc',
      	type: 'post',
			success: function(msg){
			 
				var loginJson = msg.trim();	
				obj = JSON.parse(loginJson);
				var resultCode  = obj.response.resultcode;
				var message  = obj.response.message;
				
			if(resultCode==1) 
			{	
		
				var location  = obj.response.location;	
				document.getElementById("localPath").value=location;
			
			}
		
		}
	
	});
	
	
	
	
	
	
	
	
	
	
	
	var mainUser = sessionStorage.getItem("mainUser");
	sessionStorage.setItem("loguser",mainUser);
	


	$("#path_frm").submit(function(){
		var localPath = 	$('#localPath').val();
		document.getElementById('msgbox_crime').value='';
		
		if(localPath!=''){

		  
		
		
		$("#msgbox_crime").removeClass().css("color", "").addClass('myinfo').text('Validating Input.. ').fadeIn(1000);
		   this.timer = setTimeout(function () {
				
				
				sessionStorage.setItem("localPath",localPath);
			
				
				$.ajax({
		          	url: webServerUrl,
		          	data: 'request=updateLoc&locPath='+localPath,
		          	type: 'post',
		   			success: function(msg){
		   			 
		   				var loginJson = msg.trim();	
		   				obj = JSON.parse(loginJson);
		   				var resultCode  = obj.response.resultcode;
		   				var message  = obj.response.message;
		   				
						if(resultCode==1) 
						{	
					
							
							$("#msgbox_crime").fadeTo(200,0.1,function()
				                	{
					                  
					                  $(this).html('Settings Saved Successfully..').css("color", "green").removeClass().addClass('myerror').fadeTo(900,1);
					                });
							
						
						}
						else
						{
							$("#msgbox_crime").fadeTo(200,0.1,function()
		                	{
			                  
			                  $(this).html(message).css("color", "red").removeClass().addClass('myerror').fadeTo(900,1);
			                });

						}
					}
				
				});
			}, 200);
			return false;
	}
		return false;
		});	
	
	
	
	
	
	
});





