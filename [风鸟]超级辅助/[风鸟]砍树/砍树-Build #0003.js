//本js由风鸟制作！严禁盗版或修改版权！！
//Build #0003
var fuckTrees=true,mode=false;
var first=true;
var msg="\n砍树JS\n输入/tree开关砍树，输入/tree mode切换砍树模式(扩散性砍树可能会卡顿一会请小心使用！)\n由风鸟制作，盗版杀无赦！！";
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
	if((id==17 || id==162) && mode==true)
	{
		k(x,y,z);
		preventDefault();
		return;
	}
	if(id==17 && Level.getGameMode()==0 && fuckTrees)
	{
		for(i=y;i<128;i++)
		{
			id=getTile(x,i,z),data=Level.getData(x,i,z);
			if(id==17)
			{
				while(id==17 && data>3)
				{
					data=data-4;
				}
				if(Level.getTile(x,i-1,z)==3)
				{
					Level.setTile(x,i-1,z,2);
				}
				Level.setTile(x,i,z,0);
				if(Level.getTile(x,i-1,z)==2)
				{
					Level.setTile(x,i,z,6,data);
				}
				Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
				for(x1=x-2;x1<x+2;x1++)
				{
					for(z1=z-2;z1<z+2;z1++)
					{
						destoryPlanes(x1,i,z1,data);
					}
				}
				preventDefault();
			}
			else
			{
				break;
			}
		}
	}
	else if(id==162 && Level.getGameMode()==0 && fuckTrees)
	{
		for(i=y;i<128;i++)
		{
			id=getTile(x,i,z),data=Level.getData(x,i,z);
			if(id==162)
			{
				while(data>1)
				{
					data=data-2;
				}
				if(Level.getTile(x,i-1,z)==3)
				{
					Level.setTile(x,i-1,z,2);
				}
				Level.setTile(x,i,z,0);
				if(Level.getTile(x,i-1,z)==2)
				{
					Level.setTile(x,i,z,6,data+4);
				}
				Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
				for(x1=x-2;x1<x+2;x1++)
				{
					for(z1=z-2;z1<z+2;z1++)
					{
						destoryPlanes(x1,i,z1,data);
					}
				}
				preventDefault();
			}
			else
			{
				break;
			}
		}
	}
}
function destoryPlanes(x,y,z,data)
{
	var random=Math.random()*100;
	if(Level.getTile(x,y,z)==18)
	{
		if(random<=20)
		{
			Level.dropItem(x+0.5,y,z+0.5,0,6,1,data);
		}
		if(random<=50 && random>=40)
		{
			Level.dropItem(x+0.5,y,z+0.5,0,260,1,0);
		}
		Level.setTile(x,y,z,0);
	}
	else if(Level.getTile(x,y,z)==161)
	{
		if(random<=20)
		{
			Level.dropItem(x+0.5,y,z+0.5,0,6,1,data+4);
		}
		if(random<=50 && random>=40)
		{
			Level.dropItem(x+0.5,y,z+0.5,0,260,1,0);
		}
		Level.setTile(x,y,z,0);
	}
}
function procCmd(cmd)
{
	if(cmd.split(" ")[0]=="tree")
	{
		if(cmd.split(" ")[1]=="mode")
		{
			mode=!mode;
			if(mode)
			{
				clientMessage("扩散性砍树已开启 ，再次输入指令可关闭");
			}
			else
			{
				clientMessage("扩散性砍树已关闭");
			}
			return;
		}
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
function k(x,i,z)
{
	var id=Level.getTile(x,i,z),data=Level.getData(x,i,z),random=0;
	if(id==17 && Level.getGameMode()==0 && fuckTrees)
	{
		while(id==17 && data>3)
		{
			data=data-4;
		}
		if(Level.getTile(x,i-1,z)==3)
		{
			Level.setTile(x,i-1,z,2);
		}
		Level.setTile(x,i,z,0);
		if(Level.getTile(x,i-1,z)==2)
		{
			Level.setTile(x,i,z,6,data);
		}
		Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
		k(x+1,i,z);
		k(x-1,i,z);
		k(x+1,i,z+1);
		k(x+1,i,z-1);
		k(x-1,i,z+1);
		k(x-1,i,z-1);
		k(x,i,z+1);
		k(x,i,z-1);
		
		k(x,i+1,z);
		k(x+1,i+1,z);
		k(x-1,i+1,z);
		k(x+1,i+1,z+1);
		k(x+1,i+1,z-1);
		k(x-1,i+1,z+1);
		k(x-1,i+1,z-1);
		k(x,i+1,z+1);
		k(x,i+1,z-1);
		
		k(x,i-1,z);
		k(x+1,i-1,z);
		k(x-1,i-1,z);
		k(x+1,i-1,z+1);
		k(x+1,i-1,z-1);
		k(x-1,i-1,z+1);
		k(x-1,i-1,z-1);
		k(x,i-1,z+1);
		k(x,i-1,z-1);
	}
	else if(id==162 && Level.getGameMode()==0 && fuckTrees)
	{
		while(id==162 && data>1)
		{
			data=data-2;
		}
		if(Level.getTile(x,i-1,z)==3)
		{
			Level.setTile(x,i-1,z,2);
		}
		Level.setTile(x,i,z,0);
		if(Level.getTile(x,i-1,z)==2)
		{
			Level.setTile(x,i,z,6,data+4);
		}
		Level.dropItem(x+0.5,i,z+0.5,0,id,1,data);
		k(x+1,i,z);
		k(x-1,i,z);
		k(x+1,i,z+1);
		k(x+1,i,z-1);
		k(x-1,i,z+1);
		k(x-1,i,z-1);
		k(x,i,z+1);
		k(x,i,z-1);
		
		k(x,i+1,z);
		k(x+1,i+1,z);
		k(x-1,i+1,z);
		k(x+1,i+1,z+1);
		k(x+1,i+1,z-1);
		k(x-1,i+1,z+1);
		k(x-1,i+1,z-1);
		k(x,i+1,z+1);
		k(x,i+1,z-1);
		
		k(x,i-1,z);
		k(x+1,i-1,z);
		k(x-1,i-1,z);
		k(x+1,i-1,z+1);
		k(x+1,i-1,z-1);
		k(x-1,i-1,z+1);
		k(x-1,i-1,z-1);
		k(x,i-1,z+1);
		k(x,i-1,z-1);
	}
	else if(id==161 && Level.getGameMode()==0 && fuckTrees)
	{
		while(id==161 && data>1)
		{
			data=data-2;
		}
		destoryPlanes(x,i,z,data);
		k(x+1,i,z);
		k(x-1,i,z);
		k(x+1,i,z+1);
		k(x+1,i,z-1);
		k(x-1,i,z+1);
		k(x-1,i,z-1);
		k(x,i,z+1);
		k(x,i,z-1);
		
		k(x,i+1,z);
		k(x+1,i+1,z);
		k(x-1,i+1,z);
		k(x+1,i+1,z+1);
		k(x+1,i+1,z-1);
		k(x-1,i+1,z+1);
		k(x-1,i+1,z-1);
		k(x,i+1,z+1);
		k(x,i+1,z-1);
		
		k(x,i-1,z);
		k(x+1,i-1,z);
		k(x-1,i-1,z);
		k(x+1,i-1,z+1);
		k(x+1,i-1,z-1);
		k(x-1,i-1,z+1);
		k(x-1,i-1,z-1);
		k(x,i-1,z+1);
		k(x,i-1,z-1);
	}
	else if(id==18 && Level.getGameMode()==0 && fuckTrees)
	{
		while(id==18 && data>3)
		{
			data=data-4;
		}
		destoryPlanes(x,i,z,data);
		k(x+1,i,z);
		k(x-1,i,z);
		k(x+1,i,z+1);
		k(x+1,i,z-1);
		k(x-1,i,z+1);
		k(x-1,i,z-1);
		k(x,i,z+1);
		k(x,i,z-1);
		
		k(x,i+1,z);
		k(x+1,i+1,z);
		k(x-1,i+1,z);
		k(x+1,i+1,z+1);
		k(x+1,i+1,z-1);
		k(x-1,i+1,z+1);
		k(x-1,i+1,z-1);
		k(x,i+1,z+1);
		k(x,i+1,z-1);
		
		k(x,i-1,z);
		k(x+1,i-1,z);
		k(x-1,i-1,z);
		k(x+1,i-1,z+1);
		k(x+1,i-1,z-1);
		k(x-1,i-1,z+1);
		k(x-1,i-1,z-1);
		k(x,i-1,z+1);
		k(x,i-1,z-1);
	}
}
