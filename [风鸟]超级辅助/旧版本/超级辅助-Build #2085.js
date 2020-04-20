/*本js由风鸟制作！严禁抄袭或修改版权！！
BUG反馈或建议：
	搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）
	请在反馈时标明Build号以及错误现象、出现方式
	
	感谢a5大神的玩家ID技术支持（0.9不能用了QAQ）
	感谢@亡灵战尸 的冰块不融化建议（虽然做出来关不掉→_→）
	感谢@亡灵战尸 的永夜永昼建议
	感谢张卓伟的Block Launcher启动器
	感谢mojang的MinecraftPE
	请有能力的人支持正版
*/
/*
备忘：
	
	
*/
//********************************变量声明区开始********************************
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var build="Build #2085";
var Bugmsg="卧槽，好多函数都不能用了Σ(っ °Д °;)っ\n染成红色的功能就是0.9坏掉不能用的Σ(っ °Д °;)っ\n不过把启动器更新到1.7.8以上就正常了≥﹏≤"//"BUG反馈或建议：\n搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）\n到百度贴吧“FENGberd吧”的超级辅助内测贴提出\n请在反馈时标明Build号以及错误现象、出现方式";//BUG反馈信息
var FENGberdmsg="\n超级辅助Js\n作者：风鸟\n喵喵喵喵喵"//版权信息
var updatemsg="  -调整GUI宽度及染色问题\n  -增加更新内容提示\n  -增加实体移除、不生成实体的功能\n  -增加工具、盔甲永不损坏的功能\n  -修正io流的问题\n  -优化算法"//更新内容
var undefine;

var first=true;//是否第一次运行
var god=false;//无敌
var skill=false;//秒杀
var blocksss=false;//无限放置方块
var debug=false,debugWindow=null,dtext=null,tmpx,tmpy,tmpz;//调试模式
var backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
var diet=false,diex=0,diey=0,diez=0;//返回死亡地点
var fly=false,upvel=0,upBtnWindow=null,downBtnWindow=null;//飞行
var saveworld=false,savemob=false,savepicture=false;//保护模式
var PlayerEnt;//玩家实体ID
var sneaking=false;//潜行模式
var magnet=false;//磁铁模式
var sandnodown=false;//沙不掉落
var always=0,t=0;//0关闭，1永夜，2永昼
var username="";//用户名
var printmode=false;//针对没有中文修复补丁的mc玩家
var neverbad={tools:false,armor:false};//工具盔甲永不损坏
var no_colormode=false;//不明觉厉的功能233
var Entitys=[];//貌似可以用来识别玩家
var lasteval="";//最后一次执行的命令
//functions呵呵
var modtick="";
var deathhook="";
var useitem="";
var destroyblock="";
var attackhook="";
//GUI
var MainWindow = null;//主按钮

var mainMenu = null;
var subMenu = null;
var infoMenu = null;

var Menus_MainMenu;
var Menus_ModMenu;
var Menus_PlayerMenu;
var Menus_TimeMenu;
var Menus_TpMenu;
var Menus_MoreMenu;
var Menus_RemoveEntityMenu;
var Menus_UnspawnMenu;
var Menu_1=null,Menu_2=null,Menu_3=null,Menu_4=null,Menu_5=null;//多级菜单
//********************************变量声明区结尾********************************



//********************************游戏内HOOK函数区********************************
function destroyBlock(x,y,z,side)//方块破坏钩子
{
	if(saveworld)
	{
		preventDefault();
	}
	eval(destroyblock);
}
function entityAddedHook(ent)//实体添加
{
	Entitys.push(ent);
	var type=Entity.getEntityTypeId(ent),i;
	for(i in Entitylist)
	{
		if(type==Entitylist[i].id && Entitylist[i].unspawn==true)
		{
			Entity.remove(ent);
			preventDefault();
		}
	}
}
function entityRemovedHook(ent)//实体移除
{
	for(i=0;i<Entitys.length;i++)
	{
		if(Entitys[i]==ent)
		{
			Entitys.splice(i,1);
		}
	}
}
function deathHook(m, v)//实体死亡
{
	if(v==PlayerEntity)
	{
		diet=true;
		diex=Entity.getX(PlayerEntity);
		diey=Entity.getY(PlayerEntity);
		diez=Entity.getZ(PlayerEntity);
		CM("使用/backdie返回死亡地点","yellow");
	}
	eval(deathhook);
}
function procCmd(cmd)//输入指令
{
	usecmd(cmd);
}
function chatHook(c)
{
	if(c=="233")
	{
		CM("<Herobrine>"+getColor("yellow")+"2333333333","white");
	}
}
function attackHook(a,e)//生物被攻击
{
	if(!savemob)
	{
		if(savepicture && Entity.getEntityTypeId(e)==83)
		{
			preventDefault();
		}
		else if(skill==true && Entity.getHealth(e) >= 2 && e != PlayerEntity)
		{
			Entity.setHealth(e,1);
		}
	}
	else
	{
		preventDefault();
	}
	eval(attackhook);
}
function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage)//使用物品
{
	if(saveworld)
	{
		preventDefault();
	}
	else if(blocksss)
	{
		if(itemId>0 && itemId<=255)
		{
			Entity.setCarriedItem(PlayerEntity,Player.getCarriedItem(),Player.getCarriedItemCount()+1,Player.getCarriedItemData());
		}
	}
	eval(useitem);
}
function modTick()//0.05秒执行一次
{
	if(username!="")
	{
		var list=Server.getAllPlayers();
		for(i=0;i<list.length;i++)
		{
			if(Player.getName(list[i])==username)
			{
				PlayerEntity=list[i];
			}
		}
	}
	else
	{
		PlayerEntity=Player.getEntity();//Server.getAllPlayers()[0];
	}
	if(god)
	{
		Entity.setHealth(PlayerEntity,30000);
	}
	if(fly)
	{
		setVelY(PlayerEntity,0+upvel);
		upvel=0;
	}
	if(sandnodown)
	{
		list=Entity.getAll();
		for(i=0;i<list.length;i++)
		{
			if(Entity.getEntityTypeId(list[i])==66)
			{
				Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
			}
		}
	}
	if(always==1)
	{
		Level.setTime(15000);
	}
	if(always==2)
	{
		Level.setTime(500);
	}
	if(magnet)
	{
		var list=Entity.getAll();
		for(i=0;i<list.length;i++)
		{
			if(Entity.getEntityTypeId(list[i])==64)
			{
				Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
			}
		}
	}
	if(neverbad.tools)
	{
		var id=Player.getCarriedItem(),i=0;
		for(i in Tools)
		{
			if(id==Tools[i])
			{
				Entity.setCarriedItem(PlayerEntity,id,Player.getCarriedItemCount(),0);
			}
		}
	}
	if(neverbad.armor)
	{
		for(i=0;i<4;i++)
		{
			var id=Player.getArmorSlot(i);
			if(id!=0)
			{
				Player.setArmorSlot(i, id, 0);
			}
		}
	}
	if(debug)
	{
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run:function()
			{
				try
				{
					tmpx=Entity.getX(PlayerEntity)+"000.000";
					tmpx=tmpx.split(".");
					tmpx=parseInt(tmpx[0])+"."+parseInt(tmpx[1][0])+parseInt(tmpx[1][1])+parseInt(tmpx[1][2]);
					tmpy=Entity.getY(PlayerEntity)+"000.000";
					tmpy=tmpy.split(".");
					tmpy=parseInt(tmpy[0])+"."+parseInt(tmpy[1][0])+parseInt(tmpy[1][1])+parseInt(tmpy[1][2]);
					tmpz=Entity.getZ(PlayerEntity)+"000.000";
					tmpz=tmpz.split(".");
					tmpz=parseInt(tmpz[0])+"."+parseInt(tmpz[1][0])+parseInt(tmpz[1][1])+parseInt(tmpz[1][2]);
					dtext.setText("\nX:"+tmpx+"   RAM:"+getMemory()+"  实体数:"+Entity.getAll().length+"\nY:"+tmpy+"  Entity:"+PlayerEntity+"  Time:"+Level.getTime()+"\nZ:"+tmpz+ "  Item:"+Player.getCarriedItem()+":"+Player.getCarriedItemData());
				}
				catch(err)
				{
					catchmsg(12,err);
				}
			}
		}));
	}
	eval(modtick);
}
function leaveGame()//退出存档
{
	//重置功能
	god=false;//无敌
	skill=false;//秒杀
	sandnodown=false;//沙不掉落
	debug=false;//调试模式
	blocksss=false;//无限放置方块
	backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
	diet=false,diex=0,diey=0,diez=0;//返回死亡地点
	fly=false,upvel=0;//飞行
	always=0;//永夜永昼
	saveworld=false,savemob=false,savepicture=false;//保护模式
	sneaking=false;//潜行模式
	magnet=false;//磁铁模式
	Entitys=[];//实体列表重置
	neverbad.tools=false,neverbad.armor=false;//工具盔甲永不损坏
	//username="";//玩家识别系统
	for(i=0;i<5;i++)
	{
		Menu_closeNow();
	}
	Menu_1=null,Menu_2=null,Menu_3=null,Menu_4=null,Menu_5=null;//重置多级菜单
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
				if(downBtnWindow != null)//关闭下飞行按钮
				{
					downBtnWindow.dismiss();
					downBtnWindow = null;
				}
				if(upBtnWindow != null)//关闭上飞行按钮
				{
					upBtnWindow.dismiss();
					upBtnWindow = null;
				}
				if(debugWindow != null)//关闭调试模式文本
				{
					debugWindow.dismiss();
					debugWindow = null;
				}
			}
			catch(err)
			{
				catchmsg(16,err);
			}
		}
	}));
}
function newLevel()//进入世界
{
	//版权声明
	if(first==true)
	{
		first=false;
		print(FENGberdmsg);
		print(FENGberdmsg);
		print(Bugmsg);
		print(Bugmsg);
		GUI_init();
	}
	always=parseInt(load("always"));
	if(load("saveworld")=="true")
	{
		usecmd("saveworld");
	}
	if(load("sandnodown")=="true")
	{
		usecmd("sandnodown");
	}
	if(load("savepicture")=="true")
	{
		usecmd("savepicture");
	}
	if(load("savemob")=="true")
	{
		usecmd("savemob");
	}
	if(load2("printmode")=="true")
	{
		printmode=true;
	}
	if(load2("no_colormode")=="true")
	{
		no_colormode=true;
	}
	//载入按钮
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			MainWindow = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("F");
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg)
				{
					Menus_MainMenu=new Array(
						{kind:"text",text:"超级辅助",color:"",size:24},
						{kind:"text",text:"by 风鸟",color:"",size:16},
						{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
						{kind:"button",text:"物品生成菜单",data:"ITEMMENU"},
						{kind:"button",text:"玩家操作菜单",data:"PLAYERMENU"},
						{kind:"button",text:"实体操作菜单",data:"MOBMENU"},
						{kind:"button",text:"时间操作菜单",data:"TIMEMENU"},
						{kind:"button",text:"定点传送菜单",data:"TPMENU"},
						{kind:"button",text:"其他功能",data:"MOREMENU"},
						{kind:"button",text:"Eval system",data:"DEBUGNOW"},
						{kind:"check",text:"print mode",data:"printmode",torf:printmode},
						{kind:"check",text:"no color mode",data:"no_colormode",torf:no_colormode});
					Menu_open(Menus_MainMenu);
				}
			}));
			layout.addView(button);
			MainWindow.setContentView(layout);
			MainWindow.setWidth(dip2px(ctx, 42));
			MainWindow.setHeight(dip2px(ctx, 42));
			MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
		}catch(err){
			catchmsg(10,err);
		}
	} }));
}
//********************************自定义函数区********************************
function Toast(text,lengthint)
{
	ctx.runOnUiThread(new java.lang.Runnable(
		{
			run:function()
			{
				try
				{
					if(length!=undefined)
					{
						android.widget.Toast.makeText(ctx,text,lengthint).show();
					}
					else
					{
						android.widget.Toast.makeText(ctx,text,android.widget.Toast.LENGTH_LONG).show();
					}
				}
				catch(err)
				{
					catchmsg(-1,err);
				}
			}
		}));
}
function CM(msg,color)//彩字输出
{
	if(printmode)
	{
		print(msg);
	}
	else
	{
		clientMessage(getColor(color)+msg);
	}
}
checkUpdate();
function checkUpdate()
{
	try
	{
		var vfile = new java.io.File("/sdcard/games/com.mojang/minecraftpe/supercheat/version.dat");
		if(vfile.exists())
		{
			var reader = new java.io.BufferedReader(new java.io.FileReader(vfile),8192);
			if(parseInt(build.split("#")[1])>parseInt(reader.readLine()))
			{
				reader.close();
				selectDialog("超级辅助 - "+build+" - 已更新","更新内容:\n"+updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
				var writer = new java.io.FileOutputStream(vfile);
				writer.write(new java.lang.String(build.split("#")[1]).getBytes());
				writer.close();
			}
			else
			{
				reader.close();
			}
		}
		else
		{
			var vdir = new java.io.File("/sdcard/games/com.mojang/minecraftpe/supercheat/")
			if(!vdir.exists())
			{
				vdir.mkdirs();
			}
			vfile.createNewFile();
			selectDialog("欢迎使用超级辅助 - "+build+"！","当前版本更新内容:\n"+updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
			var writer = new java.io.FileOutputStream(vfile);
			writer.write(build.split("#")[1]);
		}
	}
	catch(err)
	{
		catchmsg(15,err);
	}
}
function catchmsg(id,msg)//GUI报错
{
	function cth(msge)
	{
		selectDialog("超级辅助 - "+build+" - 出现错误",msge,android.R.drawable.stat_notify_error,"确定","退出存档","","ModPE.leaveGame()");
		clientMessage("超级辅助 - "+build+" - 出现错误\n"+msge);
	}
	switch(id)
	{
	case 10:
		cth("显示按钮错误(10)\n"+msg);
		break;
	case 11:
		cth("显示菜单错误(11)\n"+msg);
		break;
	case 12:
		cth("显示文本错误(12)\n"+msg);
		break;
	case 13:
		cth("Dialog显示错误(13)\n"+msg);
		break;
	case 14:
		cth("Eval执行错误(14)\n"+msg);
		break;
	case 15:
		cth("文件流出错(15)\n"+msg);
		break;
	case 16:
		cth("关闭组件出错(16)\n"+msg);
		break;
	default:
		cth("未知错误("+id+")\n"+msg);
		break;
	}
}
function getColor(name)//获取颜色
{
	if(!printmode && !no_colormode)
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
getColor("red");//初始化下，不容易崩溃
function save(name,Data)//保存数据
{
	ModPE.saveData(Level.getWorldDir()+"FENGberdCheater"+name,Data);
}
function load(name)//读取数据
{
	return ModPE.readData(Level.getWorldDir()+"FENGberdCheater"+name);
}
function save2(name,Data)//保存数据(全局)
{
	ModPE.saveData("FENGberdCheater"+name,Data);
}
function load2(name)//读取数据(全局)
{
	return ModPE.readData("FENGberdCheater"+name);
}
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function usecmd(cmd)//核心函数
{
	var Data = cmd.split(" ");
	switch(Data[0])
	{
	/////////////////////////////////////////////////////////////////上升
	case"up":
		if(Data.length==1)
		{
			CM("参数错误","red");
		}
		else
		{
			setPosition( PlayerEntity ,parseInt(Entity.getX(PlayerEntity)),parseInt(Entity.getY(PlayerEntity))+parseInt(Data[1]),parseInt(Entity.getZ(PlayerEntity)));
		}
		break;
	/////////////////////////////////////////////////////////////////获取物品
	case"give":
		if(Data.length==3)
		{
			addItemInventory(parseInt(Data[1]),parseInt(Data[2])%255);
			CM("成功获取物品\nID:"+parseInt(Data[1])+"数量:"+parseInt(Data[2])%255,"green");
		}
		else if(Data.length==2)
		{
			CM("成功获取物品\nID:"+parseInt(Data[1])+"数量:1","green");
			addItemInventory(parseInt(Data[1]),64);
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////传送
	case"tpp":
		if(Data.length==2)
		{
			var ii;
			var list=Server.getAllPlayers();
			for(i=0;i<list.length;i++)
			{
				if(Player.getName(list[i])==Data[1])
				{
					PlayerEntity=list[i];
					backt=true;
					backx=Entity.getX(PlayerEntity);
					backy=Entity.getY(PlayerEntity);
					backz=Entity.getZ(PlayerEntity);
					setPosition(PlayerEntity, Entity.getX(Data[1]), Entity.getY(Data[1]), Entity.getZ(Data[1]));
					ii=true;
					CM("传送成功","green");
				}
			}
			if(!ii)
			{
				CM("玩家不存在","red");
			}
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////传送
	case"tp":
		if(Data.length==4)
		{
			backt=true;
			backx=Entity.getX(PlayerEntity);
			backy=Entity.getY(PlayerEntity);
			backz=Entity.getZ(PlayerEntity);
			setPosition(PlayerEntity, parseInt(Data[1]), parseInt(Data[2]), parseInt(Data[3]));
			CM("传送成功","green");
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////设置家
	case"sethome":
		if(Data.length==2)
		{
			save(Data[1]+"homex",Entity.getX(PlayerEntity));
			save(Data[1]+"homey",Entity.getY(PlayerEntity));
			save(Data[1]+"homez",Entity.getZ(PlayerEntity));
			save(Data[1]+"usehome","true");
			CM("已设置家:"+Data[1],"green");
		}
		else
		{
			usecmd("sethome home");
		}
		break;
	/////////////////////////////////////////////////////////////////传送到家
	case"home":
		if(Data.length==2)
		{
			if(load(Data[1]+"usehome")=="true")
			{
			backt=true;
			backx=Entity.getX(PlayerEntity);
			backy=Entity.getY(PlayerEntity);
			backz=Entity.getZ(PlayerEntity);
			setPosition( PlayerEntity ,load(Data[1]+"homex"),load(Data[1]+"homey"),load(Data[1]+"homez"));
			CM("成功传送到家:"+Data[1],"green");
			}
			else
			{
				CM("还没有设置这个家","red");
			}
		}
		else if(Data.length==1&&load("homeusehome")=="true")
		{
			usecmd("home home");
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////爆炸
	case"explode":
		var nowHP = Entity.getHealth(PlayerEntity);
		Entity.setHealth(PlayerEntity,32767);
		if(Data.length==1)
		{
			explode(Entity.getX(PlayerEntity), Entity.getY(PlayerEntity), Entity.getZ(PlayerEntity), 4.0);
			usecmd("explode 4");
		}
		else
		{
			explode(Entity.getX(PlayerEntity), Entity.getY(PlayerEntity), Entity.getZ(PlayerEntity),Data[1]);
			CM("半径"+Data[1]+"爆炸制造成功","yellow");
		}
		Entity.setHealth(PlayerEntity,nowHP);
		break;
	/////////////////////////////////////////////////////////////////时间操作
	case"time":
		if(Data.length==2)
		{
			Level.setTime(parseInt(Data[1]));
			CM("设置时间为"+parseInt(Data[1]),"yellow");
		}
		else if(Data.length==1)
				{
					CM("现在时间:"+Level.getTime(),"green");
				}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////设置方块
	case"setblock":
		if(Data.length==5)
		{
			setTile(parseInt(Data[1]), parseInt(Data[2]),parseInt(Data[3]), parseInt(Data[4]));
			CM("设置指定方块ID为:"+Data[4]+"完成","green");
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////获取坐标
	case"getxyz":
		var Y = getColor("yellow");
		CM("当前坐标：\n"+Y+"X:"+Entity.getX(PlayerEntity)+"\n"+Y+"Y:"+Entity.getY(PlayerEntity)+"\n"+Y+"Z:"+Entity.getZ(PlayerEntity),"green");
		break;
	/////////////////////////////////////////////////////////////////生成实体
	case"spawnmob":	
		if(Data.length==2 && Data[1]!=0)
		{
			Level.spawnMob(Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-2,Entity.getZ(PlayerEntity),Data[1]);
			CM("生成1个"+Data[1]+"号实体","green");
		}
		else if(Data.length==3 && Data[2]!=0 && Data[1]!=0)
		{
			for(var dos=1;dos<=parseInt(Data[2]);dos++)
			{
				Level.spawnMob(Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-2,Entity.getZ(PlayerEntity),Data[1]);
			}
			CM("生成"+Data[2]+"个" +Data[1]+"号实体","green");
		}
		else
		{
			CM("参数错误","red");
			usecmd("moblist");
		}
		break;
	/////////////////////////////////////////////////////////////////实时调试
	case"eval":
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
		try
		{
			lasteval=tmpt;
			eval("try{"+tmpt+"}catch(err){catchmsg(14,err)}");
		}
		catch(err)
		{
			catchmsg(14,err);
		}
		break;
	/////////////////////////////////////////////////////////////////生物列表
	case"moblist":	
		CM("实体ID列表:\n鸡-10,牛-11,猪-12,\n羊-13,狼-14,村民-15,\n哞菇-16,僵尸-32,爬行者-33,\n骷髅-34,蜘蛛-35,僵尸猪人-36,\n史莱姆-37,末影人-38,蠹虫-39，\n激活的TNT-65,射出的箭-80,雪球-81,\n鸡蛋-82,画-83,矿车-84","white");
		break;
	/////////////////////////////////////////////////////////////////获取物品ID
	case"itemid":
		CM("当前手中物品ID:"+getColor("yellow")+getCarriedItem()+":"+Player.getCarriedItemData(),"green");
		break;
	/////////////////////////////////////////////////////////////////飞行
	case"fly":
		if(fly==false)
		{
			fly=true;
			ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var Button = new android.widget.Button(ctx);
				Button.setText("下降");
				Button.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(){
						 upvel=-1; 
					}
				});
				layout.addView(Button);
				downBtnWindow = new android.widget.PopupWindow(layout, dip2px(ctx,85), dip2px(ctx, 45));
				downBtnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT,0, 0);

				layout = new android.widget.LinearLayout(ctx);
				
				Button = new android.widget.Button(ctx);
				Button.setText("上升");
				Button.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(){
						 upvel=1; 
					}
				});
				layout.addView(Button);
				upBtnWindow = new android.widget.PopupWindow(layout, dip2px(ctx,85), dip2px(ctx, 45));
				upBtnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.LEFT,0, 200);

			}catch(err){
				catchmsg(10,err);
			}
		}
	})); 
		}
		else
		{
			fly=false;
			ctx.runOnUiThread(new java.lang.Runnable({
				run: function() {
					if(downBtnWindow != null){
						downBtnWindow.dismiss();
						downBtnWindow = null;
					}
					if(upBtnWindow != null){
						upBtnWindow.dismiss();
						upBtnWindow = null;
					}}}));
		}
		break;
	/////////////////////////////////////////////////////////////////游戏模式
	case"gamemode":
		switch(Data[1])
		{
		case"0":
			Level.setGameMode(0);
			CM("游戏模式更新为生存模式","green");
			break;
		case"1":
			Level.setGameMode(1);
			CM("游戏模式更新为创造模式","green");
			break;
		default:
			CM("参数错误","red")
		}
		break;
	/////////////////////////////////////////////////////////////////无敌
	case"god":
		if(god==true)
		{
			god=false;
			Entity.setHealth(PlayerEntity,20);
		}
		else
		{
			god=true;
		}
		break;
	/////////////////////////////////////////////////////////////////自杀
	case"suicide":
		Entity.setHealth(PlayerEntity,0);
		CM("你结束了自己的生命","yellow");
		break;
	/////////////////////////////////////////////////////////////////返回上次传送位置
	case"back":
		if(backt)
		{
			var tx=Entity.getX(PlayerEntity);
			var ty=Entity.getY(PlayerEntity);
			var tz=Entity.getZ(PlayerEntity);
			setPosition( PlayerEntity ,backx,backy,backz);
			backx=tx;
			backy=ty;
			backz=tz;
			CM("返回成功","green");
		}
		else
		{
			CM("没有进行过传送","red");
		}
		break;
	/////////////////////////////////////////////////////////////////秒杀
	case"skill":
		skill=!skill;
		break;
	/////////////////////////////////////////////////////////////////设置重生点
	case"setspawn":
		Level.setSpawn(parseInt(Entity.getX(PlayerEntity)),parseInt(Entity.getY(PlayerEntity)),parseInt(Entity.getZ(PlayerEntity)));
		CM("重生点已设置","yellow");
		break;
	/////////////////////////////////////////////////////////////////血量操作
	case"health":
		if(Data.length==1)
		{
			usecmd("health 20");
		}
		else
		{
			if(Data[1]<=0)
			{
				Data[1]=20;
			}
			Entity.setHealth(PlayerEntity,parseInt(Data[1]));
			CM("设置血量为"+parseInt(Data[1]),"green");
		}
		break;
	/////////////////////////////////////////////////////////////////下箭雨
	case"arain":
		for(var aa=-6;aa<=6;aa++)
		{
			for(var bb=-6;bb<=6;bb++)
			{
				Level.spawnMob(Entity.getX(PlayerEntity)+aa,Entity.getY(PlayerEntity)+10,Entity.getZ(PlayerEntity)+bb,80);
				Level.spawnMob(Entity.getX(PlayerEntity)+aa+0.3,Entity.getY(PlayerEntity)+10,Entity.getZ(PlayerEntity)+bb+0.3,80);
				Level.spawnMob(Entity.getX(PlayerEntity)+aa+0.6,Entity.getY(PlayerEntity)+10,Entity.getZ(PlayerEntity)+bb+0.6,80);
				Level.spawnMob(Entity.getX(PlayerEntity)+aa+0.9,Entity.getY(PlayerEntity)+10,Entity.getZ(PlayerEntity)+bb+0.9,80);
			}
		}
		CM("啪啪啪 ～！","green");
		break;
	/////////////////////////////////////////////////////////////////世界保护模式
	case"saveworld":
		if(saveworld)
		{
			saveworld=false;
			save("saveworld","false");
		}
		else
		{
			saveworld=true;
			save("saveworld","true");
		}
		break;
	/////////////////////////////////////////////////////////////////沙不掉落
	case"sandnodown":
		if(sandnodown)
		{
			sandnodown=false;
			save("sandnodown","false");
		}
		else
		{
			sandnodown=true;
			save("sandnodown","true");
		}
		break;
	/////////////////////////////////////////////////////////////////冰不滑不融化
	case"keepice":
		Block.defineBlock(79, "Ice", ["ice"], 20, false, 0);
		break;
	/////////////////////////////////////////////////////////////////实体保护模式
	case"savemob":
		if(savemob)
		{
			savemob=false;
			save("savemob","false");
		}
		else
		{
			savemob=true;
			save("savemob","true");
		}
		break;
	/////////////////////////////////////////////////////////////////画保护模式
	case"savepicture":
		if(savepicture)
		{
			savepicture=false;
			save("savepicture","false");
		}
		else
		{
			savepicture=true;
			save("savepicture","true");
		}
		break;
	/////////////////////////////////////////////////////////////////修改模型
	case"editmod":
		if(Data.length==3)
		{
			Entity.setRenderType(PlayerEntity,Data[1]);
			Entity.setMobSkin(PlayerEntity,Data[2]);
		}
		else
		{
			CM("参数错误","red");
		}
		
		break;
	/////////////////////////////////////////////////////////////////永夜永昼
	case"always":
		if(always==Data[1])
		{
			always=0;
		}
		else
		{
			always=Data[1];
		}
		save("always",always);
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
	/////////////////////////////////////////////////////////////////磁铁模式
	case"magnet":
		magnet=!magnet;
		break;
	/////////////////////////////////////////////////////////////////玩家识别系统
	case"playerset":
		if(Data.length==2)
		{
			var tlist=Server.getAllPlayers();
			var tus=0;
			for(i=0;i<tlist.length;i++)
			{
				if(Player.getName(tlist[i])==Data[1])
				{
					tus=tus+1;
				}
			}
			if(tus==0)
			{
				CM("玩家不存在！","red");
				username="";
			}
			else if(tus>1)
			{
				CM("存在同名玩家！请更改自己的用户名后重新进入世界！","yellow");
				username="";
			}
			else
			{
				username=Data[1];
				CM("玩家识别系统激活成功，用户名："+username,"green");
				CM("使用/playerset [玩家名]来修改用户名","green");
			}
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////变速
	case"speed":
		if(Data[1]>0)
		{
			ModPE.setGameSpeed(Data[1]*20);
			CM("变速为"+Data[1]+"倍","green");
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////返回死亡地点
	case"backdie":
		if(diet)
		{
			backt=true;
			backx=Entity.getX(PlayerEntity);
			backy=Entity.getY(PlayerEntity);
			backz=Entity.getZ(PlayerEntity);
			Entity.setPosition(PlayerEntity,diex,diey,diez);
			CM("成功返回死亡地点","green");
		}
		else
		{
			CM("无死亡记录","red");
		}
		break;
	/////////////////////////////////////////////////////////////////掉血
	case"hurt":
		if(Data.length==2)
		{
			Entity.setHealth(PlayerEntity,Entity.getHealth(PlayerEntity)-Data[1]);
			CM("掉血"+Data[1]+"点","yellow");
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////设置传送点
	case"setwarp":
		if(Data.length==2)
		{
			save(Data[1]+"warpx",Entity.getX(PlayerEntity));
			save(Data[1]+"warpy",Entity.getY(PlayerEntity));
			save(Data[1]+"warpz",Entity.getZ(PlayerEntity));
			save(Data[1]+"usewarp","true");
			CM("已设置"+Data[1],"green");
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////传送到传送点
	case"warp":
		if(Data.length==2)
		{
			if(load(Data[1]+"usewarp")=="true")
			{
				backt=true;
				backx=Entity.getX(PlayerEntity);
				backy=Entity.getY(PlayerEntity);
				backz=Entity.getZ(PlayerEntity);
				setPosition(PlayerEntity,load(Data[1]+"warpx"),load(Data[1]+"warpy"),load(Data[1]+"warpz"));
				CM("成功传送到"+Data[1],"green");
			}
			else
			{
				CM("不存在该传送点","red");
			}
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////调试模式
	case"debug":
		if(debug)
		{
			debug=false;
			ctx.runOnUiThread(new java.lang.Runnable(
			{
				run: function()
				{
					debugWindow.dismiss();
					debugWindow = null;
				}
			}));
		}
		else
		{
			ctx.runOnUiThread(new java.lang.Runnable(
			{
				run:function()
				{
					try
					{
						debugWindow = new android.widget.PopupWindow();
						var layout = new android.widget.RelativeLayout(ctx);
						dtext=new android.widget.TextView(ctx);
						dtext.setTextSize(15);
						dtext.getPaint().setFakeBoldText(true);
						dtext.setTextColor(android.graphics.Color.YELLOW);
						layout.addView(dtext);
						debugWindow.setContentView(layout);
						debugWindow.setWidth(dip2px(ctx, ctx.getWindowManager().getDefaultDisplay().getWidth()));
						debugWindow.setHeight(dip2px(ctx, 105));
						debugWindow.setTouchable(false);
						debugWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP,0,0);
				   }
				   catch(err)
				   {
						catchmsg(12,err);
					}
				}
			}));
			debug=true;
		}
		break;
	/////////////////////////////////////////////////////////////////无限放置方块
	case"blocksss":
		blocksss=!blocksss;
		break;
	/////////////////////////////////////////////////////////////////生物滤镜
	case"unspawn":
		var i;
		if(Data[1]=="all")
		{
			for(i in Entitylist)
			{
				Entitylist[i].unspawn=!Entitylist[i].unspawn;
			}
		}
		else
		{
			for(i in Entitylist)
			{
				if(Entitylist[i].id==Data[1])
				{
					Entitylist[i].unspawn=!Entitylist[i].unspawn;
				}
			}
		}
		break;
	/////////////////////////////////////////////////////////////////实体移除
	case"removeentity":
		var entlist=Entity.getAll(),i=0;
		if(Data[1]=="all")
		{
			for(i in entlist)
			{
				Entity.remove(entlist[i]);
			}
			CM("已移除"+i+"个实体","green");
		}
		else
		{
			var count=0;
			for(i in entlist)
			{
				if(Entity.getEntityTypeId(entlist[i])==Data[1])
				{
					Entity.remove(entlist[i]);
					count++;
				}
			}
			CM("已移除"+count+"个实体","green");
		}
		break;
	/////////////////////////////////////////////////////////////////工具盔甲永不损坏
	case"neverbad":
		if(Data[1]=="tools")
		{
			neverbad.tools=!neverbad.tools;
		}
		else
		{
			neverbad.armor=!neverbad.armor;
		}
		break;
	/////////////////////////////////////////////////////////////////print模式
	case"printmode":
		printmode=!printmode;
		save2("printmode",printmode);
		break;
	/////////////////////////////////////////////////////////////////文字无色模式
	case"no_colormode":
		no_colormode=!no_colormode;
		save2("no_colormode",no_colormode);
		break;
	/////////////////////////////////////////////////////////////////没找到
	default:
		CM("错误:未找到对应指令，请检查功能是否开发完毕","red");
		break;
	}
}
//**********************************************************打开菜单**********************************************************
function GUI_init()
{
	Menus_ModMenu=new Array(
		{kind:"text",text:"玩家模型修改",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:"警告：多人游戏中可能崩溃",color:android.graphics.Color.YELLOW,size:16},
		{kind:"text",text:"警告：部分模型第一人称可能崩溃",color:android.graphics.Color.YELLOW,size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"text",text:"友好生物：",color:"",size:20},
		{kind:"button",text:"鸡",data:"editmod 6 mob/chicken.png"},
		{kind:"button",text:"牛",data:"editmod 7 mob/cow.png"},
		{kind:"button",text:"猪",data:"editmod 8 mob/pig.png"},
		{kind:"button",text:"羊",data:"editmod 9 mob/sheep_0.png"},
		{kind:"text",text:"敌对生物：",color:"",size:20},
		{kind:"button",text:"骷髅",data:"editmod 12 mob/skeleton.png"},
		{kind:"button",text:"僵尸",data:"editmod 11 mob/zombie.png"},
		{kind:"button",text:"蜘蛛",data:"editmod 13 mob/spider.png"},
		{kind:"button",text:"爬行者",data:"editmod 14 mob/creeper.png"},
		{kind:"button",text:"僵尸猪人",data:"editmod 3 mob/pigzombie.png"},
		{kind:"text",text:"特殊实体：",color:"",size:20},
		{kind:"button",text:"矿车",data:"editmod 21 entity/minecart.png"},
		{kind:"button",text:"鸡蛋",data:"editmod 17 mob/char.png"},
		{kind:"button",text:"雪球",data:"editmod 18 mob/char.png"},
		{kind:"text",text:"还原：",color:"",size:20},
		{kind:"button",text:"玩家",data:"editmod 3 mob/char.png"});
	Menus_PlayerMenu=new Array(
		{kind:"text",text:"玩家操作菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"玩家模型修改",data:"MODMENU"},
		{kind:"button",text:"自杀",data:"suicide"},
		{kind:"button",text:"掉血1点",data:"hurt 1"},
		{kind:"button",text:"掉血2点",data:"hurt 2"},
		{kind:"button",text:"回复满血",data:"health"},
		{kind:"button",text:"设置32767血量",data:"health 32767"},
		{kind:"button",text:"切换到创造模式",data:"gamemode 1"},
		{kind:"button",text:"切换到生存模式",data:"gamemode 0"},
		{kind:"button",text:"获取手中物品ID",data:"itemid"},
		{kind:"button",text:"获取当前玩家坐标",data:"getxyz"},
		{kind:"button",text:"激活玩家识别系统",data:"PLAYERSET"},
		{kind:"button",text:"设置重生点",data:"setspawn"});
	Menus_TimeMenu=new Array(
		{kind:"text",text:"时间操作菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"text",text:"基本操作：",color:"",size:20},
		{kind:"button",text:"查看时间",data:"time"},
		{kind:"button",text:"变成白天",data:"time 500"},
		{kind:"button",text:"变成夜晚",data:"time 15000"},
		{kind:"button",text:"设置时间",data:"TIMESET"},
		{kind:"text",text:"变速操作：",color:"",size:20},
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
	Menus_MobMenu=new Array(
		{kind:"text",text:"实体操作菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"获取实体ID表",data:"moblist"},
		{kind:"text",text:"实体生成：",color:"",size:21},
		{kind:"text",text:"  -友好生物：",color:"",size:18},
		{kind:"button",text:"生成鸡",data:"spawnmob 10"},
		{kind:"button",text:"生成牛",data:"spawnmob 11"},
		{kind:"button",text:"生成猪",data:"spawnmob 12"},
		{kind:"button",text:"生成羊",data:"spawnmob 13"},
		{kind:"button",text:"生成村民",data:"spawnmob 15"},
		{kind:"button",text:"生成哞菇",data:"spawnmob 16"},
		{kind:"text",text:"  -中立生物：",color:"",size:18},
		{kind:"button",text:"生成狼",data:"spawnmob 14"},
		{kind:"button",text:"生成史莱姆",data:"spawnmob 37"},
		{kind:"button",text:"生成末影人",data:"spawnmob 38"},
		{kind:"text",text:"  -敌对生物：",color:"",size:18},
		{kind:"button",text:"生成僵尸",data:"spawnmob 32"},
		{kind:"button",text:"生成骷髅",data:"spawnmob 34"},
		{kind:"button",text:"生成蜘蛛",data:"spawnmob 35"},
		{kind:"button",text:"生成爬行者",data:"spawnmob 33"},
		{kind:"button",text:"生成僵尸猪人",data:"spawnmob 36"},
		{kind:"button",text:"生成蠹虫",data:"spawnmob 39"},
		{kind:"text",text:"  -特殊实体：",color:"",size:18},
		{kind:"button",text:"生成矿车",data:"spawnmob 84"},
		{kind:"button",text:"生成激活的TNT",data:"spawnmob 65"},
		{kind:"button",text:"生成扔出的雪球",data:"spawnmob 81"},
		{kind:"button",text:"生成扔出的鸡蛋",data:"spawnmob 82"},
		{kind:"text",text:"实体管理：",color:"",size:21},
		{kind:"button",text:"移除指定实体",data:"REMOVEENTITY",color:android.graphics.Color.RED},
		{kind:"button",text:"过滤指定实体",data:"UNSPAWNENTITY",color:android.graphics.Color.RED});
	Menus_TpMenu=new Array(
		{kind:"text",text:"定点传送菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"回家",data:"home home"},
		{kind:"button",text:"回家2",data:"home home2"},
		{kind:"button",text:"传送到矿洞",data:"warp 矿洞"},
		{kind:"button",text:"传送到矿洞2",data:"warp 矿洞2"},
		{kind:"button",text:"传送到指定玩家",data:"TPP"},
		{kind:"button",text:"传送到传送点1",data:"warp 传送点1"},
		{kind:"button",text:"传送到传送点2",data:"warp 传送点2"},
		{kind:"button",text:"传送到传送点3",data:"warp 传送点3"},
		{kind:"button",text:"传送到传送点4",data:"warp 传送点4"},
		{kind:"button",text:"传送到传送点5",data:"warp 传送点5"},
		{kind:"button",text:"返回传送前位置",data:"back"},
		{kind:"button",text:"返回死亡地点",data:"backdie"},
		{kind:"text",text:"↓小心手滑导致误设置传送点",color:android.graphics.Color.YELLOW,size:16},
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
	case"ITEMMENU":
		openMenu();
		break;
	case"MODMENU":
		Menu_open(Menus_ModMenu);
		break;
	case"PLAYERMENU":
		Menu_open(Menus_PlayerMenu);
		break;
	case"TIMEMENU":
		Menu_open(Menus_TimeMenu);
		break;
	case"MOBMENU":
		Menu_open(Menus_MobMenu);
		break;
	case"TPMENU":
		Menu_open(Menus_TpMenu);
		break;
	case"MOREMENU":
		Menus_MoreMenu=new Array(
			{kind:"text",text:"其他功能",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"check",text:"无敌模式",data:"god",torf:god},
			{kind:"check",text:"飞行模式",data:"fly",torf:fly},
			{kind:"check",text:"潜行模式",data:"sneaking",torf:sneaking},
			{kind:"check",text:"秒杀模式",data:"skill",torf:skill},
			{kind:"check",text:"调试模式",data:"debug",torf:debug,color:android.graphics.Color.YELLOW},
			{kind:"check",text:"磁铁模式",data:"magnet",torf:magnet,color:android.graphics.Color.RED},
			{kind:"check",text:"永夜模式",data:"always 1",torf:always==1},
			{kind:"check",text:"永昼模式",data:"always 2",torf:always==2},
			{kind:"check",text:"画保护模式",data:"savepicture",torf:savepicture},
			{kind:"check",text:"世界保护模式",data:"saveworld",torf:saveworld},
			{kind:"check",text:"实体保护模式",data:"savemob",torf:savemob},
			{kind:"check",text:"无限放置方块",data:"blocksss",torf:blocksss},
			{kind:"check",text:"沙和砂砾不掉落",data:"sandnodown",torf:sandnodown,color:android.graphics.Color.RED},
			{kind:"check",text:"工具永不损坏",data:"neverbad tools",torf:neverbad.tools},
			{kind:"check",text:"盔甲永不损坏",data:"neverbad armor",torf:neverbad.armor},
			{kind:"button",text:"冰不滑不融化(玩坏233)",data:"keepice"},
			{kind:"button",text:"制造爆炸",data:"explode 4.0"},
			{kind:"button",text:"制造大爆炸",data:"explode 10.0"});
		Menu_open(Menus_MoreMenu);
		break;
	case"DEBUGNOW":
		inputDialog(true,false,lasteval,"输入欲执行的指令","","","Eval动态代码执行系统","确定","取消","eval ");
		break;
	case"TPP":
		inputDialog(true,false,"","请输入用户名","","","传送到指定玩家","确定","取消","tpp ");
		break;
	case"SPEED":
		inputDialog(true,false,"","请输入速度","","","自定义变速","确定","取消","speed ");
		break;
	case"PLAYERSET":
		inputDialog(true,false,"","请输入用户名","","","玩家识别系统","激活","取消","playerset ");
		break;
	case"TIMESET":
		inputDialog(true,false,"","请输入时间","","","设置时间","确定","取消","time ");
		break;
	case"REMOVEENTITY":
		var i;
		Menus_RemoveEntityMenu=new Array(
			{kind:"text",text:"移除指定实体",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"button",text:"移除:所有实体",data:"removeentity all"});
		for(i in Entitylist)
		{
			Menus_RemoveEntityMenu.push({kind:"button",text:"移除:"+Entitylist[i].name,data:"removeentity "+Entitylist[i].id});
		}
		Menu_open(Menus_RemoveEntityMenu);
		break;
	case"UNSPAWNENTITY":
		var i=0,tblond=true;
		for(i in Entitylist)
		{
			if(Entitylist[i].unspawn==false)
			{
				tblond=false;
			}
		}
		Menus_UnspawnMenu=new Array(
			{kind:"text",text:"实体过滤器",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"check",text:"阻止生成:所有实体",data:"unspawn all",torf:tblond});
		for(i in Entitylist)
		{
			Menus_UnspawnMenu.push({kind:"check",text:"阻止生成:"+Entitylist[i].name,data:"unspawn "+Entitylist[i].id,torf:Entitylist[i].unspawn && tblond==false});
		}
		Menu_open(Menus_UnspawnMenu);
		break;
	default:
		usecmd(data);
		break;
	}
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
		catchmsg(13,err);
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
				catchmsg(13,err);
			}
		}
	}));
}
//**********************************************************内存信息获取 技术支持：a5**********************************************************
function getMemory()//获取内存信息
{
	var T=getTotalMemory();
	var M=getAvailMemory();
	if(T==-1 || M==-1)
	{
		return "ERROR"
	}
	else
	{
		return (T-M)+"M/"+T+"M";
	}
}
function getAvailMemory()
{ 
	try
	{
		var mem = new android.app.ActivityManager.MemoryInfo(); 
		ctx.getSystemService(ctx.ACTIVITY_SERVICE).getMemoryInfo(mem);
		return Math.floor(mem.availMem/(1024*1024));
	}
	catch(err)
	{
		catchmsg(-1,err);
		return -1;
	}
}
function getTotalMemory()
{ 
	try
	{
		var localBufferedReader = new java.io.BufferedReader(new java.io.FileReader("/proc/meminfo"), 8192);
		var initial_memory = localBufferedReader.readLine().split("\\s+")[1]* 1024;
		localBufferedReader.close();
		return Math.floor(initial_memory/(1024*1024));
	}
	catch(err)
	{
		catchmsg(15,err);
		return -1;
	}
}
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
				//Menu_closeNow();
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
		/*if(Menu_1==null)
		{
			Menu_1=menu;
			MainWindow.dismiss();
			Menu_1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}
		else if(Menu_2==null)
		{
			Menu_2=menu;
			Menu_1.dismiss();
			Menu_2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}
		else if(Menu_3==null)
		{
			Menu_3=menu;
			Menu_2.dismiss();
			Menu_3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}
		else if(Menu_4==null)
		{
			Menu_4=menu;
			Menu_3.dismiss();
			Menu_4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}
		else if(Menu_5==null)
		{
			Menu_5=menu;
			Menu_4.dismiss();
			Menu_5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}*/
		menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		}catch(err){
			catchmsg(11,err);
		}
}
function Menu_closeNow()//关闭当前菜单
{
	/*if(Menu_5!=null)
	{
		Menu_5.dismiss();
		Menu_5=null;
		Menu_4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	}
	else if(Menu_5==null && Menu_4!=null)
	{
		Menu_4.dismiss();
		Menu_4=null;
		Menu_3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	}
	else if(Menu_4==null && Menu_3!=null)
	{
		Menu_3.dismiss();
		Menu_3=null;
		Menu_2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	}
	else if(Menu_3==null && Menu_2!=null)
	{
		Menu_2.dismiss();
		Menu_2=null;
		Menu_1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	}
	else if(Menu_2==null && Menu_1!=null)
	{
		Menu_1.dismiss();
		Menu_1=null;
		MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
	}*/
}
function Menu_addText(layout,Params,text,color,size)//添加文本
{
	var Text = new android.widget.TextView(ctx);
	Text.setTextSize(size);
	if(color!="" && color!=undefine)
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
	if(color!="" && color!=undefine)
	{
		button.setTextColor(color);
	}
	if(size!=undefine)
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
	if(color!="" && color!=undefine)
	{
		Check.setTextColor(color);
	}
	if(size!=undefine)
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
//**********************************************************物品生成菜单**********************************************************

function openAddItemMenu(ctx, id, damage){//显示添加物品菜单
	try{
		var menu = new android.widget.PopupWindow();
			menu.setFocusable(true);
			infoMenu = menu;
			
		var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			
		var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
		Menu_addText(layout,textParams,"物品生成菜单","",24);
		Menu_addText(layout,textParams,"生成物品","",14);
		Menu_addText(layout,textParams,"物品ID：","",14);
		
		var itemId = new android.widget.EditText(ctx);
			itemId.setText(id+"");
			itemId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			layout.addView(itemId);
		Menu_addText(layout,textParams,"附加值：","",14);
		var itemDmg = new android.widget.EditText(ctx);
			itemDmg.setText(damage+"");
			itemDmg.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			layout.addView(itemDmg);
		Menu_addText(layout,textParams,"数量：","",14);
		var itemCount = new android.widget.EditText(ctx);
			itemCount.setText("1");
			itemCount.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
			layout.addView(itemCount);
			
		var addBtnParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			addBtnParams.setMargins(0, dip2px(ctx, 10), 0, 0);
			
		var add = new android.widget.Button(ctx);
			add.setText("生成");
			add.setLayoutParams(addBtnParams);
			add.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
					addItemInventory(parseInt(itemId.getText()),parseInt(itemCount.getText()),parseInt(itemDmg.getText()));
				}
			}));
			layout.addView(add);
			
		var fullstack = new android.widget.Button(ctx);
			fullstack.setText("生成一组");
			fullstack.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
					 addItemInventory(parseInt(itemId.getText()),64,parseInt(itemDmg.getText()));
			}}));
			layout.addView(fullstack);
		
		var mlayout = makeMenu(ctx, menu, layout);
			menu.setContentView(mlayout);
			menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/2.4);
			menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
			menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
			menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	}catch(err){
		catchmsg(11,err);
	}
}

function addMenuItem(ctx, layout, text, id, data){//添加菜单按钮
	var button = new android.widget.Button(ctx);
	button.setText(text);
	button.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			openAddItemMenu(ctx, id, data);
		}
	}));
	layout.addView(button);
}

function openSubMenu(ctx, cname, cat){//显示二级菜单
	try{
		var menu = new android.widget.PopupWindow();
		menu.setFocusable(true);
		subMenu = menu;
		
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
		var title = new android.widget.TextView(ctx);
		title.setTextSize(24);
		title.setText("物品生成菜单");
		title.setLayoutParams(textParams);
		layout.addView(title);
		var stitle = new android.widget.TextView(ctx);
		stitle.setTextSize(14);
		stitle.setText(cname);
		stitle.setLayoutParams(textParams);
		layout.addView(stitle);
		for(var i=0;i<cat.length;i++)
			addMenuItem(ctx, layout, cat[i].name, cat[i].id, cat[i].data);
		var mlayout = makeMenu(ctx, menu, layout);
		
		menu.setContentView(mlayout);
		menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/2.4);
		menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
		menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
		menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	}catch(err){
		catchmsg(11,err);
	}
}

function addMenuCategory(ctx, layout, text, catid){
	var button = new android.widget.Button(ctx);
	button.setText(text);
	button.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			if(catid == null){
				openAddItemMenu(ctx, 1, 0);
			}else{
				openSubMenu(ctx, text, catid);
			}
		}
	}));
	layout.addView(button);
}

function makeMenu(ctx, menu, layout){
	var mlayout = new android.widget.RelativeLayout(ctx);
	var xbutton = new android.widget.Button(ctx);
		xbutton.setText("X");
		xbutton.setWidth(18);
		xbutton.setHeight(18);
	var btnParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
		btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
		xbutton.setLayoutParams(btnParams);
		xbutton.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(viewarg) {
			menu.dismiss();
			menu = null;
		}
	}));
	var svParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
	var scrollview = new android.widget.ScrollView(ctx);
	var pad = dip2px(ctx, 5);
		scrollview.setPadding(pad, pad, pad, pad);
		scrollview.setLayoutParams(svParams);
		scrollview.addView(layout);
		mlayout.addView(scrollview);
		mlayout.addView(xbutton);
	return mlayout;
}

function openMenu(){
	try{
		var menu = new android.widget.PopupWindow();
		menu.setFocusable(true);
		mainMenu = menu;
		
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		
		
		var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
		var title = new android.widget.TextView(ctx);
		title.setTextSize(24);
		title.setText("物品生成菜单");
		title.setLayoutParams(textParams);
		layout.addView(title);
		var stitle = new android.widget.TextView(ctx);
		stitle.setTextSize(14);
		stitle.setText("by 风鸟");
		stitle.setLayoutParams(textParams);
		layout.addView(stitle);
		addMenuCategory(ctx, layout, "初始装备", ITEM_DEFAULT);
		//addMenuCategory(ctx, layout, "建筑方块", ITEM_BUILDING_BLOCKS);
		//addMenuCategory(ctx, layout, "装饰性方块", ITEM_DECORATION_BLOCKS);
		//addMenuCategory(ctx, layout, "交通运输", ITEM_TRANSPORTATION);
		//addMenuCategory(ctx, layout, "杂项", ITEM_MISCELLANEOUS);
		addMenuCategory(ctx, layout, "食物", ITEM_FOODSTUFFS);
		addMenuCategory(ctx, layout, "工具", ITEM_TOOLS);
		addMenuCategory(ctx, layout, "战斗用品", ITEM_COMBAT);
		//addMenuCategory(ctx, layout, "材料", ITEM_MATERIALS);
		addMenuCategory(ctx, layout, "通过物品ID添加", null);
		
		var mlayout = makeMenu(ctx, menu, layout);
		
		menu.setContentView(mlayout);
		menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/2.4);
		menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
		menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
		menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	}catch(err){
		catchmsg(11,err);
	}
}
//********************************变量组声明区 ********************************
//实体列表
var Entitylist=new Array(
	{id:10,name:"鸡",unspawn:false},
	{id:11,name:"牛",unspawn:false},
	{id:12,name:"猪",unspawn:false},
	{id:13,name:"羊",unspawn:false},
	{id:14,name:"狼",unspawn:false},
	{id:15,name:"村民",unspawn:false},
	{id:16,name:"哞菇",unspawn:false},
	{id:32,name:"僵尸",unspawn:false},
	{id:33,name:"爬行者",unspawn:false},
	{id:34,name:"骷髅",unspawn:false},
	{id:35,name:"蜘蛛",unspawn:false},
	{id:36,name:"僵尸猪人",unspawn:false},
	{id:37,name:"史莱姆",unspawn:false},
	{id:38,name:"末影人",unspawn:false},
	{id:39,name:"蠹虫",unspawn:false},
	{id:65,name:"激活的TNT",unspawn:false},
	{id:81,name:"扔出的雪球",unspawn:false},
	{id:82,name:"扔出的鸡蛋",unspawn:false},
	{id:83,name:"画",unspawn:false},
	{id:84,name:"矿车",unspawn:false});
//盔甲ID表
var Armor_1=[298,302,306,310,314];
var Armor_2=[299,303,307,311,315];
var Armor_3=[300,304,308,312,316];
var Armor_4=[301,305,309,313,317];
//工具ID表
var Tools=[256,257,258,259,261,267,268,269,270,271,272,273,274,275,276,277,278,279,290,291,292,293,294,359];

//物品生成菜单
//********************初始装备********************
var ITEM_DEFAULT = [
	{name: "钻石头盔", id: 310, data: 0},
	{name: "钻石胸甲", id: 311, data: 0},
	{name: "钻石护腿", id: 312, data: 0},
	{name: "钻石靴子", id: 313, data: 0},
	{name: "钻石剑", id: 276, data: 0},
	{name: "钻石锹", id: 277, data: 0},
	{name: "钻石镐", id: 278, data: 0},
	{name: "钻石锄", id: 293, data: 0},
	{name: "钻石斧", id: 279, data: 0},
	{name: "工作台", id: 58, data: 0},
	{name: "床", id: 355, data: 0},
	{name: "火把", id: 50, data: 0},
	{name: "钻石块", id: 57, data: 0},
	{name: "橡木", id: 17, data: 0}];
 
//********************食物********************
var ITEM_FOODSTUFFS = [
	{name: "苹果", id: 260, data: 0},
	{name: "棕蘑菇", id: 39, data: 0},
	{name: "红蘑菇", id: 40, data: 0},
	{name: "蘑菇汤", id: 282, data: 0},
	{name: "生猪排", id: 319, data: 0},
	{name: "熟猪排", id: 320, data: 0},
	{name: "生牛排", id: 363, data: 0},
	{name: "熟牛排", id: 364, data: 0},
	{name: "生鸡肉", id: 365, data: 0},
	{name: "熟鸡肉", id: 366, data: 0},
	{name: "蛋糕", id: 354, data: 0}];
//********************工具********************
var ITEM_TOOLS = [
	{name: "钻石锹", id: 277, data: 0},
	{name: "钻石镐", id: 278, data: 0},
	{name: "钻石锄", id: 293, data: 0},
	{name: "钻石斧", id: 279, data: 0},
	{name: "金锹", id: 284, data: 0},
	{name: "金镐", id: 285, data: 0},
	{name: "金锄", id: 294, data: 0},
	{name: "金斧", id: 286, data: 0},
	{name: "铁锹", id: 256, data: 0},
	{name: "铁镐", id: 257, data: 0},
	{name: "铁锄", id: 292, data: 0},
	{name: "铁斧", id: 258, data: 0},
	{name: "石锹", id: 273, data: 0},
	{name: "石镐", id: 274, data: 0},
	{name: "石锄", id: 291, data: 0},
	{name: "石斧", id: 275, data: 0},
	{name: "木锹", id: 269, data: 0},
	{name: "木镐", id: 270, data: 0},
	{name: "木锄", id: 290, data: 0},
	{name: "木斧", id: 271, data: 0},
	{name: "打火石", id: 259, data: 0},
	{name: "剪刀", id: 359, data: 0}];
//********************战斗用品********************
var ITEM_COMBAT = [
	{name: "钻石头盔", id: 310, data: 0},
	{name: "钻石胸甲", id: 311, data: 0},
	{name: "钻石护腿", id: 312, data: 0},
	{name: "钻石靴子", id: 313, data: 0},
	{name: "金头盔", id: 314, data: 0},
	{name: "金胸甲", id: 315, data: 0},
	{name: "金护腿", id: 316, data: 0},
	{name: "金靴子", id: 317, data: 0},
	{name: "铁头盔", id: 306, data: 0},
	{name: "铁胸甲", id: 307, data: 0},
	{name: "铁护腿", id: 308, data: 0},
	{name: "铁靴子", id: 309, data: 0},
	{name: "锁链头盔", id: 302, data: 0},
	{name: "锁链胸甲", id: 303, data: 0},
	{name: "锁链护腿", id: 304, data: 0},
	{name: "锁链靴子", id: 305, data: 0},
	{name: "皮革头盔", id: 298, data: 0},
	{name: "皮革胸甲", id: 299, data: 0},
	{name: "皮革护腿", id: 300, data: 0},
	{name: "皮革靴子", id: 301, data: 0},
	{name: "钻石剑", id: 276, data: 0},
	{name: "金剑", id: 283, data: 0},
	{name: "铁剑", id: 267, data: 0},
	{name: "石剑", id: 272, data: 0},
	{name: "木剑", id: 268, data: 0},
	{name: "弓", id: 261, data: 0},
	{name: "箭", id: 262, data: 0}];
