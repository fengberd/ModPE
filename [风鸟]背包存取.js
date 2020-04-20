



var InvData=[];
function saveInv()//保存玩家背包
{
	if(Level.getGameMode()!=0)
	{
		return;
	}
	InvData=[];
	for(i=0;i<8;i++)
	{
		if(Player.getInventorySlot(i)!=0)
		{
			InvData.push({id:Player.getInventorySlot(String(i)),count:Player.getInventorySlotCount(String(i)),data:Player.getInventorySlotData(String(i))});
			clientMessage(i+"/"+Player.getInventorySlotCount(i));
		}
	}
}
function loadInv()//读取玩家背包数据，会先清空背包
{
	if(Level.getGameMode()!=0)
	{
		return;
	}
	for(i=0;i<35;i++)
	{
		Player.clearInventorySlot(i);
	}
	for(i=0;i<InvData.length;i++)
	{
		clientMessage(InvData[i].count);
		Player.addItemInventory(InvData[i].id,InvData[i].count,InvData[i].data);
	}
}
function procCmd(cmd)
{
	var Data=cmd.split(" ");
	switch(Data[0])
	{
	case "saveinv":
		saveInv();
		clientMessage("背包数据已保存");
		break;
	case "loadinv":
		loadInv();
		clientMessage("背包数据已读取");
		break;
	}
}
