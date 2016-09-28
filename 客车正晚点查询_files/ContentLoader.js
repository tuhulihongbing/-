var net = new Object();
net.READY_STATE_UNINITIALIZED=0;
net.READY_STATE_LOADING=1;
net.READY_STATE_LOADED=2;
net.READY_STATE_INTERACTIVE=3;
net.READY_STATE_COMPLETE=4;
net.ContentLoader=function(url,onload,onerror){
	this.url=url;
	this.req=null;
	this.onload=onload;
	this.onerror=(onerror)?onerror:this.defaultError;
	this.loadXMLDoc(url);
}
net.ContentLoader.prototype={
	loadXMLDoc:function(url,method,params,contentType){
		if(!method){
			method="GET";
		}
		if(!contentType && method=="POST"){
			contentType='application/x-www-form-urlencoded';
		}
		if(window.XMLHttpRequest){
			this.req=new XMLHttpRequest();
		}else if(window.ActiveXObject){
			this.req=new ActiveXObject("Microsoft.XMLHTTP");
		}
		if(this.req){
			try{
				var loader=this;
				this.req.onreadystatechange=function(){
					loader.onReadyState.call(loader);
					//net.ContentLoader.onReadyState.call(loader);
				}
				this.req.open(method,url,true);
				if(contentType){
					this.req.setRequestHeader('Content-Type',contentType);
				}
				this.req.send(params);
			}catch(err){
				this.onerror.call(this);	
			}
		}
	},
	onReadyState:function(){
		var req=this.req;
		var ready=req.readyState;
		
		if(ready==net.READY_STATE_COMPLETE){
			var httpStatus=req.status;
			if(httpStatus==200 || httpStatus==0){
				this.onload.call(this);
			}else{
				this.onerror.call(this);
			}
		}
	},
	defaultError:function(){
//		alert("error fetching data!"
//			+"\n\nreadyState:"+this.req.readyState
//			+"\n\nstatus:"+this.req.status
//			+"\n\nheaders:"+this.req.getAllResponseHeaders());
	}
}