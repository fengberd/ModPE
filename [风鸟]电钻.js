var wxd=false;
function useItem(x, y, z ,itemId, blockId, side, itemdata,blockdata)
{
	if(itemId == 511)
	{
		var data=getDrop(blockId,blockdata);
		if(data[0]!=0)
		{
		 	if(itemdata<299 || wxd)
			{
				Entity.setCarriedItem(getPlayerEnt(),itemId, 1, itemdata+1);
				Level.destroyBlock(x, y, z,false);
				Level.dropItem(x, y, z, 0, data[0], data[1], data[2]);
			}
			else
			{
				clientMessage("电量不足 ！请使用红石在工作台充电 ！");
			}
		}
	}
}
function getDrop(id,dt)
{
	var rt=[id,1,0]
	switch(id)
	{
	case 1://石头
		rt[0]=4;
		break;
	case 2://草方块
		rt[0]=3;
		break
	case 16://煤矿石
		rt[0]=263;
		break;
	case 73://红石矿石
		rt[0]=331;
		rt[1]=6;
		break;
	case 74://发光的红石矿石
		rt[0]=331;
		rt[1]=6;
		break;
	case 21://青金石矿石
		rt[0]=351;
		rt[1]=6;
		rt[2]=4;
		break;
	case 56://钻石矿石
		rt[0]=264;
		break;
	case 83://甘蔗方块
		rt[0]=338;
		break;
	case 54://箱子
		rt[0]=0;
		break;
	case 64://木门方块
		rt[0]=0;
		break;
	case 71://铁门方块
		rt[0]=0;
		break;
	case 26://床方块
		rt[0]=0;
		break;
	case 96://活板门
		rt[0]=0;
		break;
	case 68://墙上的告示牌方块
		rt[0]=323;
		break;
	case 63://告示牌方块
		rt[0]=323;
		break;
	case 17://木头
		if(dt>2)
		{
			if(dt==4 || dt==8)//橡木
			{
				rt[2]=0;
			}
			else if(dt==9 || dt==5)//丛林木
			{
				rt[2]=1;
			}
			else if(dt==6 || dt==10)//桦木
			{
				rt[2]=2;
			}
		}
		else
		{
			rt[2]=dt;
		}
		break;
	default:
		rt[2]=dt;
		break;
	}
	return rt
}
function procCmd(cmd)
{
	if(cmd=="wxd")
	{ print(cmd)
		if(wxd)
		{
		print(cmd)
			wxd=false;
		}
		else
		{
			wxd=true;
		}
	}
}
ModPE.overrideTexture("images/items-opaque.png","http://i.imgur.com/bFgeDZs.png");
ModPE.setItem(511,"spider_eye",0,"电钻");
Item.setMaxDamage(511, 300);
Item.addCraftRecipe(511, 1, 299, [265, 4, 0, 331, 2, 0, 264, 1, 0]);
Item.addCraftRecipe(511, 1, 0, [511, 1, 299, 331, 5, 0]);