——API信息————————————
描述:模仿TMI来停止方块更新活动
作者:风鸟
注意事项:仅适用于短时间的停止
——外部代码————————————
var update=true,nowTime=0;
Level.DisableUpdate=function(){update=false;nowTime=Level.getTime();}
Level.EnableUpdate=function(){update=true;}
Level.CanUpdate=function(){return update;}
——钩子函数————————————
modTick:
if(!update){Level.setTime(nowTime);}
——API———————————————
Level.DisableUpdate();//停止方块更新和时间
Level.EnableUpdate();//恢复方块更新和时间
Level.CanUpdate();//返回是方块更新是否已启用