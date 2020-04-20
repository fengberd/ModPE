//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var msg="JS\n效果：\n由风鸟制作，盗版杀无赦！！";
function newLevel()
{
	if(first)
	{
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
