//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var i=0;
var fireing=false;
var msg="\n机关炮JS\n长按左下角\"♂\"按钮可以启动机关炮，启动后单击按钮可关闭，配合超级辅助的爆炸箭功能或爆炸箭js使用效果更佳\n由风鸟制作，部分算法引用自快速建造JS，盗版杀无赦！！";
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),BtnWindow = null;
var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);//震♂动♂器

function dip2px(ctx, dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 
function newLevel()
{
	if(first)
	{
		print(msg);
		print(msg);
		first=false;
	}
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run:function()
		{
			try
			{
				BtnWindow = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx);
				var button = new android.widget.Button(ctx);
				button.setText("♂");//按钮标题
				button.setTextColor(android.graphics.Color.WHITE);
				button.setOnLongClickListener(new android.view.View.OnLongClickListener(
				{
					onLongClick: function(viewarg)
					{
						fireing=true; 
						print("机关炮已启动！");
						vibrator.vibrate(50);
						return true;
					}
				}));
				button.setOnClickListener(new android.view.View.OnClickListener(
				{
					onClick: function(viewarg)
					{
						if(fireing)
						{
							fireing=false;
							print("机关炮已关闭");
						}
					}
				}));
				layout.addView(button);
				BtnWindow.setContentView(layout);
				BtnWindow.setWidth(dip2px(ctx, 60));//宽度
				BtnWindow.setHeight(dip2px(ctx, 60));//高度
				BtnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				BtnWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.LEFT  | android.view.Gravity.BOTTOM,0,0);
			}
			catch(err)
			{
				print("出现错误:\n无法显示按钮(10)\n"+err);
				print("出现错误:\n无法显示按钮(10)\n"+err);
				print("出现错误:\n无法显示按钮(10)\n"+err);
			}
		}
	}));
}
function leaveGame()
{
	fireing=false;
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function() 
		{
	 		if(BtnWindow != null){
				BtnWindow.dismiss();
				BtnWindow = null;
			}
		}
	}));
}
function modTick()
{
	i++
	if(fireing && i>=5)
	{
		Arrow();
		i=0;
	}
}
function Arrow()
{
	var a=(getYaw()%360)*Math.PI/180,b=getPitch()*Math.PI/180;
	var xv=-Math.sin(a)*Math.cos(b),yv=-Math.sin(b),zv=Math.cos(a)*Math.cos(b);
	var Entityid=Level.spawnMob(Player.getX()+xv*2.1,Player.getY()+yv*2.1,Player.getZ()+zv*2.1,80);
	Entity.setVelX(Entityid,xv*3);
	Entity.setVelY(Entityid,yv*3);
	Entity.setVelZ(Entityid,zv*3);
}
