//本js由风鸟制作，改版权的你麻麻飞辣~你全家炸辣~
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var isPickingEntity = false;
var ggMob;
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function code2model(){var render=Renderer.createHumanoidRenderer();var Data="clear,all,,,,,,,,,addBox,head,50,50,50,0,0,0,0,".split(",");for(var i=0;i<Data.length;i=i+10){switch(Data[i]){case"addBox":render.getModel().getPart(Data[i+1]).addBox(Number(Data[i+2]),Number(Data[i+3]),Number(Data[i+4]),Number(Data[i+5]),Number(Data[i+6]),Number(Data[i+7]),Number(Data[i+8]));break;case"clear":if(Data[i+1]=="all"){var model=render.getModel();model.getPart("head").clear();model.getPart("body").clear();model.getPart("leftArm").clear();model.getPart("rightArm").clear();model.getPart("leftLeg").clear();model.getPart("rightLeg").clear();}else{render.getModel().getPart(Data[i+1]).clear();};break;case"setTextureOffset":render.getModel().getPart(Data[i+1]).setTextureOffset(Number(Data[i+2]),Number(Data[i+3]),Boolean(Data[i+4]));break;};};return render.getRenderType();};
var ID=code2model();
function newLevel()
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				MainWindow = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx);
				var button = new android.widget.Button(ctx);
				button.setText("TH");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick: function(viewarg)
					{
						if(!isPickingEntity)
						{
							ggMob=Level.spawnMob(Player.getX(),Player.getY(),Player.getZ(),15);
							Entity.setRenderType(ggMob,ID);
							ModPE.setCamera(ggMob);
							isPickingEntity=true;
						}
						else
						{
							Entity.remove(ggMob);
							isPickingEntity=false;
						}
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx, 52));
				MainWindow.setHeight(dip2px(ctx, 42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, 0, 0);
			}
			catch(err)
			{
				print(err);
			}
		}
	}));
}
function deathHook(murderer, victim)
{
	if(victim == ggMob)
	{
		isPickingEntity = false;
		ModPE.setCamera(Player.getEntity());
	}
}
function entityRemovedHook(entity)
{
	if(entity == ggMob)
	{
		isPickingEntity = false;
		ModPE.setCamera(Player.getEntity());
	}
}
function modTick()
{
	if(isPickingEntity)
	{
		var ggMobDirection = lookDir (Entity.getYaw(Player.getEntity()), Entity.getPitch(Player.getEntity()));
		if (getPlayerX () + (ggMobDirection.x * 3) - Entity.getX (ggMob) > 0.5 ||  getPlayerX () + (ggMobDirection.x * 3) - Entity.getX (ggMob) < -0.5 || getPlayerY () + (ggMobDirection.y * 3) - Entity.getY (ggMob) > 0.5 ||  getPlayerY () + (ggMobDirection.y * 3) - Entity.getY (ggMob) < -0.5 || getPlayerZ () + (ggMobDirection.z * 3) - Entity.getZ (ggMob) > 0.5 ||  getPlayerZ () + (ggMobDirection.z * 3) - Entity.getZ (ggMob) < -0.5)
		{
			Entity.setVelX(ggMob, (getPlayerX () + (ggMobDirection.x * 3) - Entity.getX(ggMob)) / 5)
			Entity.setVelY(ggMob, (getPlayerY () + (ggMobDirection.y * 3) - Entity.getY(ggMob)) / 5);
			Entity.setVelZ(ggMob, (getPlayerZ () + (ggMobDirection.z * 3) - Entity.getZ(ggMob)) / 5);
		}
		else
		{
			Entity.setVelX(ggMob, 0);
			Entity.setVelY(ggMob, 0);
			Entity.setVelZ(ggMob, 0);
		}
		//see(ggMob,Player.getEntity());
	}
}
function see(a,b){var x=Entity.getX(a)-Entity.getX(b),y=Entity.getY(a)-Entity.getY(b),z=Entity.getZ(a)-Entity.getZ(b);var yaw=Math.asin(x/Math.sqrt(x*x+z*z))/Math.PI*180;if(z>0){yaw=-yaw+180;};Entity.setRot(a,yaw,Math.round(Math.asin(y/Math.sqrt(x*x+z*z+y*y))/Math.PI*180));};
function leaveGame()
{
	if(MainWindow!=null)
	{
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function()
			{
				MainWindow.dismiss();
				MainWindow=null;
			}
		}));
		isPickingEntity = false;
	}
}
function vector3d(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}
function lookDir(yaw, pitch)
{
	var direction = new vector3d(0, 0, 0);
	direction.y = -Math.sin(java.lang.Math.toRadians(pitch));
	direction.x = -Math.sin(java.lang.Math.toRadians(yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
	direction.z = Math.cos(java.lang.Math.toRadians (yaw)) * Math.cos(java.lang.Math.toRadians(pitch));
	return direction;
}
