//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n更多掉落物JS\n效果：杀死猪、牛、羊、鸡时会掉落更多东西\n由风鸟制作，盗版杀无赦！！";
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
function deathHook(m, v)
{
	switch(Entity.getEntityTypeId(v))
	{
	case 10:
		Level.dropItem(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0, 365, 4, 0);
		break;
	case 11:
		Level.dropItem(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0, 363, 4, 0);
		break;
	case 12:
		Level.dropItem(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0, 319, 4, 0);
		break;
	case 13:
		Level.dropItem(Entity.getX(v), Entity.getY(v), Entity.getZ(v), 0, 35, 2, 0);
		break;
	}
}