//本js由风鸟制作！严禁盗版或修改版权！！
//注：雪球雨算法来自于寒冰心法.js
var first=true;
var msg="\n雪球雨JS\n效果：用剪刀点击一个方块后在此方块周围下雪球雨\n由风鸟制作，盗版杀无赦！！";
function newLevel()
{
	if(first)
	{
		print(msg);
		print(msg);
		print(msg);
		first=false;
	}
}
function useItem(x,y,z,itemId,blockId,side )
{
	if(itemId==359)
	{
		for(i=5;i<30;i++)
		{
			Level.spawnMob(x+2.5,y+i,z+0.5,81)
			Level.spawnMob(x+2.5,y+i,z+1.5,81)
			Level.spawnMob(x+2.5,y+i,z+2.5,81)
			Level.spawnMob(x+2.5,y+i,z-0.5,81)
			Level.spawnMob(x+2.5,y+i,z-1.5,81)
			Level.spawnMob(x+1.5,y+i,z+2.5,81)
			Level.spawnMob(x+1.5,y+i,z-1.5,81)
			Level.spawnMob(x+0.5,y+i,z+2.5,81)
			Level.spawnMob(x+0.5,y+i,z-1.5,81)
			Level.spawnMob(x-0.5,y+i,z+2.5,81)
			Level.spawnMob(x-0.5,y+i,z-1.5,81)
			Level.spawnMob(x-1.5,y+i, z+0.5,81)
			Level.spawnMob(x-1.5,y+i,z+1.5,81)
			Level.spawnMob(x-1.5,y+i,z-0.5,81)
			Level.spawnMob(x-1.5,y+i,z+2.5,81)
			Level.spawnMob(x-1.5,y+i,z-1.5,81)
		}
	}
}