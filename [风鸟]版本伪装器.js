//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n版本伪装器JS\n输入/version 或/v 后在弹出的Dialog内输入版本点确定即可\n由风鸟制作，盗版杀无赦！！";
var version="v0.10.0 alpha build1";
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),BtnWindow = null,text=null;
/*ctx.runOnUiThread(new java.lang.Runnable(
{
	run:function()
	{
		try
		{*/
			text = new android.widget.TextView(ctx);
			text.setTextSize(20);
			text.setGravity(android.view.Gravity.CENTER);
			text.setTextColor(android.graphics.Color.WHITE);
			var typeface=android.graphics.Typeface.createFromFile(new java.io.File("/sdcard/games/com.mojang/minecraftpe/minecraft.ttf"));
			text.setTypeface(typeface);
		/*}
		catch(err)
		{
			clientMessage("出现错误:\nGUI错误(10)\n"+err);
		}
	}
}));*/
function dip2px(ctx, dips)
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
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
				text.setText(version);
				layout.addView(text);
				BtnWindow.setContentView(layout);
				BtnWindow.setWidth(dip2px(ctx, 300));
				BtnWindow.setHeight(dip2px(ctx, 40));
				BtnWindow.setTouchable(false);
				BtnWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.TOP  | android.view.Gravity.CENTER,0,0);
			}
			catch(err)
			{
				clientMessage("出现错误:\nGUI错误(10)\n"+err);
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
	 		if(BtnWindow != null)
			{
				BtnWindow.dismiss();
				BtnWindow = null;
			}
		}
	}));
}
function procCmd(cmd)
{
	if(cmd=="version" || cmd=="v")
	{
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function() 
			{
		 		Dialog();
			}
		}));
	}
}
function Dialog()
{
	try{
		var layout = new android.widget.LinearLayout(ctx);
		var btn1 = new android.widget.Button(ctx);
		var btn2 = new android.widget.Button(ctx);
		var Text1=null;
		btn1.setText("确定");
		btn2.setText("取消");
		Text1=new android.widget.EditText(ctx);
		Text1.setHint("请输入要伪装的版本号，留空关闭");
		Text1.setText(version);
		layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		layout.addView(Text1);
		layout.addView(btn1);
		layout.addView(btn2);
		var scrollview = new android.widget.ScrollView(ctx);
		//scrollview.setPadding(dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5));
		scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
		scrollview.addView(layout);
		var mlayout = new android.widget.RelativeLayout(ctx); 
		mlayout.addView(scrollview);
		var Dialogw = new android.app.Dialog(ctx);
		Dialogw.setContentView(mlayout);
		Dialogw.setTitle(title);
		btn1.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			text.setText(Text1.getText());
			Dialogw.dismiss();
		}});
		btn2.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			Dialogw.dismiss();
		}
		});
		Dialogw.show();
	}catch(err){
		clientMessage("出现错误:\nGUI错误(10)\n"+err);
	}
}
