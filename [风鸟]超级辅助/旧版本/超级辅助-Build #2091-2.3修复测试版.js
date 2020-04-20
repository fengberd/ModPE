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
var build="Build #2091";
var Bugmsg="BUG反馈或建议：\n搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）\n到百度贴吧“FENGberd吧”的超级辅助内测贴提出\n请在反馈时标明Build号以及错误现象、出现方式";//BUG反馈信息
var updatemsg="Build #2091:\n  -加入插件管理器\n  -加入血量显示插件\n  -加入砍树插件\n  -对Logo进行小调整\n  -在实体操作菜单里增加了箭\nBuild #2090:\n  -加入了背景音乐菜单\n  -解决极少部分机型数据保存不正常的问题\n  -加入调整基岩是否可破坏的功能\n  -Logo什么的很烦？现在可以关闭了\n  -加入爆炸箭功能\nBuild #2089:\n  -加入爆炸阻止模式\n  -移除沙和沙砾不掉落模式\n  -调整GUI函数，进入服务器失败不会报错了\n  -修改物品生成菜单\n  -增加调试模式的输出内容\n  -重写保存数据代码，解决莫名的抽风和数据残留\n  -重写GUI部分，再差的手机都能流畅打开\nBuild #2088:\n  -修改大量for算法，出现问题请反馈\n  -加入信息采集工具\n  -加入跳跃提升模式\n  -修复渣机优化对部分功能的影响\n  -增加了真.飞行模式，调整伪飞行模式\n  -修正了望远镜模式的距离\n  -修复了工具永不损坏模式对金制工具无效的bug\n  -小小的优化了下调试模式的Y轴算法\nBuild #2087:\n  -修复了靠近透视，抛弃矿车+方块，随时随地使用\n  -增加渣机优化功能，牺牲部分性能来提高FPS\nBuild #2086:\n  -加入喜闻乐见的Logo\n  -加入望远镜模式\n  -加入期待已久的透视\n  -修复玩家模型修改菜单\nBuild #2085:\n  -调整GUI宽度及染色问题\n  -增加更新内容提示\n  -增加实体移除、不生成实体的功能\n  -增加工具、盔甲永不损坏的功能\n  -修正io流的问题\n  -优化算法"//更新内容

var first=true,firstjoin=true;//是否第一次运行
var loaded=false;//已载入
var god=false;//无敌
var jmptime=0,addjump=1;//跳跃提升
var skill=false;//秒杀
var explodeArrow=false,arrowList=[];//爆炸箭
var blocksss=false;//无限放置方块
var debug=false,debugWindow=null,dtext=null,tmpx,tmpy,tmpz,tmpother;//调试模式
var backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
var diet=false,diex=0,diey=0,diez=0;//返回死亡地点
var fly=false,upvel=0,upBtnWindow=null,downBtnWindow=null;//伪飞行
var saveworld=false,savemob=false,savepicture=false;//保护模式
var xray={light:false,on:false,near:false,nearid:55,neara:0,nearb:0,nearc:0,gold:true,iron:true,coal:true,ll:true,diamond:true,redstone:true,lredstone:true,emerald:true,xray2:false};//透视
var message={explodehook:false,destroyblock:false,entityaddedhook:false,entityremovedhook:false,deathhook:false,proccmd:false,chathook:false,useitem:false,attackhook:false,leveleventhook:false};//信息采集
var PlayerEnt;//玩家实体ID
var sneaking=false;//潜行模式
var magnet=false;//磁铁模式
var unExplode=false;//阻止爆炸
var always=0,t=0;//0关闭，1永夜，2永昼
var username="";//用户名
var money=-10000;//23333的货币系统
var printmode=false;//针对没有中文修复补丁的mc玩家
var neverbad={tools:false,armor:false};//工具盔甲永不损坏
var no_colormode=false;//不明觉厉的功能233
var fovset=false;//望远镜
var breakBedblock=false;//基岩可否破坏
var Moving=false,tpopx=400,tpopy=400,mX,mY;//移动主菜单按钮
var lasteval="";//最后一次执行的命令
var musicPlayer=new android.media.MediaPlayer(),bgm={on:false,needsleep:true,isplaying:false,mustplayfinish:true,time:0,fulltime:0,nowplaying:-1,random:true,list:new Array()};//背景音乐
var goodatbadphone=0,badphonei=0;//渣机优化

var plugins={
	tree:{Enable:false,inCreative:false,mode:false,drop:false,autoRe:false},
	healthShow:{Enable:false,bar:null,text:null,text2:null,window:null,name:"",max:0,id:0,time:0,showBackgruond:false,showName:true,showBar:true,autoDismissTime:10}
}


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
var Menus_ItemMenu;
var Menus_ModMenu;
var Menus_PlayerMenu;
var Menus_X_RayMenu;
var Menus_PluginMenu;
var Menus_TimeMenu;
var Menus_TpMenu;
var Menus_MoreMenu;
var Menus_RemoveEntityMenu;
var Menus_UnspawnMenu;
var Menus_MessageMenu;
var Menus_BGMMenu;
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
		return;
	}
	if(plugins.tree.Enable)
	{
		var id=Level.getTile(x,y,z),data=Level.getData(x,y,z);
		if((id==17 || id==162) && plugins.tree.mode && (Level.getGameMode()==0 || plugins.tree.inCreative))
		{
			tree_k(x,y,z);
			preventDefault();
			return;
		}
		if(id==17 && (Level.getGameMode()==0 || plugins.tree.inCreative) && plugins.tree.Enable)
		{
			for(i=y;i<128;i++)
			{
				id=getTile(x,i,z),data=Level.getData(x,i,z);
				if(id==17)
				{
					while(id==17 && data>3)
					{
						data=data-4;
					}
					if(Level.getTile(x,i-1,z)==3 && plugins.tree.autoRe)
					{
						Level.setTile(x,i-1,z,2);
					}
					Level.setTile(x,i,z,0);
					if(Level.getTile(x,i-1,z)==2 && plugins.tree.autoRe)
					{
						Level.setTile(x,i,z,6,data);
					}
					Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
					for(x1=x-2;x1<x+2;x1++)
					{
						for(z1=z-2;z1<z+2;z1++)
						{
							tree_destoryPlanes(x1,i,z1,data);
						}
					}
					preventDefault();
				}
				else
				{
					break;
				}
			}
		}
		else if(id==162 && (Level.getGameMode()==0 || plugins.tree.inCreative) && plugins.tree.Enable)
		{
			for(i=y;i<128;i++)
			{
				id=getTile(x,i,z),data=Level.getData(x,i,z);
				if(id==162)
				{
					while(data>1)
					{
						data=data-2;
					}
					if(Level.getTile(x,i-1,z)==3 && plugins.tree.autoRe)
					{
						Level.setTile(x,i-1,z,2);
					}
					Level.setTile(x,i,z,0);
					if(Level.getTile(x,i-1,z)==2 && plugins.tree.autoRe)
					{
						Level.setTile(x,i,z,6,data+4);
					}
					Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
					for(x1=x-2;x1<x+2;x1++)
					{
						for(z1=z-2;z1<z+2;z1++)
						{
							tree_destoryPlanes(x1,i,z1,data);
						}
					}
					preventDefault();
				}
				else
				{
					break;
				}
			}
		}
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
			return;
		}
	}
	if(explodeArrow && Entity.getEntityTypeId(ent)==80)
	{
		arrowList.push(ent);
	}
}
function entityRemovedHook(ent)//实体移除
{
	if(message.entityremovedhook)
	{
		printHookData("entityRemovedHook\nent:"+ent);
	}
	if(explodeArrow)
	{
		for(i=0;i<arrowList.length;i++)
		{
			if(arrowList[i]==ent)
			{
				arrowList.splice(i,1);
				Level.explode(Entity.getX(ent),Entity.getY(ent)+0.5,Entity.getZ(ent),4);
			}
		}
	}
}
function explodeHook(ent,x,y,z,power)//爆炸钩子
{
	if(message.explodehook)
	{
		printHookData("explodeHook\nent:"+ent+" x:"+x+" y:"+y+" z:"+z+" power:"+power);
	}
	if(unExplode || saveworld)
	{
		preventDefault();
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
	if(plugins.healthShow.Enable)
	{
		for(var i=0;i<Entitylist.length;i++)
		{
			if(Entity.getEntityTypeId(e)==Entitylist[i].id)
			{
				plugins.healthShow.time=20*plugins.healthShow.autoDismissTime;
				plugins.healthShow.id=e;
				plugins.healthShow.name=Entitylist[i].name;
				plugins.healthShow.max=Entitylist[i].max;
			}
		}
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
	if(firstjoin)
	{
		firstjoin=false;
		GUI_init();
	}
	if(explodeArrow)
	{
		for(i=0;i<arrowList.length;i++)
		{
			if(Entity.getVelX(arrowList[i])==0 && Entity.getVelY(arrowList[i])==0 && Entity.getVelZ(arrowList[i])==0)
			{
				Entity.remove(arrowList[i]);
			}
		}
	}
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
	if(bgm.on)
	{
		if(!bgm.needsleep && !bgm.isplaying)
		{
			bgm.fulltime=0;
		}
		if(!bgm.mustplayfinish)
		{
			bgm.time++;
			if(bgm.time>=bgm.fulltime)
			{
				bgm.time=0;
				if(!bgm.isplaying)
				{
					bgm.fulltime=Math.random()*100*20+200;
					playNew();
				}
				else
				{
					stopMusic();
					bgm.fulltime=60*20;
				}
				bgm.isplaying=!bgm.isplaying;
			}
		}
	}
	plugins.healthShow.time--;
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
					tmpother="";
					if(Player.isFlying())
					{
						tmpother=tmpother+"  -Flying";
					}
					tmpx=Entity.getX(PlayerEntity)+"000.000";
					tmpx=tmpx.split(".");
					tmpx=parseInt(tmpx[0])+"."+parseInt(tmpx[1][0])+parseInt(tmpx[1][1])+parseInt(tmpx[1][2]);
					tmpy=Entity.getY(PlayerEntity)-1+"000.000";
					tmpy=tmpy.split(".");
					tmpy=parseInt(tmpy[0])+"."+parseInt(tmpy[1][0])+parseInt(tmpy[1][1])+parseInt(tmpy[1][2]);
					tmpz=Entity.getZ(PlayerEntity)+"000.000";
					tmpz=tmpz.split(".");
					tmpz=parseInt(tmpz[0])+"."+parseInt(tmpz[1][0])+parseInt(tmpz[1][1])+parseInt(tmpz[1][2]);
					dtext.setText("\nX:"+tmpx+"   RAM:"+getMemory()+"  实体数:"+Entity.getAll().length+"\nY:"+tmpy+"  Entity:"+PlayerEntity+"  Time:"+Level.getTime()+"\nZ:"+tmpz+ "  Item:"+Player.getCarriedItem()+":"+Player.getCarriedItemData()+"  Health:"+Entity.getHealth(PlayerEntity)+"\n"+tmpother);
				}
				catch(err)
				{
					catchmsg(10,err);
				}
			}
		}));
	}
	if(plugins.healthShow.Enable)
	{
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run:function()
			{
				try
				{
					if(plugins.healthShow.time>0 && plugins.healthShow.max!="Null")
					{
						var health=Entity.getHealth(plugins.healthShow.id);
						if(plugins.healthShow.showBar)
						{
							plugins.healthShow.bar.setVisibility(1);
						}
						else
						{
							plugins.healthShow.bar.setVisibility(5);
						}
						if(isNaN(plugins.healthShow.max))
						{
							plugins.healthShow.bar.setMax(1);
						}
						else
						{
							plugins.healthShow.bar.setMax(plugins.healthShow.max);
						}
						plugins.healthShow.bar.setProgress(health);
						if(plugins.healthShow.showName)
						{
							plugins.healthShow.text.setText(plugins.healthShow.name);
						}
						else
						{
							plugins.healthShow.text.setText("");
						}
						if(health>0)
						{
							plugins.healthShow.text2.setText(health+"/"+plugins.healthShow.max);
						}
						else
						{
							plugins.healthShow.text2.setText("已死亡");
						}
					}
					else
					{
						plugins.healthShow.bar.setVisibility(5);
						plugins.healthShow.text.setText("");
						plugins.healthShow.text2.setText("");
					}
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
	explodeArrow=false,arrowList=[];//爆炸箭
	unExplode=false;//阻止爆炸
	firstjoin=true;
	bgm.isplaying=false,bgm.mustplayfinish=false,bgm.on=false;stopMusic();//停止BGM
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
				if(seeFovWindow != null)//关闭望远镜窗口
				{
					seeFovWindow.dismiss();
				}
				if(plugins.healthShow.window != null)//关闭血量显示条
				{
					plugins.healthShow.window.dismiss();
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
		if(load2("no_logo_and_toast")!="true")
		{
			showLogo(logo1,"欢迎使用超级辅助！\n作者:风鸟 请尊重作者版权！");
			print(Bugmsg);
			print(Bugmsg);
		}
		loaded=true;
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
		if(load2("plugins_healthShow_showBackgruond")=="true")
		{
			plugins.healthShow.showBackgruond=true;
		}
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function()
			{
				try
				{
					seeFovWindow = new android.widget.PopupWindow(ctx);
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
					MessageWindow = new android.widget.PopupWindow(ctx);
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
					
					plugins.healthShow.window=new android.widget.PopupWindow(ctx)
					plugins.healthShow.text=new android.widget.TextView(ctx);
					plugins.healthShow.text.setTextSize(15);
					plugins.healthShow.text.getPaint().setFakeBoldText(true);
					plugins.healthShow.text.setTextColor(android.graphics.Color.CYAN);
					plugins.healthShow.text.setShadowLayer(2,0,0,android.graphics.Color.BLACK);
					plugins.healthShow.text2=new android.widget.TextView(ctx);
					plugins.healthShow.text2.setTextSize(15);
					plugins.healthShow.text2.getPaint().setFakeBoldText(true);
					plugins.healthShow.text2.setTextColor(android.graphics.Color.WHITE);
					plugins.healthShow.text.setShadowLayer(2,0,0,android.graphics.Color.BLACK);
					plugins.healthShow.bar=new android.widget.ProgressBar(ctx,null,android.R.attr.progressBarStyleHorizontal);
					plugins.healthShow.bar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(dip2px(ctx,80),-2));
					plugins.healthShow.bar.setVisibility(5);
					var par=new android.widget.LinearLayout.LayoutParams(-2,-2);
					par.setMargins(dip2px(ctx,20),0,0,0);
					var layout=new android.widget.LinearLayout(ctx);
					layout.addView(plugins.healthShow.text);
					layout.addView(plugins.healthShow.text2,par);
					var layout2=new android.widget.LinearLayout(ctx);
					layout2.setOrientation(1);
					layout2.addView(plugins.healthShow.bar);
					layout2.addView(layout);
					plugins.healthShow.window.setContentView(layout2);
					plugins.healthShow.window.setWidth(dip2px(ctx,130));
					plugins.healthShow.window.setHeight(dip2px(ctx,60));
					if(plugins.healthShow.showBackgruond)
					{
						plugins.healthShow.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
					}
					else
					{
						plugins.healthShow.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
					}
					plugins.healthShow.window.setTouchable(false);
				}
				catch(err)
				{
					catchmsg(10,err);
				}
			}
		}));
	}
	usecmd("bgm reloadlist");
	always=parseInt(load("always"));
	if(load("saveworld")=="true")
	{
		usecmd("saveworld");
	}
	if(load("unExplode")=="true")
	{
		usecmd("unExplode");
	}
	if(load("savepicture")=="true")
	{
		usecmd("savepicture");
	}
	if(load("savemob")=="true")
	{
		usecmd("savemob");
	}
	if(load2("bgm_on")=="true")
	{
		usecmd("bgm on");
	}
	if(load2("bgm_needsleep")=="true")
	{
		bgm.needsleep=true;
	}
	if(load2("bgm_mustplayfinish")=="true")
	{
		usecmd("bgm mustplayfinish");
	}
	if(load2("bgm_random")=="false")
	{
		bgm.random=false;
	}
	if(load2("printmode")=="true")
	{
		printmode=true;
	}
	if(load2("no_colormode")=="true")
	{
		no_colormode=true;
	}
	
	if(load2("plugins_healthShow_autoDismissTime")!="")
	{
		plugins.healthShow.autoDismissTime=parseInt(load2("plugins_healthShow_autoDismissTime"));
	}
	if(load2("plugins_tree_Enable")=="true")
	{
		plugins.tree.Enable=true;
	}
	if(load2("plugins_tree_inCreative")=="true")
	{
		plugins.tree.inCreative=true;
	}
	if(load2("plugins_tree_autoRe")=="true")
	{
		plugins.tree.autoRe=true;
	}
	if(load2("plugins_tree_mode")=="true")
	{
		plugins.tree.mode=true;
	}
	if(load2("plugins_tree_drop")=="true")
	{
		plugins.tree.drop=true;
	}
	if(load2("plugins_healthShow_Enable")=="true")
	{
		plugins.healthShow.Enable=true;
	}
	if(load2("plugins_healthShow_showName")=="false")
	{
		plugins.healthShow.showName=false;
	}
	else
	{
		plugins.healthShow.showName=true;
	}
	if(load2("plugins_healthShow_showBar")=="false")
	{
		plugins.healthShow.showBar=false;
	}
	else
	{
		plugins.healthShow.showBar=true;
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
				button.setText("F");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick:function(viewarg)
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
							{kind:"button",text:"背景音乐菜单",data:"BGMMENU"},
							{kind:"button",text:"透视菜单",data:"X-RAY"},
							{kind:"button",text:"其他功能",data:"MOREMENU"},
							{kind:"button",text:"插件管理器",data:"PLUGINMENU"},
							{kind:"button",text:"Eval system",data:"DEBUGNOW"},
							{kind:"check",text:"print mode",data:"printmode",torf:printmode},
							{kind:"check",text:"no color mode",data:"no_colormode",torf:no_colormode});
						Menu_open(Menus_MainMenu);
					}
				}));
				button.setOnTouchListener(new android.view.View.OnTouchListener(
				{
					onTouch:function(v,e)
					{
						if(!Moving)
						{
							mX=e.getX();
							mY=e.getY();
						}
						if(Moving)
						{
							if(e.getAction()==2)
							{
								tpopx=tpopx-parseInt(e.getX()-mX)*-1/10;
								tpopy=tpopy-parseInt(e.getY()-mY)*-1/10;
								MainWindow.update(parseInt(tpopx),parseInt(tpopy),-1,-1);
							}
							if(e.getAction()==1)
							{
								CM("按钮位置已保存","green");
								Moving=false;
							}
						}
						return false;
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx, 42));
				MainWindow.setHeight(dip2px(ctx, 42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 0);
				MessageWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0);
				plugins.healthShow.window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP,0,dip2px(ctx,60));
			}
			catch(err)
			{
				catchmsg(10,err);
			}
		}
	}));
}
//********************************自定义函数区********************************
function tree_destoryPlanes(x,y,z,data)
{
	var random=Math.random()*100;
	if(Level.getTile(x,y,z)==18)
	{
		if(random<=20)
		{
			Level.dropItem(x+0.5,y,z+0.5,0,6,1,data);
		}
		if(random<=50 && random>=40)
		{
			Level.dropItem(x+0.5,y,z+0.5,0,260,1,0);
		}
		Level.setTile(x,y,z,0);
	}
	else if(Level.getTile(x,y,z)==161)
	{
		if(random<=20)
		{
			Level.dropItem(x+0.5,y,z+0.5,0,6,1,data+4);
		}
		if(random<=50 && random>=40)
		{
			Level.dropItem(x+0.5,y,z+0.5,0,260,1,0);
		}
		Level.setTile(x,y,z,0);
	}
}
function tree_k(x,i,z)
{
	var id=Level.getTile(x,i,z),data=Level.getData(x,i,z),random=0;
	if(id==17 && (Level.getGameMode()==0 || plugins.tree.inCreative) && plugins.tree.Enable)
	{
		while(id==17 && data>3)
		{
			data=data-4;
		}
		if(Level.getTile(x,i-1,z)==3 && plugins.tree.autoRe)
		{
			Level.setTile(x,i-1,z,2);
		}
		Level.setTile(x,i,z,0);
		if(Level.getTile(x,i-1,z)==2 && plugins.tree.autoRe)
		{
			Level.setTile(x,i,z,6,data);
		}
		Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
		tree_k(x+1,i,z);
		tree_k(x-1,i,z);
		tree_k(x+1,i,z+1);
		tree_k(x+1,i,z-1);
		tree_k(x-1,i,z+1);
		tree_k(x-1,i,z-1);
		tree_k(x,i,z+1);
		tree_k(x,i,z-1);
		
		tree_k(x,i+1,z);
		tree_k(x+1,i+1,z);
		tree_k(x-1,i+1,z);
		tree_k(x+1,i+1,z+1);
		tree_k(x+1,i+1,z-1);
		tree_k(x-1,i+1,z+1);
		tree_k(x-1,i+1,z-1);
		tree_k(x,i+1,z+1);
		tree_k(x,i+1,z-1);
		
		tree_k(x,i-1,z);
		tree_k(x+1,i-1,z);
		tree_k(x-1,i-1,z);
		tree_k(x+1,i-1,z+1);
		tree_k(x+1,i-1,z-1);
		tree_k(x-1,i-1,z+1);
		tree_k(x-1,i-1,z-1);
		tree_k(x,i-1,z+1);
		tree_k(x,i-1,z-1);
	}
	else if(id==162 && (Level.getGameMode()==0 || plugins.tree.inCreative) && plugins.tree.Enable)
	{
		while(id==162 && data>1)
		{
			data=data-2;
		}
		if(Level.getTile(x,i-1,z)==3 && plugins.tree.autoRe)
		{
			Level.setTile(x,i-1,z,2);
		}
		Level.setTile(x,i,z,0);
		if(Level.getTile(x,i-1,z)==2 && plugins.tree.autoRe)
		{
			Level.setTile(x,i,z,6,data+4);
		}
		Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
		tree_k(x+1,i,z);
		tree_k(x-1,i,z);
		tree_k(x+1,i,z+1);
		tree_k(x+1,i,z-1);
		tree_k(x-1,i,z+1);
		tree_k(x-1,i,z-1);
		tree_k(x,i,z+1);
		tree_k(x,i,z-1);
		
		tree_k(x,i+1,z);
		tree_k(x+1,i+1,z);
		tree_k(x-1,i+1,z);
		tree_k(x+1,i+1,z+1);
		tree_k(x+1,i+1,z-1);
		tree_k(x-1,i+1,z+1);
		tree_k(x-1,i+1,z-1);
		tree_k(x,i+1,z+1);
		tree_k(x,i+1,z-1);
		
		tree_k(x,i-1,z);
		tree_k(x+1,i-1,z);
		tree_k(x-1,i-1,z);
		tree_k(x+1,i-1,z+1);
		tree_k(x+1,i-1,z-1);
		tree_k(x-1,i-1,z+1);
		tree_k(x-1,i-1,z-1);
		tree_k(x,i-1,z+1);
		tree_k(x,i-1,z-1);
	}
	else if(id==161 && (Level.getGameMode()==0 || plugins.tree.inCreative) && plugins.tree.Enable)
	{
		while(id==161 && data>1)
		{
			data=data-2;
		}
		tree_destoryPlanes(x,i,z,data);
		tree_k(x+1,i,z);
		tree_k(x-1,i,z);
		tree_k(x+1,i,z+1);
		tree_k(x+1,i,z-1);
		tree_k(x-1,i,z+1);
		tree_k(x-1,i,z-1);
		tree_k(x,i,z+1);
		tree_k(x,i,z-1);
		
		tree_k(x,i+1,z);
		tree_k(x+1,i+1,z);
		tree_k(x-1,i+1,z);
		tree_k(x+1,i+1,z+1);
		tree_k(x+1,i+1,z-1);
		tree_k(x-1,i+1,z+1);
		tree_k(x-1,i+1,z-1);
		tree_k(x,i+1,z+1);
		tree_k(x,i+1,z-1);
		
		tree_k(x,i-1,z);
		tree_k(x+1,i-1,z);
		tree_k(x-1,i-1,z);
		tree_k(x+1,i-1,z+1);
		tree_k(x+1,i-1,z-1);
		tree_k(x-1,i-1,z+1);
		tree_k(x-1,i-1,z-1);
		tree_k(x,i-1,z+1);
		tree_k(x,i-1,z-1);
	}
	else if(id==18 && (Level.getGameMode()==0 || plugins.tree.inCreative) && plugins.tree.Enable)
	{
		while(id==18 && data>3)
		{
			data=data-4;
		}
		tree_destoryPlanes(x,i,z,data);
		tree_k(x+1,i,z);
		tree_k(x-1,i,z);
		tree_k(x+1,i,z+1);
		tree_k(x+1,i,z-1);
		tree_k(x-1,i,z+1);
		tree_k(x-1,i,z-1);
		tree_k(x,i,z+1);
		tree_k(x,i,z-1);
		
		tree_k(x,i+1,z);
		tree_k(x+1,i+1,z);
		tree_k(x-1,i+1,z);
		tree_k(x+1,i+1,z+1);
		tree_k(x+1,i+1,z-1);
		tree_k(x-1,i+1,z+1);
		tree_k(x-1,i+1,z-1);
		tree_k(x,i+1,z+1);
		tree_k(x,i+1,z-1);
		
		tree_k(x,i-1,z);
		tree_k(x+1,i-1,z);
		tree_k(x-1,i-1,z);
		tree_k(x+1,i-1,z+1);
		tree_k(x+1,i-1,z-1);
		tree_k(x-1,i-1,z+1);
		tree_k(x-1,i-1,z-1);
		tree_k(x,i-1,z+1);
		tree_k(x,i-1,z-1);
	}
}
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
				var Window=new android.widget.PopupWindow(ctx);
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
						}
						catch(err)
						{
							catchmsg(10,err);
						}
					}
				}),5000);
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
function playNew()//下一首音乐
{
	var a=0;
	if(bgm.random)
	{
		for(a=parseInt(bgm.list.length*Math.random());a>=bgm.list.length;a=parseInt(bgm.list.length*Math.random()));
		bgm.nowplaying=a;
	}
	else
	{
		a=bgm.nowplaying+1
		if(a>=bgm.list.length)
		{
			a=0;
		}
	}
	playMusic(bgm.list[a]);
}
function playMusic(path)//播放音乐
{
	try
	{
		musicPlayer.reset();
		musicPlayer.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/supercheat/sounds/" + path);
		musicPlayer.prepare();
		musicPlayer.start();
	}
	catch(err)
	{
		catchmsg(-1,err);
	}
}
function stopMusic()//停止音乐
{
	if(musicPlayer.isPlaying())
	{
		musicPlayer.reset();
	}
}
function jumpToUrl(url)//跳转到网页
{
	ctx.startActivity(android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(url)));
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
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
		}
		if(new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/debug.dat").exists())
		{
			selectDialog("超级辅助 - "+build+" -已更新","更新日志:\n"+updatemsg,android.R.drawable.stat_notify_chat,"确定","","","");
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/version.dat");
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
	writeText(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/supercheat/datas/"+name+".supercheat_dat",Data);
}
function load(name)//读取数据
{
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/supercheat/datas/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
			return "";
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/supercheat/datas/"+name+".supercheat_dat");
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
	writeText(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/datas/"+name+".supercheat_dat",Data);
}
function load2(name)//读取数据(全局)
{
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/datas/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
			return "";
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/datas/"+name+".supercheat_dat");
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
						debugWindow = new android.widget.PopupWindow(ctx);
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
	/////////////////////////////////////////////////////////////////阻止爆炸
	case"unExplode":
		unExplode=!unExplode;
		save("unExplode",unExplode);
		break;
	/////////////////////////////////////////////////////////////////飞行
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
		selectDialog("超级辅助 - 事件采集工具 - 查看日志",messagelogs,android.R.drawable.stat_notify_chat,"确定","保存到SD卡","","if(writeText(new android.os.Environment.getExternalStorageDirectory() +\"/超级辅助-信息采集日志.txt\",messagelogs)){print(\"已保存到/sd卡目录/超级辅助-信息采集日志.txt\");}else{print(\"保存失败！\");}");
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
	/////////////////////////////////////////////////////////////////可破坏基岩
	case"breakBedblock":
		breakBedblock=!breakBedblock;
		if(breakBedblock)
		{
			Block.setDestroyTime(7,0.8);
		}
		else
		{
			Block.setDestroyTime(7,-1);
		}
		break;
	/////////////////////////////////////////////////////////////////bgm管理
	case"bgm":
		switch(Data[1])
		{
		case"on":
			if(!bgm.on)
			{
				if(bgm.list.length<1)
				{
					print("没有BGM文件！");
					return;
				}
				else
				{
					if(bgm.mustplayfinish)
					{
						playNew();
					}
					else
					{
						bgm.time=0;
						bgm.fulltime=30;
					}
				}
			}
			else
			{
				stopMusic();
			}
			bgm.on=!bgm.on;
			save2("bgm_on",bgm.on);
			break;
		case"random":
			bgm.random=!bgm.random;
			save2("bgm_random",bgm.random);
			break;
		case"reloadlist":
			bgm.list=new Array();
			var file=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/supercheat/sounds/");
			if(!file.exists())
			{
				file.mkdirs();
			}
			var list=file.list();
			for(i=0;i<list.length;i++)
			{
				splits=list[i].split("/")[list[i].split("/").length-1];
				bgm.list.push(splits);
			}
			print("BGM列表已更新");
			break;
		case"needsleep":
			bgm.needsleep=!bgm.needsleep;
			save2("bgm_needsleep",bgm.needsleep);
			break;
		case"mustplayfinish":
			bgm.mustplayfinish=!bgm.mustplayfinish;
			musicPlayer.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener(
			{
				onCompletion:function(p1)
				{
					if(bgm.mustplayfinish)
					{
						if(bgm.needsleep)
						{
							new android.os.Handler().postDelayed(new java.lang.Runnable(
							{ 
								run: function()
								{
									try
									{
										if(bgm.mustplayfinish && bgm.on)
										{
											playNew();
										}
									}
									catch(err)
									{
										catchmsg(10,err);
									}
								}
							}),60000);
						}
						else
						{
							playNew();
						}
					}
				}
			}));
			if(bgm.on)
			{
				bgm.on=false;
				usecmd("bgm on");
			}
			save2("bgm_mustplayfinish",bgm.mustplayfinish);
			break;
		}
		break;
	/////////////////////////////////////////////////////////////////print模式
	case"printmode":
		printmode=!printmode;
		save2("printmode",printmode);
		break;
	/////////////////////////////////////////////////////////////////print模式
	case"explodeArrow":
		explodeArrow=!explodeArrow;
		if(!explodeArrow)
		{
			arrowList=[];
		}
		break;
	/////////////////////////////////////////////////////////////////文字无色模式
	case"no_colormode":
		no_colormode=!no_colormode;
		save2("no_colormode",no_colormode);
		break;
	/////////////////////////////////////////////////////////////////不显示logo
	case"no_logo_and_toast":
		if(load2("no_logo_and_toast")=="true")
		{
			save2("no_logo_and_toast","false");
		}
		else
		{
			save2("no_logo_and_toast","true");
		}
		break;
	/////////////////////////////////////////////////////////////////货币系统
	case"money":
		switch(Data[1])
		{
		case"add":
			money=money+parseInt(Data[2]);
			break;
		case"set":
			money=parseInt(Data[2]);
			break;
		case"save":
			money=parseInt(load2("money"));
			break;
		}
		break;
	/////////////////////////////////////////////////////////////////
	case"plugins":
		switch(Data[1])
		{
		case"tree":
			switch(Data[2])
			{
			case"Enable":
				plugins.tree.Enable=!plugins.tree.Enable;
				save2("plugins_tree_Enable",plugins.tree.Enable);
				break;
			case"mode":
				plugins.tree.mode=!plugins.tree.mode;
				save2("plugins_tree_mode",plugins.tree.mode);
				break;
			case"autoRe":
				plugins.tree.autoRe=!plugins.tree.autoRe;
				save2("plugins_tree_autoRe",plugins.tree.autoRe);
				break;
			case"inCreative":
				plugins.tree.inCreative=!plugins.tree.inCreative;
				save2("plugins_tree_inCreative",plugins.tree.inCreative);
				break;
			case"drop":
				plugins.tree.drop=!plugins.tree.drop;
				save2("plugins_tree_drop",plugins.tree.drop);
				break;
			}
			break;
		case"healthShow":
			switch(Data[2])
			{
			case"Enable":
				plugins.healthShow.Enable=!plugins.healthShow.Enable;
				save2("plugins_healthShow_Enable",plugins.healthShow.Enable);
				if(!plugins.healthShow.Enable)
				{
					plugins.healthShow.time=0;
					plugins.healthShow.max=0;
					plugins.healthShow.name="";
					plugins.healthShow.bar.setVisibility(5);
					plugins.healthShow.text.setText("");
					plugins.healthShow.text2.setText("");
				}
				break;
			case"showName":
				plugins.healthShow.showName=!plugins.healthShow.showName;
				save2("plugins_healthShow_showName",plugins.healthShow.showName);
				break;
			case"showBar":
				plugins.healthShow.showBar=!plugins.healthShow.showBar;
				save2("plugins_healthShow_showBar",plugins.healthShow.showBar);
				break;
			case"autoDismissTime":
				plugins.healthShow.autoDismissTime=parseInt(Data[3]);
				save2("plugins_healthShow_autoDismissTime",plugins.healthShow.autoDismissTime);
				break;
			case"showBackgruond":
				plugins.healthShow.showBackgruond=!plugins.healthShow.showBackgruond;
				save2("plugins_healthShow_showBackgruond",plugins.healthShow.showBackgruond);
				if(plugins.healthShow.showBackgruond)
				{
					plugins.healthShow.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
				}
				else
				{
					plugins.healthShow.window.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				}
				plugins.healthShow.window.dismiss();
				plugins.healthShow.window.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP,0,dip2px(ctx,60));
				break;
			}
			break;
		}
		break;
	/////////////////////////////////////////////////////////////////无效
	case"null":
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
	Menus_PluginMenu=new Array(
		{kind:"text",text:"插件管理器",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"砍树插件",data:"PLUGIN tree"},
		{kind:"button",text:"血量显示插件",data:"PLUGIN healthShow"});
	Menus_PluginMenu=Menu_make(Menus_PluginMenu);
	Menus_Plugin_tree=new Array(
		{kind:"text",text:"砍树插件",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:"Build #0004",color:android.graphics.Color.GREEN,size:16},
		{kind:"check",text:"启用插件",data:"plugins tree Enable",torf:plugins.tree.Enable},
		{kind:"check",text:"扩散性砍树",data:"plugins tree mode",torf:plugins.tree.mode},
		{kind:"check",text:"自动补种并还原草方块",data:"plugins tree autoRe",torf:plugins.tree.autoRe},
		{kind:"check",text:"在创造模式也启用",data:"plugins tree inCreative",torf:plugins.tree.inCreative});
	Menus_Plugin_tree=Menu_make(Menus_Plugin_tree);
	Menus_Plugin_healthShow=new Array(
		{kind:"text",text:"血量显示插件",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:"Build #0001",color:android.graphics.Color.GREEN,size:16},
		{kind:"check",text:"启用插件",data:"plugins healthShow Enable",torf:plugins.healthShow.Enable},
		{kind:"check",text:"显示背景",data:"plugins healthShow showBackgruond",torf:plugins.healthShow.showBackgruond},
		{kind:"check",text:"显示生物名称",data:"plugins healthShow showName",torf:plugins.healthShow.showName},
		{kind:"check",text:"显示血量显示条",data:"plugins healthShow showBar",torf:plugins.healthShow.showBar},
		{kind:"button",text:"设置隐藏时间",data:"PLUGINS healthShow setDismissTime"});
	Menus_Plugin_healthShow=Menu_make(Menus_Plugin_healthShow);
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
	Menus_ModMenu=Menu_make(Menus_ModMenu);
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
	Menus_PlayerMenu=Menu_make(Menus_PlayerMenu);
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
	Menus_TimeMenu=Menu_make(Menus_TimeMenu);
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
		{kind:"button",text:"生成射出的箭",data:"spawnmob 80"},
		{kind:"button",text:"生成扔出的雪球",data:"spawnmob 81"},
		{kind:"button",text:"生成扔出的鸡蛋",data:"spawnmob 82"},
		{kind:"text",text:"实体管理：",color:"",size:21},
		{kind:"button",text:"移除指定实体",data:"REMOVEENTITY"},
		{kind:"button",text:"过滤指定实体",data:"UNSPAWNENTITY"});
	Menus_MobMenu=Menu_make(Menus_MobMenu);
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
	Menus_TpMenu=Menu_make(Menus_TpMenu);
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
		{kind:"check",text:"爆炸阻止模式",data:"unExplode",torf:unExplode},
		{kind:"check",text:"无限放置方块",data:"blocksss",torf:blocksss},
		{kind:"check",text:"可破坏基岩",data:"breakBedblock",torf:breakBedblock},
		{kind:"check",text:"爆炸箭",data:"explodeArrow",torf:explodeArrow},
		{kind:"check",text:"工具永不损坏",data:"neverbad tools",torf:neverbad.tools},
		{kind:"check",text:"盔甲永不损坏",data:"neverbad armor",torf:neverbad.armor},
		{kind:"button",text:"冰不滑不融化(玩坏)",data:"keepice"},
		{kind:"button",text:"制造爆炸",data:"explode 4.0"},
		{kind:"button",text:"制造大爆炸",data:"explode 10.0"},
		{kind:"button",text:"信息采集工具",data:"MESSAGEMENU",color:android.graphics.Color.YELLOW},
		{kind:"button",text:"显示更新日志",data:"showupdatelog",color:android.graphics.Color.YELLOW},
		{kind:"text",text:"跳跃高度提升：",color:"",size:21},
		{kind:"jumpSeek"},
		{kind:"text",text:"渣机优化级别：",color:"",size:21},
		{kind:"badphoneSeek"},
		{kind:"check",text:"Logo什么的很烦？点我关闭",data:"no_logo_and_toast",color:android.graphics.Color.YELLOW,torf:load2("no_logo_and_toast")=="true"});
	Menus_MoreMenu=Menu_make(Menus_MoreMenu);
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
	Menus_X_RayMENU=Menu_make(Menus_X_RayMENU);
	Menus_ItemMenu=new Array(
		{kind:"text",text:"物品生成菜单",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"ItemGet"},
		{kind:"text",text:"这只是一个简单的物品生成器，如果要详细的物品清单请使用TMI插件",color:android.graphics.Color.YELLOW,size:18});
}
function switchData(data)//GUI判断指令
{
	switch(data)
	{
	case"ITEMMENU":
		Menu_open(Menus_ItemMenu);
		break;
	case"PLUGINMENU":
		Menus_PluginMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"PLUGIN tree":
		Menus_Plugin_tree.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"PLUGIN healthShow":
		Menus_Plugin_healthShow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"MODMENU":
		Menus_ModMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"PLAYERMENU":
		Menus_PlayerMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"TIMEMENU":
		Menus_TimeMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"MOBMENU":
		Menus_MobMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"TPMENU":
		Menus_TpMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"MOREMENU":
		Menus_MoreMenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
		break;
	case"PLUGINS healthShow setDismissTime":
		inputDialog(true,false,plugins.healthShow.autoDismissTime.toString(),"默认为10(单位:秒)","","","设置自动隐藏时间","确定","取消","plugins healthShow autoDismissTime ");
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
		Menus_X_RayMENU.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
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
	case"BGMMENU":
		Menus_BGMMenu=new Array(
			{kind:"text",text:"背景音乐菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"check",text:"开启背景音乐",data:"bgm on",torf:bgm.on},
			{kind:"text",text:"↓勾选则会把每首BGM都播放完才继续下一首",size:18},
			{kind:"check",text:"完整播放每首BGM",data:"bgm mustplayfinish",torf:bgm.mustplayfinish},
			{kind:"text",text:"↓勾选则在播放停止后会休眠60秒",size:18},
			{kind:"check",text:"启用播放间隔",data:"bgm needsleep",torf:bgm.needsleep},
			{kind:"text",text:"↓不勾选则会按列表顺序播放",size:18},
			{kind:"check",text:"随机播放音乐",data:"bgm random",torf:bgm.random},
			{kind:"button",text:"刷新BGM列表",data:"bgm reloadlist"});
		var tmptext="当前BGM列表:";
		for(i=0;i<bgm.list.length;i++)
		{
			tmptext=tmptext+"\n  -"+bgm.list[i];
		}
		if(tmptext=="当前BGM列表:")
		{
			tmptext="没有BGM文件！";
		}
		Menus_BGMMenu.push(
			{kind:"text",text:tmptext,color:android.graphics.Color.YELLOW,size:18},
			{kind:"button",text:"打开浏览器下载BGM文件包",data:"eval jumpToUrl(\"http://pan.baidu.com/s/1hq45Ope\");print(\"请打开“超级辅助”文件夹下载！\");"},
			{kind:"text",text:"下载BGM文件后请解压到/sd卡/games/com.mojang/minecraftpe/supercheat/sounds/文件夹，也可以自己放入音乐文件（支持.mp3格式的文件）",color:android.graphics.Color.GREEN,size:18},
			{kind:"text",text:"请不要在此文件夹内放入其他文件或创建目录，否则后果自负！",color:android.graphics.Color.RED,size:18});
		Menu_open(Menus_BGMMenu);
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
			case"ItemGet":
				Menu_addText(layout,textParams,"物品ID：","",14);
				var itemId = new android.widget.EditText(ctx);
				itemId.setText("1");
				itemId.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				layout.addView(itemId);
				Menu_addText(layout,textParams,"特殊值：","",14);
				var itemDmg = new android.widget.EditText(ctx);
				itemDmg.setText("0");
				itemDmg.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				layout.addView(itemDmg);
				if(Level.getGameMode()==0)
				{
					Menu_addText(layout,textParams,"数量：","",14);
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
			case"autoDismissTimeText":
				var dismissText = new android.widget.EditText(ctx);
				dismissText.setText(plugins.healthShow.autoDismissTime);
				dismissText.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
				dismissText.setHint("单位：秒，默认为10");
				layout.addView(dismissText);
				var button = new android.widget.Button(ctx);
				button.setText("保存时间");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(){
						if(parseInt(dismissText.getText())>0)
						{
							plugins.healthShow.autoDismissTime=parseInt(dismissText.getText());
							save2("plugins_healthShow_autoDismissTime",plugins.healthShow.autoDismissTime);
						}
					}
				}));
				layout.addView(button);
				break;
			default:
				Menu_addText(layout,textParams,"[组件"+MenuData[i].kind+"不存在]",android.graphics.Color.RED,18);
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
//信息钩子列表
var messagelist=["explodeHook","destroyBlock","entityAddedHook","entityRemovedHook","deathHook","procCmd","chatHook","useItem","attackHook","levelEventHook"];
//Logos
	//Glowstone Team
	var logo1="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";
	//SRS
	var logo2="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t22yYVwmDYt0bftbr37hO9/9/S+99nkySuohYD6ff/0bX3vyzgfHjx/3ZofzuaqmnM8XpwezeYawKUdeL1enp085xjt37mQnc3v45L3IzcHsYNaErm2fPHqScw4SmmZOXYSBhD54/AE5PXjxZYav8+piuQg5G4WDeWfObeBFn1bLVRPDrVt3YkBK6b33Pji6fSci3r9/Px7g4PB2hgF+9vT8/fff44ZTShcnZ7FB13Ug3L93//6t+6sG3QHSCneOcP/+nWbWfPDLD/7b3/y3pj176f69xSpJCE5ysVyRUN8vz46fZMu377w0m81iE0MIqtqbnz8+fvjo4f37t5+enHXzA1FE4Tu373/ve9/96ldf6w6jZVsvV/du3bp159Z6uXrnjbffePONF158Ud2i9Ey0WB5LmFNqnzx9ulwuYwjW94dHt1586ZWsyXM+Pb84OTlWc2ZiAocQA/X9cr1OFOLRrDVDmHWu6yfHT4ipaWehnXWz0LRsasuL5dnZ2XuP3j85PjVP2ZIoCDDNlk0GedQyI27oLvAwZZQAGXpM1HyHFc9V/ErewO4Wb3NchhNcFVmrzyjEYdqq9SobY7oAQHnfd+eJk1rMgQimsYGLbgPFVRY4OG3UeKmm1nLeRJNDREoY8Xx/oHZH7LxEGMaXxsdFwwGAue3EfEt/oE89wzauCduLxoh6YfvJ5tJ7MAy17a1+EWowYdkwU9XN1cuCQzJibgliiYgRZcugWnNQFunAXIJk/4IslOAHhxC7ru0+9/kvvPzKS7GLi+PFz9/65YsP7t2+c7ebNZ//wudu375969adb37jGwfz+XK5/MFf/eB8ufrOH33n3r1ba9V/+sk//vjHf/fgpVe+/fvfms/vPD17/IP/6/84PT77/Kuf/+bXfufu7bt/96O/+5v/92+6pnvtta/89te/2jXdew/f+8v/9S+J4x//yZ/ev3tkqq//w4//9m//662D2//uz/+n2fzO8ZMnP/irv1penN29/8KffPe73Xxuff9f/uJ/uVj18xi/84d/eOflo69+7WsQPj09ffTB8f/zX3/4+l+/bmbdbN7FTkhidzCbzUCIAReL9PZbb37uc68etPGVl1759re//bM3fvbCgxe++0d/2LZzYpLYrNd9D3v4wQd//YMfrPrlH337D774pdeSp9nBjMHHp0+fvPvor3/414/ee5QW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";

