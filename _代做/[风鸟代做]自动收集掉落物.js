//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n自动收集掉落物JS\n效果：当任何物品掉落时都会飞到你脚下\n由风鸟制作，盗版杀无赦！！";
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
function entityAddedHook(e)
{
	if(Entity.getEntityTypeId(e)==64 || Entity.getEntityTypeId(e)==66)
	{
		Entity.setPosition(e,getPlayerX(),getPlayerY()-1, getPlayerZ());
	}
}