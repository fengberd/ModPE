//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="JS\n由风鸟制作，盗版杀无赦！！";
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),BtnWindow = null;
function dip2px(ctx, dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
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
				button.setText("Text");//按钮标题
				button.setTextColor(android.graphics.Color.WHITE);
				/* 按钮文本颜色参数：
						TRANSPARENT：透明
						RED：红色
						GREEN：绿色
						BLUE：蓝色
						BLACK：黑色
						YELLOW：黄色
						WHITE：白色
				*/
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
				BtnWindow.setHeight(dip2px(ctx, 40));//高度
				BtnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				/* 背景窗口颜色参数：
						TRANSPARENT：透明
						RED：红色
						GREEN：绿色
						BLUE：蓝色
						BLACK：黑色
						YELLOW：黄色
						WHITE：白色
				*/
				BtnWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT  | android.view.Gravity.TOP,0,0);
				/* 第一参数：
						LEFT：左边
						RIGHT：右边
					第二参数：
						TOP：顶部
						BOTTOM：下面
					第三参数：
						X轴偏移
					第四参数：
						Y轴偏移
				*/
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
function buttonOnClick()//按钮按下
{

}
