//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n点方块成金JS\n效果：木棒点击任何方块变为金块\n由风鸟制作，盗版杀无赦！！";
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
function useItem(x,y,z,itemId,blockId,side,itemDamage,blockDamage)
{
	if(itemId==280)
	{
		setTile(x,y,z,41);
	}
}