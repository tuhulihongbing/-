// JavaScript Document

function helpcc(){	//�򿪳��β�ѯ���ڣ�
    if(document.getElementById("chezhanInId").value==""||document.getElementById("chezhanInId").value=="��ƴ/����/ȫƴ"){
        alert("������ʾ��\n\n������Ҫ��ѯ�ĳ�վ");
        document.getElementById("chezhanInId").focus();
        return false;
        }
   
   var chezhanIn = document.getElementById("chezhanInId");
		chezhanIn.value = chezhanIn.value.replace(/\s+/g,"");
    var newwin=window.open("help.jsp");
    newwin.moveTo(50,50);
    newwin.resizeTo(600,600);
	//window.open("help.jsp","","width=600,height=400,scrollbars=yes");
}

function searchByCZ(){//�򿪰���վ��ѯ���ڣ�
	if(document.getElementById("chezhanInId").value==""){
        alert("������ʾ��\n\n������Ҫ��ѯ�ĳ�վ");
        document.getElementById("chezhanInId").focus();
        return false;
    }else{
		var chezhanIn = document.getElementById("chezhanInId");
		chezhanIn.value = chezhanIn.value.replace(/\s+/g,"");
		window.open("help.jsp","_blank","width=500,height=400,scrollbars=yes");
	}
	
	
}

function EntToTab(){
 var e = window.event || arguments.callee.caller.arguments[0];
 if(e.keyCode==13 && e.srcElement.type!='button' && e.srcElement.type!='submit' && e.srcElement.type!='reset' && e.srcElement.type!='textarea' && e.srcElement.type!='') 
		e.keyCode=9;
}
function isChezhanOnclick(obj){//�Ƿ���г�վ��ѡ��
	var chezhanInput = document.getElementById("chezhanInId");
	if(obj.checked){
		chezhanInput.disabled=false;
		chezhanInput.style.backgroundColor ='';
	}else{
		chezhanInput.disabled=true;
		chezhanInput.style.backgroundColor ='#C0C0C0';		
	}
}
function chongzhiFun(){//���ð�ť���¼�����
	var chezhanInput = document.getElementById("chezhanInId");
	var chechiInput = document.getElementById("chechiInId");
	var resultJsp = document.getElementById("resultJsp");
	var cxlx = document.getElementById("cxlx0");
	chezhanInput.value='';
	chechiInput.value='';
	resultJsp.innerHTML = "";
	cxlx.checked = true;
	showResult(0,0);
}
function chaxunFun(){//��ѯ��ť���¼�����
	var resultJsp = document.getElementById("resultJsp");
	showResult(0,1);
	resultJsp.innerHTML = "";
	
	var chezhanInput = document.getElementById("chezhanInId");
	if(chezhanInput.disabled==false){
		if(chezhanInput.value==""){
			alert("������ʾ��\n\n�����복վ��Ϣ��");
			chezhanInput.focus();
			return;
		}else{
			chezhanInput.value = chezhanInput.value.replace(/\s+/g,"");
		}
	}
	var chechiInput = document.getElementById("chechiInId");
	if(chechiInput.value==""){
		alert("������ʾ��\n\n�����복����Ϣ��");
		chechiInput.focus();
		return;
	}else{
		chechiInput.value = chechiInput.value.replace(/\s+/g,"");
	}

//**** add by hjl 2008-12-23
	var rightcode="";
  for(var i=0;i<spans.length;i++){
     rightcode+=spans[i].innerHTML;               
  }       
  if(document.getElementById("yzm").value!=rightcode){
//stono 90302 start	  

    alert("��֤�벻��ȷ������������!");
	document.getElementById("yzm").focus();
    return false;

//stono 90302 end
  }
//************************************************************

	document.getElementById("resultJsp").innerHTML="���ڲ�ѯ�����Ժ�...";
	//checkCZ();
	fromtoFun();
	
}
function chaxunFun2(){
	var chezhanInput = document.getElementById("chezhanInId");
	var chechiInput = document.getElementById("chechiInId");
	
	
	var chezhanEn = document.getElementById("chezhanEn");

	chezhanInput.value = chezhanInput.value.replace(/\s+/g,"");
	chechiInput.value = chechiInput.value.replace(/\s+/g,"");
	chezhanEn.value = chezhanEn.value.replace(/\s+/g,"");

	chezhanEn.value = encodeURI(chezhanInput.value);
	//document.getElementById("formSearch").submit();
	var cz = chezhanInput.value;
	var czEn = encodeURI(cz);//stono 90302
	czEn = czEn.replace(/%/g,"-"); //stono 90302
	var cc = chechiInput.value;
	var cxlx =0;
	var cxlx0 = document.getElementById("cxlx0");
	if(!cxlx0.checked) cxlx=1;
	var rq= document.getElementById("txt2").value;
	var tp=new Date().getTime();
	var cx =  new net.ContentLoader('cx.jsp?cz='+cz+'&cc='+cc+'&cxlx='+cxlx+'&rq='+rq+'&czEn='+czEn+'&tp='+tp,cxFun);	
}
function cxFun(){
	var srcstr = this.req.responseText;
//	alert(srcstr);
	document.getElementById("resultJsp").innerHTML=srcstr;
	document.getElementById("yzm").value="";
	validteCode();
	
}
function yzmEnter(){//��֤�������س�����
    var e = window.event || arguments.callee.caller.arguments[0];
	if(e.keyCode==13){
		chaxunFun();
	}
}
function showResult(x,y){
	var resultNull = document.getElementById("resultNull");
	var resultTbl = document.getElementById("resultJsp");
	if(x==0){
		resultNull.style.display="none";
	}else{
		resultNull.style.display="";
	}
	if(y==0){
		resultTbl.style.display="none";
	}else{
		resultTbl.style.display="";
	}
}
function fromtoFun(){//��⳵վ����
	var cz=document.getElementById("chezhanInId").value.replace(/\s+/g,"");
	var cc=document.getElementById("chechiInId").value.replace(/\s+/g,"");
	var czEn = encodeURI(cz);//stono 90302
	czEn = czEn.replace(/%/g,"-"); //stono 90302
	var cxlx =0;
	var cxlx0 = document.getElementById("cxlx0");
	if(!cxlx0.checked) cxlx=1;
	var rq= document.getElementById("txt2").value;
	if(cc==""){
		document.getElementById("from2Id").innerHTML="";
		return ;
	}
//	alert('from2.jsp?cz='+cz+'&cc='+cc+'&cxlx='+cxlx+'&rq='+rq+'&czEn='+czEn);
	var tp = new Date().getTime();
	var from2 = new net.ContentLoader('from2.jsp?cz='+cz+'&cc='+cc+'&cxlx='+cxlx+'&rq='+rq+'&czEn='+czEn+'&tp='+tp,fromtoCall);
	
}
String.prototype.trim= function(){  
    // ��������ʽ��ǰ��ո�  
    // �ÿ��ַ��������  
    return this.replace(/(^\s*)|(\s*$)/g, "");  
}
function fromtoCall(){	//��⳵վ���λص�����
	var srcstr = this.req.responseText;
	srcstr = srcstr.trim();
//	alert(srcstr);
//	alert(srcstr.length);
	if(srcstr=='ERROR_ADDRESS_DATE'){
		document.getElementById("from2Id").innerHTML=""; //stono 90415
		var cz=document.getElementById("chezhanInId").value;
		var cc=document.getElementById("chechiInId").value;
		alert("��ʾ��\n\nδ�ܲ鵽"+cz+"��վ��"+cc+"������Ϣ�����������룡");
		document.getElementById("resultJsp").innerHTML="";
		var obj = document.getElementById("chezhanInId");
		obj.focus();
	}else{
		document.getElementById("from2Id").innerHTML=srcstr;
		chaxunFun2();
	}
}
function clearCC(){
    var obj = document.getElementById("chezhanInId");
    var txt = obj.value;
	if(txt.length==0){
		var cc = document.getElementById("chechiInId");
		cc.value = "";
		return;
	}
	try{
		var e = window.event || arguments.callee.caller.arguments[0];
		if(e.keyCode==38 || e.keyCode==40){
			selsta.focus();
			selsta.options[0].selected =true;
		}
	}catch(e){}
	
}
function checiKeyUp(){
	try{
		var e = window.event || arguments.callee.caller.arguments[0];
		if(e.keyCode==38 || e.keyCode==40){
			selstaCC.focus();
			selstaCC.options[0].selected =true;
		}
	}catch(e){}
}
function checkCZ(){	//��⳵վ
    var obj = document.getElementById("chezhanInId");
    var txt = obj.value;
	if(txt.length==0){
		return;
	}
    for(var i=1;i<zmname.length;i++){
        if(txt==decodeURI(zmname[i].replace(/-/g,"%"))){
			var txtEn = encodeURI(txt); //stono 90302
			txtEn = txtEn.replace(/%/g,"-"); //stono 90302
			var res = new net.ContentLoader('station.jsp?cz='+txt+'&czEn='+txtEn,stationFun);
            return;
        }
    }
    alert("������ʾ��\n\nվ���������������룡");
    obj.focus();

}
function stationFun(){	//��⳵վ�ص�����
	var srcstr = this.req.responseText;
//	alert(srcstr);
//	document.getElementById("station2Id").innerHTML=srcstr;
//	alert(srcstr.length);
	if(srcstr.length>9){
		alert(srcstr);
		 var obj = document.getElementById("chezhanInId");
		 obj.focus();
	}
}
function keypressCxlx(){
	var e = window.event || arguments.callee.caller.arguments[0];
	if(e.keyCode==13){
		var obj = document.getElementById("chezhanInId");
		obj.focus();
	}

}
function keypressCZ(){
	var e = window.event || arguments.callee.caller.arguments[0];
	if(e.keyCode==13){
		var obj = document.getElementById("chechiInId");
		obj.focus();
	}
}
function keypressCC(){
	var e = window.event || arguments.callee.caller.arguments[0];
	if(e.keyCode==13){
		var obj = document.getElementById("yzm");
		obj.focus();
	}	
}
function clearDiv(){
	lay.style.display = 'none';
	layCC.style.display = 'none';
}