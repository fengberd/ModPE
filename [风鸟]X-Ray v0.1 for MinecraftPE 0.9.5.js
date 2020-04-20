var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var xray={light:false,on:false,near:false,nearid:55,neara:0,nearb:0,nearc:0,gold:true,iron:true,coal:true,ll:true,diamond:true,redstone:true,lredstone:true,emerald:true,xray2:false};
var Menus_X_RayMenu;
var MainWindow=null;
var PlayerEntity=0;
Block.defineBlock(xray.nearid,"X-Ray_Block","glass",50,true);
Block.setLightLevel(xray.nearid,15);
Block.setShape(xray.nearid,0,3,0,0,0,0);
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function catchmsg(id,msg)
{
	function cth(msge)
	{
		selectDialog("X-Ray系统 - "+build+" - 出现错误",msge,android.R.drawable.stat_notify_error,"确定","退出存档","","ModPE.leaveGame()");
		clientMessage("X-Ray系统 - "+build+" - 出现错误\n"+msge);
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
function init()
{
	print("欢迎使用X-Ray透视系统\n作者:风鸟\n请尊重作者版权！");
	print("欢迎使用X-Ray透视系统\n作者:风鸟\n请尊重作者版权！");
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				MainWindow = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx);
				var button = new android.widget.Button(ctx);
				button.setText("XR");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg)
					{
						Menus_X_RayMenu=new Array(
							{kind:"text",text:"X-Ray透视系统",color:"",size:24},
							{kind:"text",text:"by 风鸟",color:"",size:16},
							{kind:"text",text:"v0.1 for MinecraftPE 0.9.5",color:android.graphics.Color.GREEN,size:16},
							{kind:"text",text:"进入存档/服务器前请勿打开靠近透视！退出存档/服务器前务必关闭靠近透视！退出后务必点击重置按钮！不按照规程操作后果自负！",color:android.graphics.Color.YELLOW,size:16},
							{kind:"check",text:"矿石发光",data:"xray light",torf:xray.light},
							{kind:"check",text:"开启透视",data:"xray on",torf:xray.on},
							{kind:"check",text:"靠近透视",data:"xray near",torf:xray.near},
							{kind:"check",text:"金矿石",data:"xray gold",torf:xray.gold},
							{kind:"check",text:"铁矿石",data:"xray iron",torf:xray.iron},
							{kind:"check",text:"煤矿石",data:"xray coal",torf:xray.coal},
							{kind:"check",text:"青金石矿石",data:"xray ll",torf:xray.ll},
							{kind:"check",text:"钻石矿石",data:"xray diamond",torf:xray.diamond},
							{kind:"check",text:"红石矿石",data:"xray redstone",torf:xray.redstone},
							{kind:"check",text:"发光的红石矿石",data:"xray lredstone",torf:xray.lredstone},
							{kind:"check",text:"绿宝石矿石",data:"xray emerald",torf:xray.emerald},
							{kind:"check",text:"新透视算法",data:"xray xray2",torf:xray.xray2},
							{kind:"button",text:"重置功能",data:"reset"});
						Menu_open(Menus_X_RayMenu);
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx, 52));
				MainWindow.setHeight(dip2px(ctx, 42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
			}
			catch(err)
			{
				catchmsg(10,err);
			}
		}
	}));
}
init();
function XRAY_Update()//Xray方块更新
{
	var list = [14,15,16,21,56,73,74,129];
	if(xray.on)
	{
		if(xray.gold)//金矿石
		{
			Block.setShape(14, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		else
		{
			Block.setShape(14,0,0,0,1,1,1);
		}
		if(xray.iron)//铁矿石
		{
			Block.setShape(15, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		else
		{
			Block.setShape(15,0,0,0,1,1,1);
		}
		if(xray.coal)//煤矿石
		{
			Block.setShape(16, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		else
		{
			Block.setShape(16,0,0,0,1,1,1);
		}
		if(xray.ll)//青金石矿石
		{
			Block.setShape(21, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		else
		{
			Block.setShape(21,0,0,0,1,1,1);
		}
		if(xray.diamond)//钻石矿石
		{
			Block.setShape(56, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		else
		{
			Block.setShape(56,0,0,0,1,1,1);
		}
		if(xray.redstone)//红石矿石
		{
			Block.setShape(73, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		else
		{
			Block.setShape(73,0,0,0,1,1,1);
		}
		if(xray.lredstone)//发光的红石矿石
		{
			Block.setShape(74, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		else
		{
			Block.setShape(74,0,0,0,1,1,1);
		}
		if(xray.emerald)//绿宝石矿石
		{
			Block.setShape(129, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		else
		{
			Block.setShape(129,0,0,0,1,1,1);
		}
	}
	else
	{
		for (i = 0; i < list.length; i++)
		{
			Block.setShape(list[i],0,0,0,1,1,1);
		}
	}
	if(xray.light)//矿石发光
	{
		for (i = 0; i < list.length; i++)
		{
			Block.setLightLevel(list[i], 15);
		}
	}
	else
	{
		for (i = 0; i < list.length; i++)
		{
			Block.setLightLevel(list[i], 0);
		}
	}
}
function useCode(code)
{
	code=code.split(" ");
	switch(code[0])
	{
	case"xray":
		switch(code[1])
		{
		case"on":
			xray.on=!xray.on;
			break;
		case"near":
			xray.near=!xray.near;
			xray_near();
			print("如果是本地游戏，退存档前记得关");
			break;
		case"xray2":
			xray.xray2=!xray.xray2;
			if(xray.xray2)
			{
				Block.defineBlock(1, "Stone", ["glass"], 1, false, 0);
				Block.setRenderLayer(1, 1);
			}
			else
			{
				Block.defineBlock(1, "Stone", ["stone"], 1, false, 0);
				Block.setRenderLayer(1, 0);
			}
			break;
		case"gold":
			xray.gold=!xray.gold;
			break;
		case"iron":
			xray.iron=!xray.iron;
			break;
		case"coal":
			xray.coal=!xray.coal;
			break;
		case"ll":
			xray.ll=!xray.ll;
			break;
		case"diamond":
			xray.diamond=!xray.diamond;
			break;
		case"redstone":
			xray.redstone=!xray.redstone;
			break;
		case"lredstone":
			xray.lredstone=!xray.lredstone;
			break;
		case"emerald":
			xray.emerald=!xray.emerald;
			break;
		case"light":
			xray.light=!xray.light;
			break;
		}
		print("请调整一次能见度并恢复");
		XRAY_Update();
		break;
	case"reset":
		xray.near=false,xray.neara=0,xray.nearb=0,xray.nearc=0;
		break;
	}
}
function xray_near()
{
	if(xray.near)
	{
		var nxray=new java.lang.Thread(new java.lang.Runnable(
		{
			run: function()
			{
				try
				{
					PlayerEntity=Player.getEntity();
					if(PlayerEntity>=1)
					{
						var x=Entity.getX(PlayerEntity),y=Entity.getY(PlayerEntity),z=Entity.getZ(PlayerEntity);
						if(getTile(xray.neara,xray.nearb,xray.nearc)==xray.nearid)
						{
							setTile(xray.neara,xray.nearb,xray.nearc,0);
						}
						if(getTile(x,y,z)==0)
						{
							setTile(x,y,z,xray.nearid);
						}
						xray.neara=x,xray.nearb=y,xray.nearc=z;
						xray_near();
					}
					else
					{
						xray.near=false;
					}
				}
				catch(err)
				{
					catchmsg(10,err);
				}
			}
		}));
		nxray.sleep(150);
		nxray.start();
	}
	else
	{
		if(getTile(xray.neara,xray.nearb,xray.nearc)==xray.nearid)
		{
			setTile(xray.neara,xray.nearb,xray.nearc,0);
		}
	}
}
function selectDialog(title,text,icon,button1text,button2text,button1code,button2code)
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
				catchmsg(10,err);
			}
		}
	}));
}
//菜单部分感谢风鸟的超级辅助技术支持233333
//**********************************************************打开菜单**********************************************************
function Menu_open(MenuData)//打开新菜单
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
			}
		}
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
		var scrollview = new android.widget.ScrollView(ctx);
		var mlayout = new android.widget.RelativeLayout(ctx); 
		scrollview.setPadding(dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5));
		scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
		scrollview.addView(layout);
		mlayout.addView(scrollview);
		mlayout.addView(closebutton);
		menu.setContentView(mlayout);
		menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3);
		menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
		menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
		menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
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
			useCode(data);
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
			useCode(data);
		}
	});
	layout.addView(Check);
}
