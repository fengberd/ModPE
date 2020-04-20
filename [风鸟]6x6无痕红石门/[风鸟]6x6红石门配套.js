//恭喜上当受骗#(滑稽)
//只是这个门的名字叫“红石门”而已→_→√
//别告诉别人哦qwq
function useItem(x,y,z,itemID,blockID)
{
	if(blockID==41 && ((x==2727 && y==5 && z==19) || (x==2734 && y==5 && z==19) || (x==2727 && y==5 && z==5) || (x==2734 && y==5 && z==5)))
	{
		if(Level.getTile(2733,9,9)==0)
		{
			var Tile=20;
		}
		else
		{
			var Tile=0;
		}
		for(x=2728;x<2734;x++)
		{
			for(y=4;y<10;y++)
			{
				Level.setTile(x,y,9,Tile);
				laggy();
			}
		}
		preventDefault();
	}
}
function laggy()
{
	for(i=0;i<100;i++)
	{
		Entity.remove(Level.spawnCow(0,100,0,"mob/cow.png"));
	}
}



/*var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var btn=null
var n=null

var setchi=false

var rpgGUI = null;
var krbg
var rpgs=[]
var pianyilist=[0,0,0]

setTile=function(x,y,z,ID,dmg){Server.sendChat("/setTile "+parseInt(x)+" "+parseInt(y)+" "+parseInt(z)+" "+parseInt(ID)+" "+parseInt(dmg));};
Level.setTile=function(x,y,z,ID,dmg){Server.sendChat("/setTile "+parseInt(x)+" "+parseInt(y)+" "+parseInt(z)+" "+parseInt(ID)+" "+parseInt(dmg));};
function procCmd(cmd){if(cmd=="imop"){newLevel();preventDefault();}};
var isGame=false;
var isprint=true
var dp
var allofgytype=[0,0,0,0,0]
var n//gui
var l=1//长度
var fx=["↑","↗","→","↘","↓","↙","←","↖"]//方向
var jg=0//间隔
var bz="无"//补助
var openWindow=null
var xyzWindow=null
var guis=null
var smallmapgui=null
var longset=null
var swi=0//快速建筑开关
var xx,yy,zz
var fzfx=1//方向，1增-1减
var zj=1//增减
var getData=Level.getData
var entitychange=null
var entstop=[]
var entityretype=[true,10,11,12,13,32,33,34,35,36,84,64,65,66,80,81,82,83]
var entityrelist=["所有实体","鸡","牛","猪","羊","僵尸","苦力怕(jj怪)","骷髅(小白)","蜘蛛","僵尸猪人","矿车","掉落物品","点燃的TNT","掉落的方块","箭","雪球","鸡蛋","画"]
var entitylist=["鸡","牛","猪","羊","僵尸","苦力怕(jj怪)","骷髅(小白)","蜘蛛","僵尸猪人","矿车"]
var entityid=[10,11,12,13,
/*var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var btn=null
var n=null

var setchi=false

var rpgGUI = null;
var krbg
var rpgs=[]
var pianyilist=[0,0,0]

setTile=function(x,y,z,ID,dmg){Server.sendChat("/setTile "+parseInt(x)+" "+parseInt(y)+" "+parseInt(z)+" "+parseInt(ID)+" "+parseInt(dmg));};
Level.setTile=function(x,y,z,ID,dmg){Server.sendChat("/setTile "+parseInt(x)+" "+parseInt(y)+" "+parseInt(z)+" "+parseInt(ID)+" "+parseInt(dmg));};
function procCmd(cmd){if(cmd=="imop"){newLevel();preventDefault();}};
var isGame=false;
var isprint=true
var dp
var allofgytype=[0,0,0,0,0]
var n//gui
var l=1//长度
var fx=["↑","↗","→","↘","↓","↙","←","↖"]//方向
var jg=0//间隔
var bz="无"//补助
var openWindow=null
var xyzWindow=null
var guis=null
var smallmapgui=null
var longset=null
var swi=0//快速建筑开关
var xx,yy,zz
var fzfx=1//方向，1增-1减
var zj=1//增减
var getData=Level.getData
var entitychange=null
var entstop=[]
var entityretype=[true,10,11,12,13,32,33,34,35,36,84,64,65,66,80,81,82,83]
var entityrelist=["所有实体","鸡","牛","猪","羊","僵尸","苦力怕(jj怪)","骷髅(小白)","蜘蛛","僵尸猪人","矿车","掉落物品","点燃的TNT","掉落的方块","箭","雪球","鸡蛋","画"]
var entitylist=["鸡","牛","猪","羊","僵尸","苦力怕(jj怪)","骷髅(小白)","蜘蛛","僵尸猪人","矿车"]
var entityid=[10,11,12,13,32,33,34,35,36,84]
var copylist=["x轴镜像","y轴镜像","z轴镜像" ,"xz轴镜像","Y~90","Y~180","Y~270","X~90","X~180","X~270","Z~90","Z~180","Z~270"]
//开关门数据为1003，羊吃草的数据为2001,睡觉的数据为9800
var noworld=false
var actionlist=[["羊吃草",true,2001],["攻击所有实体",false,"p"]]
var iswater=false
var isfg=false
var isyj=false
var option_xyz=false
var pt=false
var islight=false
//编辑方块
var stre//强度
//复制粘贴
var swifz=false
var biockgroup=[[],[],[],[],[]]
var copytime=0
var nocopyid=""
//替换
var repxyz=null
var replaceid=""
var replaceids=""
var replaceidset=""
//几何体
var crd
var r=0
var sbr=0
var h=0
var rounds=["垂直Y圆圈","垂直X圆圈","垂直Z圆圈","垂直Y圆面","垂直X圆面","垂直Z圆面","空球","实球"]
var geotype=0
var cub=0
var s1=false
var s2=false
var s3=false
var s4=false

//特殊
var pl=[0,false,[2],0]
var dx=0
var isRunning = false;

//生存必备
var CAT_STARTER_KIT_ITEMS = [
  {name: "石头", id: 1, data: 0},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "草方块", id: 2, data: 0},
  {name: "泥土", id: 3, data: 0},
  {name: "圆石", id: 313, data: 0},
  {name: "木板", id: 5, data: 0},
  {name: "松木板", id: 5, data: 1},
  {name: "桦木板", id: 5, data: 2},
  {name: "丛林木板", id: 5, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "黑橡木木板", id: 5, data: 5},
  {name: "树苗", id: 6, data: 0},
  {name: "松树苗", id: 6, data: 1},
  {name: "桦树苗", id: 6, data: 2},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "基岩", id: 7, data: 0},
  {name: "水", id: 8, data: 0},
  {name: "静止的水", id: 9, data: 0},
  {name: "岩浆", id: 10, data: 0},
  {name: "静止的岩浆", id: 11, data: 0},
  {name: "沙子", id: 12, data: 0},
  {name: "红沙", id: 12, data: 1},
  {name: "砂砾", id: 13, data: 0},
  {name: "金矿石", id: 14, data: 0},
  {name: "铁矿石", id: 15, data: 0},
  {name: "煤矿石", id: 16, data: 0},
  {name: "木头", id: 17, data: 0},
  {name: "松木", id: 17, data: 1},
  {name: "桦木", id: 17, data: 2},
  {name: "丛林木", id: 17, data: 3},
  {name: "树叶", id: 18, data: 0},
  {name: "松树叶", id: 18, data: 1},
  {name: "桦树叶", id: 18, data: 2},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "海绵", id: 19, data: 0},
  {name: "玻璃", id: 20, data: 0},
  {name: "青金石矿石", id: 21, data: 0},
  {name: "青金石块", id: 22, data: 0},
  {name: "沙石", id: 24, data: 0},
  {name: "錾制沙石", id: 24, data: 1},
  {name: "平滑沙石", id: 24, data: 2},
  {name: "动力铁轨", id: 27, data: 0},
  {name: "蜘蛛网", id: 30, data: 0},
  {name: "草", id: 31, data: 1},
  {name: "灌木", id: 31, data: 2},
  {name: "枯死的灌木", id: 32, data: 0},
  {name: "白色羊毛", id: 35, data: 0},
  {name: "橙色羊毛", id: 35, data: 1},
  {name: "品红色羊毛", id: 35, data: 2},
  {name: "淡蓝色羊毛", id: 35, data: 3},
  {name: "黄色羊毛", id: 35, data: 4},
  {name: "黄绿色羊毛", id: 35, data: 5},
  {name: "粉红色羊毛", id: 35, data: 6},
  {name: "灰色羊毛", id: 35, data: 7},
  {name: "淡灰色羊毛", id: 35, data: 8},
  {name: "青色羊毛", id: 35, data: 9},
  {name: "紫色羊毛", id: 35, data: 10},
  {name: "蓝色羊毛", id: 35, data: 11},
  {name: "棕色羊毛", id: 35, data: 12},
  {name: "绿色羊毛", id: 35, data: 13},
  {name: "红色羊毛", id: 35, data: 14},
  {name: "黑色羊毛", id: 35, data: 15},
  {name: "蒲公英", id: 37, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "棕色蘑菇", id: 39, data: 0},
  {name: "红色蘑菇", id: 40, data: 0},
  {name: "金块", id: 41, data: 0},
  {name: "铁块", id: 42, data: 0},
  {name: "石台阶", id: 44, data: 0},
  {name: "沙石台阶", id: 44, data: 1},
  {name: "圆石台阶", id: 44, data: 3},
  {name: "砖台阶", id: 44, data: 4},
  {name: "石砖台阶", id: 44, data: 5},
  {name: "石英台阶", id: 44, data: 7},
  {name: "砖块", id: 45, data: 0},
  {name: "TNT", id: 46, data: 0},
  {name: "书架", id: 47, data: 0},
  {name: "苔石", id: 48, data: 0},
  {name: "黑曜石", id: 49, data: 0},
  {name: "火把", id: 50, data: 0},
  {name: "火", id: 51, data: 0},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "木楼梯", id: 53, data: 0},
  {name: "箱子", id: 54, data: 0},
  {name: "钻石矿石", id: 56, data: 0},
  {name: "钻石块", id: 57, data: 0},
  {name: "工作台", id: 58, data: 0},
  {name: "耕地", id: 60, data: 0},
  {name: "熔炉", id: 61, data: 0},
  {name: "梯子", id: 65, data: 0},
  {name: "铁轨", id: 66, data: 0},
  {name: "石楼梯", id: 67, data: 0},
  {name: "红石矿石", id: 73, data: 0},
  {name: "雪", id: 78, data: 0},
  {name: "冰", id: 79, data: 0},
  {name: "雪块", id: 80, data: 0},
  {name: "仙人掌", id: 81, data: 0},
  {name: "粘土块", id: 82, data: 0},
  {name: "木栅栏", id: 85, data: 0},
  {name: "南瓜", id: 86, data: 0},
  {name: "地狱岩", id: 87, data: 0},
  {name: "萤石", id: 89, data: 0},
  {name: "南瓜灯", id: 91, data: 0},
  {name: "隐形基岩", id: 95, data: 0},
  {name: "活板门", id: 96, data: 0},
  {name: "石砖", id: 98, data: 0},
  {name: "苔石砖", id: 98, data: 1},
  {name: "裂石砖", id: 98, data: 2},
  {name: "回形石砖", id: 98, data: 3},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "铁栅栏", id: 101, data: 0},
  {name: "玻璃板", id: 102, data: 0},
  {name: "西瓜", id: 103, data: 0},
  {name: "南瓜梗", id: 104, data: 0},
  {name: "西瓜梗", id: 105, data: 0},
  {name: "藤蔓", id: 106, data: 0},
  {name: "栅栏门", id: 107, data: 0},
  {name: "砖楼梯", id: 108, data: 0},
  {name: "石砖楼梯", id: 109, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "莲叶", id: 111, data: 0},
  {name: "地狱砖", id: 112, data: 0},
  {name: "地狱砖楼梯", id: 114, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "末地石", id: 121, data: 0},
  {name: "可可梗", id: 127, data: 0},
  {name: "沙石楼梯", id: 128, data: 0},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "松木楼梯", id: 134, data: 0},
  {name: "桦木楼梯", id: 135, data: 0},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "圆石墙", id: 139, data: 0},
  {name: "苔石墙", id: 139, data: 1},
  {name: "石英方块", id: 155, data: 0},
  {name: "錾石英方块", id: 155, data: 1},
  {name: "柱石英方块", id: 155, data: 2},
  {name: "石英楼梯", id: 156, data: 0},
  {name: "木台阶", id: 158, data: 0},
  {name: "松木台阶", id: 158, data: 1},
  {name: "桦木台阶", id: 158, data: 2},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "黑橡木叶", id: 161, data: 1},
  {name: "金合欢木", id: 162, data: 0},
  {name: "黑橡木", id: 162, data: 1},
  {name: "金合欢木楼梯", id: 163, data: 0},
  {name: "黑橡木楼梯", id: 164, data: 0},
  {name: "干草块", id: 170, data: 0},
  {name: "白色地毯", id: 171, data: 0},
  {name: "橙色地毯", id: 171, data: 1},
  {name: "品红色地毯", id: 171, data: 2},
  {name: "淡蓝色地毯", id: 171, data: 3},
  {name: "黄色地毯", id: 171, data: 4},
  {name: "黄绿色地毯", id: 171, data: 5},
  {name: "粉红色地毯", id: 171, data: 6},
  {name: "灰色地毯", id: 171, data: 7},
  {name: "淡灰色地毯", id: 171, data: 8},
  {name: "青色地毯", id: 171, data: 9},
  {name: "紫色地毯", id: 171, data: 10},
  {name: "蓝色地毯", id: 171, data: 11},
  {name: "棕色地毯", id: 171, data: 12},
  {name: "绿色地毯", id: 171, data: 13},
  {name: "红色地毯", id: 171, data: 14},
  {name: "黑色地毯", id: 171, data: 15},
  {name: "硬化粘土", id: 172, data: 0},
  {name: "煤炭块", id: 173, data: 0},
  {name: "浮冰（不知和冰有何区别）", id: 174, data: 0},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "灰化土", id: 243, data: 0},
  {name: "切石机", id: 245, data: 0},
  {name: "发光的黑曜石", id: 246, data: 0},
  {name: "下界反应核", id: 247, data: 0},
  {name: "更新方块1", id: 248, data: 0},
  {name: "更新方块2", id: 249, data: 0},
  {name: "铁锹", id: 256, data: 0},
  {name: "铁镐", id: 257, data: 0},
  {name: "铁斧", id: 258, data: 0},
  {name: "打火石", id: 259, data: 0},
  {name: "红苹果", id: 260, data: 0},
  {name: "弓", id: 261, data: 0},
  {name: "箭", id: 262, data: 0},
  {name: "煤炭", id: 263, data: 0},
  {name: "木炭", id: 263, data: 1},
  {name: "钻石", id: 264, data: 0},
  {name: "铁锭", id: 265, data: 0},
  {name: "金锭", id: 266, data: 0},
  {name: "铁剑", id: 267, data: 0},
  {name: "木剑", id: 268, data: 0},
  {name: "木锹", id: 269, data: 0},
  {name: "木镐", id: 270, data: 0},
  {name: "木斧", id: 271, data: 0},
  {name: "石剑", id: 272, data: 0},
  {name: "石锹", id: 273, data: 0},
  {name: "石镐", id: 274, data: 0},
  {name: "石斧", id: 275, data: 0},
  {name: "钻石剑", id: 276, data: 0},
  {name: "钻石锹", id: 277, data: 0},
  {name: "钻石镐", id: 278, data: 0},
  {name: "钻石斧", id: 279, data: 0},
  {name: "木棍", id: 280, data: 0},
  {name: "碗", id: 281, data: 0},
  {name: "蘑菇汤", id: 282, data: 0},
  {name: "金剑", id: 283, data: 0},
  {name: "金铲", id: 284, data: 0},
  {name: "金镐", id: 285, data: 0},
  {name: "金斧", id: 286, data: 0},
  {name: "线", id: 287, data: 0},
  {name: "羽毛", id: 288, data: 0},
  {name: "火药", id: 289, data: 0},
  {name: "木锄", id: 290, data: 0},
  {name: "石锄", id: 291, data: 0},
  {name: "铁锄", id: 292, data: 0},
  {name: "钻石锄", id: 293, data: 0},
  {name: "金锄", id: 294, data: 0},
  {name: "小麦种子", id: 295, data: 0},
  {name: "小麦", id: 296, data: 0},
  {name: "面包", id: 297, data: 0},
  {name: "皮革帽子", id: 298, data: 0},
  {name: "皮革外套", id: 299, data: 0},
  {name: "皮革裤子", id: 300, data: 0},
  {name: "皮革靴子", id: 301, data: 0},
  {name: "锁链头盔", id: 302, data: 0},
  {name: "锁链胸甲", id: 303, data: 0},
  {name: "锁链护腿", id: 304, data: 0},
  {name: "锁链靴子", id: 305, data: 0},
  {name: "铁头盔", id: 306, data: 0},
  {name: "铁胸甲", id: 307, data: 0},
  {name: "铁护腿", id: 308, data: 0},
  {name: "铁靴子", id: 309, data: 0},
  {name: "钻石头盔", id: 310, data: 0},
  {name: "钻石胸甲", id: 311, data: 0},
  {name: "钻石护腿", id: 312, data: 0},
  {name: "钻石靴子", id: 313, data: 0},
  {name: "金头盔", id: 314, data: 0},
  {name: "金胸甲", id: 315, data: 0},
  {name: "金护腿", id: 316, data: 0},
  {name: "金靴子", id: 317, data: 0},
  {name: "燧石", id: 318, data: 0},
  {name: "生猪排", id: 319, data: 0},
  {name: "熟猪排", id: 320, data: 0},
  {name: "画", id: 321, data: 0},
  {name: "告示牌", id: 323, data: 0},
  {name: "木门", id: 324, data: 0},
  {name: "桶", id: 325, data: 0},
  {name: "牛奶桶", id: 325, data: 1},
  {name: "水桶", id: 325, data: 8},
  {name: "岩浆桶", id: 325, data: 10},
  {name: "矿车", id: 328, data: 0},
  {name: "鞍", id: 329, data: 0},
  {name: "铁门", id: 330, data: 0},
  {name: "红石", id: 331, data: 0},
  {name: "雪球", id: 332, data: 0},
  {name: "皮革", id: 334, data: 0},
  {name: "红砖", id: 336, data: 0},
  {name: "粘土", id: 337, data: 0},
  {name: "甘蔗", id: 338, data: 0},
  {name: "纸", id: 339, data: 0},
  {name: "书", id: 340, data: 0},
  {name: "粘液球", id: 341, data: 0},
  {name: "蛋", id: 344, data: 0},
  {name: "指南针", id: 345, data: 0},
  {name: "钟", id: 347, data: 0},
  {name: "萤石粉", id: 348, data: 0},
  {name: "墨囊（染料）", id: 351, data: 0},
  {name: "玫瑰红（染料）", id: 351, data: 1},
  {name: "仙人掌绿（染料）", id: 351, data: 2},
  {name: "可可豆（染料）", id: 351, data: 3},
  {name: "青金石（染料）", id: 351, data: 4},
  {name: "紫色染料", id: 351, data: 5},
  {name: "青色染料", id: 351, data: 6},
  {name: "淡灰色染料", id: 351, data: 7},
  {name: "灰色染料", id: 351, data: 8},
  {name: "粉红色染料", id: 351, data: 9},
  {name: "黄绿色染料", id: 351, data: 10},
  {name: "蒲公英黄（染料）", id: 351, data: 11},
  {name: "淡蓝色染料", id: 351, data: 12},
  {name: "品红色染料", id: 351, data: 13},
  {name: "橙色染料", id: 351, data: 14},
  {name: "骨粉", id: 351, data: 15},
  {name: "骨头", id: 352, data: 0},
  {name: "糖", id: 353, data: 0},
  {name: "蛋糕", id: 354, data: 0},
  {name: "床", id: 355, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "剪刀", id: 359, data: 0},
  {name: "西瓜片", id: 360, data: 0},
  {name: "南瓜种子", id: 261, data: 0},
  {name: "西瓜种子", id: 362, data: 0},
  {name: "生牛肉", id: 363, data: 0},
  {name: "牛排", id: 364, data: 0},
  {name: "生鸡肉", id: 365, data: 0},
  {name: "熟鸡肉", id: 366, data: 0},
  {name: "生成鸡", id: 383, data: 10},
  {name: "生成牛", id: 383, data: 11},
  {name: "生成猪", id: 383, data: 12},
  {name: "生成羊", id: 383, data: 13},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "绿宝石", id: 388, data: 0},
  {name: "胡萝卜", id: 391, data: 0},
  {name: "马铃薯", id: 392, data: 0},
  {name: "烤马铃薯", id: 393, data: 0},
  {name: "南瓜派", id: 400, data: 0},
  {name: "地狱砖", id: 405, data: 0},
  {name: "地狱石英", id: 406, data: 0},
  {name: "甜菜", id: 457, data: 0},
  {name: "甜菜种子", id: 458, data: 0},
  {name: "甜菜汤", id: 459, data: 0}];
var CAT_BUILDING_ITEMS = [
  {name: "丛林木板", id: 5, data: 3},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "丛林木", id: 17, data: 3},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "金合欢木", id: 162, data: 0},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "金合欢木楼梯", id: 163, data: 0},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木木板", id: 5, data: 5},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "黑橡木", id: 162, data: 1},
  {name: "黑橡木叶", id: 161, data: 1},
  {name: "黑橡木楼梯", id: 164, data: 0},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "灰化土", id: 243, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "莲叶", id: 111, data: 0},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "红沙", id: 12, data: 1},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "绿宝石", id: 388, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "末地石", id: 121, data: 0},
  {name: "可可梗", id: 127, data: 0},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "藤蔓", id: 106, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "硬化粘土", id: 172, data: 0}];
var CAT_DECORATION_ITEMS = [
  {name: "圆石", id: 4, data: 0},
  {name: "石砖", id: 98, data: 0},
  {name: "苔石砖", id: 98, data: 1},
  {name: "裂石砖", id: 98, data: 2},
  {name: "回形石砖", id: 98, data: 3},
  {name: "苔石", id: 48, data: 0},
  {name: "木板", id: 5, data: 0},
  {name: "松木板", id: 5, data: 1},
  {name: "桦木板", id: 5, data: 2},
  {name: "丛林木板", id: 5, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "黑橡木板", id: 5, data: 5},
  {name: "红砖", id: 45, data: 0},
  {name: "石头", id: 1, data: 0},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "灰化土", id: 243, data: 0},
  {name: "泥土", id: 3, data: 0},
  {name: "草方块", id: 2, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "粘土块", id: 82, data: 0},
  {name: "硬化粘土", id: 172, data: 0},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "沙石", id: 24, data: 0},
  {name: "錾制沙石", id: 24, data: 1},
  {name: "平滑沙石", id: 24, data: 2},
  {name: "沙子", id: 12, data: 0},
  {name: "红沙", id: 12, data: 1},
  {name: "砂砾", id: 13, data: 0},
  {name: "木头", id: 17, data: 0},
  {name: "松木", id: 17, data: 1},
  {name: "桦木", id: 17, data: 2},
  {name: "丛林木", id: 17, data: 3},
  {name: "金合欢木", id: 162, data: 0},
  {name: "黑橡木", id: 162, data: 1},
  {name: "地狱砖", id: 112, data: 0},
  {name: "地狱岩", id: 87, data: 0},
  {name: "基岩", id: 7, data: 0},
  {name: "圆石楼梯", id: 67, data: 0},
  {name: "木楼梯", id: 53, data: 0},
  {name: "松木楼梯", id: 134, data: 0},
  {name: "桦木楼梯", id: 135, data: 0},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "砖楼梯", id: 108, data: 0},
  {name: "沙石楼梯", id: 128, data: 0},
  {name: "石砖楼梯", id: 109, data: 0},
  {name: "地狱砖楼梯", id: 114, data: 0},
  {name: "石英楼梯", id: 156, data: 0},
  {name: "石台阶", id: 44, data: 1},
  {name: "圆石台阶", id: 44, data: 3},
  {name: "木台阶", id: 158, data: 0},
  {name: "松木台阶", id: 158, data: 1},
  {name: "桦木台阶", id: 158, data: 2},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "砖台阶", id: 44, data: 4},
  {name: "沙石台阶", id: 44, data: 1},
  {name: "石砖台阶", id: 44, data: 5},
  {name: "石英台阶", id: 44, data: 7},
  {name: "石英方块", id: 155, data: 0},
  {name: "柱石英方块", id: 155, data: 2},
  {name: "錾石英方块", id: 155, data: 1},
  {name: "煤矿石", id: 16, data: 0},
  {name: "铁矿石", id: 15, data: 0},
  {name: "金矿石", id: 14, data: 0},
  {name: "钻石矿石", id: 56, data: 0},
  {name: "青金石矿石", id: 21, data: 0},
  {name: "红石矿石", id: 73, data: 0},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "黑曜石", id: 49, data: 0},
  {name: "冰", id: 79, data: 0},
  {name: "雪块", id: 80, data: 0},
  {name: "末地石", id: 121, data: 0}];
var CAT_ARMOUR_ITEMS = [
  {name: "圆石墙", id: 139, data: 0},
  {name: "苔石墙", id: 139, data: 1},
  {name: "莲叶", id: 111, data: 0},
  {name: "金块", id: 41, data: 0},
  {name: "铁块", id: 42, data: 0},
  {name: "钻石块", id: 57, data: 0},
  {name: "青金石块", id: 22, data: 0},
  {name: "煤炭块", id: 173, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "雪", id: 78, data: 0},
  {name: "玻璃", id: 20, data: 0},
  {name: "萤石", id: 89, data: 0},
  {name: "藤蔓", id: 106, data: 0},
  {name: "下界反应核", id: 247, data: 0},
  {name: "梯子", id: 65, data: 0},
  {name: "海绵", id: 19, data: 0},
  {name: "玻璃板", id: 102, data: 0},
  {name: "木门", id: 324, data: 0},
  {name: "活版门", id: 96, data: 0},
  {name: "木栅栏", id: 85, data: 0},
  {name: "栅栏门", id: 107, data: 0},
  {name: "铁栅栏", id: 101, data: 0},
  {name: "床", id: 355, data: 0},
  {name: "书架", id: 47, data: 0},
  {name: "画", id: 321, data: 0},
  {name: "工作台", id: 58, data: 0},
  {name: "切石机", id: 245, data: 0},
  {name: "箱子", id: 54, data: 0},
  {name: "熔炉", id: 61, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "蒲公英", id: 37, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "棕色蘑菇", id: 39, data: 0},
  {name: "红色蘑菇", id: 40, data: 0},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "仙人掌", id: 81, data: 0},
  {name: "西瓜", id: 103, data: 0},
  {name: "南瓜", id: 86, data: 0},
  {name: "南瓜灯", id: 91, data: 0},
  {name: "蜘蛛网", id: 30, data: 0},
  {name: "干草块", id: 170, data: 0},
  {name: "草", id: 31, data: 1},
  {name: "灌木", id: 31, data: 2},
  {name: "枯死的灌木", id: 32, data: 0},
  {name: "树苗", id: 6, data: 0},
  {name: "松树苗", id: 6, data: 1},
  {name: "桦树苗", id: 6, data: 2},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "树叶", id: 18, data: 0},
  {name: "松树叶", id: 18, data: 1},
  {name: "桦树叶", id: 18, data: 2},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "黑橡树叶", id: 161, data: 1},
  {name: "蛋糕", id: 354, data: 0},
  {name: "告示牌", id: 323, data: 0},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "白色羊毛", id: 35, data: 0},
  {name: "橙色羊毛", id: 35, data: 1},
  {name: "品红色羊毛", id: 35, data: 2},
  {name: "淡蓝色羊毛", id: 35, data: 3},
  {name: "黄色羊毛", id: 35, data: 4},
  {name: "黄绿色羊毛", id: 35, data: 5},
  {name: "粉红色羊毛", id: 35, data: 6},
  {name: "灰色羊毛", id: 35, data: 7},
  {name: "淡灰色羊毛", id: 35, data: 8},
  {name: "青色羊毛", id: 35, data: 9},
  {name: "紫色羊毛", id: 35, data: 10},
  {name: "蓝色羊毛", id: 35, data: 11},
  {name: "棕色羊毛", id: 35, data: 12},
  {name: "绿色羊毛", id: 35, data: 13},
  {name: "红色羊毛", id: 35, data: 14},
  {name: "黑色羊毛", id: 35, data: 15},
  {name: "白色地毯", id: 171, data: 0},
  {name: "橙色地毯", id: 171, data: 1},
  {name: "品红色地毯", id: 171, data: 2},
  {name: "淡蓝色地毯", id: 171, data: 3},
  {name: "黄色地毯", id: 171, data: 4},
  {name: "黄绿色地毯", id: 171, data: 5},
  {name: "粉红色地毯", id: 171, data: 6},
  {name: "灰色地毯", id: 171, data: 7},
  {name: "淡灰色地毯", id: 171, data: 8},
  {name: "青色地毯", id: 171, data: 9},
  {name: "紫色地毯", id: 171, data: 10},
  {name: "蓝色地毯", id: 171, data: 11},
  {name: "棕色地毯", id: 171, data: 12},
  {name: "绿色地毯", id: 171, data: 13},
  {name: "红色地毯", id: 171, data: 14},
  {name: "黑色地毯", id: 171, data: 15}];
var CAT_TOOLS_ITEMS = [
  {name: "打火石", id: 259, data: 0},
  {name: "弓", id: 261, data: 0},
  {name: "箭", id: 262, data: 0},
  {name: "剪刀", id: 359, data: 0},
  {name: "钻石剑", id: 276, data: 0},
  {name: "钻石锹", id: 277, data: 0},
  {name: "钻石镐", id: 278, data: 0},
  {name: "钻石锄", id: 293, data: 0},
  {name: "钻石斧", id: 279, data: 0},
  {name: "金剑", id: 283, data: 0},
  {name: "金锹", id: 284, data: 0},
  {name: "金镐", id: 285, data: 0},
  {name: "金锄", id: 294, data: 0},
  {name: "金斧", id: 286, data: 0},
  {name: "铁剑", id: 267, data: 0},
  {name: "铁锹", id: 256, data: 0},
  {name: "铁镐", id: 257, data: 0},
  {name: "铁锄", id: 292, data: 0},
  {name: "铁斧", id: 258, data: 0},
  {name: "石剑", id: 272, data: 0},
  {name: "石锹", id: 273, data: 0},
  {name: "石镐", id: 274, data: 0},
  {name: "石锄", id: 291, data: 0},
  {name: "石斧", id: 275, data: 0},
  {name: "木剑", id: 268, data: 0},
  {name: "木锹", id: 269, data: 0},
  {name: "木镐", id: 270, data: 0},
  {name: "木锄", id: 290, data: 0},
  {name: "木斧", id: 271, data: 0},
  {name: "皮革头盔", id: 298, data: 0},
  {name: "皮革胸甲", id: 299, data: 0},
  {name: "皮革护腿", id: 300, data: 0},
  {name: "皮革靴子", id: 301, data: 0},
  {name: "锁链头盔", id: 302, data: 0},
  {name: "锁链胸甲", id: 303, data: 0},
  {name: "锁链护腿", id: 304, data: 0},
  {name: "锁链靴子", id: 305, data: 0},
  {name: "铁头盔", id: 306, data: 0},
  {name: "铁胸甲", id: 307, data: 0},
  {name: "铁护腿", id: 308, data: 0},
  {name: "铁靴子", id: 309, data: 0},
  {name: "钻石头盔", id: 310, data: 0},
  {name: "钻石胸甲", id: 311, data: 0},
  {name: "钻石护腿", id: 312, data: 0},
  {name: "钻石靴子", id: 313, data: 0},
  {name: "金头盔", id: 314, data: 0},
  {name: "金胸甲", id: 315, data: 0},
  {name: "金护腿", id: 316, data: 0},
  {name: "金靴子", id: 317, data: 0},
  {name: "鸡生物蛋", id: 383, data: 10},
  {name: "牛生物蛋", id: 383, data: 11},
  {name: "猪生物蛋", id: 383, data: 12},
  {name: "羊生物蛋", id: 383, data: 13},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "铁桶", id: 325, data: 0},
  {name: "水", id: 8, data: 0},
  {name: "静止的水", id: 9, data: 0},
  {name: "岩浆", id: 10, data: 0},
  {name: "静止的岩浆", id: 11, data: 0},
  {name: "动力铁轨", id: 27, data: 0},
  {name: "铁轨", id: 66, data: 0},
  {name: "钟", id: 347, data: 0},
  {name: "指南针", id: 345, data: 0},
  {name: "火把", id: 50, data: 0},
  {name: "TNT", id: 46, data: 0}];
var CAT_FOOD_ITEMS = [
  {name: "苹果", id: 260, data: 0},
  {name: "蘑菇汤", id: 282, data: 0},
  {name: "生猪排", id: 319, data: 0},
  {name: "熟猪排", id: 320, data: 0},
  {name: "生牛排", id: 363, data: 0},
  {name: "熟牛排", id: 364, data: 0},
  {name: "生鸡肉", id: 365, data: 0},
  {name: "熟鸡肉", id: 366, data: 0},
  {name: "墨囊（染料）", id: 351, data: 0},
  {name: "玫瑰红（染料）", id: 351, data: 1},
  {name: "仙人掌绿（染料）", id: 351, data: 2},
  {name: "可可豆（染料）", id: 351, data: 3},
  {name: "青金石（染料）", id: 351, data: 4},
  {name: "紫色染料", id: 351, data: 5},
  {name: "青色染料", id: 351, data: 6},
  {name: "浅灰色染料", id: 351, data: 7},
  {name: "深灰色染料", id: 351, data: 8},
  {name: "浅粉色染料", id: 351, data: 9},
  {name: "浅绿色染料", id: 351, data: 10},
  {name: "蒲公英黄（染料）", id: 351, data: 11},
  {name: "浅蓝色染料", id: 351, data: 12},
  {name: "深粉色染料", id: 351, data: 13},
  {name: "橙色染料", id: 351, data: 14},
  {name: "骨粉", id: 351, data: 15},
  {name: "甜菜", id: 457, data: 0},
  {name: "甜菜种子", id: 458, data: 0},
  {name: "甜菜汤", id: 459, data: 0},
  {name: "南瓜派", id: 400, data: 0},
  {name: "胡萝卜", id: 391, data: 0},
  {name: "土豆", id: 392, data: 0},
  {name: "烤土豆", id: 393, data: 0},
  {name: "南瓜种子", id: 361, data: 0},
  {name: "甘蔗", id: 338, data: 0},
  {name: "小麦", id: 296, data: 0},
  {name: "麦种", id: 295, data: 0},
  {name: "鸡蛋", id: 344, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "面包", id: 297, data: 0}];

var cat=[[CAT_STARTER_KIT_ITEMS,"全部物品"],[CAT_BUILDING_ITEMS,"建筑方块"],[ CAT_BUILDING_ITEMS,"0.9.x新增物品"],[CAT_ARMOUR_ITEMS,"装饰方块"],[CAT_TOOLS_ITEMS,"工具与运输"],[ CAT_FOOD_ITEMS,"食物与染料"],]

var last=[0,0,0]
var shuangji=false
//撤销
var chickreply=false
var classreply=[["起始"]]
var settilelist=[]
var settilechick=true
function settile(x,y,z,i,b){
if(chickreply){
classreply[0].unshift([x,y,z,getTile(x,y,z),Level.getData(x,y,z)])
}
if(settilechick){settilelist.push([x,y,z,i,b])}else{setTile(x,y,z,i,b)}
}



function useItem(x,y,z,i,b,s,id,bd)
{
if(i==267||i==325){i=0,id=0}

if(shuangji){
if(xx==x&&yy==y&&zz==z){shuangjis(b,bd)}}
xx=x
yy=y
zz=z
if(i!=0){
switch(s) {
case 0:y-=1;break;
case 1:y+=1;break; 
case 2:z-=1;break;
case 3:z+=1;break;
case 4:x-=1;break;
case 5:x+=1;break;
}} 

if(i==323){i=68
if(s==1)i=63
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
var t=0
xc.sleep(3)
if(i==68){
var t=0
switch(s){
//case 0:t=0;break;
//case 1:t=1;break; 
case 2:t=2;break;
case 3:t=3;break;
case 4:t=4;break;
case 5:t=5;break;
}
setTile(x,y,z,68,t)}
else{
var m=Math.floor((((getYaw()+11.25)%360+360)%360)/360*16)///
setTile(x,y,z,63,m)
}
}}))
if(noworld&&getTile(x,y,z)==0){xc.start();
preventDefault();}
}
else if(i==325)i=id

x=x+pianyilist[0]
y=y+pianyilist[1]
z=z+pianyilist[2]

if(i==347){gyentity(x,y,z,entitychange)}
if(i==345){
clientMessage("位置: x="+x+",y="+y+",z="+z+",Id="+b+",bd="+bd+"\n"+"距上次查询，x="+(x-last[0])+",y="+(y-last[1])+",z="+(z-last[2])+",净距离="+Math.floor(Math.sqrt((last[0]-x)*(last[0]-x)+(last[1]-y)*(last[1]-y)+(last[2]-z)*(last[2]-z))*100)*0.01)
last=[x,y,z]}
if(i<256){

if(settilechick){
if(swi==1){
set(x,y,z,i,id,s)
}
else{
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
if(che==1){print2("上一个功能未完成")}else{
che++
cubi(x,y,z,i,id) 
chickround(x,y,z,i,id) 
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)
che--}
}}))
xc.start()}
}else{
if(swi==1){set(x,y,z,i,id)}
else{
cubi(x,y,z,i,id) 
chickround(x,y,z,i,id) 
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)}
}}
}





function entityRemovedHook(entity)
{
if(Entity.getEntityTypeId(entity)==81)
{var i
for(i in rpgs){
if(entity==rpgs[i]){
explode(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity),5);
if(i>1000){rpgs=rpgs.slice(0,100);break;}
}}}
}

function levelEventHook(entity,eventType,x,y,z,data)
{
//print2(entity+","+eventType+","+x+","+y+","+z+","+data)
//开关门数据为1003，羊吃草的数据为2001,睡觉的数据为9800
if(actionlist[0][2]==eventType&&actionlist[0][1]==true){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
setTile(x,y,z,2);
}}),2);
}}))}
}

var rideent=null
function attackHook(attacker,victim)
{
//print(Entity.getEntityTypeId(attacker)+","+Entity.getEntityTypeId(victim))
//rideAnimal(player,target);
var m=Entity.getEntityTypeId(attacker)
var n=Entity.getEntityTypeId(victim)
if(m==0&&Player.getCarriedItem()==345){
preventDefault();
if(rideent==null){rideent=victim;print2("设置骑的")}
else{
rideAnimal(rideent,victim);
rideent=null
print2("骑。上去")
}
}
if(actionlist[1][1]==true){preventDefault()}
}


var playerent=null

function getplayerent()
{return getPlayerEnt()}

function entityAddedHook(ent){
var s=Entity.getEntityTypeId(ent);
if(playerent==null){if(s==0)playerent=ent}
if(s!=0){
for(ssss in entstop)
{
if(entstop[ssss][0]==true&&entstop[ssss][1]==true){Entity.remove(ent);break;}
else if(entstop[ssss][0]==s&&entstop[ssss][1]==true){Entity.remove(ent);break;}
}
}
}



function gyentity(x,y,z,m)
{Level.spawnMob(x+0.5,y+0.2,z+0.5,m)}


function set(x,y,z,u,id,s){
var xxx=xx,yyy=yy,zzz=zz
switch(s) {
case 0:yyy-=1;break;
case 1:yyy+=1;break; 
case 2:zzz-=1;break;
case 3:zzz+=1;break;
case 4:xxx-=1;break;
case 5:xxx+=1;break;
}
var mt=getTile(xxx,yyy,zzz)
var vm=Level.getData(xxx,yyy,zzz)
var a=crd,b=swifz,c=geotype,d=cub
isprint=false
che++
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
xc.sleep(30)
l=parseInt(l)
var j=parseInt(jg)
var nt=getTile(xxx,yyy,zzz)
var vt=Level.getData(xxx,yyy,zzz)
if(u==0){nt=0;vt=0}
if(mt!=nt||vt!=vm||u==0||crd!=null||swifz!=0||geotype!=0||cub!=0){
if(fzfx==2){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x+i*zj,y,z,nt,vt)
if(setchi)sset(x+i*zj,y,z,u,id,a,b,c,d)
}
}}

if(fzfx==1){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x,y+i*zj,z,nt,vt)
if(setchi)sset(x,y+i*zj,z,u,id,a,b,c,d)
}}}

if(fzfx==3){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x,y,z+i*zj,nt,vt)
if(setchi)sset(x,y,z+i*zj,u,id,a,b,c,d)
}
}}
isprint=true
che--
print2("完成")
}else{
isprint=true
print2("放置失败")}
}}));xc.start()
}


function sset(x,y,z,i,id,a,b,c,d){
crd=a
swifz=b
geotype=c
cub=d
cleans()
cubi(x,y,z,i,id)
chickround(x,y,z,i,id)
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)
cleans()
}



function print2(str){
if(isprint){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
android.widget.Toast.makeText(ctx,str,0).show()
}
}
)
)
}
}


function dip2px(ctx, dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 



function newLevel(){
	if(isGame)
	{
		return;
	}
	isGame=true;
//addu()
//ftype()
classreply=[["起始"]] 
playerent=null
win()
win2()
entstop=[]
for(ssss in entityretype)
{entstop.push([entityretype[ssss],false])}
}


function leaveGame()
{if(!isGame)
	{
		return;
	}
	isGame=false;
option_xyz=false
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
if(btn!=null)btn.dismiss();btn=null;n=null
if(openWindow != null)openWindow.dismiss();openWindow = null;

if(rpgGUI != null){
rpgGUI.dismiss();
rpgGUI=null
}
			if(xyzWindow != null){
				xyzWindow.dismiss();
				xyzWindow = null;
			}
			if(guis!= null){
				guis.dismiss();
				guis = null;
			}
			if(longset!= null){
				longset.dismiss();
				longset = null;
			}
			if(smallmapgui!= null){
				smallmapgui.dismiss();
				smallmapgui = null;
			}
}}))}








function ftype(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

dp = ctx.getResources().getDisplayMetrics().density;

var mX,mY;
tpopx = 5*dp;
tpopy = 25*dp;

var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1)   
btn=new android.widget.Button(ctx);
btn.setTextSize(10) 
btn.setText("X增方向:"+"..."+"\n放置长度:"+l+"\n放置间隔:"+jg+"\n放置Id:"+"……"+"\n存档:"+(parseInt(copytime)+1)+"\n\n");
btn.setBackgroundColor(android.graphics.Color.argb(50,255,255,255));
n=btn
btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
mX=e.getX();
mY=e.getY();
break;
case 2:
var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx = tpopx + delX;
tpopy = tpopy + delY;
btn.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
break;
}
return true;
}
}));
layout.addView(btn);
btn=new android.widget.PopupWindow(layout,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.28, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.28); 
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);
updata()
}catch(err){
clientMessage("错误:"+err);

}}}))}






function win(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setText("E");
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
				openMenu();
			
					}
				});
				layout.addView(B_we);
				
 
ctx.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
 
				openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.3);
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}
function win2(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setText("▲");
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
			 var q=allofgytype[4]
if(q==0)crd=allofgytype[q]
if(q==1)swifz=allofgytype[q]
if(q==2)geotype=allofgytype[q]
if(q==3)cub=allofgytype[q]
cleans()
print2("已恢复上一次功能")

					}
				});
				layout.addView(B_we);
				
				var openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.6);
				guis=openWindow
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}
function win3(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setText("F");
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
setTile(longgetsave[0],longgetsave[1],longgetsave[2],0)
longgetsave[3]=false
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var x,y,z
x=-Math.sin(a)*Math.cos(b)
y=-Math.sin(b)
z=Math.cos(a)*Math.cos(b)
var X=Entity.getX(getplayerent()),Y=Entity.getY(getplayerent()),Z=Entity.getZ(getplayerent())
for(var i=0;i<100;i++){
var g=getTile(X+x*i,Y+y*i,Z+z*i)
if(g!=0&&i>0&&Player.getCarriedItem()<256){
setTile(X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),Player.getCarriedItemData());useitem([X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),g,null,Player.getCarriedItemData(),Level.getData(X+x*(i-1),Y+y*(i-1),Z+z*(i-1))]);break}
else if(g!=0&&i>0&&Player.getCarriedItem()==267){
setTile(X+x*i,Y+y*i,Z+z*i,0);useitem([X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),g,null,Player.getCarriedItemData(),Level.getData(X+x*(i-1),Y+y*(i-1),Z+z*(i-1))]);break}}
					}
				});
				layout.addView(B_we);
				
				var openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.45);
				longset=openWindow
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}



function openMenu(){
 
 var layout=new android.widget.LinearLayout(ctx) 
  try{
   var menu=new android.widget.PopupWindow(layout, dip2px(ctx,85 ), dip2px(ctx, 35)); 
   menu.setFocusable(true)
   mainMenu=menu
   var layout=new android.widget.LinearLayout(ctx)
   layout.setOrientation(1)

   var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
   textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
   var title=new android.widget.TextView(ctx);
   title.setTextSize(24)
   title.setTextColor(android.graphics.Color.rgb(255,255,255));
   title.setText("快速建造菜单")
   title.setLayoutParams(textParams)
   layout.addView(title)
   var stitle=new android.widget.TextView(ctx)
   stitle.setTextSize(13)
   stitle.setTextColor(android.graphics.Color.rgb(255,255,255));
   stitle.setText("6g3y mcpe的作死大神\n服务器支持由风鸟修改")
   stitle.setLayoutParams(textParams)
   layout.addView(stitle)
   
 var button=new android.widget.Button(ctx)
 button.setText("终极菜单")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    zjcd()
 }}))
 layout.addView(button)   


 var buttonk=new android.widget.Button(ctx)
if(swi==1){buttonk.setText("放置开关(开)")}
else if(swi==0){buttonk.setText("放置开关(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(swi==0)
    {buttonk.setText("放置开关(开)");
    swi=1;clientMessage("铁剑或水桶删除方块");}
    else if(swi==1)
    {buttonk.setText("放置开关(关)");
    swi=0}
 }}))
 layout.addView(buttonk)   
 

  var button=new android.widget.Button(ctx)
 button.setText("编辑世界")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    gameset()
 }}))
 layout.addView(button)   
 
 
  var button=new android.widget.Button(ctx)
 button.setText("编辑方块")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockchange()
 }}))
 layout.addView(button)   
 
 
  var button=new android.widget.Button(ctx)
 button.setText("添加物品")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    joinitem()
 }}))
 layout.addView(button)    
 
 
 var button=new android.widget.Button(ctx)
 button.setText("几何体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    geometry() 
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("复制粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   gcopy()
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("自然景观")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   dixingmune()
 }}))
 layout.addView(button)   
 
 
 
 var button=new android.widget.Button(ctx)
 button.setText("特殊")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   special()
 }}))
 layout.addView(button)   
 
 
   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0)
 }catch(err){
    print2("错误: "+err+".")
 }
}
function makeMenu(ctx,menu,layout){
  var mlayout=new android.widget.RelativeLayout(ctx)
 var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
var scrollview=new android.widget.ScrollView(ctx)
 var pad = dip2px(ctx,5)
 scrollview.setPadding(pad,pad,pad,pad)
 scrollview.setLayoutParams(svParams)
 scrollview.addView(layout)
 mlayout.addView(scrollview)
 return mlayout
}

function TooManyItems(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
//TooManyItems
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var amount = new android.widget.EditText(ctx);
var data = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("添加")
id.setHint("物品数据（ID）");
amount.setHint("数量");
data.setHint("特殊数据值");
id.setInputType(number);
amount.setInputType(number);
data.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(amount);
tmiLayout.addView(data);
tmiLayout.addView(add);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("添加物品");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
var itemId = parseInt(id.getText());
var iAmount = parseInt(amount.getText());
var iData = parseInt(data.getText());

if(itemId == null){itemId = "0";}

if(data == null){data = "0";}

if(iAmount>0){}else{iAmount = "1"}

Player.addItemInventory(itemId,iAmount, iData);
if(Level.getGameMode() == 1){
Entity.setCarriedItem(getplayerent(), itemId, iAmount, iData);
}
tmiDialog.dismiss();
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}





function zjcd(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)


var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("设置终极功能")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//长度text
var s1=new android.widget.TextView(ctx)
s1.setTextSize(14)
s1.setText("放置长度:")
s1.setTextColor(android.graphics.Color.rgb(255,255,255));
s1.setLayoutParams(textParams)
layout.addView(s1)
//长度输入框
var cd=new android.widget.EditText(ctx)
cd.setText(l>=0?String(l):"0")
cd.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(cd)
//间隔text
var s2=new android.widget.TextView(ctx)
s2.setTextSize(14)
s2.setText("放置间隔:")
s2.setTextColor(android.graphics.Color.rgb(255,255,255));
s2.setLayoutParams(textParams)
layout.addView(s2)
//长度输入框
var j=new android.widget.EditText(ctx)
j.setText(jg>=0?String(jg):"0")
j.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(j)
//增减
 var buttony=new android.widget.Button(ctx)
if(zj==1){buttony.setText("方向(增)")}
else if(zj==-1){buttony.setText("方向(减)")} 
 buttony.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(zj==-1)
    {buttony.setText("方向(增)");
    zj=1}
    else if(zj==1)
    {buttony.setText("方向(减)");
    zj=-1}
 }}))
 layout.addView(buttony)    
  //X
 var buttonx=new android.widget.Button(ctx)
if(fzfx==1){buttonx.setText("方向(Y)")}
else if(fzfx==2){buttonx.setText("方向(X)")} 
else if(fzfx==3){buttonx.setText("方向(Z)")} 
 buttonx.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(fzfx==1)
    {buttonx.setText("方向(X)");
    fzfx=2}
    else if(fzfx==2)
    {buttonx.setText("方向(Z)");
    fzfx=3}    
    else if(fzfx==3)
    {buttonx.setText("方向(Y)");
    fzfx=1}
 }}))
 layout.addView(buttonx)      
  

		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("单点功能适用");
		C_xyz.setChecked(setchi);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			setchi = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);



//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("确认")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  l=cd.getText()
  jg=j.getText()
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function gcopy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("复制粘贴")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("复制设置")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nocopy()
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("选点复制")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    swifz=null
    clientMessage("点击两点，复制范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   
 

 var button=new android.widget.Button(ctx)
 button.setText("替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  tihuan()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   
 

 var button=new android.widget.Button(ctx)
 button.setText("实验性粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  experimentcopy()  
if(biockgroup[copytime]!=[]){swifz=1}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)   

 
  var button=new android.widget.Button(ctx)
 button.setText("选点粘贴(无放置空气)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  clientMessage("铁剑或水桶粘贴"); if(biockgroup[copytime]!=[]){swifz=2}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)    

 var button=new android.widget.Button(ctx)
 button.setText("选点粘贴(略慢)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  clientMessage("铁剑或水桶粘贴"); if(biockgroup[copytime]!=[]){swifz=1}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("输入复制(略慢)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    forcopy(1)
 }}))
 layout.addView(button)   

 var button=new android.widget.Button(ctx)
 button.setText("输入粘贴(无放置空气)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  setcopy(0)
 }}))
 layout.addView(button)   
 
 var button=new android.widget.Button(ctx)
 button.setText("输入粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  setcopy(0)
 }}))
 layout.addView(button)    
 


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function tihuan(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("替换")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

 var button=new android.widget.Button(ctx)
 button.setText("选点替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    replacess()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   


 var button=new android.widget.Button(ctx)
 button.setText("高级检查替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    replacess2()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}





function forcopy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("输入复制")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//点1
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第一点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x1=new android.widget.EditText(ctx)
x1.setText("0")
x1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x1)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y1=new android.widget.EditText(ctx)
y1.setText("0")
y1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y1)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z1=new android.widget.EditText(ctx)
z1.setText("0")
z1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z1)

layout.addView(layouts)

//点2
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第二点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x2=new android.widget.EditText(ctx)
x2.setText("0")
x2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x2)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y2=new android.widget.EditText(ctx)
y2.setText("0")
y2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y2)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z2=new android.widget.EditText(ctx)
z2.setText("0")
z2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z2)

layout.addView(layouts)


//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("复制")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  copyblock(x1.getText(),y1.getText(),z1.getText(),x2.getText(),y2.getText(),z2.getText())
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}



function setcopy(n){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("输入粘贴")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//点1
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第一点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x1=new android.widget.EditText(ctx)
x1.setText("0")
x1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x1)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y1=new android.widget.EditText(ctx)
y1.setText("0")
y1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y1)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z1=new android.widget.EditText(ctx)
z1.setText("0")
z1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z1)

layout.addView(layouts)

//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("粘贴")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(n=1){
  setblock(x1.getText(),y1.getText(),z1.getText())}
  else{setblockwithout0(x1.getText(),y1.getText(),z1.getText())}
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}




function geometry(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("几何体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var buttonk=new android.widget.Button(ctx)
if(geotype==1){buttonk.setText("连线(开)")}
else if(geotype!=1){buttonk.setText("连线(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
    if(geotype!=1)
    {buttonk.setText("连线(开)");
    buttonm.setText("三点一面(关)");
    geotype=1;clientMessage("记得关");}
    else if(geotype==1)
    {buttonk.setText("连线(关)");
    geotype=0}
 }}))
 layout.addView(buttonk)    




var buttonm=new android.widget.Button(ctx)
if(geotype==2){buttonm.setText("三点一面(开)")}
else if(geotype!=2){buttonm.setText("三点一面(关)")} 

buttonm.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
    if(geotype!=2)
    {buttonm.setText("三点一面(开)");
    buttonk.setText("连线(关)");
    geotype=2;clientMessage("记得关");}
    else if(geotype==2)
    {buttonm.setText("三点一面(关)");
    geotype=0}
}}))
layout.addView(buttonm)  


var button=new android.widget.Button(ctx)
button.setText("测量工具")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  readtool()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("自定义角度")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  noj()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆/球")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  roundwindows()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("长方体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cuboidwindows()  
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("无底圆几何体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  roundwindow2()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("多边形")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  polygons()
}}))
layout.addView(button)  


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function special(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("特殊")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s) 


var button=new android.widget.Button(ctx)
button.setText("悬浮窗开关")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(btn!=null){btn.dismiss();btn=null;n=null}else{ftype()}
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("脚下生方块")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var x=parseInt(Entity.getX(getplayerent()))
var y=parseInt(Entity.getY(getplayerent())-2)
var z=parseInt(Entity.getZ(getplayerent()))
settile(x,y,z,1)
clientMessage("x="+x+",y="+y+",z="+z)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("像素画")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
intopit()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("模拟点击方块")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
touchblock()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("点击坐标偏移")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
pianyiset()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("远距离放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(longgetchick==false){longgetchick=true;longget();print2("开启120格远距离模式");win3()}
else{longgetchick=false
			if(longset!= null){
				longset.dismiss();
				longset = null;
			}
}
}}))
layout.addView(button)  



var button=new android.widget.Button(ctx)
button.setText("撤销")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
replys()
}}))
layout.addView(button)   



var button=new android.widget.Button(ctx)
button.setText("快速毁图")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(rpgGUI==null)myrpg()
else {rpgGUI.dismiss();
rpgGUI=null}
clientMessage("点击按钮发射机关炮")
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("一键超平坦")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  caopingtan()
}}))
layout.addView(button)  


 var buttonk=new android.widget.Button(ctx)
if(pl[0]==1){buttonk.setText("铺路(开)")}
else if(pl[0]==0){buttonk.setText("铺路(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(pl[0]==0)
    {buttonk.setText("铺路(开)");
    pl[0]=1;clientMessage("记得关");}
    else if(pl[0]==1)
    {buttonk.setText("铺路(关)");
    pl[0]=0}
 }}))
 layout.addView(buttonk)    
 
var button=new android.widget.Button(ctx)
button.setText("铺路设置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  plset()
  buttonk.setText("铺路(关)");
    pl[0]=0
}}))
layout.addView(button)  
 
 
  var buttons=new android.widget.Button(ctx)
if(dx==1){buttons.setText("自动洞穴(开)")}
else if(dx==0){buttons.setText("自动洞穴(关)")} 
 buttons.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(dx==0)
    {buttons.setText("自动洞穴(开)");
    dx=1;clientMessage("记得关");}
    else if(dx==1)
    {buttons.setText("自动洞穴(关)");
    dx=0}
 }}))
 layout.addView(buttons)    


  var buttonss=new android.widget.Button(ctx)
if(isRunning){buttonss.setText("飞奔")}
else if(isRunning == false){buttonss.setText("行走")} 
 buttonss.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(isRunning==false)
    {buttonss.setText("飞奔");isRunning=true;clientMessage("强力奔跑")}
    else if(isRunning)
    {buttonss.setText("行走");isRunning =false}
 }}))
 layout.addView(buttonss)


var button=new android.widget.Button(ctx)
button.setText("脱离被覆盖")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var x=parseInt(Entity.getX(getplayerent()))
var y=parseInt(Entity.getY(getplayerent()))
var z=parseInt(Entity.getZ(getplayerent()))
for(var i=0;i<1000;i++){
if(getTile(x,y+i,z)==0){
setPosition(getplayerent(),x+0.5,y+i+1,z+0.5); 
print2("成功脱离")
break;
}}
}}))
layout.addView(button)   


var button=new android.widget.Button(ctx)
button.setText("关于")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
about()
}}))
layout.addView(button)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}
 
function roundwindows(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("圆/球")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button=new android.widget.Button(ctx)
 button.setText(rounds[0])
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(0);
 }}))
 layout.addView(button)   

 
  var button1=new android.widget.Button(ctx)
 button1.setText(rounds[1])
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(1);
 }}))
 layout.addView(button1)   

  var button2=new android.widget.Button(ctx)
 button2.setText(rounds[2])
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(2);
 }}))
 layout.addView(button2)   

  var button3=new android.widget.Button(ctx)
 button3.setText(rounds[3])
 button3.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(3);
 }}))
 layout.addView(button3)   

  var button4=new android.widget.Button(ctx)
 button4.setText(rounds[4])
 button4.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(4);
 }}))
 layout.addView(button4)   

  var button5=new android.widget.Button(ctx)
 button5.setText(rounds[5])
 button5.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(5);
 }}))
 layout.addView(button5)   

  var button6=new android.widget.Button(ctx)
 button6.setText(rounds[6])
 button6.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(6);
 }}))
 layout.addView(button6)   

  var button1=new android.widget.Button(ctx)
 button1.setText("半圆")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(13);
 }}))
 layout.addView(button1)   

  var button7=new android.widget.Button(ctx)
 button7.setText(rounds[7])
 button7.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(7);
 }}))
 layout.addView(button7)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Y椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(10)
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("垂直X椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(11)
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Z椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(12)
 }}))
 layout.addView(button1)   



  var button1=new android.widget.Button(ctx)
 button1.setText("两点椭圆(球)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    tuoyuancan()
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("单点椭圆(球)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(4)
 }}))
 layout.addView(button1)   



  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Y圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(14)
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直X圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(15)
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Z圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(16)
 }}))
 layout.addView(button1)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function inputr(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
if(nau<13||nau==13||nau==81||nau==82){
tmiLayout.addView(id);}

if(nau==8||nau==81||nau==82||nau==9||nau==10||nau==12){
iph = new android.widget.EditText(ctx);
iph.setHint("输入高");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);
}

if(nau==10){
ipr = new android.widget.EditText(ctx);
ipr.setHint("上面半径");
ipr.setText(sbr>0?String(sbr):null)
ipr.setInputType(number);
tmiLayout.addView(ipr);
}

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
 if(nau<13||nau==13||nau==81||nau==82){r = parseInt(id.getText());}
crd=nau
if(nau==8||nau==81||nau==82||nau==9||nau==10||nau==12){h=parseInt(iph.getText());}
if(nau==10){sbr=parseInt(ipr.getText())}
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function cuboidwindows(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("两点长方体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button=new android.widget.Button(ctx)
 button.setText("实长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体")
    cub=1
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("空长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体") 
    cub=2
 }}))
 layout.addView(button)     
 
 
  var button=new android.widget.Button(ctx)
 button.setText("长方体框架")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体") 
    cub=3
 }}))
 layout.addView(button)     

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("单点长方体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

  var button=new android.widget.Button(ctx)
 button.setText("实长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体")
    cubtwo(1)
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("空长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体") 
    cubtwo(2)
 }}))
 layout.addView(button)     
 
 
  var button=new android.widget.Button(ctx)
 button.setText("长方体框架")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体") 
    cubtwo(3)
 }}))
 layout.addView(button)     


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 



function roundwindow2(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("无底圆几何体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button1=new android.widget.Button(ctx)
 button1.setText("平行y圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(8);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("平行x圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(81);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("平行z圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(82);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("圆锥")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(9);
 }}))
 layout.addView(button1)   
 
 var button1=new android.widget.Button(ctx)
 button1.setText("圆台")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(10);
 }}))
 layout.addView(button1)   
 
  var button1=new android.widget.Button(ctx)
 button1.setText("金字塔")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(12);
 }}))
 layout.addView(button1)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 


function blockchange(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("编辑方块")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(15)
s.setText("本页面要内容求在有限算法只能完成，否则会卡死，建议强度2000以下，在有限算法之内无论取多少都没有问题")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button1=new android.widget.Button(ctx)
 button1.setText("渗透方块")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(102) 
 }}))
 layout.addView(button1)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("渗透(相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(103) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直Y面-相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(110) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直X面-相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(111) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直Z相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(112) 
 }}))
 layout.addView(button2)   



var button=new android.widget.Button(ctx)
button.setText("空岛-填坑")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blockinput(11) 
  clientMessage("点击坑处填坑，最高面")
}}))
layout.addView(button)  
 

var button=new android.widget.Button(ctx)
button.setText("类山脉")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blockinput(17) 
  clientMessage("点击坑处填坑，最高面")
}}))
layout.addView(button)  
 
var button2=new android.widget.Button(ctx)
 button2.setText("Y的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(18) 
 }}))
 layout.addView(button2)   
 
var button2=new android.widget.Button(ctx)
 button2.setText("X的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(19) 
 }}))
 layout.addView(button2)   
 
var button2=new android.widget.Button(ctx)
 button2.setText("Z的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(20) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直Y的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(104) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直X的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(105) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直Z的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(106) 
 }}))
 layout.addView(button2)   




  var button4=new android.widget.Button(ctx)
 button4.setText("漫射-特效-毁档")
 button4.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(101) 
 }}))
 layout.addView(button4)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}




function blockinput(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("强度");
id.setText(stre>0?String(parseInt(stre*10)):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

if(nau==101){
iph = new android.widget.EditText(ctx);
iph.setHint("输入半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);
}



tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
stre=0.1*parseInt(id.getText())
crd=nau
if(nau==101){r=parseInt(iph.getText())}
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function gameset(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("编辑世界")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
 
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("查看坐标");
		C_xyz.setChecked(option_xyz);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			option_xyz = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("低效率放置-不卡死");
		C_xyz.setChecked(settilechick);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			settilechick = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		
	var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("无字木牌");
		C_xyz.setChecked(	noworld);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
				noworld = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("空气和水发光");
		C_xyz.setChecked(islight);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			islight = isChecked;
			if(islight){Block.setLightLevel(0, 15);
			Block.setLightLevel(9, 15); 
			Block.setLightLevel(8, 15); }
			if(!islight){Block.setLightLevel(0, 0);
			Block.setLightLevel(9, 0); 
			Block.setLightLevel(8, 0); }
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);



	
var button=new android.widget.Button(ctx)
button.setText("实体-钟放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
setentity()
clientMessage("用时钟点击生成实体")
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("小地图")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(iskq){
				smallmapgui.dismiss();
				smallmapgui = null;
iskq=false;}
else{smallmapop()}
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("实体删除(慎用)")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
entityre()

}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("禁止刷出实体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
entitystop()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("阻止动作")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojiao()
}}))
layout.addView(button)  



  var button=new android.widget.Button(ctx)
 button.setText("变速")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    setv()
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("生命")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    healthy()
 }}))
 layout.addView(button)    



  var button=new android.widget.Button(ctx)
 button.setText("游戏模式")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    gamems()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("游戏时间")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    sett()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("玩家位置")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    playerxyz()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("设置重生点")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    Level.setSpawn(Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()));
clientMessage("已设置玩家位置为重生点")
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

var vs
function setv(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("20为默认(公式:速度/20=普通速度的倍数)");
id.setText(vs>0?String(vs):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("变速");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
vs=parseInt(id.getText())
if(vs>0){ModPE.setGameSpeed(vs)
clientMessage("游戏速度切换为普通速度的"+vs/20+"倍")
}
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function healthy(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("20满血，0为死亡不掉物品(生命值<=255)");
id.setText(null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("生命");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
vs=parseInt(id.getText())
if(vs<256){Entity.setHealth(getplayerent(),vs);
}
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function gamems(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
add.setText("生存")
tmiLayout.addView(add);
var add2 = new android.widget.Button(ctx);
add2.setText("创造")
tmiLayout.addView(add2);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏模式");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){if(Level.getGameMode()!=0)Level.setGameMode(0)
tmiDialog.dismiss()
}});

add2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){if(Level.getGameMode()!=1)Level.setGameMode(1)
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function sett(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);

var addb=function(t,tmiLayout){
var add = new android.widget.TextView(ctx);
add.setText("时间:"+t+":00")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){Level.setTime(19200/24*t+19200/24*18);///
tmiDialog.dismiss()
}});
tmiLayout.addView(add);
}

for(var t=0;t<24;t+=3){
addb(t,tmiLayout);
}


tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏时间(创造无用)");

tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function playerxyz(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
add.setText("移动")

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  X:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var x=new android.widget.EditText(ctx)
x.setText(String(Entity.getX(getplayerent())))
layouts.addView(x)
tmiLayout.addView(layouts);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  Y:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var y=new android.widget.EditText(ctx)
y.setText(String(Entity.getY(getplayerent())))
layouts.addView(y)
tmiLayout.addView(layouts);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  Z:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var z=new android.widget.EditText(ctx)
z.setText(String(Entity.getZ(getplayerent())))
layouts.addView(z)
tmiLayout.addView(layouts);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("移动");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
Entity.setPosition(getplayerent(),x.getText(),y.getText(),z.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function show_XYZ(show){
	if(show){
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		try{
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			
			T_X = new android.widget.TextView(ctx);
			T_X.setTextSize(16);
			T_X.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_X);
			
			T_Y = new android.widget.TextView(ctx);
			T_Y.setTextSize(16);
			T_Y.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_Y);
			
			T_Z = new android.widget.TextView(ctx);
			T_Z.setTextSize(16);
			T_Z.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_Z);
			
			xyzWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth(), dip2px(ctx, 100));
			xyzWindow.setTouchable(false);
			xyzWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, 0, 0);
		}catch(err){
			print2("错误!\n"+err);
		}
	}else if(xyzWindow != null){
		xyzWindow.dismiss();
		xyzWindow = null;
	}
}

function setentity(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

for(var m in entitylist)
{makebutton(ctx,layout,m,entitylist,entityid)}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton(ctx,layout,m,a,b,c)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  entitychange=entityid[m]
  print2("选择实体:"+button.getText()+"，时钟点击生成实体")
}}))
layout.addView(button)   
}



function experimentcopy()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("实验性粘贴(无空气)")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("带有“~”的是旋转,根据右手定则以XYZ的增方向旋转,不懂自己百度")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(s)

var button=new android.widget.Button(ctx)
button.setText("放大粘贴")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
cbig()
}}))
layout.addView(button)  

for(var m in copylist)
{makebutton2(ctx,layout,m,copylist)}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function makebutton2(ctx,layout,m,a)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  swifz=parseInt(m)+3
  print2("选择模式:"+button.getText()+"，铁剑或水桶点击粘贴")
}}))
layout.addView(button)   
} 

function nocopy()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称

var button=new android.widget.Button(ctx)
button.setText("复制粘贴存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cpcychunts()
}}))
layout.addView(button)   



var button=new android.widget.Button(ctx)
button.setText("导出存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blocksaveter()
}}))
layout.addView(button)   


var button=new android.widget.Button(ctx)
button.setText("导入存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blocklist()
}}))
layout.addView(button)   



		var C = new android.widget.CheckBox(ctx);
		C.setText("粘贴不覆盖原有方块");
		C.setChecked(isfg);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		isfg=isChecked;
			}
		});
		layout.addView(C);
	

		var C = new android.widget.CheckBox(ctx);
		C.setText("去除水复制");
		C.setChecked(iswater);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		iswater	=isChecked;
			}
		});
		layout.addView(C);
	
		var C = new android.widget.CheckBox(ctx);
		C.setText("去除岩浆复制");
		C.setChecked(isyj);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		isyj	=isChecked;
			}
		});
		layout.addView(C);


var button=new android.widget.Button(ctx)
button.setText("更多不复制")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  morecpcy()
}}))
layout.addView(button)   





   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function cpcychunts(){
var layout=new android.widget.LinearLayout(ctx) 
try{

var tmiLayout = new android.widget.LinearLayout(ctx);

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("现在使用存档"+(copytime+1))
s.setTextColor(android.graphics.Color.rgb(255,255,255));
tmiLayout.addView(s)
//biockgroup[copytime]!=[]
var m=function(n){var t
if(biockgroup[n][0]==undefined){t="未使用"}
else if(biockgroup[n]!=[]){ t=biockgroup[n].length+"*"+biockgroup[n][0].length+"*"+biockgroup[n][0][0].length}
return "大小:"+t
}
var add = new android.widget.Button(ctx);
add.setText("存档1"+m(0))
tmiLayout.addView(add);
var add2 = new android.widget.Button(ctx);
add2.setText("存档2"+m(1))
tmiLayout.addView(add2);
var add3 = new android.widget.Button(ctx);
add3.setText("存档3"+m(2))
tmiLayout.addView(add3);
var add4 = new android.widget.Button(ctx);
add4.setText("存档4"+m(3))
tmiLayout.addView(add4);
var add5 = new android.widget.Button(ctx);
add5.setText("存档5"+m(4))
tmiLayout.addView(add5);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏时间(创造无用)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=0
tmiDialog.dismiss()
}});

add2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=1
tmiDialog.dismiss()
}});

add3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=2
tmiDialog.dismiss()
}});

add4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=3
tmiDialog.dismiss()
}});

add5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=4
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function morecpcy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("使用方法，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");
id.setText(nocopyid)

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("复制跳过");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
nocopyid=String(id.getText())
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function tuoyuancan(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("参数值=椭圆的两点与椭圆上一点的距离的和-椭圆两焦点距离(建议1-10)");
id.setText(null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("椭圆参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
r=String(id.getText())
cub=4
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function TooManyItems2(type,tp2){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(23)
s.setText(tp2)
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m
for(m in type)
{makebutton3(ctx,layout,m,type)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton3(ctx,layout,m,a,r,g,b)
{
var button=new android.widget.TextView(ctx)
button.setText(a[m].name+String(a[m].id)+":"+String(a[m].data))
button.setTextSize(18)
if(r==undefined){
button.setTextColor(android.graphics.Color.rgb(255,255,255));}else{
button.setTextColor(android.graphics.Color.rgb(r,g,b));}
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(Level.getGameMode() == 0){
addids(m,a)
}
if(Level.getGameMode() == 1){
Entity.setCarriedItem(getplayerent(),a[m].id,1,a[m].data);
}
  print2("选择物品:"+button.getText())
}}))
layout.addView(button)   
} 


function addids(m,a){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("数量");
id.setText("1")
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("添加数量");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
//Entity.setCarriedItem(getplayerent(),a[m][1],1,a[m][2]);
Player.addItemInventory(a[m].id,id.getText(),a[m].data);
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function entityre(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("删除实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
var m
for(m in entityrelist)
{makebutton4(ctx,layout,m,entityrelist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton4(ctx,layout,m,a)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  var e=Entity.getAll()
  var v
  var i=0
  var b=entityretype[m]
  for(v in e)
  {
  if(b==true){
  if(Entity.getEntityTypeId(e[v])!=0){
  Entity.remove(e[v]);i++}}
  else if(Entity.getEntityTypeId(e[v])==b){
  Entity.remove(e[v]);i++}}
  print2("已删除 "+button.getText()+i+"个")
}}))
layout.addView(button)   
} 


function polygonss(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("输入顶点数");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);

ip = new android.widget.EditText(ctx);
ip.setHint("多边形旋转角度(顶点所在轴优先级y>x>z)");
ip.setText(bz>=0?String(bz):null)
tmiLayout.addView(ip);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("多边形参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=nau
r=parseInt(id.getText());
h=parseInt(iph.getText());
if(ip.getText()>0){bz=parseInt(ip.getText());}else{bz=0}
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function polygons(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("多边形")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

  var button=new android.widget.Button(ctx)
 button.setText("垂直Y")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(107)
 }}))
 layout.addView(button)   

  var button=new android.widget.Button(ctx)
 button.setText("垂直X")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(108)
 }}))
 layout.addView(button)   

  var button=new android.widget.Button(ctx)
 button.setText("垂直Z")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(109)
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}



function replacess(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
var id = new android.widget.EditText(ctx); 
id.setHint("使用方法，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");
id.setText(replaceid)

var id2 = new android.widget.EditText(ctx); 
id2.setHint("使用方法，输入方块id，特殊值在后面加(:)，例子:12或35:7");
id2.setText(replaceids)
 
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(id2); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("替换");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
replaceid=String(id.getText())
replaceids=String(id2.getText()) 
cub=5
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function caopingtan(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认(超高频)")
var id = new android.widget.EditText(ctx); 
id.setHint("使用方法，输入方块，最底层向上的每层方块，从左到右，层数依次增加，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7,默认草地");
id.setText(replaceid)

var id2 = new android.widget.EditText(ctx); 
id2.setHint("最放置底层，大于0小于等于128(高度=输入值-1)，默认64");
id2.setText(null)
 
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(id2); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("一键超平坦(毁档)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
if(String(id.getText())==""){replaceid="2"}
else{replaceid=String(id.getText())}
if(id2.getText()<=0){h=64}
else{h=parseInt(String(id2.getText()))-1}
pt=true
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}
 

function yuanquan(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("圆环输入半径");
id.setText(h>0?String(h):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("圆圈大小半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("圆圈(类似轮胎)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=nau
h=parseInt(id.getText());
r=parseInt(iph.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function entitystop(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("禁止生成实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
var m
for(m in entityrelist)
{makebutton5(ctx,layout,m,entityrelist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton5(ctx,layout,m,a)
{
		var C = new android.widget.CheckBox(ctx);
		C.setText(a[m]);
		C.setChecked(entstop[m][1]);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			entstop[m][1] = isChecked;
			}
		});
		layout.addView(C);
} 


function readtool(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("测量工具")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var button=new android.widget.Button(ctx)
button.setText("取中点")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
  geotype=3
  print2("点击两点取中点")
}}))
layout.addView(button)  
 
var button=new android.widget.Button(ctx)
button.setText("三点所在面的交点")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
  geotype=4
  clientMessage ("点击3点求三点所在面的交点(适用于复制粘贴)\n优先级" + ChatColor.RED + " y>x>x")
}}))
layout.addView(button)  
 
var button=new android.widget.Button(ctx)
button.setText("选点生成方块 ")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   xdscfk()
}}))
layout.addView(button)  

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function nojiao(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("阻止动作")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m
for(m in actionlist)
{makebutton6(ctx,layout,m,actionlist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function makebutton6(ctx,layout,m,a)
{
		var C = new android.widget.CheckBox(ctx);
		C.setText(a[m][0]);
		C.setChecked(a[m][1]);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			a[m][1] = isChecked;
			}
		});
		layout.addView(C);
} 


function noj(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("自定义角度放置(不完美)")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)



var button=new android.widget.Button(ctx)
button.setText("圆圈")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(5)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆面")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(6)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆柱")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(7)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆锥")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(8)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆弧")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(9)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆环")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojrs(10)
}}))
layout.addView(button)  


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function nojr(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("半径(建议练习)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
geotype=nau
cleans()
r=parseInt(id.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function nojrs(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("圆环输入半径");
id.setText(h>0?String(h):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("圆圈大小半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("圆圈(类似轮胎)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
geotype=nau
cleans()
h=parseInt(id.getText());
r=parseInt(iph.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function about()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);

var s = new android.widget.TextView(ctx);  
s.setText("来自百度贴吧我的世界  6g3y\n未经允许不不得转载，不得抄袭大量算法，欢迎交流算法\n如果有什么bug或者更好的想法请反馈给6g3y\n谢谢使用本js，如果不会用该js可以到百度贴吧查看\n铁剑和水贴可以当成空气，指南针可以查看方块，还可以让生物骑在生物上面\n“▲”是重复上一个功能，只能几何体，方块编辑，复制粘贴");

add.setText("确认");

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

tmiLayout.addView(s);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("关于");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){

tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function plset()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("警告，范围太大会卡顿");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("铺路半径:");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("半径");
ip.setText("1")
l.addView(ip);

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否传统模式,打钩非传统(传统:手上方块;非传统:下面内容)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});

var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("使用方法，输入方块，每个几率一样(几率平分)，从左到右，可重复输入提高几率，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7,默认草地");
la.addView(t);

var id = new android.widget.EditText(ctx); 
id.setHint("默认草地");
id.setText("2")

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(cr,svp);
layout.addView(la,svp);
layout.addView(id,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("铺路")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {

var p=parseInt(ip.getText())-1
var h=id.getText()+" "
h=h.split(" ");
pl=[0,ms,h,p]

}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

function saveblocks(str){
try{
var f=String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/"+str)
var fos=java.io.FileOutputStream(f)
var n=biockgroup[copytime]
fos.write(n.length)
fos.write(n[0].length)
fos.write(n[0][0].length)
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
fos.write(n[x][y][z][0])
fos.write(n[x][y][z][1])
}}}
print2("输入完成")
}catch(err){clientMessage("错误: "+err+".")}
}

function readblocks(str){
try{
var f=String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/"+str)
var fis=java.io.FileInputStream(f)
var fz=[]
var a=0
while(1){
a=fis.read()
if(a>=0){fz.push(a)}else{break}
}
if(fz.length==(fz[0])*(fz[1])*(fz[2])*2+3){
var m=fz[0],n=fz[1],o=fz[2]
var a=[]
var b=[]
var c=[]
for(var x=0;x<m;x++){b=[]
for(var y=0;y<n;y++){c=[]
for(var z=0;z<o;z++){
var k=fz[(x*n*o+o*y+z)*2+3]
var e=fz[(x*n*o+o*y+z)*2+4]
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("已读取文件")
clientMessage("统计方块:"+((fz.length-3)*0.5)+"个,x="+fz[0]+",y="+fz[1]+",z="+fz[2]);
return true
}else if(fz.length==(fz[0]-1)*(fz[1]-1)*(fz[2]-1)*2+3){
var m=fz[0]-1,n=fz[1]-1,o=fz[2]-1
var a=[]
var b=[]
var c=[]
for(var x=0;x<m;x++){b=[]
for(var y=0;y<n;y++){c=[]
for(var z=0;z<o;z++){
var k=fz[(x*n*o+o*y+z)*2+3]
var e=fz[(x*n*o+o*y+z)*2+4]
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("已读取文件")
clientMessage("统计方块:"+((fz.length-3)*0.5)+"个,x="+fz[0]+",y="+fz[1]+",z="+fz[2]);
return true
}else{
print2("文件格式错误")
return false
}
}catch(err){
print2("读取失败")
return false
}
}

function blocklist()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("导入保存内容")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("/sdcard/games/com.mojang/xxx.block\n可以互相传")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(s)

var fl=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang").list()
//print2(fl)
for(var i=0;i<fl.length;i++){
var fn=fl[i].split("/")
fn=String(fn[fn.length-1])
var is=fn.split(".")
if(is[is.length-1]=="block")
makebuttona(ctx,layout,is[0],fn)
////filebtn(layout,ctx,textParams,fn)
}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.75,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function makebuttona(ctx,layout,m,n)
{
var button=new android.widget.Button(ctx)
button.setText(m)
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  readblocks(n)
}}))
layout.addView(button)   
}

//saveblocks("a.block")
function blocksaveter()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("说明，可以发送给好友\n/sdcard/games/com.mojang/xxx.block");

var id = new android.widget.EditText(ctx); 
id.setHint("输入名称(可覆盖)");
id.setText(null)

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(id,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("导出储存")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
if(biockgroup[copytime].length>0){
var h=id.getText()+".block"
saveblocks(h)
}else{
print2("不能储存空的")
}
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

function cbig(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入倍数");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("倍数(建议练习)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
swifz=16
bigs=parseInt(id.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function xdscfk()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("输入坐标生存方块,默认发光黑曜石");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("id:");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("输入物品id");
ip.setText("246")
l.addView(ip);
var ld=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("bd:");
ld.addView(t);
var id4 = new android.widget.EditText(ctx);
id4.setHint("输入物品特殊值");
id4.setText("0")
ld.addView(id4);


var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("X:");
la.addView(t);
var id = new android.widget.EditText(ctx);
id.setHint("X");
id.setText(null)
la.addView(id);
var lb=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("Y:");
lb.addView(t);
var id2 = new android.widget.EditText(ctx);
id2.setHint("Y");
id2.setText(null)
lb.addView(id2);
var lc=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("Z:");
lc.addView(t);
var id3 = new android.widget.EditText(ctx);
id3.setHint("Z");
id3.setText(null)
lc.addView(id3);

var button=new android.widget.Button(ctx)
button.setText("放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
try{
 settile(id.getText(),id2.getText(),id3.getText(),ip.getText(),id4.getText())
 print2("已放置方块");
}catch(err){
			print2("放置失败: "+err+".");
		}
}}))


//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(ld,svp);
layout.addView(la,svp);
layout.addView(lb,svp);
layout.addView(lc,svp);
layout.addView(button,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("生成方块")
		.setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

 
function replacess2()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout


var id = new android.widget.EditText(ctx); 
id.setHint("方块A，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");

var id2 = new android.widget.EditText(ctx); 
id2.setHint("方块B，输入方块id，特殊值在后面加(:)，例子:12或35:7");
 

var id3 = new android.widget.EditText(ctx); 
id3.setHint("方块B相对方块A的位置，格式:X:Y:Z(例如1:0:0，就在B在A的x+方向)");

var id4 = new android.widget.EditText(ctx); 
id4.setHint("被放置方块相对方块A的位置，格式:X:Y:Z(例如0:-1:0，就在B在A的下(y-)方向)");

var id5 = new android.widget.EditText(ctx); 
id5.setHint("即将放置的，输入方块id，特殊值在后面加(:)，例子:12或35:7");

 
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:下面的都要填写，这个功能可以修改地皮，铺雪，判断方块，如果A方块满足条件则，判断B方块，如果B也满足然后执行替换指令")



//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(s,svp);
layout.addView(id,svp);
layout.addView(id2,svp);
layout.addView(id3,svp);
layout.addView(id4,svp);
layout.addView(id5,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("高级替换")
		.setNegativeButton("替换", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
replaceid=String(id.getText())
replaceids=String(id2.getText())
replaceidset=String(id5.getText())
try{
var h = String(id3.getText()).split(":");
var w = String(id4.getText()).split(":");
h=[parseInt(h[0]),parseInt(h[1]),parseInt(h[2])]
w=[parseInt(w[0]),parseInt(w[1]),parseInt(w[2])]
repxyz=[h,w]
cub=6
		}catch(err){
print2("输入错误。原因:如果看不懂就算了， "+err);
		}
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}



function dixingmune(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("自然景观")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("各种树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  treemune()
 }}))
 layout.addView(button)   
 
 var button=new android.widget.Button(ctx)
 button.setText("洞穴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cavemune()
 }}))
 layout.addView(button)   
  
  var button=new android.widget.Button(ctx)
 button.setText("丘陵")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  qiulinga()
 }}))
 layout.addView(button)   
 



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function treemune(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("各种树")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("热带雨林树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=201
clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("榕树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=202
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("分叉树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=203
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 

  var button=new android.widget.Button(ctx)
 button.setText("低矮树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=204
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("高度中等的树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=205
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


var cave=[]

function cavemune()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout


var id = new android.widget.EditText(ctx); 
id.setHint("角度(不填随机)");

var id2 = new android.widget.EditText(ctx); 
id2.setHint("长度(200-300正常水平)");
 
var id3 = new android.widget.EditText(ctx); 
id3.setHint("分叉数(多级的4-5差不多)");

var id4 = new android.widget.EditText(ctx); 
id4.setHint("巨型洞穴强度(半径)"); 
  

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("末端是否生成巨型洞穴");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});   

var ms2=false
var cr2=new android.widget.CheckBox(ctx);
cr2.setText("是否多级分叉");
cr2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms2=true;else ms2=false;
				}
		}); 
var ms3=false
var cr3=new android.widget.CheckBox(ctx);
cr3.setText("是否多末端生存岩浆(1/2几率)");
cr3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms3=true;else ms3=false;
				}
		}); 
 
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:下面的都要填写，写出旋转角度，角度的起始边在Z+上，安装y+进行右手定则旋转，沿着改方向延长生成，并且填写长度(矿洞长度)，巨洞生成安半径计算")



//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(s,svp);
layout.addView(id,svp);
layout.addView(id2,svp); 
layout.addView(cr2,svp);
layout.addView(id3,svp);
layout.addView(cr,svp);
layout.addView(id4,svp); 
layout.addView(cr3,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("洞穴").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
cave[0]=-parseInt(String(id.getText()))
cave[1]=parseInt(String(id2.getText()))
cave[2]=parseInt(String(id3.getText()))+1
cave[3]=[ms,ms2,ms3]
cave[4]=parseInt(String(id4.getText()))  
crd=301
clientMessage("点击方块生成矿洞"); 
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}

 
function qiulinga(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("输入高");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("丘陵");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=302
clientMessage("点击方块生成丘陵"); 
r=parseInt(id.getText())
h=parseInt(iph.getText())
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function myrpg(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {try{
rpgGUI = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("+");
button.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
button.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
krbg=1
break;
case 1:
krbg=0
break;
}
return true;
}
}));
layout.addView(button);
                        
rpgGUI.setContentView(layout);
rpgGUI.setWidth(100);
rpgGUI.setHeight(100);
rpgGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 2, 400);}
catch(err){print2("Error: "+err);
}}}));}




function joinitem(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("添加物品")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

		
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("双击获得方块");
		C_xyz.setChecked(shuangji);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			shuangji = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
	

  var button=new android.widget.Button(ctx)
 button.setText("手动添加物品")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    TooManyItems()
clientMessage("指南针点击方块，获得方块数据")
 }}))
 layout.addView(button)   
 
 
var sab
for(sab in cat){
tmiaddbutton(ctx,layout,cat[sab][0],cat[sab][1])}


  var button=new android.widget.Button(ctx)
 button.setText("按颜色")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var m= function(){var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(23)
s.setText("按颜色")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m,ssad=[]
for(m in color){
ssad[m]={name:"██ ",id:color[m][0],data:color[m][1]}}
for(m in ssad)
{makebutton3(ctx,layout,m,ssad,color[m][2],color[m][3],color[m][4])}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}}
clientMessage("指南针点击方块，获得方块数据")
m()
 }}))
 layout.addView(button)    

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}
 

function tmiaddbutton(ctx,layout,a,b){
  var button=new android.widget.Button(ctx)
 button.setText(b)
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    TooManyItems2(a,b)
clientMessage("指南针点击方块，获得方块数据")
 }}))
 layout.addView(button)    
}



function replys()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout

var cr=new android.widget.CheckBox(ctx);
cr.setText("是否记入撤销(开启较卡)");
cr.setChecked(chickreply); 
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) chickreply=true;else chickreply=false;
				}
		});   

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(cr,svp);

for(var as=1;as<classreply.length;as++){
if(as>100)break;
makereplybutton(cr,svp,layout,classreply[as]) 
}


sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("选择撤销，爆炸，自己手动放置破坏不算").setPositiveButton("结束",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}
 
function makereplybutton(cr,svp,layout,a)
{
var button=new android.widget.TextView(ctx)
button.setText(String(a[0])+"  个数:"+String(a.length-1))
button.setTextSize(18)
button.setTextColor(android.graphics.Color.rgb(255,255,255));
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(forreply==null){ 
forreply=a
print2("开始恢复")
}
}}))
layout.addView(button)   
}  
var forreply=null
var replytime=null
function replytick(ch){
if(forreply!=null){
var a=forreply 
for(var t=1;t<a.length;t++){
settile(a[t][0],a[t][1],a[t][2],a[t][3],a[t][4])}
forreply=null 
print2("已经恢复") }
if(chickreply&&ch){
var time = android.text.format.Time(); 
time.setToNow();
var u=String(time.hour) 
var a=u+":"+String(time.minute)+":"+String(time.second)
//print(a)
if(classreply[0].length>0){
if(a!=replytime&&u<25){
classreply[0].unshift(a)
classreply.unshift([]) 
}}}}

var cubt=[null,null,null]
function cubtwo(sob){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
var id = new android.widget.EditText(ctx);
var id3 = new android.widget.EditText(ctx);
var id2 = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入X长度");
id.setText(cubt[0]>=0?String(r):null)
id.setInputType(number);
if(sob!=11)tmiLayout.addView(id);
id2.setHint("输入Y长度");
id2.setText(cubt[1]>=0?String(r):null)
id2.setInputType(number);
if(sob!=10)tmiLayout.addView(id2);
id3.setHint("输入Z长度");
id3.setText(cubt[2]>=0?String(r):null)
id3.setInputType(number);
if(sob!=12)tmiLayout.addView(id3);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("设定参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=sob+20
clientMessage("输入成功"); 
cubt[0]=parseInt(id.getText())-1
cubt[1]=parseInt(id2.getText())-1
cubt[2]=parseInt(id3.getText())-1
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



//x,y,z,itemId,blockId,side,itemDamage,blockDamage
function touchblock(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
//TooManyItems
var tmiLayout = new android.widget.LinearLayout(ctx);
var id=[],num

var text=["X坐标","Y坐标","Z坐标","手上的id","手上的特殊值","相对坐标位置;0:y-,1:y+,2:z-,3:z+,4:x-,5;x+"]
var datas=[Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()),Player.getCarriedItem(),Player.getCarriedItemData(),null]
var la=new android.widget.LinearLayout(ctx) 
var lb=new android.widget.LinearLayout(ctx) 
var lc=new android.widget.LinearLayout(ctx) 
var ld=new android.widget.LinearLayout(ctx) 
for(num in text){
id[num]=new android.widget.EditText(ctx);
id[num].setHint(text[num]);
id[num].setText(String(Math.round(datas[num])));
id[num].setInputType(number);
}

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

for(num in text){
if(num<3){la.addView(id[num]);}
else if(num<5){lb.addView(id[num]);}
else {lc.addView(id[num]); }
}

var add = new android.widget.Button(ctx);
add.setText("激活useItem")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
useitem([parseInt(id[0].getText()),parseInt(id[1].getText()),parseInt(id[2].getText()),parseInt(id[3].getText()),getTile(id[0].getText(),id[1].getText(),id[2].getText()),id[5].getText(),id[4].getText(),Level.getData(id[0].getText(),parseInt(id[1].getText()),parseInt(id[2].getText()))])
}
});
ld.addView(add)

var add = new android.widget.Button(ctx);
add.setText("关闭")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
tmiDialog.dismiss();
}
});
ld.addView(add)

tmiLayout.addView(la) 
tmiLayout.addView(lb) 
tmiLayout.addView(lc) 
tmiLayout.addView(ld) 

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("模拟点击方块(没有放置)");

tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

var useitemdata=null
function useitem(a)
{
useitemdata=a
}

function pianyiset(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
var id = new android.widget.EditText(ctx);
var id3 = new android.widget.EditText(ctx);
var id2 = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:在点击时偏移坐标，必须为整数，并且可以负数，用来改变复制粘贴，几何体的初始位置，这东西很好用")
tmiLayout.addView(s);
add.setText("确认")
id.setHint("输入X长度");
id.setText(String(pianyilist[0]))
tmiLayout.addView(id);
id2.setHint("输入Y长度");
id2.setText(String(pianyilist[1]))
tmiLayout.addView(id2);
id3.setHint("输入Z长度");
id3.setText(String(pianyilist[2]))
tmiLayout.addView(id3);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("设定参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
clientMessage("输入成功"); 
pianyilist[0]=parseInt(id.getText())
pianyilist[1]=parseInt(id2.getText())
pianyilist[2]=parseInt(id3.getText())
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}




























































var settilenum=0
//var settilenum2=0
var che=0
function modTick()
{
if(settilelist[0]!=undefined){
for(;settilenum<settilelist.length;settilenum++){
setTile(settilelist[settilenum][0],settilelist[settilenum][1],settilelist[settilenum][2],settilelist[settilenum][3],settilelist[settilenum][4])
}
if(che==0){settilelist=[];settilenum=0}
}

replytick(che==0)

if(useitemdata!=null){
var a=useitemdata
var m=0
useItem(a[m++],a[m++],a[m++],a[m++],a[m++],a[m++],a[m++],a[m++])
useitemdata=null
}

getallofgytype()
//pictures=[true,bitmap,ms,h1,w1,h2,w2]
if(pictures[0])
{var s=pictures //s[]
pictures[0]=false
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
xc.setPriority(10)
picture(s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8])
}}));
xc.start()
}
if(pt)cpt()
	if(option_xyz){
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				T_X.setText("X: "+Math.round(Entity.getX(getplayerent())*100)/100);
				T_Y.setText("Y: "+((Math.round(Entity.getY(getplayerent())*100)/100) - 1)+" (feet pos, "+Math.round(Entity.getY(getplayerent())*100)/100+" eyes pos)");
				T_Z.setText("Z: "+Math.round(Entity.getZ(getplayerent())*100)/100);
			}
		}));
	}
	
	
if(krbg==1){rpg()}
	

//clientMessage(Level.getTime())
if(pl[0]==1)fpl()
if(dx==1)fdx(Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()))
running()
}
var runtime=1
function running(){
if(isRunning){

//From WhyTofu's Sprint Mod
if(runtime==1)
      {
			   Xpos=Entity.getX(getplayerent());
        Zpos=Entity.getZ(getplayerent());
        runtime++
      }
      else if(runtime==3)
      {
        runtime=1;
        Xdiff=Entity.getX(getplayerent())-Xpos;
        Zdiff=Entity.getZ(getplayerent())-Zpos;
        setVelX(getplayerent(),1.2*Xdiff);
        setVelZ(getplayerent(),1.2*Zdiff);
        Xdiff=0;
        Zdiff=0;
      }
  if(runtime!=1)
  {
  runtime++
  }

}else if(isRunning==false){

return null;
}
}


function getallofgytype(){
if(allofgytype[0]!=crd&&crd!=null)
{allofgytype[0]=crd;swifz=0;geotype=0;cub=0;allofgytype[4]=0;cleans();allofgytype[1]=0;allofgytype[2]=0;allofgytype[3]=0}
if(allofgytype[1]!=swifz&&(swifz>0||swifz==null))
{allofgytype[1]=swifz;crd=null;geotype=0;cub=0;allofgytype[4]=1;cleans();allofgytype[0]=0;allofgytype[2]=0;allofgytype[3]=0}
if(allofgytype[2]!=geotype&&geotype!=0)
{allofgytype[2]=geotype;crd=null;swifz=0;cub=0;allofgytype[4]=2;cleans();allofgytype[1]=0;allofgytype[0]=0;allofgytype[3]=0}
if(allofgytype[3]!=cub&&cub!=0)
{allofgytype[3]=cub;crd=null;swifz=0;geotype=0;allofgytype[4]=3;cleans();allofgytype[1]=0;allofgytype[2]=0;allofgytype[0]=0}
}



function fpl(){
var x=Entity.getX(getplayerent()),y=Entity.getY(getplayerent()),z=Entity.getZ(getplayerent())
if(pl[1]==false){
if(Player.getCarriedItem()<256){
for(var i=-pl[3];i<=pl[3];i++){
for(var j=-pl[3];j<=pl[3];j++){
if(i*i+j*j<=pl[3]*pl[3])settile(x+i,y-2,z+j,Player.getCarriedItem(),Player.getCarriedItemData())
}
}}}
else
{
for(var i=-pl[3];i<=pl[3];i++){
for(var j=-pl[3];j<=pl[3];j++){
var k=2,e=0,w=pl[2]
var ida=Math.floor(Math.random()*(pl[2].length-1));
var o=w[ida]
if(o>=0){k=o}
else{o=o.split(":");k=o[0];e=o[1]}
if(i*i+j*j<=pl[3]*pl[3])settile(x+i,y-2,z+j,k,e)
}}
}
}


function fdx(x,y,z){
for(var i=1;i<4;i++){
settile(x+i-2,y-1,z+1,0)
settile(x+i-2,y-1,z,0)
settile(x+i-2,y-1,z-1,0)
settile(x+i-2,y+2,z+1,0)
settile(x+i-2,y+2,z,0)
settile(x+i-2,y+2,z-1,0)}
for(var i=1;i<6;i++){
settile(x+i-3,y+1,z+2,0)
settile(x+i-3,y+1,z+1,0)
settile(x+i-3,y+1,z,0)
settile(x+i-3,y+1,z-1,0)
settile(x+i-3,y+1,z-2,0)
settile(x+i-3,y,z+2,0)
settile(x+i-3,y,z+1,0)
settile(x+i-3,y,z,0)
settile(x+i-3,y,z-1,0)
settile(x+i-3,y,z-2,0)
}}

function cubi(x,y,z,i,id)
{
if(i<256){
//连线
if(cub==1){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid1(i,id);cleans();cub=0} }

if(cub==2){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid2(i,id);cleans();cub=0} }

if(cub==3){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid3(i,id);cleans();cub=0} }

if(cub==4){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");tuoyuan(i,id);cleans();cub=0} }

if(cub==5){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("开始替换");replaces(s1[0],s1[1],s1[2],s2[0],s2[1],s2[2]);cleans();cub=0} }

if(cub==6){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("开始替换");replaces2(s1[0],s1[1],s1[2],s2[0],s2[1],s2[2]);cleans();cub=0} }

}} 



function geo(x,y,z,i,id)
{
if(i<256){
var g=geotype
//连线
if(g==1){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("连接");lianxian(s1,s2,i,id);cleans()}}
//三点一面
if(g==2){
if(s1==false){s1=[x,y,z];print2("设置点一");}
else if(s2==false)
{s2=[x,y,z];print2("设置点二");}
else if(s3==false){s3=[x,y,z];print2("连接");sdym(s1,s2,i,id);cleans()}}

if(g==3){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");settile((s1[0]+s2[0])*0.5,(s1[1]+s2[1])*0.5,(s1[2]+s2[2])*0.5,i,id);cleans();geotype=0}}

if(g==4){
if(s1==false)
{s1=[x,y,z];print2("设置点Y面");}
else if(s2==false)
{s2=[x,y,z];print2("设置点X面");}
else if(s3==false)
{s3=[x,y,z];print2("设置点Z面,放置"+s3[0]+","+s1[1]+","+s2[2]);settile(s3[0],s1[1],s2[2],i,id);cleans();geotype=0}}

if(g==5){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj1(s1,s2,r,i,id);cleans();geotype=0}}

if(g==6){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj2(s1,s2,r,i,id);cleans();geotype=0}}


if(g==7){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj3(s1,s2,r,i,id);cleans();geotype=0}}


if(g==8){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj4(s1,s2,r,i,id);cleans();geotype=0}}


if(g==9){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj5(s1,s2,r,i,id);cleans();geotype=0}}


if(g==10){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj6(s1,s2,r,h,i,id);cleans();geotype=0}}


}
}
cleans()
function cleans(){s1=false,s2=false,s3=false,s4=false }


function updata(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
if(n!=null){n.setText("X增方向:"+fx[getyaw()]+"\n放置长度:"+l+"\n放置间隔:"+jg+"\n放置Id:"+Player.getCarriedItem()+","+Player.getCarriedItemData()+"\n复制储存:"+(parseInt(copytime)+1)+"\n\n");
updata()}
}}),60);
}}))
}


function getyaw()
{
var yaw=getYaw()%360+360;
if(yaw%360>337.5||yaw%360<=22.5){
return 6}
else if(yaw%360>22.5&&yaw%360<=76.5){
return 5}
else if(yaw%360>67.5&&yaw%360<=112.5){
return 4}
else if(yaw%360>112.5&&yaw%360<=157.5){
return 3}
else if(yaw%360>157.5&&yaw%360<=202.5){
return 2}
else if(yaw%360>202.5&&yaw%360<=247.5){
return 1}
else if(yaw%360>247.5&&yaw%360<=292.5){
return 0}
else if(yaw%360>292.5&&yaw%360<=337.5){
return 7}
}


function alloffzzt(x,y,z,i)
{
if(swifz!=false){if(i==0){
if(swifz==null){swifz=[x,y,z];print2("设置点1")}
else if(swifz==1){setblock(x,y,z);swifz=false}
else if(swifz==2){setblockwithout0(x,y,z);swifz=false}
else if(swifz==3){setblockwithout3(x,y,z);swifz=false} 
else if(swifz==4){setblockwithout4(x,y,z);swifz=false} 
else if(swifz==5){setblockwithout5(x,y,z);swifz=false} 
else if(swifz==6){setblockwithout6(x,y,z);swifz=false} 
else if(swifz==7){setblockwithout7(x,y,z);swifz=false} 
else if(swifz==8){setblockwithout8(x,y,z);swifz=false} 
else if(swifz==9){setblockwithout9(x,y,z);swifz=false} 
else if(swifz==10){setblockwithout10(x,y,z);swifz=false} 
else if(swifz==11){setblockwithout11(x,y,z);swifz=false} 
else if(swifz==12){setblockwithout12(x,y,z);swifz=false} 
else if(swifz==13){setblockwithout13(x,y,z);swifz=false} 
else if(swifz==14){setblockwithout14(x,y,z);swifz=false} 
else if(swifz==15){setblockwithout15(x,y,z);swifz=false} 
else if(swifz==16){setblockbig(x,y,z);swifz=false} 
else if(swifz!=null){copyblock(swifz[0],swifz[1],swifz[2],x,y,z);swifz=false}
}} 
}
 



function copyblock(aa,ba,ca,ab,bb,cb)
{
var w=nocopyid.split(" ");
//clientMessage(nocopyid)
biockgroup[copytime]=[]
var a=[]
var b=[]
var c=[]
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){b=[]
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){c=[]
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
if(iswater){if(k==8||k==9){k=0;e=0}}
if(isyj){if(k==10||k==11){k=0;e=0}}
var v
for(v in w){
var o=w[v]
if(o>=0){if(o==k){k=0;e=0}}
else{o=o.split(":");
if(o[0]==k&&o[1]==e){k=0;e=0}
}}
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("复制")
}


function setblock(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}
print2("粘贴完成")
}

function setblockwithout0(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
} 
//["x轴镜像","y轴倒影","z轴倒影","xy轴倒影"] 

function setblockwithout3(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
} 
 
function setblockwithout4(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}  

function setblockwithout5(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}   

function setblockwithout6(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout7(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x))==0){
settile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout8(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout9(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x))==0){
settile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 


function setblockwithout12(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout11(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout10(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 


function setblockwithout13(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout14(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout15(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0])==0){
settile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 var bigs
function setblockbig(a,b,c){
var n=biockgroup[copytime]
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
for(var m=0;m<bigs;m++){
for(var l=0;l<bigs;l++){
for(var o=0;o<bigs;o++){
if(isfg){if(getTile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o)==0){
settile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o,n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o,n[x][y][z][0],n[x][y][z][1]);}}}}}
}}}
print2("粘贴完成")
}











function lianxian(s1,s2,i,id)
{
if(s1!=false&&s2!=false)
{
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m++){
settile(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)),i,id)}////
}}

function sdym(s1,s2,it,id)
{
if(s1!=false&&s2!=false)
{
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m+=0.5){
lianxian([Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z))],s3,it,id)}////
}}


 

function chickround(x,y,z,b,bd)
{
if(crd!=null){
switch(crd){
case 0:ycircle(x,y,z,r,b,bd);break;
case 1:xcircle(x,y,z,r,b,bd);break;
case 2:zcircle(x,y,z,r,b,bd);break;
case 3:yround(x,y,z,r,b,bd);break;
case 4:xround(x,y,z,r,b,bd);break;
case 5:zround(x,y,z,r,b,bd);break;
case 6:unsphere(x,y,z,r,b,bd);break;
case 7:sphere(x,y,z,r,b,bd);break;
case 8:yuanzhuy(x,y,z,r,b,bd);break;
case 81:yuanzhux(x,y,z,r,b,bd);break;
case 82:yuanzhuz(x,y,z,r,b,bd);break;
case 9:yuanzhui(x,y,z,r,b,bd);break;
case 10:yuantai(x,y,z,r,b,bd);break;
case 11:tiankeng(x,y,z,stre,b,bd);break;
case 12:jinzita(x,y,z,h,r,b,bd);break;
case 13:halfsphere(x,y,z,r,b,bd);break;
case 14:ycircleround(x,y,z,r,h,b,bd);break;
case 15:xcircleround(x,y,z,r,h,b,bd);break;
case 16:zcircleround(x,y,z,r,h,b,bd);break;
case 17:shanmai(x,y,z,stre,b,bd);break;
case 18:yanchangy(x,y,z,stre,b,bd);break;
case 19:yanchangx(x,y,z,stre,b,bd);break;
case 20:yanchangz(x,y,z,stre,b,bd);break;
case 21:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid1(b,bd);break;
case 22:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid2(b,bd);break;
case 23:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid3(b,bd);break;
case 24:tuosphere(x,y,z,b,bd);break;
case 30:tuospherey(x,y,z,b,bd);break;
case 31:tuospherex(x,y,z,b,bd);break;
case 32:tuospherez(x,y,z,b,bd);break;
case 101:manshe(x,y,z,stre,b,bd);break;
case 102:shentou(x,y,z,stre,b,bd);break;
case 103:shentou2(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 104:tiankengy(x,y,z,stre,b,bd);break;
case 105:tiankengx(x,y,z,stre,b,bd);break;
case 106:tiankengz(x,y,z,stre,b,bd);break;
case 107:dbxy(x,y,z,r,h,bz,b,bd);break;
case 108:dbxx(x,y,z,r,h,bz,b,bd);break;
case 109:dbxz(x,y,z,r,h,bz,b,bd);break;
case 110:shentou2y(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 111:shentou2x(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 112:shentou2z(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 201:tree1(x,y,z,b,bd);break;
case 202:tree2(x,y,z,b,bd);break;
case 203:tree3(x,y,z,b,bd);break;
case 204:tree4(x,y,z,b,bd);break;
case 205:tree5(x,y,z,b,bd);break; 
case 301:caves(x,y,z,cave);break; 
case 302:qiuling(x,y,z,r,h);break; 
}
crd=null
print2("放置")
}}

function ycircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i,y,z+j,b,bd)
}}}

function xcircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x,y+i,z+j,b,bd)
}}}

function zcircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i,y+j,z,b,bd)
}}}

function yround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x+i,y,z+j,b,bd)
}}}

function xround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x,y+i,z+j,b,bd)
}}}

function zround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x+i,y+j,z,b,bd)
}}} 


function unsphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i,y+k,z+j,b,bd)
}}}}


function halfsphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=0;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i,y+k,z+j,b,bd)
}}}}

function tuosphere(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,b,c)
a=a/r
b=b/r
c=c/r////
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i*a,y+k*b,z+j*c,ib,bd)
}}}}

function tuospherey(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,c)
a=a/r
c=c/r////
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i*a,y,z+j*c,ib,bd)
}}}

function tuospherex(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(b,c)
b=b/r
c=c/r////
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(j*j+k*k<r*r&&+j*j+k*k>=(r-1)*(r-1))settile(x,y+k*b,z+j*c,ib,bd)
}}}


function tuospherez(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,b)
a=a/r
b=b/r
for(var i=-r;i<=r;i++){
for(var k=-r;k<=r;k++){
if(i*i+k*k<r*r&&i*i+k*k>=(r-1)*(r-1))settile(x+i*a,y+k*b,z,ib,bd)
}}}



function sphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r)settile(x+i,y+k,z+j,b,bd)
}}}
}


//长方体实
function cuboid1(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){ 
settile(n1+x,n2+y,n3+z,i,id)
}}}
}
//长方体空
function cuboid2(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){ 
settile(n1+x,y1,n3+z,i,id) 
settile(n1+x,y2,n3+z,i,id)}}
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){ 
settile(n1+x,n2+y,z2,i,id) 
settile(n1+x,n2+y,z1,i,id)}}
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){ 
settile(x1,n2+y,n3+z,i,id) 
settile(x2,n2+y,n3+z,i,id)}}
} 

//长方体实框架
function cuboid3(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
settile(n1+x,y1,z1,i,id) 
settile(n1+x,y1,z2,i,id)  
settile(n1+x,y2,z1,i,id)  
settile(n1+x,y2,z2,i,id)  
}
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
settile(x1,n2+y,z1,i,id)  
settile(x1,n2+y,z2,i,id)   
settile(x2,n2+y,z1,i,id)   
settile(x2,n2+y,z2,i,id)   
}
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){
settile(x1,y1,n3+z,i,id)   
settile(x1,y2,n3+z,i,id)    
settile(x2,y1,n3+z,i,id)    
settile(x2,y2,n3+z,i,id)
}
} 




function yuanzhuy(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+i,y+m,z+j,b,bd)}
}}}
}


function yuanzhux(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+m,y+i,z+j,b,bd)}
}}}
}


function yuanzhuz(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+i,y+j,z+m,b,bd)}
}}}
}

function yuanzhui(x,y,z,r,b,bd){
for(var m=h;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=r/h*m
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+h-m,z+j,b,bd)
}}}
for(var m=r;m>0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=h/r*m
if(i*i+j*j<=(r-m)*(r-m)&&i*i+j*j>=((r-m)-1)*((r-m)-1))settile(x+i,y+u,z+j,b,bd)
}}}
}


function yuantai(x,y,z,r,b,bd){
var hs=h*Math.max(r,sbr)/(Math.max(r,sbr)-Math.min(r,sbr))
////

if(r>sbr){
for(var m=hs;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=r/hs*m
if(u>=sbr){
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+hs-m,z+j,b,bd)
}}}}
for(var m=r;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=hs/r*m
if(u<h){
if(i*i+j*j<=(r-m)*(r-m)&&i*i+j*j>=((r-m)-1)*((r-m)-1))settile(x+i,y+u,z+j,b,bd)
}}}}
}
else if(r<sbr){
var rs=sbr
var sbrs=r
for(var m=hs;m>=0;m--){
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
var u=rs/hs*m
if(u>=sbrs){
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+h-(hs-m),z+j,b,bd)
}}}}
for(var m=rs;m>=0;m--){
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
var u=hs/rs*m
if(u<h){
if(i*i+j*j<(rs-m)*(rs-m)&&i*i+j*j>=((rs-m)-1)*((rs-m)-1))settile(x+i,y+h-u,z+j,b,bd)
}}}}
}
else if(r==sbr){yuanzhu(x,y,z,r,b,bd)}
}


function jinzita(x,y,z,h,r,id,bd){
var l=Math.max(h,r)
for(var j=0;j<l;j++){
var b=Math.floor(j/l*(r)),a=Math.round(j/l*(h))
for(var e=-b;e<=b;e++){
settile(x+e,y+h-a-1,z-b,id,bd)
settile(x+e,y+h-a-1,z+b,id,bd)
settile(x-b,y+h-a-1,z+e,id,bd)
settile(x+b,y+h-a-1,z+e,id,bd)
}
}
}







function manshe(x,y,z,l,b,bd){

for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r)
var m=getTile(x+i,y+k,z+j)
var n=getData(x+i,y+k,z+j)
if(m!=0){
settile(x+i,y+k,z+j,0)
settile(x+i-l+2*l*Math.random(),y+k-l+2*l*Math.random(),z+j-l+2*l*Math.random(),m,n)
}
}}}
}






function tiankeng(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(5)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)tiankeng(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)tiankeng(x+1,y,z,l-random,id,bd);break; 
case 2:
if(getTile(x,y,z-1)==0)tiankeng(x,y,z-1,l-random,id,bd);break;
case 3:
if(getTile(x,y,z+1)==0)tiankeng(x,y,z+1,l-random,id,bd);break;
case 4:
if(getTile(x,y-1,z)==0&&y>0)tiankeng(x,y-1,z,l-random,id,bd);break;
case 5:x+=1;break;
 }
}
}}



function shanmai(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)shanmai(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)shanmai(x+1,y,z,l-random,id,bd);break; 
case 2:
if(getTile(x,y,z-1)==0)shanmai(x,y,z-1,l-random,id,bd);break;
case 3:
if(getTile(x,y,z+1)==0)shanmai(x,y,z+1,l-random,id,bd);break;
case 4:
if(getTile(x,y+1,z)==0&&y<128)shanmai(x,y+1,z,l-random,id,bd);break;
case 5:
if(getTile(x,y-1,z)==0&&y>0)shanmai(x,y-1,z,l-random,id,bd);break;
 }
}
}}



function yanchangy(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x,y+m,z)!=0)break;
settile(x,y+m,z,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x,y-m,z)!=0)break;
settile(x,y-m,z,id,bd)}
}
function yanchangx(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x+m,y,z)!=0)break;
settile(x+m,y,z,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x-m,y,z)!=0)break;
settile(x-m,y,z,id,bd)}
}
function yanchangz(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x,y,z+m)!=0)break;
settile(x,y,z+m,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x,y,z-m)!=0)break;
settile(x,y,z-m,id,bd)}
}



function ranz(a){
var n=[]
var j=0
for(var m=0;m<a;m++){n.push(Math.random()-1)}
var q
for(var m=0;m<a;m++){
for(q in n){
var min=Math.min.apply(Math,n)
if(n[q]==min){n[q]=j;j++;break}
}}
return n
}


function shentou(x,y,z,l,id,bd){
var o=getTile(x,y,z)
if(o!=0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x-1,y,z,l-Math.random(),id,bd);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x+1,y,z,l-Math.random(),id,bd);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y-1,z,l-Math.random(),id,bd);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y+1,z,l-Math.random(),id,bd);break;
case 4:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y,z-1,l-Math.random(),id,bd);break;
case 5:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y,z+1,l-Math.random(),id,bd);break;
}}
}}

function shentou2(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y+1,z,l-Math.random(),id,bd,f,g);break;
case 4:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 5:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}


function shentou2y(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2y(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2y(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2y(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2y(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}

function shentou2x(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y+1,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}


function shentou2z(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x,y+1,z,l-Math.random(),id,bd,f,g);break;
}}
}}
}



function tuoyuan(is,ids)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var a=(x1+x2)*0.5,b=(y1+y2)*0.5,c=(z1+z2)*0.5
var q=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var rs=q*0.5+r
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
for(var k=-rs;k<=rs;k++){
var g=Math.sqrt((x1-a-i-0.5)*(x1-a-i-0.5)+(y1-b-j-0.5)*(y1-b-j-0.5)+(z1-c-k-0.5)*(z1-c-k-0.5))+Math.sqrt((x2-a-i-0.5)*(x2-a-i-0.5)+(y2-b-j-0.5)*(y2-b-j-0.5)+(z2-c-k-0.5)*(z2-c-k-0.5))
if(g<q+r+0.9&&g>q+r-0.9)settile(a+i,b+j,c+k,is,ids)
}}}
}


function tiankengx(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x,y,z-1)==0)tiankengx(x,y,z-1,l-random,id,bd);break;
case 1:
if(getTile(x,y,z+1)==0)tiankengx(x,y,z+1,l-random,id,bd);break;
case 2:
if(getTile(x,y+1,z)==0&&y<255)tiankengx(x,y+1,z,l-random,id,bd);break;
case 3:
if(getTile(x,y-1,z)==0&&y>0)tiankengx(x,y-1,z,l-random,id,bd);break;
}}}}

function tiankengz(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)tiankengz(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)tiankengz(x+1,y,z,l-random,id,bd);break;
case 2:
if(getTile(x,y+1,z)==0&&y<255)tiankengz(x,y+1,z,l-random,id,bd);break;
case 3:
if(getTile(x,y-1,z)==0&&y>0)tiankengz(x,y-1,z,l-random,id,bd);break;
}}}}

function tiankengy(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x,y,z-1)==0)tiankengy(x,y,z-1,l-random,id,bd);break;
case 1:
if(getTile(x,y,z+1)==0)tiankengy(x,y,z+1,l-random,id,bd);break;
case 2:
if(getTile(x+1,y,z)==0)tiankengy(x+1,y,z,l-random,id,bd);break;
case 3:
if(getTile(x-1,y,z)==0)tiankengy(x-1,y,z,l-random,id,bd);break;
}}}}


function dbxy(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x+xm,y,z+zm]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x+xm,y,z+zm]
lianxian(s1,s2,i,id)
s1=s2
}}

function dbxx(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x,y+xm,z+zm]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x,y+xm,z+zm]
lianxian(s1,s2,i,id)
s1=s2
}}

function dbxz(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x+zm,y+xm,z]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x+zm,y+xm,z]
lianxian(s1,s2,i,id)
s1=s2
}}


function replaces(aa,ba,ca,ab,bb,cb)
{
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
var v
var f=replaceids.split(" ");
var w=replaceid.split(" ");
for(v in w){
var o=w[v]
if(o>=0){
if(f>=0){if(o==k){
settile(n1+x,n2+y,n3+z,f)
}}
else{f=f[0].split(":");if(o==k){settile(n1+x,n2+y,n3+z,f[0],f[1])}}}
else{o=o.split(":");if(o[0]==k&&o[1]==e){if(f>=0){
if(f>=0){settile(n1+x,n2+y,n3+z,f)}}
else{f=f[0].split(":");if(o[0]==k&&o[1]==e){
settile(n1+x,n2+y,n3+z,f[0],f[1])}}}
}
}
}}}
print2("替换完成")
}



function replaces2(aa,ba,ca,ab,bb,cb)
{
var p=parseInt
var set
if(replaceidset>=0){set=[replaceidset,0]}else{set=replaceidset.split(":")}
var xyz1=repxyz[0]
var xyz2=repxyz[1]
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
var k1=getTile(n1+x+xyz1[0],n2+y+xyz1[1],n3+z+xyz1[2])
var e1=Level.getData(n1+x+xyz1[0],n2+y+xyz1[1],n3+z+xyz1[2])
var v
var m
var fx=replaceids.split(" ");
var w=replaceid.split(" ");
for(v in w){
var o=w[v]
if(o>=0){
if(o==k){
for(m in fx){
var f=fx[m]
if(f>=0){if(f==k1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
else{f=f.split(":");if(f[0]==k1&&f[1]==e1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
}}}
else{o=o.split(":");if(o[0]==k&&o[1]==e){
for(m in fx){
var f=fx[m]
if(f>=0){if(f==k1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
else{f=f.split(":");if(f[0]==k1&&f[1]==e1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
}}
}}
}}}
print2("替换完成")
}







var he=0
var ptk=0
var pte=0
var ptt=0
var pts=0
function cpt()
{
ptt++
if(ptt%10==1){
var w=replaceid.split(" ");
if(he<w.length){
var v
var o=w[he]
if(o>=0){if(o>0){ptk=o;pte=0}else{ptk=0;pte=0}}
else if(o!=null){o=o.split(":");
if(o[0]>0){ptk=o[1];ptk=o[1]}else{ptk=0;pte=0}}}
else{ptk=0;pte=0}


print2((pts+he*4+1)+"/"+(128*4-h*4+4))
if(pts==0){
for(var x=0;x<=128;x++){
for(var y=0;y<=128;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==1){
for(var x=0;x<=128;x++){
for(var y=129;y<=255;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==2){
for(var x=129;x<=255;x++){
for(var y=0;y<=128;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==3){
for(var x=129;x<=255;x++){
for(var y=129;y<=255;y++){
settile(x,h+he,y,ptk,pte)
}}}
pts++
if(pts==4){
he++
pts=0
}
if(he+h>128){
pt=false
he=0
if(h<64){
for(var x=-3;x<=3;x++){
for(var y=-3;y<=3;y++){
settile(128+x,64,128+y,7)
}}}}

}
}

function ycircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//ycircle(x,y+i,z,h+j,b,bd)
if(h-j>=0)ycircle(x,y+i,z,h-j,b,bd)
}
}}}

function xcircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//xcircle(x+i,y,z,h+j,b,bd)
if(h-j>=0)xcircle(x+i,y,z,h-j,b,bd)
}
}}}

function zcircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//zcircle(x,y,z+i,h+j,b,bd)
if(h-j>=0)zcircle(x,y,z+i,h-j,b,bd)
}
}}}


function noj1(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
settile(Math.round(x1+i),Math.round(y1+j),Math.round(z1+k),b1,bd)
}}}}}}

function noj2(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q-1&&qs<q+1){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],s1,b1,bd)
}}}}}}

function noj3(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],[Math.round(x2+i),Math.round(y2+j),Math.round(z2+k)],b1,bd)
}}}}}}


function noj4(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+2){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],s2,b1,bd)
}}}}}}


function noj5(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
//var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)
var y=(y1-y2)
var z=(z1-z2)
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
settile(Math.round(x1+i),Math.round(y1+j),Math.round(z1+k),b1,bd)
}}}}}}


function noj6(s1,s2,r,h,b1,bd)
{//r小h大
h=parseInt(h)
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var a=(x1-x2)/l*4*r
var b=(y1-y2)/l*4*r
var c=(z1-z2)/l*4*r
for(var w=-r;w<=r;w=w+0.5){
//var u=Math.sqrt(r*r-w*w)
var e=1
if(w<0)e=-1
var d=Math.sqrt(r*r-w*w)
var x=-(x1-x2)/l*d*e
var y=-(y1-y2)/l*d*e
var z=-(z1-z2)/l*d*e
if(r-w==0){x=0;y=0;z=0}
noj1([x1+x,y1+y,z1+z],s2,h+w,b1,bd)
if(h-w>=0)noj1([x1+x,y1+y,z1+z],s2,h-w,b1,bd)
}}





function intopit()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
add.setText("确认选择图片");

var t=new android.widget.TextView(ctx);
t.setText("欢迎使用！全部输入完毕后点击<开始＞按钮开始生储存到复制粘贴。由于羊毛色彩限制，所以色差较大，且无法智能解决，所以您可以在生成后用替换和相同方块渗透修改润色！啦啦菌的算法，6g3y改进");
tmiLayout.addView(t);

var t=new android.widget.TextView(ctx);
t.setText("请输入图片路径，如:/sdcard/1.png");
tmiLayout.addView(t);

id.setHint("输入路径");
id.setHint("请输入图片路径，如:/sdcard/1.png");
id.setText("/sdcard/*.png")

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("请输入图片地址");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
var h=id.getText()
try{
var bitmap= android.graphics.BitmapFactory.decodeFile(h);
var h=bitmap.getHeight();
var w=bitmap.getWidth();
intopit2(bitmap,h,w)
}catch(err){
  clientMessage("错误: 图片路径(格式)错误，请核对图片格式以及路径(png/jpg格式)")
}
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function intopit2(bitmap,h,w)
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("个人建议，范围在500*500之内\n输入该图片起始点，结束点\n说明 NUM>0 AND NUM<=max\n高度:"+h+"    宽度:"+w+"\n起始点为图片右上角，结束点为图片右下角\n请输入图片路径，如:/sdcard/1.png\n输入将会储存到复制粘贴\n注意:图片复制格式，y增，z增方向，从x+到x-看正面");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("缩小倍数(整数):");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("输入倍数");
ip.setText("1")
l.addView(ip);

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否RGB模式生成\(选择为RGB，不选为HSV，ps:RGB更科学,HSV更流畅，但色差都大！)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});
var ms2=false
var cd=new android.widget.CheckBox(ctx);
cd.setText("是否RGB2标准模式生成(RBG勾选了这个就没有用)\(选择为RGB2，不选为HSV，RBG，ps:RGB系列更卡更科学,HSV更流畅，但色差都大！)");
cd.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms2=true;else ms2=false;
				}
		});

var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("起始点(高):");
la.addView(t);
var id = new android.widget.EditText(ctx);
id.setHint("输入起始点");
id.setText("1")
la.addView(id);
var lb=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("起始点(宽):");
lb.addView(t);
var id2 = new android.widget.EditText(ctx);
id2.setHint("输入起始点");
id2.setText("1")
lb.addView(id2);
var lc=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("结束点(高):");
lc.addView(t);
var id3 = new android.widget.EditText(ctx);
id3.setHint("输入结束点");
id3.setText(String(h))
lc.addView(id3);
var ld=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("结束点(宽):");
ld.addView(t);
var id4 = new android.widget.EditText(ctx);
id4.setHint("输入起始高度");
id4.setText(String(w))
ld.addView(id4);




//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(cr,svp);
layout.addView(cd,svp);
layout.addView(la,svp);
layout.addView(lb,svp);
layout.addView(lc,svp);
layout.addView(ld,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("像素图储存")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
var h1=parseInt(id.getText())-1
var w1=parseInt(id2.getText())-1
var h2=parseInt(id3.getText())
var w2=parseInt(id4.getText())
var b=Math.floor(parseInt(ip.getText()))
if(b<1)b=1
pictures=[true,bitmap,ms,h1,w1,h2,w2,b,ms2]
//clientMessage(bitmap+","+ms+","+h1+","+w1+","+h2+","+w2);
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

var pictures=[false]





function picture(bitmap,rgb,h1,w1,h2,w2,ub,usb)
{
var sa=[]
var sb=[]
var sc=[]
for(var js=0;js<h2-h1;js=js+ub){sc=[]
for(var jb=0;jb<w2-w1;jb=jb+ub){
	var color=bitmap.getPixel(jb+w1,js+h1);
		 if(rgb==false&&usb==true)
  {
  var r=android.graphics.Color.red(color),
	g=android.graphics.Color.green(color),
	b=android.graphics.Color.blue(color);
  var cgy=gyrgb(r,g,b)
  var id=cgy[0]
  var jg=cgy[1]
  }
  else if(rgb==false)
  {
		var he=gethsv(color);
    var jg=jiance(he[0],he[1],he[2]);
    var id=35;
  }
  else if(rgb)
  {
  var r=android.graphics.Color.red(color),
	g=android.graphics.Color.green(color),
	b=android.graphics.Color.blue(color);
		var temp=jiancergb(r,g,b);
    var jg=0,id;
    if(temp<=15) {jg=temp;id=35;}
    else
    {
       switch(temp)
       {
         case 16:id=1;break;
         case 17:id=3;break;
       }
    }
  }
  
		if(android.graphics.Color.alpha(color)<=20)
		{
      //settile(js-1,h2-h1-jb-1,1,0);
      sc.unshift([0,0])
		}
		else
    {
      //settile(js-1,h2-h1-jb-1,1,id,jg);
      sc.unshift([id,jg])
    }
}
sb.unshift(sc)
}
sa.push(sb)
biockgroup[copytime]=sa
pictures=[false]
print2("已输入复制粘贴")
}


function jiance(h,s,v)
{if(h>80&&h<=160){
if(s>0.1&&0.2<v&&v<=0.55)return 13;
else		return 5;}
if(s<=0.1&&v>0.85){return 0;}
if(s<=0.1&&v>0.65&&v<=0.85){	return 8;}
	if(v<=0.3)	{		return 15;}
if(s<=0.1&&0.3<v&&v<=0.65){return 7;}
	if(h>20&&h<=50){
if(s>0.1&&0.3<v&&v<=0.55)return 12;
else return 1;}
if(h>280&&h<=300)	{	return 2;}
if(h>200&&h<=220){	return 3;}
	if(h>50&&h<=80)	{
if(s>0.1&&0.3<v&&v<=0.5) return 12;
else	return 4;}
if(h>300&&h<=340){		return 6;	}
	if(h>160&&h<=190)	{		return 9;	}
	if(h>260&&h<=280)	{		return 10;	}
	if(h>190&&h<=260)	{		return 11;	}
	if((h>340&&h<=360)||(h>=0&&h<=20)){
 if(0.1<=s&&s<=0.5&&v>=0.75) return 6;
else	return 14;}
	else{		return 15;	}
}


function gethsv(ys){
var r=android.graphics.Color.red(ys)/255,
	g=android.graphics.Color.green(ys)/255,
	b=android.graphics.Color.blue(ys)/255;
var h, s, v;
var min, max, delta;
min = Math.min(Math.min(r, g), b);
max = Math.max(Math.max(r, g), b);
v = max;
delta = max - min;
if( max != 0 ) 
	s = delta / max; 
else 
{ 
s = 0; 
h = -1; 
	return [h,s,v];
}
// H 
if(max==min)
	h=0;
if(max==r&&g>=b)
	h=60*(g-b)/delta;
if(max==r&&g<b)
	h=60*(g-b)/delta+360;
if(max==g)
	h=60*(b-r)/delta+120;
if(max==b)
	h=60*(r-g)/delta+240;
return [h,s,v]; 
}

var red=new Array(209,232,188,89,182,55,213,63,148,37,122, 36,81,52,155,23, 127,121,188,220,255)
var blue=new Array(209,46,199,208,24,44,144,63,157,140,188, 145,26,23,38,19, 127,58,98,162,68);
var green=new Array(209,121,62,128,169,179,118,63,157,109,47, 48,48,72,42,19, 127,85,152,211,241)

function jiancergb(R,G,B)
{
   var minrgb=Math.sqrt(Math.pow(R-209,2)+ Math.pow(G-209,2)+ Math.pow(B-209,2));
   var minjs;//相近颜色对应js
   for(var forjs=0;forjs<18;forjs++)
   {
     var tempr,tempg,tempb,temprgb;
     temprgb=Math.sqrt(Math.pow(R-red[forjs],2)+ Math.pow(G-green[forjs],2)+ Math.pow(B-blue[forjs],2));
     if(temprgb<=minrgb)
     {
       minjs=forjs;
       minrgb=temprgb;
     }
   }
   return minjs;
}

var color=[
[35,0,217,218,219],
[35,8,160,160,160],
[35,7,62,62,62],
[35,15,15,15,15],
[35,12,72,44,27],
[35,14,150,50,45],
[35,1,220,121,56],
[35,4,184,170,40],
[35,5,67,175,55],
[35,13,48,26,24],
[35,9,41,108,134],
[35,3,114,144,205],
[35,11,44,60,145],
[35,10,123,56,179],
[35,6,203,117,143],
[41,0,255,244,67],
[57,0,132,229,224],
[24,2,230,217,164],
[3,0,124,85,57],
[5,1,89,66,38],
[5,0,153,124,74],
[5,2,209,187,128],
[5,3,184,131,93],
[49,0,39,33,59],
[82,0,156,163,175],
[155,0,242,237,236],
[5,4,175,90,50],
[133,0,68,217,103],
[172,0,151,89,61],
[159,0,210,177,165],
[159,1,165,82,33],
[159,2,156,87,112],
[159,3,115,106,133],
[159,4,198,135,33],
[159,5,104,116,50],
[159,6,161,77,74],
[159,7,57,43,33],
[159,8,137,108,99],
[159,9,90,90,90],
[159,10,115,67,85],
[159,11,73,58,89],
[159,12,70,47,33],
[159,13,71,77,37],
[159,14,131,53,41],
[159,15,24,15,8]
]
var rbgblock=[],blr=[],blb=[],blg=[]
for (var m in color){
rbgblock[m]=[color[m][0],color[m][1]]
blr[m]=color[m][2]
blg[m]=color[m][3]
blb[m]=color[m][4]
}/*
var rbgblock=[[35,0],[35,8],[35,7],[35,15],[35,12],[35,14],[35,1],[35,4],[35,5],[35,13],[35,9],[35,3],[35,11],[35,10],[35,6],[41,0],[42,0],[57,0],[24,2],[3,0],[5,1],[5,0],[5,2],[5,3],[112,0],[49,0],[82,0],[155,0],[87,0],[1,2],[5,4],[133,0],[87,0],[172,0],[159,0],[159,1],[159,2],[159,3],[159,4],[159,5],[159,6],[159,7],[159,8],[159,9],[159,10],[159,11],[159,12],[159,13],[159,14],[159,15]]//121,85,58
var blr=[220,180,60,0,80,255,200,220,90,60,60,125,60,140,220,255,230,140,190,140,120,160,180,180,25,0,160,255,100,150,190,0,180,160,210,180,155,130,190,120,155,80,120,140,160,100,100,100,230,30]
var blb=[220,180,60,0,60,0,140,200,170,80,120,0,60,80,160,255,230,190,190,100,85,140,160,140,25,0,160,255,0,0,40,0,180,60,140,0,135,255,35,35,95,0,0,10,90,90,0,0,0,0]
var blg=[220,180,60,0,45,0,55,40,65,5,145,205,125,165,185,0,230,255,150,10,58,65,125,85,25,65,145,255,0,120,120,255,180,120,180,100,100,130,135,160,100,60,140,80,80,80,60,100,90,0]


//print(rbgblock[20]+","+blr[20]+","+blb[20]+","+blg[20])

var rbgl=[]
addu()
function addu(){
var usde
var l=[1]
for(usde in blr){
l[usde]=gyrgb2(blr[usde],blg[usde],blb[usde])/2}
rbgl=l
/*var min=Math.min.apply(Math,l)
var q=0
for(usde in l){
q+=l[usde]
}
q=q/l.length////
//print(min+","+q)
}
function gyrgb2(R,G,B)
{
   var l=new Array()
   var fx
for(fx in rbgblock){
   var m=((R-blr[fx])*(R-blr[fx])+(G-blg[fx])*(G-blg[fx])+(B-blb[fx])*(B-blb[fx]))
   if(m>0){l[fx]=m}else{l[fx]=255}
}
  return Math.min.apply(Math,l)
}
//print2(rbgblock.length +";"+blr.length +";"+blg.length+";"+blb.length)
var rbgused=[0,0,0,-1,[]]
function gyrgb(R,G,B)
{
if(rbgused[3]>((R-rbgused[0])*(R-rbgused[0])+ (G-rbgused[1])*(G-rbgused[1])+ (B-rbgused[2])*(B-rbgused[2]))){
return rbgused[4]
}
   var l=new Array()
   var fx
for(fx in rbgblock){
   l[fx]=((R-blr[fx])*(R-blr[fx])+ (G-blg[fx])*(G-blg[fx])+ (B-blb[fx])*(B-blb[fx]))
}
  var min=Math.min.apply(Math,l)
  var fd
for(fd in l){
if(l[fd]==min){
rbgused=[blr[fd],blg[fd],blb[fd],rbgl[fd],rbgblock[fd]]
return rbgblock[fd];
break}
}
}

var shuangjitime=0
function shuangjis(a,b)
{
if(shuangjitime==1){
Entity.setCarriedItem(getplayerent(), a, 1, b);
print2("已经获取方块")
}
else{
shuangjitime=1
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
shuangjitime=0
}}),300);
}}))}
}


function xiacui(x,y,z,l,id,bd){
for(var m=1;m<l;m++){
var n=getTile(x,y-m,z)
if(n==0||n==18){settile(x,y-m,z,id,bd)}else{break;}
}
}

function caves(x,y,z,cave,tt){
var ls=cave[1]
var cv=cave[2]
var lofs=ls/cave[2]
var ls2=lofs
var yaw=cave[0]
if(cave[0]>=0||cave[0]<0){}else{yaw=Math.random()*7200}
var pitch=-45
var pi=Math.PI/180//// 
var s1=[x,y,z]
var s2=[x,y,z]
var i=-10+Math.random()*20
for(var u=0;u<=ls;u+=i){
if(pitch>12)pitch=-45 
pitch+=5+Math.random()*5  
if(tt)pitch=Math.random()*5
s2[0] =s1[0]-Math.sin(yaw*pi)*i*Math.cos(pitch*pi)
s2[1] =s1[1]+Math.sin(pitch*pi)*i
s2[2] =s1[2]+Math.cos(yaw*pi)*i*Math.cos(pitch*pi)
if(s2[1]<10){s2[1]=10+10*Math.random()}
if(u>lofs){
cv--
if(cave[3][1]==false)cv=0
lofs+=ls2
caves(x,y,z,[yaw+90*(Math.round(Math.random())*2-1),ls-u,cv,[false,cave[3][1],cave[3][2]],0])}
yaw=yaw+90-180*Math.random()
i=5+Math.random()*5  
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m++){
var v=getTile(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)))
if(v!=0&&v!=95)fdx(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)))}////
s1=[s2[0],s2[1],s2[2]]
}
if(cave[3][0]){
var l=cave[4]
var x=s2[0]
var y=s2[1]
var z=s2[2]
for(var i=-l;i<=l;i+=2){
for(var j=-l;j<=l;j+=2){
if(i*i+j*j<=Math.pow(l-0.3*l*Math.random(),2)){
if(getTile(x+i,y-1,z+j)!=0){fdx(x+i,y-1+2*Math.random(),z+j)}}
if(i*i+j*j<=Math.pow(l-0.5*l*Math.random(),2)){
if(getTile(x+i,y+3,z+j)!=0){fdx(x+i,y+3+2*Math.random(),z+j)}}
}}
if(getTile(s2[0],s2[1]-4,s2[2])!=0&&cave[3][2]&&Math.random()>0.5)tiankengy(s2[0],s2[1],s2[2],l*0.6,11,0);
}
else if(cave[3][2]){
if(pitch<-10&&pitch>-45&&getTile(s2[0],s2[1]-3,s2[2])!=0)tiankengy(s2[0],s2[1],s2[2],l/2,11,0);////
}
}



function tree1(x,y,z,b,bd)
{
if(b==17){
var l=15+Math.random()*20
yanchangy(x,y,z,l*0.1,17,bd);
yanchangy(x+1,y,z,l*0.1,17,bd);
yanchangy(x+1,y,z+1,l*0.1,17,bd);
yanchangy(x,y,z+1,l*0.1,17,bd);
shanmai(x,y+l,z,4,18,bd%4);
shanmai(x+1,y+l,z+1,4,18,bd%4);
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,18,bd%4)
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,18,bd%4)
}
if(b==162){
var l=15+Math.random()*20
yanchangy(x,y,z,l*0.1,162,bd);
yanchangy(x+1,y,z,l*0.1,162,bd);
yanchangy(x+1,y,z+1,l*0.1,162,bd);
yanchangy(x,y,z+1,l*0.1,162,bd);
shanmai(x,y+l,z,4,161,bd%4);
shanmai(x+1,y+l,z+1,4,161,bd%4);
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,161,bd%4)
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,161,bd%4)
}}


function tree2(x,y,z,b,bd){
if(b==17){
var pi=Math.PI/180////
var l=5
h=l
yuanzhuy(x,y,z,1,17,12+bd%4)
h=1
yuanzhuy(x,y,z,2,17,12+bd%4)
h=0
yuanzhuy(x,y,z,3,17,12+bd%4)
var s1=[x,y+l,z]
var o=10
for(var m=0;m<16;m++){
var a=Math.cos((Math.random()+m)*22.5*pi)*o
var b=Math.sin(Math.random()*90*pi)*o
var c=Math.sin((Math.random()+m)*22.5*pi)*o
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,18,bd%4);}
for(var m=0;m<8;m++){
var a=Math.cos((Math.random()+m)*45*pi)*o/2
var b=Math.sin(Math.random()*90*pi)*o*1.5
var c=Math.sin((Math.random()+m)*45*pi)*o/2
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,18,bd%4);}}
if(b==162){
var pi=Math.PI/180////
var l=5
h=l
yuanzhuy(x,y,z,1,162,12+bd%4)
h=1
yuanzhuy(x,y,z,2,162,12+bd%4)
h=0
yuanzhuy(x,y,z,3,162,12+bd%4)
var s1=[x,y+l,z]
var o=10
for(var m=0;m<16;m++){
var a=Math.cos((Math.random()+m)*22.5*pi)*o
var b=Math.sin(Math.random()*90*pi)*o
var c=Math.sin((Math.random()+m)*22.5*pi)*o
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,161,bd%4);}
for(var m=0;m<8;m++){
var a=Math.cos((Math.random()+m)*45*pi)*o/2
var b=Math.sin(Math.random()*90*pi)*o*1.5
var c=Math.sin((Math.random()+m)*45*pi)*o/2
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,161,bd%4);}
}}


function tree3(x,y,z,b,bd){
if(b==17){
var pi=Math.PI/180////
var l=10+Math.random()*10
yanchangy(x,y,z,l*0.12,17,bd);
shanmai(x,y+l*1.2,z,3,18,bd%4);
var o=Math.random()*3+1
for(var m=0;m<o;m++){
var q=Math.random()
var s1=[x,y+l*q*0.5+4,z]
var a=Math.cos(Math.random()*7200*pi)*0.4*l
var b=Math.sin(Math.random()*90*pi)*0.3*l
var c=Math.sin(Math.random()*7200*pi)*0.4*l
var s2=[x+a,y+l*q*0.5+4+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l*q*0.5+4+b,z+c,2,18,bd%4);}}
if(b==162){
var pi=Math.PI/180////
var l=10+Math.random()*10
yanchangy(x,y,z,l*0.12,162,bd);
shanmai(x,y+l*1.2,z,3,161,bd%4);
var o=Math.random()*3+1
for(var m=0;m<o;m++){
var q=Math.random()
var s1=[x,y+l*q*0.5+4,z]
var a=Math.cos(Math.random()*7200*pi)*0.4*l
var b=Math.sin(Math.random()*90*pi)*0.3*l
var c=Math.sin(Math.random()*7200*pi)*0.4*l
var s2=[x+a,y+l*q*0.5+4+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l*q*0.5+4+b,z+c,2,161,bd%4);
}}}


function tree4(x,y,z,b,bd)
{
if(b==17){
var l=3+Math.random()*3
yanchangy(x,y,z,l*0.1,17,bd);
shanmai(x,y+l,z,2,18,bd%4);}
if(b==162){
var l=3+Math.random()*3
yanchangy(x,y,z,l*0.1,162,bd);
shanmai(x,y+l,z,2,161,bd%4);
}}

function tree5(x,y,z,b,bd)
{
if(b==17){
var l=10+Math.random()*5
yanchangy(x,y,z,l*0.1,17,bd);
shanmai(x,y+l,z,2,18,bd%4);
shanmai(x,y+l*0.65,z,2,18,bd%4); }
if(b==162){
var l=10+Math.random()*5
yanchangy(x,y,z,l*0.1,162,bd);
shanmai(x,y+l,z,2,161,bd%4);
shanmai(x,y+l*0.65,z,2,161,bd%4); 
}} 


function qiuling(x,y,z,r,l)
{
var pi=Math.PI*0.5
l=l*0.7
var a=1.4
var b=4
var c=7
var d=Math.random()*30+20
var a1=Math.random()*300000
var a2=Math.random()*50000000
var a3=Math.random()*8000
for(var m=-r;m<r;m++){
for(var n=-r;n<r;n++){
var ls=(Math.cos(pi*m/r)*Math.cos(pi*n/r))*l-(Math.sin(pi*m*a/r+b)*Math.cos(pi*n*a/r+c))*l*0.25+(Math.cos(pi*m*a*2/r+b*d)+Math.sin(pi*n*a*2/r+c*d))*l*0.2-(Math.sin(pi*m*a*3/r+b*d*2)*Math.sin(pi*n*a*3/r+c*d*2))*l*0.15
if(ls>0)setlongblock(x+m,y,z+n,ls)}}
}
function setlongblock(x,y,z,l){
for(var i=0;i<=l;i++){
if(i>3)settile(x,y+l-i,z,1)
else if(i>0)settile(x,y+l-i,z,3)
else if(i==0)settile(x,y+l,z,2)
}}


function rpg(){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
var sn=Level.spawnMob(getPlayerX()+xv*2.1,getPlayerY()+yv*2.1,getPlayerZ()+zv*2.1,81)
setVelX(sn,xv*3)
setVelY(sn,yv*3)
setVelZ(sn,zv*3)
rpgs.unshift(sn)
}





clientMessage=print2



var longgetchick=false
var longgetsave=[0,-1,0,false]
function longget(){var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){

while(longgetchick){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var x,y,z
x=-Math.sin(a)*Math.cos(b)
y=-Math.sin(b)
z=Math.cos(a)*Math.cos(b)
var X=Entity.getX(getplayerent()),Y=Entity.getY(getplayerent()),Z=Entity.getZ(getplayerent())
for(var i=0;i<100;i++){
var g=getTile(X+x*i,Y+y*i,Z+z*i)
if(g!=0&&i>0){
if(X+x*(i-1)!=longgetsave[0]&&Y+y*(i-1)!=longgetsave[1]&&Z+z*(i-1)!=longgetsave[2]){setTile(X+x*(i-1),Y+y*(i-1),Z+z*(i-1),52);longgetsave=[X+x*(i-1),Y+y*(i-1),Z+z*(i-1),true];}else{longgetsave=[0,-1,0,false]}
break}}
xc.sleep(100)
if(longgetsave[3]){setTile(longgetsave[0],longgetsave[1],longgetsave[2],0);longgetsave[3]=false}
}

}}))
xc.start()}




var iskq=false;
function smallmap(nut,mus,fd){

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var fx=["→","↗","↑","↖","←","↙","↓","↘"]//方向
var fw=nut*2,kd=Math.floor(ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4/fw),px,py,pz 
////

dp = ctx.getResources().getDisplayMetrics().density;

var mX,mY;
tpopx = 5*dp;
tpopy = 25*dp;

var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1)   
//btn=new android.widget.Button(ctx);
var btn=new android.widget.ImageView(ctx);
var fill = new android.widget.LinearLayout.LayoutParams(-1, -1,1); 
btn.setLayoutParams(fill);

//btn.setTextSize(10) 
//btn.setText(fx[getyaw()]);

//btn.setBackgroundColor(android.graphics.Color.argb(100,255,255,255));

var n=btn
if(mus==true){ var newb = android.graphics. Bitmap.createBitmap((fw+1)*kd,(fw+1)*kd, android.graphics.Bitmap. Config.ARGB_8888 );
var canvasTemp = new android.graphics. Canvas( newb );
canvasTemp.drawARGB(120,0,0,0);
var drawable = new android.graphics.drawable. BitmapDrawable(newb);
n.setBackgroundDrawable(drawable);}

btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
mX=e.getX();
mY=e.getY();
break;
case 2:
var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx = tpopx + delX;
tpopy = tpopy + delY;
btn.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
break;
}
return true;
}
}));
layout.addView(btn);
btn=new android.widget.PopupWindow(layout,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4); 
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);

smallmapgui=btn
var cb=[]
for(var id=0;id<256;id++){
var atm=85
var cb2=[null]
for(var at=1;at<4;at++){
var p = new android.graphics. Paint();
if(id==0||id==6 ||id==30 ||id==37 ||id==38 ||id==39 ||id==40 ||id==106 ||id==50 ||id==51 ){p.setARGB(0,255,255,255);}//空气
else if(id==2 ||id==31||id==253 ||id==175 ||id==243 ){p.setARGB(atm*at,101,167,72);}//草
else if(id==3  ){p.setARGB(atm*at,121,85,58);}//土
else if(id==8||id==9){p.setARGB(atm*at,38,93,255);}//水
else if(id==10||id==11){p.setARGB(atm*at,252,87,0);}//岩浆
else if(id==14||id==15 ||id==16 ||id==21 ||id==22 ||id==41 ||id==42 ||id==56 ||id==57 ||id==73 ||id==74||id==129||id==133 ||id==173){p.setARGB(atm*at,252,238,75);}//矿物
else if(id==12||id==159||id==53||id==24 ||id==128||id==121){p.setARGB(atm*at,211,204,149);}//沙子
else if(id==17||id==162){p.setARGB(atm*at,106,85,52);}//深木
else if(id==18||id==81||id==161 ||id==254){p.setARGB(atm*at,41,141,41);}//树叶
else if(id==78||id==79 ||id==80){p.setARGB(atm*at,227,243,243);}//雪
else if(id==5||id==53 ||id==157 ||id==158){p.setARGB(atm*at,188,152,98);}//浅木
else if(id==1||id==4 ||id==13 ||id==48 ||id==67 ||id==98 ||id==109 ||id==255){p.setARGB(atm*at,155,155,155);}//石头
else {p.setARGB(atm*at,0,0,0);}//其他
 cb2.push(p)
}
cb.push(cb2)
}
var cg=[],r
for(r in rbgblock){
//var p = new android.graphics. Paint();
if(cg[rbgblock[r][0]]==undefined){cg[rbgblock[r][0]]=[]}
cg[rbgblock[r][0]][rbgblock[r][1]]=[1024]
for(var i=1;i<4;i++){
var p = new android.graphics. Paint();
p.setARGB(85*i,blr[r],blg[r],blb[r])
cg[rbgblock[r][0]][rbgblock[r][1]].push(p)
}
}//print(cg.length+","+cg[35][1])


var numb=[]
   for(var a=0; a<=fw ;a++)
   {
     for(var b=0; b<=fw ;b++)
     {
     if((fw/2)*(fw/2)>(-(fw/2)+a)*(-(fw/2)+a)+(-(fw/2)+b)*(-(fw/2)+b)){
     numb.push([a,b])
     }
     }
   }
var a,b




/////
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
while(iskq){


var newb = android.graphics. Bitmap.createBitmap((fw+1)*kd,(fw+1)*kd, android.graphics.Bitmap. Config.ARGB_8888 );
var canvasTemp = new android.graphics. Canvas( newb);
var p = new android.graphics. Paint();
var drawable = new android.graphics.drawable. BitmapDrawable(newb);

px=getPlayerX(),py=getPlayerY(),pz=getPlayerZ();

for(fx in numb){
a=numb[fx][0],b=numb[fx][1]
     var atm=85,at=2
     var x=px-(fw/2)+a,z=pz-(fw/2)+b
        var id=getTile(x,py-1,z);
        var bd=0//Level.getData(x,y,z) 
        if(id!=0){
        var id2=getTile(x,py,z);
        if(id2!=0){id=id2;at=3;bd=Level.getData(x,py,z)}
        else{bd=Level.getData(x,py-1,z)}
        }
        else if(id==0){id=getTile(x,py-2,z);at=1;bd=Level.getData(x,py-2,z) }
    
var sp=p
if(cg[id]!=undefined){
if(cg[id][bd]!=undefined){sp=cg[id][bd][at]}else{sp=cb[id][at]}
}else{sp=cb[id][at]}
//sp=cb[id][at]
canvasTemp.drawRect(a*kd,b*kd,a*kd+kd,b*kd+kd,sp);
}
p.setARGB(180,255,255,255);

canvasTemp.drawRect(fw*0.5*kd+kd*0.25,fw*0.5*kd+kd*0.3,fw*0.5*kd+kd*0.75,fw*0.5*kd+kd*0.7,p);
canvasTemp.drawRect(0,fw*0.5*kd+kd*0.42,fw*kd+kd,fw*0.5*kd+kd*0.58,p);
canvasTemp.drawRect(fw*0.5*kd+kd*0.42,0,fw*0.5*kd+kd*0.58,fw*kd+kd,p);
/*
p.setTextSize(4*kd);
p.setARGB(255,255,255,255);

canvasTemp.drawText(fx[getyaw()],0,kd*4,p);

//p = new android.graphics. Paint();

newb=Matrix(newb,180-getYaw(),fd*ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4*Math.SQRT2,fd*ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4*Math.SQRT2)

var drawable = new android.graphics.drawable. BitmapDrawable(newb);

ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
n.setScaleType(android.widget.ImageView.ScaleType.CENTER); 
n.setImageDrawable(drawable);
}catch(err){
print2("错误:"+err);
}}}))


xc.sleep(10)
}
}}))
xc.start()

}catch(err){
clientMessage("错误:"+err);

}}}))}



function smallmapop(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("半径");
id.setText(String(25))
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否黑色底色");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});
tmiLayout.addView(cr);
var fd=2
var cr=new android.widget.CheckBox(ctx);
cr.setText("算法缩小地图(出现正方形使用)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) fd=1;else fd=2;
				}
		});
tmiLayout.addView(cr); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("【半径】【由啦啦菌改编】");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
iskq=true;
smallmap(parseInt(id.getText()),ms,fd)
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function Matrix(bmp,r,w,h){
	 var width = bmp.getWidth(); 
	 var height = bmp.getHeight(); 
	 var scaleWidth = w / width;
	 var scaleHeight = h / height;
	 var matrix = new android.graphics.Matrix();
	 matrix.setRotate(r,width/2,bmp.height/2);
   matrix.postScale(scaleWidth, scaleHeight);
   bmp= android.graphics.Bitmap.createBitmap(bmp, 0, 0, width, height, matrix, true);	 
 return bmp;	 
 }










/*var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var btn=null
var n=null

var setchi=false

var rpgGUI = null;
var krbg
var rpgs=[]
var pianyilist=[0,0,0]

setTile=function(x,y,z,ID,dmg){Server.sendChat("/setTile "+parseInt(x)+" "+parseInt(y)+" "+parseInt(z)+" "+parseInt(ID)+" "+parseInt(dmg));};
Level.setTile=function(x,y,z,ID,dmg){Server.sendChat("/setTile "+parseInt(x)+" "+parseInt(y)+" "+parseInt(z)+" "+parseInt(ID)+" "+parseInt(dmg));};
function procCmd(cmd){if(cmd=="imop"){newLevel();preventDefault();}};
var isGame=false;
var isprint=true
var dp
var allofgytype=[0,0,0,0,0]
var n//gui
var l=1//长度
var fx=["↑","↗","→","↘","↓","↙","←","↖"]//方向
var jg=0//间隔
var bz="无"//补助
var openWindow=null
var xyzWindow=null
var guis=null
var smallmapgui=null
var longset=null
var swi=0//快速建筑开关
var xx,yy,zz
var fzfx=1//方向，1增-1减
var zj=1//增减
var getData=Level.getData
var entitychange=null
var entstop=[]
var entityretype=[true,10,11,12,13,32,33,34,35,36,84,64,65,66,80,81,82,83]
var entityrelist=["所有实体","鸡","牛","猪","羊","僵尸","苦力怕(jj怪)","骷髅(小白)","蜘蛛","僵尸猪人","矿车","掉落物品","点燃的TNT","掉落的方块","箭","雪球","鸡蛋","画"]
var entitylist=["鸡","牛","猪","羊","僵尸","苦力怕(jj怪)","骷髅(小白)","蜘蛛","僵尸猪人","矿车"]
var entityid=[10,11,12,13,32,33,34,35,36,84]
var copylist=["x轴镜像","y轴镜像","z轴镜像" ,"xz轴镜像","Y~90","Y~180","Y~270","X~90","X~180","X~270","Z~90","Z~180","Z~270"]
//开关门数据为1003，羊吃草的数据为2001,睡觉的数据为9800
var noworld=false
var actionlist=[["羊吃草",true,2001],["攻击所有实体",false,"p"]]
var iswater=false
var isfg=false
var isyj=false
var option_xyz=false
var pt=false
var islight=false
//编辑方块
var stre//强度
//复制粘贴
var swifz=false
var biockgroup=[[],[],[],[],[]]
var copytime=0
var nocopyid=""
//替换
var repxyz=null
var replaceid=""
var replaceids=""
var replaceidset=""
//几何体
var crd
var r=0
var sbr=0
var h=0
var rounds=["垂直Y圆圈","垂直X圆圈","垂直Z圆圈","垂直Y圆面","垂直X圆面","垂直Z圆面","空球","实球"]
var geotype=0
var cub=0
var s1=false
var s2=false
var s3=false
var s4=false

//特殊
var pl=[0,false,[2],0]
var dx=0
var isRunning = false;

//生存必备
var CAT_STARTER_KIT_ITEMS = [
  {name: "石头", id: 1, data: 0},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "草方块", id: 2, data: 0},
  {name: "泥土", id: 3, data: 0},
  {name: "圆石", id: 313, data: 0},
  {name: "木板", id: 5, data: 0},
  {name: "松木板", id: 5, data: 1},
  {name: "桦木板", id: 5, data: 2},
  {name: "丛林木板", id: 5, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "黑橡木木板", id: 5, data: 5},
  {name: "树苗", id: 6, data: 0},
  {name: "松树苗", id: 6, data: 1},
  {name: "桦树苗", id: 6, data: 2},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "基岩", id: 7, data: 0},
  {name: "水", id: 8, data: 0},
  {name: "静止的水", id: 9, data: 0},
  {name: "岩浆", id: 10, data: 0},
  {name: "静止的岩浆", id: 11, data: 0},
  {name: "沙子", id: 12, data: 0},
  {name: "红沙", id: 12, data: 1},
  {name: "砂砾", id: 13, data: 0},
  {name: "金矿石", id: 14, data: 0},
  {name: "铁矿石", id: 15, data: 0},
  {name: "煤矿石", id: 16, data: 0},
  {name: "木头", id: 17, data: 0},
  {name: "松木", id: 17, data: 1},
  {name: "桦木", id: 17, data: 2},
  {name: "丛林木", id: 17, data: 3},
  {name: "树叶", id: 18, data: 0},
  {name: "松树叶", id: 18, data: 1},
  {name: "桦树叶", id: 18, data: 2},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "海绵", id: 19, data: 0},
  {name: "玻璃", id: 20, data: 0},
  {name: "青金石矿石", id: 21, data: 0},
  {name: "青金石块", id: 22, data: 0},
  {name: "沙石", id: 24, data: 0},
  {name: "錾制沙石", id: 24, data: 1},
  {name: "平滑沙石", id: 24, data: 2},
  {name: "动力铁轨", id: 27, data: 0},
  {name: "蜘蛛网", id: 30, data: 0},
  {name: "草", id: 31, data: 1},
  {name: "灌木", id: 31, data: 2},
  {name: "枯死的灌木", id: 32, data: 0},
  {name: "白色羊毛", id: 35, data: 0},
  {name: "橙色羊毛", id: 35, data: 1},
  {name: "品红色羊毛", id: 35, data: 2},
  {name: "淡蓝色羊毛", id: 35, data: 3},
  {name: "黄色羊毛", id: 35, data: 4},
  {name: "黄绿色羊毛", id: 35, data: 5},
  {name: "粉红色羊毛", id: 35, data: 6},
  {name: "灰色羊毛", id: 35, data: 7},
  {name: "淡灰色羊毛", id: 35, data: 8},
  {name: "青色羊毛", id: 35, data: 9},
  {name: "紫色羊毛", id: 35, data: 10},
  {name: "蓝色羊毛", id: 35, data: 11},
  {name: "棕色羊毛", id: 35, data: 12},
  {name: "绿色羊毛", id: 35, data: 13},
  {name: "红色羊毛", id: 35, data: 14},
  {name: "黑色羊毛", id: 35, data: 15},
  {name: "蒲公英", id: 37, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "棕色蘑菇", id: 39, data: 0},
  {name: "红色蘑菇", id: 40, data: 0},
  {name: "金块", id: 41, data: 0},
  {name: "铁块", id: 42, data: 0},
  {name: "石台阶", id: 44, data: 0},
  {name: "沙石台阶", id: 44, data: 1},
  {name: "圆石台阶", id: 44, data: 3},
  {name: "砖台阶", id: 44, data: 4},
  {name: "石砖台阶", id: 44, data: 5},
  {name: "石英台阶", id: 44, data: 7},
  {name: "砖块", id: 45, data: 0},
  {name: "TNT", id: 46, data: 0},
  {name: "书架", id: 47, data: 0},
  {name: "苔石", id: 48, data: 0},
  {name: "黑曜石", id: 49, data: 0},
  {name: "火把", id: 50, data: 0},
  {name: "火", id: 51, data: 0},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "木楼梯", id: 53, data: 0},
  {name: "箱子", id: 54, data: 0},
  {name: "钻石矿石", id: 56, data: 0},
  {name: "钻石块", id: 57, data: 0},
  {name: "工作台", id: 58, data: 0},
  {name: "耕地", id: 60, data: 0},
  {name: "熔炉", id: 61, data: 0},
  {name: "梯子", id: 65, data: 0},
  {name: "铁轨", id: 66, data: 0},
  {name: "石楼梯", id: 67, data: 0},
  {name: "红石矿石", id: 73, data: 0},
  {name: "雪", id: 78, data: 0},
  {name: "冰", id: 79, data: 0},
  {name: "雪块", id: 80, data: 0},
  {name: "仙人掌", id: 81, data: 0},
  {name: "粘土块", id: 82, data: 0},
  {name: "木栅栏", id: 85, data: 0},
  {name: "南瓜", id: 86, data: 0},
  {name: "地狱岩", id: 87, data: 0},
  {name: "萤石", id: 89, data: 0},
  {name: "南瓜灯", id: 91, data: 0},
  {name: "隐形基岩", id: 95, data: 0},
  {name: "活板门", id: 96, data: 0},
  {name: "石砖", id: 98, data: 0},
  {name: "苔石砖", id: 98, data: 1},
  {name: "裂石砖", id: 98, data: 2},
  {name: "回形石砖", id: 98, data: 3},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "铁栅栏", id: 101, data: 0},
  {name: "玻璃板", id: 102, data: 0},
  {name: "西瓜", id: 103, data: 0},
  {name: "南瓜梗", id: 104, data: 0},
  {name: "西瓜梗", id: 105, data: 0},
  {name: "藤蔓", id: 106, data: 0},
  {name: "栅栏门", id: 107, data: 0},
  {name: "砖楼梯", id: 108, data: 0},
  {name: "石砖楼梯", id: 109, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "莲叶", id: 111, data: 0},
  {name: "地狱砖", id: 112, data: 0},
  {name: "地狱砖楼梯", id: 114, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "末地石", id: 121, data: 0},
  {name: "可可梗", id: 127, data: 0},
  {name: "沙石楼梯", id: 128, data: 0},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "松木楼梯", id: 134, data: 0},
  {name: "桦木楼梯", id: 135, data: 0},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "圆石墙", id: 139, data: 0},
  {name: "苔石墙", id: 139, data: 1},
  {name: "石英方块", id: 155, data: 0},
  {name: "錾石英方块", id: 155, data: 1},
  {name: "柱石英方块", id: 155, data: 2},
  {name: "石英楼梯", id: 156, data: 0},
  {name: "木台阶", id: 158, data: 0},
  {name: "松木台阶", id: 158, data: 1},
  {name: "桦木台阶", id: 158, data: 2},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "黑橡木叶", id: 161, data: 1},
  {name: "金合欢木", id: 162, data: 0},
  {name: "黑橡木", id: 162, data: 1},
  {name: "金合欢木楼梯", id: 163, data: 0},
  {name: "黑橡木楼梯", id: 164, data: 0},
  {name: "干草块", id: 170, data: 0},
  {name: "白色地毯", id: 171, data: 0},
  {name: "橙色地毯", id: 171, data: 1},
  {name: "品红色地毯", id: 171, data: 2},
  {name: "淡蓝色地毯", id: 171, data: 3},
  {name: "黄色地毯", id: 171, data: 4},
  {name: "黄绿色地毯", id: 171, data: 5},
  {name: "粉红色地毯", id: 171, data: 6},
  {name: "灰色地毯", id: 171, data: 7},
  {name: "淡灰色地毯", id: 171, data: 8},
  {name: "青色地毯", id: 171, data: 9},
  {name: "紫色地毯", id: 171, data: 10},
  {name: "蓝色地毯", id: 171, data: 11},
  {name: "棕色地毯", id: 171, data: 12},
  {name: "绿色地毯", id: 171, data: 13},
  {name: "红色地毯", id: 171, data: 14},
  {name: "黑色地毯", id: 171, data: 15},
  {name: "硬化粘土", id: 172, data: 0},
  {name: "煤炭块", id: 173, data: 0},
  {name: "浮冰（不知和冰有何区别）", id: 174, data: 0},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "灰化土", id: 243, data: 0},
  {name: "切石机", id: 245, data: 0},
  {name: "发光的黑曜石", id: 246, data: 0},
  {name: "下界反应核", id: 247, data: 0},
  {name: "更新方块1", id: 248, data: 0},
  {name: "更新方块2", id: 249, data: 0},
  {name: "铁锹", id: 256, data: 0},
  {name: "铁镐", id: 257, data: 0},
  {name: "铁斧", id: 258, data: 0},
  {name: "打火石", id: 259, data: 0},
  {name: "红苹果", id: 260, data: 0},
  {name: "弓", id: 261, data: 0},
  {name: "箭", id: 262, data: 0},
  {name: "煤炭", id: 263, data: 0},
  {name: "木炭", id: 263, data: 1},
  {name: "钻石", id: 264, data: 0},
  {name: "铁锭", id: 265, data: 0},
  {name: "金锭", id: 266, data: 0},
  {name: "铁剑", id: 267, data: 0},
  {name: "木剑", id: 268, data: 0},
  {name: "木锹", id: 269, data: 0},
  {name: "木镐", id: 270, data: 0},
  {name: "木斧", id: 271, data: 0},
  {name: "石剑", id: 272, data: 0},
  {name: "石锹", id: 273, data: 0},
  {name: "石镐", id: 274, data: 0},
  {name: "石斧", id: 275, data: 0},
  {name: "钻石剑", id: 276, data: 0},
  {name: "钻石锹", id: 277, data: 0},
  {name: "钻石镐", id: 278, data: 0},
  {name: "钻石斧", id: 279, data: 0},
  {name: "木棍", id: 280, data: 0},
  {name: "碗", id: 281, data: 0},
  {name: "蘑菇汤", id: 282, data: 0},
  {name: "金剑", id: 283, data: 0},
  {name: "金铲", id: 284, data: 0},
  {name: "金镐", id: 285, data: 0},
  {name: "金斧", id: 286, data: 0},
  {name: "线", id: 287, data: 0},
  {name: "羽毛", id: 288, data: 0},
  {name: "火药", id: 289, data: 0},
  {name: "木锄", id: 290, data: 0},
  {name: "石锄", id: 291, data: 0},
  {name: "铁锄", id: 292, data: 0},
  {name: "钻石锄", id: 293, data: 0},
  {name: "金锄", id: 294, data: 0},
  {name: "小麦种子", id: 295, data: 0},
  {name: "小麦", id: 296, data: 0},
  {name: "面包", id: 297, data: 0},
  {name: "皮革帽子", id: 298, data: 0},
  {name: "皮革外套", id: 299, data: 0},
  {name: "皮革裤子", id: 300, data: 0},
  {name: "皮革靴子", id: 301, data: 0},
  {name: "锁链头盔", id: 302, data: 0},
  {name: "锁链胸甲", id: 303, data: 0},
  {name: "锁链护腿", id: 304, data: 0},
  {name: "锁链靴子", id: 305, data: 0},
  {name: "铁头盔", id: 306, data: 0},
  {name: "铁胸甲", id: 307, data: 0},
  {name: "铁护腿", id: 308, data: 0},
  {name: "铁靴子", id: 309, data: 0},
  {name: "钻石头盔", id: 310, data: 0},
  {name: "钻石胸甲", id: 311, data: 0},
  {name: "钻石护腿", id: 312, data: 0},
  {name: "钻石靴子", id: 313, data: 0},
  {name: "金头盔", id: 314, data: 0},
  {name: "金胸甲", id: 315, data: 0},
  {name: "金护腿", id: 316, data: 0},
  {name: "金靴子", id: 317, data: 0},
  {name: "燧石", id: 318, data: 0},
  {name: "生猪排", id: 319, data: 0},
  {name: "熟猪排", id: 320, data: 0},
  {name: "画", id: 321, data: 0},
  {name: "告示牌", id: 323, data: 0},
  {name: "木门", id: 324, data: 0},
  {name: "桶", id: 325, data: 0},
  {name: "牛奶桶", id: 325, data: 1},
  {name: "水桶", id: 325, data: 8},
  {name: "岩浆桶", id: 325, data: 10},
  {name: "矿车", id: 328, data: 0},
  {name: "鞍", id: 329, data: 0},
  {name: "铁门", id: 330, data: 0},
  {name: "红石", id: 331, data: 0},
  {name: "雪球", id: 332, data: 0},
  {name: "皮革", id: 334, data: 0},
  {name: "红砖", id: 336, data: 0},
  {name: "粘土", id: 337, data: 0},
  {name: "甘蔗", id: 338, data: 0},
  {name: "纸", id: 339, data: 0},
  {name: "书", id: 340, data: 0},
  {name: "粘液球", id: 341, data: 0},
  {name: "蛋", id: 344, data: 0},
  {name: "指南针", id: 345, data: 0},
  {name: "钟", id: 347, data: 0},
  {name: "萤石粉", id: 348, data: 0},
  {name: "墨囊（染料）", id: 351, data: 0},
  {name: "玫瑰红（染料）", id: 351, data: 1},
  {name: "仙人掌绿（染料）", id: 351, data: 2},
  {name: "可可豆（染料）", id: 351, data: 3},
  {name: "青金石（染料）", id: 351, data: 4},
  {name: "紫色染料", id: 351, data: 5},
  {name: "青色染料", id: 351, data: 6},
  {name: "淡灰色染料", id: 351, data: 7},
  {name: "灰色染料", id: 351, data: 8},
  {name: "粉红色染料", id: 351, data: 9},
  {name: "黄绿色染料", id: 351, data: 10},
  {name: "蒲公英黄（染料）", id: 351, data: 11},
  {name: "淡蓝色染料", id: 351, data: 12},
  {name: "品红色染料", id: 351, data: 13},
  {name: "橙色染料", id: 351, data: 14},
  {name: "骨粉", id: 351, data: 15},
  {name: "骨头", id: 352, data: 0},
  {name: "糖", id: 353, data: 0},
  {name: "蛋糕", id: 354, data: 0},
  {name: "床", id: 355, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "剪刀", id: 359, data: 0},
  {name: "西瓜片", id: 360, data: 0},
  {name: "南瓜种子", id: 261, data: 0},
  {name: "西瓜种子", id: 362, data: 0},
  {name: "生牛肉", id: 363, data: 0},
  {name: "牛排", id: 364, data: 0},
  {name: "生鸡肉", id: 365, data: 0},
  {name: "熟鸡肉", id: 366, data: 0},
  {name: "生成鸡", id: 383, data: 10},
  {name: "生成牛", id: 383, data: 11},
  {name: "生成猪", id: 383, data: 12},
  {name: "生成羊", id: 383, data: 13},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "绿宝石", id: 388, data: 0},
  {name: "胡萝卜", id: 391, data: 0},
  {name: "马铃薯", id: 392, data: 0},
  {name: "烤马铃薯", id: 393, data: 0},
  {name: "南瓜派", id: 400, data: 0},
  {name: "地狱砖", id: 405, data: 0},
  {name: "地狱石英", id: 406, data: 0},
  {name: "甜菜", id: 457, data: 0},
  {name: "甜菜种子", id: 458, data: 0},
  {name: "甜菜汤", id: 459, data: 0}];
var CAT_BUILDING_ITEMS = [
  {name: "丛林木板", id: 5, data: 3},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "丛林木", id: 17, data: 3},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "金合欢木", id: 162, data: 0},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "金合欢木楼梯", id: 163, data: 0},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木木板", id: 5, data: 5},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "黑橡木", id: 162, data: 1},
  {name: "黑橡木叶", id: 161, data: 1},
  {name: "黑橡木楼梯", id: 164, data: 0},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "灰化土", id: 243, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "莲叶", id: 111, data: 0},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "红沙", id: 12, data: 1},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "绿宝石", id: 388, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "末地石", id: 121, data: 0},
  {name: "可可梗", id: 127, data: 0},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "藤蔓", id: 106, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "硬化粘土", id: 172, data: 0}];
var CAT_DECORATION_ITEMS = [
  {name: "圆石", id: 4, data: 0},
  {name: "石砖", id: 98, data: 0},
  {name: "苔石砖", id: 98, data: 1},
  {name: "裂石砖", id: 98, data: 2},
  {name: "回形石砖", id: 98, data: 3},
  {name: "苔石", id: 48, data: 0},
  {name: "木板", id: 5, data: 0},
  {name: "松木板", id: 5, data: 1},
  {name: "桦木板", id: 5, data: 2},
  {name: "丛林木板", id: 5, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "黑橡木板", id: 5, data: 5},
  {name: "红砖", id: 45, data: 0},
  {name: "石头", id: 1, data: 0},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "灰化土", id: 243, data: 0},
  {name: "泥土", id: 3, data: 0},
  {name: "草方块", id: 2, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "粘土块", id: 82, data: 0},
  {name: "硬化粘土", id: 172, data: 0},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "沙石", id: 24, data: 0},
  {name: "錾制沙石", id: 24, data: 1},
  {name: "平滑沙石", id: 24, data: 2},
  {name: "沙子", id: 12, data: 0},
  {name: "红沙", id: 12, data: 1},
  {name: "砂砾", id: 13, data: 0},
  {name: "木头", id: 17, data: 0},
  {name: "松木", id: 17, data: 1},
  {name: "桦木", id: 17, data: 2},
  {name: "丛林木", id: 17, data: 3},
  {name: "金合欢木", id: 162, data: 0},
  {name: "黑橡木", id: 162, data: 1},
  {name: "地狱砖", id: 112, data: 0},
  {name: "地狱岩", id: 87, data: 0},
  {name: "基岩", id: 7, data: 0},
  {name: "圆石楼梯", id: 67, data: 0},
  {name: "木楼梯", id: 53, data: 0},
  {name: "松木楼梯", id: 134, data: 0},
  {name: "桦木楼梯", id: 135, data: 0},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "砖楼梯", id: 108, data: 0},
  {name: "沙石楼梯", id: 128, data: 0},
  {name: "石砖楼梯", id: 109, data: 0},
  {name: "地狱砖楼梯", id: 114, data: 0},
  {name: "石英楼梯", id: 156, data: 0},
  {name: "石台阶", id: 44, data: 1},
  {name: "圆石台阶", id: 44, data: 3},
  {name: "木台阶", id: 158, data: 0},
  {name: "松木台阶", id: 158, data: 1},
  {name: "桦木台阶", id: 158, data: 2},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "砖台阶", id: 44, data: 4},
  {name: "沙石台阶", id: 44, data: 1},
  {name: "石砖台阶", id: 44, data: 5},
  {name: "石英台阶", id: 44, data: 7},
  {name: "石英方块", id: 155, data: 0},
  {name: "柱石英方块", id: 155, data: 2},
  {name: "錾石英方块", id: 155, data: 1},
  {name: "煤矿石", id: 16, data: 0},
  {name: "铁矿石", id: 15, data: 0},
  {name: "金矿石", id: 14, data: 0},
  {name: "钻石矿石", id: 56, data: 0},
  {name: "青金石矿石", id: 21, data: 0},
  {name: "红石矿石", id: 73, data: 0},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "黑曜石", id: 49, data: 0},
  {name: "冰", id: 79, data: 0},
  {name: "雪块", id: 80, data: 0},
  {name: "末地石", id: 121, data: 0}];
var CAT_ARMOUR_ITEMS = [
  {name: "圆石墙", id: 139, data: 0},
  {name: "苔石墙", id: 139, data: 1},
  {name: "莲叶", id: 111, data: 0},
  {name: "金块", id: 41, data: 0},
  {name: "铁块", id: 42, data: 0},
  {name: "钻石块", id: 57, data: 0},
  {name: "青金石块", id: 22, data: 0},
  {name: "煤炭块", id: 173, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "雪", id: 78, data: 0},
  {name: "玻璃", id: 20, data: 0},
  {name: "萤石", id: 89, data: 0},
  {name: "藤蔓", id: 106, data: 0},
  {name: "下界反应核", id: 247, data: 0},
  {name: "梯子", id: 65, data: 0},
  {name: "海绵", id: 19, data: 0},
  {name: "玻璃板", id: 102, data: 0},
  {name: "木门", id: 324, data: 0},
  {name: "活版门", id: 96, data: 0},
  {name: "木栅栏", id: 85, data: 0},
  {name: "栅栏门", id: 107, data: 0},
  {name: "铁栅栏", id: 101, data: 0},
  {name: "床", id: 355, data: 0},
  {name: "书架", id: 47, data: 0},
  {name: "画", id: 321, data: 0},
  {name: "工作台", id: 58, data: 0},
  {name: "切石机", id: 245, data: 0},
  {name: "箱子", id: 54, data: 0},
  {name: "熔炉", id: 61, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "蒲公英", id: 37, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "棕色蘑菇", id: 39, data: 0},
  {name: "红色蘑菇", id: 40, data: 0},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "仙人掌", id: 81, data: 0},
  {name: "西瓜", id: 103, data: 0},
  {name: "南瓜", id: 86, data: 0},
  {name: "南瓜灯", id: 91, data: 0},
  {name: "蜘蛛网", id: 30, data: 0},
  {name: "干草块", id: 170, data: 0},
  {name: "草", id: 31, data: 1},
  {name: "灌木", id: 31, data: 2},
  {name: "枯死的灌木", id: 32, data: 0},
  {name: "树苗", id: 6, data: 0},
  {name: "松树苗", id: 6, data: 1},
  {name: "桦树苗", id: 6, data: 2},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "树叶", id: 18, data: 0},
  {name: "松树叶", id: 18, data: 1},
  {name: "桦树叶", id: 18, data: 2},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "黑橡树叶", id: 161, data: 1},
  {name: "蛋糕", id: 354, data: 0},
  {name: "告示牌", id: 323, data: 0},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "白色羊毛", id: 35, data: 0},
  {name: "橙色羊毛", id: 35, data: 1},
  {name: "品红色羊毛", id: 35, data: 2},
  {name: "淡蓝色羊毛", id: 35, data: 3},
  {name: "黄色羊毛", id: 35, data: 4},
  {name: "黄绿色羊毛", id: 35, data: 5},
  {name: "粉红色羊毛", id: 35, data: 6},
  {name: "灰色羊毛", id: 35, data: 7},
  {name: "淡灰色羊毛", id: 35, data: 8},
  {name: "青色羊毛", id: 35, data: 9},
  {name: "紫色羊毛", id: 35, data: 10},
  {name: "蓝色羊毛", id: 35, data: 11},
  {name: "棕色羊毛", id: 35, data: 12},
  {name: "绿色羊毛", id: 35, data: 13},
  {name: "红色羊毛", id: 35, data: 14},
  {name: "黑色羊毛", id: 35, data: 15},
  {name: "白色地毯", id: 171, data: 0},
  {name: "橙色地毯", id: 171, data: 1},
  {name: "品红色地毯", id: 171, data: 2},
  {name: "淡蓝色地毯", id: 171, data: 3},
  {name: "黄色地毯", id: 171, data: 4},
  {name: "黄绿色地毯", id: 171, data: 5},
  {name: "粉红色地毯", id: 171, data: 6},
  {name: "灰色地毯", id: 171, data: 7},
  {name: "淡灰色地毯", id: 171, data: 8},
  {name: "青色地毯", id: 171, data: 9},
  {name: "紫色地毯", id: 171, data: 10},
  {name: "蓝色地毯", id: 171, data: 11},
  {name: "棕色地毯", id: 171, data: 12},
  {name: "绿色地毯", id: 171, data: 13},
  {name: "红色地毯", id: 171, data: 14},
  {name: "黑色地毯", id: 171, data: 15}];
var CAT_TOOLS_ITEMS = [
  {name: "打火石", id: 259, data: 0},
  {name: "弓", id: 261, data: 0},
  {name: "箭", id: 262, data: 0},
  {name: "剪刀", id: 359, data: 0},
  {name: "钻石剑", id: 276, data: 0},
  {name: "钻石锹", id: 277, data: 0},
  {name: "钻石镐", id: 278, data: 0},
  {name: "钻石锄", id: 293, data: 0},
  {name: "钻石斧", id: 279, data: 0},
  {name: "金剑", id: 283, data: 0},
  {name: "金锹", id: 284, data: 0},
  {name: "金镐", id: 285, data: 0},
  {name: "金锄", id: 294, data: 0},
  {name: "金斧", id: 286, data: 0},
  {name: "铁剑", id: 267, data: 0},
  {name: "铁锹", id: 256, data: 0},
  {name: "铁镐", id: 257, data: 0},
  {name: "铁锄", id: 292, data: 0},
  {name: "铁斧", id: 258, data: 0},
  {name: "石剑", id: 272, data: 0},
  {name: "石锹", id: 273, data: 0},
  {name: "石镐", id: 274, data: 0},
  {name: "石锄", id: 291, data: 0},
  {name: "石斧", id: 275, data: 0},
  {name: "木剑", id: 268, data: 0},
  {name: "木锹", id: 269, data: 0},
  {name: "木镐", id: 270, data: 0},
  {name: "木锄", id: 290, data: 0},
  {name: "木斧", id: 271, data: 0},
  {name: "皮革头盔", id: 298, data: 0},
  {name: "皮革胸甲", id: 299, data: 0},
  {name: "皮革护腿", id: 300, data: 0},
  {name: "皮革靴子", id: 301, data: 0},
  {name: "锁链头盔", id: 302, data: 0},
  {name: "锁链胸甲", id: 303, data: 0},
  {name: "锁链护腿", id: 304, data: 0},
  {name: "锁链靴子", id: 305, data: 0},
  {name: "铁头盔", id: 306, data: 0},
  {name: "铁胸甲", id: 307, data: 0},
  {name: "铁护腿", id: 308, data: 0},
  {name: "铁靴子", id: 309, data: 0},
  {name: "钻石头盔", id: 310, data: 0},
  {name: "钻石胸甲", id: 311, data: 0},
  {name: "钻石护腿", id: 312, data: 0},
  {name: "钻石靴子", id: 313, data: 0},
  {name: "金头盔", id: 314, data: 0},
  {name: "金胸甲", id: 315, data: 0},
  {name: "金护腿", id: 316, data: 0},
  {name: "金靴子", id: 317, data: 0},
  {name: "鸡生物蛋", id: 383, data: 10},
  {name: "牛生物蛋", id: 383, data: 11},
  {name: "猪生物蛋", id: 383, data: 12},
  {name: "羊生物蛋", id: 383, data: 13},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "铁桶", id: 325, data: 0},
  {name: "水", id: 8, data: 0},
  {name: "静止的水", id: 9, data: 0},
  {name: "岩浆", id: 10, data: 0},
  {name: "静止的岩浆", id: 11, data: 0},
  {name: "动力铁轨", id: 27, data: 0},
  {name: "铁轨", id: 66, data: 0},
  {name: "钟", id: 347, data: 0},
  {name: "指南针", id: 345, data: 0},
  {name: "火把", id: 50, data: 0},
  {name: "TNT", id: 46, data: 0}];
var CAT_FOOD_ITEMS = [
  {name: "苹果", id: 260, data: 0},
  {name: "蘑菇汤", id: 282, data: 0},
  {name: "生猪排", id: 319, data: 0},
  {name: "熟猪排", id: 320, data: 0},
  {name: "生牛排", id: 363, data: 0},
  {name: "熟牛排", id: 364, data: 0},
  {name: "生鸡肉", id: 365, data: 0},
  {name: "熟鸡肉", id: 366, data: 0},
  {name: "墨囊（染料）", id: 351, data: 0},
  {name: "玫瑰红（染料）", id: 351, data: 1},
  {name: "仙人掌绿（染料）", id: 351, data: 2},
  {name: "可可豆（染料）", id: 351, data: 3},
  {name: "青金石（染料）", id: 351, data: 4},
  {name: "紫色染料", id: 351, data: 5},
  {name: "青色染料", id: 351, data: 6},
  {name: "浅灰色染料", id: 351, data: 7},
  {name: "深灰色染料", id: 351, data: 8},
  {name: "浅粉色染料", id: 351, data: 9},
  {name: "浅绿色染料", id: 351, data: 10},
  {name: "蒲公英黄（染料）", id: 351, data: 11},
  {name: "浅蓝色染料", id: 351, data: 12},
  {name: "深粉色染料", id: 351, data: 13},
  {name: "橙色染料", id: 351, data: 14},
  {name: "骨粉", id: 351, data: 15},
  {name: "甜菜", id: 457, data: 0},
  {name: "甜菜种子", id: 458, data: 0},
  {name: "甜菜汤", id: 459, data: 0},
  {name: "南瓜派", id: 400, data: 0},
  {name: "胡萝卜", id: 391, data: 0},
  {name: "土豆", id: 392, data: 0},
  {name: "烤土豆", id: 393, data: 0},
  {name: "南瓜种子", id: 361, data: 0},
  {name: "甘蔗", id: 338, data: 0},
  {name: "小麦", id: 296, data: 0},
  {name: "麦种", id: 295, data: 0},
  {name: "鸡蛋", id: 344, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "面包", id: 297, data: 0}];

var cat=[[CAT_STARTER_KIT_ITEMS,"全部物品"],[CAT_BUILDING_ITEMS,"建筑方块"],[ CAT_BUILDING_ITEMS,"0.9.x新增物品"],[CAT_ARMOUR_ITEMS,"装饰方块"],[CAT_TOOLS_ITEMS,"工具与运输"],[ CAT_FOOD_ITEMS,"食物与染料"],]

var last=[0,0,0]
var shuangji=false
//撤销
var chickreply=false
var classreply=[["起始"]]
var settilelist=[]
var settilechick=true
function settile(x,y,z,i,b){
if(chickreply){
classreply[0].unshift([x,y,z,getTile(x,y,z),Level.getData(x,y,z)])
}
if(settilechick){settilelist.push([x,y,z,i,b])}else{setTile(x,y,z,i,b)}
}



function useItem(x,y,z,i,b,s,id,bd)
{
if(i==267||i==325){i=0,id=0}

if(shuangji){
if(xx==x&&yy==y&&zz==z){shuangjis(b,bd)}}
xx=x
yy=y
zz=z
if(i!=0){
switch(s) {
case 0:y-=1;break;
case 1:y+=1;break; 
case 2:z-=1;break;
case 3:z+=1;break;
case 4:x-=1;break;
case 5:x+=1;break;
}} 

if(i==323){i=68
if(s==1)i=63
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
var t=0
xc.sleep(3)
if(i==68){
var t=0
switch(s){
//case 0:t=0;break;
//case 1:t=1;break; 
case 2:t=2;break;
case 3:t=3;break;
case 4:t=4;break;
case 5:t=5;break;
}
setTile(x,y,z,68,t)}
else{
var m=Math.floor((((getYaw()+11.25)%360+360)%360)/360*16)///
setTile(x,y,z,63,m)
}
}}))
if(noworld&&getTile(x,y,z)==0){xc.start();
preventDefault();}
}
else if(i==325)i=id

x=x+pianyilist[0]
y=y+pianyilist[1]
z=z+pianyilist[2]

if(i==347){gyentity(x,y,z,entitychange)}
if(i==345){
clientMessage("位置: x="+x+",y="+y+",z="+z+",Id="+b+",bd="+bd+"\n"+"距上次查询，x="+(x-last[0])+",y="+(y-last[1])+",z="+(z-last[2])+",净距离="+Math.floor(Math.sqrt((last[0]-x)*(last[0]-x)+(last[1]-y)*(last[1]-y)+(last[2]-z)*(last[2]-z))*100)*0.01)
last=[x,y,z]}
if(i<256){

if(settilechick){
if(swi==1){
set(x,y,z,i,id,s)
}
else{
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
if(che==1){print2("上一个功能未完成")}else{
che++
cubi(x,y,z,i,id) 
chickround(x,y,z,i,id) 
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)
che--}
}}))
xc.start()}
}else{
if(swi==1){set(x,y,z,i,id)}
else{
cubi(x,y,z,i,id) 
chickround(x,y,z,i,id) 
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)}
}}
}





function entityRemovedHook(entity)
{
if(Entity.getEntityTypeId(entity)==81)
{var i
for(i in rpgs){
if(entity==rpgs[i]){
explode(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity),5);
if(i>1000){rpgs=rpgs.slice(0,100);break;}
}}}
}

function levelEventHook(entity,eventType,x,y,z,data)
{
//print2(entity+","+eventType+","+x+","+y+","+z+","+data)
//开关门数据为1003，羊吃草的数据为2001,睡觉的数据为9800
if(actionlist[0][2]==eventType&&actionlist[0][1]==true){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
setTile(x,y,z,2);
}}),2);
}}))}
}

var rideent=null
function attackHook(attacker,victim)
{
//print(Entity.getEntityTypeId(attacker)+","+Entity.getEntityTypeId(victim))
//rideAnimal(player,target);
var m=Entity.getEntityTypeId(attacker)
var n=Entity.getEntityTypeId(victim)
if(m==0&&Player.getCarriedItem()==345){
preventDefault();
if(rideent==null){rideent=victim;print2("设置骑的")}
else{
rideAnimal(rideent,victim);
rideent=null
print2("骑。上去")
}
}
if(actionlist[1][1]==true){preventDefault()}
}


var playerent=null

function getplayerent()
{return getPlayerEnt()}

function entityAddedHook(ent){
var s=Entity.getEntityTypeId(ent);
if(playerent==null){if(s==0)playerent=ent}
if(s!=0){
for(ssss in entstop)
{
if(entstop[ssss][0]==true&&entstop[ssss][1]==true){Entity.remove(ent);break;}
else if(entstop[ssss][0]==s&&entstop[ssss][1]==true){Entity.remove(ent);break;}
}
}
}



function gyentity(x,y,z,m)
{Level.spawnMob(x+0.5,y+0.2,z+0.5,m)}


function set(x,y,z,u,id,s){
var xxx=xx,yyy=yy,zzz=zz
switch(s) {
case 0:yyy-=1;break;
case 1:yyy+=1;break; 
case 2:zzz-=1;break;
case 3:zzz+=1;break;
case 4:xxx-=1;break;
case 5:xxx+=1;break;
}
var mt=getTile(xxx,yyy,zzz)
var vm=Level.getData(xxx,yyy,zzz)
var a=crd,b=swifz,c=geotype,d=cub
isprint=false
che++
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
xc.sleep(30)
l=parseInt(l)
var j=parseInt(jg)
var nt=getTile(xxx,yyy,zzz)
var vt=Level.getData(xxx,yyy,zzz)
if(u==0){nt=0;vt=0}
if(mt!=nt||vt!=vm||u==0||crd!=null||swifz!=0||geotype!=0||cub!=0){
if(fzfx==2){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x+i*zj,y,z,nt,vt)
if(setchi)sset(x+i*zj,y,z,u,id,a,b,c,d)
}
}}

if(fzfx==1){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x,y+i*zj,z,nt,vt)
if(setchi)sset(x,y+i*zj,z,u,id,a,b,c,d)
}}}

if(fzfx==3){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x,y,z+i*zj,nt,vt)
if(setchi)sset(x,y,z+i*zj,u,id,a,b,c,d)
}
}}
isprint=true
che--
print2("完成")
}else{
isprint=true
print2("放置失败")}
}}));xc.start()
}


function sset(x,y,z,i,id,a,b,c,d){
crd=a
swifz=b
geotype=c
cub=d
cleans()
cubi(x,y,z,i,id)
chickround(x,y,z,i,id)
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)
cleans()
}



function print2(str){
if(isprint){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
android.widget.Toast.makeText(ctx,str,0).show()
}
}
)
)
}
}


function dip2px(ctx, dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 



function newLevel(){
	if(isGame)
	{
		return;
	}
	isGame=true;
//addu()
//ftype()
classreply=[["起始"]] 
playerent=null
win()
win2()
entstop=[]
for(ssss in entityretype)
{entstop.push([entityretype[ssss],false])}
}


function leaveGame()
{if(!isGame)
	{
		return;
	}
	isGame=false;
option_xyz=false
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
if(btn!=null)btn.dismiss();btn=null;n=null
if(openWindow != null)openWindow.dismiss();openWindow = null;

if(rpgGUI != null){
rpgGUI.dismiss();
rpgGUI=null
}
			if(xyzWindow != null){
				xyzWindow.dismiss();
				xyzWindow = null;
			}
			if(guis!= null){
				guis.dismiss();
				guis = null;
			}
			if(longset!= null){
				longset.dismiss();
				longset = null;
			}
			if(smallmapgui!= null){
				smallmapgui.dismiss();
				smallmapgui = null;
			}
}}))}








function ftype(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

dp = ctx.getResources().getDisplayMetrics().density;

var mX,mY;
tpopx = 5*dp;
tpopy = 25*dp;

var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1)   
btn=new android.widget.Button(ctx);
btn.setTextSize(10) 
btn.setText("X增方向:"+"..."+"\n放置长度:"+l+"\n放置间隔:"+jg+"\n放置Id:"+"……"+"\n存档:"+(parseInt(copytime)+1)+"\n\n");
btn.setBackgroundColor(android.graphics.Color.argb(50,255,255,255));
n=btn
btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
mX=e.getX();
mY=e.getY();
break;
case 2:
var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx = tpopx + delX;
tpopy = tpopy + delY;
btn.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
break;
}
return true;
}
}));
layout.addView(btn);
btn=new android.widget.PopupWindow(layout,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.28, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.28); 
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);
updata()
}catch(err){
clientMessage("错误:"+err);

}}}))}






function win(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setText("E");
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
				openMenu();
			
					}
				});
				layout.addView(B_we);
				
 
ctx.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
 
				openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.3);
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}
function win2(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setText("▲");
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
			 var q=allofgytype[4]
if(q==0)crd=allofgytype[q]
if(q==1)swifz=allofgytype[q]
if(q==2)geotype=allofgytype[q]
if(q==3)cub=allofgytype[q]
cleans()
print2("已恢复上一次功能")

					}
				});
				layout.addView(B_we);
				
				var openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.6);
				guis=openWindow
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}
function win3(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setText("F");
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
setTile(longgetsave[0],longgetsave[1],longgetsave[2],0)
longgetsave[3]=false
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var x,y,z
x=-Math.sin(a)*Math.cos(b)
y=-Math.sin(b)
z=Math.cos(a)*Math.cos(b)
var X=Entity.getX(getplayerent()),Y=Entity.getY(getplayerent()),Z=Entity.getZ(getplayerent())
for(var i=0;i<100;i++){
var g=getTile(X+x*i,Y+y*i,Z+z*i)
if(g!=0&&i>0&&Player.getCarriedItem()<256){
setTile(X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),Player.getCarriedItemData());useitem([X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),g,null,Player.getCarriedItemData(),Level.getData(X+x*(i-1),Y+y*(i-1),Z+z*(i-1))]);break}
else if(g!=0&&i>0&&Player.getCarriedItem()==267){
setTile(X+x*i,Y+y*i,Z+z*i,0);useitem([X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),g,null,Player.getCarriedItemData(),Level.getData(X+x*(i-1),Y+y*(i-1),Z+z*(i-1))]);break}}
					}
				});
				layout.addView(B_we);
				
				var openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.45);
				longset=openWindow
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}



function openMenu(){
 
 var layout=new android.widget.LinearLayout(ctx) 
  try{
   var menu=new android.widget.PopupWindow(layout, dip2px(ctx,85 ), dip2px(ctx, 35)); 
   menu.setFocusable(true)
   mainMenu=menu
   var layout=new android.widget.LinearLayout(ctx)
   layout.setOrientation(1)

   var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
   textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
   var title=new android.widget.TextView(ctx);
   title.setTextSize(24)
   title.setTextColor(android.graphics.Color.rgb(255,255,255));
   title.setText("快速建造菜单")
   title.setLayoutParams(textParams)
   layout.addView(title)
   var stitle=new android.widget.TextView(ctx)
   stitle.setTextSize(13)
   stitle.setTextColor(android.graphics.Color.rgb(255,255,255));
   stitle.setText("6g3y mcpe的作死大神\n服务器支持由风鸟修改")
   stitle.setLayoutParams(textParams)
   layout.addView(stitle)
   
 var button=new android.widget.Button(ctx)
 button.setText("终极菜单")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    zjcd()
 }}))
 layout.addView(button)   


 var buttonk=new android.widget.Button(ctx)
if(swi==1){buttonk.setText("放置开关(开)")}
else if(swi==0){buttonk.setText("放置开关(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(swi==0)
    {buttonk.setText("放置开关(开)");
    swi=1;clientMessage("铁剑或水桶删除方块");}
    else if(swi==1)
    {buttonk.setText("放置开关(关)");
    swi=0}
 }}))
 layout.addView(buttonk)   
 

  var button=new android.widget.Button(ctx)
 button.setText("编辑世界")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    gameset()
 }}))
 layout.addView(button)   
 
 
  var button=new android.widget.Button(ctx)
 button.setText("编辑方块")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockchange()
 }}))
 layout.addView(button)   
 
 
  var button=new android.widget.Button(ctx)
 button.setText("添加物品")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    joinitem()
 }}))
 layout.addView(button)    
 
 
 var button=new android.widget.Button(ctx)
 button.setText("几何体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    geometry() 
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("复制粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   gcopy()
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("自然景观")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   dixingmune()
 }}))
 layout.addView(button)   
 
 
 
 var button=new android.widget.Button(ctx)
 button.setText("特殊")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   special()
 }}))
 layout.addView(button)   
 
 
   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0)
 }catch(err){
    print2("错误: "+err+".")
 }
}
function makeMenu(ctx,menu,layout){
  var mlayout=new android.widget.RelativeLayout(ctx)
 var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
var scrollview=new android.widget.ScrollView(ctx)
 var pad = dip2px(ctx,5)
 scrollview.setPadding(pad,pad,pad,pad)
 scrollview.setLayoutParams(svParams)
 scrollview.addView(layout)
 mlayout.addView(scrollview)
 return mlayout
}

function TooManyItems(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
//TooManyItems
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var amount = new android.widget.EditText(ctx);
var data = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("添加")
id.setHint("物品数据（ID）");
amount.setHint("数量");
data.setHint("特殊数据值");
id.setInputType(number);
amount.setInputType(number);
data.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(amount);
tmiLayout.addView(data);
tmiLayout.addView(add);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("添加物品");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
var itemId = parseInt(id.getText());
var iAmount = parseInt(amount.getText());
var iData = parseInt(data.getText());

if(itemId == null){itemId = "0";}

if(data == null){data = "0";}

if(iAmount>0){}else{iAmount = "1"}

Player.addItemInventory(itemId,iAmount, iData);
if(Level.getGameMode() == 1){
Entity.setCarriedItem(getplayerent(), itemId, iAmount, iData);
}
tmiDialog.dismiss();
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}





function zjcd(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)


var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("设置终极功能")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//长度text
var s1=new android.widget.TextView(ctx)
s1.setTextSize(14)
s1.setText("放置长度:")
s1.setTextColor(android.graphics.Color.rgb(255,255,255));
s1.setLayoutParams(textParams)
layout.addView(s1)
//长度输入框
var cd=new android.widget.EditText(ctx)
cd.setText(l>=0?String(l):"0")
cd.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(cd)
//间隔text
var s2=new android.widget.TextView(ctx)
s2.setTextSize(14)
s2.setText("放置间隔:")
s2.setTextColor(android.graphics.Color.rgb(255,255,255));
s2.setLayoutParams(textParams)
layout.addView(s2)
//长度输入框
var j=new android.widget.EditText(ctx)
j.setText(jg>=0?String(jg):"0")
j.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(j)
//增减
 var buttony=new android.widget.Button(ctx)
if(zj==1){buttony.setText("方向(增)")}
else if(zj==-1){buttony.setText("方向(减)")} 
 buttony.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(zj==-1)
    {buttony.setText("方向(增)");
    zj=1}
    else if(zj==1)
    {buttony.setText("方向(减)");
    zj=-1}
 }}))
 layout.addView(buttony)    
  //X
 var buttonx=new android.widget.Button(ctx)
if(fzfx==1){buttonx.setText("方向(Y)")}
else if(fzfx==2){buttonx.setText("方向(X)")} 
else if(fzfx==3){buttonx.setText("方向(Z)")} 
 buttonx.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(fzfx==1)
    {buttonx.setText("方向(X)");
    fzfx=2}
    else if(fzfx==2)
    {buttonx.setText("方向(Z)");
    fzfx=3}    
    else if(fzfx==3)
    {buttonx.setText("方向(Y)");
    fzfx=1}
 }}))
 layout.addView(buttonx)      
  

		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("单点功能适用");
		C_xyz.setChecked(setchi);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			setchi = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);



//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("确认")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  l=cd.getText()
  jg=j.getText()
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function gcopy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("复制粘贴")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("复制设置")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nocopy()
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("选点复制")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    swifz=null
    clientMessage("点击两点，复制范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   
 

 var button=new android.widget.Button(ctx)
 button.setText("替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  tihuan()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   
 

 var button=new android.widget.Button(ctx)
 button.setText("实验性粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  experimentcopy()  
if(biockgroup[copytime]!=[]){swifz=1}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)   

 
  var button=new android.widget.Button(ctx)
 button.setText("选点粘贴(无放置空气)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  clientMessage("铁剑或水桶粘贴"); if(biockgroup[copytime]!=[]){swifz=2}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)    

 var button=new android.widget.Button(ctx)
 button.setText("选点粘贴(略慢)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  clientMessage("铁剑或水桶粘贴"); if(biockgroup[copytime]!=[]){swifz=1}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("输入复制(略慢)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    forcopy(1)
 }}))
 layout.addView(button)   

 var button=new android.widget.Button(ctx)
 button.setText("输入粘贴(无放置空气)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  setcopy(0)
 }}))
 layout.addView(button)   
 
 var button=new android.widget.Button(ctx)
 button.setText("输入粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  setcopy(0)
 }}))
 layout.addView(button)    
 


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function tihuan(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("替换")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

 var button=new android.widget.Button(ctx)
 button.setText("选点替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    replacess()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   


 var button=new android.widget.Button(ctx)
 button.setText("高级检查替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    replacess2()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}





function forcopy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("输入复制")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//点1
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第一点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x1=new android.widget.EditText(ctx)
x1.setText("0")
x1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x1)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y1=new android.widget.EditText(ctx)
y1.setText("0")
y1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y1)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z1=new android.widget.EditText(ctx)
z1.setText("0")
z1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z1)

layout.addView(layouts)

//点2
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第二点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x2=new android.widget.EditText(ctx)
x2.setText("0")
x2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x2)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y2=new android.widget.EditText(ctx)
y2.setText("0")
y2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y2)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z2=new android.widget.EditText(ctx)
z2.setText("0")
z2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z2)

layout.addView(layouts)


//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("复制")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  copyblock(x1.getText(),y1.getText(),z1.getText(),x2.getText(),y2.getText(),z2.getText())
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}



function setcopy(n){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("输入粘贴")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//点1
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第一点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x1=new android.widget.EditText(ctx)
x1.setText("0")
x1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x1)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y1=new android.widget.EditText(ctx)
y1.setText("0")
y1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y1)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z1=new android.widget.EditText(ctx)
z1.setText("0")
z1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z1)

layout.addView(layouts)

//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("粘贴")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(n=1){
  setblock(x1.getText(),y1.getText(),z1.getText())}
  else{setblockwithout0(x1.getText(),y1.getText(),z1.getText())}
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}




function geometry(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("几何体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var buttonk=new android.widget.Button(ctx)
if(geotype==1){buttonk.setText("连线(开)")}
else if(geotype!=1){buttonk.setText("连线(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
    if(geotype!=1)
    {buttonk.setText("连线(开)");
    buttonm.setText("三点一面(关)");
    geotype=1;clientMessage("记得关");}
    else if(geotype==1)
    {buttonk.setText("连线(关)");
    geotype=0}
 }}))
 layout.addView(buttonk)    




var buttonm=new android.widget.Button(ctx)
if(geotype==2){buttonm.setText("三点一面(开)")}
else if(geotype!=2){buttonm.setText("三点一面(关)")} 

buttonm.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
    if(geotype!=2)
    {buttonm.setText("三点一面(开)");
    buttonk.setText("连线(关)");
    geotype=2;clientMessage("记得关");}
    else if(geotype==2)
    {buttonm.setText("三点一面(关)");
    geotype=0}
}}))
layout.addView(buttonm)  


var button=new android.widget.Button(ctx)
button.setText("测量工具")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  readtool()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("自定义角度")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  noj()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆/球")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  roundwindows()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("长方体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cuboidwindows()  
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("无底圆几何体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  roundwindow2()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("多边形")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  polygons()
}}))
layout.addView(button)  


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function special(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("特殊")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s) 


var button=new android.widget.Button(ctx)
button.setText("悬浮窗开关")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(btn!=null){btn.dismiss();btn=null;n=null}else{ftype()}
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("脚下生方块")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var x=parseInt(Entity.getX(getplayerent()))
var y=parseInt(Entity.getY(getplayerent())-2)
var z=parseInt(Entity.getZ(getplayerent()))
settile(x,y,z,1)
clientMessage("x="+x+",y="+y+",z="+z)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("像素画")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
intopit()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("模拟点击方块")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
touchblock()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("点击坐标偏移")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
pianyiset()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("远距离放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(longgetchick==false){longgetchick=true;longget();print2("开启120格远距离模式");win3()}
else{longgetchick=false
			if(longset!= null){
				longset.dismiss();
				longset = null;
			}
}
}}))
layout.addView(button)  



var button=new android.widget.Button(ctx)
button.setText("撤销")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
replys()
}}))
layout.addView(button)   



var button=new android.widget.Button(ctx)
button.setText("快速毁图")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(rpgGUI==null)myrpg()
else {rpgGUI.dismiss();
rpgGUI=null}
clientMessage("点击按钮发射机关炮")
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("一键超平坦")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  caopingtan()
}}))
layout.addView(button)  


 var buttonk=new android.widget.Button(ctx)
if(pl[0]==1){buttonk.setText("铺路(开)")}
else if(pl[0]==0){buttonk.setText("铺路(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(pl[0]==0)
    {buttonk.setText("铺路(开)");
    pl[0]=1;clientMessage("记得关");}
    else if(pl[0]==1)
    {buttonk.setText("铺路(关)");
    pl[0]=0}
 }}))
 layout.addView(buttonk)    
 
var button=new android.widget.Button(ctx)
button.setText("铺路设置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  plset()
  buttonk.setText("铺路(关)");
    pl[0]=0
}}))
layout.addView(button)  
 
 
  var buttons=new android.widget.Button(ctx)
if(dx==1){buttons.setText("自动洞穴(开)")}
else if(dx==0){buttons.setText("自动洞穴(关)")} 
 buttons.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(dx==0)
    {buttons.setText("自动洞穴(开)");
    dx=1;clientMessage("记得关");}
    else if(dx==1)
    {buttons.setText("自动洞穴(关)");
    dx=0}
 }}))
 layout.addView(buttons)    


  var buttonss=new android.widget.Button(ctx)
if(isRunning){buttonss.setText("飞奔")}
else if(isRunning == false){buttonss.setText("行走")} 
 buttonss.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(isRunning==false)
    {buttonss.setText("飞奔");isRunning=true;clientMessage("强力奔跑")}
    else if(isRunning)
    {buttonss.setText("行走");isRunning =false}
 }}))
 layout.addView(buttonss)


var button=new android.widget.Button(ctx)
button.setText("脱离被覆盖")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var x=parseInt(Entity.getX(getplayerent()))
var y=parseInt(Entity.getY(getplayerent()))
var z=parseInt(Entity.getZ(getplayerent()))
for(var i=0;i<1000;i++){
if(getTile(x,y+i,z)==0){
setPosition(getplayerent(),x+0.5,y+i+1,z+0.5); 
print2("成功脱离")
break;
}}
}}))
layout.addView(button)   


var button=new android.widget.Button(ctx)
button.setText("关于")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
about()
}}))
layout.addView(button)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}
 
function roundwindows(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("圆/球")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button=new android.widget.Button(ctx)
 button.setText(rounds[0])
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(0);
 }}))
 layout.addView(button)   

 
  var button1=new android.widget.Button(ctx)
 button1.setText(rounds[1])
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(1);
 }}))
 layout.addView(button1)   

  var button2=new android.widget.Button(ctx)
 button2.setText(rounds[2])
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(2);
 }}))
 layout.addView(button2)   

  var button3=new android.widget.Button(ctx)
 button3.setText(rounds[3])
 button3.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(3);
 }}))
 layout.addView(button3)   

  var button4=new android.widget.Button(ctx)
 button4.setText(rounds[4])
 button4.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(4);
 }}))
 layout.addView(button4)   

  var button5=new android.widget.Button(ctx)
 button5.setText(rounds[5])
 button5.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(5);
 }}))
 layout.addView(button5)   

  var button6=new android.widget.Button(ctx)
 button6.setText(rounds[6])
 button6.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(6);
 }}))
 layout.addView(button6)   

  var button1=new android.widget.Button(ctx)
 button1.setText("半圆")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(13);
 }}))
 layout.addView(button1)   

  var button7=new android.widget.Button(ctx)
 button7.setText(rounds[7])
 button7.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(7);
 }}))
 layout.addView(button7)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Y椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(10)
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("垂直X椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(11)
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Z椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(12)
 }}))
 layout.addView(button1)   



  var button1=new android.widget.Button(ctx)
 button1.setText("两点椭圆(球)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    tuoyuancan()
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("单点椭圆(球)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(4)
 }}))
 layout.addView(button1)   



  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Y圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(14)
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直X圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(15)
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Z圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(16)
 }}))
 layout.addView(button1)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function inputr(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
if(nau<13||nau==13||nau==81||nau==82){
tmiLayout.addView(id);}

if(nau==8||nau==81||nau==82||nau==9||nau==10||nau==12){
iph = new android.widget.EditText(ctx);
iph.setHint("输入高");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);
}

if(nau==10){
ipr = new android.widget.EditText(ctx);
ipr.setHint("上面半径");
ipr.setText(sbr>0?String(sbr):null)
ipr.setInputType(number);
tmiLayout.addView(ipr);
}

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
 if(nau<13||nau==13||nau==81||nau==82){r = parseInt(id.getText());}
crd=nau
if(nau==8||nau==81||nau==82||nau==9||nau==10||nau==12){h=parseInt(iph.getText());}
if(nau==10){sbr=parseInt(ipr.getText())}
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function cuboidwindows(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("两点长方体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button=new android.widget.Button(ctx)
 button.setText("实长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体")
    cub=1
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("空长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体") 
    cub=2
 }}))
 layout.addView(button)     
 
 
  var button=new android.widget.Button(ctx)
 button.setText("长方体框架")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体") 
    cub=3
 }}))
 layout.addView(button)     

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("单点长方体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

  var button=new android.widget.Button(ctx)
 button.setText("实长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体")
    cubtwo(1)
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("空长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体") 
    cubtwo(2)
 }}))
 layout.addView(button)     
 
 
  var button=new android.widget.Button(ctx)
 button.setText("长方体框架")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体") 
    cubtwo(3)
 }}))
 layout.addView(button)     


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 



function roundwindow2(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("无底圆几何体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button1=new android.widget.Button(ctx)
 button1.setText("平行y圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(8);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("平行x圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(81);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("平行z圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(82);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("圆锥")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(9);
 }}))
 layout.addView(button1)   
 
 var button1=new android.widget.Button(ctx)
 button1.setText("圆台")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(10);
 }}))
 layout.addView(button1)   
 
  var button1=new android.widget.Button(ctx)
 button1.setText("金字塔")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(12);
 }}))
 layout.addView(button1)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 


function blockchange(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("编辑方块")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(15)
s.setText("本页面要内容求在有限算法只能完成，否则会卡死，建议强度2000以下，在有限算法之内无论取多少都没有问题")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button1=new android.widget.Button(ctx)
 button1.setText("渗透方块")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(102) 
 }}))
 layout.addView(button1)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("渗透(相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(103) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直Y面-相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(110) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直X面-相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(111) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直Z相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(112) 
 }}))
 layout.addView(button2)   



var button=new android.widget.Button(ctx)
button.setText("空岛-填坑")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blockinput(11) 
  clientMessage("点击坑处填坑，最高面")
}}))
layout.addView(button)  
 

var button=new android.widget.Button(ctx)
button.setText("类山脉")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blockinput(17) 
  clientMessage("点击坑处填坑，最高面")
}}))
layout.addView(button)  
 
var button2=new android.widget.Button(ctx)
 button2.setText("Y的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(18) 
 }}))
 layout.addView(button2)   
 
var button2=new android.widget.Button(ctx)
 button2.setText("X的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(19) 
 }}))
 layout.addView(button2)   
 
var button2=new android.widget.Button(ctx)
 button2.setText("Z的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(20) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直Y的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(104) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直X的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(105) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直Z的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(106) 
 }}))
 layout.addView(button2)   




  var button4=new android.widget.Button(ctx)
 button4.setText("漫射-特效-毁档")
 button4.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(101) 
 }}))
 layout.addView(button4)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}




function blockinput(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("强度");
id.setText(stre>0?String(parseInt(stre*10)):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

if(nau==101){
iph = new android.widget.EditText(ctx);
iph.setHint("输入半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);
}



tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
stre=0.1*parseInt(id.getText())
crd=nau
if(nau==101){r=parseInt(iph.getText())}
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function gameset(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("编辑世界")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
 
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("查看坐标");
		C_xyz.setChecked(option_xyz);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			option_xyz = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("低效率放置-不卡死");
		C_xyz.setChecked(settilechick);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			settilechick = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		
	var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("无字木牌");
		C_xyz.setChecked(	noworld);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
				noworld = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("空气和水发光");
		C_xyz.setChecked(islight);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			islight = isChecked;
			if(islight){Block.setLightLevel(0, 15);
			Block.setLightLevel(9, 15); 
			Block.setLightLevel(8, 15); }
			if(!islight){Block.setLightLevel(0, 0);
			Block.setLightLevel(9, 0); 
			Block.setLightLevel(8, 0); }
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);



	
var button=new android.widget.Button(ctx)
button.setText("实体-钟放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
setentity()
clientMessage("用时钟点击生成实体")
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("小地图")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(iskq){
				smallmapgui.dismiss();
				smallmapgui = null;
iskq=false;}
else{smallmapop()}
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("实体删除(慎用)")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
entityre()

}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("禁止刷出实体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
entitystop()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("阻止动作")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojiao()
}}))
layout.addView(button)  



  var button=new android.widget.Button(ctx)
 button.setText("变速")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    setv()
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("生命")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    healthy()
 }}))
 layout.addView(button)    



  var button=new android.widget.Button(ctx)
 button.setText("游戏模式")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    gamems()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("游戏时间")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    sett()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("玩家位置")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    playerxyz()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("设置重生点")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    Level.setSpawn(Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()));
clientMessage("已设置玩家位置为重生点")
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

var vs
function setv(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("20为默认(公式:速度/20=普通速度的倍数)");
id.setText(vs>0?String(vs):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("变速");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
vs=parseInt(id.getText())
if(vs>0){ModPE.setGameSpeed(vs)
clientMessage("游戏速度切换为普通速度的"+vs/20+"倍")
}
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function healthy(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("20满血，0为死亡不掉物品(生命值<=255)");
id.setText(null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("生命");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
vs=parseInt(id.getText())
if(vs<256){Entity.setHealth(getplayerent(),vs);
}
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function gamems(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
add.setText("生存")
tmiLayout.addView(add);
var add2 = new android.widget.Button(ctx);
add2.setText("创造")
tmiLayout.addView(add2);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏模式");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){if(Level.getGameMode()!=0)Level.setGameMode(0)
tmiDialog.dismiss()
}});

add2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){if(Level.getGameMode()!=1)Level.setGameMode(1)
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function sett(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);

var addb=function(t,tmiLayout){
var add = new android.widget.TextView(ctx);
add.setText("时间:"+t+":00")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){Level.setTime(19200/24*t+19200/24*18);///
tmiDialog.dismiss()
}});
tmiLayout.addView(add);
}

for(var t=0;t<24;t+=3){
addb(t,tmiLayout);
}


tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏时间(创造无用)");

tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function playerxyz(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
add.setText("移动")

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  X:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var x=new android.widget.EditText(ctx)
x.setText(String(Entity.getX(getplayerent())))
layouts.addView(x)
tmiLayout.addView(layouts);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  Y:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var y=new android.widget.EditText(ctx)
y.setText(String(Entity.getY(getplayerent())))
layouts.addView(y)
tmiLayout.addView(layouts);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  Z:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var z=new android.widget.EditText(ctx)
z.setText(String(Entity.getZ(getplayerent())))
layouts.addView(z)
tmiLayout.addView(layouts);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("移动");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
Entity.setPosition(getplayerent(),x.getText(),y.getText(),z.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function show_XYZ(show){
	if(show){
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		try{
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			
			T_X = new android.widget.TextView(ctx);
			T_X.setTextSize(16);
			T_X.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_X);
			
			T_Y = new android.widget.TextView(ctx);
			T_Y.setTextSize(16);
			T_Y.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_Y);
			
			T_Z = new android.widget.TextView(ctx);
			T_Z.setTextSize(16);
			T_Z.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_Z);
			
			xyzWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth(), dip2px(ctx, 100));
			xyzWindow.setTouchable(false);
			xyzWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, 0, 0);
		}catch(err){
			print2("错误!\n"+err);
		}
	}else if(xyzWindow != null){
		xyzWindow.dismiss();
		xyzWindow = null;
	}
}

function setentity(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

for(var m in entitylist)
{makebutton(ctx,layout,m,entitylist,entityid)}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton(ctx,layout,m,a,b,c)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  entitychange=entityid[m]
  print2("选择实体:"+button.getText()+"，时钟点击生成实体")
}}))
layout.addView(button)   
}



function experimentcopy()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("实验性粘贴(无空气)")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("带有“~”的是旋转,根据右手定则以XYZ的增方向旋转,不懂自己百度")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(s)

var button=new android.widget.Button(ctx)
button.setText("放大粘贴")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
cbig()
}}))
layout.addView(button)  

for(var m in copylist)
{makebutton2(ctx,layout,m,copylist)}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function makebutton2(ctx,layout,m,a)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  swifz=parseInt(m)+3
  print2("选择模式:"+button.getText()+"，铁剑或水桶点击粘贴")
}}))
layout.addView(button)   
} 

function nocopy()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称

var button=new android.widget.Button(ctx)
button.setText("复制粘贴存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cpcychunts()
}}))
layout.addView(button)   



var button=new android.widget.Button(ctx)
button.setText("导出存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blocksaveter()
}}))
layout.addView(button)   


var button=new android.widget.Button(ctx)
button.setText("导入存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blocklist()
}}))
layout.addView(button)   



		var C = new android.widget.CheckBox(ctx);
		C.setText("粘贴不覆盖原有方块");
		C.setChecked(isfg);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		isfg=isChecked;
			}
		});
		layout.addView(C);
	

		var C = new android.widget.CheckBox(ctx);
		C.setText("去除水复制");
		C.setChecked(iswater);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		iswater	=isChecked;
			}
		});
		layout.addView(C);
	
		var C = new android.widget.CheckBox(ctx);
		C.setText("去除岩浆复制");
		C.setChecked(isyj);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		isyj	=isChecked;
			}
		});
		layout.addView(C);


var button=new android.widget.Button(ctx)
button.setText("更多不复制")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  morecpcy()
}}))
layout.addView(button)   





   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function cpcychunts(){
var layout=new android.widget.LinearLayout(ctx) 
try{

var tmiLayout = new android.widget.LinearLayout(ctx);

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("现在使用存档"+(copytime+1))
s.setTextColor(android.graphics.Color.rgb(255,255,255));
tmiLayout.addView(s)
//biockgroup[copytime]!=[]
var m=function(n){var t
if(biockgroup[n][0]==undefined){t="未使用"}
else if(biockgroup[n]!=[]){ t=biockgroup[n].length+"*"+biockgroup[n][0].length+"*"+biockgroup[n][0][0].length}
return "大小:"+t
}
var add = new android.widget.Button(ctx);
add.setText("存档1"+m(0))
tmiLayout.addView(add);
var add2 = new android.widget.Button(ctx);
add2.setText("存档2"+m(1))
tmiLayout.addView(add2);
var add3 = new android.widget.Button(ctx);
add3.setText("存档3"+m(2))
tmiLayout.addView(add3);
var add4 = new android.widget.Button(ctx);
add4.setText("存档4"+m(3))
tmiLayout.addView(add4);
var add5 = new android.widget.Button(ctx);
add5.setText("存档5"+m(4))
tmiLayout.addView(add5);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏时间(创造无用)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=0
tmiDialog.dismiss()
}});

add2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=1
tmiDialog.dismiss()
}});

add3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=2
tmiDialog.dismiss()
}});

add4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=3
tmiDialog.dismiss()
}});

add5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=4
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function morecpcy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("使用方法，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");
id.setText(nocopyid)

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("复制跳过");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
nocopyid=String(id.getText())
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function tuoyuancan(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("参数值=椭圆的两点与椭圆上一点的距离的和-椭圆两焦点距离(建议1-10)");
id.setText(null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("椭圆参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
r=String(id.getText())
cub=4
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function TooManyItems2(type,tp2){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(23)
s.setText(tp2)
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m
for(m in type)
{makebutton3(ctx,layout,m,type)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton3(ctx,layout,m,a,r,g,b)
{
var button=new android.widget.TextView(ctx)
button.setText(a[m].name+String(a[m].id)+":"+String(a[m].data))
button.setTextSize(18)
if(r==undefined){
button.setTextColor(android.graphics.Color.rgb(255,255,255));}else{
button.setTextColor(android.graphics.Color.rgb(r,g,b));}
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(Level.getGameMode() == 0){
addids(m,a)
}
if(Level.getGameMode() == 1){
Entity.setCarriedItem(getplayerent(),a[m].id,1,a[m].data);
}
  print2("选择物品:"+button.getText())
}}))
layout.addView(button)   
} 


function addids(m,a){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("数量");
id.setText("1")
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("添加数量");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
//Entity.setCarriedItem(getplayerent(),a[m][1],1,a[m][2]);
Player.addItemInventory(a[m].id,id.getText(),a[m].data);
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function entityre(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("删除实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
var m
for(m in entityrelist)
{makebutton4(ctx,layout,m,entityrelist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton4(ctx,layout,m,a)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  var e=Entity.getAll()
  var v
  var i=0
  var b=entityretype[m]
  for(v in e)
  {
  if(b==true){
  if(Entity.getEntityTypeId(e[v])!=0){
  Entity.remove(e[v]);i++}}
  else if(Entity.getEntityTypeId(e[v])==b){
  Entity.remove(e[v]);i++}}
  print2("已删除 "+button.getText()+i+"个")
}}))
layout.addView(button)   
} 


function polygonss(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("输入顶点数");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);

ip = new android.widget.EditText(ctx);
ip.setHint("多边形旋转角度(顶点所在轴优先级y>x>z)");
ip.setText(bz>=0?String(bz):null)
tmiLayout.addView(ip);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("多边形参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=nau
r=parseInt(id.getText());
h=parseInt(iph.getText());
if(ip.getText()>0){bz=parseInt(ip.getText());}else{bz=0}
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function polygons(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("多边形")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

  var button=new android.widget.Button(ctx)
 button.setText("垂直Y")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(107)
 }}))
 layout.addView(button)   

  var button=new android.widget.Button(ctx)
 button.setText("垂直X")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(108)
 }}))
 layout.addView(button)   

  var button=new android.widget.Button(ctx)
 button.setText("垂直Z")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(109)
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}



function replacess(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
var id = new android.widget.EditText(ctx); 
id.setHint("使用方法，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");
id.setText(replaceid)

var id2 = new android.widget.EditText(ctx); 
id2.setHint("使用方法，输入方块id，特殊值在后面加(:)，例子:12或35:7");
id2.setText(replaceids)
 
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(id2); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("替换");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
replaceid=String(id.getText())
replaceids=String(id2.getText()) 
cub=5
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function caopingtan(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认(超高频)")
var id = new android.widget.EditText(ctx); 
id.setHint("使用方法，输入方块，最底层向上的每层方块，从左到右，层数依次增加，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7,默认草地");
id.setText(replaceid)

var id2 = new android.widget.EditText(ctx); 
id2.setHint("最放置底层，大于0小于等于128(高度=输入值-1)，默认64");
id2.setText(null)
 
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(id2); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("一键超平坦(毁档)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
if(String(id.getText())==""){replaceid="2"}
else{replaceid=String(id.getText())}
if(id2.getText()<=0){h=64}
else{h=parseInt(String(id2.getText()))-1}
pt=true
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}
 

function yuanquan(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("圆环输入半径");
id.setText(h>0?String(h):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("圆圈大小半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("圆圈(类似轮胎)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=nau
h=parseInt(id.getText());
r=parseInt(iph.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function entitystop(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("禁止生成实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
var m
for(m in entityrelist)
{makebutton5(ctx,layout,m,entityrelist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton5(ctx,layout,m,a)
{
		var C = new android.widget.CheckBox(ctx);
		C.setText(a[m]);
		C.setChecked(entstop[m][1]);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			entstop[m][1] = isChecked;
			}
		});
		layout.addView(C);
} 


function readtool(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("测量工具")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var button=new android.widget.Button(ctx)
button.setText("取中点")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
  geotype=3
  print2("点击两点取中点")
}}))
layout.addView(button)  
 
var button=new android.widget.Button(ctx)
button.setText("三点所在面的交点")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
  geotype=4
  clientMessage ("点击3点求三点所在面的交点(适用于复制粘贴)\n优先级" + ChatColor.RED + " y>x>x")
}}))
layout.addView(button)  
 
var button=new android.widget.Button(ctx)
button.setText("选点生成方块 ")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   xdscfk()
}}))
layout.addView(button)  

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function nojiao(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("阻止动作")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m
for(m in actionlist)
{makebutton6(ctx,layout,m,actionlist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function makebutton6(ctx,layout,m,a)
{
		var C = new android.widget.CheckBox(ctx);
		C.setText(a[m][0]);
		C.setChecked(a[m][1]);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			a[m][1] = isChecked;
			}
		});
		layout.addView(C);
} 


function noj(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("自定义角度放置(不完美)")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)



var button=new android.widget.Button(ctx)
button.setText("圆圈")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(5)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆面")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(6)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆柱")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(7)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆锥")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(8)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆弧")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(9)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆环")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojrs(10)
}}))
layout.addView(button)  


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function nojr(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("半径(建议练习)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
geotype=nau
cleans()
r=parseInt(id.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function nojrs(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("圆环输入半径");
id.setText(h>0?String(h):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("圆圈大小半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("圆圈(类似轮胎)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
geotype=nau
cleans()
h=parseInt(id.getText());
r=parseInt(iph.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function about()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);

var s = new android.widget.TextView(ctx);  
s.setText("来自百度贴吧我的世界  6g3y\n未经允许不不得转载，不得抄袭大量算法，欢迎交流算法\n如果有什么bug或者更好的想法请反馈给6g3y\n谢谢使用本js，如果不会用该js可以到百度贴吧查看\n铁剑和水贴可以当成空气，指南针可以查看方块，还可以让生物骑在生物上面\n“▲”是重复上一个功能，只能几何体，方块编辑，复制粘贴");

add.setText("确认");

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

tmiLayout.addView(s);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("关于");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){

tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function plset()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("警告，范围太大会卡顿");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("铺路半径:");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("半径");
ip.setText("1")
l.addView(ip);

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否传统模式,打钩非传统(传统:手上方块;非传统:下面内容)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});

var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("使用方法，输入方块，每个几率一样(几率平分)，从左到右，可重复输入提高几率，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7,默认草地");
la.addView(t);

var id = new android.widget.EditText(ctx); 
id.setHint("默认草地");
id.setText("2")

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(cr,svp);
layout.addView(la,svp);
layout.addView(id,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("铺路")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {

var p=parseInt(ip.getText())-1
var h=id.getText()+" "
h=h.split(" ");
pl=[0,ms,h,p]

}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

function saveblocks(str){
try{
var f=String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/"+str)
var fos=java.io.FileOutputStream(f)
var n=biockgroup[copytime]
fos.write(n.length)
fos.write(n[0].length)
fos.write(n[0][0].length)
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
fos.write(n[x][y][z][0])
fos.write(n[x][y][z][1])
}}}
print2("输入完成")
}catch(err){clientMessage("错误: "+err+".")}
}

function readblocks(str){
try{
var f=String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/"+str)
var fis=java.io.FileInputStream(f)
var fz=[]
var a=0
while(1){
a=fis.read()
if(a>=0){fz.push(a)}else{break}
}
if(fz.length==(fz[0])*(fz[1])*(fz[2])*2+3){
var m=fz[0],n=fz[1],o=fz[2]
var a=[]
var b=[]
var c=[]
for(var x=0;x<m;x++){b=[]
for(var y=0;y<n;y++){c=[]
for(var z=0;z<o;z++){
var k=fz[(x*n*o+o*y+z)*2+3]
var e=fz[(x*n*o+o*y+z)*2+4]
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("已读取文件")
clientMessage("统计方块:"+((fz.length-3)*0.5)+"个,x="+fz[0]+",y="+fz[1]+",z="+fz[2]);
return true
}else if(fz.length==(fz[0]-1)*(fz[1]-1)*(fz[2]-1)*2+3){
var m=fz[0]-1,n=fz[1]-1,o=fz[2]-1
var a=[]
var b=[]
var c=[]
for(var x=0;x<m;x++){b=[]
for(var y=0;y<n;y++){c=[]
for(var z=0;z<o;z++){
var k=fz[(x*n*o+o*y+z)*2+3]
var e=fz[(x*n*o+o*y+z)*2+4]
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("已读取文件")
clientMessage("统计方块:"+((fz.length-3)*0.5)+"个,x="+fz[0]+",y="+fz[1]+",z="+fz[2]);
return true
}else{
print2("文件格式错误")
return false
}
}catch(err){
print2("读取失败")
return false
}
}

function blocklist()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("导入保存内容")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("/sdcard/games/com.mojang/xxx.block\n可以互相传")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(s)

var fl=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang").list()
//print2(fl)
for(var i=0;i<fl.length;i++){
var fn=fl[i].split("/")
fn=String(fn[fn.length-1])
var is=fn.split(".")
if(is[is.length-1]=="block")
makebuttona(ctx,layout,is[0],fn)
////filebtn(layout,ctx,textParams,fn)
}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.75,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function makebuttona(ctx,layout,m,n)
{
var button=new android.widget.Button(ctx)
button.setText(m)
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  readblocks(n)
}}))
layout.addView(button)   
}

//saveblocks("a.block")
function blocksaveter()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("说明，可以发送给好友\n/sdcard/games/com.mojang/xxx.block");

var id = new android.widget.EditText(ctx); 
id.setHint("输入名称(可覆盖)");
id.setText(null)

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(id,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("导出储存")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
if(biockgroup[copytime].length>0){
var h=id.getText()+".block"
saveblocks(h)
}else{
print2("不能储存空的")
}
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

function cbig(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入倍数");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("倍数(建议练习)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
swifz=16
bigs=parseInt(id.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function xdscfk()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("输入坐标生存方块,默认发光黑曜石");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("id:");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("输入物品id");
ip.setText("246")
l.addView(ip);
var ld=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("bd:");
ld.addView(t);
var id4 = new android.widget.EditText(ctx);
id4.setHint("输入物品特殊值");
id4.setText("0")
ld.addView(id4);


var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("X:");
la.addView(t);
var id = new android.widget.EditText(ctx);
id.setHint("X");
id.setText(null)
la.addView(id);
var lb=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("Y:");
lb.addView(t);
var id2 = new android.widget.EditText(ctx);
id2.setHint("Y");
id2.setText(null)
lb.addView(id2);
var lc=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("Z:");
lc.addView(t);
var id3 = new android.widget.EditText(ctx);
id3.setHint("Z");
id3.setText(null)
lc.addView(id3);

var button=new android.widget.Button(ctx)
button.setText("放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
try{
 settile(id.getText(),id2.getText(),id3.getText(),ip.getText(),id4.getText())
 print2("已放置方块");
}catch(err){
			print2("放置失败: "+err+".");
		}
}}))


//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(ld,svp);
layout.addView(la,svp);
layout.addView(lb,svp);
layout.addView(lc,svp);
layout.addView(button,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("生成方块")
		.setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

 
function replacess2()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout


var id = new android.widget.EditText(ctx); 
id.setHint("方块A，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");

var id2 = new android.widget.EditText(ctx); 
id2.setHint("方块B，输入方块id，特殊值在后面加(:)，例子:12或35:7");
 

var id3 = new android.widget.EditText(ctx); 
id3.setHint("方块B相对方块A的位置，格式:X:Y:Z(例如1:0:0，就在B在A的x+方向)");

var id4 = new android.widget.EditText(ctx); 
id4.setHint("被放置方块相对方块A的位置，格式:X:Y:Z(例如0:-1:0，就在B在A的下(y-)方向)");

var id5 = new android.widget.EditText(ctx); 
id5.setHint("即将放置的，输入方块id，特殊值在后面加(:)，例子:12或35:7");

 
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:下面的都要填写，这个功能可以修改地皮，铺雪，判断方块，如果A方块满足条件则，判断B方块，如果B也满足然后执行替换指令")



//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(s,svp);
layout.addView(id,svp);
layout.addView(id2,svp);
layout.addView(id3,svp);
layout.addView(id4,svp);
layout.addView(id5,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("高级替换")
		.setNegativeButton("替换", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
replaceid=String(id.getText())
replaceids=String(id2.getText())
replaceidset=String(id5.getText())
try{
var h = String(id3.getText()).split(":");
var w = String(id4.getText()).split(":");
h=[parseInt(h[0]),parseInt(h[1]),parseInt(h[2])]
w=[parseInt(w[0]),parseInt(w[1]),parseInt(w[2])]
repxyz=[h,w]
cub=6
		}catch(err){
print2("输入错误。原因:如果看不懂就算了， "+err);
		}
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}



function dixingmune(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("自然景观")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("各种树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  treemune()
 }}))
 layout.addView(button)   
 
 var button=new android.widget.Button(ctx)
 button.setText("洞穴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cavemune()
 }}))
 layout.addView(button)   
  
  var button=new android.widget.Button(ctx)
 button.setText("丘陵")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  qiulinga()
 }}))
 layout.addView(button)   
 



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function treemune(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("各种树")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("热带雨林树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=201
clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("榕树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=202
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("分叉树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=203
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 

  var button=new android.widget.Button(ctx)
 button.setText("低矮树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=204
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("高度中等的树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=205
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


var cave=[]

function cavemune()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout


var id = new android.widget.EditText(ctx); 
id.setHint("角度(不填随机)");

var id2 = new android.widget.EditText(ctx); 
id2.setHint("长度(200-300正常水平)");
 
var id3 = new android.widget.EditText(ctx); 
id3.setHint("分叉数(多级的4-5差不多)");

var id4 = new android.widget.EditText(ctx); 
id4.setHint("巨型洞穴强度(半径)"); 
  

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("末端是否生成巨型洞穴");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});   

var ms2=false
var cr2=new android.widget.CheckBox(ctx);
cr2.setText("是否多级分叉");
cr2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms2=true;else ms2=false;
				}
		}); 
var ms3=false
var cr3=new android.widget.CheckBox(ctx);
cr3.setText("是否多末端生存岩浆(1/2几率)");
cr3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms3=true;else ms3=false;
				}
		}); 
 
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:下面的都要填写，写出旋转角度，角度的起始边在Z+上，安装y+进行右手定则旋转，沿着改方向延长生成，并且填写长度(矿洞长度)，巨洞生成安半径计算")



//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(s,svp);
layout.addView(id,svp);
layout.addView(id2,svp); 
layout.addView(cr2,svp);
layout.addView(id3,svp);
layout.addView(cr,svp);
layout.addView(id4,svp); 
layout.addView(cr3,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("洞穴").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
cave[0]=-parseInt(String(id.getText()))
cave[1]=parseInt(String(id2.getText()))
cave[2]=parseInt(String(id3.getText()))+1
cave[3]=[ms,ms2,ms3]
cave[4]=parseInt(String(id4.getText()))  
crd=301
clientMessage("点击方块生成矿洞"); 
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}

 
function qiulinga(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("输入高");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("丘陵");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=302
clientMessage("点击方块生成丘陵"); 
r=parseInt(id.getText())
h=parseInt(iph.getText())
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function myrpg(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {try{
rpgGUI = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("+");
button.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
button.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
krbg=1
break;
case 1:
krbg=0
break;
}
return true;
}
}));
layout.addView(button);
                        
rpgGUI.setContentView(layout);
rpgGUI.setWidth(100);
rpgGUI.setHeight(100);
rpgGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 2, 400);}
catch(err){print2("Error: "+err);
}}}));}




function joinitem(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("添加物品")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

		
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("双击获得方块");
		C_xyz.setChecked(shuangji);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			shuangji = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
	

  var button=new android.widget.Button(ctx)
 button.setText("手动添加物品")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    TooManyItems()
clientMessage("指南针点击方块，获得方块数据")
 }}))
 layout.addView(button)   
 
 
var sab
for(sab in cat){
tmiaddbutton(ctx,layout,cat[sab][0],cat[sab][1])}


  var button=new android.widget.Button(ctx)
 button.setText("按颜色")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var m= function(){var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(23)
s.setText("按颜色")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m,ssad=[]
for(m in color){
ssad[m]={name:"██ ",id:color[m][0],data:color[m][1]}}
for(m in ssad)
{makebutton3(ctx,layout,m,ssad,color[m][2],color[m][3],color[m][4])}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}}
clientMessage("指南针点击方块，获得方块数据")
m()
 }}))
 layout.addView(button)    

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}
 

function tmiaddbutton(ctx,layout,a,b){
  var button=new android.widget.Button(ctx)
 button.setText(b)
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    TooManyItems2(a,b)
clientMessage("指南针点击方块，获得方块数据")
 }}))
 layout.addView(button)    
}



function replys()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout

var cr=new android.widget.CheckBox(ctx);
cr.setText("是否记入撤销(开启较卡)");
cr.setChecked(chickreply); 
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) chickreply=true;else chickreply=false;
				}
		});   

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(cr,svp);

for(var as=1;as<classreply.length;as++){
if(as>100)break;
makereplybutton(cr,svp,layout,classreply[as]) 
}


sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("选择撤销，爆炸，自己手动放置破坏不算").setPositiveButton("结束",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}
 
function makereplybutton(cr,svp,layout,a)
{
var button=new android.widget.TextView(ctx)
button.setText(String(a[0])+"  个数:"+String(a.length-1))
button.setTextSize(18)
button.setTextColor(android.graphics.Color.rgb(255,255,255));
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(forreply==null){ 
forreply=a
print2("开始恢复")
}
}}))
layout.addView(button)   
}  
var forreply=null
var replytime=null
function replytick(ch){
if(forreply!=null){
var a=forreply 
for(var t=1;t<a.length;t++){
settile(a[t][0],a[t][1],a[t][2],a[t][3],a[t][4])}
forreply=null 
print2("已经恢复") }
if(chickreply&&ch){
var time = android.text.format.Time(); 
time.setToNow();
var u=String(time.hour) 
var a=u+":"+String(time.minute)+":"+String(time.second)
//print(a)
if(classreply[0].length>0){
if(a!=replytime&&u<25){
classreply[0].unshift(a)
classreply.unshift([]) 
}}}}

var cubt=[null,null,null]
function cubtwo(sob){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
var id = new android.widget.EditText(ctx);
var id3 = new android.widget.EditText(ctx);
var id2 = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入X长度");
id.setText(cubt[0]>=0?String(r):null)
id.setInputType(number);
if(sob!=11)tmiLayout.addView(id);
id2.setHint("输入Y长度");
id2.setText(cubt[1]>=0?String(r):null)
id2.setInputType(number);
if(sob!=10)tmiLayout.addView(id2);
id3.setHint("输入Z长度");
id3.setText(cubt[2]>=0?String(r):null)
id3.setInputType(number);
if(sob!=12)tmiLayout.addView(id3);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("设定参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=sob+20
clientMessage("输入成功"); 
cubt[0]=parseInt(id.getText())-1
cubt[1]=parseInt(id2.getText())-1
cubt[2]=parseInt(id3.getText())-1
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



//x,y,z,itemId,blockId,side,itemDamage,blockDamage
function touchblock(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
//TooManyItems
var tmiLayout = new android.widget.LinearLayout(ctx);
var id=[],num

var text=["X坐标","Y坐标","Z坐标","手上的id","手上的特殊值","相对坐标位置;0:y-,1:y+,2:z-,3:z+,4:x-,5;x+"]
var datas=[Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()),Player.getCarriedItem(),Player.getCarriedItemData(),null]
var la=new android.widget.LinearLayout(ctx) 
var lb=new android.widget.LinearLayout(ctx) 
var lc=new android.widget.LinearLayout(ctx) 
var ld=new android.widget.LinearLayout(ctx) 
for(num in text){
id[num]=new android.widget.EditText(ctx);
id[num].setHint(text[num]);
id[num].setText(String(Math.round(datas[num])));
id[num].setInputType(number);
}

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

for(num in text){
if(num<3){la.addView(id[num]);}
else if(num<5){lb.addView(id[num]);}
else {lc.addView(id[num]); }
}

var add = new android.widget.Button(ctx);
add.setText("激活useItem")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
useitem([parseInt(id[0].getText()),parseInt(id[1].getText()),parseInt(id[2].getText()),parseInt(id[3].getText()),getTile(id[0].getText(),id[1].getText(),id[2].getText()),id[5].getText(),id[4].getText(),Level.getData(id[0].getText(),parseInt(id[1].getText()),parseInt(id[2].getText()))])
}
});
ld.addView(add)

var add = new android.widget.Button(ctx);
add.setText("关闭")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
tmiDialog.dismiss();
}
});
ld.addView(add)

tmiLayout.addView(la) 
tmiLayout.addView(lb) 
tmiLayout.addView(lc) 
tmiLayout.addView(ld) 

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("模拟点击方块(没有放置)");

tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

var useitemdata=null
function useitem(a)
{
useitemdata=a
}

function pianyiset(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
var id = new android.widget.EditText(ctx);
var id3 = new android.widget.EditText(ctx);
var id2 = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:在点击时偏移坐标，必须为整数，并且可以负数，用来改变复制粘贴，几何体的初始位置，这东西很好用")
tmiLayout.addView(s);
add.setText("确认")
id.setHint("输入X长度");
id.setText(String(pianyilist[0]))
tmiLayout.addView(id);
id2.setHint("输入Y长度");
id2.setText(String(pianyilist[1]))
tmiLayout.addView(id2);
id3.setHint("输入Z长度");
id3.setText(String(pianyilist[2]))
tmiLayout.addView(id3);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("设定参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
clientMessage("输入成功"); 
pianyilist[0]=parseInt(id.getText())
pianyilist[1]=parseInt(id2.getText())
pianyilist[2]=parseInt(id3.getText())
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}




























































var settilenum=0
//var settilenum2=0
var che=0
function modTick()
{
if(settilelist[0]!=undefined){
for(;settilenum<settilelist.length;settilenum++){
setTile(settilelist[settilenum][0],settilelist[settilenum][1],settilelist[settilenum][2],settilelist[settilenum][3],settilelist[settilenum][4])
}
if(che==0){settilelist=[];settilenum=0}
}

replytick(che==0)

if(useitemdata!=null){
var a=useitemdata
var m=0
useItem(a[m++],a[m++],a[m++],a[m++],a[m++],a[m++],a[m++],a[m++])
useitemdata=null
}

getallofgytype()
//pictures=[true,bitmap,ms,h1,w1,h2,w2]
if(pictures[0])
{var s=pictures //s[]
pictures[0]=false
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
xc.setPriority(10)
picture(s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8])
}}));
xc.start()
}
if(pt)cpt()
	if(option_xyz){
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				T_X.setText("X: "+Math.round(Entity.getX(getplayerent())*100)/100);
				T_Y.setText("Y: "+((Math.round(Entity.getY(getplayerent())*100)/100) - 1)+" (feet pos, "+Math.round(Entity.getY(getplayerent())*100)/100+" eyes pos)");
				T_Z.setText("Z: "+Math.round(Entity.getZ(getplayerent())*100)/100);
			}
		}));
	}
	
	
if(krbg==1){rpg()}
	

//clientMessage(Level.getTime())
if(pl[0]==1)fpl()
if(dx==1)fdx(Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()))
running()
}
var runtime=1
function running(){
if(isRunning){

//From WhyTofu's Sprint Mod
if(runtime==1)
      {
			   Xpos=Entity.getX(getplayerent());
        Zpos=Entity.getZ(getplayerent());
        runtime++
      }
      else if(runtime==3)
      {
        runtime=1;
        Xdiff=Entity.getX(getplayerent())-Xpos;
        Zdiff=Entity.getZ(getplayerent())-Zpos;
        setVelX(getplayerent(),1.2*Xdiff);
        setVelZ(getplayerent(),1.2*Zdiff);
        Xdiff=0;
        Zdiff=0;
      }
  if(runtime!=1)
  {
  runtime++
  }

}else if(isRunning==false){

return null;
}
}


function getallofgytype(){
if(allofgytype[0]!=crd&&crd!=null)
{allofgytype[0]=crd;swifz=0;geotype=0;cub=0;allofgytype[4]=0;cleans();allofgytype[1]=0;allofgytype[2]=0;allofgytype[3]=0}
if(allofgytype[1]!=swifz&&(swifz>0||swifz==null))
{allofgytype[1]=swifz;crd=null;geotype=0;cub=0;allofgytype[4]=1;cleans();allofgytype[0]=0;allofgytype[2]=0;allofgytype[3]=0}
if(allofgytype[2]!=geotype&&geotype!=0)
{allofgytype[2]=geotype;crd=null;swifz=0;cub=0;allofgytype[4]=2;cleans();allofgytype[1]=0;allofgytype[0]=0;allofgytype[3]=0}
if(allofgytype[3]!=cub&&cub!=0)
{allofgytype[3]=cub;crd=null;swifz=0;geotype=0;allofgytype[4]=3;cleans();allofgytype[1]=0;allofgytype[2]=0;allofgytype[0]=0}
}



function fpl(){
var x=Entity.getX(getplayerent()),y=Entity.getY(getplayerent()),z=Entity.getZ(getplayerent())
if(pl[1]==false){
if(Player.getCarriedItem()<256){
for(var i=-pl[3];i<=pl[3];i++){
for(var j=-pl[3];j<=pl[3];j++){
if(i*i+j*j<=pl[3]*pl[3])settile(x+i,y-2,z+j,Player.getCarriedItem(),Player.getCarriedItemData())
}
}}}
else
{
for(var i=-pl[3];i<=pl[3];i++){
for(var j=-pl[3];j<=pl[3];j++){
var k=2,e=0,w=pl[2]
var ida=Math.floor(Math.random()*(pl[2].length-1));
var o=w[ida]
if(o>=0){k=o}
else{o=o.split(":");k=o[0];e=o[1]}
if(i*i+j*j<=pl[3]*pl[3])settile(x+i,y-2,z+j,k,e)
}}
}
}


function fdx(x,y,z){
for(var i=1;i<4;i++){
settile(x+i-2,y-1,z+1,0)
settile(x+i-2,y-1,z,0)
settile(x+i-2,y-1,z-1,0)
settile(x+i-2,y+2,z+1,0)
settile(x+i-2,y+2,z,0)
settile(x+i-2,y+2,z-1,0)}
for(var i=1;i<6;i++){
settile(x+i-3,y+1,z+2,0)
settile(x+i-3,y+1,z+1,0)
settile(x+i-3,y+1,z,0)
settile(x+i-3,y+1,z-1,0)
settile(x+i-3,y+1,z-2,0)
settile(x+i-3,y,z+2,0)
settile(x+i-3,y,z+1,0)
settile(x+i-3,y,z,0)
settile(x+i-3,y,z-1,0)
settile(x+i-3,y,z-2,0)
}}

function cubi(x,y,z,i,id)
{
if(i<256){
//连线
if(cub==1){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid1(i,id);cleans();cub=0} }

if(cub==2){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid2(i,id);cleans();cub=0} }

if(cub==3){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid3(i,id);cleans();cub=0} }

if(cub==4){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");tuoyuan(i,id);cleans();cub=0} }

if(cub==5){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("开始替换");replaces(s1[0],s1[1],s1[2],s2[0],s2[1],s2[2]);cleans();cub=0} }

if(cub==6){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("开始替换");replaces2(s1[0],s1[1],s1[2],s2[0],s2[1],s2[2]);cleans();cub=0} }

}} 



function geo(x,y,z,i,id)
{
if(i<256){
var g=geotype
//连线
if(g==1){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("连接");lianxian(s1,s2,i,id);cleans()}}
//三点一面
if(g==2){
if(s1==false){s1=[x,y,z];print2("设置点一");}
else if(s2==false)
{s2=[x,y,z];print2("设置点二");}
else if(s3==false){s3=[x,y,z];print2("连接");sdym(s1,s2,i,id);cleans()}}

if(g==3){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");settile((s1[0]+s2[0])*0.5,(s1[1]+s2[1])*0.5,(s1[2]+s2[2])*0.5,i,id);cleans();geotype=0}}

if(g==4){
if(s1==false)
{s1=[x,y,z];print2("设置点Y面");}
else if(s2==false)
{s2=[x,y,z];print2("设置点X面");}
else if(s3==false)
{s3=[x,y,z];print2("设置点Z面,放置"+s3[0]+","+s1[1]+","+s2[2]);settile(s3[0],s1[1],s2[2],i,id);cleans();geotype=0}}

if(g==5){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj1(s1,s2,r,i,id);cleans();geotype=0}}

if(g==6){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj2(s1,s2,r,i,id);cleans();geotype=0}}


if(g==7){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj3(s1,s2,r,i,id);cleans();geotype=0}}


if(g==8){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj4(s1,s2,r,i,id);cleans();geotype=0}}


if(g==9){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj5(s1,s2,r,i,id);cleans();geotype=0}}


if(g==10){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj6(s1,s2,r,h,i,id);cleans();geotype=0}}


}
}
cleans()
function cleans(){s1=false,s2=false,s3=false,s4=false }


function updata(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
if(n!=null){n.setText("X增方向:"+fx[getyaw()]+"\n放置长度:"+l+"\n放置间隔:"+jg+"\n放置Id:"+Player.getCarriedItem()+","+Player.getCarriedItemData()+"\n复制储存:"+(parseInt(copytime)+1)+"\n\n");
updata()}
}}),60);
}}))
}


function getyaw()
{
var yaw=getYaw()%360+360;
if(yaw%360>337.5||yaw%360<=22.5){
return 6}
else if(yaw%360>22.5&&yaw%360<=76.5){
return 5}
else if(yaw%360>67.5&&yaw%360<=112.5){
return 4}
else if(yaw%360>112.5&&yaw%360<=157.5){
return 3}
else if(yaw%360>157.5&&yaw%360<=202.5){
return 2}
else if(yaw%360>202.5&&yaw%360<=247.5){
return 1}
else if(yaw%360>247.5&&yaw%360<=292.5){
return 0}
else if(yaw%360>292.5&&yaw%360<=337.5){
return 7}
}


function alloffzzt(x,y,z,i)
{
if(swifz!=false){if(i==0){
if(swifz==null){swifz=[x,y,z];print2("设置点1")}
else if(swifz==1){setblock(x,y,z);swifz=false}
else if(swifz==2){setblockwithout0(x,y,z);swifz=false}
else if(swifz==3){setblockwithout3(x,y,z);swifz=false} 
else if(swifz==4){setblockwithout4(x,y,z);swifz=false} 
else if(swifz==5){setblockwithout5(x,y,z);swifz=false} 
else if(swifz==6){setblockwithout6(x,y,z);swifz=false} 
else if(swifz==7){setblockwithout7(x,y,z);swifz=false} 
else if(swifz==8){setblockwithout8(x,y,z);swifz=false} 
else if(swifz==9){setblockwithout9(x,y,z);swifz=false} 
else if(swifz==10){setblockwithout10(x,y,z);swifz=false} 
else if(swifz==11){setblockwithout11(x,y,z);swifz=false} 
else if(swifz==12){setblockwithout12(x,y,z);swifz=false} 
else if(swifz==13){setblockwithout13(x,y,z);swifz=false} 
else if(swifz==14){setblockwithout14(x,y,z);swifz=false} 
else if(swifz==15){setblockwithout15(x,y,z);swifz=false} 
else if(swifz==16){setblockbig(x,y,z);swifz=false} 
else if(swifz!=null){copyblock(swifz[0],swifz[1],swifz[2],x,y,z);swifz=false}
}} 
}
 



function copyblock(aa,ba,ca,ab,bb,cb)
{
var w=nocopyid.split(" ");
//clientMessage(nocopyid)
biockgroup[copytime]=[]
var a=[]
var b=[]
var c=[]
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){b=[]
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){c=[]
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
if(iswater){if(k==8||k==9){k=0;e=0}}
if(isyj){if(k==10||k==11){k=0;e=0}}
var v
for(v in w){
var o=w[v]
if(o>=0){if(o==k){k=0;e=0}}
else{o=o.split(":");
if(o[0]==k&&o[1]==e){k=0;e=0}
}}
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("复制")
}


function setblock(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}
print2("粘贴完成")
}

function setblockwithout0(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
} 
//["x轴镜像","y轴倒影","z轴倒影","xy轴倒影"] 

function setblockwithout3(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
} 
 
function setblockwithout4(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}  

function setblockwithout5(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}   

function setblockwithout6(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout7(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x))==0){
settile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout8(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout9(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x))==0){
settile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 


function setblockwithout12(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout11(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout10(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 


function setblockwithout13(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout14(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout15(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0])==0){
settile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 var bigs
function setblockbig(a,b,c){
var n=biockgroup[copytime]
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
for(var m=0;m<bigs;m++){
for(var l=0;l<bigs;l++){
for(var o=0;o<bigs;o++){
if(isfg){if(getTile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o)==0){
settile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o,n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o,n[x][y][z][0],n[x][y][z][1]);}}}}}
}}}
print2("粘贴完成")
}











function lianxian(s1,s2,i,id)
{
if(s1!=false&&s2!=false)
{
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m++){
settile(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)),i,id)}////
}}

function sdym(s1,s2,it,id)
{
if(s1!=false&&s2!=false)
{
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m+=0.5){
lianxian([Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z))],s3,it,id)}////
}}


 

function chickround(x,y,z,b,bd)
{
if(crd!=null){
switch(crd){
case 0:ycircle(x,y,z,r,b,bd);break;
case 1:xcircle(x,y,z,r,b,bd);break;
case 2:zcircle(x,y,z,r,b,bd);break;
case 3:yround(x,y,z,r,b,bd);break;
case 4:xround(x,y,z,r,b,bd);break;
case 5:zround(x,y,z,r,b,bd);break;
case 6:unsphere(x,y,z,r,b,bd);break;
case 7:sphere(x,y,z,r,b,bd);break;
case 8:yuanzhuy(x,y,z,r,b,bd);break;
case 81:yuanzhux(x,y,z,r,b,bd);break;
case 82:yuanzhuz(x,y,z,r,b,bd);break;
case 9:yuanzhui(x,y,z,r,b,bd);break;
case 10:yuantai(x,y,z,r,b,bd);break;
case 11:tiankeng(x,y,z,stre,b,bd);break;
case 12:jinzita(x,y,z,h,r,b,bd);break;
case 13:halfsphere(x,y,z,r,b,bd);break;
case 14:ycircleround(x,y,z,r,h,b,bd);break;
case 15:xcircleround(x,y,z,r,h,b,bd);break;
case 16:zcircleround(x,y,z,r,h,b,bd);break;
case 17:shanmai(x,y,z,stre,b,bd);break;
case 18:yanchangy(x,y,z,stre,b,bd);break;
case 19:yanchangx(x,y,z,stre,b,bd);break;
case 20:yanchangz(x,y,z,stre,b,bd);break;
case 21:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid1(b,bd);break;
case 22:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid2(b,bd);break;
case 23:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid3(b,bd);break;
case 24:tuosphere(x,y,z,b,bd);break;
case 30:tuospherey(x,y,z,b,bd);break;
case 31:tuospherex(x,y,z,b,bd);break;
case 32:tuospherez(x,y,z,b,bd);break;
case 101:manshe(x,y,z,stre,b,bd);break;
case 102:shentou(x,y,z,stre,b,bd);break;
case 103:shentou2(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 104:tiankengy(x,y,z,stre,b,bd);break;
case 105:tiankengx(x,y,z,stre,b,bd);break;
case 106:tiankengz(x,y,z,stre,b,bd);break;
case 107:dbxy(x,y,z,r,h,bz,b,bd);break;
case 108:dbxx(x,y,z,r,h,bz,b,bd);break;
case 109:dbxz(x,y,z,r,h,bz,b,bd);break;
case 110:shentou2y(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 111:shentou2x(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 112:shentou2z(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 201:tree1(x,y,z,b,bd);break;
case 202:tree2(x,y,z,b,bd);break;
case 203:tree3(x,y,z,b,bd);break;
case 204:tree4(x,y,z,b,bd);break;
case 205:tree5(x,y,z,b,bd);break; 
case 301:caves(x,y,z,cave);break; 
case 302:qiuling(x,y,z,r,h);break; 
}
crd=null
print2("放置")
}}

function ycircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i,y,z+j,b,bd)
}}}

function xcircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x,y+i,z+j,b,bd)
}}}

function zcircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i,y+j,z,b,bd)
}}}

function yround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x+i,y,z+j,b,bd)
}}}

function xround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x,y+i,z+j,b,bd)
}}}

function zround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x+i,y+j,z,b,bd)
}}} 


function unsphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i,y+k,z+j,b,bd)
}}}}


function halfsphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=0;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i,y+k,z+j,b,bd)
}}}}

function tuosphere(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,b,c)
a=a/r
b=b/r
c=c/r////
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i*a,y+k*b,z+j*c,ib,bd)
}}}}

function tuospherey(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,c)
a=a/r
c=c/r////
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i*a,y,z+j*c,ib,bd)
}}}

function tuospherex(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(b,c)
b=b/r
c=c/r////
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(j*j+k*k<r*r&&+j*j+k*k>=(r-1)*(r-1))settile(x,y+k*b,z+j*c,ib,bd)
}}}


function tuospherez(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,b)
a=a/r
b=b/r
for(var i=-r;i<=r;i++){
for(var k=-r;k<=r;k++){
if(i*i+k*k<r*r&&i*i+k*k>=(r-1)*(r-1))settile(x+i*a,y+k*b,z,ib,bd)
}}}



function sphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r)settile(x+i,y+k,z+j,b,bd)
}}}
}


//长方体实
function cuboid1(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){ 
settile(n1+x,n2+y,n3+z,i,id)
}}}
}
//长方体空
function cuboid2(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){ 
settile(n1+x,y1,n3+z,i,id) 
settile(n1+x,y2,n3+z,i,id)}}
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){ 
settile(n1+x,n2+y,z2,i,id) 
settile(n1+x,n2+y,z1,i,id)}}
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){ 
settile(x1,n2+y,n3+z,i,id) 
settile(x2,n2+y,n3+z,i,id)}}
} 

//长方体实框架
function cuboid3(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
settile(n1+x,y1,z1,i,id) 
settile(n1+x,y1,z2,i,id)  
settile(n1+x,y2,z1,i,id)  
settile(n1+x,y2,z2,i,id)  
}
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
settile(x1,n2+y,z1,i,id)  
settile(x1,n2+y,z2,i,id)   
settile(x2,n2+y,z1,i,id)   
settile(x2,n2+y,z2,i,id)   
}
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){
settile(x1,y1,n3+z,i,id)   
settile(x1,y2,n3+z,i,id)    
settile(x2,y1,n3+z,i,id)    
settile(x2,y2,n3+z,i,id)
}
} 




function yuanzhuy(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+i,y+m,z+j,b,bd)}
}}}
}


function yuanzhux(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+m,y+i,z+j,b,bd)}
}}}
}


function yuanzhuz(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+i,y+j,z+m,b,bd)}
}}}
}

function yuanzhui(x,y,z,r,b,bd){
for(var m=h;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=r/h*m
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+h-m,z+j,b,bd)
}}}
for(var m=r;m>0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=h/r*m
if(i*i+j*j<=(r-m)*(r-m)&&i*i+j*j>=((r-m)-1)*((r-m)-1))settile(x+i,y+u,z+j,b,bd)
}}}
}


function yuantai(x,y,z,r,b,bd){
var hs=h*Math.max(r,sbr)/(Math.max(r,sbr)-Math.min(r,sbr))
////

if(r>sbr){
for(var m=hs;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=r/hs*m
if(u>=sbr){
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+hs-m,z+j,b,bd)
}}}}
for(var m=r;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=hs/r*m
if(u<h){
if(i*i+j*j<=(r-m)*(r-m)&&i*i+j*j>=((r-m)-1)*((r-m)-1))settile(x+i,y+u,z+j,b,bd)
}}}}
}
else if(r<sbr){
var rs=sbr
var sbrs=r
for(var m=hs;m>=0;m--){
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
var u=rs/hs*m
if(u>=sbrs){
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+h-(hs-m),z+j,b,bd)
}}}}
for(var m=rs;m>=0;m--){
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
var u=hs/rs*m
if(u<h){
if(i*i+j*j<(rs-m)*(rs-m)&&i*i+j*j>=((rs-m)-1)*((rs-m)-1))settile(x+i,y+h-u,z+j,b,bd)
}}}}
}
else if(r==sbr){yuanzhu(x,y,z,r,b,bd)}
}


function jinzita(x,y,z,h,r,id,bd){
var l=Math.max(h,r)
for(var j=0;j<l;j++){
var b=Math.floor(j/l*(r)),a=Math.round(j/l*(h))
for(var e=-b;e<=b;e++){
settile(x+e,y+h-a-1,z-b,id,bd)
settile(x+e,y+h-a-1,z+b,id,bd)
settile(x-b,y+h-a-1,z+e,id,bd)
settile(x+b,y+h-a-1,z+e,id,bd)
}
}
}







function manshe(x,y,z,l,b,bd){

for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r)
var m=getTile(x+i,y+k,z+j)
var n=getData(x+i,y+k,z+j)
if(m!=0){
settile(x+i,y+k,z+j,0)
settile(x+i-l+2*l*Math.random(),y+k-l+2*l*Math.random(),z+j-l+2*l*Math.random(),m,n)
}
}}}
}






function tiankeng(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(5)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)tiankeng(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)tiankeng(x+1,y,z,l-random,id,bd);break; 
case 2:
if(getTile(x,y,z-1)==0)tiankeng(x,y,z-1,l-random,id,bd);break;
case 3:
if(getTile(x,y,z+1)==0)tiankeng(x,y,z+1,l-random,id,bd);break;
case 4:
if(getTile(x,y-1,z)==0&&y>0)tiankeng(x,y-1,z,l-random,id,bd);break;
case 5:x+=1;break;
 }
}
}}



function shanmai(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)shanmai(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)shanmai(x+1,y,z,l-random,id,bd);break; 
case 2:
if(getTile(x,y,z-1)==0)shanmai(x,y,z-1,l-random,id,bd);break;
case 3:
if(getTile(x,y,z+1)==0)shanmai(x,y,z+1,l-random,id,bd);break;
case 4:
if(getTile(x,y+1,z)==0&&y<128)shanmai(x,y+1,z,l-random,id,bd);break;
case 5:
if(getTile(x,y-1,z)==0&&y>0)shanmai(x,y-1,z,l-random,id,bd);break;
 }
}
}}



function yanchangy(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x,y+m,z)!=0)break;
settile(x,y+m,z,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x,y-m,z)!=0)break;
settile(x,y-m,z,id,bd)}
}
function yanchangx(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x+m,y,z)!=0)break;
settile(x+m,y,z,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x-m,y,z)!=0)break;
settile(x-m,y,z,id,bd)}
}
function yanchangz(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x,y,z+m)!=0)break;
settile(x,y,z+m,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x,y,z-m)!=0)break;
settile(x,y,z-m,id,bd)}
}



function ranz(a){
var n=[]
var j=0
for(var m=0;m<a;m++){n.push(Math.random()-1)}
var q
for(var m=0;m<a;m++){
for(q in n){
var min=Math.min.apply(Math,n)
if(n[q]==min){n[q]=j;j++;break}
}}
return n
}


function shentou(x,y,z,l,id,bd){
var o=getTile(x,y,z)
if(o!=0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x-1,y,z,l-Math.random(),id,bd);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x+1,y,z,l-Math.random(),id,bd);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y-1,z,l-Math.random(),id,bd);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y+1,z,l-Math.random(),id,bd);break;
case 4:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y,z-1,l-Math.random(),id,bd);break;
case 5:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y,z+1,l-Math.random(),id,bd);break;
}}
}}

function shentou2(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y+1,z,l-Math.random(),id,bd,f,g);break;
case 4:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 5:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}


function shentou2y(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2y(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2y(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2y(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2y(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}

function shentou2x(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y+1,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}


function shentou2z(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x,y+1,z,l-Math.random(),id,bd,f,g);break;
}}
}}
}



function tuoyuan(is,ids)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var a=(x1+x2)*0.5,b=(y1+y2)*0.5,c=(z1+z2)*0.5
var q=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var rs=q*0.5+r
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
for(var k=-rs;k<=rs;k++){
var g=Math.sqrt((x1-a-i-0.5)*(x1-a-i-0.5)+(y1-b-j-0.5)*(y1-b-j-0.5)+(z1-c-k-0.5)*(z1-c-k-0.5))+Math.sqrt((x2-a-i-0.5)*(x2-a-i-0.5)+(y2-b-j-0.5)*(y2-b-j-0.5)+(z2-c-k-0.5)*(z2-c-k-0.5))
if(g<q+r+0.9&&g>q+r-0.9)settile(a+i,b+j,c+k,is,ids)
}}}
}


function tiankengx(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x,y,z-1)==0)tiankengx(x,y,z-1,l-random,id,bd);break;
case 1:
if(getTile(x,y,z+1)==0)tiankengx(x,y,z+1,l-random,id,bd);break;
case 2:
if(getTile(x,y+1,z)==0&&y<255)tiankengx(x,y+1,z,l-random,id,bd);break;
case 3:
if(getTile(x,y-1,z)==0&&y>0)tiankengx(x,y-1,z,l-random,id,bd);break;
}}}}

function tiankengz(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)tiankengz(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)tiankengz(x+1,y,z,l-random,id,bd);break;
case 2:
if(getTile(x,y+1,z)==0&&y<255)tiankengz(x,y+1,z,l-random,id,bd);break;
case 3:
if(getTile(x,y-1,z)==0&&y>0)tiankengz(x,y-1,z,l-random,id,bd);break;
}}}}

function tiankengy(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x,y,z-1)==0)tiankengy(x,y,z-1,l-random,id,bd);break;
case 1:
if(getTile(x,y,z+1)==0)tiankengy(x,y,z+1,l-random,id,bd);break;
case 2:
if(getTile(x+1,y,z)==0)tiankengy(x+1,y,z,l-random,id,bd);break;
case 3:
if(getTile(x-1,y,z)==0)tiankengy(x-1,y,z,l-random,id,bd);break;
}}}}


function dbxy(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x+xm,y,z+zm]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x+xm,y,z+zm]
lianxian(s1,s2,i,id)
s1=s2
}}

function dbxx(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x,y+xm,z+zm]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x,y+xm,z+zm]
lianxian(s1,s2,i,id)
s1=s2
}}

function dbxz(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x+zm,y+xm,z]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x+zm,y+xm,z]
lianxian(s1,s2,i,id)
s1=s2
}}


function replaces(aa,ba,ca,ab,bb,cb)
{
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
var v
var f=replaceids.split(" ");
var w=replaceid.split(" ");
for(v in w){
var o=w[v]
if(o>=0){
if(f>=0){if(o==k){
settile(n1+x,n2+y,n3+z,f)
}}
else{f=f[0].split(":");if(o==k){settile(n1+x,n2+y,n3+z,f[0],f[1])}}}
else{o=o.split(":");if(o[0]==k&&o[1]==e){if(f>=0){
if(f>=0){settile(n1+x,n2+y,n3+z,f)}}
else{f=f[0].split(":");if(o[0]==k&&o[1]==e){
settile(n1+x,n2+y,n3+z,f[0],f[1])}}}
}
}
}}}
print2("替换完成")
}



function replaces2(aa,ba,ca,ab,bb,cb)
{
var p=parseInt
var set
if(replaceidset>=0){set=[replaceidset,0]}else{set=replaceidset.split(":")}
var xyz1=repxyz[0]
var xyz2=repxyz[1]
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
var k1=getTile(n1+x+xyz1[0],n2+y+xyz1[1],n3+z+xyz1[2])
var e1=Level.getData(n1+x+xyz1[0],n2+y+xyz1[1],n3+z+xyz1[2])
var v
var m
var fx=replaceids.split(" ");
var w=replaceid.split(" ");
for(v in w){
var o=w[v]
if(o>=0){
if(o==k){
for(m in fx){
var f=fx[m]
if(f>=0){if(f==k1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
else{f=f.split(":");if(f[0]==k1&&f[1]==e1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
}}}
else{o=o.split(":");if(o[0]==k&&o[1]==e){
for(m in fx){
var f=fx[m]
if(f>=0){if(f==k1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
else{f=f.split(":");if(f[0]==k1&&f[1]==e1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
}}
}}
}}}
print2("替换完成")
}







var he=0
var ptk=0
var pte=0
var ptt=0
var pts=0
function cpt()
{
ptt++
if(ptt%10==1){
var w=replaceid.split(" ");
if(he<w.length){
var v
var o=w[he]
if(o>=0){if(o>0){ptk=o;pte=0}else{ptk=0;pte=0}}
else if(o!=null){o=o.split(":");
if(o[0]>0){ptk=o[1];ptk=o[1]}else{ptk=0;pte=0}}}
else{ptk=0;pte=0}


print2((pts+he*4+1)+"/"+(128*4-h*4+4))
if(pts==0){
for(var x=0;x<=128;x++){
for(var y=0;y<=128;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==1){
for(var x=0;x<=128;x++){
for(var y=129;y<=255;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==2){
for(var x=129;x<=255;x++){
for(var y=0;y<=128;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==3){
for(var x=129;x<=255;x++){
for(var y=129;y<=255;y++){
settile(x,h+he,y,ptk,pte)
}}}
pts++
if(pts==4){
he++
pts=0
}
if(he+h>128){
pt=false
he=0
if(h<64){
for(var x=-3;x<=3;x++){
for(var y=-3;y<=3;y++){
settile(128+x,64,128+y,7)
}}}}

}
}

function ycircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//ycircle(x,y+i,z,h+j,b,bd)
if(h-j>=0)ycircle(x,y+i,z,h-j,b,bd)
}
}}}

function xcircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//xcircle(x+i,y,z,h+j,b,bd)
if(h-j>=0)xcircle(x+i,y,z,h-j,b,bd)
}
}}}

function zcircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//zcircle(x,y,z+i,h+j,b,bd)
if(h-j>=0)zcircle(x,y,z+i,h-j,b,bd)
}
}}}


function noj1(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
settile(Math.round(x1+i),Math.round(y1+j),Math.round(z1+k),b1,bd)
}}}}}}

function noj2(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q-1&&qs<q+1){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],s1,b1,bd)
}}}}}}

function noj3(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],[Math.round(x2+i),Math.round(y2+j),Math.round(z2+k)],b1,bd)
}}}}}}


function noj4(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+2){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],s2,b1,bd)
}}}}}}


function noj5(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
//var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)
var y=(y1-y2)
var z=(z1-z2)
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
settile(Math.round(x1+i),Math.round(y1+j),Math.round(z1+k),b1,bd)
}}}}}}


function noj6(s1,s2,r,h,b1,bd)
{//r小h大
h=parseInt(h)
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var a=(x1-x2)/l*4*r
var b=(y1-y2)/l*4*r
var c=(z1-z2)/l*4*r
for(var w=-r;w<=r;w=w+0.5){
//var u=Math.sqrt(r*r-w*w)
var e=1
if(w<0)e=-1
var d=Math.sqrt(r*r-w*w)
var x=-(x1-x2)/l*d*e
var y=-(y1-y2)/l*d*e
var z=-(z1-z2)/l*d*e
if(r-w==0){x=0;y=0;z=0}
noj1([x1+x,y1+y,z1+z],s2,h+w,b1,bd)
if(h-w>=0)noj1([x1+x,y1+y,z1+z],s2,h-w,b1,bd)
}}





function intopit()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
add.setText("确认选择图片");

var t=new android.widget.TextView(ctx);
t.setText("欢迎使用！全部输入完毕后点击<开始＞按钮开始生储存到复制粘贴。由于羊毛色彩限制，所以色差较大，且无法智能解决，所以您可以在生成后用替换和相同方块渗透修改润色！啦啦菌的算法，6g3y改进");
tmiLayout.addView(t);

var t=new android.widget.TextView(ctx);
t.setText("请输入图片路径，如:/sdcard/1.png");
tmiLayout.addView(t);

id.setHint("输入路径");
id.setHint("请输入图片路径，如:/sdcard/1.png");
id.setText("/sdcard/*.png")

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("请输入图片地址");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
var h=id.getText()
try{
var bitmap= android.graphics.BitmapFactory.decodeFile(h);
var h=bitmap.getHeight();
var w=bitmap.getWidth();
intopit2(bitmap,h,w)
}catch(err){
  clientMessage("错误: 图片路径(格式)错误，请核对图片格式以及路径(png/jpg格式)")
}
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function intopit2(bitmap,h,w)
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("个人建议，范围在500*500之内\n输入该图片起始点，结束点\n说明 NUM>0 AND NUM<=max\n高度:"+h+"    宽度:"+w+"\n起始点为图片右上角，结束点为图片右下角\n请输入图片路径，如:/sdcard/1.png\n输入将会储存到复制粘贴\n注意:图片复制格式，y增，z增方向，从x+到x-看正面");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("缩小倍数(整数):");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("输入倍数");
ip.setText("1")
l.addView(ip);

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否RGB模式生成\(选择为RGB，不选为HSV，ps:RGB更科学,HSV更流畅，但色差都大！)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});
var ms2=false
var cd=new android.widget.CheckBox(ctx);
cd.setText("是否RGB2标准模式生成(RBG勾选了这个就没有用)\(选择为RGB2，不选为HSV，RBG，ps:RGB系列更卡更科学,HSV更流畅，但色差都大！)");
cd.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms2=true;else ms2=false;
				}
		});

var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("起始点(高):");
la.addView(t);
var id = new android.widget.EditText(ctx);
id.setHint("输入起始点");
id.setText("1")
la.addView(id);
var lb=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("起始点(宽):");
lb.addView(t);
var id2 = new android.widget.EditText(ctx);
id2.setHint("输入起始点");
id2.setText("1")
lb.addView(id2);
var lc=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("结束点(高):");
lc.addView(t);
var id3 = new android.widget.EditText(ctx);
id3.setHint("输入结束点");
id3.setText(String(h))
lc.addView(id3);
var ld=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("结束点(宽):");
ld.addView(t);
var id4 = new android.widget.EditText(ctx);
id4.setHint("输入起始高度");
id4.setText(String(w))
ld.addView(id4);




//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(cr,svp);
layout.addView(cd,svp);
layout.addView(la,svp);
layout.addView(lb,svp);
layout.addView(lc,svp);
layout.addView(ld,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("像素图储存")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
var h1=parseInt(id.getText())-1
var w1=parseInt(id2.getText())-1
var h2=parseInt(id3.getText())
var w2=parseInt(id4.getText())
var b=Math.floor(parseInt(ip.getText()))
if(b<1)b=1
pictures=[true,bitmap,ms,h1,w1,h2,w2,b,ms2]
//clientMessage(bitmap+","+ms+","+h1+","+w1+","+h2+","+w2);
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

var pictures=[false]





function picture(bitmap,rgb,h1,w1,h2,w2,ub,usb)
{
var sa=[]
var sb=[]
var sc=[]
for(var js=0;js<h2-h1;js=js+ub){sc=[]
for(var jb=0;jb<w2-w1;jb=jb+ub){
	var color=bitmap.getPixel(jb+w1,js+h1);
		 if(rgb==false&&usb==true)
  {
  var r=android.graphics.Color.red(color),
	g=android.graphics.Color.green(color),
	b=android.graphics.Color.blue(color);
  var cgy=gyrgb(r,g,b)
  var id=cgy[0]
  var jg=cgy[1]
  }
  else if(rgb==false)
  {
		var he=gethsv(color);
    var jg=jiance(he[0],he[1],he[2]);
    var id=35;
  }
  else if(rgb)
  {
  var r=android.graphics.Color.red(color),
	g=android.graphics.Color.green(color),
	b=android.graphics.Color.blue(color);
		var temp=jiancergb(r,g,b);
    var jg=0,id;
    if(temp<=15) {jg=temp;id=35;}
    else
    {
       switch(temp)
       {
         case 16:id=1;break;
         case 17:id=3;break;
       }
    }
  }
  
		if(android.graphics.Color.alpha(color)<=20)
		{
      //settile(js-1,h2-h1-jb-1,1,0);
      sc.unshift([0,0])
		}
		else
    {
      //settile(js-1,h2-h1-jb-1,1,id,jg);
      sc.unshift([id,jg])
    }
}
sb.unshift(sc)
}
sa.push(sb)
biockgroup[copytime]=sa
pictures=[false]
print2("已输入复制粘贴")
}


function jiance(h,s,v)
{if(h>80&&h<=160){
if(s>0.1&&0.2<v&&v<=0.55)return 13;
else		return 5;}
if(s<=0.1&&v>0.85){return 0;}
if(s<=0.1&&v>0.65&&v<=0.85){	return 8;}
	if(v<=0.3)	{		return 15;}
if(s<=0.1&&0.3<v&&v<=0.65){return 7;}
	if(h>20&&h<=50){
if(s>0.1&&0.3<v&&v<=0.55)return 12;
else return 1;}
if(h>280&&h<=300)	{	return 2;}
if(h>200&&h<=220){	return 3;}
	if(h>50&&h<=80)	{
if(s>0.1&&0.3<v&&v<=0.5) return 12;
else	return 4;}
if(h>300&&h<=340){		return 6;	}
	if(h>160&&h<=190)	{		return 9;	}
	if(h>260&&h<=280)	{		return 10;	}
	if(h>190&&h<=260)	{		return 11;	}
	if((h>340&&h<=360)||(h>=0&&h<=20)){
 if(0.1<=s&&s<=0.5&&v>=0.75) return 6;
else	return 14;}
	else{		return 15;	}
}


function gethsv(ys){
var r=android.graphics.Color.red(ys)/255,
	g=android.graphics.Color.green(ys)/255,
	b=android.graphics.Color.blue(ys)/255;
var h, s, v;
var min, max, delta;
min = Math.min(Math.min(r, g), b);
max = Math.max(Math.max(r, g), b);
v = max;
delta = max - min;
if( max != 0 ) 
	s = delta / max; 
else 
{ 
s = 0; 
h = -1; 
	return [h,s,v];
}
// H 
if(max==min)
	h=0;
if(max==r&&g>=b)
	h=60*(g-b)/delta;
if(max==r&&g<b)
	h=60*(g-b)/delta+360;
if(max==g)
	h=60*(b-r)/delta+120;
if(max==b)
	h=60*(r-g)/delta+240;
return [h,s,v]; 
}

var red=new Array(209,232,188,89,182,55,213,63,148,37,122, 36,81,52,155,23, 127,121,188,220,255)
var blue=new Array(209,46,199,208,24,44,144,63,157,140,188, 145,26,23,38,19, 127,58,98,162,68);
var green=new Array(209,121,62,128,169,179,118,63,157,109,47, 48,48,72,42,19, 127,85,152,211,241)

function jiancergb(R,G,B)
{
   var minrgb=Math.sqrt(Math.pow(R-209,2)+ Math.pow(G-209,2)+ Math.pow(B-209,2));
   var minjs;//相近颜色对应js
   for(var forjs=0;forjs<18;forjs++)
   {
     var tempr,tempg,tempb,temprgb;
     temprgb=Math.sqrt(Math.pow(R-red[forjs],2)+ Math.pow(G-green[forjs],2)+ Math.pow(B-blue[forjs],2));
     if(temprgb<=minrgb)
     {
       minjs=forjs;
       minrgb=temprgb;
     }
   }
   return minjs;
}

var color=[
[35,0,217,218,219],
[35,8,160,160,160],
[35,7,62,62,62],
[35,15,15,15,15],
[35,12,72,44,27],
[35,14,150,50,45],
[35,1,220,121,56],
[35,4,184,170,40],
[35,5,67,175,55],
[35,13,48,26,24],
[35,9,41,108,134],
[35,3,114,144,205],
[35,11,44,60,145],
[35,10,123,56,179],
[35,6,203,117,143],
[41,0,255,244,67],
[57,0,132,229,224],
[24,2,230,217,164],
[3,0,124,85,57],
[5,1,89,66,38],
[5,0,153,124,74],
[5,2,209,187,128],
[5,3,184,131,93],
[49,0,39,33,59],
[82,0,156,163,175],
[155,0,242,237,236],
[5,4,175,90,50],
[133,0,68,217,103],
[172,0,151,89,61],
[159,0,210,177,165],
[159,1,165,82,33],
[159,2,156,87,112],
[159,3,115,106,133],
[159,4,198,135,33],
[159,5,104,116,50],
[159,6,161,77,74],
[159,7,57,43,33],
[159,8,137,108,99],
[159,9,90,90,90],
[159,10,115,67,85],
[159,11,73,58,89],
[159,12,70,47,33],
[159,13,71,77,37],
[159,14,131,53,41],
[159,15,24,15,8]
]
var rbgblock=[],blr=[],blb=[],blg=[]
for (var m in color){
rbgblock[m]=[color[m][0],color[m][1]]
blr[m]=color[m][2]
blg[m]=color[m][3]
blb[m]=color[m][4]
}/*
var rbgblock=[[35,0],[35,8],[35,7],[35,15],[35,12],[35,14],[35,1],[35,4],[35,5],[35,13],[35,9],[35,3],[35,11],[35,10],[35,6],[41,0],[42,0],[57,0],[24,2],[3,0],[5,1],[5,0],[5,2],[5,3],[112,0],[49,0],[82,0],[155,0],[87,0],[1,2],[5,4],[133,0],[87,0],[172,0],[159,0],[159,1],[159,2],[159,3],[159,4],[159,5],[159,6],[159,7],[159,8],[159,9],[159,10],[159,11],[159,12],[159,13],[159,14],[159,15]]//121,85,58
var blr=[220,180,60,0,80,255,200,220,90,60,60,125,60,140,220,255,230,140,190,140,120,160,180,180,25,0,160,255,100,150,190,0,180,160,210,180,155,130,190,120,155,80,120,140,160,100,100,100,230,30]
var blb=[220,180,60,0,60,0,140,200,170,80,120,0,60,80,160,255,230,190,190,100,85,140,160,140,25,0,160,255,0,0,40,0,180,60,140,0,135,255,35,35,95,0,0,10,90,90,0,0,0,0]
var blg=[220,180,60,0,45,0,55,40,65,5,145,205,125,165,185,0,230,255,150,10,58,65,125,85,25,65,145,255,0,120,120,255,180,120,180,100,100,130,135,160,100,60,140,80,80,80,60,100,90,0]


//print(rbgblock[20]+","+blr[20]+","+blb[20]+","+blg[20])

var rbgl=[]
addu()
function addu(){
var usde
var l=[1]
for(usde in blr){
l[usde]=gyrgb2(blr[usde],blg[usde],blb[usde])/2}
rbgl=l
/*var min=Math.min.apply(Math,l)
var q=0
for(usde in l){
q+=l[usde]
}
q=q/l.length////
//print(min+","+q)
}
function gyrgb2(R,G,B)
{
   var l=new Array()
   var fx
for(fx in rbgblock){
   var m=((R-blr[fx])*(R-blr[fx])+(G-blg[fx])*(G-blg[fx])+(B-blb[fx])*(B-blb[fx]))
   if(m>0){l[fx]=m}else{l[fx]=255}
}
  return Math.min.apply(Math,l)
}
//print2(rbgblock.length +";"+blr.length +";"+blg.length+";"+blb.length)
var rbgused=[0,0,0,-1,[]]
function gyrgb(R,G,B)
{
if(rbgused[3]>((R-rbgused[0])*(R-rbgused[0])+ (G-rbgused[1])*(G-rbgused[1])+ (B-rbgused[2])*(B-rbgused[2]))){
return rbgused[4]
}
   var l=new Array()
   var fx
for(fx in rbgblock){
   l[fx]=((R-blr[fx])*(R-blr[fx])+ (G-blg[fx])*(G-blg[fx])+ (B-blb[fx])*(B-blb[fx]))
}
  var min=Math.min.apply(Math,l)
  var fd
for(fd in l){
if(l[fd]==min){
rbgused=[blr[fd],blg[fd],blb[fd],rbgl[fd],rbgblock[fd]]
return rbgblock[fd];
break}
}
}

var shuangjitime=0
function shuangjis(a,b)
{
if(shuangjitime==1){
Entity.setCarriedItem(getplayerent(), a, 1, b);
print2("已经获取方块")
}
else{
shuangjitime=1
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
shuangjitime=0
}}),300);
}}))}
}


function xiacui(x,y,z,l,id,bd){
for(var m=1;m<l;m++){
var n=getTile(x,y-m,z)
if(n==0||n==18){settile(x,y-m,z,id,bd)}else{break;}
}
}

function caves(x,y,z,cave,tt){
var ls=cave[1]
var cv=cave[2]
var lofs=ls/cave[2]
var ls2=lofs
var yaw=cave[0]
if(cave[0]>=0||cave[0]<0){}else{yaw=Math.random()*7200}
var pitch=-45
var pi=Math.PI/180//// 
var s1=[x,y,z]
var s2=[x,y,z]
var i=-10+Math.random()*20
for(var u=0;u<=ls;u+=i){
if(pitch>12)pitch=-45 
pitch+=5+Math.random()*5  
if(tt)pitch=Math.random()*5
s2[0] =s1[0]-Math.sin(yaw*pi)*i*Math.cos(pitch*pi)
s2[1] =s1[1]+Math.sin(pitch*pi)*i
s2[2] =s1[2]+Math.cos(yaw*pi)*i*Math.cos(pitch*pi)
if(s2[1]<10){s2[1]=10+10*Math.random()}
if(u>lofs){
cv--
if(cave[3][1]==false)cv=0
lofs+=ls2
caves(x,y,z,[yaw+90*(Math.round(Math.random())*2-1),ls-u,cv,[false,cave[3][1],cave[3][2]],0])}
yaw=yaw+90-180*Math.random()
i=5+Math.random()*5  
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m++){
var v=getTile(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)))
if(v!=0&&v!=95)fdx(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)))}////
s1=[s2[0],s2[1],s2[2]]
}
if(cave[3][0]){
var l=cave[4]
var x=s2[0]
var y=s2[1]
var z=s2[2]
for(var i=-l;i<=l;i+=2){
for(var j=-l;j<=l;j+=2){
if(i*i+j*j<=Math.pow(l-0.3*l*Math.random(),2)){
if(getTile(x+i,y-1,z+j)!=0){fdx(x+i,y-1+2*Math.random(),z+j)}}
if(i*i+j*j<=Math.pow(l-0.5*l*Math.random(),2)){
if(getTile(x+i,y+3,z+j)!=0){fdx(x+i,y+3+2*Math.random(),z+j)}}
}}
if(getTile(s2[0],s2[1]-4,s2[2])!=0&&cave[3][2]&&Math.random()>0.5)tiankengy(s2[0],s2[1],s2[2],l*0.6,11,0);
}
else if(cave[3][2]){
if(pitch<-10&&pitch>-45&&getTile(s2[0],s2[1]-3,s2[2])!=0)tiankengy(s2[0],s2[1],s2[2],l/2,11,0);////
}
}



function tree1(x,y,z,b,bd)
{
if(b==17){
var l=15+Math.random()*20
yanchangy(x,y,z,l*0.1,17,bd);
yanchangy(x+1,y,z,l*0.1,17,bd);
yanchangy(x+1,y,z+1,l*0.1,17,bd);
yanchangy(x,y,z+1,l*0.1,17,bd);
shanmai(x,y+l,z,4,18,bd%4);
shanmai(x+1,y+l,z+1,4,18,bd%4);
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,18,bd%4)
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,18,bd%4)
}
if(b==162){
var l=15+Math.random()*20
yanchangy(x,y,z,l*0.1,162,bd);
yanchangy(x+1,y,z,l*0.1,162,bd);
yanchangy(x+1,y,z+1,l*0.1,162,bd);
yanchangy(x,y,z+1,l*0.1,162,bd);
shanmai(x,y+l,z,4,161,bd%4);
shanmai(x+1,y+l,z+1,4,161,bd%4);
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,161,bd%4)
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,161,bd%4)
}}


function tree2(x,y,z,b,bd){
if(b==17){
var pi=Math.PI/180////
var l=5
h=l
yuanzhuy(x,y,z,1,17,12+bd%4)
h=1
yuanzhuy(x,y,z,2,17,12+bd%4)
h=0
yuanzhuy(x,y,z,3,17,12+bd%4)
var s1=[x,y+l,z]
var o=10
for(var m=0;m<16;m++){
var a=Math.cos((Math.random()+m)*22.5*pi)*o
var b=Math.sin(Math.random()*90*pi)*o
var c=Math.sin((Math.random()+m)*22.5*pi)*o
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,18,bd%4);}
for(var m=0;m<8;m++){
var a=Math.cos((Math.random()+m)*45*pi)*o/2
var b=Math.sin(Math.random()*90*pi)*o*1.5
var c=Math.sin((Math.random()+m)*45*pi)*o/2
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,18,bd%4);}}
if(b==162){
var pi=Math.PI/180////
var l=5
h=l
yuanzhuy(x,y,z,1,162,12+bd%4)
h=1
yuanzhuy(x,y,z,2,162,12+bd%4)
h=0
yuanzhuy(x,y,z,3,162,12+bd%4)
var s1=[x,y+l,z]
var o=10
for(var m=0;m<16;m++){
var a=Math.cos((Math.random()+m)*22.5*pi)*o
var b=Math.sin(Math.random()*90*pi)*o
var c=Math.sin((Math.random()+m)*22.5*pi)*o
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,161,bd%4);}
for(var m=0;m<8;m++){
var a=Math.cos((Math.random()+m)*45*pi)*o/2
var b=Math.sin(Math.random()*90*pi)*o*1.5
var c=Math.sin((Math.random()+m)*45*pi)*o/2
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,161,bd%4);}
}}


function tree3(x,y,z,b,bd){
if(b==17){
var pi=Math.PI/180////
var l=10+Math.random()*10
yanchangy(x,y,z,l*0.12,17,bd);
shanmai(x,y+l*1.2,z,3,18,bd%4);
var o=Math.random()*3+1
for(var m=0;m<o;m++){
var q=Math.random()
var s1=[x,y+l*q*0.5+4,z]
var a=Math.cos(Math.random()*7200*pi)*0.4*l
var b=Math.sin(Math.random()*90*pi)*0.3*l
var c=Math.sin(Math.random()*7200*pi)*0.4*l
var s2=[x+a,y+l*q*0.5+4+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l*q*0.5+4+b,z+c,2,18,bd%4);}}
if(b==162){
var pi=Math.PI/180////
var l=10+Math.random()*10
yanchangy(x,y,z,l*0.12,162,bd);
shanmai(x,y+l*1.2,z,3,161,bd%4);
var o=Math.random()*3+1
for(var m=0;m<o;m++){
var q=Math.random()
var s1=[x,y+l*q*0.5+4,z]
var a=Math.cos(Math.random()*7200*pi)*0.4*l
var b=Math.sin(Math.random()*90*pi)*0.3*l
var c=Math.sin(Math.random()*7200*pi)*0.4*l
var s2=[x+a,y+l*q*0.5+4+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l*q*0.5+4+b,z+c,2,161,bd%4);
}}}


function tree4(x,y,z,b,bd)
{
if(b==17){
var l=3+Math.random()*3
yanchangy(x,y,z,l*0.1,17,bd);
shanmai(x,y+l,z,2,18,bd%4);}
if(b==162){
var l=3+Math.random()*3
yanchangy(x,y,z,l*0.1,162,bd);
shanmai(x,y+l,z,2,161,bd%4);
}}

function tree5(x,y,z,b,bd)
{
if(b==17){
var l=10+Math.random()*5
yanchangy(x,y,z,l*0.1,17,bd);
shanmai(x,y+l,z,2,18,bd%4);
shanmai(x,y+l*0.65,z,2,18,bd%4); }
if(b==162){
var l=10+Math.random()*5
yanchangy(x,y,z,l*0.1,162,bd);
shanmai(x,y+l,z,2,161,bd%4);
shanmai(x,y+l*0.65,z,2,161,bd%4); 
}} 


function qiuling(x,y,z,r,l)
{
var pi=Math.PI*0.5
l=l*0.7
var a=1.4
var b=4
var c=7
var d=Math.random()*30+20
var a1=Math.random()*300000
var a2=Math.random()*50000000
var a3=Math.random()*8000
for(var m=-r;m<r;m++){
for(var n=-r;n<r;n++){
var ls=(Math.cos(pi*m/r)*Math.cos(pi*n/r))*l-(Math.sin(pi*m*a/r+b)*Math.cos(pi*n*a/r+c))*l*0.25+(Math.cos(pi*m*a*2/r+b*d)+Math.sin(pi*n*a*2/r+c*d))*l*0.2-(Math.sin(pi*m*a*3/r+b*d*2)*Math.sin(pi*n*a*3/r+c*d*2))*l*0.15
if(ls>0)setlongblock(x+m,y,z+n,ls)}}
}
function setlongblock(x,y,z,l){
for(var i=0;i<=l;i++){
if(i>3)settile(x,y+l-i,z,1)
else if(i>0)settile(x,y+l-i,z,3)
else if(i==0)settile(x,y+l,z,2)
}}


function rpg(){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
var sn=Level.spawnMob(getPlayerX()+xv*2.1,getPlayerY()+yv*2.1,getPlayerZ()+zv*2.1,81)
setVelX(sn,xv*3)
setVelY(sn,yv*3)
setVelZ(sn,zv*3)
rpgs.unshift(sn)
}





clientMessage=print2



var longgetchick=false
var longgetsave=[0,-1,0,false]
function longget(){var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){

while(longgetchick){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var x,y,z
x=-Math.sin(a)*Math.cos(b)
y=-Math.sin(b)
z=Math.cos(a)*Math.cos(b)
var X=Entity.getX(getplayerent()),Y=Entity.getY(getplayerent()),Z=Entity.getZ(getplayerent())
for(var i=0;i<100;i++){
var g=getTile(X+x*i,Y+y*i,Z+z*i)
if(g!=0&&i>0){
if(X+x*(i-1)!=longgetsave[0]&&Y+y*(i-1)!=longgetsave[1]&&Z+z*(i-1)!=longgetsave[2]){setTile(X+x*(i-1),Y+y*(i-1),Z+z*(i-1),52);longgetsave=[X+x*(i-1),Y+y*(i-1),Z+z*(i-1),true];}else{longgetsave=[0,-1,0,false]}
break}}
xc.sleep(100)
if(longgetsave[3]){setTile(longgetsave[0],longgetsave[1],longgetsave[2],0);longgetsave[3]=false}
}

}}))
xc.start()}




var iskq=false;
function smallmap(nut,mus,fd){

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var fx=["→","↗","↑","↖","←","↙","↓","↘"]//方向
var fw=nut*2,kd=Math.floor(ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4/fw),px,py,pz 
////

dp = ctx.getResources().getDisplayMetrics().density;

var mX,mY;
tpopx = 5*dp;
tpopy = 25*dp;

var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1)   
//btn=new android.widget.Button(ctx);
var btn=new android.widget.ImageView(ctx);
var fill = new android.widget.LinearLayout.LayoutParams(-1, -1,1); 
btn.setLayoutParams(fill);

//btn.setTextSize(10) 
//btn.setText(fx[getyaw()]);

//btn.setBackgroundColor(android.graphics.Color.argb(100,255,255,255));

var n=btn
if(mus==true){ var newb = android.graphics. Bitmap.createBitmap((fw+1)*kd,(fw+1)*kd, android.graphics.Bitmap. Config.ARGB_8888 );
var canvasTemp = new android.graphics. Canvas( newb );
canvasTemp.drawARGB(120,0,0,0);
var drawable = new android.graphics.drawable. BitmapDrawable(newb);
n.setBackgroundDrawable(drawable);}

btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
mX=e.getX();
mY=e.getY();
break;
case 2:
var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx = tpopx + delX;
tpopy = tpopy + delY;
btn.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
break;
}
return true;
}
}));
layout.addView(btn);
btn=new android.widget.PopupWindow(layout,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4); 
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);

smallmapgui=btn
var cb=[]
for(var id=0;id<256;id++){
var atm=85
var cb2=[null]
for(var at=1;at<4;at++){
var p = new android.graphics. Paint();
if(id==0||id==6 ||id==30 ||id==37 ||id==38 ||id==39 ||id==40 ||id==106 ||id==50 ||id==51 ){p.setARGB(0,255,255,255);}//空气
else if(id==2 ||id==31||id==253 ||id==175 ||id==243 ){p.setARGB(atm*at,101,167,72);}//草
else if(id==3  ){p.setARGB(atm*at,121,85,58);}//土
else if(id==8||id==9){p.setARGB(atm*at,38,93,255);}//水
else if(id==10||id==11){p.setARGB(atm*at,252,87,0);}//岩浆
else if(id==14||id==15 ||id==16 ||id==21 ||id==22 ||id==41 ||id==42 ||id==56 ||id==57 ||id==73 ||id==74||id==129||id==133 ||id==173){p.setARGB(atm*at,252,238,75);}//矿物
else if(id==12||id==159||id==53||id==24 ||id==128||id==121){p.setARGB(atm*at,211,204,149);}//沙子
else if(id==17||id==162){p.setARGB(atm*at,106,85,52);}//深木
else if(id==18||id==81||id==161 ||id==254){p.setARGB(atm*at,41,141,41);}//树叶
else if(id==78||id==79 ||id==80){p.setARGB(atm*at,227,243,243);}//雪
else if(id==5||id==53 ||id==157 ||id==158){p.setARGB(atm*at,188,152,98);}//浅木
else if(id==1||id==4 ||id==13 ||id==48 ||id==67 ||id==98 ||id==109 ||id==255){p.setARGB(atm*at,155,155,155);}//石头
else {p.setARGB(atm*at,0,0,0);}//其他
 cb2.push(p)
}
cb.push(cb2)
}
var cg=[],r
for(r in rbgblock){
//var p = new android.graphics. Paint();
if(cg[rbgblock[r][0]]==undefined){cg[rbgblock[r][0]]=[]}
cg[rbgblock[r][0]][rbgblock[r][1]]=[1024]
for(var i=1;i<4;i++){
var p = new android.graphics. Paint();
p.setARGB(85*i,blr[r],blg[r],blb[r])
cg[rbgblock[r][0]][rbgblock[r][1]].push(p)
}
}//print(cg.length+","+cg[35][1])


var numb=[]
   for(var a=0; a<=fw ;a++)
   {
     for(var b=0; b<=fw ;b++)
     {
     if((fw/2)*(fw/2)>(-(fw/2)+a)*(-(fw/2)+a)+(-(fw/2)+b)*(-(fw/2)+b)){
     numb.push([a,b])
     }
     }
   }
var a,b




/////
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
while(iskq){


var newb = android.graphics. Bitmap.createBitmap((fw+1)*kd,(fw+1)*kd, android.graphics.Bitmap. Config.ARGB_8888 );
var canvasTemp = new android.graphics. Canvas( newb);
var p = new android.graphics. Paint();
var drawable = new android.graphics.drawable. BitmapDrawable(newb);

px=getPlayerX(),py=getPlayerY(),pz=getPlayerZ();

for(fx in numb){
a=numb[fx][0],b=numb[fx][1]
     var atm=85,at=2
     var x=px-(fw/2)+a,z=pz-(fw/2)+b
        var id=getTile(x,py-1,z);
        var bd=0//Level.getData(x,y,z) 
        if(id!=0){
        var id2=getTile(x,py,z);
        if(id2!=0){id=id2;at=3;bd=Level.getData(x,py,z)}
        else{bd=Level.getData(x,py-1,z)}
        }
        else if(id==0){id=getTile(x,py-2,z);at=1;bd=Level.getData(x,py-2,z) }
    
var sp=p
if(cg[id]!=undefined){
if(cg[id][bd]!=undefined){sp=cg[id][bd][at]}else{sp=cb[id][at]}
}else{sp=cb[id][at]}
//sp=cb[id][at]
canvasTemp.drawRect(a*kd,b*kd,a*kd+kd,b*kd+kd,sp);
}
p.setARGB(180,255,255,255);

canvasTemp.drawRect(fw*0.5*kd+kd*0.25,fw*0.5*kd+kd*0.3,fw*0.5*kd+kd*0.75,fw*0.5*kd+kd*0.7,p);
canvasTemp.drawRect(0,fw*0.5*kd+kd*0.42,fw*kd+kd,fw*0.5*kd+kd*0.58,p);
canvasTemp.drawRect(fw*0.5*kd+kd*0.42,0,fw*0.5*kd+kd*0.58,fw*kd+kd,p);
/*
p.setTextSize(4*kd);
p.setARGB(255,255,255,255);

canvasTemp.drawText(fx[getyaw()],0,kd*4,p);

//p = new android.graphics. Paint();

newb=Matrix(newb,180-getYaw(),fd*ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4*Math.SQRT2,fd*ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4*Math.SQRT2)

var drawable = new android.graphics.drawable. BitmapDrawable(newb);

ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
n.setScaleType(android.widget.ImageView.ScaleType.CENTER); 
n.setImageDrawable(drawable);
}catch(err){
print2("错误:"+err);
}}}))


xc.sleep(10)
}
}}))
xc.start()

}catch(err){
clientMessage("错误:"+err);

}}}))}



function smallmapop(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("半径");
id.setText(String(25))
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否黑色底色");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});
tmiLayout.addView(cr);
var fd=2
var cr=new android.widget.CheckBox(ctx);
cr.setText("算法缩小地图(出现正方形使用)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) fd=1;else fd=2;
				}
		});
tmiLayout.addView(cr); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("【半径】【由啦啦菌改编】");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
iskq=true;
smallmap(parseInt(id.getText()),ms,fd)
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function Matrix(bmp,r,w,h){
	 var width = bmp.getWidth(); 
	 var height = bmp.getHeight(); 
	 var scaleWidth = w / width;
	 var scaleHeight = h / height;
	 var matrix = new android.graphics.Matrix();
	 matrix.setRotate(r,width/2,bmp.height/2);
   matrix.postScale(scaleWidth, scaleHeight);
   bmp= android.graphics.Bitmap.createBitmap(bmp, 0, 0, width, height, matrix, true);	 
 return bmp;	 
 }











     
     














     
     












,33,34,35,36,84]
var copylist=["x轴镜像","y轴镜像","z轴镜像" ,"xz轴镜像","Y~90","Y~180","Y~270","X~90","X~180","X~270","Z~90","Z~180","Z~270"]
//开关门数据为1003，羊吃草的数据为2001,睡觉的数据为9800
var noworld=false
var actionlist=[["羊吃草",true,2001],["攻击所有实体",false,"p"]]
var iswater=false
var isfg=false
var isyj=false
var option_xyz=false
var pt=false
var islight=false
//编辑方块
var stre//强度
//复制粘贴
var swifz=false
var biockgroup=[[],[],[],[],[]]
var copytime=0
var nocopyid=""
//替换
var repxyz=null
var replaceid=""
var replaceids=""
var replaceidset=""
//几何体
var crd
var r=0
var sbr=0
var h=0
var rounds=["垂直Y圆圈","垂直X圆圈","垂直Z圆圈","垂直Y圆面","垂直X圆面","垂直Z圆面","空球","实球"]
var geotype=0
var cub=0
var s1=false
var s2=false
var s3=false
var s4=false

//特殊
var pl=[0,false,[2],0]
var dx=0
var isRunning = false;

//生存必备
var CAT_STARTER_KIT_ITEMS = [
  {name: "石头", id: 1, data: 0},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "草方块", id: 2, data: 0},
  {name: "泥土", id: 3, data: 0},
  {name: "圆石", id: 313, data: 0},
  {name: "木板", id: 5, data: 0},
  {name: "松木板", id: 5, data: 1},
  {name: "桦木板", id: 5, data: 2},
  {name: "丛林木板", id: 5, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "黑橡木木板", id: 5, data: 5},
  {name: "树苗", id: 6, data: 0},
  {name: "松树苗", id: 6, data: 1},
  {name: "桦树苗", id: 6, data: 2},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "基岩", id: 7, data: 0},
  {name: "水", id: 8, data: 0},
  {name: "静止的水", id: 9, data: 0},
  {name: "岩浆", id: 10, data: 0},
  {name: "静止的岩浆", id: 11, data: 0},
  {name: "沙子", id: 12, data: 0},
  {name: "红沙", id: 12, data: 1},
  {name: "砂砾", id: 13, data: 0},
  {name: "金矿石", id: 14, data: 0},
  {name: "铁矿石", id: 15, data: 0},
  {name: "煤矿石", id: 16, data: 0},
  {name: "木头", id: 17, data: 0},
  {name: "松木", id: 17, data: 1},
  {name: "桦木", id: 17, data: 2},
  {name: "丛林木", id: 17, data: 3},
  {name: "树叶", id: 18, data: 0},
  {name: "松树叶", id: 18, data: 1},
  {name: "桦树叶", id: 18, data: 2},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "海绵", id: 19, data: 0},
  {name: "玻璃", id: 20, data: 0},
  {name: "青金石矿石", id: 21, data: 0},
  {name: "青金石块", id: 22, data: 0},
  {name: "沙石", id: 24, data: 0},
  {name: "錾制沙石", id: 24, data: 1},
  {name: "平滑沙石", id: 24, data: 2},
  {name: "动力铁轨", id: 27, data: 0},
  {name: "蜘蛛网", id: 30, data: 0},
  {name: "草", id: 31, data: 1},
  {name: "灌木", id: 31, data: 2},
  {name: "枯死的灌木", id: 32, data: 0},
  {name: "白色羊毛", id: 35, data: 0},
  {name: "橙色羊毛", id: 35, data: 1},
  {name: "品红色羊毛", id: 35, data: 2},
  {name: "淡蓝色羊毛", id: 35, data: 3},
  {name: "黄色羊毛", id: 35, data: 4},
  {name: "黄绿色羊毛", id: 35, data: 5},
  {name: "粉红色羊毛", id: 35, data: 6},
  {name: "灰色羊毛", id: 35, data: 7},
  {name: "淡灰色羊毛", id: 35, data: 8},
  {name: "青色羊毛", id: 35, data: 9},
  {name: "紫色羊毛", id: 35, data: 10},
  {name: "蓝色羊毛", id: 35, data: 11},
  {name: "棕色羊毛", id: 35, data: 12},
  {name: "绿色羊毛", id: 35, data: 13},
  {name: "红色羊毛", id: 35, data: 14},
  {name: "黑色羊毛", id: 35, data: 15},
  {name: "蒲公英", id: 37, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "棕色蘑菇", id: 39, data: 0},
  {name: "红色蘑菇", id: 40, data: 0},
  {name: "金块", id: 41, data: 0},
  {name: "铁块", id: 42, data: 0},
  {name: "石台阶", id: 44, data: 0},
  {name: "沙石台阶", id: 44, data: 1},
  {name: "圆石台阶", id: 44, data: 3},
  {name: "砖台阶", id: 44, data: 4},
  {name: "石砖台阶", id: 44, data: 5},
  {name: "石英台阶", id: 44, data: 7},
  {name: "砖块", id: 45, data: 0},
  {name: "TNT", id: 46, data: 0},
  {name: "书架", id: 47, data: 0},
  {name: "苔石", id: 48, data: 0},
  {name: "黑曜石", id: 49, data: 0},
  {name: "火把", id: 50, data: 0},
  {name: "火", id: 51, data: 0},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "木楼梯", id: 53, data: 0},
  {name: "箱子", id: 54, data: 0},
  {name: "钻石矿石", id: 56, data: 0},
  {name: "钻石块", id: 57, data: 0},
  {name: "工作台", id: 58, data: 0},
  {name: "耕地", id: 60, data: 0},
  {name: "熔炉", id: 61, data: 0},
  {name: "梯子", id: 65, data: 0},
  {name: "铁轨", id: 66, data: 0},
  {name: "石楼梯", id: 67, data: 0},
  {name: "红石矿石", id: 73, data: 0},
  {name: "雪", id: 78, data: 0},
  {name: "冰", id: 79, data: 0},
  {name: "雪块", id: 80, data: 0},
  {name: "仙人掌", id: 81, data: 0},
  {name: "粘土块", id: 82, data: 0},
  {name: "木栅栏", id: 85, data: 0},
  {name: "南瓜", id: 86, data: 0},
  {name: "地狱岩", id: 87, data: 0},
  {name: "萤石", id: 89, data: 0},
  {name: "南瓜灯", id: 91, data: 0},
  {name: "隐形基岩", id: 95, data: 0},
  {name: "活板门", id: 96, data: 0},
  {name: "石砖", id: 98, data: 0},
  {name: "苔石砖", id: 98, data: 1},
  {name: "裂石砖", id: 98, data: 2},
  {name: "回形石砖", id: 98, data: 3},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "铁栅栏", id: 101, data: 0},
  {name: "玻璃板", id: 102, data: 0},
  {name: "西瓜", id: 103, data: 0},
  {name: "南瓜梗", id: 104, data: 0},
  {name: "西瓜梗", id: 105, data: 0},
  {name: "藤蔓", id: 106, data: 0},
  {name: "栅栏门", id: 107, data: 0},
  {name: "砖楼梯", id: 108, data: 0},
  {name: "石砖楼梯", id: 109, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "莲叶", id: 111, data: 0},
  {name: "地狱砖", id: 112, data: 0},
  {name: "地狱砖楼梯", id: 114, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "末地石", id: 121, data: 0},
  {name: "可可梗", id: 127, data: 0},
  {name: "沙石楼梯", id: 128, data: 0},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "松木楼梯", id: 134, data: 0},
  {name: "桦木楼梯", id: 135, data: 0},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "圆石墙", id: 139, data: 0},
  {name: "苔石墙", id: 139, data: 1},
  {name: "石英方块", id: 155, data: 0},
  {name: "錾石英方块", id: 155, data: 1},
  {name: "柱石英方块", id: 155, data: 2},
  {name: "石英楼梯", id: 156, data: 0},
  {name: "木台阶", id: 158, data: 0},
  {name: "松木台阶", id: 158, data: 1},
  {name: "桦木台阶", id: 158, data: 2},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "黑橡木叶", id: 161, data: 1},
  {name: "金合欢木", id: 162, data: 0},
  {name: "黑橡木", id: 162, data: 1},
  {name: "金合欢木楼梯", id: 163, data: 0},
  {name: "黑橡木楼梯", id: 164, data: 0},
  {name: "干草块", id: 170, data: 0},
  {name: "白色地毯", id: 171, data: 0},
  {name: "橙色地毯", id: 171, data: 1},
  {name: "品红色地毯", id: 171, data: 2},
  {name: "淡蓝色地毯", id: 171, data: 3},
  {name: "黄色地毯", id: 171, data: 4},
  {name: "黄绿色地毯", id: 171, data: 5},
  {name: "粉红色地毯", id: 171, data: 6},
  {name: "灰色地毯", id: 171, data: 7},
  {name: "淡灰色地毯", id: 171, data: 8},
  {name: "青色地毯", id: 171, data: 9},
  {name: "紫色地毯", id: 171, data: 10},
  {name: "蓝色地毯", id: 171, data: 11},
  {name: "棕色地毯", id: 171, data: 12},
  {name: "绿色地毯", id: 171, data: 13},
  {name: "红色地毯", id: 171, data: 14},
  {name: "黑色地毯", id: 171, data: 15},
  {name: "硬化粘土", id: 172, data: 0},
  {name: "煤炭块", id: 173, data: 0},
  {name: "浮冰（不知和冰有何区别）", id: 174, data: 0},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "灰化土", id: 243, data: 0},
  {name: "切石机", id: 245, data: 0},
  {name: "发光的黑曜石", id: 246, data: 0},
  {name: "下界反应核", id: 247, data: 0},
  {name: "更新方块1", id: 248, data: 0},
  {name: "更新方块2", id: 249, data: 0},
  {name: "铁锹", id: 256, data: 0},
  {name: "铁镐", id: 257, data: 0},
  {name: "铁斧", id: 258, data: 0},
  {name: "打火石", id: 259, data: 0},
  {name: "红苹果", id: 260, data: 0},
  {name: "弓", id: 261, data: 0},
  {name: "箭", id: 262, data: 0},
  {name: "煤炭", id: 263, data: 0},
  {name: "木炭", id: 263, data: 1},
  {name: "钻石", id: 264, data: 0},
  {name: "铁锭", id: 265, data: 0},
  {name: "金锭", id: 266, data: 0},
  {name: "铁剑", id: 267, data: 0},
  {name: "木剑", id: 268, data: 0},
  {name: "木锹", id: 269, data: 0},
  {name: "木镐", id: 270, data: 0},
  {name: "木斧", id: 271, data: 0},
  {name: "石剑", id: 272, data: 0},
  {name: "石锹", id: 273, data: 0},
  {name: "石镐", id: 274, data: 0},
  {name: "石斧", id: 275, data: 0},
  {name: "钻石剑", id: 276, data: 0},
  {name: "钻石锹", id: 277, data: 0},
  {name: "钻石镐", id: 278, data: 0},
  {name: "钻石斧", id: 279, data: 0},
  {name: "木棍", id: 280, data: 0},
  {name: "碗", id: 281, data: 0},
  {name: "蘑菇汤", id: 282, data: 0},
  {name: "金剑", id: 283, data: 0},
  {name: "金铲", id: 284, data: 0},
  {name: "金镐", id: 285, data: 0},
  {name: "金斧", id: 286, data: 0},
  {name: "线", id: 287, data: 0},
  {name: "羽毛", id: 288, data: 0},
  {name: "火药", id: 289, data: 0},
  {name: "木锄", id: 290, data: 0},
  {name: "石锄", id: 291, data: 0},
  {name: "铁锄", id: 292, data: 0},
  {name: "钻石锄", id: 293, data: 0},
  {name: "金锄", id: 294, data: 0},
  {name: "小麦种子", id: 295, data: 0},
  {name: "小麦", id: 296, data: 0},
  {name: "面包", id: 297, data: 0},
  {name: "皮革帽子", id: 298, data: 0},
  {name: "皮革外套", id: 299, data: 0},
  {name: "皮革裤子", id: 300, data: 0},
  {name: "皮革靴子", id: 301, data: 0},
  {name: "锁链头盔", id: 302, data: 0},
  {name: "锁链胸甲", id: 303, data: 0},
  {name: "锁链护腿", id: 304, data: 0},
  {name: "锁链靴子", id: 305, data: 0},
  {name: "铁头盔", id: 306, data: 0},
  {name: "铁胸甲", id: 307, data: 0},
  {name: "铁护腿", id: 308, data: 0},
  {name: "铁靴子", id: 309, data: 0},
  {name: "钻石头盔", id: 310, data: 0},
  {name: "钻石胸甲", id: 311, data: 0},
  {name: "钻石护腿", id: 312, data: 0},
  {name: "钻石靴子", id: 313, data: 0},
  {name: "金头盔", id: 314, data: 0},
  {name: "金胸甲", id: 315, data: 0},
  {name: "金护腿", id: 316, data: 0},
  {name: "金靴子", id: 317, data: 0},
  {name: "燧石", id: 318, data: 0},
  {name: "生猪排", id: 319, data: 0},
  {name: "熟猪排", id: 320, data: 0},
  {name: "画", id: 321, data: 0},
  {name: "告示牌", id: 323, data: 0},
  {name: "木门", id: 324, data: 0},
  {name: "桶", id: 325, data: 0},
  {name: "牛奶桶", id: 325, data: 1},
  {name: "水桶", id: 325, data: 8},
  {name: "岩浆桶", id: 325, data: 10},
  {name: "矿车", id: 328, data: 0},
  {name: "鞍", id: 329, data: 0},
  {name: "铁门", id: 330, data: 0},
  {name: "红石", id: 331, data: 0},
  {name: "雪球", id: 332, data: 0},
  {name: "皮革", id: 334, data: 0},
  {name: "红砖", id: 336, data: 0},
  {name: "粘土", id: 337, data: 0},
  {name: "甘蔗", id: 338, data: 0},
  {name: "纸", id: 339, data: 0},
  {name: "书", id: 340, data: 0},
  {name: "粘液球", id: 341, data: 0},
  {name: "蛋", id: 344, data: 0},
  {name: "指南针", id: 345, data: 0},
  {name: "钟", id: 347, data: 0},
  {name: "萤石粉", id: 348, data: 0},
  {name: "墨囊（染料）", id: 351, data: 0},
  {name: "玫瑰红（染料）", id: 351, data: 1},
  {name: "仙人掌绿（染料）", id: 351, data: 2},
  {name: "可可豆（染料）", id: 351, data: 3},
  {name: "青金石（染料）", id: 351, data: 4},
  {name: "紫色染料", id: 351, data: 5},
  {name: "青色染料", id: 351, data: 6},
  {name: "淡灰色染料", id: 351, data: 7},
  {name: "灰色染料", id: 351, data: 8},
  {name: "粉红色染料", id: 351, data: 9},
  {name: "黄绿色染料", id: 351, data: 10},
  {name: "蒲公英黄（染料）", id: 351, data: 11},
  {name: "淡蓝色染料", id: 351, data: 12},
  {name: "品红色染料", id: 351, data: 13},
  {name: "橙色染料", id: 351, data: 14},
  {name: "骨粉", id: 351, data: 15},
  {name: "骨头", id: 352, data: 0},
  {name: "糖", id: 353, data: 0},
  {name: "蛋糕", id: 354, data: 0},
  {name: "床", id: 355, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "剪刀", id: 359, data: 0},
  {name: "西瓜片", id: 360, data: 0},
  {name: "南瓜种子", id: 261, data: 0},
  {name: "西瓜种子", id: 362, data: 0},
  {name: "生牛肉", id: 363, data: 0},
  {name: "牛排", id: 364, data: 0},
  {name: "生鸡肉", id: 365, data: 0},
  {name: "熟鸡肉", id: 366, data: 0},
  {name: "生成鸡", id: 383, data: 10},
  {name: "生成牛", id: 383, data: 11},
  {name: "生成猪", id: 383, data: 12},
  {name: "生成羊", id: 383, data: 13},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "绿宝石", id: 388, data: 0},
  {name: "胡萝卜", id: 391, data: 0},
  {name: "马铃薯", id: 392, data: 0},
  {name: "烤马铃薯", id: 393, data: 0},
  {name: "南瓜派", id: 400, data: 0},
  {name: "地狱砖", id: 405, data: 0},
  {name: "地狱石英", id: 406, data: 0},
  {name: "甜菜", id: 457, data: 0},
  {name: "甜菜种子", id: 458, data: 0},
  {name: "甜菜汤", id: 459, data: 0}];
var CAT_BUILDING_ITEMS = [
  {name: "丛林木板", id: 5, data: 3},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "丛林木", id: 17, data: 3},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "金合欢木", id: 162, data: 0},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "金合欢木楼梯", id: 163, data: 0},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木木板", id: 5, data: 5},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "黑橡木", id: 162, data: 1},
  {name: "黑橡木叶", id: 161, data: 1},
  {name: "黑橡木楼梯", id: 164, data: 0},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "灰化土", id: 243, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "莲叶", id: 111, data: 0},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "红沙", id: 12, data: 1},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "绿宝石", id: 388, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "末地石", id: 121, data: 0},
  {name: "可可梗", id: 127, data: 0},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "藤蔓", id: 106, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "硬化粘土", id: 172, data: 0}];
var CAT_DECORATION_ITEMS = [
  {name: "圆石", id: 4, data: 0},
  {name: "石砖", id: 98, data: 0},
  {name: "苔石砖", id: 98, data: 1},
  {name: "裂石砖", id: 98, data: 2},
  {name: "回形石砖", id: 98, data: 3},
  {name: "苔石", id: 48, data: 0},
  {name: "木板", id: 5, data: 0},
  {name: "松木板", id: 5, data: 1},
  {name: "桦木板", id: 5, data: 2},
  {name: "丛林木板", id: 5, data: 3},
  {name: "金合欢木板", id: 5, data: 4},
  {name: "黑橡木板", id: 5, data: 5},
  {name: "红砖", id: 45, data: 0},
  {name: "石头", id: 1, data: 0},
  {name: "花岗岩", id: 1, data: 1},
  {name: "光滑的花岗岩", id: 1, data: 2},
  {name: "闪长岩", id: 1, data: 3},
  {name: "光滑的闪长岩", id: 1, data: 4},
  {name: "安山岩", id: 1, data: 5},
  {name: "光滑的安山岩", id: 1, data: 6},
  {name: "灰化土", id: 243, data: 0},
  {name: "泥土", id: 3, data: 0},
  {name: "草方块", id: 2, data: 0},
  {name: "菌丝", id: 110, data: 0},
  {name: "粘土块", id: 82, data: 0},
  {name: "硬化粘土", id: 172, data: 0},
  {name: "白色粘土", id: 159, data: 0},
  {name: "橙色粘土", id: 159, data: 1},
  {name: "品红色粘土", id: 159, data: 2},
  {name: "淡蓝色粘土", id: 159, data: 3},
  {name: "黄色粘土", id: 159, data: 4},
  {name: "黄绿色粘土", id: 159, data: 5},
  {name: "粉红色粘土", id: 159, data: 6},
  {name: "灰色粘土", id: 159, data: 7},
  {name: "淡灰色粘土", id: 159, data: 8},
  {name: "青色粘土", id: 159, data: 9},
  {name: "紫色粘土", id: 159, data: 10},
  {name: "蓝色粘土", id: 159, data: 11},
  {name: "棕色粘土", id: 159, data: 12},
  {name: "绿色粘土", id: 159, data: 13},
  {name: "红色粘土", id: 159, data: 14},
  {name: "黑色粘土", id: 159, data: 15},
  {name: "沙石", id: 24, data: 0},
  {name: "錾制沙石", id: 24, data: 1},
  {name: "平滑沙石", id: 24, data: 2},
  {name: "沙子", id: 12, data: 0},
  {name: "红沙", id: 12, data: 1},
  {name: "砂砾", id: 13, data: 0},
  {name: "木头", id: 17, data: 0},
  {name: "松木", id: 17, data: 1},
  {name: "桦木", id: 17, data: 2},
  {name: "丛林木", id: 17, data: 3},
  {name: "金合欢木", id: 162, data: 0},
  {name: "黑橡木", id: 162, data: 1},
  {name: "地狱砖", id: 112, data: 0},
  {name: "地狱岩", id: 87, data: 0},
  {name: "基岩", id: 7, data: 0},
  {name: "圆石楼梯", id: 67, data: 0},
  {name: "木楼梯", id: 53, data: 0},
  {name: "松木楼梯", id: 134, data: 0},
  {name: "桦木楼梯", id: 135, data: 0},
  {name: "丛林楼梯", id: 136, data: 0},
  {name: "砖楼梯", id: 108, data: 0},
  {name: "沙石楼梯", id: 128, data: 0},
  {name: "石砖楼梯", id: 109, data: 0},
  {name: "地狱砖楼梯", id: 114, data: 0},
  {name: "石英楼梯", id: 156, data: 0},
  {name: "石台阶", id: 44, data: 1},
  {name: "圆石台阶", id: 44, data: 3},
  {name: "木台阶", id: 158, data: 0},
  {name: "松木台阶", id: 158, data: 1},
  {name: "桦木台阶", id: 158, data: 2},
  {name: "丛林木台阶", id: 158, data: 3},
  {name: "金合欢木台阶", id: 158, data: 4},
  {name: "黑橡木台阶", id: 158, data: 5},
  {name: "砖台阶", id: 44, data: 4},
  {name: "沙石台阶", id: 44, data: 1},
  {name: "石砖台阶", id: 44, data: 5},
  {name: "石英台阶", id: 44, data: 7},
  {name: "石英方块", id: 155, data: 0},
  {name: "柱石英方块", id: 155, data: 2},
  {name: "錾石英方块", id: 155, data: 1},
  {name: "煤矿石", id: 16, data: 0},
  {name: "铁矿石", id: 15, data: 0},
  {name: "金矿石", id: 14, data: 0},
  {name: "钻石矿石", id: 56, data: 0},
  {name: "青金石矿石", id: 21, data: 0},
  {name: "红石矿石", id: 73, data: 0},
  {name: "绿宝石矿石", id: 129, data: 0},
  {name: "黑曜石", id: 49, data: 0},
  {name: "冰", id: 79, data: 0},
  {name: "雪块", id: 80, data: 0},
  {name: "末地石", id: 121, data: 0}];
var CAT_ARMOUR_ITEMS = [
  {name: "圆石墙", id: 139, data: 0},
  {name: "苔石墙", id: 139, data: 1},
  {name: "莲叶", id: 111, data: 0},
  {name: "金块", id: 41, data: 0},
  {name: "铁块", id: 42, data: 0},
  {name: "钻石块", id: 57, data: 0},
  {name: "青金石块", id: 22, data: 0},
  {name: "煤炭块", id: 173, data: 0},
  {name: "绿宝石块", id: 133, data: 0},
  {name: "雪", id: 78, data: 0},
  {name: "玻璃", id: 20, data: 0},
  {name: "萤石", id: 89, data: 0},
  {name: "藤蔓", id: 106, data: 0},
  {name: "下界反应核", id: 247, data: 0},
  {name: "梯子", id: 65, data: 0},
  {name: "海绵", id: 19, data: 0},
  {name: "玻璃板", id: 102, data: 0},
  {name: "木门", id: 324, data: 0},
  {name: "活版门", id: 96, data: 0},
  {name: "木栅栏", id: 85, data: 0},
  {name: "栅栏门", id: 107, data: 0},
  {name: "铁栅栏", id: 101, data: 0},
  {name: "床", id: 355, data: 0},
  {name: "书架", id: 47, data: 0},
  {name: "画", id: 321, data: 0},
  {name: "工作台", id: 58, data: 0},
  {name: "切石机", id: 245, data: 0},
  {name: "箱子", id: 54, data: 0},
  {name: "熔炉", id: 61, data: 0},
  {name: "末地传送门", id: 120, data: 0},
  {name: "蒲公英", id: 37, data: 0},
  {name: "罂粟", id: 38, data: 0},
  {name: "蓝色的兰花", id: 38, data: 1},
  {name: "露西球", id: 38, data: 2},
  {name: "矢车菊", id: 38, data: 3},
  {name: "红郁金香", id: 38, data: 4},
  {name: "橙郁金香", id: 38, data: 5},
  {name: "白郁金香", id: 38, data: 6},
  {name: "粉郁金香", id: 38, data: 7},
  {name: "雏菊", id: 38, data: 8},
  {name: "太阳花", id: 175, data: 0},
  {name: "丁香花", id: 175, data: 1},
  {name: "高草", id: 175, data: 2},
  {name: "高大灌木", id: 175, data: 3},
  {name: "玫瑰丛", id: 175, data: 4},
  {name: "芍药", id: 175, data: 5},
  {name: "棕色蘑菇", id: 39, data: 0},
  {name: "红色蘑菇", id: 40, data: 0},
  {name: "棕色蘑菇方块", id: 99, data: 14},
  {name: "红色蘑菇方块", id: 100, data: 14},
  {name: "蘑菇方块", id: 99, data: 0},
  {name: "蘑菇茎", id: 99, data: 15},
  {name: "仙人掌", id: 81, data: 0},
  {name: "西瓜", id: 103, data: 0},
  {name: "南瓜", id: 86, data: 0},
  {name: "南瓜灯", id: 91, data: 0},
  {name: "蜘蛛网", id: 30, data: 0},
  {name: "干草块", id: 170, data: 0},
  {name: "草", id: 31, data: 1},
  {name: "灌木", id: 31, data: 2},
  {name: "枯死的灌木", id: 32, data: 0},
  {name: "树苗", id: 6, data: 0},
  {name: "松树苗", id: 6, data: 1},
  {name: "桦树苗", id: 6, data: 2},
  {name: "丛林树苗", id: 6, data: 3},
  {name: "金合欢树苗", id: 6, data: 4},
  {name: "黑橡树苗", id: 6, data: 5},
  {name: "树叶", id: 18, data: 0},
  {name: "松树叶", id: 18, data: 1},
  {name: "桦树叶", id: 18, data: 2},
  {name: "丛林树叶", id: 18, data: 3},
  {name: "金合欢树叶", id: 161, data: 0},
  {name: "黑橡树叶", id: 161, data: 1},
  {name: "蛋糕", id: 354, data: 0},
  {name: "告示牌", id: 323, data: 0},
  {name: "刷怪笼", id: 52, data: 0},
  {name: "白色羊毛", id: 35, data: 0},
  {name: "橙色羊毛", id: 35, data: 1},
  {name: "品红色羊毛", id: 35, data: 2},
  {name: "淡蓝色羊毛", id: 35, data: 3},
  {name: "黄色羊毛", id: 35, data: 4},
  {name: "黄绿色羊毛", id: 35, data: 5},
  {name: "粉红色羊毛", id: 35, data: 6},
  {name: "灰色羊毛", id: 35, data: 7},
  {name: "淡灰色羊毛", id: 35, data: 8},
  {name: "青色羊毛", id: 35, data: 9},
  {name: "紫色羊毛", id: 35, data: 10},
  {name: "蓝色羊毛", id: 35, data: 11},
  {name: "棕色羊毛", id: 35, data: 12},
  {name: "绿色羊毛", id: 35, data: 13},
  {name: "红色羊毛", id: 35, data: 14},
  {name: "黑色羊毛", id: 35, data: 15},
  {name: "白色地毯", id: 171, data: 0},
  {name: "橙色地毯", id: 171, data: 1},
  {name: "品红色地毯", id: 171, data: 2},
  {name: "淡蓝色地毯", id: 171, data: 3},
  {name: "黄色地毯", id: 171, data: 4},
  {name: "黄绿色地毯", id: 171, data: 5},
  {name: "粉红色地毯", id: 171, data: 6},
  {name: "灰色地毯", id: 171, data: 7},
  {name: "淡灰色地毯", id: 171, data: 8},
  {name: "青色地毯", id: 171, data: 9},
  {name: "紫色地毯", id: 171, data: 10},
  {name: "蓝色地毯", id: 171, data: 11},
  {name: "棕色地毯", id: 171, data: 12},
  {name: "绿色地毯", id: 171, data: 13},
  {name: "红色地毯", id: 171, data: 14},
  {name: "黑色地毯", id: 171, data: 15}];
var CAT_TOOLS_ITEMS = [
  {name: "打火石", id: 259, data: 0},
  {name: "弓", id: 261, data: 0},
  {name: "箭", id: 262, data: 0},
  {name: "剪刀", id: 359, data: 0},
  {name: "钻石剑", id: 276, data: 0},
  {name: "钻石锹", id: 277, data: 0},
  {name: "钻石镐", id: 278, data: 0},
  {name: "钻石锄", id: 293, data: 0},
  {name: "钻石斧", id: 279, data: 0},
  {name: "金剑", id: 283, data: 0},
  {name: "金锹", id: 284, data: 0},
  {name: "金镐", id: 285, data: 0},
  {name: "金锄", id: 294, data: 0},
  {name: "金斧", id: 286, data: 0},
  {name: "铁剑", id: 267, data: 0},
  {name: "铁锹", id: 256, data: 0},
  {name: "铁镐", id: 257, data: 0},
  {name: "铁锄", id: 292, data: 0},
  {name: "铁斧", id: 258, data: 0},
  {name: "石剑", id: 272, data: 0},
  {name: "石锹", id: 273, data: 0},
  {name: "石镐", id: 274, data: 0},
  {name: "石锄", id: 291, data: 0},
  {name: "石斧", id: 275, data: 0},
  {name: "木剑", id: 268, data: 0},
  {name: "木锹", id: 269, data: 0},
  {name: "木镐", id: 270, data: 0},
  {name: "木锄", id: 290, data: 0},
  {name: "木斧", id: 271, data: 0},
  {name: "皮革头盔", id: 298, data: 0},
  {name: "皮革胸甲", id: 299, data: 0},
  {name: "皮革护腿", id: 300, data: 0},
  {name: "皮革靴子", id: 301, data: 0},
  {name: "锁链头盔", id: 302, data: 0},
  {name: "锁链胸甲", id: 303, data: 0},
  {name: "锁链护腿", id: 304, data: 0},
  {name: "锁链靴子", id: 305, data: 0},
  {name: "铁头盔", id: 306, data: 0},
  {name: "铁胸甲", id: 307, data: 0},
  {name: "铁护腿", id: 308, data: 0},
  {name: "铁靴子", id: 309, data: 0},
  {name: "钻石头盔", id: 310, data: 0},
  {name: "钻石胸甲", id: 311, data: 0},
  {name: "钻石护腿", id: 312, data: 0},
  {name: "钻石靴子", id: 313, data: 0},
  {name: "金头盔", id: 314, data: 0},
  {name: "金胸甲", id: 315, data: 0},
  {name: "金护腿", id: 316, data: 0},
  {name: "金靴子", id: 317, data: 0},
  {name: "鸡生物蛋", id: 383, data: 10},
  {name: "牛生物蛋", id: 383, data: 11},
  {name: "猪生物蛋", id: 383, data: 12},
  {name: "羊生物蛋", id: 383, data: 13},
  {name: "生成狼", id: 383, data: 14},
  {name: "生成村民", id: 383, data: 15},
  {name: "生成哞菇", id: 383, data: 16},
  {name: "生成僵尸", id: 383, data: 32},
  {name: "生成爬行者", id: 383, data: 33},
  {name: "生成骷髅", id: 383, data: 34},
  {name: "生成蜘蛛", id: 383, data: 35},
  {name: "生成僵尸猪人", id: 383, data: 36},
  {name: "生成史莱姆", id: 383, data: 37},
  {name: "生成末影人", id: 383, data: 38},
  {name: "生成蠹虫", id: 383, data: 39},
  {name: "铁桶", id: 325, data: 0},
  {name: "水", id: 8, data: 0},
  {name: "静止的水", id: 9, data: 0},
  {name: "岩浆", id: 10, data: 0},
  {name: "静止的岩浆", id: 11, data: 0},
  {name: "动力铁轨", id: 27, data: 0},
  {name: "铁轨", id: 66, data: 0},
  {name: "钟", id: 347, data: 0},
  {name: "指南针", id: 345, data: 0},
  {name: "火把", id: 50, data: 0},
  {name: "TNT", id: 46, data: 0}];
var CAT_FOOD_ITEMS = [
  {name: "苹果", id: 260, data: 0},
  {name: "蘑菇汤", id: 282, data: 0},
  {name: "生猪排", id: 319, data: 0},
  {name: "熟猪排", id: 320, data: 0},
  {name: "生牛排", id: 363, data: 0},
  {name: "熟牛排", id: 364, data: 0},
  {name: "生鸡肉", id: 365, data: 0},
  {name: "熟鸡肉", id: 366, data: 0},
  {name: "墨囊（染料）", id: 351, data: 0},
  {name: "玫瑰红（染料）", id: 351, data: 1},
  {name: "仙人掌绿（染料）", id: 351, data: 2},
  {name: "可可豆（染料）", id: 351, data: 3},
  {name: "青金石（染料）", id: 351, data: 4},
  {name: "紫色染料", id: 351, data: 5},
  {name: "青色染料", id: 351, data: 6},
  {name: "浅灰色染料", id: 351, data: 7},
  {name: "深灰色染料", id: 351, data: 8},
  {name: "浅粉色染料", id: 351, data: 9},
  {name: "浅绿色染料", id: 351, data: 10},
  {name: "蒲公英黄（染料）", id: 351, data: 11},
  {name: "浅蓝色染料", id: 351, data: 12},
  {name: "深粉色染料", id: 351, data: 13},
  {name: "橙色染料", id: 351, data: 14},
  {name: "骨粉", id: 351, data: 15},
  {name: "甜菜", id: 457, data: 0},
  {name: "甜菜种子", id: 458, data: 0},
  {name: "甜菜汤", id: 459, data: 0},
  {name: "南瓜派", id: 400, data: 0},
  {name: "胡萝卜", id: 391, data: 0},
  {name: "土豆", id: 392, data: 0},
  {name: "烤土豆", id: 393, data: 0},
  {name: "南瓜种子", id: 361, data: 0},
  {name: "甘蔗", id: 338, data: 0},
  {name: "小麦", id: 296, data: 0},
  {name: "麦种", id: 295, data: 0},
  {name: "鸡蛋", id: 344, data: 0},
  {name: "饼干", id: 357, data: 0},
  {name: "面包", id: 297, data: 0}];

var cat=[[CAT_STARTER_KIT_ITEMS,"全部物品"],[CAT_BUILDING_ITEMS,"建筑方块"],[ CAT_BUILDING_ITEMS,"0.9.x新增物品"],[CAT_ARMOUR_ITEMS,"装饰方块"],[CAT_TOOLS_ITEMS,"工具与运输"],[ CAT_FOOD_ITEMS,"食物与染料"],]

var last=[0,0,0]
var shuangji=false
//撤销
var chickreply=false
var classreply=[["起始"]]
var settilelist=[]
var settilechick=true
function settile(x,y,z,i,b){
if(chickreply){
classreply[0].unshift([x,y,z,getTile(x,y,z),Level.getData(x,y,z)])
}
if(settilechick){settilelist.push([x,y,z,i,b])}else{setTile(x,y,z,i,b)}
}



function useItem(x,y,z,i,b,s,id,bd)
{
if(i==267||i==325){i=0,id=0}

if(shuangji){
if(xx==x&&yy==y&&zz==z){shuangjis(b,bd)}}
xx=x
yy=y
zz=z
if(i!=0){
switch(s) {
case 0:y-=1;break;
case 1:y+=1;break; 
case 2:z-=1;break;
case 3:z+=1;break;
case 4:x-=1;break;
case 5:x+=1;break;
}} 

if(i==323){i=68
if(s==1)i=63
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
var t=0
xc.sleep(3)
if(i==68){
var t=0
switch(s){
//case 0:t=0;break;
//case 1:t=1;break; 
case 2:t=2;break;
case 3:t=3;break;
case 4:t=4;break;
case 5:t=5;break;
}
setTile(x,y,z,68,t)}
else{
var m=Math.floor((((getYaw()+11.25)%360+360)%360)/360*16)///
setTile(x,y,z,63,m)
}
}}))
if(noworld&&getTile(x,y,z)==0){xc.start();
preventDefault();}
}
else if(i==325)i=id

x=x+pianyilist[0]
y=y+pianyilist[1]
z=z+pianyilist[2]

if(i==347){gyentity(x,y,z,entitychange)}
if(i==345){
clientMessage("位置: x="+x+",y="+y+",z="+z+",Id="+b+",bd="+bd+"\n"+"距上次查询，x="+(x-last[0])+",y="+(y-last[1])+",z="+(z-last[2])+",净距离="+Math.floor(Math.sqrt((last[0]-x)*(last[0]-x)+(last[1]-y)*(last[1]-y)+(last[2]-z)*(last[2]-z))*100)*0.01)
last=[x,y,z]}
if(i<256){

if(settilechick){
if(swi==1){
set(x,y,z,i,id,s)
}
else{
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
if(che==1){print2("上一个功能未完成")}else{
che++
cubi(x,y,z,i,id) 
chickround(x,y,z,i,id) 
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)
che--}
}}))
xc.start()}
}else{
if(swi==1){set(x,y,z,i,id)}
else{
cubi(x,y,z,i,id) 
chickround(x,y,z,i,id) 
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)}
}}
}





function entityRemovedHook(entity)
{
if(Entity.getEntityTypeId(entity)==81)
{var i
for(i in rpgs){
if(entity==rpgs[i]){
explode(Entity.getX(entity), Entity.getY(entity), Entity.getZ(entity),5);
if(i>1000){rpgs=rpgs.slice(0,100);break;}
}}}
}

function levelEventHook(entity,eventType,x,y,z,data)
{
//print2(entity+","+eventType+","+x+","+y+","+z+","+data)
//开关门数据为1003，羊吃草的数据为2001,睡觉的数据为9800
if(actionlist[0][2]==eventType&&actionlist[0][1]==true){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
setTile(x,y,z,2);
}}),2);
}}))}
}

var rideent=null
function attackHook(attacker,victim)
{
//print(Entity.getEntityTypeId(attacker)+","+Entity.getEntityTypeId(victim))
//rideAnimal(player,target);
var m=Entity.getEntityTypeId(attacker)
var n=Entity.getEntityTypeId(victim)
if(m==0&&Player.getCarriedItem()==345){
preventDefault();
if(rideent==null){rideent=victim;print2("设置骑的")}
else{
rideAnimal(rideent,victim);
rideent=null
print2("骑。上去")
}
}
if(actionlist[1][1]==true){preventDefault()}
}


var playerent=null

function getplayerent()
{return getPlayerEnt()}

function entityAddedHook(ent){
var s=Entity.getEntityTypeId(ent);
if(playerent==null){if(s==0)playerent=ent}
if(s!=0){
for(ssss in entstop)
{
if(entstop[ssss][0]==true&&entstop[ssss][1]==true){Entity.remove(ent);break;}
else if(entstop[ssss][0]==s&&entstop[ssss][1]==true){Entity.remove(ent);break;}
}
}
}



function gyentity(x,y,z,m)
{Level.spawnMob(x+0.5,y+0.2,z+0.5,m)}


function set(x,y,z,u,id,s){
var xxx=xx,yyy=yy,zzz=zz
switch(s) {
case 0:yyy-=1;break;
case 1:yyy+=1;break; 
case 2:zzz-=1;break;
case 3:zzz+=1;break;
case 4:xxx-=1;break;
case 5:xxx+=1;break;
}
var mt=getTile(xxx,yyy,zzz)
var vm=Level.getData(xxx,yyy,zzz)
var a=crd,b=swifz,c=geotype,d=cub
isprint=false
che++
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
xc.sleep(30)
l=parseInt(l)
var j=parseInt(jg)
var nt=getTile(xxx,yyy,zzz)
var vt=Level.getData(xxx,yyy,zzz)
if(u==0){nt=0;vt=0}
if(mt!=nt||vt!=vm||u==0||crd!=null||swifz!=0||geotype!=0||cub!=0){
if(fzfx==2){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x+i*zj,y,z,nt,vt)
if(setchi)sset(x+i*zj,y,z,u,id,a,b,c,d)
}
}}

if(fzfx==1){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x,y+i*zj,z,nt,vt)
if(setchi)sset(x,y+i*zj,z,u,id,a,b,c,d)
}}}

if(fzfx==3){
for(var i=0;i<l;i++)
{if(i%(j+1)==0){
settile(x,y,z+i*zj,nt,vt)
if(setchi)sset(x,y,z+i*zj,u,id,a,b,c,d)
}
}}
isprint=true
che--
print2("完成")
}else{
isprint=true
print2("放置失败")}
}}));xc.start()
}


function sset(x,y,z,i,id,a,b,c,d){
crd=a
swifz=b
geotype=c
cub=d
cleans()
cubi(x,y,z,i,id)
chickround(x,y,z,i,id)
geo(x,y,z,i,id)
alloffzzt(x,y,z,i)
cleans()
}



function print2(str){
if(isprint){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
android.widget.Toast.makeText(ctx,str,0).show()
}
}
)
)
}
}


function dip2px(ctx, dips){
return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
} 



function newLevel(){
	if(isGame)
	{
		return;
	}
	isGame=true;
//addu()
//ftype()
classreply=[["起始"]] 
playerent=null
win()
win2()
entstop=[]
for(ssss in entityretype)
{entstop.push([entityretype[ssss],false])}
}


function leaveGame()
{if(!isGame)
	{
		return;
	}
	isGame=false;
option_xyz=false
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
if(btn!=null)btn.dismiss();btn=null;n=null
if(openWindow != null)openWindow.dismiss();openWindow = null;

if(rpgGUI != null){
rpgGUI.dismiss();
rpgGUI=null
}
			if(xyzWindow != null){
				xyzWindow.dismiss();
				xyzWindow = null;
			}
			if(guis!= null){
				guis.dismiss();
				guis = null;
			}
			if(longset!= null){
				longset.dismiss();
				longset = null;
			}
			if(smallmapgui!= null){
				smallmapgui.dismiss();
				smallmapgui = null;
			}
}}))}








function ftype(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

dp = ctx.getResources().getDisplayMetrics().density;

var mX,mY;
tpopx = 5*dp;
tpopy = 25*dp;

var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1)   
btn=new android.widget.Button(ctx);
btn.setTextSize(10) 
btn.setText("X增方向:"+"..."+"\n放置长度:"+l+"\n放置间隔:"+jg+"\n放置Id:"+"……"+"\n存档:"+(parseInt(copytime)+1)+"\n\n");
btn.setBackgroundColor(android.graphics.Color.argb(50,255,255,255));
n=btn
btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
mX=e.getX();
mY=e.getY();
break;
case 2:
var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx = tpopx + delX;
tpopy = tpopy + delY;
btn.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
break;
}
return true;
}
}));
layout.addView(btn);
btn=new android.widget.PopupWindow(layout,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.28, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.28); 
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);
updata()
}catch(err){
clientMessage("错误:"+err);

}}}))}






function win(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setText("E");
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
				openMenu();
			
					}
				});
				layout.addView(B_we);
				
 
ctx.getWindow().addFlags(android.view.WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
 
				openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.3);
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}
function win2(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setText("▲");
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
			 var q=allofgytype[4]
if(q==0)crd=allofgytype[q]
if(q==1)swifz=allofgytype[q]
if(q==2)geotype=allofgytype[q]
if(q==3)cub=allofgytype[q]
cleans()
print2("已恢复上一次功能")

					}
				});
				layout.addView(B_we);
				
				var openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.6);
				guis=openWindow
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}
function win3(){
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function() {
			try{
				var layout = new android.widget.LinearLayout(ctx);
				
				var B_we = new android.widget.Button(ctx);
				B_we.setText("F");
				B_we.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
				B_we.setOnClickListener(new android.view.View.OnClickListener() {
					onClick: function(v){
setTile(longgetsave[0],longgetsave[1],longgetsave[2],0)
longgetsave[3]=false
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var x,y,z
x=-Math.sin(a)*Math.cos(b)
y=-Math.sin(b)
z=Math.cos(a)*Math.cos(b)
var X=Entity.getX(getplayerent()),Y=Entity.getY(getplayerent()),Z=Entity.getZ(getplayerent())
for(var i=0;i<100;i++){
var g=getTile(X+x*i,Y+y*i,Z+z*i)
if(g!=0&&i>0&&Player.getCarriedItem()<256){
setTile(X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),Player.getCarriedItemData());useitem([X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),g,null,Player.getCarriedItemData(),Level.getData(X+x*(i-1),Y+y*(i-1),Z+z*(i-1))]);break}
else if(g!=0&&i>0&&Player.getCarriedItem()==267){
setTile(X+x*i,Y+y*i,Z+z*i,0);useitem([X+x*(i-1),Y+y*(i-1),Z+z*(i-1),Player.getCarriedItem(),g,null,Player.getCarriedItemData(),Level.getData(X+x*(i-1),Y+y*(i-1),Z+z*(i-1))]);break}}
					}
				});
				layout.addView(B_we);
				
				var openWindow = new android.widget.PopupWindow(layout, dip2px(ctx, 35), dip2px(ctx, 35));
				openWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.BOTTOM | android.view.Gravity.RIGHT, 0, ctx.getWindowManager().getDefaultDisplay().getHeight()*0.45);
				longset=openWindow
			}catch(err){
				print2("错误!\n"+err);
			}
		}
	}));
}



function openMenu(){
 
 var layout=new android.widget.LinearLayout(ctx) 
  try{
   var menu=new android.widget.PopupWindow(layout, dip2px(ctx,85 ), dip2px(ctx, 35)); 
   menu.setFocusable(true)
   mainMenu=menu
   var layout=new android.widget.LinearLayout(ctx)
   layout.setOrientation(1)

   var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
   textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
   var title=new android.widget.TextView(ctx);
   title.setTextSize(24)
   title.setTextColor(android.graphics.Color.rgb(255,255,255));
   title.setText("快速建造菜单")
   title.setLayoutParams(textParams)
   layout.addView(title)
   var stitle=new android.widget.TextView(ctx)
   stitle.setTextSize(13)
   stitle.setTextColor(android.graphics.Color.rgb(255,255,255));
   stitle.setText("6g3y mcpe的作死大神\n服务器支持由风鸟修改")
   stitle.setLayoutParams(textParams)
   layout.addView(stitle)
   
 var button=new android.widget.Button(ctx)
 button.setText("终极菜单")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    zjcd()
 }}))
 layout.addView(button)   


 var buttonk=new android.widget.Button(ctx)
if(swi==1){buttonk.setText("放置开关(开)")}
else if(swi==0){buttonk.setText("放置开关(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(swi==0)
    {buttonk.setText("放置开关(开)");
    swi=1;clientMessage("铁剑或水桶删除方块");}
    else if(swi==1)
    {buttonk.setText("放置开关(关)");
    swi=0}
 }}))
 layout.addView(buttonk)   
 

  var button=new android.widget.Button(ctx)
 button.setText("编辑世界")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    gameset()
 }}))
 layout.addView(button)   
 
 
  var button=new android.widget.Button(ctx)
 button.setText("编辑方块")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockchange()
 }}))
 layout.addView(button)   
 
 
  var button=new android.widget.Button(ctx)
 button.setText("添加物品")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    joinitem()
 }}))
 layout.addView(button)    
 
 
 var button=new android.widget.Button(ctx)
 button.setText("几何体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    geometry() 
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("复制粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   gcopy()
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("自然景观")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   dixingmune()
 }}))
 layout.addView(button)   
 
 
 
 var button=new android.widget.Button(ctx)
 button.setText("特殊")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   special()
 }}))
 layout.addView(button)   
 
 
   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,0,0)
 }catch(err){
    print2("错误: "+err+".")
 }
}
function makeMenu(ctx,menu,layout){
  var mlayout=new android.widget.RelativeLayout(ctx)
 var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
var scrollview=new android.widget.ScrollView(ctx)
 var pad = dip2px(ctx,5)
 scrollview.setPadding(pad,pad,pad,pad)
 scrollview.setLayoutParams(svParams)
 scrollview.addView(layout)
 mlayout.addView(scrollview)
 return mlayout
}

function TooManyItems(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
//TooManyItems
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var amount = new android.widget.EditText(ctx);
var data = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("添加")
id.setHint("物品数据（ID）");
amount.setHint("数量");
data.setHint("特殊数据值");
id.setInputType(number);
amount.setInputType(number);
data.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(amount);
tmiLayout.addView(data);
tmiLayout.addView(add);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("添加物品");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
var itemId = parseInt(id.getText());
var iAmount = parseInt(amount.getText());
var iData = parseInt(data.getText());

if(itemId == null){itemId = "0";}

if(data == null){data = "0";}

if(iAmount>0){}else{iAmount = "1"}

Player.addItemInventory(itemId,iAmount, iData);
if(Level.getGameMode() == 1){
Entity.setCarriedItem(getplayerent(), itemId, iAmount, iData);
}
tmiDialog.dismiss();
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}





function zjcd(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)


var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("设置终极功能")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//长度text
var s1=new android.widget.TextView(ctx)
s1.setTextSize(14)
s1.setText("放置长度:")
s1.setTextColor(android.graphics.Color.rgb(255,255,255));
s1.setLayoutParams(textParams)
layout.addView(s1)
//长度输入框
var cd=new android.widget.EditText(ctx)
cd.setText(l>=0?String(l):"0")
cd.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(cd)
//间隔text
var s2=new android.widget.TextView(ctx)
s2.setTextSize(14)
s2.setText("放置间隔:")
s2.setTextColor(android.graphics.Color.rgb(255,255,255));
s2.setLayoutParams(textParams)
layout.addView(s2)
//长度输入框
var j=new android.widget.EditText(ctx)
j.setText(jg>=0?String(jg):"0")
j.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layout.addView(j)
//增减
 var buttony=new android.widget.Button(ctx)
if(zj==1){buttony.setText("方向(增)")}
else if(zj==-1){buttony.setText("方向(减)")} 
 buttony.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(zj==-1)
    {buttony.setText("方向(增)");
    zj=1}
    else if(zj==1)
    {buttony.setText("方向(减)");
    zj=-1}
 }}))
 layout.addView(buttony)    
  //X
 var buttonx=new android.widget.Button(ctx)
if(fzfx==1){buttonx.setText("方向(Y)")}
else if(fzfx==2){buttonx.setText("方向(X)")} 
else if(fzfx==3){buttonx.setText("方向(Z)")} 
 buttonx.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(fzfx==1)
    {buttonx.setText("方向(X)");
    fzfx=2}
    else if(fzfx==2)
    {buttonx.setText("方向(Z)");
    fzfx=3}    
    else if(fzfx==3)
    {buttonx.setText("方向(Y)");
    fzfx=1}
 }}))
 layout.addView(buttonx)      
  

		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("单点功能适用");
		C_xyz.setChecked(setchi);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			setchi = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);



//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("确认")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  l=cd.getText()
  jg=j.getText()
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function gcopy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("复制粘贴")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("复制设置")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nocopy()
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("选点复制")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    swifz=null
    clientMessage("点击两点，复制范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   
 

 var button=new android.widget.Button(ctx)
 button.setText("替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  tihuan()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   
 

 var button=new android.widget.Button(ctx)
 button.setText("实验性粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  experimentcopy()  
if(biockgroup[copytime]!=[]){swifz=1}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)   

 
  var button=new android.widget.Button(ctx)
 button.setText("选点粘贴(无放置空气)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  clientMessage("铁剑或水桶粘贴"); if(biockgroup[copytime]!=[]){swifz=2}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)    

 var button=new android.widget.Button(ctx)
 button.setText("选点粘贴(略慢)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){ 
  clientMessage("铁剑或水桶粘贴"); if(biockgroup[copytime]!=[]){swifz=1}else{clientMessage("请先复制")}
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("输入复制(略慢)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    forcopy(1)
 }}))
 layout.addView(button)   

 var button=new android.widget.Button(ctx)
 button.setText("输入粘贴(无放置空气)")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  setcopy(0)
 }}))
 layout.addView(button)   
 
 var button=new android.widget.Button(ctx)
 button.setText("输入粘贴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  setcopy(0)
 }}))
 layout.addView(button)    
 


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function tihuan(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("替换")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

 var button=new android.widget.Button(ctx)
 button.setText("选点替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    replacess()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   


 var button=new android.widget.Button(ctx)
 button.setText("高级检查替换")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    replacess2()
    clientMessage("点击两点，替换范围为长方体,铁剑或水桶选择")
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}





function forcopy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("输入复制")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//点1
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第一点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x1=new android.widget.EditText(ctx)
x1.setText("0")
x1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x1)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y1=new android.widget.EditText(ctx)
y1.setText("0")
y1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y1)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z1=new android.widget.EditText(ctx)
z1.setText("0")
z1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z1)

layout.addView(layouts)

//点2
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第二点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x2=new android.widget.EditText(ctx)
x2.setText("0")
x2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x2)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y2=new android.widget.EditText(ctx)
y2.setText("0")
y2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y2)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z2=new android.widget.EditText(ctx)
z2.setText("0")
z2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z2)

layout.addView(layouts)


//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("复制")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  copyblock(x1.getText(),y1.getText(),z1.getText(),x2.getText(),y2.getText(),z2.getText())
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}



function setcopy(n){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("输入粘贴")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//点1
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("第一点的坐标")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
//x
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("x:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var x1=new android.widget.EditText(ctx)
x1.setText("0")
x1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(x1)

layout.addView(layouts)
//y
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("y:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var y1=new android.widget.EditText(ctx)
y1.setText("0")
y1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(y1)

layout.addView(layouts)
//z
var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("z:")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layouts.addView(s)

var z1=new android.widget.EditText(ctx)
z1.setText("0")
z1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER)
layouts.addView(z1)

layout.addView(layouts)

//ok
var layoutchick=new android.widget.LinearLayout(ctx)
var button=new android.widget.Button(ctx)
button.setText("粘贴")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(n=1){
  setblock(x1.getText(),y1.getText(),z1.getText())}
  else{setblockwithout0(x1.getText(),y1.getText(),z1.getText())}
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)
//miss
var button=new android.widget.Button(ctx)
button.setText("取消")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  if(menu!=null)menu.dismiss();menu=null
}}))
layoutchick.addView(button)

layout.addView(layoutchick)



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}




function geometry(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("几何体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var buttonk=new android.widget.Button(ctx)
if(geotype==1){buttonk.setText("连线(开)")}
else if(geotype!=1){buttonk.setText("连线(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
    if(geotype!=1)
    {buttonk.setText("连线(开)");
    buttonm.setText("三点一面(关)");
    geotype=1;clientMessage("记得关");}
    else if(geotype==1)
    {buttonk.setText("连线(关)");
    geotype=0}
 }}))
 layout.addView(buttonk)    




var buttonm=new android.widget.Button(ctx)
if(geotype==2){buttonm.setText("三点一面(开)")}
else if(geotype!=2){buttonm.setText("三点一面(关)")} 

buttonm.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
    if(geotype!=2)
    {buttonm.setText("三点一面(开)");
    buttonk.setText("连线(关)");
    geotype=2;clientMessage("记得关");}
    else if(geotype==2)
    {buttonm.setText("三点一面(关)");
    geotype=0}
}}))
layout.addView(buttonm)  


var button=new android.widget.Button(ctx)
button.setText("测量工具")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  readtool()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("自定义角度")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  noj()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆/球")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  roundwindows()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("长方体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cuboidwindows()  
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("无底圆几何体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  roundwindow2()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("多边形")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  polygons()
}}))
layout.addView(button)  


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function special(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("特殊")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s) 


var button=new android.widget.Button(ctx)
button.setText("悬浮窗开关")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(btn!=null){btn.dismiss();btn=null;n=null}else{ftype()}
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("脚下生方块")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var x=parseInt(Entity.getX(getplayerent()))
var y=parseInt(Entity.getY(getplayerent())-2)
var z=parseInt(Entity.getZ(getplayerent()))
settile(x,y,z,1)
clientMessage("x="+x+",y="+y+",z="+z)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("像素画")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
intopit()
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("模拟点击方块")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
touchblock()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("点击坐标偏移")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
pianyiset()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("远距离放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(longgetchick==false){longgetchick=true;longget();print2("开启120格远距离模式");win3()}
else{longgetchick=false
			if(longset!= null){
				longset.dismiss();
				longset = null;
			}
}
}}))
layout.addView(button)  



var button=new android.widget.Button(ctx)
button.setText("撤销")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
replys()
}}))
layout.addView(button)   



var button=new android.widget.Button(ctx)
button.setText("快速毁图")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(rpgGUI==null)myrpg()
else {rpgGUI.dismiss();
rpgGUI=null}
clientMessage("点击按钮发射机关炮")
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("一键超平坦")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  caopingtan()
}}))
layout.addView(button)  


 var buttonk=new android.widget.Button(ctx)
if(pl[0]==1){buttonk.setText("铺路(开)")}
else if(pl[0]==0){buttonk.setText("铺路(关)")} 
 buttonk.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(pl[0]==0)
    {buttonk.setText("铺路(开)");
    pl[0]=1;clientMessage("记得关");}
    else if(pl[0]==1)
    {buttonk.setText("铺路(关)");
    pl[0]=0}
 }}))
 layout.addView(buttonk)    
 
var button=new android.widget.Button(ctx)
button.setText("铺路设置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  plset()
  buttonk.setText("铺路(关)");
    pl[0]=0
}}))
layout.addView(button)  
 
 
  var buttons=new android.widget.Button(ctx)
if(dx==1){buttons.setText("自动洞穴(开)")}
else if(dx==0){buttons.setText("自动洞穴(关)")} 
 buttons.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(dx==0)
    {buttons.setText("自动洞穴(开)");
    dx=1;clientMessage("记得关");}
    else if(dx==1)
    {buttons.setText("自动洞穴(关)");
    dx=0}
 }}))
 layout.addView(buttons)    


  var buttonss=new android.widget.Button(ctx)
if(isRunning){buttonss.setText("飞奔")}
else if(isRunning == false){buttonss.setText("行走")} 
 buttonss.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    if(isRunning==false)
    {buttonss.setText("飞奔");isRunning=true;clientMessage("强力奔跑")}
    else if(isRunning)
    {buttonss.setText("行走");isRunning =false}
 }}))
 layout.addView(buttonss)


var button=new android.widget.Button(ctx)
button.setText("脱离被覆盖")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var x=parseInt(Entity.getX(getplayerent()))
var y=parseInt(Entity.getY(getplayerent()))
var z=parseInt(Entity.getZ(getplayerent()))
for(var i=0;i<1000;i++){
if(getTile(x,y+i,z)==0){
setPosition(getplayerent(),x+0.5,y+i+1,z+0.5); 
print2("成功脱离")
break;
}}
}}))
layout.addView(button)   


var button=new android.widget.Button(ctx)
button.setText("关于")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
about()
}}))
layout.addView(button)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}
 
function roundwindows(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("圆/球")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button=new android.widget.Button(ctx)
 button.setText(rounds[0])
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(0);
 }}))
 layout.addView(button)   

 
  var button1=new android.widget.Button(ctx)
 button1.setText(rounds[1])
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(1);
 }}))
 layout.addView(button1)   

  var button2=new android.widget.Button(ctx)
 button2.setText(rounds[2])
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(2);
 }}))
 layout.addView(button2)   

  var button3=new android.widget.Button(ctx)
 button3.setText(rounds[3])
 button3.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(3);
 }}))
 layout.addView(button3)   

  var button4=new android.widget.Button(ctx)
 button4.setText(rounds[4])
 button4.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(4);
 }}))
 layout.addView(button4)   

  var button5=new android.widget.Button(ctx)
 button5.setText(rounds[5])
 button5.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(5);
 }}))
 layout.addView(button5)   

  var button6=new android.widget.Button(ctx)
 button6.setText(rounds[6])
 button6.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(6);
 }}))
 layout.addView(button6)   

  var button1=new android.widget.Button(ctx)
 button1.setText("半圆")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(13);
 }}))
 layout.addView(button1)   

  var button7=new android.widget.Button(ctx)
 button7.setText(rounds[7])
 button7.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(7);
 }}))
 layout.addView(button7)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Y椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(10)
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("垂直X椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(11)
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Z椭圆(单)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(12)
 }}))
 layout.addView(button1)   



  var button1=new android.widget.Button(ctx)
 button1.setText("两点椭圆(球)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    tuoyuancan()
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("单点椭圆(球)")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    cubtwo(4)
 }}))
 layout.addView(button1)   



  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Y圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(14)
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直X圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(15)
 }}))
 layout.addView(button1)   


  var button1=new android.widget.Button(ctx)
 button1.setText("垂直Z圆环")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    yuanquan(16)
 }}))
 layout.addView(button1)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function inputr(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
if(nau<13||nau==13||nau==81||nau==82){
tmiLayout.addView(id);}

if(nau==8||nau==81||nau==82||nau==9||nau==10||nau==12){
iph = new android.widget.EditText(ctx);
iph.setHint("输入高");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);
}

if(nau==10){
ipr = new android.widget.EditText(ctx);
ipr.setHint("上面半径");
ipr.setText(sbr>0?String(sbr):null)
ipr.setInputType(number);
tmiLayout.addView(ipr);
}

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
 if(nau<13||nau==13||nau==81||nau==82){r = parseInt(id.getText());}
crd=nau
if(nau==8||nau==81||nau==82||nau==9||nau==10||nau==12){h=parseInt(iph.getText());}
if(nau==10){sbr=parseInt(ipr.getText())}
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function cuboidwindows(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("两点长方体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button=new android.widget.Button(ctx)
 button.setText("实长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体")
    cub=1
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("空长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体") 
    cub=2
 }}))
 layout.addView(button)     
 
 
  var button=new android.widget.Button(ctx)
 button.setText("长方体框架")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击两点确定长方体") 
    cub=3
 }}))
 layout.addView(button)     

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("单点长方体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

  var button=new android.widget.Button(ctx)
 button.setText("实长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体")
    cubtwo(1)
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("空长方体")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体") 
    cubtwo(2)
 }}))
 layout.addView(button)     
 
 
  var button=new android.widget.Button(ctx)
 button.setText("长方体框架")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    clientMessage("点击一点确定长方体") 
    cubtwo(3)
 }}))
 layout.addView(button)     


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 



function roundwindow2(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("无底圆几何体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button1=new android.widget.Button(ctx)
 button1.setText("平行y圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(8);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("平行x圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(81);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("平行z圆柱")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(82);
 }}))
 layout.addView(button1)   

  var button1=new android.widget.Button(ctx)
 button1.setText("圆锥")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(9);
 }}))
 layout.addView(button1)   
 
 var button1=new android.widget.Button(ctx)
 button1.setText("圆台")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(10);
 }}))
 layout.addView(button1)   
 
  var button1=new android.widget.Button(ctx)
 button1.setText("金字塔")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    inputr(12);
 }}))
 layout.addView(button1)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 


function blockchange(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("编辑方块")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(15)
s.setText("本页面要内容求在有限算法只能完成，否则会卡死，建议强度2000以下，在有限算法之内无论取多少都没有问题")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


  var button1=new android.widget.Button(ctx)
 button1.setText("渗透方块")
 button1.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(102) 
 }}))
 layout.addView(button1)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("渗透(相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(103) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直Y面-相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(110) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直X面-相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(111) 
 }}))
 layout.addView(button2)   
 
 
var button2=new android.widget.Button(ctx)
 button2.setText("渗透(垂直Z相同方块)")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(112) 
 }}))
 layout.addView(button2)   



var button=new android.widget.Button(ctx)
button.setText("空岛-填坑")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blockinput(11) 
  clientMessage("点击坑处填坑，最高面")
}}))
layout.addView(button)  
 

var button=new android.widget.Button(ctx)
button.setText("类山脉")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blockinput(17) 
  clientMessage("点击坑处填坑，最高面")
}}))
layout.addView(button)  
 
var button2=new android.widget.Button(ctx)
 button2.setText("Y的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(18) 
 }}))
 layout.addView(button2)   
 
var button2=new android.widget.Button(ctx)
 button2.setText("X的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(19) 
 }}))
 layout.addView(button2)   
 
var button2=new android.widget.Button(ctx)
 button2.setText("Z的延长")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(20) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直Y的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(104) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直X的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(105) 
 }}))
 layout.addView(button2)   
 

var button2=new android.widget.Button(ctx)
 button2.setText("垂直Z的填平面")
 button2.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(106) 
 }}))
 layout.addView(button2)   




  var button4=new android.widget.Button(ctx)
 button4.setText("漫射-特效-毁档")
 button4.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    blockinput(101) 
 }}))
 layout.addView(button4)   


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}




function blockinput(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("强度");
id.setText(stre>0?String(parseInt(stre*10)):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

if(nau==101){
iph = new android.widget.EditText(ctx);
iph.setHint("输入半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);
}



tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
stre=0.1*parseInt(id.getText())
crd=nau
if(nau==101){r=parseInt(iph.getText())}
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function gameset(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("编辑世界")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
 
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("查看坐标");
		C_xyz.setChecked(option_xyz);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			option_xyz = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("低效率放置-不卡死");
		C_xyz.setChecked(settilechick);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			settilechick = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		
	var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("无字木牌");
		C_xyz.setChecked(	noworld);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
				noworld = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("空气和水发光");
		C_xyz.setChecked(islight);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			islight = isChecked;
			if(islight){Block.setLightLevel(0, 15);
			Block.setLightLevel(9, 15); 
			Block.setLightLevel(8, 15); }
			if(!islight){Block.setLightLevel(0, 0);
			Block.setLightLevel(9, 0); 
			Block.setLightLevel(8, 0); }
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);



	
var button=new android.widget.Button(ctx)
button.setText("实体-钟放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
setentity()
clientMessage("用时钟点击生成实体")
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("小地图")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(iskq){
				smallmapgui.dismiss();
				smallmapgui = null;
iskq=false;}
else{smallmapop()}
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("实体删除(慎用)")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
entityre()

}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("禁止刷出实体")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
entitystop()
}}))
layout.addView(button)  


var button=new android.widget.Button(ctx)
button.setText("阻止动作")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojiao()
}}))
layout.addView(button)  



  var button=new android.widget.Button(ctx)
 button.setText("变速")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    setv()
 }}))
 layout.addView(button)    
 
 
  var button=new android.widget.Button(ctx)
 button.setText("生命")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    healthy()
 }}))
 layout.addView(button)    



  var button=new android.widget.Button(ctx)
 button.setText("游戏模式")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    gamems()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("游戏时间")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    sett()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("玩家位置")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    playerxyz()
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("设置重生点")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    Level.setSpawn(Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()));
clientMessage("已设置玩家位置为重生点")
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

var vs
function setv(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("20为默认(公式:速度/20=普通速度的倍数)");
id.setText(vs>0?String(vs):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("变速");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
vs=parseInt(id.getText())
if(vs>0){ModPE.setGameSpeed(vs)
clientMessage("游戏速度切换为普通速度的"+vs/20+"倍")
}
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function healthy(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("20满血，0为死亡不掉物品(生命值<=255)");
id.setText(null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("生命");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
vs=parseInt(id.getText())
if(vs<256){Entity.setHealth(getplayerent(),vs);
}
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function gamems(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
add.setText("生存")
tmiLayout.addView(add);
var add2 = new android.widget.Button(ctx);
add2.setText("创造")
tmiLayout.addView(add2);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏模式");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){if(Level.getGameMode()!=0)Level.setGameMode(0)
tmiDialog.dismiss()
}});

add2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){if(Level.getGameMode()!=1)Level.setGameMode(1)
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function sett(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);

var addb=function(t,tmiLayout){
var add = new android.widget.TextView(ctx);
add.setText("时间:"+t+":00")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){Level.setTime(19200/24*t+19200/24*18);///
tmiDialog.dismiss()
}});
tmiLayout.addView(add);
}

for(var t=0;t<24;t+=3){
addb(t,tmiLayout);
}


tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏时间(创造无用)");

tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function playerxyz(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
add.setText("移动")

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  X:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var x=new android.widget.EditText(ctx)
x.setText(String(Entity.getX(getplayerent())))
layouts.addView(x)
tmiLayout.addView(layouts);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  Y:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var y=new android.widget.EditText(ctx)
y.setText(String(Entity.getY(getplayerent())))
layouts.addView(y)
tmiLayout.addView(layouts);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

var layouts=new android.widget.LinearLayout(ctx)
var s=new android.widget.TextView(ctx)
s.setTextSize(18)
s.setText("  Z:  ")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
//s.setLayoutParams(textParams)
layouts.addView(s)

var z=new android.widget.EditText(ctx)
z.setText(String(Entity.getZ(getplayerent())))
layouts.addView(z)
tmiLayout.addView(layouts);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("移动");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
Entity.setPosition(getplayerent(),x.getText(),y.getText(),z.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function show_XYZ(show){
	if(show){
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		try{
			var layout = new android.widget.LinearLayout(ctx);
			layout.setOrientation(1);
			
			T_X = new android.widget.TextView(ctx);
			T_X.setTextSize(16);
			T_X.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_X);
			
			T_Y = new android.widget.TextView(ctx);
			T_Y.setTextSize(16);
			T_Y.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_Y);
			
			T_Z = new android.widget.TextView(ctx);
			T_Z.setTextSize(16);
			T_Z.setTextColor(android.graphics.Color.BLACK);
			layout.addView(T_Z);
			
			xyzWindow = new android.widget.PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth(), dip2px(ctx, 100));
			xyzWindow.setTouchable(false);
			xyzWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | android.view.Gravity.LEFT, 0, 0);
		}catch(err){
			print2("错误!\n"+err);
		}
	}else if(xyzWindow != null){
		xyzWindow.dismiss();
		xyzWindow = null;
	}
}

function setentity(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

for(var m in entitylist)
{makebutton(ctx,layout,m,entitylist,entityid)}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton(ctx,layout,m,a,b,c)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  entitychange=entityid[m]
  print2("选择实体:"+button.getText()+"，时钟点击生成实体")
}}))
layout.addView(button)   
}



function experimentcopy()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("实验性粘贴(无空气)")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("带有“~”的是旋转,根据右手定则以XYZ的增方向旋转,不懂自己百度")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(s)

var button=new android.widget.Button(ctx)
button.setText("放大粘贴")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
cbig()
}}))
layout.addView(button)  

for(var m in copylist)
{makebutton2(ctx,layout,m,copylist)}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function makebutton2(ctx,layout,m,a)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  swifz=parseInt(m)+3
  print2("选择模式:"+button.getText()+"，铁剑或水桶点击粘贴")
}}))
layout.addView(button)   
} 

function nocopy()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称

var button=new android.widget.Button(ctx)
button.setText("复制粘贴存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cpcychunts()
}}))
layout.addView(button)   



var button=new android.widget.Button(ctx)
button.setText("导出存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blocksaveter()
}}))
layout.addView(button)   


var button=new android.widget.Button(ctx)
button.setText("导入存档")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  blocklist()
}}))
layout.addView(button)   



		var C = new android.widget.CheckBox(ctx);
		C.setText("粘贴不覆盖原有方块");
		C.setChecked(isfg);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		isfg=isChecked;
			}
		});
		layout.addView(C);
	

		var C = new android.widget.CheckBox(ctx);
		C.setText("去除水复制");
		C.setChecked(iswater);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		iswater	=isChecked;
			}
		});
		layout.addView(C);
	
		var C = new android.widget.CheckBox(ctx);
		C.setText("去除岩浆复制");
		C.setChecked(isyj);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
		isyj	=isChecked;
			}
		});
		layout.addView(C);


var button=new android.widget.Button(ctx)
button.setText("更多不复制")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  morecpcy()
}}))
layout.addView(button)   





   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function cpcychunts(){
var layout=new android.widget.LinearLayout(ctx) 
try{

var tmiLayout = new android.widget.LinearLayout(ctx);

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("现在使用存档"+(copytime+1))
s.setTextColor(android.graphics.Color.rgb(255,255,255));
tmiLayout.addView(s)
//biockgroup[copytime]!=[]
var m=function(n){var t
if(biockgroup[n][0]==undefined){t="未使用"}
else if(biockgroup[n]!=[]){ t=biockgroup[n].length+"*"+biockgroup[n][0].length+"*"+biockgroup[n][0][0].length}
return "大小:"+t
}
var add = new android.widget.Button(ctx);
add.setText("存档1"+m(0))
tmiLayout.addView(add);
var add2 = new android.widget.Button(ctx);
add2.setText("存档2"+m(1))
tmiLayout.addView(add2);
var add3 = new android.widget.Button(ctx);
add3.setText("存档3"+m(2))
tmiLayout.addView(add3);
var add4 = new android.widget.Button(ctx);
add4.setText("存档4"+m(3))
tmiLayout.addView(add4);
var add5 = new android.widget.Button(ctx);
add5.setText("存档5"+m(4))
tmiLayout.addView(add5);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("游戏时间(创造无用)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=0
tmiDialog.dismiss()
}});

add2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=1
tmiDialog.dismiss()
}});

add3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=2
tmiDialog.dismiss()
}});

add4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=3
tmiDialog.dismiss()
}});

add5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){copytime=4
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function morecpcy(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("使用方法，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");
id.setText(nocopyid)

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("复制跳过");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
nocopyid=String(id.getText())
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function tuoyuancan(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("参数值=椭圆的两点与椭圆上一点的距离的和-椭圆两焦点距离(建议1-10)");
id.setText(null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("椭圆参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
r=String(id.getText())
cub=4
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function TooManyItems2(type,tp2){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(23)
s.setText(tp2)
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m
for(m in type)
{makebutton3(ctx,layout,m,type)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton3(ctx,layout,m,a,r,g,b)
{
var button=new android.widget.TextView(ctx)
button.setText(a[m].name+String(a[m].id)+":"+String(a[m].data))
button.setTextSize(18)
if(r==undefined){
button.setTextColor(android.graphics.Color.rgb(255,255,255));}else{
button.setTextColor(android.graphics.Color.rgb(r,g,b));}
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(Level.getGameMode() == 0){
addids(m,a)
}
if(Level.getGameMode() == 1){
Entity.setCarriedItem(getplayerent(),a[m].id,1,a[m].data);
}
  print2("选择物品:"+button.getText())
}}))
layout.addView(button)   
} 


function addids(m,a){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
id.setHint("数量");
id.setText("1")
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("添加数量");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
//Entity.setCarriedItem(getplayerent(),a[m][1],1,a[m][2]);
Player.addItemInventory(a[m].id,id.getText(),a[m].data);
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function entityre(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("删除实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
var m
for(m in entityrelist)
{makebutton4(ctx,layout,m,entityrelist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton4(ctx,layout,m,a)
{
var button=new android.widget.Button(ctx)
button.setText(a[m])
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  var e=Entity.getAll()
  var v
  var i=0
  var b=entityretype[m]
  for(v in e)
  {
  if(b==true){
  if(Entity.getEntityTypeId(e[v])!=0){
  Entity.remove(e[v]);i++}}
  else if(Entity.getEntityTypeId(e[v])==b){
  Entity.remove(e[v]);i++}}
  print2("已删除 "+button.getText()+i+"个")
}}))
layout.addView(button)   
} 


function polygonss(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("输入顶点数");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);

ip = new android.widget.EditText(ctx);
ip.setHint("多边形旋转角度(顶点所在轴优先级y>x>z)");
ip.setText(bz>=0?String(bz):null)
tmiLayout.addView(ip);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("多边形参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=nau
r=parseInt(id.getText());
h=parseInt(iph.getText());
if(ip.getText()>0){bz=parseInt(ip.getText());}else{bz=0}
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function polygons(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("多边形")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

  var button=new android.widget.Button(ctx)
 button.setText("垂直Y")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(107)
 }}))
 layout.addView(button)   

  var button=new android.widget.Button(ctx)
 button.setText("垂直X")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(108)
 }}))
 layout.addView(button)   

  var button=new android.widget.Button(ctx)
 button.setText("垂直Z")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    polygonss(109)
 }}))
 layout.addView(button)   

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}



function replacess(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认")
var id = new android.widget.EditText(ctx); 
id.setHint("使用方法，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");
id.setText(replaceid)

var id2 = new android.widget.EditText(ctx); 
id2.setHint("使用方法，输入方块id，特殊值在后面加(:)，例子:12或35:7");
id2.setText(replaceids)
 
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(id2); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("替换");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
replaceid=String(id.getText())
replaceids=String(id2.getText()) 
cub=5
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function caopingtan(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);
var vs
add.setText("确认(超高频)")
var id = new android.widget.EditText(ctx); 
id.setHint("使用方法，输入方块，最底层向上的每层方块，从左到右，层数依次增加，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7,默认草地");
id.setText(replaceid)

var id2 = new android.widget.EditText(ctx); 
id2.setHint("最放置底层，大于0小于等于128(高度=输入值-1)，默认64");
id2.setText(null)
 
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
tmiLayout.addView(id2); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("一键超平坦(毁档)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
if(String(id.getText())==""){replaceid="2"}
else{replaceid=String(id.getText())}
if(id2.getText()<=0){h=64}
else{h=parseInt(String(id2.getText()))-1}
pt=true
/////
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}
 

function yuanquan(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("圆环输入半径");
id.setText(h>0?String(h):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("圆圈大小半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("圆圈(类似轮胎)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=nau
h=parseInt(id.getText());
r=parseInt(iph.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function entitystop(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("禁止生成实体")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)
var m
for(m in entityrelist)
{makebutton5(ctx,layout,m,entityrelist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function makebutton5(ctx,layout,m,a)
{
		var C = new android.widget.CheckBox(ctx);
		C.setText(a[m]);
		C.setChecked(entstop[m][1]);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			entstop[m][1] = isChecked;
			}
		});
		layout.addView(C);
} 


function readtool(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("测量工具")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var button=new android.widget.Button(ctx)
button.setText("取中点")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
  geotype=3
  print2("点击两点取中点")
}}))
layout.addView(button)  
 
var button=new android.widget.Button(ctx)
button.setText("三点所在面的交点")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cleans()
  geotype=4
  clientMessage ("点击3点求三点所在面的交点(适用于复制粘贴)\n优先级" + ChatColor.RED + " y>x>x")
}}))
layout.addView(button)  
 
var button=new android.widget.Button(ctx)
button.setText("选点生成方块 ")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   xdscfk()
}}))
layout.addView(button)  

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function nojiao(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("阻止动作")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m
for(m in actionlist)
{makebutton6(ctx,layout,m,actionlist)}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function makebutton6(ctx,layout,m,a)
{
		var C = new android.widget.CheckBox(ctx);
		C.setText(a[m][0]);
		C.setChecked(a[m][1]);
		C.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			a[m][1] = isChecked;
			}
		});
		layout.addView(C);
} 


function noj(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("自定义角度放置(不完美)")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)



var button=new android.widget.Button(ctx)
button.setText("圆圈")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(5)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆面")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(6)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆柱")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(7)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆锥")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(8)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆弧")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojr(9)
}}))
layout.addView(button)  

var button=new android.widget.Button(ctx)
button.setText("圆环")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  nojrs(10)
}}))
layout.addView(button)  


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
} 

function nojr(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("半径(建议练习)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
geotype=nau
cleans()
r=parseInt(id.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

function nojrs(nau){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("圆环输入半径");
id.setText(h>0?String(h):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("圆圈大小半径");
iph.setText(r>0?String(r):null)
iph.setInputType(number);
tmiLayout.addView(iph);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("圆圈(类似轮胎)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
geotype=nau
cleans()
h=parseInt(id.getText());
r=parseInt(iph.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function about()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var add = new android.widget.Button(ctx);

var s = new android.widget.TextView(ctx);  
s.setText("来自百度贴吧我的世界  6g3y\n未经允许不不得转载，不得抄袭大量算法，欢迎交流算法\n如果有什么bug或者更好的想法请反馈给6g3y\n谢谢使用本js，如果不会用该js可以到百度贴吧查看\n铁剑和水贴可以当成空气，指南针可以查看方块，还可以让生物骑在生物上面\n“▲”是重复上一个功能，只能几何体，方块编辑，复制粘贴");

add.setText("确认");

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

tmiLayout.addView(s);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("关于");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){

tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function plset()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("警告，范围太大会卡顿");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("铺路半径:");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("半径");
ip.setText("1")
l.addView(ip);

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否传统模式,打钩非传统(传统:手上方块;非传统:下面内容)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});

var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("使用方法，输入方块，每个几率一样(几率平分)，从左到右，可重复输入提高几率，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7,默认草地");
la.addView(t);

var id = new android.widget.EditText(ctx); 
id.setHint("默认草地");
id.setText("2")

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(cr,svp);
layout.addView(la,svp);
layout.addView(id,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("铺路")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {

var p=parseInt(ip.getText())-1
var h=id.getText()+" "
h=h.split(" ");
pl=[0,ms,h,p]

}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

function saveblocks(str){
try{
var f=String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/"+str)
var fos=java.io.FileOutputStream(f)
var n=biockgroup[copytime]
fos.write(n.length)
fos.write(n[0].length)
fos.write(n[0][0].length)
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
fos.write(n[x][y][z][0])
fos.write(n[x][y][z][1])
}}}
print2("输入完成")
}catch(err){clientMessage("错误: "+err+".")}
}

function readblocks(str){
try{
var f=String(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/"+str)
var fis=java.io.FileInputStream(f)
var fz=[]
var a=0
while(1){
a=fis.read()
if(a>=0){fz.push(a)}else{break}
}
if(fz.length==(fz[0])*(fz[1])*(fz[2])*2+3){
var m=fz[0],n=fz[1],o=fz[2]
var a=[]
var b=[]
var c=[]
for(var x=0;x<m;x++){b=[]
for(var y=0;y<n;y++){c=[]
for(var z=0;z<o;z++){
var k=fz[(x*n*o+o*y+z)*2+3]
var e=fz[(x*n*o+o*y+z)*2+4]
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("已读取文件")
clientMessage("统计方块:"+((fz.length-3)*0.5)+"个,x="+fz[0]+",y="+fz[1]+",z="+fz[2]);
return true
}else if(fz.length==(fz[0]-1)*(fz[1]-1)*(fz[2]-1)*2+3){
var m=fz[0]-1,n=fz[1]-1,o=fz[2]-1
var a=[]
var b=[]
var c=[]
for(var x=0;x<m;x++){b=[]
for(var y=0;y<n;y++){c=[]
for(var z=0;z<o;z++){
var k=fz[(x*n*o+o*y+z)*2+3]
var e=fz[(x*n*o+o*y+z)*2+4]
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("已读取文件")
clientMessage("统计方块:"+((fz.length-3)*0.5)+"个,x="+fz[0]+",y="+fz[1]+",z="+fz[2]);
return true
}else{
print2("文件格式错误")
return false
}
}catch(err){
print2("读取失败")
return false
}
}

function blocklist()
{
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("导入保存内容")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var s=new android.widget.TextView(ctx)
s.setTextSize(14)
s.setText("/sdcard/games/com.mojang/xxx.block\n可以互相传")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
layout.addView(s)

var fl=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang").list()
//print2(fl)
for(var i=0;i<fl.length;i++){
var fn=fl[i].split("/")
fn=String(fn[fn.length-1])
var is=fn.split(".")
if(is[is.length-1]=="block")
makebuttona(ctx,layout,is[0],fn)
////filebtn(layout,ctx,textParams,fn)
}


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.75,0)
}catch(err){
    print2("错误: "+err+".")
}
}


function makebuttona(ctx,layout,m,n)
{
var button=new android.widget.Button(ctx)
button.setText(m)
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  readblocks(n)
}}))
layout.addView(button)   
}

//saveblocks("a.block")
function blocksaveter()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("说明，可以发送给好友\n/sdcard/games/com.mojang/xxx.block");

var id = new android.widget.EditText(ctx); 
id.setHint("输入名称(可覆盖)");
id.setText(null)

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(id,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("导出储存")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
if(biockgroup[copytime].length>0){
var h=id.getText()+".block"
saveblocks(h)
}else{
print2("不能储存空的")
}
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

function cbig(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认");
id.setHint("输入倍数");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("倍数(建议练习)");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
swifz=16
bigs=parseInt(id.getText());
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



function xdscfk()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("输入坐标生存方块,默认发光黑曜石");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("id:");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("输入物品id");
ip.setText("246")
l.addView(ip);
var ld=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("bd:");
ld.addView(t);
var id4 = new android.widget.EditText(ctx);
id4.setHint("输入物品特殊值");
id4.setText("0")
ld.addView(id4);


var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("X:");
la.addView(t);
var id = new android.widget.EditText(ctx);
id.setHint("X");
id.setText(null)
la.addView(id);
var lb=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("Y:");
lb.addView(t);
var id2 = new android.widget.EditText(ctx);
id2.setHint("Y");
id2.setText(null)
lb.addView(id2);
var lc=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("Z:");
lc.addView(t);
var id3 = new android.widget.EditText(ctx);
id3.setHint("Z");
id3.setText(null)
lc.addView(id3);

var button=new android.widget.Button(ctx)
button.setText("放置")
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
try{
 settile(id.getText(),id2.getText(),id3.getText(),ip.getText(),id4.getText())
 print2("已放置方块");
}catch(err){
			print2("放置失败: "+err+".");
		}
}}))


//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(ld,svp);
layout.addView(la,svp);
layout.addView(lb,svp);
layout.addView(lc,svp);
layout.addView(button,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("生成方块")
		.setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

 
function replacess2()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout


var id = new android.widget.EditText(ctx); 
id.setHint("方块A，输入方块id，加空格如(12 13 14)，特殊值在后面加(:)，例子:12 13:5 35:7");

var id2 = new android.widget.EditText(ctx); 
id2.setHint("方块B，输入方块id，特殊值在后面加(:)，例子:12或35:7");
 

var id3 = new android.widget.EditText(ctx); 
id3.setHint("方块B相对方块A的位置，格式:X:Y:Z(例如1:0:0，就在B在A的x+方向)");

var id4 = new android.widget.EditText(ctx); 
id4.setHint("被放置方块相对方块A的位置，格式:X:Y:Z(例如0:-1:0，就在B在A的下(y-)方向)");

var id5 = new android.widget.EditText(ctx); 
id5.setHint("即将放置的，输入方块id，特殊值在后面加(:)，例子:12或35:7");

 
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:下面的都要填写，这个功能可以修改地皮，铺雪，判断方块，如果A方块满足条件则，判断B方块，如果B也满足然后执行替换指令")



//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(s,svp);
layout.addView(id,svp);
layout.addView(id2,svp);
layout.addView(id3,svp);
layout.addView(id4,svp);
layout.addView(id5,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("高级替换")
		.setNegativeButton("替换", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
replaceid=String(id.getText())
replaceids=String(id2.getText())
replaceidset=String(id5.getText())
try{
var h = String(id3.getText()).split(":");
var w = String(id4.getText()).split(":");
h=[parseInt(h[0]),parseInt(h[1]),parseInt(h[2])]
w=[parseInt(w[0]),parseInt(w[1]),parseInt(w[2])]
repxyz=[h,w]
cub=6
		}catch(err){
print2("输入错误。原因:如果看不懂就算了， "+err);
		}
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}



function dixingmune(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("自然景观")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("各种树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  treemune()
 }}))
 layout.addView(button)   
 
 var button=new android.widget.Button(ctx)
 button.setText("洞穴")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  cavemune()
 }}))
 layout.addView(button)   
  
  var button=new android.widget.Button(ctx)
 button.setText("丘陵")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  qiulinga()
 }}))
 layout.addView(button)   
 



   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}

function treemune(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("各种树")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)


 var button=new android.widget.Button(ctx)
 button.setText("热带雨林树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=201
clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("榕树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=202
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 var button=new android.widget.Button(ctx)
 button.setText("分叉树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=203
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 

  var button=new android.widget.Button(ctx)
 button.setText("低矮树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=204
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   


  var button=new android.widget.Button(ctx)
 button.setText("高度中等的树")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
  crd=205
  clientMessage("用id为17的木头点击方块生成相对应的树")
 }}))
 layout.addView(button)   
 
 
 


   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}
}


var cave=[]

function cavemune()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout


var id = new android.widget.EditText(ctx); 
id.setHint("角度(不填随机)");

var id2 = new android.widget.EditText(ctx); 
id2.setHint("长度(200-300正常水平)");
 
var id3 = new android.widget.EditText(ctx); 
id3.setHint("分叉数(多级的4-5差不多)");

var id4 = new android.widget.EditText(ctx); 
id4.setHint("巨型洞穴强度(半径)"); 
  

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("末端是否生成巨型洞穴");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});   

var ms2=false
var cr2=new android.widget.CheckBox(ctx);
cr2.setText("是否多级分叉");
cr2.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms2=true;else ms2=false;
				}
		}); 
var ms3=false
var cr3=new android.widget.CheckBox(ctx);
cr3.setText("是否多末端生存岩浆(1/2几率)");
cr3.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms3=true;else ms3=false;
				}
		}); 
 
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:下面的都要填写，写出旋转角度，角度的起始边在Z+上，安装y+进行右手定则旋转，沿着改方向延长生成，并且填写长度(矿洞长度)，巨洞生成安半径计算")



//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(s,svp);
layout.addView(id,svp);
layout.addView(id2,svp); 
layout.addView(cr2,svp);
layout.addView(id3,svp);
layout.addView(cr,svp);
layout.addView(id4,svp); 
layout.addView(cr3,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("洞穴").setNegativeButton("确定", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
cave[0]=-parseInt(String(id.getText()))
cave[1]=parseInt(String(id2.getText()))
cave[2]=parseInt(String(id3.getText()))+1
cave[3]=[ms,ms2,ms3]
cave[4]=parseInt(String(id4.getText()))  
crd=301
clientMessage("点击方块生成矿洞"); 
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}

 
function qiulinga(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入半径");
id.setText(r>0?String(r):null)
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

iph = new android.widget.EditText(ctx);
iph.setHint("输入高");
iph.setText(h>0?String(h):null)
iph.setInputType(number);
tmiLayout.addView(iph);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("丘陵");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=302
clientMessage("点击方块生成丘陵"); 
r=parseInt(id.getText())
h=parseInt(iph.getText())
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function myrpg(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {try{
rpgGUI = new android.widget.PopupWindow();
var layout = new android.widget.RelativeLayout(ctx);
var button = new android.widget.Button(ctx);
button.setText("+");
button.setBackgroundColor(android.graphics.Color.argb(30,255,255,255));
button.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
krbg=1
break;
case 1:
krbg=0
break;
}
return true;
}
}));
layout.addView(button);
                        
rpgGUI.setContentView(layout);
rpgGUI.setWidth(100);
rpgGUI.setHeight(100);
rpgGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 2, 400);}
catch(err){print2("Error: "+err);
}}}));}




function joinitem(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)



var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("添加物品")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

		
		
		var C_xyz = new android.widget.CheckBox(ctx);
		C_xyz.setText("双击获得方块");
		C_xyz.setChecked(shuangji);
		C_xyz.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
			onCheckedChanged: function(v, isChecked){
			shuangji = isChecked;
			show_XYZ(isChecked);
			}
		});
		layout.addView(C_xyz);
	

  var button=new android.widget.Button(ctx)
 button.setText("手动添加物品")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    TooManyItems()
clientMessage("指南针点击方块，获得方块数据")
 }}))
 layout.addView(button)   
 
 
var sab
for(sab in cat){
tmiaddbutton(ctx,layout,cat[sab][0],cat[sab][1])}


  var button=new android.widget.Button(ctx)
 button.setText("按颜色")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
var m= function(){var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,75), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
//名称
var s=new android.widget.TextView(ctx)
s.setTextSize(23)
s.setText("按颜色")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)

var m,ssad=[]
for(m in color){
ssad[m]={name:"██ ",id:color[m][0],data:color[m][1]}}
for(m in ssad)
{makebutton3(ctx,layout,m,ssad,color[m][2],color[m][3],color[m][4])}

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.5,0)
}catch(err){
    print2("错误: "+err+".")
}}
clientMessage("指南针点击方块，获得方块数据")
m()
 }}))
 layout.addView(button)    

   var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print2("错误: "+err+".")
}
}
 

function tmiaddbutton(ctx,layout,a,b){
  var button=new android.widget.Button(ctx)
 button.setText(b)
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    TooManyItems2(a,b)
clientMessage("指南针点击方块，获得方块数据")
 }}))
 layout.addView(button)    
}



function replys()
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//layout

var cr=new android.widget.CheckBox(ctx);
cr.setText("是否记入撤销(开启较卡)");
cr.setChecked(chickreply); 
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) chickreply=true;else chickreply=false;
				}
		});   

//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(cr,svp);

for(var as=1;as<classreply.length;as++){
if(as>100)break;
makereplybutton(cr,svp,layout,classreply[as]) 
}


sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx).setView(sv).setTitle("选择撤销，爆炸，自己手动放置破坏不算").setPositiveButton("结束",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err);
		}
	}}));
}
 
function makereplybutton(cr,svp,layout,a)
{
var button=new android.widget.TextView(ctx)
button.setText(String(a[0])+"  个数:"+String(a.length-1))
button.setTextSize(18)
button.setTextColor(android.graphics.Color.rgb(255,255,255));
button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
if(forreply==null){ 
forreply=a
print2("开始恢复")
}
}}))
layout.addView(button)   
}  
var forreply=null
var replytime=null
function replytick(ch){
if(forreply!=null){
var a=forreply 
for(var t=1;t<a.length;t++){
settile(a[t][0],a[t][1],a[t][2],a[t][3],a[t][4])}
forreply=null 
print2("已经恢复") }
if(chickreply&&ch){
var time = android.text.format.Time(); 
time.setToNow();
var u=String(time.hour) 
var a=u+":"+String(time.minute)+":"+String(time.second)
//print(a)
if(classreply[0].length>0){
if(a!=replytime&&u<25){
classreply[0].unshift(a)
classreply.unshift([]) 
}}}}

var cubt=[null,null,null]
function cubtwo(sob){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
var id = new android.widget.EditText(ctx);
var id3 = new android.widget.EditText(ctx);
var id2 = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("输入X长度");
id.setText(cubt[0]>=0?String(r):null)
id.setInputType(number);
if(sob!=11)tmiLayout.addView(id);
id2.setHint("输入Y长度");
id2.setText(cubt[1]>=0?String(r):null)
id2.setInputType(number);
if(sob!=10)tmiLayout.addView(id2);
id3.setHint("输入Z长度");
id3.setText(cubt[2]>=0?String(r):null)
id3.setInputType(number);
if(sob!=12)tmiLayout.addView(id3);


tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("设定参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
crd=sob+20
clientMessage("输入成功"); 
cubt[0]=parseInt(id.getText())-1
cubt[1]=parseInt(id2.getText())-1
cubt[2]=parseInt(id3.getText())-1
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}



//x,y,z,itemId,blockId,side,itemDamage,blockDamage
function touchblock(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
//TooManyItems
var tmiLayout = new android.widget.LinearLayout(ctx);
var id=[],num

var text=["X坐标","Y坐标","Z坐标","手上的id","手上的特殊值","相对坐标位置;0:y-,1:y+,2:z-,3:z+,4:x-,5;x+"]
var datas=[Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()),Player.getCarriedItem(),Player.getCarriedItemData(),null]
var la=new android.widget.LinearLayout(ctx) 
var lb=new android.widget.LinearLayout(ctx) 
var lc=new android.widget.LinearLayout(ctx) 
var ld=new android.widget.LinearLayout(ctx) 
for(num in text){
id[num]=new android.widget.EditText(ctx);
id[num].setHint(text[num]);
id[num].setText(String(Math.round(datas[num])));
id[num].setInputType(number);
}

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);

for(num in text){
if(num<3){la.addView(id[num]);}
else if(num<5){lb.addView(id[num]);}
else {lc.addView(id[num]); }
}

var add = new android.widget.Button(ctx);
add.setText("激活useItem")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
useitem([parseInt(id[0].getText()),parseInt(id[1].getText()),parseInt(id[2].getText()),parseInt(id[3].getText()),getTile(id[0].getText(),id[1].getText(),id[2].getText()),id[5].getText(),id[4].getText(),Level.getData(id[0].getText(),parseInt(id[1].getText()),parseInt(id[2].getText()))])
}
});
ld.addView(add)

var add = new android.widget.Button(ctx);
add.setText("关闭")
add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
tmiDialog.dismiss();
}
});
ld.addView(add)

tmiLayout.addView(la) 
tmiLayout.addView(lb) 
tmiLayout.addView(lc) 
tmiLayout.addView(ld) 

//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("模拟点击方块(没有放置)");

tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}

var useitemdata=null
function useitem(a)
{
useitemdata=a
}

function pianyiset(){
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
var id = new android.widget.EditText(ctx);
var id3 = new android.widget.EditText(ctx);
var id2 = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("说明必看:在点击时偏移坐标，必须为整数，并且可以负数，用来改变复制粘贴，几何体的初始位置，这东西很好用")
tmiLayout.addView(s);
add.setText("确认")
id.setHint("输入X长度");
id.setText(String(pianyilist[0]))
tmiLayout.addView(id);
id2.setHint("输入Y长度");
id2.setText(String(pianyilist[1]))
tmiLayout.addView(id2);
id3.setHint("输入Z长度");
id3.setText(String(pianyilist[2]))
tmiLayout.addView(id3);
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("设定参数");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
clientMessage("输入成功"); 
pianyilist[0]=parseInt(id.getText())
pianyilist[1]=parseInt(id2.getText())
pianyilist[2]=parseInt(id3.getText())
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}




























































var settilenum=0
//var settilenum2=0
var che=0
function modTick()
{
if(settilelist[0]!=undefined){
for(;settilenum<settilelist.length;settilenum++){
setTile(settilelist[settilenum][0],settilelist[settilenum][1],settilelist[settilenum][2],settilelist[settilenum][3],settilelist[settilenum][4])
}
if(che==0){settilelist=[];settilenum=0}
}

replytick(che==0)

if(useitemdata!=null){
var a=useitemdata
var m=0
useItem(a[m++],a[m++],a[m++],a[m++],a[m++],a[m++],a[m++],a[m++])
useitemdata=null
}

getallofgytype()
//pictures=[true,bitmap,ms,h1,w1,h2,w2]
if(pictures[0])
{var s=pictures //s[]
pictures[0]=false
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
xc.setPriority(10)
picture(s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8])
}}));
xc.start()
}
if(pt)cpt()
	if(option_xyz){
		var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
		ctx.runOnUiThread(new java.lang.Runnable({
			run: function() {
				T_X.setText("X: "+Math.round(Entity.getX(getplayerent())*100)/100);
				T_Y.setText("Y: "+((Math.round(Entity.getY(getplayerent())*100)/100) - 1)+" (feet pos, "+Math.round(Entity.getY(getplayerent())*100)/100+" eyes pos)");
				T_Z.setText("Z: "+Math.round(Entity.getZ(getplayerent())*100)/100);
			}
		}));
	}
	
	
if(krbg==1){rpg()}
	

//clientMessage(Level.getTime())
if(pl[0]==1)fpl()
if(dx==1)fdx(Entity.getX(getplayerent()),Entity.getY(getplayerent()),Entity.getZ(getplayerent()))
running()
}
var runtime=1
function running(){
if(isRunning){

//From WhyTofu's Sprint Mod
if(runtime==1)
      {
			   Xpos=Entity.getX(getplayerent());
        Zpos=Entity.getZ(getplayerent());
        runtime++
      }
      else if(runtime==3)
      {
        runtime=1;
        Xdiff=Entity.getX(getplayerent())-Xpos;
        Zdiff=Entity.getZ(getplayerent())-Zpos;
        setVelX(getplayerent(),1.2*Xdiff);
        setVelZ(getplayerent(),1.2*Zdiff);
        Xdiff=0;
        Zdiff=0;
      }
  if(runtime!=1)
  {
  runtime++
  }

}else if(isRunning==false){

return null;
}
}


function getallofgytype(){
if(allofgytype[0]!=crd&&crd!=null)
{allofgytype[0]=crd;swifz=0;geotype=0;cub=0;allofgytype[4]=0;cleans();allofgytype[1]=0;allofgytype[2]=0;allofgytype[3]=0}
if(allofgytype[1]!=swifz&&(swifz>0||swifz==null))
{allofgytype[1]=swifz;crd=null;geotype=0;cub=0;allofgytype[4]=1;cleans();allofgytype[0]=0;allofgytype[2]=0;allofgytype[3]=0}
if(allofgytype[2]!=geotype&&geotype!=0)
{allofgytype[2]=geotype;crd=null;swifz=0;cub=0;allofgytype[4]=2;cleans();allofgytype[1]=0;allofgytype[0]=0;allofgytype[3]=0}
if(allofgytype[3]!=cub&&cub!=0)
{allofgytype[3]=cub;crd=null;swifz=0;geotype=0;allofgytype[4]=3;cleans();allofgytype[1]=0;allofgytype[2]=0;allofgytype[0]=0}
}



function fpl(){
var x=Entity.getX(getplayerent()),y=Entity.getY(getplayerent()),z=Entity.getZ(getplayerent())
if(pl[1]==false){
if(Player.getCarriedItem()<256){
for(var i=-pl[3];i<=pl[3];i++){
for(var j=-pl[3];j<=pl[3];j++){
if(i*i+j*j<=pl[3]*pl[3])settile(x+i,y-2,z+j,Player.getCarriedItem(),Player.getCarriedItemData())
}
}}}
else
{
for(var i=-pl[3];i<=pl[3];i++){
for(var j=-pl[3];j<=pl[3];j++){
var k=2,e=0,w=pl[2]
var ida=Math.floor(Math.random()*(pl[2].length-1));
var o=w[ida]
if(o>=0){k=o}
else{o=o.split(":");k=o[0];e=o[1]}
if(i*i+j*j<=pl[3]*pl[3])settile(x+i,y-2,z+j,k,e)
}}
}
}


function fdx(x,y,z){
for(var i=1;i<4;i++){
settile(x+i-2,y-1,z+1,0)
settile(x+i-2,y-1,z,0)
settile(x+i-2,y-1,z-1,0)
settile(x+i-2,y+2,z+1,0)
settile(x+i-2,y+2,z,0)
settile(x+i-2,y+2,z-1,0)}
for(var i=1;i<6;i++){
settile(x+i-3,y+1,z+2,0)
settile(x+i-3,y+1,z+1,0)
settile(x+i-3,y+1,z,0)
settile(x+i-3,y+1,z-1,0)
settile(x+i-3,y+1,z-2,0)
settile(x+i-3,y,z+2,0)
settile(x+i-3,y,z+1,0)
settile(x+i-3,y,z,0)
settile(x+i-3,y,z-1,0)
settile(x+i-3,y,z-2,0)
}}

function cubi(x,y,z,i,id)
{
if(i<256){
//连线
if(cub==1){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid1(i,id);cleans();cub=0} }

if(cub==2){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid2(i,id);cleans();cub=0} }

if(cub==3){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");cuboid3(i,id);cleans();cub=0} }

if(cub==4){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("放置");tuoyuan(i,id);cleans();cub=0} }

if(cub==5){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("开始替换");replaces(s1[0],s1[1],s1[2],s2[0],s2[1],s2[2]);cleans();cub=0} }

if(cub==6){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("开始替换");replaces2(s1[0],s1[1],s1[2],s2[0],s2[1],s2[2]);cleans();cub=0} }

}} 



function geo(x,y,z,i,id)
{
if(i<256){
var g=geotype
//连线
if(g==1){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("连接");lianxian(s1,s2,i,id);cleans()}}
//三点一面
if(g==2){
if(s1==false){s1=[x,y,z];print2("设置点一");}
else if(s2==false)
{s2=[x,y,z];print2("设置点二");}
else if(s3==false){s3=[x,y,z];print2("连接");sdym(s1,s2,i,id);cleans()}}

if(g==3){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");settile((s1[0]+s2[0])*0.5,(s1[1]+s2[1])*0.5,(s1[2]+s2[2])*0.5,i,id);cleans();geotype=0}}

if(g==4){
if(s1==false)
{s1=[x,y,z];print2("设置点Y面");}
else if(s2==false)
{s2=[x,y,z];print2("设置点X面");}
else if(s3==false)
{s3=[x,y,z];print2("设置点Z面,放置"+s3[0]+","+s1[1]+","+s2[2]);settile(s3[0],s1[1],s2[2],i,id);cleans();geotype=0}}

if(g==5){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj1(s1,s2,r,i,id);cleans();geotype=0}}

if(g==6){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj2(s1,s2,r,i,id);cleans();geotype=0}}


if(g==7){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj3(s1,s2,r,i,id);cleans();geotype=0}}


if(g==8){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj4(s1,s2,r,i,id);cleans();geotype=0}}


if(g==9){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj5(s1,s2,r,i,id);cleans();geotype=0}}


if(g==10){
if(s1==false)
{s1=[x,y,z];print2("设置点一");
}else if(s2==false)
{s2=[x,y,z];print2("ok");noj6(s1,s2,r,h,i,id);cleans();geotype=0}}


}
}
cleans()
function cleans(){s1=false,s2=false,s3=false,s4=false }


function updata(){
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
if(n!=null){n.setText("X增方向:"+fx[getyaw()]+"\n放置长度:"+l+"\n放置间隔:"+jg+"\n放置Id:"+Player.getCarriedItem()+","+Player.getCarriedItemData()+"\n复制储存:"+(parseInt(copytime)+1)+"\n\n");
updata()}
}}),60);
}}))
}


function getyaw()
{
var yaw=getYaw()%360+360;
if(yaw%360>337.5||yaw%360<=22.5){
return 6}
else if(yaw%360>22.5&&yaw%360<=76.5){
return 5}
else if(yaw%360>67.5&&yaw%360<=112.5){
return 4}
else if(yaw%360>112.5&&yaw%360<=157.5){
return 3}
else if(yaw%360>157.5&&yaw%360<=202.5){
return 2}
else if(yaw%360>202.5&&yaw%360<=247.5){
return 1}
else if(yaw%360>247.5&&yaw%360<=292.5){
return 0}
else if(yaw%360>292.5&&yaw%360<=337.5){
return 7}
}


function alloffzzt(x,y,z,i)
{
if(swifz!=false){if(i==0){
if(swifz==null){swifz=[x,y,z];print2("设置点1")}
else if(swifz==1){setblock(x,y,z);swifz=false}
else if(swifz==2){setblockwithout0(x,y,z);swifz=false}
else if(swifz==3){setblockwithout3(x,y,z);swifz=false} 
else if(swifz==4){setblockwithout4(x,y,z);swifz=false} 
else if(swifz==5){setblockwithout5(x,y,z);swifz=false} 
else if(swifz==6){setblockwithout6(x,y,z);swifz=false} 
else if(swifz==7){setblockwithout7(x,y,z);swifz=false} 
else if(swifz==8){setblockwithout8(x,y,z);swifz=false} 
else if(swifz==9){setblockwithout9(x,y,z);swifz=false} 
else if(swifz==10){setblockwithout10(x,y,z);swifz=false} 
else if(swifz==11){setblockwithout11(x,y,z);swifz=false} 
else if(swifz==12){setblockwithout12(x,y,z);swifz=false} 
else if(swifz==13){setblockwithout13(x,y,z);swifz=false} 
else if(swifz==14){setblockwithout14(x,y,z);swifz=false} 
else if(swifz==15){setblockwithout15(x,y,z);swifz=false} 
else if(swifz==16){setblockbig(x,y,z);swifz=false} 
else if(swifz!=null){copyblock(swifz[0],swifz[1],swifz[2],x,y,z);swifz=false}
}} 
}
 



function copyblock(aa,ba,ca,ab,bb,cb)
{
var w=nocopyid.split(" ");
//clientMessage(nocopyid)
biockgroup[copytime]=[]
var a=[]
var b=[]
var c=[]
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){b=[]
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){c=[]
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
if(iswater){if(k==8||k==9){k=0;e=0}}
if(isyj){if(k==10||k==11){k=0;e=0}}
var v
for(v in w){
var o=w[v]
if(o>=0){if(o==k){k=0;e=0}}
else{o=o.split(":");
if(o[0]==k&&o[1]==e){k=0;e=0}
}}
c.push([k,e])
}b.push(c)
}a.push(b)
}biockgroup[copytime]=a
print2("复制")
}


function setblock(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}
print2("粘贴完成")
}

function setblockwithout0(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
} 
//["x轴镜像","y轴倒影","z轴倒影","xy轴倒影"] 

function setblockwithout3(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
} 
 
function setblockwithout4(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}  

function setblockwithout5(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}   

function setblockwithout6(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout7(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x))==0){
settile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n.length)-1-parseInt(x),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout8(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout9(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x))==0){
settile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(b)+parseInt(y),parseInt(c)+parseInt(x),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 


function setblockwithout12(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(z),parseInt(c)+parseInt(n[x].length)-1-parseInt(y),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout11(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(n[x][y].length)-1-parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout10(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y))==0){
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x),parseInt(b)+parseInt(n[x][y].length)-1-parseInt(z),parseInt(c)+parseInt(y),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 


function setblockwithout13(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n[x].length)-1-parseInt(y),parseInt(b)+parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout14(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z))==0){
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(n.length)-1-parseInt(x),parseInt(b)+parseInt(n[x].length)-1-parseInt(y),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    


function setblockwithout15(a,b,c)
{
var n=biockgroup[copytime]
var x=0
var y=0
var z=0
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
if(isfg){if(getTile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0])==0){
settile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(y),parseInt(b)+parseInt(n.length)-1-parseInt(x),parseInt(c)+parseInt(z),n[x][y][z][0],n[x][y][z][1]);}
}}}}
print2("粘贴完成")
}    
 var bigs
function setblockbig(a,b,c){
var n=biockgroup[copytime]
for(x in n){
for(y in n[x]){
for(z in n[x][y]){
if(n[x][y][z][0]!=0){
for(var m=0;m<bigs;m++){
for(var l=0;l<bigs;l++){
for(var o=0;o<bigs;o++){
if(isfg){if(getTile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o)==0){
settile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o,n[x][y][z][0],n[x][y][z][1]);
}}else{
settile(parseInt(a)+parseInt(x)*bigs+m,parseInt(b)+parseInt(y)*bigs+l,parseInt(c)+parseInt(z)*bigs+o,n[x][y][z][0],n[x][y][z][1]);}}}}}
}}}
print2("粘贴完成")
}











function lianxian(s1,s2,i,id)
{
if(s1!=false&&s2!=false)
{
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m++){
settile(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)),i,id)}////
}}

function sdym(s1,s2,it,id)
{
if(s1!=false&&s2!=false)
{
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m+=0.5){
lianxian([Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z))],s3,it,id)}////
}}


 

function chickround(x,y,z,b,bd)
{
if(crd!=null){
switch(crd){
case 0:ycircle(x,y,z,r,b,bd);break;
case 1:xcircle(x,y,z,r,b,bd);break;
case 2:zcircle(x,y,z,r,b,bd);break;
case 3:yround(x,y,z,r,b,bd);break;
case 4:xround(x,y,z,r,b,bd);break;
case 5:zround(x,y,z,r,b,bd);break;
case 6:unsphere(x,y,z,r,b,bd);break;
case 7:sphere(x,y,z,r,b,bd);break;
case 8:yuanzhuy(x,y,z,r,b,bd);break;
case 81:yuanzhux(x,y,z,r,b,bd);break;
case 82:yuanzhuz(x,y,z,r,b,bd);break;
case 9:yuanzhui(x,y,z,r,b,bd);break;
case 10:yuantai(x,y,z,r,b,bd);break;
case 11:tiankeng(x,y,z,stre,b,bd);break;
case 12:jinzita(x,y,z,h,r,b,bd);break;
case 13:halfsphere(x,y,z,r,b,bd);break;
case 14:ycircleround(x,y,z,r,h,b,bd);break;
case 15:xcircleround(x,y,z,r,h,b,bd);break;
case 16:zcircleround(x,y,z,r,h,b,bd);break;
case 17:shanmai(x,y,z,stre,b,bd);break;
case 18:yanchangy(x,y,z,stre,b,bd);break;
case 19:yanchangx(x,y,z,stre,b,bd);break;
case 20:yanchangz(x,y,z,stre,b,bd);break;
case 21:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid1(b,bd);break;
case 22:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid2(b,bd);break;
case 23:s1=[x,y,z];s2=[x+cubt[0],y+cubt[1],z+cubt[2]];cuboid3(b,bd);break;
case 24:tuosphere(x,y,z,b,bd);break;
case 30:tuospherey(x,y,z,b,bd);break;
case 31:tuospherex(x,y,z,b,bd);break;
case 32:tuospherez(x,y,z,b,bd);break;
case 101:manshe(x,y,z,stre,b,bd);break;
case 102:shentou(x,y,z,stre,b,bd);break;
case 103:shentou2(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 104:tiankengy(x,y,z,stre,b,bd);break;
case 105:tiankengx(x,y,z,stre,b,bd);break;
case 106:tiankengz(x,y,z,stre,b,bd);break;
case 107:dbxy(x,y,z,r,h,bz,b,bd);break;
case 108:dbxx(x,y,z,r,h,bz,b,bd);break;
case 109:dbxz(x,y,z,r,h,bz,b,bd);break;
case 110:shentou2y(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 111:shentou2x(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 112:shentou2z(xx,yy,zz,stre,b,bd,getTile(xx,yy,zz),getData(xx,yy,zz));break;
case 201:tree1(x,y,z,b,bd);break;
case 202:tree2(x,y,z,b,bd);break;
case 203:tree3(x,y,z,b,bd);break;
case 204:tree4(x,y,z,b,bd);break;
case 205:tree5(x,y,z,b,bd);break; 
case 301:caves(x,y,z,cave);break; 
case 302:qiuling(x,y,z,r,h);break; 
}
crd=null
print2("放置")
}}

function ycircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i,y,z+j,b,bd)
}}}

function xcircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x,y+i,z+j,b,bd)
}}}

function zcircle(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i,y+j,z,b,bd)
}}}

function yround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x+i,y,z+j,b,bd)
}}}

function xround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x,y+i,z+j,b,bd)
}}}

function zround(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r)settile(x+i,y+j,z,b,bd)
}}} 


function unsphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i,y+k,z+j,b,bd)
}}}}


function halfsphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=0;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i,y+k,z+j,b,bd)
}}}}

function tuosphere(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,b,c)
a=a/r
b=b/r
c=c/r////
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r&&i*i+j*j+k*k>=(r-1)*(r-1))settile(x+i*a,y+k*b,z+j*c,ib,bd)
}}}}

function tuospherey(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,c)
a=a/r
c=c/r////
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1))settile(x+i*a,y,z+j*c,ib,bd)
}}}

function tuospherex(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(b,c)
b=b/r
c=c/r////
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(j*j+k*k<r*r&&+j*j+k*k>=(r-1)*(r-1))settile(x,y+k*b,z+j*c,ib,bd)
}}}


function tuospherez(x,y,z,ib,bd){
var a=cubt[0],b=cubt[1],c=cubt[2]
var r=Math.max(a,b)
a=a/r
b=b/r
for(var i=-r;i<=r;i++){
for(var k=-r;k<=r;k++){
if(i*i+k*k<r*r&&i*i+k*k>=(r-1)*(r-1))settile(x+i*a,y+k*b,z,ib,bd)
}}}



function sphere(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r)settile(x+i,y+k,z+j,b,bd)
}}}
}


//长方体实
function cuboid1(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){ 
settile(n1+x,n2+y,n3+z,i,id)
}}}
}
//长方体空
function cuboid2(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){ 
settile(n1+x,y1,n3+z,i,id) 
settile(n1+x,y2,n3+z,i,id)}}
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){ 
settile(n1+x,n2+y,z2,i,id) 
settile(n1+x,n2+y,z1,i,id)}}
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){ 
settile(x1,n2+y,n3+z,i,id) 
settile(x2,n2+y,n3+z,i,id)}}
} 

//长方体实框架
function cuboid3(i,id){
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2] 
var n1=Math.min(x1,x2)
var n2=Math.min(y1,y2)
var n3=Math.min(z1,z2)
for(var x=0;x<=Math.max(x1,x2)-Math.min(x1,x2);x++){
settile(n1+x,y1,z1,i,id) 
settile(n1+x,y1,z2,i,id)  
settile(n1+x,y2,z1,i,id)  
settile(n1+x,y2,z2,i,id)  
}
for(var y=0;y<=Math.max(y1,y2)-Math.min(y1,y2);y++){
settile(x1,n2+y,z1,i,id)  
settile(x1,n2+y,z2,i,id)   
settile(x2,n2+y,z1,i,id)   
settile(x2,n2+y,z2,i,id)   
}
for(var z=0;z<=Math.max(z1,z2)-Math.min(z1,z2);z++){
settile(x1,y1,n3+z,i,id)   
settile(x1,y2,n3+z,i,id)    
settile(x2,y1,n3+z,i,id)    
settile(x2,y2,n3+z,i,id)
}
} 




function yuanzhuy(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+i,y+m,z+j,b,bd)}
}}}
}


function yuanzhux(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+m,y+i,z+j,b,bd)}
}}}
}


function yuanzhuz(x,y,z,r,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
for(var m=h;m>=0;m--){settile(x+i,y+j,z+m,b,bd)}
}}}
}

function yuanzhui(x,y,z,r,b,bd){
for(var m=h;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=r/h*m
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+h-m,z+j,b,bd)
}}}
for(var m=r;m>0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=h/r*m
if(i*i+j*j<=(r-m)*(r-m)&&i*i+j*j>=((r-m)-1)*((r-m)-1))settile(x+i,y+u,z+j,b,bd)
}}}
}


function yuantai(x,y,z,r,b,bd){
var hs=h*Math.max(r,sbr)/(Math.max(r,sbr)-Math.min(r,sbr))
////

if(r>sbr){
for(var m=hs;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=r/hs*m
if(u>=sbr){
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+hs-m,z+j,b,bd)
}}}}
for(var m=r;m>=0;m--){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
var u=hs/r*m
if(u<h){
if(i*i+j*j<=(r-m)*(r-m)&&i*i+j*j>=((r-m)-1)*((r-m)-1))settile(x+i,y+u,z+j,b,bd)
}}}}
}
else if(r<sbr){
var rs=sbr
var sbrs=r
for(var m=hs;m>=0;m--){
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
var u=rs/hs*m
if(u>=sbrs){
if(i*i+j*j<=u*u&&i*i+j*j>=(u-1)*(u-1))settile(x+i,y+h-(hs-m),z+j,b,bd)
}}}}
for(var m=rs;m>=0;m--){
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
var u=hs/rs*m
if(u<h){
if(i*i+j*j<(rs-m)*(rs-m)&&i*i+j*j>=((rs-m)-1)*((rs-m)-1))settile(x+i,y+h-u,z+j,b,bd)
}}}}
}
else if(r==sbr){yuanzhu(x,y,z,r,b,bd)}
}


function jinzita(x,y,z,h,r,id,bd){
var l=Math.max(h,r)
for(var j=0;j<l;j++){
var b=Math.floor(j/l*(r)),a=Math.round(j/l*(h))
for(var e=-b;e<=b;e++){
settile(x+e,y+h-a-1,z-b,id,bd)
settile(x+e,y+h-a-1,z+b,id,bd)
settile(x-b,y+h-a-1,z+e,id,bd)
settile(x+b,y+h-a-1,z+e,id,bd)
}
}
}







function manshe(x,y,z,l,b,bd){

for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
if(i*i+j*j+k*k<r*r)
var m=getTile(x+i,y+k,z+j)
var n=getData(x+i,y+k,z+j)
if(m!=0){
settile(x+i,y+k,z+j,0)
settile(x+i-l+2*l*Math.random(),y+k-l+2*l*Math.random(),z+j-l+2*l*Math.random(),m,n)
}
}}}
}






function tiankeng(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(5)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)tiankeng(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)tiankeng(x+1,y,z,l-random,id,bd);break; 
case 2:
if(getTile(x,y,z-1)==0)tiankeng(x,y,z-1,l-random,id,bd);break;
case 3:
if(getTile(x,y,z+1)==0)tiankeng(x,y,z+1,l-random,id,bd);break;
case 4:
if(getTile(x,y-1,z)==0&&y>0)tiankeng(x,y-1,z,l-random,id,bd);break;
case 5:x+=1;break;
 }
}
}}



function shanmai(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)shanmai(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)shanmai(x+1,y,z,l-random,id,bd);break; 
case 2:
if(getTile(x,y,z-1)==0)shanmai(x,y,z-1,l-random,id,bd);break;
case 3:
if(getTile(x,y,z+1)==0)shanmai(x,y,z+1,l-random,id,bd);break;
case 4:
if(getTile(x,y+1,z)==0&&y<128)shanmai(x,y+1,z,l-random,id,bd);break;
case 5:
if(getTile(x,y-1,z)==0&&y>0)shanmai(x,y-1,z,l-random,id,bd);break;
 }
}
}}



function yanchangy(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x,y+m,z)!=0)break;
settile(x,y+m,z,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x,y-m,z)!=0)break;
settile(x,y-m,z,id,bd)}
}
function yanchangx(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x+m,y,z)!=0)break;
settile(x+m,y,z,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x-m,y,z)!=0)break;
settile(x-m,y,z,id,bd)}
}
function yanchangz(x,y,z,l,id,bd){
l=l*10
settile(x,y,z,id,bd)
for(var m=1;m<l;m++){
if(getTile(x,y,z+m)!=0)break;
settile(x,y,z+m,id,bd)}
for(var m=1;m<l;m++){
if(getTile(x,y,z-m)!=0)break;
settile(x,y,z-m,id,bd)}
}



function ranz(a){
var n=[]
var j=0
for(var m=0;m<a;m++){n.push(Math.random()-1)}
var q
for(var m=0;m<a;m++){
for(q in n){
var min=Math.min.apply(Math,n)
if(n[q]==min){n[q]=j;j++;break}
}}
return n
}


function shentou(x,y,z,l,id,bd){
var o=getTile(x,y,z)
if(o!=0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x-1,y,z,l-Math.random(),id,bd);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x+1,y,z,l-Math.random(),id,bd);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y-1,z,l-Math.random(),id,bd);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y+1,z,l-Math.random(),id,bd);break;
case 4:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y,z-1,l-Math.random(),id,bd);break;
case 5:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&n!=95&&(n!=id||m!=bd))shentou(x,y,z+1,l-Math.random(),id,bd);break;
}}
}}

function shentou2(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(6)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y+1,z,l-Math.random(),id,bd,f,g);break;
case 4:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 5:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}


function shentou2y(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2y(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2y(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2y(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2y(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}

function shentou2x(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y+1,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y,z-1)
m=getData(x,y,z-1)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y,z-1,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y,z+1)
m=getData(x,y,z+1)
if(n!=0&&(n!=id||m!=bd))shentou2x(x,y,z+1,l-Math.random(),id,bd,f,g);break;
}}
}}
}


function shentou2z(x,y,z,l,id,bd,f,g){
if(getTile(x,y,z)==f){settile(x,y,z,id,bd)
if(l>=0){var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
var n,m
switch(mz[sss]) {
case 0:
n=getTile(x-1,y,z)
m=getData(x-1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x-1,y,z,l-Math.random(),id,bd,f,g);break;
case 1:
n=getTile(x+1,y,z)
m=getData(x+1,y,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x+1,y,z,l-Math.random(),id,bd,f,g);break;
case 2:
n=getTile(x,y-1,z)
m=getData(x,y-1,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x,y-1,z,l-Math.random(),id,bd,f,g);break;
case 3:
n=getTile(x,y+1,z)
m=getData(x,y+1,z)
if(n!=0&&(n!=id||m!=bd))shentou2z(x,y+1,z,l-Math.random(),id,bd,f,g);break;
}}
}}
}



function tuoyuan(is,ids)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var a=(x1+x2)*0.5,b=(y1+y2)*0.5,c=(z1+z2)*0.5
var q=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var rs=q*0.5+r
for(var i=-rs;i<=rs;i++){
for(var j=-rs;j<=rs;j++){
for(var k=-rs;k<=rs;k++){
var g=Math.sqrt((x1-a-i-0.5)*(x1-a-i-0.5)+(y1-b-j-0.5)*(y1-b-j-0.5)+(z1-c-k-0.5)*(z1-c-k-0.5))+Math.sqrt((x2-a-i-0.5)*(x2-a-i-0.5)+(y2-b-j-0.5)*(y2-b-j-0.5)+(z2-c-k-0.5)*(z2-c-k-0.5))
if(g<q+r+0.9&&g>q+r-0.9)settile(a+i,b+j,c+k,is,ids)
}}}
}


function tiankengx(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x,y,z-1)==0)tiankengx(x,y,z-1,l-random,id,bd);break;
case 1:
if(getTile(x,y,z+1)==0)tiankengx(x,y,z+1,l-random,id,bd);break;
case 2:
if(getTile(x,y+1,z)==0&&y<255)tiankengx(x,y+1,z,l-random,id,bd);break;
case 3:
if(getTile(x,y-1,z)==0&&y>0)tiankengx(x,y-1,z,l-random,id,bd);break;
}}}}

function tiankengz(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x-1,y,z)==0)tiankengz(x-1,y,z,l-random,id,bd);break;
case 1:
if(getTile(x+1,y,z)==0)tiankengz(x+1,y,z,l-random,id,bd);break;
case 2:
if(getTile(x,y+1,z)==0&&y<255)tiankengz(x,y+1,z,l-random,id,bd);break;
case 3:
if(getTile(x,y-1,z)==0&&y>0)tiankengz(x,y-1,z,l-random,id,bd);break;
}}}}

function tiankengy(x,y,z,l,id,bd){
if(getTile(x,y,z)==0)settile(x,y,z,id,bd)
if(l>=0){
var sss
var random=Math.random()
var mz=ranz(4)
for(sss in mz){
switch(mz[sss]) {
case 0:
if(getTile(x,y,z-1)==0)tiankengy(x,y,z-1,l-random,id,bd);break;
case 1:
if(getTile(x,y,z+1)==0)tiankengy(x,y,z+1,l-random,id,bd);break;
case 2:
if(getTile(x+1,y,z)==0)tiankengy(x+1,y,z,l-random,id,bd);break;
case 3:
if(getTile(x-1,y,z)==0)tiankengy(x-1,y,z,l-random,id,bd);break;
}}}}


function dbxy(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x+xm,y,z+zm]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x+xm,y,z+zm]
lianxian(s1,s2,i,id)
s1=s2
}}

function dbxx(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x,y+xm,z+zm]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x,y+xm,z+zm]
lianxian(s1,s2,i,id)
s1=s2
}}

function dbxz(x,y,z,r,h,bz,i,id)
{
var a=((bz)%360)*Math.PI/180
////
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s1=[x+zm,y+xm,z]
for(var yaw=0;yaw<=360;yaw=yaw+360/h){
var a=((yaw+bz)%360)*Math.PI/180
zm=Math.round(-Math.sin(a)*r)
xm=Math.round(Math.cos(a)*r)
var s2=[x+zm,y+xm,z]
lianxian(s1,s2,i,id)
s1=s2
}}


function replaces(aa,ba,ca,ab,bb,cb)
{
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
var v
var f=replaceids.split(" ");
var w=replaceid.split(" ");
for(v in w){
var o=w[v]
if(o>=0){
if(f>=0){if(o==k){
settile(n1+x,n2+y,n3+z,f)
}}
else{f=f[0].split(":");if(o==k){settile(n1+x,n2+y,n3+z,f[0],f[1])}}}
else{o=o.split(":");if(o[0]==k&&o[1]==e){if(f>=0){
if(f>=0){settile(n1+x,n2+y,n3+z,f)}}
else{f=f[0].split(":");if(o[0]==k&&o[1]==e){
settile(n1+x,n2+y,n3+z,f[0],f[1])}}}
}
}
}}}
print2("替换完成")
}



function replaces2(aa,ba,ca,ab,bb,cb)
{
var p=parseInt
var set
if(replaceidset>=0){set=[replaceidset,0]}else{set=replaceidset.split(":")}
var xyz1=repxyz[0]
var xyz2=repxyz[1]
var n1=Math.min(aa,ab)
var n2=Math.min(ba,bb)
var n3=Math.min(ca,cb)
for(var x=0;x<=Math.max(aa,ab)-Math.min(aa,ab);x++){
for(var y=0;y<=Math.max(ba,bb)-Math.min(ba,bb);y++){
for(var z=0;z<=Math.max(ca,cb)-Math.min(ca,cb);z++){
var k=getTile(n1+x,n2+y,n3+z)
var e=Level.getData(n1+x,n2+y,n3+z)
var k1=getTile(n1+x+xyz1[0],n2+y+xyz1[1],n3+z+xyz1[2])
var e1=Level.getData(n1+x+xyz1[0],n2+y+xyz1[1],n3+z+xyz1[2])
var v
var m
var fx=replaceids.split(" ");
var w=replaceid.split(" ");
for(v in w){
var o=w[v]
if(o>=0){
if(o==k){
for(m in fx){
var f=fx[m]
if(f>=0){if(f==k1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
else{f=f.split(":");if(f[0]==k1&&f[1]==e1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
}}}
else{o=o.split(":");if(o[0]==k&&o[1]==e){
for(m in fx){
var f=fx[m]
if(f>=0){if(f==k1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
else{f=f.split(":");if(f[0]==k1&&f[1]==e1){
settile(n1+x+xyz2[0],n2+y+xyz2[1],n3+z+xyz2[2],set[0],set[1])}}
}}
}}
}}}
print2("替换完成")
}







var he=0
var ptk=0
var pte=0
var ptt=0
var pts=0
function cpt()
{
ptt++
if(ptt%10==1){
var w=replaceid.split(" ");
if(he<w.length){
var v
var o=w[he]
if(o>=0){if(o>0){ptk=o;pte=0}else{ptk=0;pte=0}}
else if(o!=null){o=o.split(":");
if(o[0]>0){ptk=o[1];ptk=o[1]}else{ptk=0;pte=0}}}
else{ptk=0;pte=0}


print2((pts+he*4+1)+"/"+(128*4-h*4+4))
if(pts==0){
for(var x=0;x<=128;x++){
for(var y=0;y<=128;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==1){
for(var x=0;x<=128;x++){
for(var y=129;y<=255;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==2){
for(var x=129;x<=255;x++){
for(var y=0;y<=128;y++){
settile(x,h+he,y,ptk,pte)
}}}
if(pts==3){
for(var x=129;x<=255;x++){
for(var y=129;y<=255;y++){
settile(x,h+he,y,ptk,pte)
}}}
pts++
if(pts==4){
he++
pts=0
}
if(he+h>128){
pt=false
he=0
if(h<64){
for(var x=-3;x<=3;x++){
for(var y=-3;y<=3;y++){
settile(128+x,64,128+y,7)
}}}}

}
}

function ycircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//ycircle(x,y+i,z,h+j,b,bd)
if(h-j>=0)ycircle(x,y+i,z,h-j,b,bd)
}
}}}

function xcircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//xcircle(x+i,y,z,h+j,b,bd)
if(h-j>=0)xcircle(x+i,y,z,h-j,b,bd)
}
}}}

function zcircleround(x,y,z,r,h,b,bd){
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
if(i*i+j*j<r*r&&i*i+j*j>=(r-1)*(r-1)){
//zcircle(x,y,z+i,h+j,b,bd)
if(h-j>=0)zcircle(x,y,z+i,h-j,b,bd)
}
}}}


function noj1(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
settile(Math.round(x1+i),Math.round(y1+j),Math.round(z1+k),b1,bd)
}}}}}}

function noj2(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q-1&&qs<q+1){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],s1,b1,bd)
}}}}}}

function noj3(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],[Math.round(x2+i),Math.round(y2+j),Math.round(z2+k)],b1,bd)
}}}}}}


function noj4(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)/l*4*r
var y=(y1-y2)/l*4*r
var z=(z1-z2)/l*4*r
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r&&ms>=(r-1)*(r-1)){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+2){
lianxian([Math.round(x1+i),Math.round(y1+j),Math.round(z1+k)],s2,b1,bd)
}}}}}}


function noj5(s1,s2,r,b1,bd)
{
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
//var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var x=(x1-x2)
var y=(y1-y2)
var z=(z1-z2)
////
var q=Math.sqrt(x*x+y*y+z*z+r*r)
for(var i=-r;i<=r;i++){
for(var j=-r;j<=r;j++){
for(var k=-r;k<=r;k++){
var ms=i*i+j*j+k*k
if(ms<r*r){
var qs=Math.sqrt((x+i)*(x+i)+(y+j)*(y+j)+(z+k)*(z+k))
if(qs>q&&qs<q+1.5){
settile(Math.round(x1+i),Math.round(y1+j),Math.round(z1+k),b1,bd)
}}}}}}


function noj6(s1,s2,r,h,b1,bd)
{//r小h大
h=parseInt(h)
r=parseInt(r)
var sa=s1,sb=s2 
var x1=sa[0],y1=sa[1],z1=sa[2]
var x2=sb[0],y2=sb[1],z2=sb[2]
var l=Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2)+(z1-z2)*(z1-z2))
var a=(x1-x2)/l*4*r
var b=(y1-y2)/l*4*r
var c=(z1-z2)/l*4*r
for(var w=-r;w<=r;w=w+0.5){
//var u=Math.sqrt(r*r-w*w)
var e=1
if(w<0)e=-1
var d=Math.sqrt(r*r-w*w)
var x=-(x1-x2)/l*d*e
var y=-(y1-y2)/l*d*e
var z=-(z1-z2)/l*d*e
if(r-w==0){x=0;y=0;z=0}
noj1([x1+x,y1+y,z1+z],s2,h+w,b1,bd)
if(h-w>=0)noj1([x1+x,y1+y,z1+z],s2,h-w,b1,bd)
}}





function intopit()
{
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
add.setText("确认选择图片");

var t=new android.widget.TextView(ctx);
t.setText("欢迎使用！全部输入完毕后点击<开始＞按钮开始生储存到复制粘贴。由于羊毛色彩限制，所以色差较大，且无法智能解决，所以您可以在生成后用替换和相同方块渗透修改润色！啦啦菌的算法，6g3y改进");
tmiLayout.addView(t);

var t=new android.widget.TextView(ctx);
t.setText("请输入图片路径，如:/sdcard/1.png");
tmiLayout.addView(t);

id.setHint("输入路径");
id.setHint("请输入图片路径，如:/sdcard/1.png");
id.setText("/sdcard/*.png")

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);

tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("请输入图片地址");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
var h=id.getText()
try{
var bitmap= android.graphics.BitmapFactory.decodeFile(h);
var h=bitmap.getHeight();
var w=bitmap.getWidth();
intopit2(bitmap,h,w)
}catch(err){
  clientMessage("错误: 图片路径(格式)错误，请核对图片格式以及路径(png/jpg格式)")
}
tmiDialog.dismiss()
}});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function intopit2(bitmap,h,w)
{
ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
var sv=new android.widget.ScrollView(ctx);
//layout
var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1);
//说明
var ts=new android.widget.TextView(ctx);
ts.setText("个人建议，范围在500*500之内\n输入该图片起始点，结束点\n说明 NUM>0 AND NUM<=max\n高度:"+h+"    宽度:"+w+"\n起始点为图片右上角，结束点为图片右下角\n请输入图片路径，如:/sdcard/1.png\n输入将会储存到复制粘贴\n注意:图片复制格式，y增，z增方向，从x+到x-看正面");

var l=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("缩小倍数(整数):");
l.addView(t);
var ip = new android.widget.EditText(ctx);
ip.setHint("输入倍数");
ip.setText("1")
l.addView(ip);

var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否RGB模式生成\(选择为RGB，不选为HSV，ps:RGB更科学,HSV更流畅，但色差都大！)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});
var ms2=false
var cd=new android.widget.CheckBox(ctx);
cd.setText("是否RGB2标准模式生成(RBG勾选了这个就没有用)\(选择为RGB2，不选为HSV，RBG，ps:RGB系列更卡更科学,HSV更流畅，但色差都大！)");
cd.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms2=true;else ms2=false;
				}
		});

var la=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("起始点(高):");
la.addView(t);
var id = new android.widget.EditText(ctx);
id.setHint("输入起始点");
id.setText("1")
la.addView(id);
var lb=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("起始点(宽):");
lb.addView(t);
var id2 = new android.widget.EditText(ctx);
id2.setHint("输入起始点");
id2.setText("1")
lb.addView(id2);
var lc=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("结束点(高):");
lc.addView(t);
var id3 = new android.widget.EditText(ctx);
id3.setHint("输入结束点");
id3.setText(String(h))
lc.addView(id3);
var ld=new android.widget.LinearLayout(ctx)
var t=new android.widget.TextView(ctx);
t.setText("结束点(宽):");
ld.addView(t);
var id4 = new android.widget.EditText(ctx);
id4.setHint("输入起始高度");
id4.setText(String(w))
ld.addView(id4);




//scrollviewparams
var svp=new android.view.ViewGroup.LayoutParams(-2,-2);
layout.addView(ts,svp);
layout.addView(l,svp);
layout.addView(cr,svp);
layout.addView(cd,svp);
layout.addView(la,svp);
layout.addView(lb,svp);
layout.addView(lc,svp);
layout.addView(ld,svp);

sv.addView(layout);
var dialog = new android.app.AlertDialog.Builder(ctx)
    .setView(sv)
		.setTitle("像素图储存")
		.setNegativeButton("开始", new android.content.DialogInterface.OnClickListener() { 
onClick:function(dialog,which) {
var h1=parseInt(id.getText())-1
var w1=parseInt(id2.getText())-1
var h2=parseInt(id3.getText())
var w2=parseInt(id4.getText())
var b=Math.floor(parseInt(ip.getText()))
if(b<1)b=1
pictures=[true,bitmap,ms,h1,w1,h2,w2,b,ms2]
//clientMessage(bitmap+","+ms+","+h1+","+w1+","+h2+","+w2);
}}).setPositiveButton("取消",null).create(); 
    dialog.setCanceledOnTouchOutside(false);
		dialog.show();
		}catch(err){
			print2("打开菜单失败。原因: "+err+".");
		}
	}}));
}

var pictures=[false]





function picture(bitmap,rgb,h1,w1,h2,w2,ub,usb)
{
var sa=[]
var sb=[]
var sc=[]
for(var js=0;js<h2-h1;js=js+ub){sc=[]
for(var jb=0;jb<w2-w1;jb=jb+ub){
	var color=bitmap.getPixel(jb+w1,js+h1);
		 if(rgb==false&&usb==true)
  {
  var r=android.graphics.Color.red(color),
	g=android.graphics.Color.green(color),
	b=android.graphics.Color.blue(color);
  var cgy=gyrgb(r,g,b)
  var id=cgy[0]
  var jg=cgy[1]
  }
  else if(rgb==false)
  {
		var he=gethsv(color);
    var jg=jiance(he[0],he[1],he[2]);
    var id=35;
  }
  else if(rgb)
  {
  var r=android.graphics.Color.red(color),
	g=android.graphics.Color.green(color),
	b=android.graphics.Color.blue(color);
		var temp=jiancergb(r,g,b);
    var jg=0,id;
    if(temp<=15) {jg=temp;id=35;}
    else
    {
       switch(temp)
       {
         case 16:id=1;break;
         case 17:id=3;break;
       }
    }
  }
  
		if(android.graphics.Color.alpha(color)<=20)
		{
      //settile(js-1,h2-h1-jb-1,1,0);
      sc.unshift([0,0])
		}
		else
    {
      //settile(js-1,h2-h1-jb-1,1,id,jg);
      sc.unshift([id,jg])
    }
}
sb.unshift(sc)
}
sa.push(sb)
biockgroup[copytime]=sa
pictures=[false]
print2("已输入复制粘贴")
}


function jiance(h,s,v)
{if(h>80&&h<=160){
if(s>0.1&&0.2<v&&v<=0.55)return 13;
else		return 5;}
if(s<=0.1&&v>0.85){return 0;}
if(s<=0.1&&v>0.65&&v<=0.85){	return 8;}
	if(v<=0.3)	{		return 15;}
if(s<=0.1&&0.3<v&&v<=0.65){return 7;}
	if(h>20&&h<=50){
if(s>0.1&&0.3<v&&v<=0.55)return 12;
else return 1;}
if(h>280&&h<=300)	{	return 2;}
if(h>200&&h<=220){	return 3;}
	if(h>50&&h<=80)	{
if(s>0.1&&0.3<v&&v<=0.5) return 12;
else	return 4;}
if(h>300&&h<=340){		return 6;	}
	if(h>160&&h<=190)	{		return 9;	}
	if(h>260&&h<=280)	{		return 10;	}
	if(h>190&&h<=260)	{		return 11;	}
	if((h>340&&h<=360)||(h>=0&&h<=20)){
 if(0.1<=s&&s<=0.5&&v>=0.75) return 6;
else	return 14;}
	else{		return 15;	}
}


function gethsv(ys){
var r=android.graphics.Color.red(ys)/255,
	g=android.graphics.Color.green(ys)/255,
	b=android.graphics.Color.blue(ys)/255;
var h, s, v;
var min, max, delta;
min = Math.min(Math.min(r, g), b);
max = Math.max(Math.max(r, g), b);
v = max;
delta = max - min;
if( max != 0 ) 
	s = delta / max; 
else 
{ 
s = 0; 
h = -1; 
	return [h,s,v];
}
// H 
if(max==min)
	h=0;
if(max==r&&g>=b)
	h=60*(g-b)/delta;
if(max==r&&g<b)
	h=60*(g-b)/delta+360;
if(max==g)
	h=60*(b-r)/delta+120;
if(max==b)
	h=60*(r-g)/delta+240;
return [h,s,v]; 
}

var red=new Array(209,232,188,89,182,55,213,63,148,37,122, 36,81,52,155,23, 127,121,188,220,255)
var blue=new Array(209,46,199,208,24,44,144,63,157,140,188, 145,26,23,38,19, 127,58,98,162,68);
var green=new Array(209,121,62,128,169,179,118,63,157,109,47, 48,48,72,42,19, 127,85,152,211,241)

function jiancergb(R,G,B)
{
   var minrgb=Math.sqrt(Math.pow(R-209,2)+ Math.pow(G-209,2)+ Math.pow(B-209,2));
   var minjs;//相近颜色对应js
   for(var forjs=0;forjs<18;forjs++)
   {
     var tempr,tempg,tempb,temprgb;
     temprgb=Math.sqrt(Math.pow(R-red[forjs],2)+ Math.pow(G-green[forjs],2)+ Math.pow(B-blue[forjs],2));
     if(temprgb<=minrgb)
     {
       minjs=forjs;
       minrgb=temprgb;
     }
   }
   return minjs;
}

var color=[
[35,0,217,218,219],
[35,8,160,160,160],
[35,7,62,62,62],
[35,15,15,15,15],
[35,12,72,44,27],
[35,14,150,50,45],
[35,1,220,121,56],
[35,4,184,170,40],
[35,5,67,175,55],
[35,13,48,26,24],
[35,9,41,108,134],
[35,3,114,144,205],
[35,11,44,60,145],
[35,10,123,56,179],
[35,6,203,117,143],
[41,0,255,244,67],
[57,0,132,229,224],
[24,2,230,217,164],
[3,0,124,85,57],
[5,1,89,66,38],
[5,0,153,124,74],
[5,2,209,187,128],
[5,3,184,131,93],
[49,0,39,33,59],
[82,0,156,163,175],
[155,0,242,237,236],
[5,4,175,90,50],
[133,0,68,217,103],
[172,0,151,89,61],
[159,0,210,177,165],
[159,1,165,82,33],
[159,2,156,87,112],
[159,3,115,106,133],
[159,4,198,135,33],
[159,5,104,116,50],
[159,6,161,77,74],
[159,7,57,43,33],
[159,8,137,108,99],
[159,9,90,90,90],
[159,10,115,67,85],
[159,11,73,58,89],
[159,12,70,47,33],
[159,13,71,77,37],
[159,14,131,53,41],
[159,15,24,15,8]
]
var rbgblock=[],blr=[],blb=[],blg=[]
for (var m in color){
rbgblock[m]=[color[m][0],color[m][1]]
blr[m]=color[m][2]
blg[m]=color[m][3]
blb[m]=color[m][4]
}/*
var rbgblock=[[35,0],[35,8],[35,7],[35,15],[35,12],[35,14],[35,1],[35,4],[35,5],[35,13],[35,9],[35,3],[35,11],[35,10],[35,6],[41,0],[42,0],[57,0],[24,2],[3,0],[5,1],[5,0],[5,2],[5,3],[112,0],[49,0],[82,0],[155,0],[87,0],[1,2],[5,4],[133,0],[87,0],[172,0],[159,0],[159,1],[159,2],[159,3],[159,4],[159,5],[159,6],[159,7],[159,8],[159,9],[159,10],[159,11],[159,12],[159,13],[159,14],[159,15]]//121,85,58
var blr=[220,180,60,0,80,255,200,220,90,60,60,125,60,140,220,255,230,140,190,140,120,160,180,180,25,0,160,255,100,150,190,0,180,160,210,180,155,130,190,120,155,80,120,140,160,100,100,100,230,30]
var blb=[220,180,60,0,60,0,140,200,170,80,120,0,60,80,160,255,230,190,190,100,85,140,160,140,25,0,160,255,0,0,40,0,180,60,140,0,135,255,35,35,95,0,0,10,90,90,0,0,0,0]
var blg=[220,180,60,0,45,0,55,40,65,5,145,205,125,165,185,0,230,255,150,10,58,65,125,85,25,65,145,255,0,120,120,255,180,120,180,100,100,130,135,160,100,60,140,80,80,80,60,100,90,0]


//print(rbgblock[20]+","+blr[20]+","+blb[20]+","+blg[20])

var rbgl=[]
addu()
function addu(){
var usde
var l=[1]
for(usde in blr){
l[usde]=gyrgb2(blr[usde],blg[usde],blb[usde])/2}
rbgl=l
/*var min=Math.min.apply(Math,l)
var q=0
for(usde in l){
q+=l[usde]
}
q=q/l.length////
//print(min+","+q)
}
function gyrgb2(R,G,B)
{
   var l=new Array()
   var fx
for(fx in rbgblock){
   var m=((R-blr[fx])*(R-blr[fx])+(G-blg[fx])*(G-blg[fx])+(B-blb[fx])*(B-blb[fx]))
   if(m>0){l[fx]=m}else{l[fx]=255}
}
  return Math.min.apply(Math,l)
}
//print2(rbgblock.length +";"+blr.length +";"+blg.length+";"+blb.length)
var rbgused=[0,0,0,-1,[]]
function gyrgb(R,G,B)
{
if(rbgused[3]>((R-rbgused[0])*(R-rbgused[0])+ (G-rbgused[1])*(G-rbgused[1])+ (B-rbgused[2])*(B-rbgused[2]))){
return rbgused[4]
}
   var l=new Array()
   var fx
for(fx in rbgblock){
   l[fx]=((R-blr[fx])*(R-blr[fx])+ (G-blg[fx])*(G-blg[fx])+ (B-blb[fx])*(B-blb[fx]))
}
  var min=Math.min.apply(Math,l)
  var fd
for(fd in l){
if(l[fd]==min){
rbgused=[blr[fd],blg[fd],blb[fd],rbgl[fd],rbgblock[fd]]
return rbgblock[fd];
break}
}
}

var shuangjitime=0
function shuangjis(a,b)
{
if(shuangjitime==1){
Entity.setCarriedItem(getplayerent(), a, 1, b);
print2("已经获取方块")
}
else{
shuangjitime=1
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
new android.os.Handler().postDelayed(new java.lang.Runnable(
{
run: function() 
{
shuangjitime=0
}}),300);
}}))}
}


function xiacui(x,y,z,l,id,bd){
for(var m=1;m<l;m++){
var n=getTile(x,y-m,z)
if(n==0||n==18){settile(x,y-m,z,id,bd)}else{break;}
}
}

function caves(x,y,z,cave,tt){
var ls=cave[1]
var cv=cave[2]
var lofs=ls/cave[2]
var ls2=lofs
var yaw=cave[0]
if(cave[0]>=0||cave[0]<0){}else{yaw=Math.random()*7200}
var pitch=-45
var pi=Math.PI/180//// 
var s1=[x,y,z]
var s2=[x,y,z]
var i=-10+Math.random()*20
for(var u=0;u<=ls;u+=i){
if(pitch>12)pitch=-45 
pitch+=5+Math.random()*5  
if(tt)pitch=Math.random()*5
s2[0] =s1[0]-Math.sin(yaw*pi)*i*Math.cos(pitch*pi)
s2[1] =s1[1]+Math.sin(pitch*pi)*i
s2[2] =s1[2]+Math.cos(yaw*pi)*i*Math.cos(pitch*pi)
if(s2[1]<10){s2[1]=10+10*Math.random()}
if(u>lofs){
cv--
if(cave[3][1]==false)cv=0
lofs+=ls2
caves(x,y,z,[yaw+90*(Math.round(Math.random())*2-1),ls-u,cv,[false,cave[3][1],cave[3][2]],0])}
yaw=yaw+90-180*Math.random()
i=5+Math.random()*5  
var x=s1[0],y=s1[1],z=s1[2],x2=s2[0],y2=s2[1],z2=s2[2]
var l=Math.max(Math.abs(x-x2),Math.abs(y-y2),Math.abs(z-z2))
for(var m=0;m<=l;m++){
var v=getTile(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)))
if(v!=0&&v!=95)fdx(Math.round(x+m/l*(x2-x)),Math.round(y+m/l*(y2-y)),Math.round(z+m/l*(z2-z)))}////
s1=[s2[0],s2[1],s2[2]]
}
if(cave[3][0]){
var l=cave[4]
var x=s2[0]
var y=s2[1]
var z=s2[2]
for(var i=-l;i<=l;i+=2){
for(var j=-l;j<=l;j+=2){
if(i*i+j*j<=Math.pow(l-0.3*l*Math.random(),2)){
if(getTile(x+i,y-1,z+j)!=0){fdx(x+i,y-1+2*Math.random(),z+j)}}
if(i*i+j*j<=Math.pow(l-0.5*l*Math.random(),2)){
if(getTile(x+i,y+3,z+j)!=0){fdx(x+i,y+3+2*Math.random(),z+j)}}
}}
if(getTile(s2[0],s2[1]-4,s2[2])!=0&&cave[3][2]&&Math.random()>0.5)tiankengy(s2[0],s2[1],s2[2],l*0.6,11,0);
}
else if(cave[3][2]){
if(pitch<-10&&pitch>-45&&getTile(s2[0],s2[1]-3,s2[2])!=0)tiankengy(s2[0],s2[1],s2[2],l/2,11,0);////
}
}



function tree1(x,y,z,b,bd)
{
if(b==17){
var l=15+Math.random()*20
yanchangy(x,y,z,l*0.1,17,bd);
yanchangy(x+1,y,z,l*0.1,17,bd);
yanchangy(x+1,y,z+1,l*0.1,17,bd);
yanchangy(x,y,z+1,l*0.1,17,bd);
shanmai(x,y+l,z,4,18,bd%4);
shanmai(x+1,y+l,z+1,4,18,bd%4);
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,18,bd%4)
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,18,bd%4)
}
if(b==162){
var l=15+Math.random()*20
yanchangy(x,y,z,l*0.1,162,bd);
yanchangy(x+1,y,z,l*0.1,162,bd);
yanchangy(x+1,y,z+1,l*0.1,162,bd);
yanchangy(x,y,z+1,l*0.1,162,bd);
shanmai(x,y+l,z,4,161,bd%4);
shanmai(x+1,y+l,z+1,4,161,bd%4);
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,161,bd%4)
xiacui(x-4.5+Math.random()*7,y+l,z-4.5+Math.random()*7,Math.random()*l*2,161,bd%4)
}}


function tree2(x,y,z,b,bd){
if(b==17){
var pi=Math.PI/180////
var l=5
h=l
yuanzhuy(x,y,z,1,17,12+bd%4)
h=1
yuanzhuy(x,y,z,2,17,12+bd%4)
h=0
yuanzhuy(x,y,z,3,17,12+bd%4)
var s1=[x,y+l,z]
var o=10
for(var m=0;m<16;m++){
var a=Math.cos((Math.random()+m)*22.5*pi)*o
var b=Math.sin(Math.random()*90*pi)*o
var c=Math.sin((Math.random()+m)*22.5*pi)*o
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,18,bd%4);}
for(var m=0;m<8;m++){
var a=Math.cos((Math.random()+m)*45*pi)*o/2
var b=Math.sin(Math.random()*90*pi)*o*1.5
var c=Math.sin((Math.random()+m)*45*pi)*o/2
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,18,bd%4);}}
if(b==162){
var pi=Math.PI/180////
var l=5
h=l
yuanzhuy(x,y,z,1,162,12+bd%4)
h=1
yuanzhuy(x,y,z,2,162,12+bd%4)
h=0
yuanzhuy(x,y,z,3,162,12+bd%4)
var s1=[x,y+l,z]
var o=10
for(var m=0;m<16;m++){
var a=Math.cos((Math.random()+m)*22.5*pi)*o
var b=Math.sin(Math.random()*90*pi)*o
var c=Math.sin((Math.random()+m)*22.5*pi)*o
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,161,bd%4);}
for(var m=0;m<8;m++){
var a=Math.cos((Math.random()+m)*45*pi)*o/2
var b=Math.sin(Math.random()*90*pi)*o*1.5
var c=Math.sin((Math.random()+m)*45*pi)*o/2
var s2=[x+a,y+l+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l+b,z+c,4,161,bd%4);}
}}


function tree3(x,y,z,b,bd){
if(b==17){
var pi=Math.PI/180////
var l=10+Math.random()*10
yanchangy(x,y,z,l*0.12,17,bd);
shanmai(x,y+l*1.2,z,3,18,bd%4);
var o=Math.random()*3+1
for(var m=0;m<o;m++){
var q=Math.random()
var s1=[x,y+l*q*0.5+4,z]
var a=Math.cos(Math.random()*7200*pi)*0.4*l
var b=Math.sin(Math.random()*90*pi)*0.3*l
var c=Math.sin(Math.random()*7200*pi)*0.4*l
var s2=[x+a,y+l*q*0.5+4+b,z+c]
lianxian(s1,s2,17,12+bd%4)
shanmai(x+a,y+l*q*0.5+4+b,z+c,2,18,bd%4);}}
if(b==162){
var pi=Math.PI/180////
var l=10+Math.random()*10
yanchangy(x,y,z,l*0.12,162,bd);
shanmai(x,y+l*1.2,z,3,161,bd%4);
var o=Math.random()*3+1
for(var m=0;m<o;m++){
var q=Math.random()
var s1=[x,y+l*q*0.5+4,z]
var a=Math.cos(Math.random()*7200*pi)*0.4*l
var b=Math.sin(Math.random()*90*pi)*0.3*l
var c=Math.sin(Math.random()*7200*pi)*0.4*l
var s2=[x+a,y+l*q*0.5+4+b,z+c]
lianxian(s1,s2,162,12+bd%4)
shanmai(x+a,y+l*q*0.5+4+b,z+c,2,161,bd%4);
}}}


function tree4(x,y,z,b,bd)
{
if(b==17){
var l=3+Math.random()*3
yanchangy(x,y,z,l*0.1,17,bd);
shanmai(x,y+l,z,2,18,bd%4);}
if(b==162){
var l=3+Math.random()*3
yanchangy(x,y,z,l*0.1,162,bd);
shanmai(x,y+l,z,2,161,bd%4);
}}

function tree5(x,y,z,b,bd)
{
if(b==17){
var l=10+Math.random()*5
yanchangy(x,y,z,l*0.1,17,bd);
shanmai(x,y+l,z,2,18,bd%4);
shanmai(x,y+l*0.65,z,2,18,bd%4); }
if(b==162){
var l=10+Math.random()*5
yanchangy(x,y,z,l*0.1,162,bd);
shanmai(x,y+l,z,2,161,bd%4);
shanmai(x,y+l*0.65,z,2,161,bd%4); 
}} 


function qiuling(x,y,z,r,l)
{
var pi=Math.PI*0.5
l=l*0.7
var a=1.4
var b=4
var c=7
var d=Math.random()*30+20
var a1=Math.random()*300000
var a2=Math.random()*50000000
var a3=Math.random()*8000
for(var m=-r;m<r;m++){
for(var n=-r;n<r;n++){
var ls=(Math.cos(pi*m/r)*Math.cos(pi*n/r))*l-(Math.sin(pi*m*a/r+b)*Math.cos(pi*n*a/r+c))*l*0.25+(Math.cos(pi*m*a*2/r+b*d)+Math.sin(pi*n*a*2/r+c*d))*l*0.2-(Math.sin(pi*m*a*3/r+b*d*2)*Math.sin(pi*n*a*3/r+c*d*2))*l*0.15
if(ls>0)setlongblock(x+m,y,z+n,ls)}}
}
function setlongblock(x,y,z,l){
for(var i=0;i<=l;i++){
if(i>3)settile(x,y+l-i,z,1)
else if(i>0)settile(x,y+l-i,z,3)
else if(i==0)settile(x,y+l,z,2)
}}


function rpg(){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var xv,yv,zv
xv=-Math.sin(a)*Math.cos(b)
yv=-Math.sin(b)
zv=Math.cos(a)*Math.cos(b)
var sn=Level.spawnMob(getPlayerX()+xv*2.1,getPlayerY()+yv*2.1,getPlayerZ()+zv*2.1,81)
setVelX(sn,xv*3)
setVelY(sn,yv*3)
setVelZ(sn,zv*3)
rpgs.unshift(sn)
}





clientMessage=print2



var longgetchick=false
var longgetsave=[0,-1,0,false]
function longget(){var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){

while(longgetchick){
var a=(getYaw()%360)*Math.PI/180
var b=getPitch()*Math.PI/180
var x,y,z
x=-Math.sin(a)*Math.cos(b)
y=-Math.sin(b)
z=Math.cos(a)*Math.cos(b)
var X=Entity.getX(getplayerent()),Y=Entity.getY(getplayerent()),Z=Entity.getZ(getplayerent())
for(var i=0;i<100;i++){
var g=getTile(X+x*i,Y+y*i,Z+z*i)
if(g!=0&&i>0){
if(X+x*(i-1)!=longgetsave[0]&&Y+y*(i-1)!=longgetsave[1]&&Z+z*(i-1)!=longgetsave[2]){setTile(X+x*(i-1),Y+y*(i-1),Z+z*(i-1),52);longgetsave=[X+x*(i-1),Y+y*(i-1),Z+z*(i-1),true];}else{longgetsave=[0,-1,0,false]}
break}}
xc.sleep(100)
if(longgetsave[3]){setTile(longgetsave[0],longgetsave[1],longgetsave[2],0);longgetsave[3]=false}
}

}}))
xc.start()}




var iskq=false;
function smallmap(nut,mus,fd){

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{

var fx=["→","↗","↑","↖","←","↙","↓","↘"]//方向
var fw=nut*2,kd=Math.floor(ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4/fw),px,py,pz 
////

dp = ctx.getResources().getDisplayMetrics().density;

var mX,mY;
tpopx = 5*dp;
tpopy = 25*dp;

var layout=new android.widget.LinearLayout(ctx);
layout.setOrientation(1)   
//btn=new android.widget.Button(ctx);
var btn=new android.widget.ImageView(ctx);
var fill = new android.widget.LinearLayout.LayoutParams(-1, -1,1); 
btn.setLayoutParams(fill);

//btn.setTextSize(10) 
//btn.setText(fx[getyaw()]);

//btn.setBackgroundColor(android.graphics.Color.argb(100,255,255,255));

var n=btn
if(mus==true){ var newb = android.graphics. Bitmap.createBitmap((fw+1)*kd,(fw+1)*kd, android.graphics.Bitmap. Config.ARGB_8888 );
var canvasTemp = new android.graphics. Canvas( newb );
canvasTemp.drawARGB(120,0,0,0);
var drawable = new android.graphics.drawable. BitmapDrawable(newb);
n.setBackgroundDrawable(drawable);}

btn.setOnTouchListener(new android.view.View.OnTouchListener(
{
onTouch :function(v, e)
{
switch (e.getAction())
{
case 0:
mX=e.getX();
mY=e.getY();
break;
case 2:
var delX=parseInt(e.getX()-mX);
var delY=parseInt(e.getY()-mY);
tpopx = tpopx + delX;
tpopy = tpopy + delY;
btn.update(parseInt(tpopx), parseInt(tpopy), -1, -1);
break;
}
return true;
}
}));
layout.addView(btn);
btn=new android.widget.PopupWindow(layout,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4,ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4); 
btn.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, tpopx, tpopy);

smallmapgui=btn
var cb=[]
for(var id=0;id<256;id++){
var atm=85
var cb2=[null]
for(var at=1;at<4;at++){
var p = new android.graphics. Paint();
if(id==0||id==6 ||id==30 ||id==37 ||id==38 ||id==39 ||id==40 ||id==106 ||id==50 ||id==51 ){p.setARGB(0,255,255,255);}//空气
else if(id==2 ||id==31||id==253 ||id==175 ||id==243 ){p.setARGB(atm*at,101,167,72);}//草
else if(id==3  ){p.setARGB(atm*at,121,85,58);}//土
else if(id==8||id==9){p.setARGB(atm*at,38,93,255);}//水
else if(id==10||id==11){p.setARGB(atm*at,252,87,0);}//岩浆
else if(id==14||id==15 ||id==16 ||id==21 ||id==22 ||id==41 ||id==42 ||id==56 ||id==57 ||id==73 ||id==74||id==129||id==133 ||id==173){p.setARGB(atm*at,252,238,75);}//矿物
else if(id==12||id==159||id==53||id==24 ||id==128||id==121){p.setARGB(atm*at,211,204,149);}//沙子
else if(id==17||id==162){p.setARGB(atm*at,106,85,52);}//深木
else if(id==18||id==81||id==161 ||id==254){p.setARGB(atm*at,41,141,41);}//树叶
else if(id==78||id==79 ||id==80){p.setARGB(atm*at,227,243,243);}//雪
else if(id==5||id==53 ||id==157 ||id==158){p.setARGB(atm*at,188,152,98);}//浅木
else if(id==1||id==4 ||id==13 ||id==48 ||id==67 ||id==98 ||id==109 ||id==255){p.setARGB(atm*at,155,155,155);}//石头
else {p.setARGB(atm*at,0,0,0);}//其他
 cb2.push(p)
}
cb.push(cb2)
}
var cg=[],r
for(r in rbgblock){
//var p = new android.graphics. Paint();
if(cg[rbgblock[r][0]]==undefined){cg[rbgblock[r][0]]=[]}
cg[rbgblock[r][0]][rbgblock[r][1]]=[1024]
for(var i=1;i<4;i++){
var p = new android.graphics. Paint();
p.setARGB(85*i,blr[r],blg[r],blb[r])
cg[rbgblock[r][0]][rbgblock[r][1]].push(p)
}
}//print(cg.length+","+cg[35][1])


var numb=[]
   for(var a=0; a<=fw ;a++)
   {
     for(var b=0; b<=fw ;b++)
     {
     if((fw/2)*(fw/2)>(-(fw/2)+a)*(-(fw/2)+a)+(-(fw/2)+b)*(-(fw/2)+b)){
     numb.push([a,b])
     }
     }
   }
var a,b




/////
var xc=new java.lang.Thread(new java.lang.Runnable({run:function(){
while(iskq){


var newb = android.graphics. Bitmap.createBitmap((fw+1)*kd,(fw+1)*kd, android.graphics.Bitmap. Config.ARGB_8888 );
var canvasTemp = new android.graphics. Canvas( newb);
var p = new android.graphics. Paint();
var drawable = new android.graphics.drawable. BitmapDrawable(newb);

px=getPlayerX(),py=getPlayerY(),pz=getPlayerZ();

for(fx in numb){
a=numb[fx][0],b=numb[fx][1]
     var atm=85,at=2
     var x=px-(fw/2)+a,z=pz-(fw/2)+b
        var id=getTile(x,py-1,z);
        var bd=0//Level.getData(x,y,z) 
        if(id!=0){
        var id2=getTile(x,py,z);
        if(id2!=0){id=id2;at=3;bd=Level.getData(x,py,z)}
        else{bd=Level.getData(x,py-1,z)}
        }
        else if(id==0){id=getTile(x,py-2,z);at=1;bd=Level.getData(x,py-2,z) }
    
var sp=p
if(cg[id]!=undefined){
if(cg[id][bd]!=undefined){sp=cg[id][bd][at]}else{sp=cb[id][at]}
}else{sp=cb[id][at]}
//sp=cb[id][at]
canvasTemp.drawRect(a*kd,b*kd,a*kd+kd,b*kd+kd,sp);
}
p.setARGB(180,255,255,255);

canvasTemp.drawRect(fw*0.5*kd+kd*0.25,fw*0.5*kd+kd*0.3,fw*0.5*kd+kd*0.75,fw*0.5*kd+kd*0.7,p);
canvasTemp.drawRect(0,fw*0.5*kd+kd*0.42,fw*kd+kd,fw*0.5*kd+kd*0.58,p);
canvasTemp.drawRect(fw*0.5*kd+kd*0.42,0,fw*0.5*kd+kd*0.58,fw*kd+kd,p);
/*
p.setTextSize(4*kd);
p.setARGB(255,255,255,255);

canvasTemp.drawText(fx[getyaw()],0,kd*4,p);

//p = new android.graphics. Paint();

newb=Matrix(newb,180-getYaw(),fd*ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4*Math.SQRT2,fd*ctx.getWindowManager().getDefaultDisplay().getHeight()*0.4*Math.SQRT2)

var drawable = new android.graphics.drawable. BitmapDrawable(newb);

ctx.runOnUiThread(new java.lang.Runnable({
run: function(){
try{
n.setScaleType(android.widget.ImageView.ScaleType.CENTER); 
n.setImageDrawable(drawable);
}catch(err){
print2("错误:"+err);
}}}))


xc.sleep(10)
}
}}))
xc.start()

}catch(err){
clientMessage("错误:"+err);

}}}))}



function smallmapop(){
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var layout=new android.widget.LinearLayout(ctx) 
try{
var iph
var tmiLayout = new android.widget.LinearLayout(ctx);
var id = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);

add.setText("确认")
id.setHint("半径");
id.setText(String(25))
id.setInputType(number);

tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout.addView(id);
var ms=false
var cr=new android.widget.CheckBox(ctx);
cr.setText("是否黑色底色");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) ms=true;else ms=false;
				}
		});
tmiLayout.addView(cr);
var fd=2
var cr=new android.widget.CheckBox(ctx);
cr.setText("算法缩小地图(出现正方形使用)");
cr.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener()
			{
       onCheckedChanged:function(p1,p2)
				{
					if(p2) fd=1;else fd=2;
				}
		});
tmiLayout.addView(cr); 
tmiLayout.addView(add);
//Dialogs
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout);
tmiDialog.setTitle("【半径】【由啦啦菌改编】");

add.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(p1){
iskq=true;
smallmap(parseInt(id.getText()),ms,fd)
tmiDialog.dismiss()
}
});
tmiDialog.show();
}catch(err){
    print2("错误: "+err+".")
}}


function Matrix(bmp,r,w,h){
	 var width = bmp.getWidth(); 
	 var height = bmp.getHeight(); 
	 var scaleWidth = w / width;
	 var scaleHeight = h / height;
	 var matrix = new android.graphics.Matrix();
	 matrix.setRotate(r,width/2,bmp.height/2);
   matrix.postScale(scaleWidth, scaleHeight);
   bmp= android.graphics.Bitmap.createBitmap(bmp, 0, 0, width, height, matrix, true);	 
 return bmp;	 
 }











     
     










*/


