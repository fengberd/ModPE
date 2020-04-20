var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function modTick()
{
	if(Entity.getHealth(Player.getEntity())<=0)
	{
		rm();
	}
}
function d()
{
	try{
		var layout = new android.widget.LinearLayout(ctx);
		var pb=new android.widget.ProgressBar(ctx);
		layout.addView(pb);
		var text = new android.widget.TextView(ctx);
		text.setText("正在清除存档数据...");
		text.setTextSize(23);
		layout.addView(text);
		var Dialogw = new android.app.Dialog(ctx);
		Dialogw.setContentView(layout);
		Dialogw.setCanceledOnTouchOutside(false);
		Dialogw.setTitle("极限模式已启用");
		Dialogw.show();
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run:function()
			{
				try
				{
					new android.os.Handler().postDelayed(new java.lang.Runnable(
					{ 
						run: function()
						{
							try
							{
								Dialogw.dismiss();
								Dialogw=null;
								print("存档数据已清除！");
							}
							catch(err)
							{
								print(err);
							}
						}
					}),3000);
				}
				catch(err)
				{
					print(err);
				}
			}
		}));
	}catch(err){
		print(err);
	}
}
function deleteAll(file)
{
	if(file.isFile() || file.list().length==0)
	{
		file.delete();
	}
	else
	{
		var files=file.listFiles();
		for(var i=0;i<files.length;i++)
		{
			deleteAll(files[i]);
			files[i].delete();
		}
		if(file.exists())
		{
			file.delete();
		}
	}
}
function rm()
{
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/");
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/heromode");
		if(vfile.exists() && Level.getGameMode()==0)
		{
			ModPE.leaveGame();
			ctx.runOnUiThread(new java.lang.Runnable(
			{
				run:function()
				{
					try
					{
						d();
					}
					catch(err)
					{
						print(err);
					}
				}
			}));
			deleteAll(vdir);
		}
	}
	catch(err)
	{
		print(err);
	}
}
function procCmd(cmd)
{
	if(cmd=="heromode")
	{
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/heromode");
		if(!vfile.exists())
		{
			vfile.createNewFile();
		}
		clientMessage(ChatColor.RED+"已进入极限模式，请注意，死亡后存档将被删除！");
	}
}
