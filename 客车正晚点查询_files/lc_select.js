/**************************
	ͨ��ƴ������Һ��ֵĽű��ļ�
	վ����������Ϊzmcode
	վ����������Ϊzmname
	վ��ƴ������Ϊzmpy
***************************/
function showsta(disobj,selobj,layobj)//�б�վ���ֵ䣨����籨���룩
{
	
	/*******************************
	���������ƴ���룬������صĳ�վ����
	���ݸ���ƴ���Ĳ��Ͼ�ȷ����վ��λԽ׼ȷ
	���룺disobj-��Ӧ�¼����ı���
		��selobj-�����б�ؼ�
		��layobj-��ʾ�����ؼ���ͼ��
	�������̬��ʾ��س�վ�������˵�
	********************************/
	layobj.style.display="none";	
	for(i=selobj.length;i>=0;i--)
	{
		selobj.remove(i);/**�ر�ͼ�㣬ɾ��ԭ�����б�����**/
	}
	var keys=disobj.value;
	keys=keys.toUpperCase();
	lkeys=keys.length;	
	if(lkeys==0)
	{	lay.style.display="none";
		return false;
	}	
	/**��ƴ��������**/
	for(j=0;j<keys.length;j++)
	{
	   ch=keys.charAt(0);
	   if (!((ch>="A")&&(ch<="Z")))
	   {
	   	
	   	return false;
	   }
	}
	
	 //Ϊ���ƶ�cell��������ʾ�Ŀռ䣬��������δ���	  
//  DCellWeb1.style.top = 200;
	/**�����س�վ�Ŀ�ʼ�ͽ���λ��**/


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
function showstaCC(disobj,selobj,layobj)//���복��
{ 
	layobj.style.display="none";	
	for(i=selobj.length;i>=0;i--)
	{
		selobj.remove(i);/**�ر�ͼ�㣬ɾ��ԭ�����б�����**/
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
function showsta1(disobj,selobj,layobj,ljdm)//�б�վ���ֵ䣨����籨���룩
{
	
	/*******************************
	���������ƴ���룬������صĳ�վ����
	���ݸ���ƴ���Ĳ��Ͼ�ȷ����վ��λԽ׼ȷ
	���룺disobj-��Ӧ�¼����ı���
		��selobj-�����б�ؼ�
		��layobj-��ʾ�����ؼ���ͼ��
	�������̬��ʾ��س�վ�������˵�
	********************************/
	//alert(ljdm);
	layobj.style.display="none";	
	for(i=selobj.length;i>=0;i--)
	{
		selobj.remove(i);/**�ر�ͼ�㣬ɾ��ԭ�����б�����**/
	}
	var keys=disobj.value;
	keys=keys.toUpperCase();
	lkeys=keys.length;	
	if(lkeys==0)
	{	lay.style.display="none";
		return false;
	}	
	/**��ƴ��������**/
	for(j=0;j<keys.length;j++)
	{
	   ch=keys.charAt(0);
	   if (!((ch>="A")&&(ch<="Z")))
	   {
	   	return false;
	   }
	}
	/**�����س�վ�Ŀ�ʼ�ͽ���λ��**/
	myvalue=keys.concat("AAA");	
	myvalue=myvalue.substr(0,3);
	firstidx=return_midd(myvalue);
		if(firstidx-20<0) firstidx=1; 
		else firstidx=firstidx-20;//Ϊ������Χ
	myvalue=keys.concat("ZZZ");
	myvalue=myvalue.substr(0,3);
	endidx=return_midd(myvalue);
		if(endidx+20>zmcode.length-1) endidx=zmcode.length-1;
		else endidx=endidx+20;//Ϊ������Χ
	
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
function showsta2(disobj,selobj,layobj)//�б�Ʒ���ֵ䣨����Ʒ��ƴ���룩
{
	
	/*******************************
	���������ƴ���룬������ص�Ʒ������
	���ݸ���ƴ���Ĳ��Ͼ�ȷ����վ��λԽ׼ȷ
	���룺disobj-��Ӧ�¼����ı���
		��selobj-�����б�ؼ�
		��layobj-��ʾ�����ؼ���ͼ��
	�������̬��ʾ��س�վ�������˵�
	********************************/
	layobj.style.display="none";	
	for(i=selobj.length;i>=0;i--)
	{
		selobj.remove(i);/**�ر�ͼ�㣬ɾ��ԭ�����б�����**/
	}
	var keys=disobj.value;
	keys=keys.toUpperCase();
	lkeys=keys.length;	
	if(lkeys==0)
	{	lay.style.display="none";
		return false;
	}	
	/**��ƴ��������**/
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
	����б�򣬷�����Ӧ��ֵ�����ص���ز�
	����	��seltext-�����г���վ�Ŀؼ�
		��lay-��ʾ��վ�б�Ĳ�
		��txt-��������ѡ��վ���ı���ؼ�
	���	�����������泵վ���ı���ֵ
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
	����б�򣬷�����Ӧ��ֵ�����ص���ز�
	����	��seltext-�����г���վ�Ŀؼ�
		��lay-��ʾ��վ�б�Ĳ�
		��txt-��������ѡ��վ���ı���ؼ�
	���	�����������泵վ���ı���ֵ
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
	����б�򣬷�����Ӧ��ֵ�����ص���ز�
	����	��seltext-�����г���վ�Ŀؼ�
		��lay-��ʾ��վ�б�Ĳ�
		��txt-��������ѡ��վ���ı���ؼ�
	���	�����������泵վ���ı���ֵ
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
	���б�����ʾճ�����������
	����	��tt-��������ѡ��վ���ı���ؼ�
		��dislayer-��ʾ��վ�б�Ĳ�
	���	����ʾ��վ�б�Ĳ�չ��
	********************************/
 
  if (arguments.length >  3){alert("�Բ��𣡴��뱾�ؼ��Ĳ���̫�࣡");return;}
  if (arguments.length == 0){alert("�Բ�����û�д��ر��ؼ��κβ�����");return;}
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
  /**���������ʾ���£�����ʾ���ı����Ϸ�**/
  dads.left = tleft + "px";
  dads.display = '';
}

function return_midd(myvalue)//����վ���ֵ���������myvalue���һ���index(wq)
{
	/*******************************
	����վ���ֵ���������myvalue���һ���index
	����	��myvalueΪ3λ�ַ���
	���	�����������泵վ���ı���ֵ
	********************************/
	var pre,back,midd;
	pre=0;
	back=zmcode.length-1;
	/**�۰�����㷨,��������������ݷ����м�ģ������ż���������м�ƫ��һ��**/
	midd=Math.round((pre+back)/2);
	theValue=myvalue.toUpperCase();
	//alert(zmpy[pre]);
	//alert(back);

	if(theValue.length>0) {
		if((theValue>zmpy[back])){
			alert("������Ĵ��벻��ȷ��");
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
	/**���myvalue�Ƿ��򷵻�-1**/
	return -1;
}
function trim(str)
{
	/*******************************		
	���룺str-Ҫ������ַ���		
	�����û�пո���ַ���
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