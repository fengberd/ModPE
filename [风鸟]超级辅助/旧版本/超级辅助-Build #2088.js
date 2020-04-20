/*本js由风鸟制作！严禁抄袭或修改版权！！
BUG反馈或建议：
	搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）
	请在反馈时标明Build号以及错误现象、出现方式
	
	感谢a5的玩家ID技术支持（0.9不能用了QAQ）
	感谢@亡灵战尸 的冰块不融化建议（虽然做出来关不掉→_→）
	感谢@亡灵战尸 的永夜永昼建议
	感谢张卓伟的Block Launcher启动器
	感谢MojangAB的MinecraftPE
	请有能力的人支持正版
*/
/*
备忘：
	
	
*/
//********************************变量声明区开始********************************
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var build="Build #2088";
var Bugmsg="BUG反馈或建议：\n搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）\n到百度贴吧“FENGberd吧”的超级辅助内测贴提出\n请在反馈时标明Build号以及错误现象、出现方式";//BUG反馈信息
var FENGberdmsg="\n欢迎使用超级辅助\n作者：风鸟\n尊重作者版权，请勿修改\n\n!!!警告：请将启动器更新到1.7.8及以上才能使用本辅助!!!"//版权信息，你特么要改？你改了你就帮我更新吧，我还懒得更了呢
var updatemsg="Build #2088:\n  -修改大量for算法，出现问题请反馈\n  -加入信息采集工具\n  -加入跳跃提升模式\n  -修复渣机优化对部分功能的影响\n  -增加了真.飞行模式，调整伪飞行模式\n  -修正了望远镜模式的距离\n  -修复了工具永不损坏模式对金制工具无效的bug\n  -小小的优化了下调试模式的Y轴算法\nBuild #2087:\n  -修复了靠近透视，抛弃矿车+方块，随时随地使用\n  -增加渣机优化功能，牺牲部分性能来提高FPS\nBuild #2086:\n  -加入喜闻乐见的Logo\n  -加入望远镜模式\n  -加入期待已久的透视\n  -修复玩家模型修改菜单\nBuild #2085:\n  -调整GUI宽度及染色问题\n  -增加更新内容提示\n  -增加实体移除、不生成实体的功能\n  -增加工具、盔甲永不损坏的功能\n  -修正io流的问题\n  -优化算法"//更新内容

var first=true;//是否第一次运行
var loaded=false;//已载入
var god=false;//无敌
var jmptime=0,addjump=1;//跳跃提升
var skill=false;//秒杀
var blocksss=false;//无限放置方块
var debug=false,debugWindow=null,dtext=null,tmpx,tmpy,tmpz;//调试模式
var backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
var diet=false,diex=0,diey=0,diez=0;//返回死亡地点
var fly=false,upvel=0,upBtnWindow=null,downBtnWindow=null;//伪飞行
var saveworld=false,savemob=false,savepicture=false;//保护模式
var xray={light:false,on:false,near:false,nearid:55,neara:0,nearb:0,nearc:0,gold:true,iron:true,coal:true,ll:true,diamond:true,redstone:true,lredstone:true,emerald:true,xray2:false};//透视
var message={explodehook:false,destroyblock:false,entityaddedhook:false,entityremovedhook:false,deathhook:false,proccmd:false,chathook:false,useitem:false,attackhook:false,leveleventhook:false};//信息采集
var PlayerEnt;//玩家实体ID
var sneaking=false;//潜行模式
var magnet=false;//磁铁模式
var sandnodown=false;//沙不掉落
var always=0,t=0;//0关闭，1永夜，2永昼
var username="";//用户名
var printmode=false;//针对没有中文修复补丁的mc玩家
var neverbad={tools:false,armor:false};//工具盔甲永不损坏
var no_colormode=false;//不明觉厉的功能233
var fovset=false;//望远镜
var lasteval="";//最后一次执行的命令
var goodatbadphone=0,badphonei=0;//渣机优化
//functions
var modtick="";
var deathhook="";
var useitem="";
var destroyblock="";
var attackhook="";
//GUI
var MainWindow = null;//主按钮
var seeFovWindow=null,seeFovSeek=null;//望远镜窗口
var MessageWindow=null,MessageText=null,messagelogs="";//信息采集窗口

var mainMenu = null;
var subMenu = null;
var infoMenu = null;

var Menus_MainMenu;
var Menus_ModMenu;
var Menus_PlayerMenu;
var Menus_X_RayMenu;
var Menus_TimeMenu;
var Menus_TpMenu;
var Menus_MoreMenu;
var Menus_RemoveEntityMenu;
var Menus_UnspawnMenu;
var Menus_MessageMenu;
//********************************变量声明区结尾********************************

Block.defineBlock(xray.nearid,"X-Ray_Block","glass",50,true);
Block.setLightLevel(xray.nearid,15);
Block.setShape(xray.nearid,0,3,0,0,0,0);

//********************************游戏内HOOK函数区********************************
function destroyBlock(x,y,z,side)//方块破坏钩子
{
	if(message.destroyblock)
	{
		printHookData("destroyBlock\nx:"+x+" y:"+y+" z:"+z+" side:"+side);
	}
	if(saveworld)
	{
		preventDefault();
	}
	eval(destroyblock);
}
function levelEventHook(entity,eventType,x,y,z,data)//存档事件钩子
{
	if(message.leveleventhook)
	{
		printHookData("levelEventHook\nentity:"+entity+" eventType:"+eventType+" x:"+x+" y:"+y+" z:"+z+" data:"+data);
	}
}
function entityAddedHook(ent)//实体添加
{
	if(message.entityaddedhook)
	{
		printHookData("entityAddedHook\nent:"+ent);
	}
	var type=Entity.getEntityTypeId(ent),i;
	for(i=0;i<Entitylist.length;i++)
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
	if(message.entityremovedhook)
	{
		printHookData("entityRemovedHook\nent:"+ent);
	}
}
function explodeHook(ent,x,y,z,power)//爆炸钩子
{
	if(message.explodehook)
	{
		printHookData("explodeHook\nent:"+ent+" x:"+x+" y:"+y+" z:"+z+" power:"+power);
	}
}
function deathHook(m, v)//实体死亡
{
	if(message.deathhook)
	{
		printHookData("deathHook\nm:"+m+" v:"+v);
	}
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
	if(message.proccmd)
	{
		printHookData("procCmd\ncmd:"+cmd);
	}
	usecmd(cmd);
}
function chatHook(c)
{
	if(message.chathook)
	{
		printHookData("chatHook\nc:"+c);
	}
	if(c=="233")
	{
		CM("<Herobrine>"+getColor("yellow")+"2333333333","white");
	}
}
function attackHook(a,e)//生物被攻击
{
	if(message.attackhook)
	{
		printHookData("attackHook\na:"+a+" e:"+e);
	}
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
	if(message.useitem)
	{
		printHookData("useItem\nx:"+x+" y:"+y+" z:"+z+" itemId:"+itemId+" blockId:"+blockId+" side:"+side+" itemDamage:"+itemDamage+" blockDamage:"+blockDamage);
	}
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
	if(addjump>1)
	{
		jmptime--;
		if(Entity.getVelY(PlayerEntity)>=0.23)
		{
			if(jmptime<=0)
			{
				jmptime=5*addjump;
				Entity.setVelY(PlayerEntity,(0.26*addjump));
			}
		}
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
	if(goodatbadphone!=0)
	{
		badphonei++;
		if(badphonei>=goodatbadphone)
		{
			badphonei=0;
		}
		else
		{
			return;
		}
	}
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
		for(i=0;i<Tools.length;i++)
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
					tmpy=Entity.getY(PlayerEntity)-1+"000.000";
					tmpy=tmpy.split(".");
					tmpy=parseInt(tmpy[0])+"."+parseInt(tmpy[1][0])+parseInt(tmpy[1][1])+parseInt(tmpy[1][2]);
					tmpz=Entity.getZ(PlayerEntity)+"000.000";
					tmpz=tmpz.split(".");
					tmpz=parseInt(tmpz[0])+"."+parseInt(tmpz[1][0])+parseInt(tmpz[1][1])+parseInt(tmpz[1][2]);
					dtext.setText("\nX:"+tmpx+"   RAM:"+getMemory()+"  实体数:"+Entity.getAll().length+"\nY:"+tmpy+"  Entity:"+PlayerEntity+"  Time:"+Level.getTime()+"\nZ:"+tmpz+ "  Item:"+Player.getCarriedItem()+":"+Player.getCarriedItemData());
				}
				catch(err)
				{
					catchmsg(10,err);
				}
			}
		}));
	}
	if(xray.near)
	{
		if(PlayerEntity!=null && Level.getWorldDir()!=null)
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
		}
	}
	else
	{
		if(getTile(xray.neara,xray.nearb,xray.nearc)==xray.nearid)
		{
			setTile(xray.neara,xray.nearb,xray.nearc,0);
		}
	}
	eval(modtick);
}
function leaveGame()//退出存档
{
	//重置功能
	god=false;//无敌
	skill=false;//秒杀
	sandnodown=false;//沙不掉落
	jmptime=0,addjump=1;//跳跃提升
	debug=false;//调试模式
	blocksss=false;//无限放置方块
	backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
	diet=false,diex=0,diey=0,diez=0;//返回死亡地点
	fly=false,upvel=0;//飞行
	always=0;//永夜永昼
	saveworld=false,savemob=false,savepicture=false;//保护模式
	sneaking=false;//潜行模式
	fovset=false;ModPE.resetFov();//关闭望远镜
	magnet=false;//磁铁模式
	neverbad.tools=false,neverbad.armor=false;//工具盔甲永不损坏
	xray.near=false,xray.neara=0,xray.nearb=0,xray.nearc=0;//靠近透视
	messagelogs="";//信息采集记录
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
				if(seeFovWindow != null)//关闭望远镜
				{
					seeFovWindow.dismiss();
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
				MessageWindow.dismiss();
			}
			catch(err)
			{
				catchmsg(13,err);
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
		showLogo(logo,"欢迎使用超级辅助\n作者:风鸟\n请尊重作者版权！\n载入中...");
		print(FENGberdmsg);
		print(FENGberdmsg);
		print(Bugmsg);
		print(Bugmsg);
		GUI_init();
		checkUpdate();
		if(!(parseInt(load2("goodatbadphone"))>=0))
		{
			save2("goodatbadphone","0");
			goodatbadphone=0;
		}
		else
		{
			goodatbadphone=parseInt(load2("goodatbadphone"));
		}
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
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				MainWindow = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx);
				var button = new android.widget.Button(ctx);
				button.setText("F");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg)
					{
						if(loaded)
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
								{kind:"button",text:"透视菜单",data:"X-RAY"},
								{kind:"button",text:"其他功能",data:"MOREMENU"},
								{kind:"button",text:"Eval system",data:"DEBUGNOW"},
								{kind:"check",text:"print mode",data:"printmode",torf:printmode},
								{kind:"check",text:"no color mode",data:"no_colormode",torf:no_colormode});
							Menu_open(Menus_MainMenu);
						}
						else
						{
							print("正在加载，请稍等！");
						}
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx, 42));
				MainWindow.setHeight(dip2px(ctx, 42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
				MessageWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
			}
			catch(err)
			{
				catchmsg(10,err);
			}
		}
	}));
}
//********************************自定义函数区********************************
function showLogo(data,texts)
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run:function()
		{
			try
			{
				var imgbase=android.util.Base64.decode(data,0);
				var layout=new android.widget.LinearLayout(ctx);
				var text=null;
				var image = new android.widget.ImageView(ctx);
				image.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
				image.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1,-1,1));
				image.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(imgbase,0,imgbase.length));
				layout.setOrientation(1);
				layout.addView(image);
				if(texts!="" && texts!=undefined)
				{
				 	text=new android.widget.TextView(ctx);
					text.setText(texts);
					text.setTextColor(android.graphics.Color.WHITE);
					text.setGravity(17);
					layout.addView(text);
				}
				var Window=new android.widget.PopupWindow();
				Window.setContentView(layout);
				Window.setWidth(dip2px(ctx,250));
				Window.setHeight(dip2px(ctx,200));
				Window.setTouchable(false);
				Window.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
				new android.os.Handler().postDelayed(new java.lang.Runnable(
				{ 
					run: function()
					{
						try
						{
							Window.dismiss();
							Window=null;
							loaded=true;
						}
						catch(err)
						{
							catchmsg(10,err);
						}
					}
				}),8000);
			}
			catch(err)
			{
				catchmsg(-1,err)
			}
		}
	}));
}
function printHookData(data)
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run:function()
		{
			try
			{
				messagelogs=messagelogs+"--------------------\n触发"+data+"\n";
				MessageText.setText("触发"+data);
				new android.os.Handler().postDelayed(new java.lang.Runnable(
				{ 
					run: function()
					{
						try
						{
							if(MessageText.getText()=="触发"+data)
							{
								MessageText.setText("");
							}
						}
						catch(err)
						{
							catchmsg(-1,err);
						}
					}
				}),4000);
			}
			catch(err)
			{
				catchmsg(-1,err)
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
function checkUpdate()
{
	try
	{
		var vdir = new java.io.File("/sdcard/games/com.mojang/minecraftpe/supercheat/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
		}
		if(new java.io.File("/sdcard/games/com.mojang/minecraftpe/supercheat/debug.dat").exists())
		{
			selectDialog("超级辅助 - "+build+" -已更新","更新日志:\n"+updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
		}
		var vfile = new java.io.File("/sdcard/games/com.mojang/minecraftpe/supercheat/version.dat");
		if(vfile.exists())
		{
			var reader = new java.io.BufferedReader(new java.io.FileReader(vfile),8192);
			if(parseInt(build.split("#")[1])>parseInt(reader.readLine()))
			{
				reader.close();
				selectDialog("超级辅助 - "+build+" -已更新","更新日志:\n"+updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
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
			vfile.createNewFile();
			selectDialog("欢迎使用超级辅助 - "+build+"！","更新日志:\n"+updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
			var writer = new java.io.FileOutputStream(vfile);
			writer.write(build.split("#")[1]);
			writer.close();
		}
	}
	catch(err)
	{
		catchmsg(12,err);
	}
}
function replaceToSmall(str)//转换到小写
{
	var bigs=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var smalls=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var data=str;
	for(i=0;i<bigs.length;i++)
	{
		data=data.replace(bigs[i],smalls[i]);
	}
	return data;
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
		for (i=0;i<list.length;i++)
		{
			Block.setShape(list[i],0,0,0,1,1,1);
		}
	}
	if(xray.light)//矿石发光
	{
		for(i=0;i<list.length;i++)
		{
			Block.setLightLevel(list[i],15);
		}
	}
	else
	{
		for(i=0;i<list.length;i++)
		{
			Block.setLightLevel(list[i],0);
		}
	}
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
			eval("try{"+tmpt+"}catch(err){catchmsg(11,err)}");
		}
		catch(err)
		{
			catchmsg(11,err);
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
						catchmsg(10,err);
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
			for(i=0;i<Entitylist.length;i++)
			{
				Entitylist[i].unspawn=!Entitylist[i].unspawn;
			}
		}
		else
		{
			for(i=0;i<Entitylist.length;i++)
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
			for(i=0;i<entlist.length;i++)
			{
				Entity.remove(entlist[i]);
			}
			CM("已移除"+i+"个实体","green");
		}
		else
		{
			var count=0;
			for(i=0;i<entlist.length;i++)
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
	/////////////////////////////////////////////////////////////////望远镜
	case"seefov":
		fovset=!fovset;
		if(fovset)
		{
			seeFovSeek.setProgress(0);
			seeFovWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
		}
		else
		{
			ModPE.resetFov();
			seeFovWindow.dismiss();
		}
		break;
	/////////////////////////////////////////////////////////////////透视
	case"xray":
		switch(Data[1])
		{
		case"on":
			xray.on=!xray.on;
			break;
		case"near":
			xray.near=!xray.near;
			CM("退存档前记得关掉","yellow");
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
		CM("请调整一次能见度并恢复","yellow");
		XRAY_Update();
		break;
	/////////////////////////////////////////////////////////////////渣机优化
	case"goodatbadphone":
		goodatbadphone=parseInt(Data[1]);
		save2("goodatbadphone",goodatbadphone);
		break;
	/////////////////////////////////////////////////////////////////渣机优化
	case"rfly":
		var Can=!Player.canFly();
		Player.setCanFly(Can);
		Player.setFlying(Can);
		break;
	/////////////////////////////////////////////////////////////////显示更新日志
	case"showupdatelog":
		selectDialog("超级辅助 - 更新日志",updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
		break;
	/////////////////////////////////////////////////////////////////显示事件日志
	case"showmessagelog":
		selectDialog("超级辅助 - 事件采集工具 - 查看日志",messagelogs,android.R.drawable.stat_notify_chat,"确定","保存到SD卡","","if(writeText(\"/sdcard/超级辅助-信息采集日志.txt\",messagelogs)){print(\"已保存到/sdcard/超级辅助-信息采集日志.txt\");}else{print(\"保存失败！\");}");
		break;
	/////////////////////////////////////////////////////////////////信息采集
	case"message":
		if(Data[1]=="all")
		{
			for(i=0;i<messagelist.length;i++)
			{
				usecmd("message "+replaceToSmall(messagelist[i]));
			}
		}
		else
		{
			eval("message."+Data[1]+"=!"+"message."+Data[1]);
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
	try{
		seeFovWindow = new android.widget.PopupWindow();
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		seeFovSeek = new android.widget.SeekBar(ctx);
		seeFovSeek.setMax(100);
		seeFovSeek.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
		{
			onProgressChanged:function(p1,p2,p3)
			{
				ModPE.setFov((p2-102)*-1);
			}
		});
		layout.addView(seeFovSeek);
		seeFovWindow.setContentView(layout);
		seeFovWindow.setWidth(dip2px(ctx,200));
		seeFovWindow.setHeight(dip2px(ctx,35));
		MessageWindow = new android.widget.PopupWindow();
		var msglayout = new android.widget.LinearLayout(ctx);
		msglayout.setOrientation(1);
		MessageText = new android.widget.TextView(ctx);
		MessageText.setTextSize(15);
		MessageText.setGravity(android.view.Gravity.RIGHT);
		MessageText.getPaint().setFakeBoldText(true);
		MessageText.setTextColor(android.graphics.Color.YELLOW);
		msglayout.addView(MessageText);
		MessageWindow.setContentView(msglayout);
		MessageWindow.setWidth(dip2px(ctx, 200));
		MessageWindow.setHeight(dip2px(ctx, 200));
		MessageWindow.setTouchable(false);
	}
	catch(err)
	{
		catchmsg(10,err);
	}
	Menus_ModMenu=new Array(
		{kind:"text",text:"玩家模型修改",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"text",text:"警告：多人游戏中可能崩溃",color:android.graphics.Color.YELLOW,size:16},
		{kind:"text",text:"警告：请调到第三人称使用，否则会造成崩溃",color:android.graphics.Color.YELLOW,size:16},
		{kind:"text",text:"友好生物：",color:"",size:20},
		{kind:"button",text:"鸡",data:"editmod 5 mob/chicken.png"},
		{kind:"button",text:"牛",data:"editmod 6 mob/cow.png"},
		{kind:"button",text:"哞菇",data:"editmod 7 mob/mooshroom.png"},
		{kind:"button",text:"猪",data:"editmod 8 mob/pig.png"},
		{kind:"button",text:"羊",data:"editmod 9 mob/sheep_0.png"},
		{kind:"button",text:"村民",data:"editmod 11 mob/villager/villager.png"},
		{kind:"text",text:"中立生物：",color:"",size:20},
		{kind:"button",text:"史莱姆(不会显示)",data:"editmod 18 mob/slime.png"},
		{kind:"button",text:"末影人",data:"editmod 19 mob/enderman.png"},
		{kind:"text",text:"敌对生物：",color:"",size:20},
		{kind:"button",text:"僵尸",data:"editmod 13 mob/zombie.png"},
		{kind:"button",text:"骷髅",data:"editmod 14 mob/skeleton.png"},
		{kind:"button",text:"蜘蛛",data:"editmod 15 mob/spider.png"},
		{kind:"button",text:"蠹虫",data:"editmod 16 mob/silverfish.png"},
		{kind:"button",text:"爬行者",data:"editmod 17 mob/creeper.png"},
		{kind:"button",text:"僵尸猪人",data:"editmod 3 mob/pigzombie.png"},
		{kind:"text",text:"特殊实体：",color:"",size:20},
		{kind:"button",text:"箭",data:"editmod 20 item/arrows.png"},
		{kind:"button",text:"鸡蛋",data:"editmod 22 mob/char.png"},
		{kind:"button",text:"雪球",data:"editmod 23 mob/char.png"},
		{kind:"button",text:"奇怪的更新方块",data:"editmod 25 mob/char.png"},
		{kind:"button",text:"矿车",data:"editmod 26 entity/minecart.png"},
		{kind:"text",text:"还原：",color:"",size:20},
		{kind:"button",text:"玩家",data:"editmod 21 mob/char.png"});
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
		{kind:"button",text:"移除指定实体",data:"REMOVEENTITY"},
		{kind:"button",text:"过滤指定实体",data:"UNSPAWNENTITY"});
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
			{kind:"check",text:"飞行模式",data:"rfly",torf:Player.canFly()},
			{kind:"check",text:"{伪}飞行模式",data:"fly",torf:fly},
			{kind:"check",text:"潜行模式",data:"sneaking",torf:sneaking},
			{kind:"check",text:"秒杀模式",data:"skill",torf:skill},
			{kind:"check",text:"调试模式",data:"debug",torf:debug,color:android.graphics.Color.YELLOW},
			{kind:"check",text:"磁铁模式",data:"magnet",torf:magnet},
			{kind:"check",text:"永夜模式",data:"always 1",torf:always==1},
			{kind:"check",text:"永昼模式",data:"always 2",torf:always==2},
			{kind:"check",text:"望远镜模式",data:"seefov",torf:fovset},
			{kind:"check",text:"画保护模式",data:"savepicture",torf:savepicture},
			{kind:"check",text:"世界保护模式",data:"saveworld",torf:saveworld},
			{kind:"check",text:"实体保护模式",data:"savemob",torf:savemob},
			{kind:"check",text:"无限放置方块",data:"blocksss",torf:blocksss},
			{kind:"check",text:"沙和砂砾不掉落",data:"sandnodown",torf:sandnodown},
			{kind:"check",text:"工具永不损坏",data:"neverbad tools",torf:neverbad.tools},
			{kind:"check",text:"盔甲永不损坏",data:"neverbad armor",torf:neverbad.armor},
			{kind:"button",text:"冰不滑不融化(玩坏233)",data:"keepice"},
			{kind:"button",text:"制造爆炸",data:"explode 4.0"},
			{kind:"button",text:"制造大爆炸",data:"explode 10.0"},
			{kind:"button",text:"信息采集工具",data:"MESSAGEMENU",color:android.graphics.Color.YELLOW},
			{kind:"button",text:"显示更新日志",data:"showupdatelog",color:android.graphics.Color.YELLOW},
			{kind:"text",text:"跳跃高度提升：",color:"",size:21},
			{kind:"jumpSeek"},
			{kind:"text",text:"渣机优化级别：",color:"",size:21},
			{kind:"badphoneSeek"});
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
	case"X-RAY":
		Menus_X_RayMENU=new Array(
			{kind:"text",text:"透视菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
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
			{kind:"check",text:"新透视算法",data:"xray xray2",torf:xray.xray2});
		Menu_open(Menus_X_RayMENU);
		break;
	case"REMOVEENTITY":
		Menus_RemoveEntityMenu=new Array(
			{kind:"text",text:"移除指定实体",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"button",text:"移除:所有实体",data:"removeentity all"});
		for(i=0;i<Entitylist.length;i++)
		{
			Menus_RemoveEntityMenu.push({kind:"button",text:"移除:"+Entitylist[i].name,data:"removeentity "+Entitylist[i].id});
		}
		Menu_open(Menus_RemoveEntityMenu);
		break;
	case"MESSAGEMENU":
		var tblond=message.explodehook && message.destroyblock && message.entityaddedhook && message.entityremovedhook && message.deathhook && message.proccmd && message.chathook && message.useitem && message.attackhook && message.leveleventhook;
		Menus_MessageMenu=new Array(
			{kind:"text",text:"信息采集钩子",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"button",text:"显示记录日志",data:"showmessagelog"},
			{kind:"check",text:"输出:所有function",data:"message all",torf:tblond},
			{kind:"check",text:"输出:explodeHook",data:"message explodehook",torf:message.explodehook},
			{kind:"check",text:"输出:destroyBlock",data:"message destroyblock",torf:message.destroyblock},
			{kind:"check",text:"输出:entityAddedHook",data:"message entityaddedhook",torf:message.entityaddedhook},
			{kind:"check",text:"输出:entityRemovedHook",data:"message entityremovedhook",torf:message.entityremovedhook},
			{kind:"check",text:"输出:deathHook",data:"message deathhook",torf:message.deathhook},
			{kind:"check",text:"输出:procCmd",data:"message proccmd",torf:message.proccmd},
			{kind:"check",text:"输出:chatHook",data:"message chathook",torf:message.chathook},
			{kind:"check",text:"输出:useItem",data:"message useitem",torf:message.useitem},
			{kind:"check",text:"输出:attackHook",data:"message attackhook",torf:message.attackhook},
			{kind:"check",text:"输出:levelEventHook",data:"message leveleventhook",torf:message.leveleventhook});
		Menu_open(Menus_MessageMenu);
		break;
	case"UNSPAWNENTITY":
		var tblond=true;
		for(i=0;i<Entitylist.length;i++)
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
		for(i=0;i<Entitylist.length;i++)
		{
			Menus_UnspawnMenu.push({kind:"check",text:"阻止生成:"+Entitylist[i].name,data:"unspawn "+Entitylist[i].id,torf:Entitylist[i].unspawn});
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
		catchmsg(12,err);
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
			case"jumpSeek":
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
		catchmsg(10,err);
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
		catchmsg(10,err);
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
		catchmsg(10,err);
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
var Tools=[256,257,258,259,261,267,268,269,270,271,272,273,274,275,276,277,278,279,283,284,285,286,290,291,292,293,294,359];
//信息钩子列表
var messagelist=["explodeHook","destroyBlock","entityAddedHook","entityRemovedHook","deathHook","procCmd","chatHook","useItem","attackHook","levelEventHook"];
//Logo
var logo="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";
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
