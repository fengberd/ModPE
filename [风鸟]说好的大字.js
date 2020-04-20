var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var MainWindow=null,text=null;
var size=20;//字号
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function showAV()
{
	ctx.runOnUiThread(new java.lang.Runnable({ run: function()
	{
		try{
			MainWindow = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			text = new android.widget.TextView(ctx);
			text.setTextSize(size);
			text.setText("这里可以显示一些奇怪的东西");
			layout.addView(text);
			MainWindow.setContentView(layout);
			MainWindow.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3);
			MainWindow.setHeight(dip2px(ctx, 50));
			MainWindow.setTouchable(false);
			MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
		}catch(err){
			print(err);
		}
	}}));
}
function dismissAV()
{
	ctx.runOnUiThread(new java.lang.Runnable({ run: function()
	{
		try{
			if(MainWindow!=null)
			{
				MainWindow.dismiss();
				MainWindow=null;
				text=null;
			}
		}catch(err){
			print(err);
		}
	}}));
}
function setAV(htmlCode)
{
	ctx.runOnUiThread(new java.lang.Runnable({ run: function()
	{
		try{
			if(MainWindow!=null)
			{
				text.setText(android.text.Html.fromHtml(htmlCode));
			}
		}catch(err){
			print(err);
		}
	}}));
}
function newLevel()
{
	showAV();
}
function leaveGame()
{
	dismissAV();
}
var i=0;
function modTick()
{
	i++;
	setAV("<font color=red>红</font><font color=yellow>黄</font><font color=green>233</font><font color=blue>"+i+"</font>");
}
