var arrowlist="";
//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n箭无重力JS\n效果：射♂出♂去的箭不受重力影响\n由风鸟制作，盗版杀无赦！！";
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
	if(Entity.getEntityTypeId(e)==80)
	{
		arrowlist=arrowlist+e+"."+Entity.getVelY(e)+",";
	}
}
function modTick()
{
	var Data = arrowlist.split(",");
	var lol="";
	for(i=0;i<Data.length;i++)
	{
		lol=Data[i].split(".");
		Entity.setVelY(lol[0],lol[1]);
	}
}