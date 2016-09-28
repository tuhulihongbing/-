/**************************
	通过拼音码查找汉字的脚本文件
	站名代码数组为zmcode
	站名名称数组为zmname
	站名拼音数组为zmpy
***************************/
function showsta(disobj,selobj,layobj)//列表站名字典（输入电报略码）
{
	
	/*******************************
	根据输入的拼音码，给出相关的车站汉字
	根据给出拼音的不断精确，车站定位越准确
	输入：disobj-相应事件的文本框
		：selobj-下拉列表控件
		：layobj-显示下拉控件的图层
	输出：动态显示相关车站的下拉菜单
	********************************/
	layobj.style.display="none";	
	for(i=selobj.length;i>=0;i--)
	{
		selobj.remove(i);/**关闭图层，删除原来的列表内容**/
	}
	var keys=disobj.value;
	keys=keys.toUpperCase();
	lkeys=keys.length;	
	if(lkeys==0)
	{	lay.style.display="none";
		return false;
	}	
	/**有拼音码输入**/
	for(j=0;j<keys.length;j++)
	{
	   ch=keys.charAt(0);
	   if (!((ch>="A")&&(ch<="Z")))
	   {
	   	
	   	return false;
	   }
	}
	
	 //为了移动cell给日期显示的空间，加上了这段代码	  
//  DCellWeb1.style.top = 200;
	/**获得相关车站的开始和结束位置**/


	//stono 91126
	firstidx = 1;
	endidx = zmpy.length-1;
	//stono 91126 end

	for(i=(firstidx);i<=(endidx);i++)
	{
		if(zmpy[i].substring(0,lkeys)==keys)
		{						
			NewOption = document.createElement("OPTION");
			NewOption.text = decodeURI(zmname[i].replace(/-/g,"%"));		
//			NewOption.value = zmcode[i]+"-"+zmname[i];
			NewOption.value = decodeURI(zmname[i].replace(/-/g,"%"));
			selobj.add (NewOption);			
		}
	}	

	dislayer(disobj,layobj);
}
function showstaCC(disobj,selobj,layobj)//输入车次
{ 
	layobj.style.display="none";	
	for(i=selobj.length;i>=0;i--)
	{
		selobj.remove(i);/**关闭图层，删除原来的列表内容**/
	}
	var keys=disobj.value;
	keys=keys.toUpperCase();
	lkeys=keys.length;	
	if(lkeys==0)
	{	lay.style.display="none";
		return false;
	}  
	//stono 91126
	firstidx = 1;
	endidx = cc.length-1;
	//stono 91126 end

	for(i=(firstidx);i<=(endidx);i++) {
		if(cc[i].substring(0,lkeys)==keys) {						
			NewOption = document.createElement("OPTION");
			NewOption.text = cc[i];	 
			NewOption.value = cc[i];
			selobj.add (NewOption);			
		}
	} 
	dislayer(disobj,layobj);
}
function showsta1(disobj,selobj,layobj,ljdm)//列表站名字典（输入电报略码）
{
	
	/*******************************
	根据输入的拼音码，给出相关的车站汉字
	根据给出拼音的不断精确，车站定位越准确
	输入：disobj-相应事件的文本框
		：selobj-下拉列表控件
		：layobj-显示下拉控件的图层
	输出：动态显示相关车站的下拉菜单
	********************************/
	//alert(ljdm);
	layobj.style.display="none";	
	for(i=selobj.length;i>=0;i--)
	{
		selobj.remove(i);/**关闭图层，删除原来的列表内容**/
	}
	var keys=disobj.value;
	keys=keys.toUpperCase();
	lkeys=keys.length;	
	if(lkeys==0)
	{	lay.style.display="none";
		return false;
	}	
	/**有拼音码输入**/
	for(j=0;j<keys.length;j++)
	{
	   ch=keys.charAt(0);
	   if (!((ch>="A")&&(ch<="Z")))
	   {
	   	return false;
	   }
	}
	/**获得相关车站的开始和结束位置**/
	myvalue=keys.concat("AAA");	
	myvalue=myvalue.substr(0,3);
	firstidx=return_midd(myvalue);
		if(firstidx-20<0) firstidx=1; 
		else firstidx=firstidx-20;//为了扩大范围
	myvalue=keys.concat("ZZZ");
	myvalue=myvalue.substr(0,3);
	endidx=return_midd(myvalue);
		if(endidx+20>zmcode.length-1) endidx=zmcode.length-1;
		else endidx=endidx+20;//为了扩大范围
	
	for(i=(firstidx);i<=(endidx);i++)
	{
		if(zmpy[i].substring(0,lkeys)==keys)
		{	
			//if(zmljm[i]==ljdm)
			//{
			NewOption = document.createElement("OPTION");
			NewOption.text = zmname[i];		
			NewOption.value = zmcode[i]+"-"+zmname[i];
			selobj.add (NewOption);	
			//}
		}
	}	
	dislayer(disobj,layobj);
}
function showsta2(disobj,selobj,layobj)//列表品名字典（输入品名拼音码）
{
	
	/*******************************
	根据输入的拼音码，给出相关的品名汉字
	根据给出拼音的不断精确，车站定位越准确
	输入：disobj-相应事件的文本框
		：selobj-下拉列表控件
		：layobj-显示下拉控件的图层
	输出：动态显示相关车站的下拉菜单
	********************************/
	layobj.style.display="none";	
	for(i=selobj.length;i>=0;i--)
	{
		selobj.remove(i);/**关闭图层，删除原来的列表内容**/
	}
	var keys=disobj.value;
	keys=keys.toUpperCase();
	lkeys=keys.length;	
	if(lkeys==0)
	{	lay.style.display="none";
		return false;
	}	
	/**有拼音码输入**/
	/**for(j=0;j<keys.length;j++)
	{
	   ch=keys.charAt(j);
	   if (!((ch>="A")&&(ch<="Z")))
	   {
	   	return false;
	   }
	}
**/
	/****/
	for(i=1;i<pmpy.length;i++)
	{
		if(pmpy[i].substring(0,lkeys)==keys)
		{						
			NewOption = document.createElement("OPTION");
			NewOption.text = pmname[i];	
			/**NewOption.value = pmcode[i]+"-"+pmname[i];**/
			NewOption.value = pmcode[i];
			selobj.add (NewOption);			
		}
	}	
	dislayer(disobj,layobj);
}
function keyPressOnSel(seltext,lay,txt){
	var e = window.event || arguments.callee.caller.arguments[0];
	if(e.keyCode==13){
		returnsta(seltext,lay,txt);
	}
}
function returnsta(seltext,lay,txt)
{	
	/*******************************
	点击列表框，返回相应的值，并关掉相关层
	输入	：seltext-用于列出车站的控件
		：lay-显示车站列表的层
		：txt-用来保存选择车站的文本框控件
	输出	：给用来保存车站的文本框赋值
	********************************/
	var temp=seltext.value;
	temp=trim(temp);
	txt.value=temp;
	lay.style.display="none";
	txt.focus();
}
function returnstaCC(seltext,lay,txt)
{	
	/*******************************
	点击列表框，返回相应的值，并关掉相关层
	输入	：seltext-用于列出车站的控件
		：lay-显示车站列表的层
		：txt-用来保存选择车站的文本框控件
	输出	：给用来保存车站的文本框赋值
	********************************/
	var temp=seltext.value;
	temp=trim(temp);
	txt.value=temp;
	lay.style.display="none";
	txt.focus();
}
function returnsta2(seltext,lay,txt,pmdm)
{	
	/*******************************
	点击列表框，返回相应的值，并关掉相关层
	输入	：seltext-用于列出车站的控件
		：lay-显示车站列表的层
		：txt-用来保存选择车站的文本框控件
	输出	：给用来保存车站的文本框赋值
	********************************/
	var temp=seltext.value;
	temp=trim(temp);
	txt.value=seltext.options[seltext.selectedIndex].text;
	pmdm.value=temp;
	lay.style.display="none";
}
function dislayer(tt,dislayer) 
{
  /*******************************
	将列表框的显示粘在输入框下面
	输入	：tt-用来保存选择车站的文本框控件
		：dislayer-显示车站列表的层
	输出	：显示车站列表的层展开
	********************************/
 
  if (arguments.length >  3){alert("对不起！传入本控件的参数太多！");return;}
  if (arguments.length == 0){alert("对不起！您没有传回本控件任何参数！");return;}
  var dads  = dislayer.style;
  var ttop  = tt.offsetTop;     
  var thei  = tt.clientHeight;  
  var tleft = tt.offsetLeft;
  var ttyp  = tt.type;   
 // alert(ttop);
  while (tt = tt.offsetParent){
	  ttop+=tt.offsetTop; 
	//  alert(ttop);
	  tleft+=tt.offsetLeft;
  }
  dads.top  = ((ttyp=="image")? ttop+thei : ttop+thei+6 ) + "px"; 
  /**如果下面显示不下，就显示再文本框上方**/
  dads.left = tleft + "px";
  dads.display = '';
}

function return_midd(myvalue)//返回站名字典数组中与myvalue最近一点的index(wq)
{
	/*******************************
	返回站名字典数组中与myvalue最近一点的index
	输入	：myvalue为3位字符串
	输出	：给用来保存车站的文本框赋值
	********************************/
	var pre,back,midd;
	pre=0;
	back=zmcode.length-1;
	/**折半查找算法,如果有奇数个数据返回中间的，如果是偶数个返回中间偏上一个**/
	midd=Math.round((pre+back)/2);
	theValue=myvalue.toUpperCase();
	//alert(zmpy[pre]);
	//alert(back);

	if(theValue.length>0) {
		if((theValue>zmpy[back])){
			alert("您输入的代码不正确！");
			return -1;
		}
		while((zmpy[midd]!=theValue)&&(pre!=back)) {
			if (zmpy[midd]>theValue) {back=midd;}
			else {pre=midd;}
			midd=Math.round((pre+back)/2);
			if((pre+1)==back){pre=back;}
		}	
		return midd;
	}
	/**如果myvalue非法则返回-1**/
	return -1;
}
function trim(str)
{
	/*******************************		
	输入：str-要处理的字符串		
	输出：没有空格的字符串
	********************************/
	var count
	var tempstr
	tempstr=""
	count=0
	for(i=0;i<str.length;i++)	
		if(str.charAt(i)==" ")  count++
		else break
	if(count==str.length) return ""
	if(count>0)
		tempstr=str.substring(count,str.length)
	else
	    tempstr=str
	count=0
	for(i=tempstr.length;i>0;i--)
		if(tempstr.charAt(i-1)==" ") count++
		else break
	if(count>0)
		str=tempstr.substring(0,(tempstr.length-count))
	else
		str=tempstr
	return str
}