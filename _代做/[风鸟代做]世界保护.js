//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n世界保护JS\n效果：无法破坏任何方块\n由风鸟制作，盗版杀无赦！！";
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
function destroyBlock(x,y,z,side)//方块破坏钩子
{
		preventDefault();
}