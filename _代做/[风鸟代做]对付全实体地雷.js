//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n对付全实体地雷JS\n效果：所有实体踩上深灰色地毯都会爆炸\n由风鸟制作，盗版杀无赦！！";
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
function modTick()
{
	var list=Entity.getAll();
	for(i=0;i<list.length;i++)
	{
	var x,y=getTile(Entity.getX(list[i]),Entity.getY(list[i]),Entity.getZ(list[i]))

		if(getTile(Entity.getX(list[i]),Entity.getY(list[i]),Entity.getZ(list[i]))==171)
		{
			clientMessage(x);
	clientMessage(y);
			explode(Entity.getX(list[i]),Entity.getY(list[i]),Entity.getZ(list[i]),4.0)
		}
	}
}