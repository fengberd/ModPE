//本js由风鸟制作！严禁盗版或修改版权！！
var moblist=[];
var cl=1;
var first=true;
function attackHook(a,e)
{
	if(!Player.isPlayer(e))
	{
		moblist.push(e);
		var a=findMob(Entity.getEntityTypeId(e));
		clientMessage("<"+a+">"+ getColor(cl) +"yooooooo");
		cl++;
		if(cl>7)
		{
			cl=1;
		}
	}
	preventDefault();
}
function entityRemovedHook(e)
{
	for(i=0;i<moblist.length;i++)
	{
		if(moblist[i]==e)
		{
			moblist.splice(i,1);
		}
	}
}
function modTick()
{
	for(i=0;i<=moblist.length;i++)
	{
		Entity.setVelY(moblist[i],0.2);
	}
}
function findMob(type)
{
	for(i in MOB)
	{
		if(type==MOB[i].id)
		{
			return MOB[i].name;
		}
	}
	return "不明生物";
}
function getColor(name)//寻找颜色
{
	for(i in COLORS)
	{
		if(name==COLORS[i].name)
		{
			return COLORS[i].color;
		}
	}
	return ChatColor.WHITE;
}
function leaveGame()
{
	moblist=[];
}
function newLevel()
{
	if(first)
	{
		print("\n实体飞天JS\n效果：点击实体会不停上升\n由风鸟制作，盗版杀无赦！！");
		print("\n实体飞天JS\n效果：点击实体会不停上升\n由风鸟制作，盗版杀无赦！！");
		print("\n实体飞天JS\n效果：点击实体会不停上升\n由风鸟制作，盗版杀无赦！！");
		first=false;
	}
}
//********************************变量组声明区 ********************************
//***********实体列表**********
var MOB=[
	{id:10,name:"鸡"},
	{id:11,name:"牛"},
	{id:12,name:"猪"},
	{id:13,name:"羊"},
	{id:14,name:"狼"},
	{id:15,name:"村民"},
	{id:16,name:"哞菇"},
	{id:32,name:"僵尸"},
	{id:33,name:"爬行者"},
	{id:34,name:"骷髅"},
	{id:35,name:"蜘蛛"},
	{id:36,name:"僵尸猪人"},
	{id:37,name:"史莱姆"},
	{id:38,name:"末影人"},
	{id:39,name:"蠹虫"},
	{id:65,name:"TNT"},
	{id:80,name:"箭"},
	{id:81,name:"雪球"},
	{id:82,name:"鸡蛋"},
	{id:83,name:"画"},
	{id:84,name:"矿车"}];
//***********颜色列表**********
var COLORS=[
	{name:"1",color:ChatColor.BLUE},
	{name:"2",color:ChatColor.RED},
	{name:"3",color:ChatColor.YELLOW},
	{name:"4",color:ChatColor.GREEN},
	{name:"5",color:ChatColor.BLACK},
	{name:"6",color:ChatColor.GRAY},
	{name:"7",color:ChatColor.WHITE}
	];
