var ctx=null;
var simpleGUI=null;
var text1,text2,bar;
var name,full,time,E;

var catchs=0;
var MOB=[
new Mob(10,"鸡","4"),
new Mob(11,"牛", "10"),
new Mob(12,"猪","10"),
new Mob(13,"羊","8"),
new Mob(14,"狼/狗","[10,20]"),
new Mob(15,"村民","10"),
new Mob(16,"哞菇","10"),
new Mob(32,"僵尸","13"),
new Mob(33,"苦力怕","16"),
new Mob(34,"骷髅","10"),
new Mob(35,"蜘蛛","8"),
new Mob(36,"僵尸猪人","13"),
new Mob(37,"史莱姆","[16,4,1]"),
new Mob(38,"末影人","40"),
new Mob(39,"蠹虫","8")];

function Mob(id,name,full)
{
		this.id=id;
		this.name=name;
		this.full=full;
}

function findMob(type)
{
		name="", full="";
		for(i in MOB)
		{
				if(type==MOB[i].id)
				{
						name=MOB[i].name;
						full=MOB[i].full;
						break;
				}
		}
}

function attackHook(a,e)
{
		findMob(Entity.getEntityTypeId(e));
		if(name!="")
		{
				time=201;
				E=e;
				check=true;
		}
}

function modTick()
{
		if(time>0)
		{
				time--;
				if(time%20==0)
				{
						if(check)
						{
								health=Entity.getHealth(E);
								if(health<=0)
								{
										health=0;
										time=60;
										check=false;
								}
						}
						ctx.runOnUiThread(new java.lang.Runnable(
						{
							run:function()
							{
								try
								{
									bar.setVisibility(1);
									if(!isNaN(full))
									{
										bar.setMax(full);
									}
									else
									{
										bar.setMax(1);
									}
									bar.setProgress(health);
									text1.setText(name);
									if(health==0)
									{
										text2.setText("");
										text2.setText("已死亡");
									}
									else
									{
										text2.setText(health+"/"+full);
									}
								}
								catch(err)
								{
									print("错误："+err);
								}
							}
						}));
				}
		}
		if(time==0)
		{
				time--;
				ctx.runOnUiThread(new java.lang.Runnable({run: function() {try
				{
						bar.setVisibility(5);
						text1.setText("");
						text2.setText("");
				}
catch(err){print(err);
}}}));
		}
}

function newLevel()
{
		ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
		var dp=ctx.getResources().getDisplayMetrics().density
ctx.runOnUiThread(new java.lang.Runnable({run:function(){try
		{
				simpleGUI=new android.widget.PopupWindow(ctx)
				var layout=new android.widget.LinearLayout(ctx)
				var Layout=new android.widget.LinearLayout(ctx)

				text1=new android.widget.TextView(ctx);
				text2=new android.widget.TextView(ctx)
				text1.setTextSize(15)
				text2.setTextSize(15)
				text1.getPaint().setFakeBoldText(true)
				text2.getPaint().setFakeBoldText(true)
				text1.setTextColor(android.graphics.Color.CYAN)
				text2.setTextColor(android.graphics.Color.WHITE)
				text1.setShadowLayer(2,0,0,android.graphics.Color.BLACK)
				text2.setShadowLayer(2,0,0,android.graphics.Color.BLACK)

				bar=new android.widget.ProgressBar(ctx,null,android.R.attr.progressBarStyleHorizontal)
				bar.setLayoutParams(new android.widget.LinearLayout.LayoutParams(80*dp,-2))
				bar.setVisibility(5)

				var params=new android.widget.LinearLayout.LayoutParams(-2,-2)
				params.setMargins(20*dp,0,0,0)
				Layout.addView(text1)
				Layout.addView(text2,params)
				layout.setOrientation(1)
				layout.addView(bar)
				layout.addView(Layout)
					 
				simpleGUI.setContentView(layout);
				simpleGUI.setWidth(130*dp);
				simpleGUI.setHeight(60*dp);
				simpleGUI.setBackgroundDrawable(null)
				simpleGUI.setTouchable(false)
				simpleGUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP,0,60*dp);
				catchs=1
		}catch(err){catchs=0}}}));
}

function leaveGame()
{
if(catchs==1){
		ctx.runOnUiThread(new java.lang.Runnable({run:function()
		{
				if(simpleGUI != null) simpleGUI.dismiss();
		}
}));
}
}
