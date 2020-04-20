//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n木剑收方块JS\n效果：使用木剑点击任意方块自动收到背包\nBUG：如果背包满了就不会获得方块\n由风鸟制作，盗版杀无赦！！";
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
function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage)//使用物品
{
	if(itemId==268)
	{
	Player.addItemInventory(blockId,1,blockDamage);
	setTile(x,y,z,0)
	}
}