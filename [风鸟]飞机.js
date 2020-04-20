//本js由风鸟制作，算法引用自外国大神的js，随意修改版权可能引起国际纠纷！！
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var gravityButtonsInitialized = false;
var isPickingEntity = false;
var ggMob;
var needpower=false;
ModPE.setItem(501, "record_mellohi", 0, "飞机控制器");
Item.setMaxDamage(501, 600);
Item.addShapedRecipe(501, 1, 0, [
	"xox",
	"dyd",
	"xxx"], ["x", 265, 0, "o", 266, 0,"d",331,0,"y",264,0]);

function attackHook(attacker,victim)
{
	if(attacker == Player.getEntity())
	{
		if(Player.getCarriedItem() == 501 && !isPickingEntity && Entity.getEntityTypeId(victim)==84)
		{
			print("飞机已设定");
			preventDefault();
			ggMob = victim;
			Entity.rideAnimal(attacker,victim);
			isPickingEntity = true;
		}
	}
}
function deathHook(murderer, victim)
{
	if(victim == ggMob)
	{
		isPickingEntity = false;
	}
}
function entityRemovedHook(entity)
{
	if(victim == ggMob)
	{
		isPickingEntity = false;
	}
}
function modTick()
{
	if(Player.getCarriedItem() == 501)
	{
		if(!gravityButtonsInitialized)
		{
			gravityButtonsInitialized = true;
			ctx.runOnUiThread(new java.lang.Runnable(
			{
				run: function()
				{
					try
					{
							isPickingEntity = false;
	
							popupShoot = new android.widget.PopupWindow();
							layoutShoot = new android.widget.LinearLayout(ctx);
							var shootButton = new android.widget.Button(ctx);
							shootButton.setText("S");
							shootButton.setOnClickListener(new android.view.View.OnClickListener({
							onClick: function()
							{
								if(isPickingEntity)
								{
									//isPickingEntity = false;
									var shootGgMob = lookDir(getYaw(), getPitch());
									setVelX(ggMob, shootGgMob.x * 3.3);
									setVelY(ggMob, shootGgMob.y * 3.3);
									setVelZ(ggMob, shootGgMob.z * 3.3);
								}
								else
								{
									ModPE.showTipMessage("请先设置一个飞机");
								}
							}}));
							layoutShoot.addView(shootButton);
							popupShoot.setContentView(layoutShoot);
							popupShoot.setWidth(42);
							popupShoot.setHeight(44);
							popupShoot.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
							popupShoot.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, 0, 0);
							
							popupDropGG = new android.widget.PopupWindow();
							layoutDropGG = new android.widget.RelativeLayout(ctx);
							
							var dropGGButton = new android.widget.Button(ctx);
							dropGGButton.setText("D");
							dropGGButton.setOnClickListener(new android.view.View.OnClickListener({
							onClick: function()
							{
								if(isPickingEntity)
								{
									isPickingEntity = false;
								}
								else
								{
									ModPE.showTipMessage("请先设置一个飞机");
								}
							}}));
							layoutDropGG.addView(dropGGButton);
	
							popupDropGG.setContentView(layoutDropGG);
							popupDropGG.setWidth(42);
							popupDropGG.setHeight(44);
							popupDropGG.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
							popupDropGG.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.CENTER, 0, 0);
					}
					catch(err)
					{
						gravityButtonsInitialized = false;
						clientMessage("出现错误: \n" + err);
					}
				}
			}));
		}
	}
	else
	{
		if(gravityButtonsInitialized)
		{
			ctx.runOnUiThread(new java.lang.Runnable(
			{
			run: function()
				{
					popupShoot.dismiss();
					popupDropGG.dismiss();
				}
			}));
			gravityButtonsInitialized = false;
			isPickingEntity = false;
		}
	}
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
	}
}
function leaveGame()
{
	if(gravityButtonsInitialized)
	{
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function()
			{
				popupShoot.dismiss();
				popupDropGG.dismiss();
			}
		}));
		gravityButtonsInitialized = false;
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
