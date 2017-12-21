$(document).ready(function(){

	    var firstName = sessionStorage.getItem("firstName");
		var userRole = sessionStorage.getItem("userRole");
		var userPic =  sessionStorage.getItem("proPic");
		
		var namePanel = document.getElementById("namePanel");
		namePanel.innerHTML = firstName;
			
		var rolePanel = document.getElementById("rolePanel");
		rolePanel.innerHTML = userRole;
		
		var picPanel = document.getElementById("picPanel");
		picPanel.innerHTML ='<img src="'+userPic+'" class="dker" alt="..."><i class="on md b-light"></i>';
		
		var navBar = document.getElementById("navBar");
		navBar.innerHTML ='<a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="thumb-sm avatar pull-left"><img src="'+userPic+'" class="dker" alt="..."></span> <b>'+firstName+'</b> <b class="caret"></b> </a><ul class="dropdown-menu animated fadeInRight"><li> <a href="profile.jsp">Profile</a> </li> <li>  <a href="#"> <span class="badge bg-danger pull-right">3</span> Notifications </a> </li> <li> <a href="signout.jsp" >Logout</a> </li> </ul> ';
		
		var unreadcount_dash=0;
		
		
		
		
		

		$.ajax({
		  	url: webServerUrl,
		  	data: 'request=getAllMobFiles',
		  	type: 'post',
				success: function(msg){
					
			    caseListJson = msg.trim();
		   		 obj = JSON.parse(caseListJson);
		   		 var arrayLength  = obj.response.fileList.length;
		   		 

		   		 var cur = obj.response.fileList[arrayLength-1];
		   	     for (var i = 0; i<arrayLength; i++) {
	   		       var cur = obj.response.fileList[i];
	   	   

	
	   	 if(cur.status=='New'){       
			
	   		unreadcount_dash++;
	   	    
	   	
	   	 }
			

	   		        
	   		    }
		      

		   	     
		   		
		 		var numberOfCases = document.getElementById("numberOfCases");
		    		numberOfCases.innerHTML = unreadcount_dash+' Unread Crimes';
		   	     
		   	     
		   	 		 		     
		 
		   	     
		         
			}
		
		
		});
		
		
		
		
		
		
		
		
		
		
		
		
	
		

	
	
});