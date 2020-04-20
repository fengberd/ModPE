//本js由风鸟制作！严禁盗版或修改版权！！
var open=false;
function procCmd(cmd)
{
	var Data = cmd.split(" ");
	switch(Data[0])
	{
	case"taller":
		open=true;
		clientMessage("变高JS开启");
		break;
	case"ok":
		open=false;
		clientMessage("变高JS关闭");
		break;
	}
}
function useItem(x,y,z,itemId)
{
	if(open)
	{
		if(itemId<=255 &&itemId>=1)
		{
			for(i=1;i<=50;i++)
			{
				if(getTile(x,y+i,z)==0)
				{
					setTile(x,y+i,z,itemId);
				}
				else
				{
					i=51;
				}
			}
		}
	}
}
var first=true;
function newLevel()
{
	if(first)
	{
		print("\n变高JS\n效果：放置方块会向上延伸到50格高，如果碰到障碍方块会停止增高，输入/taller开启，/ok关闭\n由风鸟制作，盗版杀无赦！！");
		print("\n变高JS\n效果：放置方块会向上延伸到50格高，如果碰到障碍方块会停止增高，输入/taller开启，/ok关闭\n由风鸟制作，盗版杀无赦！！");
		print("\n变高JS\n效果：放置方块会向上延伸到50格高，如果碰到障碍方块会停止增高，输入/taller开启，/ok关闭\n由风鸟制作，盗版杀无赦！！");
		first=false;
	}
}