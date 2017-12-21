var selectedCrimeNumber = "";


$(document).ready(function(){
	
	
	var caseNoFirst = document.getElementById('caseNoFirst');

	 caseNoFirst.onkeyup = function(){
	     this.value = this.value.toUpperCase();
	 }
	
	 
	 
	 
	 $('#caseNumberForLink').keyup(function() {

	        var emptyRaiseValue = false;
	        $('#caseNumberForLink').each(function() {
	            if ($(this).val().length == 0) {
	            	emptyRaiseValue = true;
	            }
	        });

	        if (emptyRaiseValue) {
	            $('#crimeRegLinkButton').attr('disabled', 'disabled');
	        } else {
	            $('#crimeRegLinkButton').attr('disabled', false);
	        }
	    });
	 
	 
	 
	 
	 
	 
/*	 
	 
	 
	 
	 
	 
	 $('#caseNumberForLink').bind('input',function(){ 
			document.getElementById("crimeRegLinkButton").disabled = false;
	});*/
	 
	 
	 
	 var crimeNoFirst = document.getElementById('crimeNoFirst');

	 crimeNoFirst.onkeyup = function(){
	     this.value = this.value.toUpperCase();
	 }
	
	
	
	 
	
	
	var mainUser = sessionStorage.getItem("mainUser");
	sessionStorage.setItem("loguser",mainUser);
	
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
				alert("Error");

			}
		}
	
	});
	
	
	
	
	
	
	
	$("#continueSitting").click(function(){
		
		sessionNo = sessionNo + 1;
		
		document.getElementById('sittingNo').value = sittingNo;
		document.getElementById('sessionNo').value = sessionNo;
		
	
	});
	
	$("#newSitting").click(function(){
		
		sessionNo = 1;
		sittingNo = sittingNo + 1;
		
		document.getElementById('sittingNo').value = sittingNo;
		document.getElementById('sessionNo').value = sessionNo;
		
	});
	
	
	$("#myform").submit(function(e){

		var caseNo = $("#caseNo").val();
		var caseTitle = $("#caseTitle").val();
		var caseDesc = $("#caseDesc").val();
		var sittingNo = $("#sittingNo").val();
		var sessionNo = $("#sessionNo").val();
		var confidential = $("#confidential").val();
		var caseType = $("#caseType").val();
		var initiatingSite = $("#initiatingSite").val();
		var caseLocation = $("#caseLocation").val();
		
		sessionStorage.setItem("caseNo", caseNo);
		sessionStorage.setItem("caseTitle", caseTitle);
		sessionStorage.setItem("sittingNo", sittingNo);
		sessionStorage.setItem("sessionNo", sessionNo);
		
		
		
		sessionStorage["judges"] = "";
		sessionStorage["lawyers"] = "";
		sessionStorage["participants"] = "";
		sessionStorage["others"] = "";
		
		
		
		
		
		
		var judges = new Array();
		$("input[name=judges]").each(function() {
			
			if($(this).val() !=""){
			judges.push($(this).val());
		}
		 });
		
		var lawyers = new Array();
		$("input[name=lawyers]").each(function() {
			if($(this).val() !=""){
			lawyers.push($(this).val());
			}
		 });
		
		var participants = new Array();
		$("input[name=participants]").each(function() {
			if($(this).val() !=""){
			participants.push($(this).val());
			}
		 });
		
		var others = new Array();
		$("input[name=others]").each(function() {
			if($(this).val() !=""){
			others.push($(this).val());
			}
		 });
		
	 
		sessionStorage["judges"] = JSON.stringify(judges);
		sessionStorage["lawyers"] = JSON.stringify(lawyers);
		sessionStorage["participants"] = JSON.stringify(participants);
		sessionStorage["others"] = JSON.stringify(others);
       
		var form = $(this);
	    form.parsley().validate();
		if (form.parsley().isValid()){	
		

		$.ajax({
	          	url: webServerUrl,
	          	data: 'request=newCase&caseNo='+caseNo+'&caseTitle='+caseTitle+'&caseDesc='+caseDesc+'&sittingNo='+sittingNo+'&sessionNo='+sessionNo+'&confidential='+confidential+'&caseType='+caseType+'&judges='+judges+'&lawyers='+lawyers+'&participants='+participants+'&others='+others,
	          	type: 'post',
	   			success: function(msg){
	   				
	   			 var loginJson = msg.trim();
					
		   		 obj = JSON.parse(loginJson);
		   		 var resultCode  = obj.response.resultcode;
		   		 var message  = obj.response.message;
		   		 

		   		if(resultCode== 1)
					{			
						
					console.log(msg);
					var caseEventId  = obj.response.NewCaseEventResult.caseEventId;
					sessionStorage.setItem("caseEventId", caseEventId);
					
					
				
					
					
					
					
	
			   		
					window.location="evi_recorder.html";
					
					}
					else
					{
						

					}
				}
			
			});

		
	    return false;
		} 
		

		
		return false;
	});

	
	
	
	$('#case_frm').on('submit',function(){
			
			var caseNoFirst = $("#caseNoFirst").val();
			
			
			var form = $(this);
		    form.parsley().validate();
			if (form.parsley().isValid()){	
			
			$.ajax({
		      	url: webServerUrl,
		      	data: 'request=checkCase&caseNo='+caseNoFirst,
		      	type: 'post',
					success: function(msg){
						
					
				var ServerResp = msg.trim();
					
		   		 obj = JSON.parse(ServerResp);
		   		 var resultCode  = obj.response.resultcode;
		   		 var message  = obj.response.message;
		   		 

		   		if(resultCode== 1)
					{			
					
		   			document.getElementById("checkForm").style.display="none";
		   			document.getElementById("startForm").style.display="block"; 
		   			
		   			
					console.log(ServerResp);
					
					if(message=='New Case'){
						
					/*
						document.getElementById('caseNo').value = caseNoFirst;
						document.getElementById('sittingNo').value = 1;
						document.getElementById('sessionNo').value = 1;
						document.getElementById('defaultLocation').value = "India";
						
						//document.getElementById('caseNo').readOnly = true;	
						document.getElementById('sittingNo').readOnly = true;	
						document.getElementById('sessionNo').readOnly = true;	
						document.getElementById('defaultLocation').readOnly = true;	
				*/		
						
						
						$('#redirectModal').modal('show');
						
						
					}else if(message=='Existing Case') {
						
						
						sittingNo = obj.response.CaseCheckResult.sittingNo;
						sessionNo = obj.response.CaseCheckResult.sessionNo;
						var caseDesc = obj.response.CaseCheckResult.caseDescription;
						var caseTitle =obj.response.CaseCheckResult.caseTitle;
						var caseType =obj.response.CaseCheckResult.caseType;
						
						var ExistCaseType = document.getElementById("ExistCaseType");
						ExistCaseType.innerHTML= '<input type="text" class="form-control"  data-required="true" value="'+caseType+'" name="caseType" id="caseType" readonly>';
						
						document.getElementById('caseNo').value = caseNoFirst;
						document.getElementById('sittingNo').value = sittingNo;
						document.getElementById('sessionNo').value = sessionNo;
						document.getElementById('defaultLocation').value = "India";
						document.getElementById('caseTitle').value = caseTitle;
						document.getElementById('caseDesc').value = caseDesc;
						
						//document.getElementById('caseNo').readOnly = true;	
						document.getElementById('sittingNo').readOnly = true;	
						document.getElementById('sessionNo').readOnly = true;	
						document.getElementById('defaultLocation').readOnly = true;
						document.getElementById('caseTitle').readOnly = true;
						document.getElementById('caseDesc').readOnly = true;
						
							
						$('#confirmModal').modal('show');
						
					}
					
					
					
					}
					else
					{
						$("#msgbox").fadeTo(200,0.1,function() //start fading the messagebox
			                	{
				                  //add message and change the class of the box and start fading
				                  $(this).html(message).removeClass().css("color", "red").addClass('myerror').fadeTo(900,1);
				                });

					}
				}
			
			});
			
			}
	
		 });

	

	$("#crime_frm").submit(function(){
		var crimeNoFirst = 	$('#crimeNoFirst').val();
		
		selectedCrimeNumber = crimeNoFirst;
		document.getElementById('msgbox_crime').value='';
		
		var form = $(this);
	    form.parsley().validate();
		if (form.parsley().isValid()){

		  
		
		
		$("#msgbox_crime").removeClass().css("color", "").addClass('myinfo').text('Validating Crime Number.. ').fadeIn(1000);
		   this.timer = setTimeout(function () {
				
				
				sessionStorage.setItem("crimeNoFirst",crimeNoFirst);
			
				
				$.ajax({
		          	url: webServerUrl,
		          	data: 'request=getMobFile&randomCode='+crimeNoFirst,
		          	type: 'post',
		   			success: function(msg){
		   			 
		   				var loginJson = msg.trim();	
		   				obj = JSON.parse(loginJson);
		   				var resultCode  = obj.response.resultcode;
		   				var message  = obj.response.message;
		   				
						if(resultCode==1) 
						{	
					
							var msgbox_crime= document.getElementById('msgbox_crime');
							msgbox_crime.innerHTML='';
							
							document.getElementById("DetailCasesBox").style.display="block";  
							document.getElementById("crimeDetailsBox").style.display="block";  
							document.getElementById("spaceBox").style.display="none"; 
							
							
							var cur = obj.response.fileLink;
							var files = obj.response.fileLink.fileLink;
							
							var headingPanel= document.getElementById('headingPanel');
							var detailPanel= document.getElementById('detailPanel');
							var timePanel= document.getElementById('timePanel');
							var descPanel= document.getElementById('descPanel');
							var filePanel= document.getElementById('filePanel');
							var mapPanel= document.getElementById('mapPanel');
								
							var Lat=cur.latitude;
							var Lon=cur.longitude;
							
							
							var status= cur.status;
							
					      	if(status=="Registered"){
								
					    		
								var statusButton= document.getElementById('statusButton');
								statusButton.innerHTML = '<div class="btn-group" style="float:right"><a href="#" class="btn btn-sm btn-dark btn-rounded" style="background-color:#666666;border:none;"><b><i class="fa fa-check-square-o"></i> &nbsp;&nbsp;Already Registered</b></a></div>';
								
							}
						

							
							headingPanel.innerHTML= cur.randomCode+' : '+cur.fileDetail;
							detailPanel.innerHTML='&nbsp;&nbsp;<b>'+cur.createdBy+'</b>';
							timePanel.innerHTML=' Received at '+cur.createdOn+' &nbsp;&nbsp;<br><br>';
							descPanel.innerHTML=cur.fileDesc;
							filePanel.innerHTML='';
							
							
							mapPanel.innerHTML='<iframe style="margin-left:10px;" width="90%" height="350" frameborder="0" style="border:0" src="https://maps.google.com/maps?q='+Lat+','+Lon+'&hl=es;z=14&amp;output=embed"></iframe>';
								
							
							sessionStorage.setItem("crimeNo","CR"+crimeNoFirst);
							sessionStorage.setItem("crimeTitle",cur.fileDetail);
							sessionStorage.setItem("crimeDesc",cur.fileDesc);
							sessionStorage.setItem("crimeLoc",cur.location);
							
							
							
							 var arrayLength  = obj.response.fileLink.fileLink.length;
							
						    
						     
						     
						      if(cur.fileType=='image'){
							   
								for (var i = 0; i<arrayLength; i++) {
							        var fur = obj.response.fileLink.fileLink[i];
									filePanel.innerHTML= filePanel.innerHTML+'<img src="'+fur+'" width="100%"><br><br>';
									sessionStorage.setItem("evidenceFile",'<img src="'+fur+'" width="100%">');
									
							     }
						      }
						      
						      else if(cur.fileType=='video'){
						   	   
						  		for (var i = 0; i<arrayLength; i++) {
						  	        var fur = obj.response.fileLink.fileLink[i];
						  	      filePanel.innerHTML= filePanel.innerHTML+'<video width="400" controls><source src="'+fur+'" type="video/mp4"></video><br><br>';
						  	    sessionStorage.setItem("evidenceFile",'<video width="400" controls><source src="'+fur+'" type="video/mp4"></video>');
						  		}
						        }
						      
						      else{
						   	   
						  		for (var i = 0; i<arrayLength; i++) {
						  	        var fur = obj.response.fileLink.fileLink[i];
						    	      filePanel.innerHTML= filePanel.innerHTML+'<audio width="400" controls><source src="'+fur+'" type="audio/mp3"></audio><br><br>';
						    	      sessionStorage.setItem("evidenceFile",'<audio width="400" controls><source src="'+fur+'" type="audio/mp3"></audio>');
						  		}
						        }
							
							
							
						
							
							
							
							
						
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

function displayExisting(){
	document.getElementById("confForm").style.display="none";
	document.getElementById("checkForm").style.display="block";
}

function displayNew(){
	document.getElementById("confForm").style.display="none";
	document.getElementById("crimeForm").style.display="block";
}


function createNewCrime(){
	
	
	    document.getElementById('caseLink').style.display = 'block';
	    document.getElementById('crimeNoFirst').readOnly = true;
	    var caseLinkButton= document.getElementById('caseLinkButton');
	    caseLinkButton.innerHTML = '<button onclick="linkCrime()" id="crimeRegLinkButton" type="submit" class="btn btn-success btn-s-xs" disabled><div class="fa fa-pencil"></div>&nbsp;&nbsp;Register</button>';
	
/*		document.getElementById('caseNo').value = sessionStorage.getItem("crimeNo");
		document.getElementById('sittingNo').value = 1;
		document.getElementById('sessionNo').value = 1;
		document.getElementById('defaultLocation').value = "India";
		document.getElementById('caseLocation').value = sessionStorage.getItem("crimeLoc");
		document.getElementById('caseTitle').value = sessionStorage.getItem("crimeTitle");
		document.getElementById('caseDesc').value = sessionStorage.getItem("crimeDesc");
		
		document.getElementById('caseNo').readOnly = true;	
		document.getElementById('sittingNo').readOnly = true;	
		document.getElementById('sessionNo').readOnly = true;	
		document.getElementById('defaultLocation').readOnly = true;	
		document.getElementById('caseTitle').readOnly = true;
		document.getElementById('caseDesc').readOnly = true;
		document.getElementById('caseLocation').readOnly = true;
		
		document.getElementById("crimeForm").style.display="none";
		document.getElementById("startForm").style.display="block"; 
		
		
		
		$.ajax({
	      	url: webServerUrl,
	      	data: 'request=setFileStatus&randomCode='+selectedCrimeNumber+'&status=Registered',
	      	type: 'post',
				success: function(msg){
					
		
	   		 
				}
		
		});*/
		
	
}


function linkCrime(){

	var crimeNoFirst = $("#crimeNoFirst").val();
	var caseNumberForLink = $("#caseNumberForLink").val();
	

	
//	$.ajax({
//      	url: webServerUrl,
//      	data: 'request=registerMobFile&randomCode='+crimeNoFirst+'&caseNumberForLink='+caseNumberForLink,
//      	type: 'post',
//			success: function(msg){
//				
//				var loginJson = msg.trim();	
//   				obj = JSON.parse(loginJson);
//   				var resultCode  = obj.response.resultcode;
//   				var message  = obj.response.message;
//   				if(resultCode==1) 
//				{	
//				
   					$.ajax({
   				      	url: webServerUrl,
   				      	data: 'request=setFileStatus&randomCode='+crimeNoFirst+'&status=Registered',
   				      	type: 'post',
   							success: function(msg){
   								
   								document.getElementById('caseNo').value = caseNumberForLink;
   								document.getElementById('sittingNo').value = 1;
   								document.getElementById('sessionNo').value = 1;
   								document.getElementById('defaultLocation').value = "India";
   								document.getElementById('caseLocation').value = sessionStorage.getItem("crimeLoc");
   								document.getElementById('caseTitle').value = sessionStorage.getItem("crimeTitle");
   								document.getElementById('caseDesc').value = sessionStorage.getItem("crimeDesc");
   								
   								document.getElementById('caseNo').readOnly = true;	
   								document.getElementById('sittingNo').readOnly = true;	
   								document.getElementById('sessionNo').readOnly = true;	
   								document.getElementById('defaultLocation').readOnly = true;	
   								document.getElementById('caseTitle').readOnly = true;
   								document.getElementById('caseDesc').readOnly = true;
   								document.getElementById('caseLocation').readOnly = true;
   								
   								document.getElementById("crimeForm").style.display="none";
   								document.getElementById("startForm").style.display="block"; 
   								
   				   		 
   							}
   					
   					});
//   					
//				}
//				
//	
//   		 
//			}
//	
//	});
	
	return false;
	
}


