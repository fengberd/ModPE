//本js由风鸟制作！严禁盗版或修改版权！！
//Build #0001
var fuckTrees=true;
var first=true;
var msg="\n砍树JS\n输入/tree开关砍树\n由风鸟制作，盗版杀无赦！！";
function newLevel()
{
	if(first)
	{
		print(msg);
		first=false;
	}
}
function destroyBlock(x,y,z)
{
	var id=Level.getTile(x,y,z),data=Level.getData(x,y,z);
	if((id==17 || id==162) && Level.getGameMode()==0 && fuckTrees)
	{
		for(i=y;i<128;i++)
		{
			id=getTile(x,i,z),data=Level.getData(x,i,z);
			if(id==17 || id==162)
			{
				while(id==17 && data>3)
				{
					data=data-4;
				}
				Level.setTile(x,i,z,0);
				Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
				preventDefault();
			}
			else
			{
				break;
			}
		}
	}
}
function procCmd(cmd)
{
	if(cmd.split(" ")[0]=="tree")
	{
		fuckTrees=!fuckTrees;
		if(fuckTrees)
		{
			clientMessage("砍树系统已开启");
		}
		else
		{
			clientMessage("砍树系统已关闭");
		}
	}
}
