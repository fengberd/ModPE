//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var maxTntCount=20;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var msg="TNT防卡死处理JS\n效果：自动处理多余TNT，防止游戏卡死，输入/tntc <数量>可以设置最大允许的TNT数量，默认为20个\n由风鸟制作，盗版杀无赦！！";
function newLevel()
{
	if(first)
	{
		maxTntCount=Number(ModPE.readData("maxtnt"));
		if(maxTntCount<=0)
		{
			maxTntCount=20;
		}
		print(msg);
		first=false;
	}
}
function print(str)
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			android.widget.Toast.makeText(ctx,str,0).show();
		}
	}));
}
function modTick()
{
	var list=Entity.getAll();
	var count=0;
	for(var i=0;i<list.length;i++)
	{
		if(Entity.getEntityTypeId(list[i])==65)
		{
			count++;
		}
	}
	if(count>=maxTntCount)
	{
		var list=Entity.getAll();
		for(var i=0;i<list.length;i++)
		{
			if(Entity.getEntityTypeId(list[i])==65)
			{
				Entity.remove(list[i]);
			}
		}
	}
}
function procCmd(cmd)
{
	var Data=cmd.split(" ");
	if(Data[0]=="tntc")
	{
		maxTntCount=Number(Data[1]);
		ModPE.saveData("maxtnt",maxTntCount);
		clientMessage("最大允许TNT数量已设置为:"+Data[1]);
	}
}
