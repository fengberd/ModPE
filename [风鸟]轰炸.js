//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n轰炸JS\n点击\"♂\"按钮可以启动轰炸，启动后单击按钮可关闭\n由风鸟制作，盗版杀无赦！！";
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
				button.setOnClickListener(new android.view.View.OnClickListener(
				{
					onClick: function(viewarg)
					{
						Level.spawnMob(fp(Player.getX()),fp(Player.getY())-2,fp(Player.getZ()),65);
					}
				}));
				layout.addView(button);
				BtnWindow.setContentView(layout);
				BtnWindow.setWidth(dip2px(ctx, 60));//宽度
				BtnWindow.setHeight(dip2px(ctx, 60));//高度
				BtnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				BtnWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT  | android.view.Gravity.TOP,0,30);
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
function fp(pos)
{
	return pos;
}
