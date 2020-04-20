//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n宠物JS\n效果：铁剑点击任何实体就会骑在你的头上，点地下去\n由风鸟制作，盗版杀无赦！！";
function newLevel()
{
	if(first)
	{
		print(msg);
		first=false;
	}
}
function attackHook(attacker,victim)
{
	if(getCarriedItem()==267)
	{
		Entity.rideAnimal(victim, attacker);
		preventDefault();
	}
}
function useItem(x,y,z,itemId)
{
	if(itemId==267)
	{
		 Entity.rideAnimal(0,getPlayerEnt());
	}
}