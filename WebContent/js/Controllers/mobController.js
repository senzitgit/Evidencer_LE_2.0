


function callMobFiles() {
	
	user = sessionStorage.getItem("firstName");

		$.ajax({
		  	url: webServerUrl,
		  	data: 'request=getAllMobFiles',
		  	type: 'post',
				success: function(msg){
					
				caseListJson = msg.trim();
		   		 obj = JSON.parse(caseListJson);
		   		 var arrayLength  = obj.response.fileList.length;
		   		// alert(arrayLength);
		   		 
		   		var listCasesBox= document.getElementById('listCasesBox');
		   		var DetailCasesBox= document.getElementById('DetailCasesBox');
				
		   		listCasesBox.innerHTML='';
		  
		   	    var cur = obj.response.fileList[arrayLength-1];
		   	    
	
		   	    for (var i = 0; i<arrayLength; i++) {
	   		        var cur = obj.response.fileList[i];
	   	   	
	
				   	 if(cur.status=='New'){       
						listCasesBox.innerHTML=listCasesBox.innerHTML+'<div onclick="showhide('+i+',0);" class="bio_image"><li class="list-group-item" id="id'+cur.randomCode+'" style="background-color:#D6C18A; white-space: nowrap; overflow: hidden;text-overflow: ellipsis;"><a href="#" class="thumb-sm pull-left m-r-sm"><img src="images/a0.png" class="img-circle"></a><a href="#" class="clear text-ellipsis"><small class="pull-right">'+cur.createdOn+'</small><strong class="block">'+cur.randomCode+'</strong><small>Sender : <b>'+cur.createdBy+'</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description : '+cur.fileDesc+'</small></a></li></div>'; 
				   	 }else {
						listCasesBox.innerHTML=listCasesBox.innerHTML+'<div onclick="showhide('+i+',1);" class="bio_image"><li class="list-group-item" style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;"><a href="#" class="thumb-sm pull-left m-r-sm"><img src="images/a0.png" class="img-circle"></a><a href="#" class="clear text-ellipsis"><small class="pull-right">'+cur.createdOn+'</small><strong class="block">'+cur.randomCode+'</strong><small>Sender : <b>'+cur.createdBy+'</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description : '+cur.fileDesc+'</small></a></li></div>'; 
			 
				   	 } 
			
	   		        
	   		    }
		         
		         
			}
		
		
		});

}



function callUnreadFiles() {
	
	document.getElementById("DetailCasesBox").style.display="none";   
	document.getElementById("introBox").style.display="block"; 
	
	var user = sessionStorage.getItem("firstName");

		$.ajax({
		  	url: webServerUrl,
		  	data: 'request=getAllMobFiles',
		  	type: 'post',
				success: function(msg){
					
				caseListJson = msg.trim();
		   		 obj = JSON.parse(caseListJson);
		   		 var arrayLength  = obj.response.fileList.length;
		   		// alert(arrayLength);
		   		 
		   		var listCasesBox= document.getElementById('listCasesBox');
		   		var DetailCasesBox= document.getElementById('DetailCasesBox');
				
		   		listCasesBox.innerHTML='';
		   	
		   	    var cur = obj.response.fileList[arrayLength-1];
		   	    
		   	    
		   	
		   	   
		   	   
		   	    for (var i = 0; i<arrayLength; i++) {
	   		        var cur = obj.response.fileList[i];
	   	   
	   		    
	
	   	 if(cur.status=='New'){       

	   		 listCasesBox.innerHTML=listCasesBox.innerHTML+'<div onclick="showhide('+i+',0);" class="bio_image"><li class="list-group-item" id="id'+cur.randomCode+'" style="background-color:#D6C18A;white-space: nowrap; overflow: hidden;text-overflow: ellipsis;"><a href="#" class="thumb-sm pull-left m-r-sm"><img src="images/a0.png" class="img-circle"></a><a href="#" class="clear text-ellipsis"><small class="pull-right">'+cur.createdOn+'</small><strong class="block">'+cur.randomCode+'</strong><small>Sender : <b>'+cur.createdBy+'</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description : '+cur.fileDesc+'</small></a></li></div>'; 
			

	   	 }
			
			
	   		        
	   		    }
		  
		         
			}
		
		
		});

}





function callReadFiles() {
	
	document.getElementById("DetailCasesBox").style.display="none";   
	document.getElementById("introBox").style.display="block"; 
	
	var user = sessionStorage.getItem("firstName");

		$.ajax({
		  	url: webServerUrl,
		  	data: 'request=getAllMobFiles',
		  	type: 'post',
				success: function(msg){
		
				 caseListJson = msg.trim();
		   		 obj = JSON.parse(caseListJson);
		   		 var arrayLength  = obj.response.fileList.length;
		   		// alert(arrayLength);
		   		 
		   		var listCasesBox= document.getElementById('listCasesBox');
		   		var DetailCasesBox= document.getElementById('DetailCasesBox');
				
		   		listCasesBox.innerHTML='';
		  
		   	    var cur = obj.response.fileList[arrayLength-1];
		   	    
		  
		   	   
		   	   
		   	    for (var i = 0; i<arrayLength; i++) {
	   		        var cur = obj.response.fileList[i];
	   	   
	   		        
	
	
	   	 if(cur.status=='Read'){       
			listCasesBox.innerHTML=listCasesBox.innerHTML+'<div onclick="showhide('+i+',1);" class="bio_image"><li class="list-group-item" id="id'+cur.randomCode+'"  style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" ><a href="#" class="thumb-sm pull-left m-r-sm"><img src="images/a0.png" class="img-circle"></a><a href="#" class="clear text-ellipsis"><small class="pull-right">'+cur.createdOn+'</small><strong class="block">'+cur.randomCode+'</strong><small>Sender : <b>'+cur.createdBy+'</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description : '+cur.fileDesc+'</small></a></li></div>'; 
			
	   	 }
			
			

	   		        
	   		    }
		         
		         
			}
		
		
		});

}




function showhide(id,status){
	
	document.getElementById("DetailCasesBox").style.display="block";   
	document.getElementById("introBox").style.display="none"; 
	
	

	obj = JSON.parse(caseListJson);
	
	var cur = obj.response.fileList[id];
	var files = obj.response.fileList[id].fileLink;
	
	var headingPanel= document.getElementById('headingPanel');
	var detailPanel= document.getElementById('detailPanel');
	var timePanel= document.getElementById('timePanel');
	var descPanel= document.getElementById('descPanel');
	var filePanel= document.getElementById('filePanel');
	var mapPanel= document.getElementById('mapPanel');
	var userPanel= document.getElementById('userPanel');
	
	var Lat=cur.latitude;
	var Lon=cur.longitude;
	
	headingPanel.innerHTML= cur.randomCode+' : '+cur.fileDetail;
	detailPanel.innerHTML='&nbsp;&nbsp;<b>'+cur.createdBy+'</b>';
	timePanel.innerHTML=' Received at '+cur.createdOn+' &nbsp;&nbsp;<br><br>';
	descPanel.innerHTML=cur.fileDesc;
	filePanel.innerHTML='';
	mapPanel.innerHTML='<iframe style="margin-left:10px;" width="90%" height="350" frameborder="0" style="border:0" src="https://maps.google.com/maps?q='+Lat+','+Lon+'&hl=es;z=14&amp;output=embed"></iframe>';
	userPanel.innerHTML='Mr. '+user;
	
	
	 var arrayLength  = obj.response.fileList[id].fileLink.length;
	
    
     
     
      if(cur.fileType=='image'){
	   
		for (var i = 0; i<arrayLength; i++) {
	        var fur = obj.response.fileList[id].fileLink[i];
			filePanel.innerHTML= filePanel.innerHTML+'<img src="'+fur+'" width="100%"><br><br>';
	     }
      }
      
      else if(cur.fileType=='video'){
   	   
  		for (var i = 0; i<arrayLength; i++) {
  	        var fur = obj.response.fileList[id].fileLink[i];
  	      filePanel.innerHTML= filePanel.innerHTML+'<video width="400" controls><source src="'+fur+'" type="video/mp4"></video><br><br>';
  	     }
        }
      
      else{
   	   
  		for (var i = 0; i<arrayLength; i++) {
  	        var fur = obj.response.fileList[id].fileLink[i];
    	      filePanel.innerHTML= filePanel.innerHTML+'<audio width="400" controls><source src="'+fur+'" type="audio/mp3"></audio><br><br>';
  	     }
        }

	
	
	

	var divID = '#' + 'id'+cur.randomCode;

	$(divID).css('background-color', '');

	
	

  if(status==0){
	 
	 $.ajax({
	      	url: webServerUrl,
	      	data: 'request=setFileStatus&randomCode='+cur.randomCode+'&status=Read',
	      	type: 'post',
				success: function(msg){
					
				
			var ServerResp = msg.trim();
				
	   		 obj = JSON.parse(ServerResp);
	   		 var resultCode  = obj.response.resultcode;
	   		 var message  = obj.response.message;
	   		 
				}
		
		});
	 
	 
	 
	 
	 
	 
	 
	 
 }
 
}

