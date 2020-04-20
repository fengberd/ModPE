/******************************************************
模块：选择对话框
调用：selectDialog(标题,提示信息,图标,按钮1文本,按钮2文本);
图标：
		前缀：android.R.drawable.
		后接：framework.apk\res\drawable-hdpi\内图标无后缀文件名
******************************************************/
function selectDialog(title,text,icon,button1text,button2text)
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
				builder.setPositiveButton(button1text, new android.content.DialogInterface.OnClickListener()
				{
					onClick:function()
					{//此处插入按钮1按下事件
						dialog.dismiss();
					}
				});
				builder.setNegativeButton(button2text, new android.content.DialogInterface.OnClickListener()
				{
					onClick: function()
					{//此处插入按钮2按下事件
						dialog.dismiss();
					}
				});
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


