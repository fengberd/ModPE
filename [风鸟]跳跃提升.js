//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var jmptime=0,addjump=1;//跳跃提升
var msg="\n跳跃提升JS\n通过/jumpadd <倍数> 或/ja <倍数>来提升跳跃高度，倍数为0-7，建议调为1就够了，最大提升21格\n由风鸟制作，盗版杀无赦！！";
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
	cmd=cmd.split(" ");
	if((cmd[0]=="jumpadd" || cmd[0]=="ja") && cmd.length==2)
	{
		var tInt=parseInt(cmd[1]);
		if(tInt>=0 && tInt<=7)
		{
			addjump=tInt+1;
			clientMessage("<风鸟> 跳跃提升倍数已更改为 "+tInt+" 倍");
		}
		else
		{
			clientMessage("<风鸟> 参数错误，倍数应为0-7");
		}
	}
}
function modTick()//0.05秒执行一次
{
	PlayerEntity=Player.getEntity();
	if(addjump>1)
	{
		jmptime--;
		if(Entity.getVelY(PlayerEntity)>=0.23)
		{
			if(jmptime<=0)
			{
				jmptime=5*addjump;
				Entity.setVelY(PlayerEntity,(0.26*addjump));
			}
		}
	}
}
