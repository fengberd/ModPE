//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n游戏内截图JS\n一键快速截图，无需点击启动器图标\n由风鸟制作，盗版杀无赦！！";
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),BtnWindow = null;
function dip2px(ctx, dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel()
{
	if(first)
	{
		print(msg);
		first=false;
	}
	ctx.runOnUiThread(new java.lang.Runnable({run:function(){try{BtnWindow = new android.widget.PopupWindow();var layout = new android.widget.RelativeLayout(ctx);var button = new android.widget.Button(ctx);button.setText("截图");button.setOnClickListener(new android.view.View.OnClickListener({onClick: function(viewarg){takeScreenshot();}}));layout.addView(button);BtnWindow.setContentView(layout);BtnWindow.setWidth(dip2px(ctx, 65));BtnWindow.setHeight(dip2px(ctx, 40));BtnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));BtnWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT  | android.view.Gravity.TOP,48,0);}catch(err){print("出现错误:\n无法显示按钮(10)\n"+err);print("出现错误:\n无法显示按钮(10)\n"+err);print("出现错误:\n无法显示按钮(10)\n"+err);}}}));
}
function takeScreenshot()
{
	ModPE.takeScreenshot("FENGberd-Screenshot");
}
function leaveGame()
{
	ctx.runOnUiThread(new java.lang.Runnable({
	run: function() {
	 	if(BtnWindow != null){
			BtnWindow.dismiss();
			BtnWindow = null;
		}
		}}));
}