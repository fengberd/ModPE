//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="造湖器JS\n由风鸟制作，盗版杀无赦！！";
Block.defineBlock(72,"Lake maker",["stonecutter",2],20,false);
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
Item.addShapedRecipe(72,3,0,["yyy","dod","xpq"],["y",4,0,"x",325,8,"p",325,0,"q",325,10,"o",264,0,"d",331,0]);
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
function useItem(x,y,z,hid,bid,side,hdata)
{
	if(bid==72 && hid==325)
	{
		switch(hdata)
		{
		case 0:
			preventDefault();
			Level.setTile(x,y,z,0);
			k2(x,y,z,true);
			break;
		case 8:
			preventDefault();
			Level.setTile(x,y,z,0);
			k(x,y,z,8);
			break;
		case 10:
			preventDefault();
			Level.setTile(x,y,z,0);
			k(x,y,z,10);
			break;
		}
	}
}
function k(x,i,z,kid)
{
	var id=Level.getTile(x,i,z),data=Level.getData(x,i,z),random=0;
	if(id==0)
	{
		Level.setTile(x,i,z,kid);
		k(x+1,i,z,kid);
		k(x-1,i,z,kid);
	/*	k(x+1,i,z+1);
		k(x+1,i,z-1);
		k(x-1,i,z+1);
		k(x-1,i,z-1);*/
		k(x,i,z+1,kid);
		k(x,i,z-1,kid);
		
	/*	k(x,i+1,z);
		k(x+1,i+1,z);
		k(x-1,i+1,z);
		k(x+1,i+1,z+1);
		k(x+1,i+1,z-1);
		k(x-1,i+1,z+1);
		k(x-1,i+1,z-1);
		k(x,i+1,z+1);
		k(x,i+1,z-1);*/
		
		k(x,i-1,z,kid);
	/*	k(x+1,i-1,z);
		k(x-1,i-1,z);
		k(x+1,i-1,z+1);
		k(x+1,i-1,z-1);
		k(x-1,i-1,z+1);
		k(x-1,i-1,z-1);
		k(x,i-1,z+1);
		k(x,i-1,z-1);*/
	}
}
function k2(x,i,z,a)
{
	var id=Level.getTile(x,i,z);
	if(a || (id>7 && id<12))
	{
		Level.setTile(x,i,z,0);
		k2(x+1,i,z);
		k2(x-1,i,z);
	/*	k(x+1,i,z+1);
		k(x+1,i,z-1);
		k(x-1,i,z+1);
		k(x-1,i,z-1);*/
		k2(x,i,z+1);
		k2(x,i,z-1);
		
	/*	k(x,i+1,z);
		k(x+1,i+1,z);
		k(x-1,i+1,z);
		k(x+1,i+1,z+1);
		k(x+1,i+1,z-1);
		k(x-1,i+1,z+1);
		k(x-1,i+1,z-1);
		k(x,i+1,z+1);
		k(x,i+1,z-1);*/
		
		k2(x,i-1,z);
	/*	k(x+1,i-1,z);
		k(x-1,i-1,z);
		k(x+1,i-1,z+1);
		k(x+1,i-1,z-1);
		k(x-1,i-1,z+1);
		k(x-1,i-1,z-1);
		k(x,i-1,z+1);
		k(x,i-1,z-1);*/
	}
}
