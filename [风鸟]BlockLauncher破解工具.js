//本js由风鸟制作！严禁盗版或修改版权！！
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var sm=net.zhuoweizhang.mcpelauncher.ScriptManager;
var pm=net.zhuoweizhang.mcpelauncher.PatchManager;
var first=true;
var msg="BlockLauncher破解工具\n由风鸟制作，盗版杀无赦！！";
var MainWindow=null;
function newLevel()
{
	if(first)
	{
		print(msg);
		first=false;
	}
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				clip=ctx.getSystemService(ctx.CLIPBOARD_SERVICE);
				MainWindow = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx);
				var button = new android.widget.Button(ctx);
				button.setText("P");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick:function(viewarg)
					{
						var a=new Array(
							{kind:"text",text:"BlockLauncher破解工具",color:"",size:24},
							{kind:"text",text:"by 风鸟",color:"",size:16},
							{kind:"text",text:"仅限内部使用严禁外传！",color:android.graphics.Color.RED,size:18},
							{kind:"button",text:"破解ModPE Script限制",data:"MODPE_CRACK"});
							//{kind:"button",text:"破解Patch限制",data:"PATCH_CRACK"});
							Menu_open(a);
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx, 42));
				MainWindow.setHeight(dip2px(ctx, 42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 100);
			}
			catch(err)
			{
				catchmsg(10,err);
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
			try
			{
				if(MainWindow != null)//关闭主按钮
				{
					MainWindow.dismiss();
					MainWindow = null;
				}
			}
			catch(err)
			{
				catchmsg(13,err);
			}
		}
	}));
}
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function catchmsg(id,msg)//GUI报错
{
	function cth(msge)
	{
		selectDialog("BlockLauncher破解工具 - "+build+" - 出现错误",msge,android.R.drawable.stat_notify_error,"确定","退出存档","","ModPE.leaveGame()");
		clientMessage("BlockLauncher破解工具 - "+build+" - 出现错误\n"+msge);
	}
	switch(id)
	{
	case 10:
		cth("GUI显示出错(10)\n"+msg);
		break;
	case 11:
		cth("Eval执行错误(11)\n"+msg);
		break;
	case 12:
		cth("文件流出错(12)\n"+msg);
		break;
	case 13:
		cth("关闭组件出错(13)\n"+msg);
		break;
	default:
		cth("未知错误("+id+")\n"+msg);
		break;
	}
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
function selectDialog(title,text,icon,button1text,button2text,button1code,button2code)
{
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
					{
						if(button1code!="" && button1code!=undefined)
						{
							eval(button1code);
						}
						dialog.dismiss();
					}
				});
				builder.setNegativeButton(button2text, new android.content.DialogInterface.OnClickListener()
				{
					onClick: function()
					{
						if(button2code!="" && button2code!=undefined)
						{
							eval(button2code);
						}
						dialog.dismiss();
					}
				});
				var dialog = builder.create();
				dialog.show();
			}
			catch(err)
			{
				catchmsg(12,err);
			}
		}
	}));
}
function CM(msg)
{
	clientMessage(msg);
}
function writeText(pth,data)
{
	try
	{
		var pathh=pth.split("/");
		var path="";
		for(i=0;i<pathh.length;i++)
		{
			if(i!=pathh.length-1)
			{
				path="/"+pathh[i];
			}
		}
		var dir = new java.io.File(path);
		if(!dir.exists())
		{
			dir.mkdirs();
		}
		var file=new java.io.File(pth);
		var Bytes=new java.lang.String(data).getBytes();
		if(file.exists())
		{
			if(file.isFile())
			{
				var writer = new java.io.FileOutputStream(file);
				writer.write(Bytes);
				writer.close();
				return true;
			}
			else
			{
				return false;
			}
		}
		else
		{
			file.createNewFile();
			var writer = new java.io.FileOutputStream(file);
			writer.write(Bytes);
			writer.close();
			return true;
		}
	}
	catch(err)
	{
		catchmsg(12,err);
		return false;
	}
}
function switchData(data)
{
	Data=data.split(" ");
	switch(Data[0])
	{
	case"MODPE_CRACK":
		var a=new Array(
			{kind:"text",text:"破解ModPE Script限制",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:"仅限内部使用严禁外传！",color:android.graphics.Color.RED,size:18});
		var path=ctx.getDir("modscripts", 0);
		var list = new java.io.File(path).list();
		for(i=0;i<list.length;i++)
		{
			a.push({kind:"check",text:list[i],data:"checkmodpe "+path+"/"+list[i],torf:sm.isEnabled(new java.io.File(list[i]))});
		}
		Menu_open(a);
		break;
	case"PATCH_CRACK":
		var a=new Array(
			{kind:"text",text:"破解Patch限制",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:"仅限内部使用严禁外传！",color:android.graphics.Color.RED,size:18});
		var path=ctx.getDir("ptpatches", 0);
		var list = new java.io.File(path).list();
		for(i=0;i<list.length;i++)
		{
			a.push({kind:"check",text:list[i],data:"checkpatch "+path+"/"+list[i],torf:pm.isEnabled(new java.io.File(list[i]))});
		}
		/*
		folders.add(new File(Environment.getExternalStorageDirectory(),
				"Android/data/com.joshuahuelsman.pockettool/Patches"*/
		/*path=new android.os.Environment.getExternalStorageDirectory()+"/Android/data/com.snowbound.pockettool.free/Patches";
		list = new java.io.File(path).list();
		for(i=0;i<list.length;i++)
		{
			a.push({kind:"check",text:list[i],data:"checkpatch "+path+"/"+list[i],color:android.graphics.Color.GREEN,torf:pm.isEnabled(new java.io.File(list[i]))});
		}*/
		Menu_open(a);
		break;
	case"checkmodpe":
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function()
			{
				try
				{
					sm.setEnabled(new java.io.File(Data[1]),!sm.isEnabled(new java.io.File(Data[1])));
				}
				catch(err)
				{
					catchmsg(-1,err);
				}
			}
		}));
		break;
	case"checkpatch":
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function()
			{
				try
				{
					pm.setEnabled(new java.io.File(Data[1]),!pm.isEnabled(new java.io.File(Data[1])));
				}
				catch(err)
				{
					catchmsg(-1,err);
				}
			}
		}));
		break;
	}
}
//**********************************************************打开菜单**********************************************************
function Menu_open(MenuData)
{
	Menu_make(MenuData).showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}
function Menu_make(MenuData,a)//打开新菜单
{
	try{
		var menu = new android.widget.PopupWindow();
		menu.setFocusable(true);
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
		for(var i=0;i<MenuData.length;i++)
		{
			switch(MenuData[i].kind)
			{
			case"text":
				Menu_addText(layout,textParams,MenuData[i].text,MenuData[i].color,MenuData[i].size);
				break;
			case"button":
				Menu_addButton(layout, MenuData[i].text, MenuData[i].data,MenuData[i].color,MenuData[i].size);
				break;
			case"check":
				Menu_addCheck(layout,MenuData[i].text,MenuData[i].data,MenuData[i].torf,MenuData[i].color,MenuData[i].size);
				break;
			default:
				Menu_addText(layout,textParams,"[组件不存在]",android.graphics.Color.RED,16);
				break;
			}
		}
		if(a!="unclose")
		{
			var closebutton = new android.widget.Button(ctx);
			var btnParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
			closebutton.setLayoutParams(btnParams);
			closebutton.setText("X");
			closebutton.setWidth(18);
			closebutton.setHeight(18);
			closebutton.setOnClickListener(new android.view.View.OnClickListener(
			{
				onClick: function()
				{
					menu.dismiss();
					menu=null;
				}
			}));
		}
		var scrollview = new android.widget.ScrollView(ctx);
		var mlayout = new android.widget.RelativeLayout(ctx); 
		scrollview.setPadding(dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5));
		scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
		scrollview.addView(layout);
		mlayout.addView(scrollview);
		if(a!="unclose")
		{
			mlayout.addView(closebutton);
		}
		menu.setContentView(mlayout);
		menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3);
		menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
		menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
		return menu;
		}catch(err){
			catchmsg(10,err);
		}
}
function Menu_addText(layout,Params,text,color,size)//添加文本
{
	var Text = new android.widget.TextView(ctx);
	Text.setTextSize(size);
	if(color!="" && color!=undefined)
	{
		Text.setTextColor(color);
	}
	Text.setText(text);
	Text.setLayoutParams(Params);
	layout.addView(Text);
}
function Menu_addButton(layout,text,data,color,size)//添加按钮
{
	var button = new android.widget.Button(ctx);
	button.setText(text);
	if(color!="" && color!=undefined)
	{
		button.setTextColor(color);
	}
	if(size!=undefined)
	{
		button.setTextSize(size);
	}
	//button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	button.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(){
			switchData(data);
		}
	}));
	layout.addView(button);
}
function Menu_addCheck(layout,text,data,isch,color,size)//添加选择框
{
	var Check = new android.widget.CheckBox(ctx);
	Check.setText(text);
	Check.setChecked(isch);
	if(color!="" && color!=undefined)
	{
		Check.setTextColor(color);
	}
	if(size!=undefined)
	{
		Check.setTextSize(size);
	}
	//Check.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	Check.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
		onCheckedChanged: function(){
			switchData(data);
		}
	});
	layout.addView(Check);
}
