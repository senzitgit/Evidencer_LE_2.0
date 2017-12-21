
 var firstName = sessionStorage.getItem("firstName");
		var userRole = sessionStorage.getItem("userRole");
		var userPic =  sessionStorage.getItem("proPic");
		unreadcount=0;
		newCount =0;
$(document).ready(function(){
	



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
					
			   		unreadcount++;
			   	    
			   	
			   	 }
					
		
			   		        
			   		    }
				      
		
				   	     
				   	     
				   	     
				   	     
				   	     
				   	    var sideBar = document.getElementById("sideBar");
				 		sideBar.innerHTML = sideBar.innerHTML +'<li Style="border-bottom:1px solid #E6E6E6;  margin-top:10px; margin-bottom:10px; "><a href="dashboard.html" > <i class="i i-statistics icon"> </i><span class="font-bold">Dashboard</span></a></li>';
			
				 		sideBar.innerHTML = sideBar.innerHTML +'<li Style="border-bottom:1px solid #E6E6E6; margin-top:10px; margin-bottom:10px;"><a href="initialize_record.html" > <i class="fa fa-video-camera"></i> <span class="font-bold">Record Crime</span> </a> </li>';
				 		
				 		sideBar.innerHTML = sideBar.innerHTML +'<li Style="border-bottom:1px solid #E6E6E6; margin-top:10px; margin-bottom:10px;"><a href="video_on_demand.html" > <i class="fa fa-search"></i> <span class="font-bold">Search Crime</span> </a> </li>';

				 		sideBar.innerHTML = sideBar.innerHTML +'<li Style="border-bottom:1px solid #E6E6E6; margin-top:10px; margin-bottom:10px;"><a href="crime_listing.html" > <i class="fa fa-bars"></i> <span class="font-bold">Crime Listing</span> <b class="badge bg-danger pull-right" >'+unreadcount+' unread</b></a> </li>';

				 	/*	sideBar.innerHTML = sideBar.innerHTML +'<li Style="border-bottom:1px solid #E6E6E6; margin-top:10px; margin-bottom:10px;"><a href="settings.html" > <i class="fa fa-cogs"></i> <span class="font-bold">Manage Settings</span> </a> </li>';*/
				 		
				 		sideBar.innerHTML = sideBar.innerHTML +'<li> <a href="profile.html"> <i class="i i-user3 icon"> </i><span class="font-bold">Profile</span> </a> </li>';
				 		     
				 
				   	     
				         
					}
				
				
				});

				
		   		
		   		
	
});




