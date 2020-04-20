//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var high_m=1.1;
var msg="欢迎使用蹦蹦床JS，方块ID：248";
Block.defineBlock(248,"蹦蹦床",["wool",1],false,0);
Item.addShapedRecipe(248,6,0,["yyy","d d","   "],["y",35,0,"d",5,0]);
Player.addItemCreativeInv(248,1,0);
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
function modTick()
{
	var x=fixPos(Player.getX()),y=fixPos(Player.getY())-2,z=fixPos(Player.getZ());
	var ID=Level.getTile(x,y,z);
	if(ID==248)
	{
		Entity.setVelY(Player.getEntity(),high_m);
	}
}
function fixPos(pos)
{
	if(pos<0)
	{
		return pos-1;
	}
	return pos;
}

