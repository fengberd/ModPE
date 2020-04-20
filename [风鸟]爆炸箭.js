//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var canexplode=false;
var arrowlist=[];
var msg="\n爆炸箭JS\n使用/explodingarrow 或/ea 开关爆炸箭\n由风鸟制作，盗版杀无赦！！";
function newLevel()
{
	if(first)
	{
		print(msg);
		first=false;
	}
}
function procCmd(cmd)
{
	if(cmd.split(" ")[0]=="explodingarrow" || cmd.split(" ")[0]=="ea")
	{
		canexplode=!canexplode;
		if(canexplode)
		{
			clientMessage("<风鸟> 爆炸箭已开启");
		}
		else
		{
			arrowlist=[];
			clientMessage("<风鸟> 爆炸箭已关闭");
		}
	}
}
function entityAddedHook(entity)
{
	if(canexplode && Entity.getEntityTypeId(entity)==80)
	{
		arrowlist.push(entity);
	}
}
function entityRemovedHook(entity)
{
	if(canexplode)
	{
		for(i=0;i<arrowlist.length;i++)
		{
			if(arrowlist[i]==entity)
			{
				arrowlist.splice(i,1);
				Level.explode(Entity.getX(entity),Entity.getY(entity)+0.5,Entity.getZ(entity),4);
			}
		}
	}
}
function leaveGame()
{
	arrowlist=[];
}
function modTick()
{
	if(canexplode)
	{
		for(i=0;i<arrowlist.length;i++)
		{
			if(Entity.getVelX(arrowlist[i])==0 && Entity.getVelY(arrowlist[i])==0 && Entity.getVelZ(arrowlist[i])==0)
			{
				Entity.remove(arrowlist[i]);
			}
		}
	}
}
