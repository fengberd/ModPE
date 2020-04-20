/*本js由风鸟制作！严禁抄袭或修改版权！！
BUG反馈或建议：
	搜索群“风鸟神教”加入（群验证：超级辅助-Server bug反馈）
	请在反馈时标明Build号以及错误现象、出现方式
*/
/*
备忘:
	
	
	
	
*/
//********************************变量声明区开始********************************
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var build="Build #0006";
var Bugmsg="BUG反馈或建议：\n搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）\n到百度贴吧“FENGberd吧”的超级辅助内测贴提出\n请在反馈时标明Build号以及错误现象、出现方式";//BUG反馈信息
var FENGberdmsg="\n欢迎使用超级辅助-Server\n作者：风鸟\n尊重作者版权，请勿修改\n\n显示为红色的功能必须把启动器更新到1.7.8以上才能用！"//版权信息，你特么要改？你改了你就帮我更新吧，我还懒得更了呢
var updatemsg="Build #0006:\n  -修正了玩家ID的获取\n  -加入了跳的更高功能\n  -优化了大量关于循环的算法\n  -修复透视菜单\n  -加入调试模式\n  -加入了隐藏按钮的功能\n  -加入了关闭辅助的功能\n  -加入了更新内容提示\n  -部分功能归纳到菜单中\n  -加入了本地游戏退出时自动重置的功能\n  -修正了枚举皮肤功能\n  -增加渣机优化功能\n  -增加望远镜模式\n  -调整了一些Dialog"//更新内容

var xray={light:false,on:false,near:false,nearid:55,neara:0,nearb:0,nearc:0,gold:true,iron:true,coal:true,ll:true,diamond:true,redstone:true,lredstone:true,emerald:true,xray2:false};//透视
var backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
var sneaking=false;//潜行模式
var PlayerEntity=0;//玩家ID
var seeFovWindow=null,seeFovSeek,fovset=false;//望远镜模式
var xiaowb=true;//小尾巴
var debug=false,debugWindow=null,dtext=null,tmpx,tmpy,tmpz;//调试模式
var saveModTick=true;//modTick的替代品
var gbp=0,gbpi=0;//渣机优化延迟
var jmptime=0,addjump=false;//跳的更高
var hidebtn=false;//隐藏左下角按钮
var Fly=false;//飞行模式
var lasteval="";
var sxbkmode=false;//丧病的快速破坏
var quick=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];//快速破坏
var qnames=["煤矿","铁矿","金矿","青金石","钻石矿","红石矿","发光红石矿","石头","圆石","木板","木头","草方块","泥土","砂砾","沙子","沙石"];
var qids=[16,15,14,21,56,73,74,1,4,5,17,2,3,13,12,24,7];
var qspeeds=[3,3,3,3,3,3,3,0.6,0.6, 1.5,1.5,0.18,0.18,0.18,0.15,0.8];

var MainWindow = null,Mainbtn=null;
var Menus_MainMenu;
var Menus_SpeedMenu;
var Menus_X_RayMENU;
var Menus_PlayerMenu;
var Menus_TpMenu;
var Menus_ChatMenu;
var Menus_QuickMenu;
var Menus_MoreMenu;
//********************************变量声明区结尾********************************

Block.defineBlock(xray.nearid,"X-Ray_Block","glass",50,true);
Block.setLightLevel(xray.nearid,15);
Block.setShape(xray.nearid,0,3,0,0,0,0);

//********************************自定义函数区********************************
function leaveGame()
{
	Susecmd("reset");
}
function newModTick()//0.05秒执行一次
{
	PlayerEntity=Player.getEntity();
	if(!(PlayerEntity>=1) || Level.getWorldDir()==null)
	{
		return;
	}
	if(addjump)
	{
		jmptime--;
		if(Entity.getVelY(PlayerEntity)>=0.23)
		{
			if(jmptime<=0)
			{
				jmptime=10;
				Entity.setVelY(PlayerEntity,0.52);
			}
		}
	}
	if(gbp!=0 && gbpi<gbp)
	{
		gbpi++;
		return;
	}
	gbpi=0;
	if(xray.near || sxbkmode)
	{
		var x=parseInt(Entity.getX(PlayerEntity));
		var y=parseInt(Entity.getY(PlayerEntity));
		var z=parseInt(Entity.getZ(PlayerEntity));
	}
	if(xray.near)
	{
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
	if(sxbkmode)
	{
		kblock(x,y+1,z);
		kblock(x,y+1,z+1);
		kblock(x,y+1,z-1);
		kblock(x+1,y+1,z+1);
		kblock(x-1,y+1,z+1);
		kblock(x+1,y+1,z-1);
		kblock(x-1,y+1,z-1);
		kblock(x+1,y+1,z);
		kblock(x-1,y+1,z);
		
		kblock(x,y,z);
		kblock(x,y,z+1);
		kblock(x,y,z-1);
		kblock(x+1,y,z+1);
		kblock(x-1,y,z+1);
		kblock(x+1,y,z-1);
		kblock(x-1,y,z-1);
		kblock(x+1,y,z);
		kblock(x-1,y,z);
		
		kblock(x,y-1,z);
		kblock(x,y-1,z+1);
		kblock(x,y-1,z-1);
		kblock(x+1,y-1,z+1);
		kblock(x-1,y-1,z+1);
		kblock(x+1,y-1,z-1);
		kblock(x-1,y-1,z-1);
		kblock(x+1,y-1,z);
		kblock(x-1,y-1,z);
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
}
function checkUpdate()
{
	try
	{
		var vdir = new java.io.File("/sdcard/games/com.mojang/minecraftpe/supercheat/server/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
		}
		if(new java.io.File("/sdcard/games/com.mojang/minecraftpe/supercheat/server/debug.dat").exists())
		{
			selectDialog("超级辅助-Server - 已更新",updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
		}
		var vfile = new java.io.File("/sdcard/games/com.mojang/minecraftpe/supercheat/server/version.dat");
		if(vfile.exists())
		{
			var reader = new java.io.BufferedReader(new java.io.FileReader(vfile),8192);
			if(parseInt(build.split("#")[1])>parseInt(reader.readLine()))
			{
				reader.close();
				selectDialog("超级辅助-Server - 已更新",updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
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
			selectDialog("欢迎使用超级辅助-Server - "+build+"！","更新日志:\n"+updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
			var writer = new java.io.FileOutputStream(vfile);
			writer.write(build.split("#")[1]);
		}
	}
	catch(err)
	{
		catchmsg(12,err);
	}
}
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
	function cth(msge)
	{
		selectDialog("超级辅助-Server - "+build+" - 出现错误",msge,android.R.drawable.stat_notify_error,"确定","退出存档","","ModPE.leaveGame()");
		clientMessage("超级辅助-Server  - "+build+" - 出现错误\n"+msge);
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
function getSkins()//枚举皮肤
{
	try
	{
		var file=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/Android/data/net.zhuoweizhang.mcpelauncher.pro/files/textures/images/mob/");
		if(!file.exists())
		{
			file.mkdirs();
		}
		var list=file.list();
		var skins=["char.png"];
		for(i=0;i<list.length;i++)
		{
			skins.push(list[i].split("/")[list[i].split("/").length-1]);
		}
		return skins;
	}
	catch(err)
	{
		catchmsg(12,err);
	}
}
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function Susecmd(cmd)//核心函数
{
	if(MainWindow==null)
	{
		print("辅助系统已关闭！如要继续使用请重启BlockLauncher");
		return;
	}
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
		if(tmpt[0]!="/" && xiaowb)
		{
			tmpt=tmpt+" (消息来自超级辅助JS)";
		}
		Server.sendChat(tmpt);
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
			save(Data[1]+"homex",Entity.getX(PlayerEntity));
			save(Data[1]+"homey",Entity.getY(PlayerEntity));
			save(Data[1]+"homez",Entity.getZ(PlayerEntity));
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
			var tx=Entity.getX(PlayerEntity);
			var ty=Entity.getY(PlayerEntity);
			var tz=Entity.getZ(PlayerEntity);
			setPosition( PlayerEntity ,backx,backy,backz);
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
	/////////////////////////////////////////////////////////////////设置传送点
	case"setwarp":
		if(Data.length==2)
		{
			save(Data[1]+"warpx",Entity.getX(PlayerEntity));
			save(Data[1]+"warpy",Entity.getY(PlayerEntity));
			save(Data[1]+"warpz",Entity.getZ(PlayerEntity));
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
				backx=Entity.getX(PlayerEntity);
				backy=Entity.getY(PlayerEntity);
				backz=Entity.getZ(PlayerEntity);
				setPosition(PlayerEntity,load(Data[1]+"warpx"),load(Data[1]+"warpy"),load(Data[1]+"warpz"));
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
			backx=Entity.getX(PlayerEntity);
			backy=Entity.getY(PlayerEntity);
			backz=Entity.getZ(PlayerEntity);
			setPosition(PlayerEntity,load(Data[1]+"homex"),load(Data[1]+"homey"),load(Data[1]+"homez"));
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
	/////////////////////////////////////////////////////////////////丧心病狂的快速破坏
	case"sxbkmode":
		sxbkmode=!sxbkmode;
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
			if(!xray.near)
			{
				if(Level.getTile(Entity.getX(PlayerEntity),Entity.getY(PlayerEntity),Entity.getZ(PlayerEntity))==xray.id)
				{
					Level.setTile(Entity.getX(PlayerEntity),Entity.getY(PlayerEntity),Entity.getZ(PlayerEntity),0)
				}
			}
			print("退服前记得关掉");
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
	/////////////////////////////////////////////////////////////////显示更新日志
	case"showupdatelog":
		selectDialog("超级辅助-Server - 更新日志",updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
		break;
	/////////////////////////////////////////////////////////////////快速破坏
	case"quick":
		if(Data[1]=="open")
		{
			for(i=0;i<quick.length;i++)
			{
				quick[i]=true;
				Block.setDestroyTime(qids[i], qspeeds[i]/2);
			}
		}
		else if(Data[1]=="close")
		{
			for(i=0;i<quick.length;i++)
			{
				quick[i]=false;
				Block.setDestroyTime(qids[i], qspeeds[i]);
			}
		}
		else
		{
			for(i=0;i<qids.length;i++)
			{
				if(Data[1]==qids[i])
				{
					quick[i]=!quick[i];
					if(quick[i])
					{
						Block.setDestroyTime(qids[i], qspeeds[i]/2);
					}
					else
					{
						Block.setDestroyTime(qids[i], qspeeds[i]);
					}
				}
			}
		}
		break;
	/////////////////////////////////////////////////////////////////小尾巴
	case"xiaowb":
		xiaowb=!xiaowb;
		break;
	/////////////////////////////////////////////////////////////////玩家操作
	case"playere":
		var tmpdatas={name:Data[2],id:Data[1]};
		pAlertDialog(tmpdatas);
		break;
	/////////////////////////////////////////////////////////////////传送到玩家
	case"tpp":
		Entity.setPosition(PlayerEntity, Entity.getX(Data[1]),Entity.getY(Data[1]),Entity.getZ(Data[1]));
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
		if(PlayerEntity!=Data[1])
		{
			Entity.rideAnimal(PlayerEntity,Data[1]);
		}
		else
		{
			print("不能骑自己!");
		}
		break;
	/////////////////////////////////////////////////////////////////取玩家ID
	case"Entity":
		PlayerEntity=Player.getEntity();
		print("成功！玩家ID:"+PlayerEntity);
		break;
	/////////////////////////////////////////////////////////////////跳跃提升
	case"addjump":
		addjump=!addjump;
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
	/////////////////////////////////////////////////////////////////隐藏按钮
	case"hidebtn":
		hidebtn=!hidebtn;
		if(hidebtn)
		{
			Mainbtn.setText("");
			Mainbtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
		}
		else
		{
			MainWindow.dismiss();
			MainWindow=null;
			showMainBtn();
		}
		break;
	/////////////////////////////////////////////////////////////////飞行模式
	case"fly":
		Fly=!Fly;
		Player.setCanFly(Fly);
		Player.setFlying(Fly);
		break;
	/////////////////////////////////////////////////////////////////飞行模式
	case"close":
		Susecmd("reset");
		MainWindow.dismiss();
		MainWindow=null;
		saveModTick=false;
		break;
	/////////////////////////////////////////////////////////////////重置
	case"reset":
		sneaking=false;
		Fly=false;
		seeFovWindow.dismiss();
		fovset=false;
		if(debug)
		{
			Susecmd("debug");
		}
		xray.near=false;
		addjump=false;
		sxbkmode=false;
		ModPE.resetFov();
		break;
	/////////////////////////////////////////////////////////////////没找到
	default:
		print("未找到指令，请检查功能是否已开发完毕");
		break;
	}
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
function kblock(x,y,z)
{
	if(getTile(x,y,z)!=0)
	{
		Level.destroyBlock(x,y,z,true);
	}
}
print(FENGberdmsg);
print(FENGberdmsg);
print(Bugmsg);
print(Bugmsg);
showMainBtn()
GUI_init();
XRAY_Update();
startModTick();
//checkUpdate();
function startModTick()
{
	var modt=new java.lang.Thread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				while(saveModTick)
				{
					newModTick();
					modt.sleep(50);
				}
			}
			catch(err)
			{
				catchmsg(-1,err);
			}
		}
	}));
	modt.start();
}
function showMainBtn()
{
	ctx.runOnUiThread(new java.lang.Runnable({ run: function()
	{
		try{
			MainWindow = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			Mainbtn = new android.widget.Button(ctx);
			Mainbtn.setText("F");
			Mainbtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg)
				{
					checkUpdate();
					var test=["var ent=PlayerEntity;Level.destroyBlock(parseInt(Entity.getX(ent)),parseInt(Entity.getY(ent))-2,parseInt(Entity.getZ(ent)),false);"];
					Menus_MainMenu=new Array(
						{kind:"text",text:"超级辅助服务器版",color:"",size:24},
						{kind:"text",text:"by 风鸟",color:"",size:16},
						{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
						{kind:"button",text:"重置",data:"reset",color:android.graphics.Color.YELLOW,size:18},
						{kind:"text",text:"退出存档/服务器前务必点击重置按钮！不按照规程操作后果自负！",color:android.graphics.Color.YELLOW,size:16},
						//{kind:"button",text:"刷新玩家ID(进服后按)",data:"Entity"},
						{kind:"button",text:"玩家操作菜单",data:"PLAYERMENU"},
						{kind:"button",text:"定点传送菜单",data:"TPMENU"},
						{kind:"button",text:"快速破坏菜单",data:"QUICKMENU"},
						{kind:"button",text:"快速聊天菜单",data:"CHATMENU"},
						{kind:"button",text:"变速菜单",data:"SPEEDMENU"},
						{kind:"button",text:"透视菜单",data:"X-RAYMENU"},
						{kind:"button",text:"其他功能&设置",data:"MOREMENU"},
						{kind:"button",text:"Eval System",data:"DEBUGNOW"},
						{kind:"button",text:"test",data:"eval "+test},
						{kind:"button",text:"关闭超级辅助-Server",data:"ASK",color:android.graphics.Color.YELLOW});
					Menu_open(Menus_MainMenu);
				}
			}));
			layout.addView(Mainbtn);
			MainWindow.setContentView(layout);
			MainWindow.setWidth(dip2px(ctx, 42));
			MainWindow.setHeight(dip2px(ctx, 42));
			MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.BOTTOM, 0, 0);
		}catch(err){
			catchmsg(10,err);
		}
	}}));
}
//**********************************************************打开菜单**********************************************************
function GUI_init()
{
	try
	{
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
	}
	catch(err)
	{
		catchmsg(10,err);
	}
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
		{kind:"text",text:"快速聊天菜单(等待修复)",color:"",size:24},
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
	if(MainWindow==null)
	{
		print("辅助系统已关闭！如要继续使用请重启BlockLauncher");
		return;
	}
	switch(data)
	{
	case"X-RAYMENU":
		Menus_X_RayMENU=new Array(
			{kind:"text",text:"透视菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"text",text:"进入存档/服务器前请勿打开靠近透视！退出存档/服务器前务必关闭靠近透视！不按照规程操作后果自负！",color:android.graphics.Color.YELLOW,size:16},
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
			{kind:"check",text:"新透视算法(没用)",data:"xray xray2",torf:xray.xray2});
		Menu_open(Menus_X_RayMENU);
		break;
	case"PLAYERMENU":
		Menus_PlayerMENU=new Array(
			{kind:"text",text:"玩家操作菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16});
		var Playerlist=[PlayerEntity];//Server.getAllPlayers();
		var PlayerNamelist=[Player.getName(PlayerEntity)];//Server.getAllPlayerNames();
		for(i=0;i<Playerlist.length;i++)
		{
			Menus_PlayerMENU.push({kind:"button",text:PlayerNamelist[i]+",ID:"+Playerlist[i],data:"playere "+Playerlist[i]+" "+PlayerNamelist[i]});
		}
		Menu_open(Menus_PlayerMENU);
		break;
	case"MOREMENU":
		Menus_MoreMenu=new Array(
			{kind:"text",text:"其他功能",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"check",text:"飞行模式",data:"fly",torf:Fly,color:android.graphics.Color.RED},
			{kind:"check",text:"潜行模式",data:"sneaking",torf:sneaking},
			{kind:"check",text:"调试模式",data:"debug",torf:debug,color:android.graphics.Color.YELLOW},
			{kind:"check",text:"望远镜模式",data:"seefov",torf:fovset},
			{kind:"check",text:"跳跃提升模式",data:"addjump",torf:addjump},
			{kind:"check",text:"丧心病狂模式",data:"sxbkmode",torf:sxbkmode},
			{kind:"check",text:"启用聊天小尾巴",data:"xiaowb",torf:xiaowb},
			{kind:"check",text:"隐藏左下角按钮",data:"hidebtn",torf:hidebtn},
			{kind:"button",text:"显示更新日志",data:"showupdatelog",color:android.graphics.Color.YELLOW},
			{kind:"text",text:"渣机优化级别：",color:"",size:21},
			{kind:"badphoneSeek"});
		Menu_open(Menus_MoreMenu);
		break;
	case"QUICKMENU":
		Menus_QuickMENU=new Array(
			{kind:"text",text:"快速破坏菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16});
		for(i=0;i<qnames.length;i++)
		{
			Menus_QuickMENU.push({kind:"check",text:qnames[i],data:"quick "+qids[i],torf:quick[i]});
		}
		Menus_QuickMENU.push(
			{kind:"button",text:"开启全部",data:"quick open"},
			{kind:"button",text:"关闭全部",data:"quick close"});
		Menu_open(Menus_QuickMENU);
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
	case"ASK":
		selectDialog("关闭提示","是否确定要关闭本辅助？关闭后需重启BlockLauncher才能重新使用！",android.R.drawable.stat_sys_warning,"取消","确定关闭","","Susecmd(\"close\");");
		break;
	case"SPEED":
		inputDialog(true,false,"","请输入速度","","","自定义变速","确定","取消","speed ");
		break;
	case"DEBUGNOW":
		inputDialog(true,false,lasteval,"Input code your want to run.","","","Eval动态代码执行系统","确定","取消","eval ");
		break;
	case"CHAT":
		inputDialog(true,false,"","输入消息","","","自定义消息","确定","取消","sendchat ");
		break;
	default:
		Susecmd(data);
		break;
	}
}
//**********************************************************各种Dialog*********************************************************
function sAlertDialog(datas)//皮肤更换Dialog
{
	try
	{
		var skin=getSkins();
		var arr = java.lang.reflect.Array.newInstance(java.lang.CharSequence,skin.length);
		for(i=0;i<skin.length;i++)
		{
			arr[i]=skin[i];
		}
		var builder = new android.app.AlertDialog.Builder(ctx);
		builder.setTitle("用户名:"+datas.name+",ID:"+datas.id+" 修改皮肤");
		builder.setItems(arr, new android.content.DialogInterface.OnClickListener(
		{
			onClick: function(dialog, which)
			{
				Susecmd("skin "+datas.id+" /mob/"+skin[which]);
			}
		}));
		builder.show();
	}
	catch(err)
	{
		catchmsg(12,err);
	}
}
function pAlertDialog(datas)//玩家操作Dialog
{
	try
	{
		var arr = java.lang.reflect.Array.newInstance(java.lang.CharSequence,4);
		arr[0]="骑上该玩家(仅本地)";
		arr[1]="修改玩家皮肤(仅本地)";
		arr[2]="传送到该玩家(慎用)";
		arr[3]="切换到该玩家视角";
		var builder = new android.app.AlertDialog.Builder(ctx);
		builder.setTitle("用户名:"+datas.name+",ID:"+datas.id);
		builder.setItems(arr, new android.content.DialogInterface.OnClickListener(
		{
			onClick: function(dialog, which)
			{
				switch(which)
				{
				case 0:
					Susecmd("ride "+datas.id);
					break;
				case 1:
					sAlertDialog(datas);
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
		catchmsg(10,err);
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
				print("请勿输入空参数");
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
			case"badphoneSeek":
				var badphoneSeek = new android.widget.SeekBar(ctx);
				badphoneSeek.setMax(20);
				badphoneSeek.setProgress(gbp);
				badphoneSeek.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						gbp=p2;
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
		menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
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
