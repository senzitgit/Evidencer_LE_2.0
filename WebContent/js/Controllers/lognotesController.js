


var logNotes = sessionStorage.getItem("logNotes");

var pcaseNo = sessionStorage.getItem("pcaseNo");
var pcaseTitle = sessionStorage.getItem("pcaseTitle");
var pcaseDesc = sessionStorage.getItem("pcaseDesc");
var psittingNo = sessionStorage.getItem("psittingNo");
var psessionNo = sessionStorage.getItem("psessionNo");




	logs = JSON.parse(logNotes);
	var loadLogs = document.getElementById("loadLogs");	
   var arrayLength  = logs.length;
   if(arrayLength>0) {
	
	 for (var i = 0; i < arrayLength; i++) {
	       var cur = logs[i];

	       loadLogs.innerHTML=  loadLogs.innerHTML + '<section id="" class="content" onclick="seekFeeds('+cur.duration+')"><div class="list-group-item text-ellipsis"><span class="badge bg-success" Style="float:left;background-color:rgb(198, 170, 93);">'+cur.speaker+'</span> &nbsp;&nbsp;<i>said</i><b>&nbsp;&nbsp; '+cur.notes+'</b><br><i>on</i>&nbsp;&nbsp; '+cur.timestamp+'</section>';
   
	    } 
	
 }


        var thisCaseDetails = document.getElementById("thisCaseDetails");
		thisCaseDetails.innerHTML='<div style="float:left; font-color:9px;">Case No : <span class="badge bg-success" style="background-color:#000">'+pcaseNo+'</span> | Case Title : <span class="badge bg-success" style="background-color:#000">'+pcaseTitle+'</span> | Case Description :  <span class="badge bg-success" style="background-color:#000">'+pcaseDesc+'</span> | Sitting Number: <span class="badge bg-success" style="background-color:#000">'+psittingNo+'</span> | Session Number: <span class="badge bg-success" style="background-color:#000">'+psessionNo+'</span> </div>';



