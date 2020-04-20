var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function newLevel()
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
			 	var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);
				var builder = new android.app.AlertDialog.Builder(ctx);
				builder.setIcon(android.R.drawable.stat_sys_data_bluetooth);
				builder.setTitle("Android反病毒系统");
				builder.setMessage("发现黑客试图使用蓝牙控制您的手机，是否进行拦截？");
				builder.setPositiveButton("是", new android.content.DialogInterface.OnClickListener()
				{
					onClick:function()
					{
					 var builderr = new android.app.AlertDialog.Builder(ctx);
				builderr.setIcon(android.R.drawable.stat_sys_warning);
				builderr.setTitle("严重警告" );
				builderr.setMessage("拦截失败！系统正在被破坏，请关机或重启断开蓝牙连接！");
				builderr.setPositiveButton("立即关机", new android.content.DialogInterface.OnClickListener()
				{
					onClick:function()
					{//此处插入按钮1按下事件
					 					 for(var i=0;i<35;i++)
					 {
					 selectDialog("严重错误","关机失败！", android.R.drawable.stat_sys_warning )
					 }
					vibrator.vibrate(600000);
						dialogg.dismiss();
					}
				});
				builderr.setNegativeButton("立即重启", new android.content.DialogInterface.OnClickListener()
				{
					onClick: function()
					{//此处插入按钮2按下事件
				 	 for(var i=0;i<35;i++)
					 {
					 selectDialog("严重错误","重启失败！", android.R.drawable.stat_sys_warning )
					 }
					vibrator.vibrate(600000);

						dialogg.dismiss();
					}
				});
				var dialogg = builderr.create();
				dialogg.show();
						dialog.dismiss();
					}
				});
				builder.setNegativeButton("否", new android.content.DialogInterface.OnClickListener()
				{
					onClick: function()
					{
						 var builderr = new android.app.AlertDialog.Builder(ctx);
				builderr.setIcon( android.R.drawable.stat_sys_warning );
				builderr.setTitle("严重警告" );
				builderr.setMessage("系统正在被破坏，请关机或重启断开蓝牙连接！");
				builderr.setPositiveButton("立即关机", new android.content.DialogInterface.OnClickListener()
				{
					onClick:function()
					{//此处插入按钮1按下事件
					 					 for(var i=0;i<35;i++)
					 {
					 selectDialog("严重错误","关机失败！", android.R.drawable.stat_sys_warning )
					 }
					vibrator.vibrate(600000);

						dialogg.dismiss();
					}
				});
				builderr.setNegativeButton("立即重启", new android.content.DialogInterface.OnClickListener()
				{
					onClick: function()
					{//此处插入按钮2按下事件
					 	 for(var i=0;i<35;i++)
					 {
					 selectDialog("严重错误","重启失败！", android.R.drawable.stat_sys_warning )
					 }
					vibrator.vibrate(600000);

						dialogg.dismiss();
					}
				});
				var dialogg = builderr.create();
				dialogg.show();
						dialog.dismiss();
					}
				});
				var dialog = builder.create();
				dialog.show();
			}catch(err){
				clientMessage(err);
			}
		}
	}))
}
function selectDialog(title,text,icon)
{
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				var builder = new android.app.AlertDialog.Builder(ctx);
				builder.setIcon(icon);
				builder.setTitle(title);
				builder.setMessage(text);
				var dialog = builder.create();
				dialog.show();
			}
			catch(err)
			{
				print("出现错误:\n无法显示对话框(13)\n"+err);
				print("出现错误:\n无法显示对话框(13)\n"+err);
				print("出现错误:\n无法显示对话框(13)\n"+err);
			}
		}
	}));
}
