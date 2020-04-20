//本js由风鸟制作，严禁抄袭或修改版权！
//每行文本长度不得超过45字否则闪退╭∩╮（￣▽￣）╭∩╮
var str0="§b欢迎加入RAM服务器 ，群号238574132    §eyooooooooooooo";
var str1="§a这里是风鸟                            ";
var str2="§dRAM服务器一群已满请加二群368790316                   ";
var str3="§b广告位招租╭∩╮（￣▽￣）╭∩╮                          ";
var sp=0,smode=0;
var x=1035,y=5,z=29;
var Tick=5;
function modTick()
{
	if(Level.getTile(x,y,z)!=68 || Level.getData(x,y,z)!=2)
	{
		Level.setTile(x,y,z,68,2);
	}
	Tick--;
	if(Tick<=0)
	{
		Tick=2;
		if(smode==0)
		{
			sp++;
			if(sp>100)
			{
				smode=1;
				sp=100;
			}
		}
		else
		{
			sp--;
			if(sp<0)
			{
				sp=0;
				smode=0;
			}
		}
		//clientMessage((getSP(sp+str.length+80)+str).length);
		Level.setSignText(x,y,z,0,getSP(sp+str0.length+80)+str0);
		Level.setSignText(x,y,z,1,getSP(sp+str1.length+80)+str1);
		Level.setSignText(x,y,z,2,getSP(sp+str2.length+80)+str2);
		Level.setSignText(x,y,z,3,getSP(sp+str3.length+80)+str3);
	}
}
function getSP(num)
{
	var str="";
	for(var i=0;i<num;i++)
	{
		str+=" ";
	}
	return str;
}
