function openwin(){
	window.open ("wechat.png", "newwindow2", "height=300, width=250, top=200,left=650,toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no,status=no") 
}
 
function checkAll(){
	var ckbox0=document.getElementById("ckbox0");
	var pd=document.getElementsByName("pd");
	if(ckbox0.checked){
		for(var i=0;i<pd.length;i++){pd[i].checked=true;}
	}else{
		for(var i=0;i<pd.length;i++){pd[i].checked=false;}
	}
	//部分选中
	for(var i=0;i<pd.length;i++){
		//为某一个checkbox绑定单击事件
		pd[i].onclick=function(){
			var count=pd.length;
			var checkCount=0;
			var sum=0;
			
			
			for(var i=0;i<pd.length;i++){
				if(pd[i].checked){
					checkCount++;
					
					
				}
			}
			document.getElementById("ckbox0").checked=(count==checkCount);
			
			
			
			
			
			
		}
	}
	
	
	
}



 


	

			
	