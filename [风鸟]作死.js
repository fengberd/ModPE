//本js由风鸟制作！严禁盗版或修改版权！！
var ok=false;
var first=true;
var start=false;
var now=false;
var i=0;
var msg="\n作死JS\n由风鸟制作，盗版杀无赦！！";
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),BtnWindow = null;
function dip2px(ctx, dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function modTick()
{
	if(start && i>=10)
	{
		if(now)
		{
			ModPE.setFov(250);
		}
		else
		{
			ModPE.resetFov();
		}
		now=!now;
		i=0;
	}
	i++;
}
function newLevel()
{
	if(first)
	{
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
				button.setText("MakeDie!");//按钮标题
				button.setTextColor(android.graphics.Color.GREEN);
				button.setOnClickListener(new android.view.View.OnClickListener(
				{
					onClick: function(viewarg)
					{
						buttonOnClick();//按下事件
					}
				}));
				layout.addView(button);
				BtnWindow.setContentView(layout);
				BtnWindow.setWidth(dip2px(ctx, 65));//宽度
				BtnWindow.setHeight(dip2px(ctx, 60));//高度
				BtnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				BtnWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT  | android.view.Gravity.TOP,50,0);
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
function buttonOnClick()
{
	if(!ok)
	{
		print("请切换到第三人称视角！");
		print("请切换到第三人称视角！");
		print("请切换到第三人称视角！");
		ok=true;
	}
	else
	{
		start=true;
	}
}