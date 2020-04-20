/*本js由风鸟制作！严禁盗版或修改版权！！
BUG反馈或建议：
	搜索群“风鸟神教”加入（群验证：超级辅助-Server bug反馈）
	请在反馈时标明Build号以及错误现象、出现方式
*/
/*
备忘：
	你看这干嘛，自己研究
	最后编辑于：2014-6-3,23:02
	其他功能下个版本再说，写作业去
*/
//********************************变量声明区开始********************************
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var build="Build #0003";
var Bugmsg="BUG反馈或建议：（答案：呵呵）\n搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）\n到百度贴吧“FENGberd吧”的超级辅助内测贴提出\n请在反馈时标明Build号以及错误现象、出现方式";//BUG反馈信息
var FENGberdmsg="\n超级辅助-Server\n作者：风鸟\n内测版严禁外传"//版权信息
var xray={light:false,on:false,gold:true,iron:true,coal:true,ll:true,diamond:true,redstone:true,lredstone:true,xray2:false};//透视
var backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
var sneaking=false;//潜行模式
//GUI区
var MainWindow = null;
var Menus_MainMenu;
var Menus_SpeedMenu;
var Menus_X_RayMENU;
var Menus_PlayerMenu;
var Menus_TpMenu;
var Menus_ChatMenu;
//********************************变量声明区结尾********************************

//********************************自定义函数区********************************
function save(name,Data)//保存数据
{
	ModPE.saveData(Level.getWorldDir()+"FENGberdCheaterServer"+name,Data);
}
function load(name)//读取数据
{
	return ModPE.readData(Level.getWorldDir()+"FENGberdCheaterServer"+name);
}
function catchmsg(id,msg)//GUI报错
{
	/*
	按钮：10
	菜单：11
	文本：12
	对话框：13
	调试：14
	*/
	switch(id)
	{
	case 10:
		print("出现错误:\n无法显示按钮(10)\n"+msg);
		print("出现错误:\n无法显示按钮(10)\n"+msg);
		print("出现错误:\n无法显示按钮(10)\n"+msg);
		break;
	case 11:
		print("出现错误:\n无法显示菜单(11)\n"+msg);
		print("出现错误:\n无法显示菜单(11)\n"+msg);
		print("出现错误:\n无法显示菜单(11)\n"+msg);
		break;
	case 12:
		print("出现错误:\n无法显示文本(12)\n"+msg);
		print("出现错误:\n无法显示文本(12)\n"+msg);
		print("出现错误:\n无法显示文本(12)\n"+msg);
		break;
	case 13:
		print("出现错误:\n无法显示对话框(13)\n"+msg);
		print("出现错误:\n无法显示对话框(13)\n"+msg);
		print("出现错误:\n无法显示对话框(13)\n"+msg);
		break;
	case 14:
		print("调试出错(14)\n"+msg);
		print("调试出错(14)\n"+msg);
		print("调试出错(14)\n"+msg);
		break;
	}
}
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function Susecmd(cmd)//核心函数
{
	var Data = cmd.split(" ");
	switch(Data[0])
	{
	/////////////////////////////////////////////////////////////////发送消息
	case"sendchat":
		var tmpt="";
		for(i=1;i<Data.length;i++)
		{
			if(i!=Data.length-1)
			{
				tmpt=tmpt+Data[i]+" ";
			}
			else
			{
				tmpt=tmpt+Data[i];
			}
		}
		if(tmpt[0]!="/")
		{
			tmpt=tmpt+" (消息来自超级辅助JS)";
		}
		Server.sendChat(tmpt);
		break;
	/////////////////////////////////////////////////////////////////变速
	case"speed":
		if(Data[1]>0)
		{
			ModPE.setGameSpeed(Data[1]*20);
			print("变速为"+Data[1]+"倍");
		}
		else
		{
			print("参数错误");
		}
		break;
	/////////////////////////////////////////////////////////////////设置家
	case"sethome":
		if(Data.length==2)
		{
			save(Data[1]+"homex",Entity.getX(Server.getAllPlayers()[0]));
			save(Data[1]+"homey",Entity.getY(Server.getAllPlayers()[0]));
			save(Data[1]+"homez",Entity.getZ(Server.getAllPlayers()[0]));
			save(Data[1]+"usehome","true");
			print("已设置家:"+Data[1]);
		}
		break;
	/////////////////////////////////////////////////////////////////潜行模式
	case"sneaking":
		if(!sneaking)
		{
			Entity.setSneaking(PlayerEntity,true);
			sneaking=true;
		}
		else
		{
			Entity.setSneaking(PlayerEntity,false);
			sneaking=false;
		}
		break;
	/////////////////////////////////////////////////////////////////返回上次传送位置
	case"back":
		if(backt)
		{
			var tx=Entity.getX(Server.getAllPlayers()[0]);
			var ty=Entity.getY(Server.getAllPlayers()[0]);
			var tz=Entity.getZ(Server.getAllPlayers()[0]);
			setPosition( Server.getAllPlayers()[0] ,backx,backy,backz);
			backx=tx;
			backy=ty;
			backz=tz;
			print("返回成功");
		}
		else
		{
			print("没有进行过传送");
		}
		break;
	/////////////////////////////////////////////////////////////////重置
	case"reset":
		sneaking=false;
		break;
	/////////////////////////////////////////////////////////////////设置传送点
	case"setwarp":
		if(Data.length==2)
		{
			save(Data[1]+"warpx",Entity.getX(Server.getAllPlayers()[0]));
			save(Data[1]+"warpy",Entity.getY(Server.getAllPlayers()[0]));
			save(Data[1]+"warpz",Entity.getZ(Server.getAllPlayers()[0]));
			save(Data[1]+"usewarp","true");
			print("已设置"+Data[1]);
		}
		else
		{
			print("参数错误");
		}
		break;
	/////////////////////////////////////////////////////////////////传送到传送点
	case"warp":
		if(Data.length==2)
		{
			if(load(Data[1]+"usewarp")=="true")
			{
				backt=true;
				backx=Entity.getX(Server.getAllPlayers()[0]);
				backy=Entity.getY(Server.getAllPlayers()[0]);
				backz=Entity.getZ(Server.getAllPlayers()[0]);
				setPosition(Server.getAllPlayers()[0],load(Data[1]+"warpx"),load(Data[1]+"warpy"),load(Data[1]+"warpz"));
				print("成功传送到"+Data[1]);
			}
			else
			{
				print("不存在该传送点");
			}
		}
		else
		{
			print("参数错误");
		}
		break;
	/////////////////////////////////////////////////////////////////传送到家
	case"home":
		if(Data.length==2)
		{
			if(load(Data[1]+"usehome")=="true")
			{
			backt=true;
			backx=Entity.getX(Server.getAllPlayers()[0]);
			backy=Entity.getY(Server.getAllPlayers()[0]);
			backz=Entity.getZ(Server.getAllPlayers()[0]);
			setPosition( Server.getAllPlayers()[0] ,load(Data[1]+"homex"),load(Data[1]+"homey"),load(Data[1]+"homez"));
			print("成功传送到家:"+Data[1]);
			}
			else
			{
				print("还没有设置这个家");
			}
		}
		else
		{
			print("参数错误");
		}
		break;
	/////////////////////////////////////////////////////////////////透视
	case"xray":
		switch(Data[1])
		{
		case"on":
			xray.on=!xray.on;
			break;
		case"xray2":
			xray.xray2=!xray.xray2;
			if(xray.xray2)
			{
				Block.defineBlock(1, "Stone", ["stone"], 1, true, 35);
			}
			else
			{
				Block.defineBlock(1, "Stone", ["stone"], 1, false, 0);
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
		case"light":
			xray.light=!xray.light;
			break;
		}
		print("请进行一次能见度更新");
		XRAY_Update();
		break;
	/////////////////////////////////////////////////////////////////玩家操作
	case"playere":
		var tmpdatas={name:Data[2],id:Data[1]};
		pAlertDialog(tmpdatas);
		break;
	/////////////////////////////////////////////////////////////////传送到玩家
	case"tpp":
		Entity.setPosition(Server.getAllPlayers()[0], Entity.getX(Data[1]),Entity.getY(Data[1]),Entity.getZ(Data[1]));
		break;
	/////////////////////////////////////////////////////////////////切换视角
	case"qc":
		ModPE.setCamera(Data[1]);
		break;
	/////////////////////////////////////////////////////////////////改皮肤
	case"skin":
		Entity.setMobSkin(Data[1], Data[2]);
		break;
	/////////////////////////////////////////////////////////////////骑动物
	case"ride":
		if(Server.getAllPlayers()[0]!=Data[1])
		{
			Entity.rideAnimal(Server.getAllPlayers()[0],Data[1]);
		}
		else
		{
			print("不能骑自己!");
		}
		break;
	/////////////////////////////////////////////////////////////////没找到
	default:
		print("未找到指令");
		break;
	}
}
function XRAY_Update()
{
	var list = [14,15,16,21,56,73,74];
	if(xray.on)
	{
		if(xray.gold)//金矿石
		{
			Block.setShape(14, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		if(xray.iron)//铁矿石
		{
			Block.setShape(15, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		if(xray.coal)//煤矿石
		{
			Block.setShape(16, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		if(xray.ll)//青金石矿石
		{
			Block.setShape(21, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		if(xray.diamond)//钻石矿石
		{
			Block.setShape(56, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		if(xray.redstone)//红石矿石
		{
			Block.setShape(73, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
		}
		if(xray.lredstone)//发光的红石矿石
		{
			Block.setShape(74, 0.0001, 0.0001, 0.0001, 0.9999, 0.9999, 0.9999);
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
print(FENGberdmsg);
print(FENGberdmsg);
print(Bugmsg);
print(Bugmsg);
GUI_init();
XRAY_Update();
ctx.runOnUiThread(new java.lang.Runnable({ run: function()
{
	try{
		MainWindow = new android.widget.PopupWindow();
		var layout = new android.widget.RelativeLayout(ctx);
		var button = new android.widget.Button(ctx);
		button.setText("F");
		button.setOnClickListener(new android.view.View.OnClickListener({
			onClick: function(viewarg)
			{
				Menus_MainMenu=new Array(
					{kind:"text",text:"超级辅助服务器版",color:"",size:24},
					{kind:"text",text:"by 风鸟",color:"",size:16},
					{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
					{kind:"button",text:"玩家操作菜单",data:"PLAYERMENU"},
					{kind:"button",text:"定点传送菜单",data:"TPMENU"},
					{kind:"button",text:"快速破坏菜单",data:"QUICKMENU"},
					{kind:"button",text:"快速聊天菜单",data:"CHATMENU"},
					{kind:"button",text:"变速菜单",data:"SPEEDMENU"},
					{kind:"button",text:"透视菜单",data:"X-RAYMENU"},
					{kind:"button",text:"实时调试",data:"DEBUGNOW"},
					{kind:"button",text:"掉线重置",data:"reset"},
					{kind:"check",text:"潜行模式",data:"sneaking",torf:sneaking});
				Menu_open(Menus_MainMenu);
			}
		}));
		layout.addView(button);
		MainWindow.setContentView(layout);
		MainWindow.setWidth(dip2px(ctx, 42));
		MainWindow.setHeight(dip2px(ctx, 42));
		MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
		MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 0);
	}catch(err){
		catchmsg(10,err);
	}
}}));
//**********************************************************打开菜单**********************************************************
function GUI_init()
{
	Menus_SpeedMenu=new Array(
		{kind:"text",text:"变速菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"自定义变速",data:"SPEED"},
		{kind:"button",text:"变速 x1.0",data:"speed 1.0"},
		{kind:"button",text:"变速 x2.0",data:"speed 2.0"},
		{kind:"button",text:"变速 x3.0",data:"speed 3.0"},
		{kind:"button",text:"变速 x5.0",data:"speed 5.0"},
		{kind:"button",text:"变速 x10.0",data:"speed 10.0"},
		{kind:"button",text:"变速 x20.0",data:"speed 20.0"},
		{kind:"button",text:"变速 x30.0",data:"speed 30.0"},
		{kind:"button",text:"变速 x50.0",data:"speed 50.0"},
		{kind:"button",text:"变速 x100.0",data:"speed 100.0"},
		{kind:"button",text:"变速 x0.1",data:"speed 0.1"},
		{kind:"button",text:"变速 x0.5",data:"speed 0.5"});
	Menus_ChatMenu=new Array(
		{kind:"text",text:"快速聊天菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"自定义消息",data:"CHAT"},
		{kind:"button",text:"快速登录",data:"sendchat /login sidfi8*jk2isu"},
		{kind:"button",text:"快速注册",data:"sendchat /register sidfi8*jk2isu"},
		{kind:"button",text:"我的输入法打不开",data:"sendchat 我的输入法打不开"},
		{kind:"button",text:"你在干嘛 ",data:"sendchat 你在干嘛"},
		{kind:"button",text:"额",data:"sendchat 额"},
		{kind:"button",text:"卧槽",data:"sendchat 卧槽"},
		{kind:"button",text:"为毛我卡在方块里",data:"sendchat 为毛我卡在方块里"},
		{kind:"button",text:"2333333",data:"sendchat 2333333"},
		{kind:"button",text:"卡爆了",data:"sendchat 卡爆了"});
	Menus_TpMenu=new Array(
		{kind:"text",text:"定点传送菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"回家",data:"home home"},
		{kind:"button",text:"回家2",data:"home home2"},
		{kind:"button",text:"传送到矿洞",data:"warp 矿洞"},
		{kind:"button",text:"传送到矿洞2",data:"warp 矿洞2"},
		{kind:"button",text:"传送到传送点1",data:"warp 传送点1"},
		{kind:"button",text:"传送到传送点2",data:"warp 传送点2"},
		{kind:"button",text:"传送到传送点3",data:"warp 传送点3"},
		{kind:"button",text:"传送到传送点4",data:"warp 传送点4"},
		{kind:"button",text:"传送到传送点5",data:"warp 传送点5"},
		{kind:"button",text:"返回传送前位置",data:"back"},
		{kind:"text",text:"以下按钮小心误点导致误设置传送点",color:android.graphics.Color.YELLOW,size:16},
		{kind:"button",text:"设置家",data:"sethome home"},
		{kind:"button",text:"设置家2",data:"sethome home2"},
		{kind:"button",text:"设置矿洞",data:"setwarp 矿洞"},
		{kind:"button",text:"设置矿洞2",data:"setwarp 矿洞2"},
		{kind:"button",text:"设置传送点1",data:"setwarp 传送点1"},
		{kind:"button",text:"设置传送点2",data:"setwarp 传送点2"},
		{kind:"button",text:"设置传送点3",data:"setwarp 传送点3"},
		{kind:"button",text:"设置传送点4",data:"setwarp 传送点4"},
		{kind:"button",text:"设置传送点5",data:"setwarp 传送点5"});
}
function switchData(data)//GUI判断指令
{
	switch(data)
	{
	case"X-RAYMENU":
		Menus_X_RayMENU=new Array(
			{kind:"text",text:"透视菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"check",text:"矿石发光",data:"xray light",torf:xray.light},
			{kind:"check",text:"开启透视",data:"xray on",torf:xray.on},
			{kind:"check",text:"金矿石",data:"xray gold",torf:xray.gold},
			{kind:"check",text:"铁矿石",data:"xray iron",torf:xray.iron},
			{kind:"check",text:"煤矿石",data:"xray coal",torf:xray.coal},
			{kind:"check",text:"青金石矿石",data:"xray ll",torf:xray.ll},
			{kind:"check",text:"钻石矿石",data:"xray diamond",torf:xray.diamond},
			{kind:"check",text:"红石矿石",data:"xray redstone",torf:xray.redstone},
			{kind:"check",text:"发光的红石矿石",data:"xray lredstone",torf:xray.lredstone},
			{kind:"check",text:"新透视算法",data:"xray xray2",torf:xray.xray2});
		Menu_open(Menus_X_RayMENU);
		break;
	case"PLAYERMENU":
		Menus_PlayerMENU=new Array(
			{kind:"text",text:"玩家操作菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16});
		var Playerlist=Server.getAllPlayers();
		var PlayerNamelist=Server.getAllPlayerNames();
		for(i=0;i<Playerlist.length;i++)
		{
			Menus_PlayerMENU.push({kind:"button",text:PlayerNamelist[i],data:"playere "+Playerlist[i]+" "+PlayerNamelist[i]});
		}
		Menu_open(Menus_PlayerMENU);
		break;
	case"SPEEDMENU":
		Menu_open(Menus_SpeedMenu);
		break;
	case"CHATMENU":
		Menu_open(Menus_ChatMenu);
		break;
	case"TPMENU":
		Menu_open(Menus_TpMenu);
		break;
	case"SPEED":
		inputDialog(true,false,"","请输入速度","","","自定义变速","确定","取消","speed ");
		break;
	case"DEBUGNOW":
		inputDialog(true,false,"","输入调试指令","","","实时调试工具","确定","取消","eval");
		break;
	case"CHAT":
		inputDialog(true,false,"","输入消息","","","自定义消息","确定","取消","sendchat ");
		break;
	default:
		Susecmd(data);
		break;
	}
}
function inputDialog(ttext1,ttext2,text1,htext1,text2,htext2,title,btn1text,btn2text,data)//输入型Dialog
{
	try{
		var layout = new android.widget.LinearLayout(ctx);
		var btn1 = new android.widget.Button(ctx);
		var btn2 = new android.widget.Button(ctx);
		var Text1=null,Text2=null;
		btn1.setText(btn1text);
		btn2.setText(btn2text);
		if(ttext1)
		{
			Text1=new android.widget.EditText(ctx);
			Text1.setHint(htext1);
			if(text1!="")
			{
				Text1.setText(text1);
			}
		}
		if(ttext2)
		{
			Text2=new android.widget.EditText(ctx);
			Text2.setHint(htext2);
			if(text2!="")
			{
				Text2.setText(text2);
			}
		}
		layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		if(ttext1)
		{
			layout.addView(Text1);
		}
		if(ttext2)
		{
			layout.addView(Text2);
		}
		layout.addView(btn1);
		layout.addView(btn2);
		var Dialogw = new android.app.Dialog(ctx);
		Dialogw.setContentView(layout);
		Dialogw.setTitle(title);
		btn1.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			var temptext="";
			if(ttext1)
			{
				temptext=temptext+Text1.getText();
			}
			if(ttext2)
			{
				temptext=temptext+Text2.getText();
			}
			if(temptext=="")
			{
				print("请勿输入空参数");
			}	
			else
			{
				if(data!="eval")
				{
					switchData(data+temptext);
				}
				else
				{
					try
					{
						eval(temptext);
					}
					catch(err)
					{
						catchmsg(14,err);
					}
				}
			}
			Dialogw.dismiss();
		}});
		btn2.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			Dialogw.dismiss();
		}
		});
		Dialogw.show();
	}catch(err){
		catchmsg(13,err);
	}
}
function sAlertDialog(datas,skins)
{
	try
	{
		var arr = java.lang.reflect.Array.newInstance(java.lang.CharSequence,skins.length);
		for(i=0;i<skins.length;i++)
		{
			arr[i]=skins[i];
		}
		var builder = new android.app.AlertDialog.Builder(ctx);
		builder.setTitle("用户名:"+datas.name+",ID:"+datas.id+" 修改皮肤");
		builder.setItems(arr, new android.content.DialogInterface.OnClickListener({
		onClick: function(dialog, which)
			{
				Susecmd("skin "+datas.id+" /mob/"+skins[which]);
			}
		}));
		builder.show();
	}
	catch(err)
	{
		catchmsg(13,err);
	}
}
function pAlertDialog(datas)
{
	try
	{
		var arr = java.lang.reflect.Array.newInstance(java.lang.CharSequence,4);
		arr[0]="骑上该玩家";
		arr[1]="修改玩家皮肤";
		arr[2]="传送到该玩家";
		arr[3]="切换到该玩家视角";
		var builder = new android.app.AlertDialog.Builder(ctx);
		builder.setTitle("用户名:"+datas.name+",ID:"+datas.id);
		builder.setItems(arr, new android.content.DialogInterface.OnClickListener({
		onClick: function(dialog, which)
			{
				switch(which)
				{
				case 0:
					Susecmd("ride "+datas.id);
					break;
				case 1:
					var skins=["char.png","elleco.png","Hakase.png","Deviate.png","mercyfire.png","Notch.png","匠屋.png","nouman0413.png","Thommy.png"];
					sAlertDialog(datas,skins);
					break;
				case 2:
					Susecmd("tpp "+datas.id);
					break;
				case 3:
					Susecmd("qc "+datas.id);
					break;
				}
			}
		}));
		builder.show();
	}
	catch(err)
	{
		catchmsg(13,err);
	}
}
//**********************************************************打开菜单**********************************************************
function Menu_open(MenuData)//主函数
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
				Menu_addButton(layout, MenuData[i].text, MenuData[i].data);
				break;
			case"check":
				Menu_addCheck(layout,MenuData[i].text,MenuData[i].data,MenuData[i].torf);
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
				menu = null;
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
		menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/2.4);
		menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
		menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
		menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
		}catch(err){
			catchmsg(11,err);
		}
}
function Menu_addText(layout,Params,text,color,size)//添加文本
{
	var Text = new android.widget.TextView(ctx);
	Text.setTextSize(size);
	if(color!="")
	{
		Text.setTextColor(color);
	}
	Text.setText(text);
	Text.setLayoutParams(Params);
	layout.addView(Text);
}
function Menu_addButton(layout,text,data)//添加按钮
{
	var button = new android.widget.Button(ctx);
	button.setText(text);
	button.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(){
			switchData(data);
		}
	}));
	layout.addView(button);
}
function Menu_addCheck(layout,text,data,isch)//添加选择框
{
	var Check = new android.widget.CheckBox(ctx);
	Check.setText(text);
	Check.setChecked(isch);
	Check.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
		onCheckedChanged: function(){
			switchData(data);
		}
	});
	layout.addView(Check);
}
