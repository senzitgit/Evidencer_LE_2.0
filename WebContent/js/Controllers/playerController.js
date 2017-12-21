
var video1 ='';


		function getSittings(index){
			
			var advancedSearch = sessionStorage.getItem("advancedSearch");
			 obj = JSON.parse(advancedSearch);
			 var cur = obj.response.AdvancedResult.CaseList[index];
	   		
			
			
			var caseNoSimple = cur.caseNo;
			sessionStorage.setItem("caseNoSimple", caseNoSimple);
			
			$.ajax({
		      	url: webServerUrl,
		      	data: 'request=simpleSearch&caseNo='+caseNoSimple,
		      	type: 'post',
					success: function(msg){
						
					
				var ServerResp = msg.trim();
					
		   		 obj = JSON.parse(ServerResp);
		   		 var resultCode  = obj.response.resultcode;
		   		 var message  = obj.response.message;
		   		 

		   		if(resultCode== 1)
					{	
		   			   var arrayLength  = obj.response.SittingList.length;
		   			   var caseProgress = document.getElementById("caseProgress");
		   			   caseProgress.innerHTML ='<i>Search Details for </i><b>'+caseNoSimple+'</b><br><br>';
		   			   var dynamicFileld = document.getElementById("dynamicFileld");
		   			   var searchHeader = document.getElementById("searchHeader");
		   			   searchHeader.innerHTML = '<a href="#" class="font-bold">Search Cases</a><span class="label bg-danger pull-right m-t-xs" Style="background-color: #a00a0a;"><a href="video_on_demand.html"><b> <div class="fa fa-search"></div>&nbsp;&nbsp;Search Again </b></a></span>';
		   			   dynamicFileld.innerHTML = '';
		   			   if(arrayLength>0) {
				   		
					   	 for (var i = 0; i < arrayLength; i++) {
				   		       var cur = obj.response.SittingList[i];
				   		       console.log(cur);
				   		       dynamicFileld.innerHTML=  dynamicFileld.innerHTML +'<p><a href="#" onclick="getSessions('+cur+')" class="btn btn-default btn-block"><i class="fa fa-bars pull-left"></i> &nbsp;&nbsp;Sitting '+cur+' </a></p>';    
				   		    
				   		    }
				}else {
				}
		   			   
		   			   
					}
			
					else
					{
						 var dynamicFileld = document.getElementById("dynamicFileld");
			   		     dynamicFileld.innerHTML= '<center><br><br><br><div style="font-size:30px;color:#c6aa5d" class="fa fa-warning"></div><br><P style="color:#c6aa5d">'+message+' Try Again!!!</P><br><br><br><center>';    

					}
				}
			
			});
			
			
		}





		function popAttachment(index){
    	
    	     
    	     var ServerResp = sessionStorage.getItem("loadAttachment");
    	     obj = JSON.parse(ServerResp);
	   		 var cur = obj.response.AttachmentList[index];
	   		 
    	
    	
    	 $.fancybox([
    	             {href:cur.fileLink},
    	             
    	             ],{
    	             //			href: this.href,
    	             			helpers: {
    	             				overlay: {
    	             				opacity: 0.3
    	             				} // overlay
    	             				//, buttons: {}
    	             			} // helpers
    	             		}); // fancybox
    	
    	
    }

    function getSessions(sittingNumber){
		
    
		var sittingNumberSimple = sittingNumber;
		sessionStorage.setItem("sittingNumberSimple", sittingNumberSimple);
		var caseNo = sessionStorage.getItem("caseNoSimple");
		
		$.ajax({
	      	url: webServerUrl,
	      	data: 'request=sessionSearch&sittingNo='+sittingNumberSimple+'&caseNo='+caseNo,
	      	type: 'post',
				success: function(msg){
					
				
			var ServerResp = msg.trim();
				
	   		 obj = JSON.parse(ServerResp);
	   		 var resultCode  = obj.response.resultcode;
	   		 var message  = obj.response.message;
	   		 

	   		if(resultCode== 1)
				{	
	   			   
	   			   var caseProgress = document.getElementById("caseProgress");
	   			   caseProgress.innerHTML ='<i>Search Details for </i><b>'+caseNo+' >> Sitting '+sittingNumberSimple+' </b><br><br>';
	   			   var arrayLength  = obj.response.SessionList.length;
	   			   var dynamicFileld = document.getElementById("dynamicFileld");
	   			   var searchHeader = document.getElementById("searchHeader");
	   			   searchHeader.innerHTML = '<a href="#" class="font-bold">Search Cases</a><span class="label bg-danger pull-right m-t-xs" Style="background-color: #a00a0a;"><a href="video_on_demand.html"><b> <div class="fa fa-search"></div>&nbsp;&nbsp;Search Again </b></a></span>';
	   			   dynamicFileld.innerHTML = '';
	   			   if(arrayLength>0) {
			   		
				   	 for (var i = 0; i < arrayLength; i++) {
			   		       var cur = obj.response.SessionList[i];
			   		       console.log(cur);
			   		       dynamicFileld.innerHTML=  dynamicFileld.innerHTML +'<p><a href="#" onclick="getPlayerInfo('+cur+')" class="btn btn-default btn-block"><i class="fa fa-bars pull-left"></i> &nbsp;&nbsp;Session '+cur+' </a></p>';    
			   		    
			   		    }
			}else {
			}
	   			   
	   			   
				}
		
				else
				{
					 var dynamicFileld = document.getElementById("dynamicFileld");
		   		       dynamicFileld.innerHTML= '<center><br><br><br><div style="font-size:30px;color:#c6aa5d" class="fa fa-warning"></div><br><P style="color:#c6aa5d">'+message+' Try Again!!!</P><br><br><br><center>';    

				}
			}
		
		});
		
		return false;
		
   }	
	




    function getPlayerInfo(sessionNumber){
		
		var sessionNumberSimple = sessionNumber;
		sessionStorage.setItem("sessionNumberSimple", sessionNumberSimple);
		var caseNo = sessionStorage.getItem("caseNoSimple");
		var sittingNo = sessionStorage.getItem("sittingNumberSimple");
		
		$.ajax({
	      	url: webServerUrl,
	      	data: 'request=getPlayerInfo&sittingNo='+sittingNo+'&caseNo='+caseNo+'&sessionNo='+sessionNumberSimple,
	      	type: 'post',
				success: function(msg){
					
				
			var ServerResp = msg.trim();
				
	   		 obj = JSON.parse(ServerResp);
	   		 var resultCode  = obj.response.resultcode;
	   		 var message  = obj.response.message;
	   		 

	   		if(resultCode== 1)
				{
	   			
	   			var caseNo = sessionStorage.getItem("caseNoSimple");
				var sittingNo = sessionStorage.getItem("sittingNumberSimple");
				var sessionNo = sessionNumberSimple;
	   			var caseTitle = obj.response.PlayerInfoResult.caseDetails.caseTitle;
	   			var caseDesc = obj.response.PlayerInfoResult.caseDetails.caseDesc;
	   			var attachmentFlag = obj.response.PlayerInfoResult.caseDetails.attachmentFlag;
	   			var privateNoteFlag = obj.response.PlayerInfoResult.caseDetails.privateNoteFlag;
	   			var eventDate = obj.response.PlayerInfoResult.caseDetails.eventDate;
	   			caseEventId = obj.response.PlayerInfoResult.caseDetails.caseEventId;
	   			

	   		
	   			
	   			
	   			
	   			
	   			
	   			
	   			
	   			logNotes = obj.response.PlayerInfoResult.caseDetails.logNotes;
	   			
	   			sessionStorage.setItem("logNotes", logNotes);
	   			
	   			sessionStorage.setItem("pcaseNo", caseNo);
	   			sessionStorage.setItem("pcaseTitle", caseTitle);
	   			sessionStorage.setItem("pcaseDesc", caseDesc);
	   			sessionStorage.setItem("psittingNo", sittingNo);
	   			sessionStorage.setItem("psessionNo", sessionNo);
	   			
	   			logs = JSON.parse(logNotes);
	   			var loadLogs = document.getElementById("loadLogs");	
	   		    var arrayLength  = logs.length;
   			    if(arrayLength>0) {
		   		
			   	 for (var i = 0; i < arrayLength; i++) {
		   		       var cur = logs[i];
		   		
		   		       var divId = 's'+cur.duration;
		   		       finalDuration= cur.duration;
		   		       loadLogs.innerHTML=  loadLogs.innerHTML + '<section id="'+divId+'" class="content" onclick="seekFeeds('+cur.duration+')"><div class="list-group-item text-ellipsis"><span class="badge bg-success" Style="float:left;background-color:rgb(198, 170, 93);">'+cur.speaker+'</span> &nbsp;&nbsp;<i>said</i><b>&nbsp;&nbsp; '+cur.notes+'</b><br><i>on</i>&nbsp;&nbsp; '+cur.timestamp+'</section>';
	   		    
		   		    } 
	   			
	   		  }
	   			
   		 
	   			
   		       console.log(finalDuration);
   		       console.log(caseEventId);
   		       
	   			var CAM1  = obj.response.PlayerInfoResult.avLinks.videoFeed1;
		   		var CAM2  = obj.response.PlayerInfoResult.avLinks.videoFeed2;
		   		 		
		   		var AUD1  = obj.response.PlayerInfoResult.avLinks.audioFeed1;
		   		var AUD2  = obj.response.PlayerInfoResult.avLinks.audioFeed2;
		   			
		  
		   		
		   		var feed1 = document.getElementById("feed1");
		   		var feed2 = document.getElementById("feed2");
		   		
		   
		   		feed1.innerHTML = '<video  id="video1" width="98%" Style="max-height:200px"><source src="'+CAM1+'" type="video/mp4">Your browser does not support HTML5 video.</video><audio id="audio1" src="'+AUD1+'" ></audio>';


		   		feed2.innerHTML = '<video  id="video2" width="98%" Style="max-height:200px"><source src="'+CAM2+'" type="video/mp4">Your browser does not support HTML5 video.</video><audio id="audio2" src="'+AUD2+'" ></audio>';
		   				
    			var searchHeader = document.getElementById("searchHeader");
	   			searchHeader.innerHTML = '<a href="#" class="font-bold"><div class="fa fa-legal"></div>&nbsp;&nbsp;Case Details</a><span class="label bg-danger pull-right m-t-xs" Style="background-color: #a00a0a;"><a href="video_on_demand.html"><b> <div class="fa fa-search"></div>&nbsp;&nbsp;Search Again </b></a></span>';
	   			document.getElementById("simpleSForm").style.display="none"; 
	   			document.getElementById("caseProgress").style.display="none"; 
	   			document.getElementById("playerControllers").style.display="block"; 
	   			var dynamicFileld = document.getElementById("dynamicFileld");
	   			dynamicFileld.innerHTML = '<div style="margin-left:15px;margin-right:15px;"><h5>'+caseNo+' - '+caseTitle+'</h5> <div class="r b bg-warning-ltest wrapper m-b"> '+caseDesc+' </div><div class="list-group" style="font-size:10px;"><div class="list-group-item text-ellipsis"> <span class="badge bg-warning">'+eventDate+' </span>Event Date</div><div  class="list-group-item text-ellipsis"> <span class="badge bg-success">'+sittingNo+' </span> Sitting Number</div><div  class="list-group-item text-ellipsis"> <span class="badge bg-success">'+sessionNo+' </span> Session Number</div></div></div>'; 
				document.getElementById("caseDetailsPanel").style.display="block"; 

				var playpausebtn = document.getElementById("playpausebtn");
				playpausebtn.innerHTML ='<div class="fa fa-pause"  style="font-size:25px;"></div>';
				
	   			
	   			if(attachmentFlag==true){
	   				
	   				$.ajax({
	   			      	url: webServerUrl,
	   			      	data: 'request=getAttachment&caseEventId='+caseEventId,
	   			      	type: 'post',
	   						success: function(msg){
	   							
	   						
	   					var ServerResp = msg.trim();
	   						
	   					obj = JSON.parse(ServerResp);
	   			   		 var resultCode  = obj.response.resultcode;
	   			   		 var message  = obj.response.message;
	   			   		 
		   			   	sessionStorage.setItem("loadAttachment", ServerResp);
		   				
	   			   		 

	   			   		if(resultCode== 1)
	   						{	
	   			   			
	   			   		        var loadAttachment = document.getElementById("loadAttachment");	
	   			   		        
	   			   		        var arrayLength  = obj.response.AttachmentList.length;
	   			   			     if(arrayLength>0) {
	   					   		
	   						   	 for (var i = 0; i < arrayLength; i++) {
	   					   		       var cur = obj.response.AttachmentList[i];
	   					   		     
	   					   		       loadAttachment.innerHTML = loadAttachment.innerHTML +'<div class="list-group-item text-ellipsis"> <span class="badge bg-success"><a href="#" onclick="popAttachment('+i+')"><div class="fa fa-eye"></div></a></span><span class="badge bg-success"><a href="'+cur.fileLink+'" download><div class="fa fa-download"></div></a></span>'+cur.attachmentName+'</div>';
		   			   			  
		   			   		       		   					   		    
	   					   		    }
	   					}else {
	   					}
	   			   			 
	   			   			   
	   						}
	   				
	   						else
	   						{
	   					

	   						}
	   					}
	   				
	   				});
	   			}else {
	   				
	   			// var loadAttachment = document.getElementById("loadAttachment");		
	   			 //loadAttachment.innerHTML ='<center><br><i>No Attachments Are Found In This Session!!</i></center>';
	   			}
	   			
	   			if(privateNoteFlag==true){
	   				
	   				$.ajax({
	   			      	url: webServerUrl,
	   			      	data: 'request=getPrivateNote&caseEventId='+caseEventId,
	   			      	type: 'post',
	   						success: function(msg){
	   							
	   						
	   					 var ServerResp = msg.trim();
	   						
	   			   		 obj = JSON.parse(ServerResp);
	   			   		 var resultCode  = obj.response.resultcode;
	   			   		 var message  = obj.response.message;
	   			   		 

	   			   		if(resultCode== 1)
	   						{	
	   			   			   
			   			   		var loadPrivate = document.getElementById("loadPrivate");	
					   		    var arrayLength  = obj.response.PrivateNoteList.length;
				   			    if(arrayLength>0) {
						   		
							   	 for (var i = 0; i < arrayLength; i++) {
							   		 var cur = obj.response.PrivateNoteList[i];
						   		
						   		    loadPrivate.innerHTML=  loadPrivate.innerHTML + '<section id="" class="" onclick=""><div class="list-group-item text-ellipsis"><span class="badge bg-success" Style="float:left;background-color:rgb(198, 170, 93);">'+cur.userName+'</span> &nbsp;&nbsp;<i>said</i><b>&nbsp;&nbsp; '+cur.privateNote+'</b><br><i>on</i>&nbsp;&nbsp; '+cur.createdOn+'</section>';
					   		    
						   		    } 
					   			
					   		  }
	   			   			   
	   						}
	   				
	   						else
	   						{
	   							

	   						}
	   					}
	   				
	   				});
	   				
	   			}else {
	   				 var loadPrivate = document.getElementById("loadPrivate");		
	   				loadPrivate.innerHTML ='<center><br><i>No Private Notes Are Found In This Session!!</i></center>';
	   			}
	   			
	   			
		
	   			
	   			intializePlayer();
	   			doTimer();
				}
		
				else
				{
					 var dynamicFileld = document.getElementById("dynamicFileld");
  		   		         dynamicFileld.innerHTML= '<center><br><br><br><div style="font-size:30px;color:#c6aa5d" class="fa fa-warning"></div><br><P style="color:#c6aa5d">'+message+' Try Again!!!</P><br><br><br><center>'+dynamicFileld.innerHTML;    


				}
			}
		
		});
		
		return false;
		
   }
		 


$(document).ready(function(){
	
	
	$.ajax({
      	url: webServerUrl,
      	data: 'request=getCaseTypes',
      	type: 'post',
			success: function(msg){
				
			
		var ServerResp = msg.trim();
			
   		 obj = JSON.parse(ServerResp);
   		 var resultCode  = obj.response.resultcode;
   		 var message  = obj.response.message;
   		 

   		if(resultCode== 1)
			{	
   			   var arrayLength  = obj.response.caseTypeList.length;
   	   		   var caseType = document.getElementById("caseType");
   			   if(arrayLength>0) {
		   		
			   	 for (var i = 0; i < arrayLength; i++) {
		   		       var cur = obj.response.caseTypeList[i];
		   		       caseType.innerHTML=  caseType.innerHTML +'<option value="'+cur.caseType+'">'+cur.caseType+'</option>';    
		   		    
		   		    }
		}else {
		}
   			   
   			   
			}
	
			else
			{
				 var dynamicFileld = document.getElementById("dynamicFileld");
	   		       dynamicFileld.innerHTML= '<center><br><br><br><div style="font-size:30px;color:#c6aa5d" class="fa fa-warning"></div><br><P style="color:#c6aa5d">'+message+' Try Again!!!</P><br><br><br><center>';    


			}
		}
	
	});
	
   
	$("#simple_frm").submit(function(){
		
		var caseNoSimple = $("#caseNoSimple").val();
		sessionStorage.setItem("caseNoSimple", caseNoSimple);
		
		
		var form = $(this);
	    form.parsley().validate();
		if (form.parsley().isValid()){
		
		$.ajax({
	      	url: webServerUrl,
	      	data: 'request=simpleSearch&caseNo='+caseNoSimple,
	      	type: 'post',
				success: function(msg){
					
				
			var ServerResp = msg.trim();
				
	   		 obj = JSON.parse(ServerResp);
	   		 var resultCode  = obj.response.resultcode;
	   		 var message  = obj.response.message;
	   		 

	   		if(resultCode== 1)
				{	
	   			   var arrayLength  = obj.response.SittingList.length;
	   			   var caseProgress = document.getElementById("caseProgress");
	   			   caseProgress.innerHTML ='<i>Search Details for </i><b>'+caseNoSimple+'</b><br><br>';
	   			   var dynamicFileld = document.getElementById("dynamicFileld");
	   			   var searchHeader = document.getElementById("searchHeader");
	   			   searchHeader.innerHTML = '<a href="#" class="font-bold">Search Cases</a><span class="label bg-danger pull-right m-t-xs" Style="background-color: #a00a0a;"><a href="video_on_demand.html"><b> <div class="fa fa-search"></div>&nbsp;&nbsp;Search Again </b></a></span>';
	   			   dynamicFileld.innerHTML = '';
	   			   if(arrayLength>0) {
			   		
				   	 for (var i = 0; i < arrayLength; i++) {
			   		       var cur = obj.response.SittingList[i];
			   		       console.log(cur);
			   		       dynamicFileld.innerHTML=  dynamicFileld.innerHTML +'<p><a href="#" onclick="getSessions('+cur+')" class="btn btn-default btn-block"><i class="fa fa-bars pull-left"></i> &nbsp;&nbsp;Sitting '+cur+' </a></p>';    
			   		    
			   		    }
			}else {
			}
	   			   
	   			   
				}
		
				else
				{
					 var dynamicFileld = document.getElementById("dynamicFileld");
		   		       dynamicFileld.innerHTML= '<center><br><br><br><div style="font-size:30px;color:#c6aa5d" class="fa fa-warning"></div><br><P style="color:#c6aa5d">'+message+' Try Again!!!</P><br><br><br><center>';    


				}
			}
		
		});
		}
		
		return false;
		
	});	
	
	
	
	$("#adv_frm").submit(function(){
		
		var caseNo = $("#caseNo").val();
		var caseTitle = $("#caseTitle").val();
		var caseDate = $("#caseDate").val();
		var caseType = $("#caseType").val();
		
		sessionStorage.setItem("caseNoSimple", caseNo);
		
		
		var form = $(this);
	    form.parsley().validate();
		if (form.parsley().isValid()){
		
		$.ajax({
	      	url: webServerUrl,
	      	data: 'request=advancedSearch&caseNo='+caseNo+'&caseTitle='+caseTitle+'&caseDate='+caseDate+'&caseType='+caseType,
	      	type: 'post',
				success: function(msg){
			
					
			
				
			  var ServerResp = msg.trim();
			  sessionStorage.setItem("advancedSearch", ServerResp);
	   		 obj = JSON.parse(ServerResp);
	   		 var resultCode  = obj.response.resultcode;
	   		 var message  = obj.response.message;
	   		 

	   		if(resultCode== 1)
				{	
	   			   var arrayLength  = obj.response.AdvancedResult.CaseList.length;
	   			   var SittingListarrayLength  = obj.response.AdvancedResult.SittingList.length;
	   			   var caseProgress = document.getElementById("caseProgress");
	   			   caseProgress.innerHTML ='<i>Search Results</i><br><br>';
	   			   var dynamicFileld = document.getElementById("dynamicFileld");
	   			   var searchHeader = document.getElementById("searchHeader");
	   			   searchHeader.innerHTML = '<a href="#" class="font-bold">Search Cases</a><span class="label bg-danger pull-right m-t-xs" Style="background-color: #a00a0a;"><a href="video_on_demand.html"><b> <div class="fa fa-search"></div>&nbsp;&nbsp;Search Again </b></a></span>';
	   			   dynamicFileld.innerHTML = '';
	   			   if(arrayLength>0) {
			   		
				   	 for (var i = 0; i < arrayLength; i++) {
			   		       var cur = obj.response.AdvancedResult.CaseList[i];
			
			   		       dynamicFileld.innerHTML=  dynamicFileld.innerHTML +'<b><a href="#" onclick="getSittings('+i+')">'+cur.caseNo+' - '+cur.caseTitle+'</b><br><i>'+cur.caseDescription+'</i><br><br><br>';    
			   		    
			   		    }
			}else if(SittingListarrayLength>0) {
				
				  var caseProgress = document.getElementById("caseProgress");
	   			   caseProgress.innerHTML ='<i>Search Results For </i><b>'+caseNo+'</b><br><br>';
				
				 for (var i = 0; i < SittingListarrayLength; i++) {
		   		       var cur = obj.response.AdvancedResult.SittingList[i];
		   		       console.log(cur);
		   		       dynamicFileld.innerHTML=  dynamicFileld.innerHTML +'<p><a href="#" onclick="getSessions('+cur+')" class="btn btn-default btn-block"><i class="fa fa-bars pull-left"></i> &nbsp;&nbsp;Sitting '+cur+' </a></p>';    
		   		    
		   		    }
				
				
				
				
				
				
				
			}
	   			    
	   			   
				}
		
				else
				{
					var dynamicFileld = document.getElementById("dynamicFileld");
		   		       dynamicFileld.innerHTML= '<center><br><br><br><div style="font-size:30px;color:#c6aa5d" class="fa fa-warning"></div><br><P style="color:#c6aa5d">'+message+' Try Again!!!</P><br><br><br><center>';    

				}
			}
		
		});
		
		return false;
		
		
		}
		
		
	});	
	
	
	
	$("#login_frm").submit(function(){
		
		var login_id = $("#login_id").val();
		var password = $("#password").val();
		
		var form = $(this);
	    form.parsley().validate();
		if (form.parsley().isValid()){

		 $("#msgbox").removeClass().addClass('myinfo').text('Validating Your Login ').fadeIn(1000);

		
		this.timer = setTimeout(function () {
			
			$.ajax({
	          	url: webServerUrl,
	          	data: 'request=privateNoteAuth&un='+ $('#login_id').val() +'&pw=' + $('#password').val(),
	          	type: 'post',
	   			success: function(msg){
	   			 
	   				var loginJson = msg.trim();	
	   			 obj = JSON.parse(loginJson);
		   		 var resultCode  = obj.response.resultcode;
		   		 var message  = obj.response.message;
	   				
					if(resultCode==1) 
					{	
	   			
	   			
						$("#msgbox").html('Login Verified, Logging in.....').addClass('myinfo').fadeTo(900,1,
		                  function()
		                  {
							document.getElementById("login_box").style.display="none"; 
							document.getElementById("note_box").style.display="block"; 
							
							
		                  });

					}
					else
					{
						$("#msgbox").fadeTo(200,0.1,function() //start fading the messagebox
	                	{
		                  //add message and change the class of the box and start fading
		                  $(this).html(message).removeClass().addClass('myerror').fadeTo(900,1);
		                });

					}
				}
			
			});
		}, 200);
	
		
		}
		return false;
	});	
	
	
	
	
});
