/*本js由风鸟制作！严禁盗版或修改版权！！
BUG反馈或建议：
	搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）
	到百度贴吧“FENGberd吧”的超级辅助内测贴提出
	请在反馈时标明Build号以及错误现象、出现方式
	感谢@亡灵战尸 的冰块不融化建议（虽然做出来关不掉→_→）
*/
/*
备忘：
	
	
*/
//********************************变量声明区开始********************************
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var build="Build #2079";
var Bugmsg="BUG反馈或建议：\n搜索群“风鸟神教”加入（群验证：超级辅助bug反馈）\n到百度贴吧“FENGberd吧”的超级辅助内测贴提出\n请在反馈时标明Build号以及错误现象、出现方式";//BUG反馈信息
var FENGberdmsg="\n超级辅助Js\n作者：风鸟\n内部专用版禁止外传"//版权信息
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
var magnet=0,list;//磁铁模式
var keepice=false;//冰不滑不融化
var username="";//用户名
//GUI区
var MainWindow = null;//主菜单
var MODWindow =null;//模型修改菜单
var mainMenu = null;
var subMenu = null;
var infoMenu = null;
//********************************变量声明区结尾********************************



//********************************游戏内HOOK函数区********************************
function destroyBlock(x,y,z,side)//方块破坏钩子
{
	if(saveworld)
	{
		preventDefault();
	}
}
function deathHook(m, v)
{
	if(v==PlayerEntity)
	{
		diet=true;
		diex=Entity.getX(PlayerEntity);
		diey=Entity.getY(PlayerEntity);
		diez=Entity.getZ(PlayerEntity);
		CM("使用/backdie或gui返回死亡地点","yellow");
	}
}
function procCmd(cmd)//输入指令
{
	usecmd(cmd);
}
function attackHook(a,e)//生物被攻击
{
	if(!savemob)
	{
		if(savepicture && Entity.getEntityTypeId(e)==83)
		{
			preventDefault();
		}
		else if(skill==true && Entity.getHealth(e) >= 2 && e != PlayerEntity )
		{
			Entity.setHealth(e,1);
		}
	}
	else
	{
		preventDefault();
	}
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
}
function entityRemovedHook(Ent)//实体移除钩子
{
	
}
function modTick()//0.05秒执行一次
{
	if(username!="")
	{
		var list=Entity.getAll();
		for(i=0;i<list.length;i++)
		{
			if(Player.isPlayer(list[i]))
			{
				if(Player.getName(list[i])==username)
				{
					PlayerEntity=list[i];
				}
			}
		}
	}
	else
	{
		PlayerEntity=getPlayerEnt();
	}
	if(god==true)
	{
		Entity.setHealth(PlayerEntity,30000);
	}
	if(fly==true)
	{
		setVelY(PlayerEntity,0+upvel);
		upvel=0;
	}
	if(magnet!=0)
	{
		list=Entity.getAll();
		for(i=0;i<list.length;i++)
		{
			if(Entity.getEntityTypeId(list[i])==64)
			{
				if(magnet==-1)
				{
					Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
				}
				else if(Entity.getX(list[i])>=Entity.getX(PlayerEntity) && Entity.getX(list[i])-Entity.getX(PlayerEntity)<=magnet)
				{
					if(Entity.getY(list[i])>=Entity.getY(PlayerEntity) && Entity.getY(list[i])-Entity.getY(PlayerEntity)<=magnet)
					{
						if(Entity.getZ(list[i])>=Entity.getZ(PlayerEntity) && Entity.getZ(list[i])-Entity.getZ(PlayerEntity)<=magnet)
						{
							Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
						}
						else if(Entity.getZ(PlayerEntity)-Entity.getZ(list[i])<=magnet)
						{
							Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
						}
					}
					else if(Entity.getY(PlayerEntity)-Entity.getY(list[i])<=magnet)
					{
						if(Entity.getZ(list[i])>=Entity.getZ(PlayerEntity) && Entity.getZ(list[i])-Entity.getZ(PlayerEntity)<=magnet)
						{
							Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
						}
						else if(Entity.getZ(PlayerEntity)-Entity.getZ(list[i])<=magnet)
						{
							Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
						}
					}
				}
				else if(Entity.getX(PlayerEntity)-Entity.getX(list[i])<=magnet)
				{
					if(Entity.getY(list[i])>=Entity.getY(PlayerEntity) && Entity.getY(list[i])-Entity.getY(PlayerEntity)<=magnet)
					{
						if(Entity.getZ(list[i])>=Entity.getZ(PlayerEntity) && Entity.getZ(list[i])-Entity.getZ(PlayerEntity)<=magnet)
						{
							Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
						}
						else if(Entity.getZ(PlayerEntity)-Entity.getZ(list[i])<=magnet)
						{
							Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
						}
					}
					else if(Entity.getY(PlayerEntity)-Entity.getY(list[i])<=magnet)
					{
						if(Entity.getZ(list[i])>=Entity.getZ(PlayerEntity) && Entity.getZ(list[i])-Entity.getZ(PlayerEntity)<=magnet)
						{
							Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
						}
						else if(Entity.getZ(PlayerEntity)-Entity.getZ(list[i])<=magnet)
						{
							Entity.setPosition(list[i],Entity.getX(PlayerEntity),Entity.getY(PlayerEntity)-1,Entity.getZ(PlayerEntity));
						}
					}
				}
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
					dtext.setText("\nX:"+tmpx+"\nY:"+tmpy+"\nZ:"+tmpz+ "\nEntity:"+ PlayerEntity +"\nID:"+Player.getCarriedItem()+":"+Player.getCarriedItemData());
				}catch(err){
					catchmsg(12,err);
				}
			}
		}))};
}
function leaveGame()//退出存档
{
	//重置功能
	god=false;//无敌
	skill=false;//秒杀
	debug=false;//调试模式
	blocksss=false;//无限放置方块
	backt=false,backx=0,backy=0,backz=0;//返回上一个坐标
	diet=false,diex=0,diey=0,diez=0;//返回死亡地点
	fly=false,upvel=0;//飞行
	saveworld=false,savemob=false,savepicture=false;//保护模式
	PlayerEnt;//玩家实体ID
	if(keepice)
	{
		usecmd("keepice");
	}
	sneaking=false;//潜行模式
	magnet=0;//磁铁模式
	//username="";//玩家识别系统
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		if(MainWindow != null){//关闭主按钮
			MainWindow.dismiss();
			MainWindow = null;
		}
		if(downBtnWindow != null){//关闭下飞行按钮
			downBtnWindow.dismiss();
			downBtnWindow = null;
		}
		if(upBtnWindow != null){//关闭上飞行按钮
			upBtnWindow.dismiss();
			upBtnWindow = null;
		}
		if(debugWindow != null){//关闭调试模式文本
			debugWindow.dismiss();
			debugWindow = null;
		}
	}}));
}
//********************************自定义函数区********************************
function CM(msg,color)//彩字输出
{
	clientMessage(getColor(color)+msg);
}
function catchmsg(id,msg)//GUI报错
{
	/*
	按钮：10
	菜单：11
	文本：12
	对话框：13
	*/
	switch(id)
	{
	case 10:
		print("出现错误:\n无法显示按钮(10)\n"+msg);
		print("出现错误:\n无法显示按钮(10)\n"+msg);
		print("出现错误:\n无法显示按钮(10)\n"+msg);
		clientMessage("出现错误:\n无法显示按钮(10)\n"+msg);
		break;
	case 11:
		print("出现错误:\n无法显示菜单(11)\n"+msg);
		print("出现错误:\n无法显示菜单(11)\n"+msg);
		print("出现错误:\n无法显示菜单(11)\n"+msg);
		clientMessage("出现错误:\n无法显示菜单(11)\n"+msg);
		break;
	case 12:
		print("出现错误:\n无法显示文本(12)\n"+msg);
		print("出现错误:\n无法显示文本(12)\n"+msg);
		print("出现错误:\n无法显示文本(12)\n"+msg);
		clientMessage("出现错误:\n无法显示文本(12)\n"+msg);
		break;
	case 13:
		print("出现错误:\n无法显示对话框(13)\n"+msg);
		print("出现错误:\n无法显示对话框(13)\n"+msg);
		print("出现错误:\n无法显示对话框(13)\n"+msg);
		clientMessage("出现错误:\n无法显示对话框(13)\n"+msg);
		break;
	}
}
function getColor(name)//获取颜色
{
	switch(name)
	{
	case"red":
		return ChatColor.RED
		break;
	case"yellow":
		return ChatColor.YELLOW
		break;
	case"blue":
		return ChatColor.BLUE
		break;
	case"green":
		return ChatColor.GREEN
		break;
	case"black":
		return ChatColor.BLACK
		break;
	case"white":
		return ChatColor.WHITE
		break;
	case"gray":
		return ChatColor.GRAY
		break;
	default:
		return ChatColor.WHITE
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
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function usecmd(cmd)//模拟调用指令
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
	/////////////////////////////////////////////////////////////////生物列表
	case"moblist":	
		CM("实体ID列表:\n鸡-10,牛-11,猪-12\n羊-13,僵尸-32,爬行者-33\n骷髅-34,蜘蛛-35,僵尸猪人-36\n激活的TNT-65,画-83,矿车-84\n射出的箭-80,雪球-81,鸡蛋-82","white");
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
		Entity.setHealth(PlayerEntity,1);
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
		if(keepice)
		{
			keepice=false;
			save("keepice","false");
			Block.defineBlock(79, "Ice", ["ice"], 79, false, 0);
		}
		else
		{
			keepice=true;
			save("keepice","true");
			Block.defineBlock(79, "Ice", ["ice"], 20, false, 0);
		}
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
		if(Data.length=2)
		{
			if(Data[1]!=0)
			{
				magnet=Data[1];
				if(Data[1]==-1)
				{
					CM("进入世界级磁铁模式","green");
				}
				else
				{
					CM("进入磁铁模式,范围"+magnet+"格","green");
				}
			}
			else
			{
				magnet=0;
				CM("退出磁铁模式","yellow");
			}
		}
		else
		{
			CM("参数错误","red");
		}
		break;
	/////////////////////////////////////////////////////////////////玩家识别系统
	case"playerset":
		if(Data.length==2)
		{
			var tlist=Entity.getAll();
			var tus=0;
			for(i=0;i<tlist.length;i++)
			{
				if(Player.isPlayer(tlist[i]))
				{
					if(Player.getName(tlist[i])==Data[1])
					{
						tus=tus+1;
					}
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
						debugWindow.setWidth(dip2px(ctx, 100));
						debugWindow.setHeight(dip2px(ctx, 105));
						debugWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
						debugWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP,0,0);
				   }catch(err){
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
	/////////////////////////////////////////////////////////////////没找到
	default:
		CM("未找到指令，输入/help查看帮助","red");
		break;
	}
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
	}
	if(load("saveworld")=="true")
	{
		usecmd("saveworld");
	}
	if(load("keepice")=="true")
	{
		usecmd("keepice");
	}
	if(load("savepicture")=="true")
	{
		usecmd("savepicture");
	}
	if(load("savemob")=="true")
	{
		usecmd("savemob");
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
					var Menus_MainMenu=new Array(
						{kind:"text",text:"超级辅助",color:"",size:24},
						{kind:"text",text:"by 风鸟",color:"",size:16},
						{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
						{kind:"button",text:"物品生成菜单",data:"ITEMMENU"},
						{kind:"button",text:"玩家操作菜单",data:"PLAYERMENU"},
						{kind:"button",text:"实体操作菜单",data:"MOBMENU"},
						{kind:"button",text:"时间操作菜单",data:"TIMEMENU"},
						{kind:"button",text:"定点传送菜单",data:"TPMENU"},
						{kind:"button",text:"其他功能",data:"MOREMENU"},
						{kind:"text",text:"辅助功能：",color:"",size:20},
						{kind:"check",text:"无敌模式",data:"god",torf:god},
						{kind:"check",text:"飞行模式",data:"fly",torf:fly},
						{kind:"check",text:"潜行模式",data:"sneaking",torf:sneaking},
						{kind:"check",text:"秒杀模式",data:"skill",torf:skill},
						{kind:"check",text:"调试模式",data:"debug",torf:debug},
						{kind:"check",text:"画保护模式",data:"savepicture",torf:savepicture},
						{kind:"check",text:"世界保护模式",data:"saveworld",torf:saveworld},
						{kind:"check",text:"实体保护模式",data:"savemob",torf:savemob},
						{kind:"check",text:"无限放置方块",data:"blocksss",torf:blocksss},
						{kind:"check",text:"冰不滑不融化",data:"keepice",torf:keepice},
						{kind:"check",text:"磁铁模式",data:"MAGNET",torf:magnet==20},
						{kind:"check",text:"世界级磁铁模式",data:"MAGNET-1",torf:magnet==-1});
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
//**********************************************************打开菜单**********************************************************
function switchData(data)//GUI判断指令
{
	switch(data)
	{
	case"ITEMMENU":
			openMenu();
			break;
	case"MODMENU":
		var Menus_ModMenu=new Array(
			{kind:"text",text:"玩家模型修改",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:"警告：多人游戏中可能会崩溃",color:android.graphics.Color.YELLOW,size:16},
			{kind:"text",text:"部分模型第一人称可能会崩溃",color:android.graphics.Color.YELLOW,size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"text",text:"一般生物：",color:"",size:20},
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
		Menu_open(Menus_ModMenu);
		break;
	case"PLAYERMENU":
		var Menus_PlayerMenu=new Array(
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
		Menu_open(Menus_PlayerMenu);
		break;
	case"TIMEMENU":
		var Menus_TimeMenu=new Array(
			{kind:"text",text:"时间操作菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"text",text:"基本操作：",color:"",size:20},
			{kind:"button",text:"查看时间",data:"time"},
			{kind:"button",text:"变成白天",data:"time 0"},
			{kind:"button",text:"变成夜晚",data:"time 20200"},
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
		Menu_open(Menus_TimeMenu);
		break;
	case"MOBMENU":
		var Menus_MobMenu=new Array(
			{kind:"text",text:"实体操作菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"button",text:"实体ID表",data:"moblist"},
			{kind:"text",text:"实体生成：",color:"",size:20},
			{kind:"button",text:"生成牛",data:"spawnmob 11"},
			{kind:"button",text:"生成羊",data:"spawnmob 13"},
			{kind:"button",text:"生成鸡",data:"spawnmob 10"},
			{kind:"button",text:"生成猪",data:"spawnmob 12"},
			{kind:"button",text:"生成僵尸",data:"spawnmob 32"},
			{kind:"button",text:"生成骷髅",data:"spawnmob 34"},
			{kind:"button",text:"生成蜘蛛",data:"spawnmob 35"},
			{kind:"button",text:"生成爬行者",data:"spawnmob 33"},
			{kind:"button",text:"生成僵尸猪人",data:"spawnmob 36"},
			{kind:"button",text:"生成矿车",data:"spawnmob 84"},
			{kind:"button",text:"生成激活的TNT",data:"spawnmob 65"},
			{kind:"button",text:"生成扔出的雪球",data:"spawnmob 81"},
			{kind:"button",text:"生成扔出的鸡蛋",data:"spawnmob 82"},
			{kind:"text",text:"实体管理：",color:"",size:20},
			{kind:"button",text:"移除指定实体",data:"REMOVEENTITY"});
		Menu_open(Menus_MobMenu);
		break;
	case"TPMENU":
		var Menus_TpMenu=new Array(
			{kind:"text",text:"定点传送菜单",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"button",text:"回家",data:"home home"},
			{kind:"button",text:"回家2",data:"home home2"},
			{kind:"button",text:"传送到矿洞",data:"warp 矿洞"},
			{kind:"button",text:"传送到矿洞2",data:"warp 矿洞2"},
			{kind:"button",text:"返回死亡地点",data:"backdie"},
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
		Menu_open(Menus_TpMenu);
		break;
	case"MOREMENU":
		var Menus_MoreMenu=new Array(
			{kind:"text",text:"其他功能",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"button",text:"制造爆炸",data:"explode 4.0"},
			{kind:"button",text:"制造大爆炸",data:"explode 10.0"});
		Menu_open(Menus_MoreMenu);
		break;
	case"MAGNET":
		if(magnet==20)
		{
			usecmd("magnet 0");
		}
		else
		{
			usecmd("magnet 20");
		}
		break;
	case"MAGNET-1":
		if(magnet==-1)
		{
			usecmd("magnet 0");
		}
		else
		{
			usecmd("magnet -1");
		}
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
	default:
		usecmd(data);
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
		menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
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
	//button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
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
