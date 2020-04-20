function selectLevelHook()//选择存档时触发
{
	print("选择存档 selectLevelHook触发");
} 
function useItem(x,y,z,itemId,blockId,side,itemData,blockData)
{
	clientMessage("点击方块 useItem触发");
	clientMessage("X:"+x+"\nY:"+y+"\nZ:"+z);
	clientMessage("itemId:"+itemId+"\nitemData"+itemData+"\nblockId:"+blockId+"\nblockData"+blockData);
	clientMessage("side:"+side);
}
function attackHook(attacker,victim)
{
	clientMessage("攻击钩子 attackHook触发");
	clientMessage("进行攻击的玩家 attacker:"+attacker);
	clientMessage("被攻击实体 victim:"+victim);
}
function procCmd(cmd)
{
	clientMessage("输入指令 procCmd触发");
	clientMessage("指令 cmd:"+cmd);
}
function newLevel()
{
	print("载入新世界 newLevel触发");
}
function leaveGame()
{
	print("离开世界 leaveGame触发");
}
function entityAddedHook(entity)
{
	clientMessage("实体添加 entityAddedHook触发");
	clientMessage("被添加实体 entity:"+entity);
}
function entityRemovedHook(entity)
{
	clientMessage("实体移除 entityRemovedHook触发");
	clientMessage("被移除实体 entity:"+entity);
}
function deathHook(murderer, victim)
{
	clientMessage("实体死亡 deathHook触发");
	clientMessage("造成死亡的实体 murderer :"+murderer);
	clientMessage("死亡实体 victim:"+victim);
}
function levelEventHook(entity,eventType,x,y,z,data){}/*
当门(木门,栅栏门,陷阱门)被打开或关闭时会触发
当羊吃掉草时触发
睡觉时触发
entity:动作的实体(观测数据。总是为0)
eventType:事件类型(观测数据。开关门数据为1003，羊吃草的数据为2001,睡觉的数据为9800)
x,y,z:被点击的门方块的坐标，被吃掉的草方块的坐标，睡觉时为(0,0,0)
data:未知(观测数据。开关门，睡觉的数据为0，羊吃草的数据为2)
*/
/*function blockEventHook(x,y,z,eventType,data)
{

}
每三秒检查所有箱子的开关状态
x,y,z:箱子的坐标
eventType:事件类型(观测数据为1)
data:未知(观测数据。关闭为0，打开为1，打开过程中为2(待确认)。检查大箱子时第二个被放置的箱子数值改变，另一个一直为0)
*/
function destroyBlock(x,y,z,side)
{
	clientMessage("破坏方块 destroyBlock触发");
	clientMessage("X:"+x+"\nY:"+y+"\nZ:"+z);
	clientMessage("side:"+side);
}