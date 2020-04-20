//本js由风鸟制作！严禁盗版或修改版权！！
var open=false,x,y,z;
var entlist;
var first=true;
var BtnWindow=null;
var msg="\n须左铠甲JS\n效果：点击右下方K按钮启动铠甲，其中的生物会燃烧，开启时会被铠甲的力量限制住行动且不会受到伤害，再次点击关闭\n由风鸟制作，盗版杀无赦！！";
function dip2px(ctx, dips){return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);}
function newLevel()
{
	if(first)
	{
		print(msg);
		print(msg);
		print(msg);
		first=false;
	}
	//GUI
	 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{BtnWindow = new android.widget.PopupWindow();var layout = new android.widget.RelativeLayout(ctx);var button = new android.widget.Button(ctx);button.setText("K");button.setOnClickListener(new android.view.View.OnClickListener({onClick: function(viewarg){Start();}}));layout.addView(button);BtnWindow.setContentView(layout);BtnWindow.setWidth(dip2px(ctx, 40));BtnWindow.setHeight(dip2px(ctx, 40));BtnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));BtnWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,70);}catch(err){print("出现错误:\n无法显示按钮(10)\n"+err);print("出现错误:\n无法显示按钮(10)\n"+err);print("出现错误:\n无法显示按钮(10)\n"+err);}}}));}
	 
function leaveGame(){open=false;var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();ctx.runOnUiThread(new java.lang.Runnable({run:function(){if(BtnWindow != null){BtnWindow.dismiss();BtnWindow = null;}}}));}
function Start()
{
	if(open)
	{
		open=false;
		//////////////////////////////
		setTile(x,y,z,0);
		setTile(x,y-1,z, 0);
		//1
		 setTile(x,y,z-1, 0);
		 setTile(x,y,z-2, 0);
		 setTile(x,y,z-3, 0);
		 setTile(x,y,z+1, 0);
		 setTile(x,y,z+2, 0);
		 setTile(x,y,z+3, 0);
		 
		 setTile(x+1,y,z-3, 0);
		 setTile(x+1,y,z+3, 0);
		 setTile(x+2,y,z-3, 0);
		 setTile(x+2,y,z+3, 0);
		 
		 setTile(x+3,y,z-1, 0);
		 setTile(x+3,y,z-2, 0);
		 setTile(x+3,y,z-3, 0);
		 setTile(x+3,y,z+1, 0);
		 setTile(x+3,y,z+2, 0);
		 setTile(x+3,y,z+3, 0);
		 
		 setTile(x,y+1,z, 0);
		//2
		 setTile(x,y+2,z-1, 0);
		 setTile(x,y+2,z-2, 0);
		 setTile(x,y+2,z-3, 0);
		 setTile(x,y+2,z+1, 0);
		 setTile(x,y+2,z+2, 0);
		 setTile(x,y+2,z+3, 0);
		 
		 setTile(x+1,y+2,z-3, 0);
		 setTile(x+1,y+2,z+3, 0);
		 setTile(x+2,y+2,z-3, 0);
		 setTile(x+2,y+2,z+3, 0);
		 
		 setTile(x+3,y+2,z-1, 0);
		 setTile(x+3,y+2,z-2, 0);
		 setTile(x+3,y+2,z-3, 0);
		 setTile(x+3,y+2,z+1, 0);
		 setTile(x+3,y+2,z+2, 0);
		 setTile(x+3,y+2,z+3, 0);
		
		 setTile(x,y+2,z, 0);
		 setTile(x,y+3,z, 0);
		 
		 //3
		 setTile(x,y+4,z-1, 0);
		 setTile(x,y+4,z-2, 0);
		 setTile(x,y+4,z-3, 0);
		 setTile(x,y+4,z+1, 0);
		 setTile(x,y+4,z+2, 0);
		 setTile(x,y+4,z+3, 0);
		 
		 setTile(x+1,y+4,z-3, 0);
		 setTile(x+1,y+4,z+3, 0);
		 setTile(x+2,y+4,z-3, 0);
		 setTile(x+2,y+4,z+3, 0);
		 
		 setTile(x+3,y+4,z-1, 0);
		 setTile(x+3,y+4,z-2, 0);
		 setTile(x+3,y+4,z-3, 0);
		 setTile(x+3,y+4,z+1, 0);
		 setTile(x+3,y+4,z+2, 0);
		 setTile(x+3,y+4,z+3, 0);
		 
		 setTile(x,y+4,z, 0);
		 setTile(x,y+5,z, 0);
		//4
		 setTile(x,y+6,z, 0);
		 setTile(x,y+6,z+1, 0);
		 setTile(x,y+6,z-1, 0);
		 setTile(x+1,y+6,z, 0);
		 setTile(x+1,y+6,z+2, 0);
		 setTile(x+1,y+6,z-2, 0);
		//7
		 setTile(x,y+7,z, 0);
		 setTile(x,y+7,z+1, 0);
		 setTile(x,y+7,z-1, 0);
		 setTile(x+1,y+7,z+1, 0);
		 setTile(x+1,y+7,z-1, 0);
		 setTile(x+1,y+7,z, 0);
		//8
		 setTile(x,y+8,z, 0);
		 setTile(x,y+8,z+1, 0);
		 setTile(x,y+8,z-1, 0);
		 setTile(x+1,y+8,z-1,0);
		 setTile(x+1,y+8,z+1,0);
		 setTile(x+1,y+8,z+2, 0);
		 setTile(x+1,y+8,z-2, 0);
		//9
		 setTile(x,y+9,z+1, 0);
		 setTile(x,y+9,z-1, 0);
		
		//////////////////////////////
		clientMessage("须左铠甲关闭");
	}
	else
	{
		x=parseInt(getPlayerX()),y=getPlayerY(),z=parseInt(getPlayerZ());
		clientMessage("须左铠甲开启");
		//////////////////////////////
		setTile(x,y,z,20);
		setTile(x,y-1,z,246);
		//1
		 setTile(x,y,z-1,246);
		 setTile(x,y,z-2,246);
		 setTile(x,y,z-3,246);
		 setTile(x,y,z+1,246);
		 setTile(x,y,z+2,246);
		 setTile(x,y,z+3,246);
		 
		 setTile(x+1,y,z-3,246);
		 setTile(x+1,y,z+3,246);
		 setTile(x+2,y,z-3,246);
		 setTile(x+2,y,z+3,246);
		 
		 setTile(x+3,y,z-1,246);
		 setTile(x+3,y,z-2,246);
		 setTile(x+3,y,z-3,246);
		 setTile(x+3,y,z+1,246);
		 setTile(x+3,y,z+2,246);
		 setTile(x+3,y,z+3,246);
		 
		 setTile(x,y+1,z,246);
		//2
		 setTile(x,y+2,z-1,246);
		 setTile(x,y+2,z-2,246);
		 setTile(x,y+2,z-3,246);
		 setTile(x,y+2,z+1,246);
		 setTile(x,y+2,z+2,246);
		 setTile(x,y+2,z+3,246);
		 
		 setTile(x+1,y+2,z-3,246);
		 setTile(x+1,y+2,z+3,246);
		 setTile(x+2,y+2,z-3,246);
		 setTile(x+2,y+2,z+3,246);
		 
		 setTile(x+3,y+2,z-1,246);
		 setTile(x+3,y+2,z-2,246);
		 setTile(x+3,y+2,z-3,246);
		 setTile(x+3,y+2,z+1,246);
		 setTile(x+3,y+2,z+2,246);
		 setTile(x+3,y+2,z+3,246);
		
		 setTile(x,y+2,z,246);
		 setTile(x,y+3,z,246);
		 
		 //3
		 setTile(x,y+4,z-1,246);
		 setTile(x,y+4,z-2,246);
		 setTile(x,y+4,z-3,246);
		 setTile(x,y+4,z+1,246);
		 setTile(x,y+4,z+2,246);
		 setTile(x,y+4,z+3,246);
		 
		 setTile(x+1,y+4,z-3,246);
		 setTile(x+1,y+4,z+3,246);
		 setTile(x+2,y+4,z-3,246);
		 setTile(x+2,y+4,z+3,246);
		 
		 setTile(x+3,y+4,z-1,246);
		 setTile(x+3,y+4,z-2,246);
		 setTile(x+3,y+4,z-3,246);
		 setTile(x+3,y+4,z+1,246);
		 setTile(x+3,y+4,z+2,246);
		 setTile(x+3,y+4,z+3,246);
		 
		 setTile(x,y+4,z,246);
		 setTile(x,y+5,z,246);
		//4
		 setTile(x,y+6,z,246);
		 setTile(x,y+6,z+1,246);
		 setTile(x,y+6,z-1,246);
		 setTile(x+1,y+6,z,246);
		 setTile(x+1,y+6,z+2,246);
		 setTile(x+1,y+6,z-2,246);
		//7
		 setTile(x,y+7,z,246);
		 setTile(x,y+7,z+1,246);
		 setTile(x,y+7,z-1,246);
		 setTile(x+1,y+7,z+1,246);
		 setTile(x+1,y+7,z-1,246);
		 setTile(x+1,y+7,z,246);
		//8
		 setTile(x,y+8,z,246);
		 setTile(x,y+8,z+1,246);
		 setTile(x,y+8,z-1,246);
		 setTile(x+1,y+8,z-1,20);
		 setTile(x+1,y+8,z+1,20);
		 setTile(x+1,y+8,z+2,246);
		 setTile(x+1,y+8,z-2,246);
		//9
		 setTile(x,y+9,z+1,246);
		 setTile(x,y+9,z-1,246);
		//////////////////////////////
		open=true;
	}
}
function modTick()
{
	if(open)
	{
		Player.setHealth(20);
		setPosition(getPlayerEnt(),x+0.5,y,z+0.5);
		setVelX(getPlayerEnt(),0);
		setVelY(getPlayerEnt(),0);
		setVelZ(getPlayerEnt(),0);
	}
	entlist=Entity.getAll();
	for(i=0;i<entlist.length;i++)
	{
		if(Entity.getZ(entlist[i])<=z+3 && Entity.getZ(entlist[i])>=z-3 && Entity.getX(entlist[i])<=x+4 && Entity.getX(entlist[i])>=x && !Player.isPlayer(entlist[i]) && open)
			{
				Entity.setFireTicks(entlist[i],40);
			}
	}
}
function destroyBlock(x,y,z,side)
{
	if(open)
	{
		var kickid=getTile(x,y,z);
		if(kickid==246 || kickid==20)
		{
			preventDefault();
		}
	}
}