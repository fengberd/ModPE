//本js由风鸟制作！严禁盗版或修改版权！！
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
function showMainBtn()
{
	ctx.runOnUiThread(new java.lang.Runnable({ run: function()
	{
		try
		{
			var MainWindow=new android.widget.PopupWindow(ctx);
			var layout = new android.widget.RelativeLayout(ctx);
			var Check = new android.widget.CheckBox(ctx);
			Check.setText("1.5x");
			Check.setChecked(false);
			Check.setTextSize(16);
			//Check.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			Check.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener(){
				onCheckedChanged: function(){
					if(Check.isChecked())
					{
						ModPE.setGameSpeed(35);
					}
					else
					{
						ModPE.setGameSpeed(20);
					}
				}
			});
			layout.addView(Check);
			MainWindow.setContentView(layout);
			MainWindow.setWidth(dip2px(ctx,70));
			MainWindow.setHeight(dip2px(ctx,25));
			MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
			MainWindow.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT|android.view.Gravity.BOTTOM,0,30);
		}catch(err){
			print(err);
		}
	}}));
}
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
showMainBtn();
