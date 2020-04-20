/*本js由post_test制作！严禁抄袭或修改版权！！
BUG反馈或建议：
	请到发布贴中反馈
	
	感谢风鸟的大量模板和技术支持
	
	感谢张卓伟的Block Launcher启动器
	感谢MojangAB的MinecraftPE
	请有能力的人支持正版
*/
/*
备忘：
	
	
*/
//********************************变量声明区********************************
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var build="Build #0001";
var Bugmsg="BUG反馈或建议：\n请到百度贴吧的发布贴中提出";//"BUG反馈或建议：\n搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）\n请在反馈时标明Build号以及错误现象、出现方式";//BUG反馈信息
var updatemsg=""//更新内容
var playerList=[];//玩家列表
var banIDList=[];
var PlayerEntity=-1;//玩家ID
var MainWindow=null;//主按钮
var noSandMessage=false;//不发出消息
var teleportTo=new pos(0,0,0);//登录后传送到
var loginNPC=-1;//登录用的NPC

var first=true;
var isgame=false;
function pos(x,y,z)
{
	this.x=x;
	this.y=y;
	this.z=z;
}
ModPE.setItem(511, "record_mellohi", 0,"Setting");
//********************************钩子函数区********************************
function procCmd(cmd)
{
	usecmd(cmd);
}
function attackHook(a,v)
{
	if(a==PlayerEntity && Player.getCarriedItem()==511)
	{
		loginNPC=v;
		CM("登录NPC已设定！");
		preventDefault();
		return;
	}
	if(v==loginNPC)
	{
		var have=false;
		for(i=0;i<playerList.length;i++)
		{
			if(playerList[i]==a)
			{
				have=true;
				sendMessage("玩家"+Player.getName(a)+"登录失败 ，原因 ：已登录过");
			}
		}
		for(i=0;i<banIDList.length;i++)
		{
			if(banIDList[i]==Player.getName(a))
			{
				have=true;
				sendMessage("玩家"+Player.getName(a)+"登录失败 ，原因 ：已被封禁");
			}
		}
		if(!have)
		{
			sendMessage("玩家"+Player.getName(a)+"登录成功");
			Entity.setPosition(a,teleportTo.x,teleportTo.y,teleportTo.z);
			playerList.push(a);
		}
		preventDefault();
	}
	for(i=0;i<banIDList.length;i++)
	{
		if(banIDList[i]==Player.getName(a))
		{
			preventDefault();
		}
	}
	var have=true;
	for(i=0;i<playerList.length;i++)
	{
		if(playerList[i]==a)
		{
			have=false;
		}
	}
	if(have)
	{
		preventDefault();
	}
}
function leaveGame()//退出存档
{
	if(!isgame)
	{
		return;
	}
	saveAllData();
	banIDList=[];
	playerList=[];
	//重置功能
	isgame=false;
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
function deathHook(m,v)//死亡钩子
{
	for(i=0;i<playerList.length;i++)
	{
		if(playerList[i]==v)
		{
			playerList.splice(i,1);
			sendMessage(Player.getName(i)+"死了");
		}
	}
}
function modTick()
{
	PlayerEntity=Player.getEntity();
}
function newLevel()//进入世界
{
	isgame=true;
	//版权声明
	if(first==true)
	{
		first=false;
		print("欢迎使用联机控制台！请确认你是否为开存档的人！\n作者:风鸟 请尊重作者版权！");
		print(Bugmsg);
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function()
			{
				try
				{
					
				}
				catch(err)
				{
					catchmsg(10,err);
				}
			}
		}));
	}
	if(load2("banIDs")!=null)
	{
		var List=load2("banIDs").split(",");
		for(i=0;i<List.length;i++)
		{
			if(List[i]!="")
			{
				banIDList.push(List[i]);
			}
		}
	}
	//载入按钮
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				MainWindow = new android.widget.PopupWindow(ctx);
				var layout = new android.widget.RelativeLayout(ctx);
				var button = new android.widget.Button(ctx);
				button.setText("S");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick:function(viewarg)
					{
						Menu_open(new Array(
							{kind:"text",text:"联机控制台",color:"",size:24},
							{kind:"text",text:"by 风鸟",color:"",size:16},
							{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
							{kind:"button",text:"封禁玩家ID",data:"BAN_ID"},
							{kind:"button",text:"解封玩家ID",data:"BAN_REMOVE_ID"},
							{kind:"button",text:"实体操作菜单",data:"MOBMENU"},
							{kind:"button",text:"时间操作菜单",data:"TIMEMENU"},
							{kind:"button",text:"定点传送菜单",data:"TPMENU"},
							{kind:"button",text:"背景音乐菜单",data:"BGMMENU"},
							{kind:"button",text:"透视菜单",data:"X-RAY"},
							{kind:"button",text:"其他功能",data:"MOREMENU"},
							{kind:"button",text:"插件管理器",data:"PLUGINMENU"},
							{kind:"text",text:"必须为开存档的人才能正常使用本JS！",color:"",size:16}));
					}
				}));
				button.setOnTouchListener(new android.view.View.OnTouchListener(
				{
					onTouch:function(v,e)
					{
						
						return false;
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx,42));
				MainWindow.setHeight(dip2px(ctx,42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM,0,100);
			}
			catch(err)
			{
				catchmsg(10,err);
			}
		}
	}));
}
function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage)//使用物品
{
	var x=x,y=y,z=z;
	switch(itemId)
	{
	case 511:
		teleportTo=new pos(x,y+3,z);
		CM("登录传送点已设定");
		break;
	case 176:
		switch(side)
		{
		case 0:
			y--;
			break;
		case 1:
			y++;
			break;
		case 2:
			z--;
			break;
		case 3:
			z++;
			break;
		case 4:
			x--;
			break;
		case 5:
			x++;
			break;
		}
		break;
	}
}
//********************************自定义函数区*******************************
function sendMessage(msg)
{
	if(!noSandMessage)
	{
		Server.sendChat(msg);
	}
}
function CM(msg,color)//彩字输出
{
	clientMessage(getColor(color)+msg);
}
function readFile(path)
{
	var file=new java.io.File(path);
	if(file.isFile() && file.exists())
	{
		var outputstr="";
		var read = new java.io.InputStreamReader(new java.io.FileInputStream(file),"UTF-8");
		var bufferedReader = new java.io.BufferedReader(read); 
		var lineTxt = null; 
		while((lineTxt = bufferedReader.readLine()) != null)
		{ 
			outputstr=outputstr+lineTxt+"\n";
		}
		read.close();
		return outputstr;
	}
	else
	{
		return "";
	}
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
function catchmsg(id,msg)//GUI报错
{
	function cth(msge)
	{
		selectDialog("联机控制台 - "+build+" - 出现错误",msge,android.R.drawable.stat_notify_error,"确定","退出存档","","ModPE.leaveGame()");
		clientMessage("联机控制台 - "+build+" - 出现错误\n"+msge);
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
function getColor(name)//获取颜色
{
	if(true)
	{
		switch(name)
		{
		case"red":
			return ChatColor.RED;
			break;
		case"yellow":
			return ChatColor.YELLOW;
			break;
		case"blue":
			return ChatColor.BLUE;
			break;
		case"green":
			return ChatColor.GREEN;
			break;
		case"black":
			return ChatColor.BLACK;
			break;
		case"white":
			return ChatColor.WHITE;
			break;
		case"gray":
			return ChatColor.GRAY;
			break;
		default:
			return ChatColor.WHITE;
		}
	}
	else
	{
		return "";
	}
}
function save(name,Data)//保存数据
{
	writeText(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/apLink/datas/"+name+".f_dat",Data);
}
function load(name)//读取数据
{
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/apLink/datas/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
			return "";
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/apLink/datas/"+name+".f_dat");
		if(vfile.exists())
		{
			var reader = new java.io.BufferedReader(new java.io.FileReader(vfile),8192);
			var ttext=reader.readLine();
			reader.close();
			return ttext;
		}
		else
		{
			vfile.createNewFile();
			return "";
		}
	}
	catch(err)
	{
		catchmsg(12,err);
		return "";
	}
}
function save2(name,Data)//保存数据(全局)
{
	writeText(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/apLink/datas/"+name+".f_dat",Data);
}
function load2(name)//读取数据(全局)
{
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/apLink/datas/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
			return "";
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/apLink/datas/"+name+".f_dat");
		if(vfile.exists())
		{
			var reader = new java.io.BufferedReader(new java.io.FileReader(vfile),8192);
			var ttext=reader.readLine();
			reader.close();
			return ttext;
		}
		else
		{
			vfile.createNewFile();
			return "";
		}
	}
	catch(err)
	{
		catchmsg(12,err);
		return "";
	}
}
function usecmd(cmd)
{try{
	Data=cmd.split(" ");
	switch(Data[0])
	{
	case "ban":
		var have=false;
		switch(Data[1])
		{
		case "add":
			for(i=0;i<banIDList.length;i++)
			{
				if(banIDList[i]==Data[2])
				{
					have=true;
					CM("此ID已被封禁过");
				}
			}
			if(!have)
			{
				banIDList.push(Data[2]);
				for(i=0;i<playerList.length;i++)
				{
					if(Player.getName(playerList[i])==Data[2])
					{
						playerList.splice(i,1);
						Entity.setHealth(playerList[i],0);
					}
				}
				CM("封禁成功 ，ID:"+Data[2]);
			}
			break;
		case "remove":
			for(i=0;i<banIDList.length;i++)
			{
				if(banIDList[i]==Data[2])
				{
					have=true;
					banIDList.splice(i,1);
					CM("解封成功 ，ID:"+Data[2]);
				}
			}
			if(!have)
			{
				CM("此ID尚未被封禁过");
			}
			break;
		}
		saveAllData();
		break;
	}}catch(err){clientMessage(err);}
}
function saveAllData()
{
	save2("banIDs",banIDList.toString());
}
//GUI区
function switchData(Data)//GUI判断指令
{
	data=Data.split(" ");
	switch(data[0])
	{
	case "BAN_ID":
		inputDialog(true,false,"","请输入要封禁的玩家ID","","","封禁玩家ID","封禁","取消","ban add ");
		break;
	case "BAN_REMOVE_ID":
		inputDialog(true,false,"","请输入要解封的玩家ID","","","解封玩家ID","解封","取消","ban remove ");
		break;
	default:
		usecmd(Data);
		break;
	}
}
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
//**********************************************************各种Dialog*********************************************************
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
		/*var scrollview = new android.widget.ScrollView(ctx);
		scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
		scrollview.addView(layout);
		var mlayout = new android.widget.RelativeLayout(ctx); 
		mlayout.addView(scrollview);*/
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
				temptext=temptext+" "+Text2.getText();
			}
			if(temptext=="" || temptext==" ")
			{
				CM("请勿输入空参数","red");
			}	
			else
			{
				switchData(data+temptext);
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
		catchmsg(10,err);
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
//**********************************************************打开菜单**********************************************************
function Menu_open(MenuData)
{
	Menu_make(MenuData).showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}
function Menu_make(MenuData)//打开新菜单
{
	try{
		var menu = new android.widget.PopupWindow(ctx);
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
			/*case"jumpSeek":
				var jumpSeek = new android.widget.SeekBar(ctx);
				jumpSeek.setMax(7);
				jumpSeek.setProgress(addjump-1);
				jumpSeek.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						addjump=p2+1;
					}
				});
				layout.addView(jumpSeek);
				break;
			case"badphoneSeek":
				badphoneSeek = new android.widget.SeekBar(ctx);
				badphoneSeek.setMax(15);
				badphoneSeek.setProgress(goodatbadphone);
				badphoneSeek.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						switchData("goodatbadphone "+p2);
					}
				});
				layout.addView(badphoneSeek);
				break;*/
			default:
				Menu_addText(layout,textParams,"[组件"+MenuData[i].kind+"不存在]",android.graphics.Color.RED,18);
				break;
			}
		}
		var closebutton = new android.widget.Button(ctx);
		var btnParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
		btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
	/*	closebutton.setLayoutParams(btnParams);
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
		}));*/
		var scrollview = new android.widget.ScrollView(ctx);
		var mlayout = new android.widget.RelativeLayout(ctx); 
		scrollview.setPadding(dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5));
		scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
		scrollview.addView(layout);
		mlayout.addView(scrollview);
	//	mlayout.addView(closebutton);
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
//********************************变量组声明区 ********************************
//实体列表
var Entitylist=new Array(
	{id:10,name:"鸡",unspawn:false,max:4},
	{id:11,name:"牛",unspawn:false,max:10},
	{id:12,name:"猪",unspawn:false,max:10},
	{id:13,name:"羊",unspawn:false,max:8},
	{id:14,name:"狼",unspawn:false,max:20},
	{id:15,name:"村民",unspawn:false,max:10},
	{id:16,name:"哞菇",unspawn:false,max:10},
	{id:32,name:"僵尸",unspawn:false,max:20},
	{id:33,name:"爬行者",unspawn:false,max:20},
	{id:34,name:"骷髅",unspawn:false,max:15},
	{id:35,name:"蜘蛛",unspawn:false,max:16},
	{id:36,name:"僵尸猪人",unspawn:false,max:20},
	{id:37,name:"史莱姆",unspawn:false,max:16},
	{id:38,name:"末影人",unspawn:false,max:40},
	{id:39,name:"蠹虫",unspawn:false,max:8},
	{id:65,name:"激活的TNT",unspawn:false,max:"Null"},
	{id:80,name:"射出的箭",unspawn:false,max:"Null"},
	{id:81,name:"扔出的雪球",unspawn:false,max:"Null"},
	{id:82,name:"扔出的鸡蛋",unspawn:false,max:"Null"},
	{id:83,name:"画",unspawn:false,max:"Null"},
	{id:84,name:"矿车",unspawn:false,max:"Null"});
//盔甲ID表
var Armor_1=[298,302,306,310,314];
var Armor_2=[299,303,307,311,315];
var Armor_3=[300,304,308,312,316];
var Armor_4=[301,305,309,313,317];
//工具ID表
var Tools=[256,257,258,259,261,267,268,269,270,271,272,273,274,275,276,277,278,279,283,284,285,286,290,291,292,293,294,359];


