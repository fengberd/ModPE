/*本js由风鸟制作！严禁抄袭或修改版权！！
BUG反馈或建议：
	搜索群“风鸟神教”加入（群验证：超级辅助-Server bug反馈）
	请在反馈时标明Build号以及错误现象、出现方式
	感谢@jixud111 的弓箭校准模式算法(原名引导箭)
*/
/*
备忘:
	
	
	
	
*/
//********************************变量声明区开始********************************
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var vibrator = ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE);//震♂动♂器
var build="Build #0009";
var Bugmsg="BUG反馈或建议：\n搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）\n到百度贴吧“FENGberd吧”的超级辅助内测贴提出\n请在反馈时标明Build号以及错误现象、出现方式";//BUG反馈信息
var FENGberdmsg="\n欢迎使用超级辅助-Server\n作者：风鸟\n尊重作者版权，请勿修改"//版权信息，你特么要改？你改了你就帮我更新吧，我还懒得更了呢
var updatemsg="Build #0009:\n  -\nBuild #0008:\n  -加入水和岩浆上行走模式\n  -移除丧心病狂模式\n  -移除造成崩溃的关闭按钮\n  -添加随机刷屏功能\n  -加入PVP模式\n  -快速聊天菜单的内容可以自定义了\n  -长按快速聊天菜单的项目可以进行操作\nBuild #0007:\n  -调整了跳跃高度提升的代码\n  -调整了一下飞行模式的代码\nBuild #0006:\n  -修正了玩家ID的获取\n  -加入了跳的更高功能\n  -优化了大量关于循环的算法\n  -修复透视菜单\n  -加入调试模式\n  -加入了隐藏按钮的功能\n  -加入了关闭辅助的功能\n  -加入了更新内容提示\n  -部分功能归纳到菜单中\n  -加入了本地游戏退出时自动重置的功能\n  -修正了枚举皮肤功能\n  -增加渣机优化功能\n  -增加望远镜模式\n  -调整了一些Dialog"//更新内容

var xray={light:false,on:false,near:false,nearid:55,neara:0,nearb:0,nearc:0,gold:true,iron:true,coal:true,ll:true,diamond:true,redstone:true,lredstone:true,emerald:true,xray2:false};//透视
var backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
var sneaking=false;//潜行模式
var sping=false,spspeed=10,spdata="",spi=0;//刷屏
var PlayerEntity=0,otherEntity=0;//玩家ID
var seeFovWindow=null,seeFovSeek,fovset=false;//望远镜模式
var xiaowb=false;//小尾巴
var debug=false,debugWindow=null,dtext=null,tmpx,tmpy,tmpz;//调试模式
var saveModTick=true;//modTick保持
var god=false;//无敌
var gbp=0,gbpi=0;//渣机优化延迟
var jmptime=0,addjump=1;//跳的更高
var hidebtn=false;//隐藏左下角按钮
var chatlist=[""];//快速聊天消息表
var sclist=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","あ","♡","ぴ","の","ヤ","㈱","⑨","⊙"];//随机刷屏数据
var lasteval="";
var quick=[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];//快速破坏
var qnames=["煤矿","铁矿","金矿","青金石","钻石矿","红石矿","发光红石矿","石头","圆石","木板","木头","草方块","泥土","砂砾","沙子","沙石"];
var qids=[16,15,14,21,56,73,74,1,4,5,17,2,3,13,12,24,7];
var qspeeds=[3,3,3,3,3,3,3,0.6,0.6, 1.5,1.5,0.18,0.18,0.18,0.15,0.8];
var pvpmode={on:false,selectPlayer:false,partice:true,Camera:false,run:false,heal:0,nearBack:false,nowPlayer:-1,Window:null,nameText:null};
var MainWindow = null,Mainbtn=null;
var chatWindow=null;
var walkonwater=false;//水和岩浆上行走
var spTextEdit=null;//刷屏内容

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
init();

//********************************自定义函数区********************************
function leaveGame()
{
	Susecmd("reset");
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
function init()
{
	var data=readFile("/sdcard/games/com.mojang/minecraftpe/supercheat/server/quickchat.txt");
	if(data!="" && data!="\n")
	{
		chatlist=data.split("\n");
		chatlist.pop();
	}
	print(FENGberdmsg);
	print(FENGberdmsg);
	print(Bugmsg);
	print(Bugmsg);
	showMainBtn();
	GUI_init();
	XRAY_Update();
	startModTick();
	startModTick2();
}
function fixPos(pos)
{
	if(pos<0)
	{
		return pos-1;
	}
	return pos;
}
function newModTick()//0.05秒执行一次
{
	PlayerEntity=Player.getEntity();
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
	if(sping)
	{
		spi++;
		if(spi>=(spspeed-20)*-1)
		{
			spi=0;
			var a=new java.lang.String(spdata).split("\n");
			var sc=parseInt(Math.random()*sclist.length);
			while(sc>sclist.length-1)
			{
				sc=parseInt(Math.random()*sclist.length);
			}
			sc=sclist[sc];
			var sn=parseInt(Math.random()*10);
			if(sn>10)
			{
				sn=9;
			}
			if(a.length>1)
			{
				var b=parseInt(Math.random()*a.length);
				while(b>a.length-1)
				{
					b=parseInt(Math.random()*a.length);
				}
				Susecmd("sendchat "+new java.lang.String(a[b]).replace("#sc",new java.lang.String(sc)).replace("#sn",new java.lang.String(sn)));
			}
			else
			{
				Susecmd("sendchat "+new java.lang.String(spdata).replace("#sc",new java.lang.String(sc)).replace("#sn",new java.lang.String(sn)));
			}
		}
	}
	if(pvpmode.on)
	{
		if(pvpmode.selectPlayer)
		{
			var a=Player.getPointedEntity();
			if(Player.isPlayer(a))
			{
				pvpmode.nowPlayer=a;
			}
		}
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run:function()
			{
				try
				{
					var tmpt="当前玩家:"+Player.getName(pvpmode.nowPlayer)+"\nID:"+pvpmode.nowPlayer;
					pvpmode.nameText.setText(tmpt);
				}
				catch(err)
				{
					catchmsg(10,err);
				}
			}
		}));
		var x=Entity.getX(pvpmode.nowPlayer),y=Entity.getY(pvpmode.nowPlayer),z=Entity.getZ(pvpmode.nowPlayer);
		if(pvpmode.partice)
		{
			Level.addParticle(8,x,y+1,z,0,0,0,2);
		}
		if(pvpmode.nearBack && Player.isPlayer(pvpmode.nowPlayer))
		{
			var x1=Entity.getX(PlayerEntity)-x,y1=Entity.getY(PlayerEntity)-y,z1=Entity.getZ(PlayerEntity)-z,a=getYaw(pvpmode.nowPlayer)*Math.PI/180,xv=Math.sin(a),zv=-Math.cos(a);
			if(Level.getTile(x+xv,y,z+zv)==0 && (x1*x1+y1*y1+z1*z1)<25)
			{
				Entity.setPosition(PlayerEntity,x+xv,y,z+zv);
				Entity.setRot(PlayerEntity,Entity.getYaw(pvpmode.nowPlayer),0);
				Entity.setVelZ(PlayerEntity,0);
				Entity.setVelY(PlayerEntity,0);
				Entity.setVelX(PlayerEntity,0);
			}
		}
		if(pvpmode.run && Entity.getHealth(PlayerEntity)!=pvpmode.heal && Entity.getY(PlayerEntity)>0 && Entity.getHealth(PlayerEntity)>0)
		{
			pvpmode.heal=Entity.getHealth(PlayerEntity);
			var random=Math.random()*10;
			if(random>=7.5)
			{
				Entity.setVelX(PlayerEntity,2);
			}
			else if(random>=5 && random<7.5)
			{
				Entity.setVelZ(PlayerEntity,2);
			}
			else if(random>=2.5 && random<5)
			{
				Entity.setVelX(PlayerEntity,-2);
			}
			else
			{
				Entity.setVelZ(PlayerEntity,-2);
			}
			pvpmode.heal=Entity.getHealth(PlayerEntity);
		}
	}
	if(gbp!=0 && gbpi<gbp)
	{
		gbpi++;
		return;
	}
	gbpi=0;
	if(god)
	{
		Entity.setHealth(Player.getEntity(),30000);
	}
	if(xray.near)
	{
		var x=fixPos(parseInt(Entity.getX(PlayerEntity)));
		var y=fixPos(parseInt(Entity.getY(PlayerEntity)));
		var z=fixPos(parseInt(Entity.getZ(PlayerEntity)));
		if(Level.getTile(xray.neara,xray.nearb,xray.nearc)==xray.nearid)
		{
			Level.setTile(xray.neara,xray.nearb,xray.nearc,0);
		}
		if(Level.getTile(x,y,z)==0)
		{
			Level.setTile(x,y,z,xray.nearid);
		}
		xray.neara=x,xray.nearb=y,xray.nearc=z;
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
function newModTick2()//0.001秒执行一次
{
	if(walkonwater)
	{
		var id=Level.getTile(fixPos(Entity.getX(PlayerEntity)),fixPos(Entity.getY(PlayerEntity))-2,fixPos(Entity.getZ(PlayerEntity)));
		if(id>=8 && id<=11 && Entity.getVelY(PlayerEntity)<0)
		{
			Entity.setVelY(PlayerEntity,0);
			var y=Entity.getY(PlayerEntity).toString().split(".");
			var yy=parseInt(y[1][0]+y[1][1]+y[1][2]+"");
			if(yy<=619)
			{
				Entity.setVelY(PlayerEntity,0.005);
			}
		}
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
	var version=parseInt(build.split("#")[1]);
	if(load2("version")=="")
	{
		save2("version",version.toString());
		selectDialog("欢迎使用超级辅助-Server",updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
	}
	else
	{
		var load=parseInt(load2("version"));
		if(version>load)
		{
			save2("version",version.toString());
			selectDialog("超级辅助-Server - 已更新",updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
		}
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
function save2(name,Data)//保存数据(全局)
{
	writeText(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/server/datas/"+name+".supercheat_dat",Data);
}
function load2(name)//读取数据(全局)
{
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/server/datas/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
			return "";
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/server/datas/"+name+".supercheat_dat");
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
			tmpt=tmpt+" (From Super Cheat-Server JS)";
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
		/////////////////////////////////////////////////////////////////一键全套
	case"kit":
		switch(Data[1])
		{
		case"diamond":
			Player.addItemInventory(276,1,0);
			Player.addItemInventory(277,1,0);
			Player.addItemInventory(278,1,0);
			Player.addItemInventory(279,1,0);
			Player.addItemInventory(293,1,0);
			Player.addItemInventory(57,64,0);
			Player.addItemInventory(310,1,0);
			Player.addItemInventory(311,1,0);
			Player.addItemInventory(312,1,0);
			Player.addItemInventory(313,1,0);
			break;
		case"TNT":
			Player.addItemInventory(259,1,0);
			Player.addItemInventory(259,1,0);
			Player.addItemInventory(259,1,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			Player.addItemInventory(46,64,0);
			break;
		case"survival":
			Player.addItemInventory(58,1,0);
			Player.addItemInventory(26,1,0);
			Player.addItemInventory(50,64,0);
			Player.addItemInventory(17,64,0);
			Player.addItemInventory(17,64,0);
			Player.addItemInventory(20,64,0);
			break;
		}
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
	/////////////////////////////////////////////////////////////////PVP模式
	case"pvpmode_on":
		if(pvpmode.on)
		{
			pvpmode.on=false;
			ctx.runOnUiThread(new java.lang.Runnable(
			{
				run: function()
				{
					pvpmode.Window.dismiss();
					pvpmode.Window = null;
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
						pvpmode.Window = new android.widget.PopupWindow();
						var layout = new android.widget.LinearLayout(ctx);
						var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
						textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
						layout.setOrientation(1);
						pvpmode.nameText=Menu_makeText(textParams,"当前玩家:Null","",14);
						layout.addView(pvpmode.nameText);
						layout.addView(Menu_makeCheck("选择玩家模式","pvpmode_selectPlayer",pvpmode.selectPlayer,"",15));
						layout.addView(Menu_makeCheck("跟随玩家模式","pvpmode_nearBack",pvpmode.nearBack,"",15));
						layout.addView(Menu_makeCheck("掉血随机闪避","pvpmode_run",pvpmode.run,"",15));
						//layout.addView(Menu_makeCheck("切换为目标视角","pvpmode_Camera",pvpmode.Camera,"",15));
						layout.addView(Menu_makeCheck("启用粒子指示器","pvpmode_partice",pvpmode.partice,"",15));
						var scrollview = new android.widget.ScrollView(ctx);
						var mlayout = new android.widget.RelativeLayout(ctx);
						scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
						scrollview.addView(layout);
						mlayout.addView(scrollview);
						pvpmode.Window.setContentView(mlayout);
						pvpmode.Window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(100, 0, 0, 0)));
						pvpmode.Window.setWidth(dip2px(ctx, 150));
						pvpmode.Window.setHeight(dip2px(ctx, 80));
						pvpmode.Window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP,0,0);
						pvpmode.on=true;
					}
					catch(err)
					{
						catchmsg(10,err);
					}
				}
			}));
		}
		break;
	/////////////////////////////////////////////////////////////////选择玩家模式
	case"pvpmode_selectPlayer":
		pvpmode.selectPlayer=!pvpmode.selectPlayer;
		break;
	/////////////////////////////////////////////////////////////////粒子指示器
	case"pvpmode_partice":
		pvpmode.partice=!pvpmode.partice;
		break;
	/////////////////////////////////////////////////////////////////跟随玩家模式
	case"pvpmode_nearBack":
		pvpmode.nearBack=!pvpmode.nearBack;
		break;
	/////////////////////////////////////////////////////////////////自动闪避
	case"pvpmode_run":
		pvpmode.heal=Entity.getHealth(PlayerEntity);
		pvpmode.run=!pvpmode.run;
		break;
	/////////////////////////////////////////////////////////////////切换视角
	case"pvpmode_Camera":
		pvpmode.Camera=!pvpmode.Camera;
		if(pvpmode.Camera)
		{
			ModPE.setCamera(pvpmode.nowPlayer);
		}
		else
		{
			ModPE.setCamera(PlayerEntity);
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
	case"health":
		Entity.setHealth(Player.getEntity(),Data[1]);
		print("已设置血量为"+Data[1]);
		break;
	/////////////////////////////////////////////////////////////////飞行模式
	case"fly":
		var Can=!Player.canFly();
		Player.setCanFly(Can);
		Player.setFlying(Can);
		break;
	case"god":
		god=!god;
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
		sping=false;
		god=false;
		if(debug)
		{
			Susecmd("debug");
		}
		if(pvpmode.on)
		{
			Susecmd("pvpmode_on");
		}
		pvpmode.Camera=false;
		if(fovset)
		{
			Susecmd("seefov");
		}
		xray.near=false;
		addjump=1;
		walkonwater=false;
		print("重置完成");
		break;
	/////////////////////////////////////////////////////////////////删除消息
	case"removechat":
		var tsave=chatlist[i];
		chatlist.splice(parseInt(Data[1]),1);
		var tmpt="";
		for(i=0;i<chatlist.length;i++)
		{
			tmpt=tmpt+chatlist[i];
			if(i!=chatlist.length-1)
			{
				tmpt=tmpt+"\n";
			}
		}
		if(!writeText("/sdcard/games/com.mojang/minecraftpe/supercheat/server/quickchat.txt",tmpt))
		{
			print("删除失败！");
			chatlist.push(tsave);
		}
		else
		{
			chatWindow.dismiss();
			switchData("CHATMENU");
		}
		break;
	/////////////////////////////////////////////////////////////////添加消息
	case"addchat":
		var data=readFile("/sdcard/games/com.mojang/minecraftpe/supercheat/server/quickchat.txt");
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
		chatlist.push(tmpt);
		if(chatlist[0]=="")
		{
			chatlist.shift();
		}
		var tmpt1="";
		for(i=0;i<chatlist.length;i++)
		{
			tmpt1=tmpt1+chatlist[i];
			if(i!=chatlist.length-1)
			{
				tmpt1=tmpt1+"\n";
			}
		}
		if(!writeText("/sdcard/games/com.mojang/minecraftpe/supercheat/server/quickchat.txt",tmpt1))
		{
			print("添加失败！");
			chatlist.pop();
		}
		else
		{
			chatWindow.dismiss();
			switchData("CHATMENU");
		}
		break;
	/////////////////////////////////////////////////////////////////设置刷屏内容
	case"setspdata":
		spTextEdit.setText(chatlist[parseInt(Data[1])]);
		spdata=chatlist[parseInt(Data[1])];
		break;
	/////////////////////////////////////////////////////////////////跳跃
	case"jump":
		Entity.setVelY(PlayerEntity,0.5);
		break;
	/////////////////////////////////////////////////////////////////添加随机刷屏内容
	case"setsdata":
		if(spTextEdit.getText()=="")
		{
			Susecmd("setspdata "+Data[1]);
		}
		else
		{
			spTextEdit.setText(spTextEdit.getText()+"\n"+chatlist[parseInt(Data[1])]);
			spdata=spTextEdit.getText();
		}
		break;
	/////////////////////////////////////////////////////////////////水和岩浆上行走
	case"walkonwater":
		walkonwater=!walkonwater;
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
function startModTick2()
{
	var modt2=new java.lang.Thread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				while(saveModTick)
				{
					newModTick2();
					modt2.sleep(1);
				}
			}
			catch(err)
			{
				catchmsg(-1,err);
			}
		}
	}));
	modt2.start();
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
					var test="";
					Menus_MainMenu=new Array(
						{kind:"text",text:"超级辅助-Server",color:"",size:24},
						{kind:"text",text:"by 风鸟",color:"",size:16},
						{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
						{kind:"button",text:"重置",data:"reset",color:android.graphics.Color.YELLOW,size:18},
						{kind:"text",text:"退出存档/服务器前务必点击重置按钮！不按照规程操作后果自负！",color:android.graphics.Color.YELLOW,size:16},
						{kind:"button",text:"物品生成菜单",data:"ITEMMENU"},
						//{kind:"button",text:"玩家操作菜单",data:"PLAYERMENU"},
						{kind:"button",text:"定点传送菜单",data:"TPMENU"},
						{kind:"button",text:"快速破坏菜单",data:"QUICKMENU"},
						{kind:"button",text:"快速聊天菜单",data:"CHATMENU"},
						{kind:"button",text:"变速菜单",data:"SPEEDMENU"},
						{kind:"button",text:"透视菜单",data:"X-RAYMENU"},
						{kind:"button",text:"其他功能&设置",data:"MOREMENU"},
						//{kind:"button",text:"跳跃",data:"jump"},
						{kind:"button",text:"Eval System",data:"DEBUGNOW"},
						//{kind:"button",text:"test",data:"eval "+test},
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
function switchData(datas)//GUI判断指令
{
	if(MainWindow==null)
	{
		print("辅助系统已关闭！如要继续使用请重启BlockLauncher");
		return;
	}
	var data=datas.split(" ");
	switch(data[0])
	{
	case"ITEMMENU":
		Menu_open(new Array(
		{kind:"text",text:"物品生成菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"ItemGet"},
		{kind:"button",text:"一键钻石全套",data:"kit diamond"},
		{kind:"button",text:"一键爆破全套",data:"kit TNT"},
		{kind:"button",text:"一键生存全套",data:"kit survival"}));
		break;
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
			{kind:"check",text:"飞行模式",data:"fly",torf:Player.canFly()},
			{kind:"check",text:"潜行模式",data:"sneaking",torf:sneaking},
			{kind:"check",text:"无敌模式",data:"god",torf:god},
			{kind:"check",text:"调试模式",data:"debug",torf:debug,color:android.graphics.Color.YELLOW},
			{kind:"check",text:"PVP模式",data:"pvpmode_on",torf:pvpmode.on,color:android.graphics.Color.YELLOW},
			{kind:"check",text:"水和岩浆上行走",data:"walkonwater",torf:walkonwater},
			{kind:"check",text:"望远镜模式",data:"seefov",torf:fovset},
			{kind:"check",text:"启用聊天小尾巴",data:"xiaowb",torf:xiaowb},
			{kind:"check",text:"隐藏左下角按钮",data:"hidebtn",torf:hidebtn},
			{kind:"button",text:"设置血量为20",data:"health 20"},
			{kind:"button",text:"设置血量为30000",data:"health 30000"},
			{kind:"button",text:"显示更新日志",data:"showupdatelog",color:android.graphics.Color.YELLOW},
			{kind:"text",text:"跳跃高度提升：",color:"",size:21},
			{kind:"jumpSeek"},
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
		Menus_ChatMenu=new Array(
			{kind:"text",text:"快速聊天菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"text",text:"长按项目进行操作",color:android.graphics.Color.YELLOW,size:18},
			{kind:"button",text:"添加字符串",data:"ADDCHAT"},
			{kind:"button",text:"自定义消息",data:"CHAT"},
			{kind:"button",text:"快速登录",data:"sendchat /login sidfi8*jk2isu"},
			{kind:"button",text:"快速注册",data:"sendchat /register sidfi8*jk2isu"});
		if(chatlist!="")
		{
			for(i=0;i<chatlist.length;i++)
			{
				Menus_ChatMenu.push({kind:"button",text:chatlist[i],data:"sendchat "+chatlist[i],chatid:i});
			}
		}
		else
		{
			Menus_ChatMenu.push({kind:"text",text:"请添加一些消息",color:android.graphics.Color.YELLOW,size:18});
		}
		Menus_ChatMenu.push(
			{kind:"text",text:"刷屏系统",size:20},
			{kind:"chatSystem"});
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
	case"ADDCHAT":
		inputDialog(true,false,"","输入消息","","","添加快速聊天消息","确定","取消","addchat ");
		break;
	case"EDITCHAT":
		cAlertDialog(data[1]);
		break;
	default:
		Susecmd(datas);
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
function cAlertDialog(datas)//消息操作Dialog
{
	try
	{
		var arr = java.lang.reflect.Array.newInstance(java.lang.CharSequence,4);
		arr[0]="发送";
		arr[1]="删除";
		arr[2]="设置为刷屏数据"
		arr[3]="添加到随机刷屏数据";
		var builder = new android.app.AlertDialog.Builder(ctx);
		builder.setTitle("聊天消息:"+chatlist[datas]);
		builder.setItems(arr, new android.content.DialogInterface.OnClickListener(
		{
			onClick: function(dialog, which)
			{
				switch(which)
				{
				case 0:
					Susecmd("sendchat "+chatlist[datas]);
					break;
				case 1:
					Susecmd("removechat "+datas);
					break;
				case 2:
					Susecmd("setspdata "+datas);
					break;
				case 3:
					Susecmd("setsdata "+datas);
					break;
				}
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
		}});
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
				layout.addView(Menu_makeText(textParams,MenuData[i].text,MenuData[i].color,MenuData[i].size));
				break;
			case"button":
				layout.addView(Menu_makeButton(MenuData[i].text, MenuData[i].data,MenuData[i].color,MenuData[i].size,MenuData[i].chatid));
				break;
			case"check":
				layout.addView(Menu_makeCheck(MenuData[i].text,MenuData[i].data,MenuData[i].torf,MenuData[i].color,MenuData[i].size));
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
			case"ItemGet":
				layout.addView(Menu_makeText(textParams,"物品ID：","",14));
				var itemId = new android.widget.EditText(ctx);
				itemId.setText("1");
				itemId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				layout.addView(itemId);
				layout.addView(Menu_makeText(textParams,"特殊值：","",14));
				var itemDmg = new android.widget.EditText(ctx);
				itemDmg.setText("0");
				itemDmg.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				layout.addView(itemDmg);
				if(Level.getGameMode()==0)
				{
					layout.addView(Menu_makeText(textParams,"数量：","",14));
					var itemCount = new android.widget.EditText(ctx);
					itemCount.setText("1");
					itemCount.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
					layout.addView(itemCount);
				}
				var add = new android.widget.Button(ctx);
				if(Level.getGameMode()==0)
				{
					add.setText("生成");
				}
				else
				{
					add.setText("设置手中物品");
				}
				add.setOnClickListener(new android.view.View.OnClickListener(
				{
					onClick:function(viewarg)
					{
						if(Level.getGameMode()==0)
						{
							Player.addItemInventory(parseInt(itemId.getText()),parseInt(itemCount.getText()),parseInt(itemDmg.getText()));
						}
						else
						{
							Entity.setCarriedItem(PlayerEntity, parseInt(itemId.getText()), 1, parseInt(itemDmg.getText()));
						}
					}
				}));
				layout.addView(add);
				if(Level.getGameMode()==0)
				{
					var fullstack = new android.widget.Button(ctx);
					fullstack.setText("生成一组");
					fullstack.setOnClickListener(new android.view.View.OnClickListener(
					{
						onClick: function(viewarg)
						{
							Player.addItemInventory(parseInt(itemId.getText()),64,parseInt(itemDmg.getText()));
						}
					}));
					layout.addView(fullstack);
				}
				break;
			case"chatSystem":
				spTextEdit=new android.widget.EditText(ctx);
				spTextEdit.setHint("请输入要刷的内容");
				spTextEdit.setText(spdata);
				layout.addView(spTextEdit);
				layout.addView(Menu_makeText(textParams,"发送多条随机内容中间用回车隔开，#sc替换为随机字符，#sn替换为随机数字","",18));
				layout.addView(Menu_makeText(textParams,"刷屏速度:","",18));
				var seek = new android.widget.SeekBar(ctx);
				seek.setMax(20);
				seek.setProgress(spspeed);
				seek.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						spspeed=p2;
					}
				});
				layout.addView(seek);
				var check = new android.widget.CheckBox(ctx);
				check.setText("启动刷屏系统");
				check.setChecked(sping);
				check.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(){
						sping=!sping;
						spdata=spTextEdit.getText();
					}
				}));
				layout.addView(check);
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
		if(MenuData[0].text=="快速聊天菜单")
		{
			chatWindow=menu;
			chatWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
		}
		else
		{
			menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 0);
		}
		}catch(err){
			catchmsg(10,err);
		}
}
function Menu_makeText(Params,text,color,size)//添加文本
{
	var Text = new android.widget.TextView(ctx);
	Text.setTextSize(size);
	if(color!="" && color!=undefined)
	{
		Text.setTextColor(color);
	}
	Text.setText(text);
	Text.setLayoutParams(Params);
	return Text;
}
function Menu_makeButton(text,data,color,size,chatid)//添加按钮
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
	if(chatid!=undefined)
	{
		button.setOnLongClickListener(new android.view.View.OnLongClickListener(
		{
			onLongClick: function(viewarg)
			{
				switchData("EDITCHAT "+chatid);
				vibrator.vibrate(50);
				return true;
			}
		}));
	}
	return button;
}
function Menu_makeCheck(text,data,isch,color,size)//添加选择框
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
	return Check;
}
