//本js由风鸟制作！严禁盗版或修改版权！！
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var clip=null;
var fixblocks=true,lastBlockid=[12,13,27,31,32,37,38,39,40,50,51,59,64,65,66,71,78,81,83,96,104,105,106,111,127,141,142,175,244];
var build="Build #0004";
var first=true;
var msg="\n建筑代码生成器\n由风鸟制作，盗版杀无赦！！";
var now=true,nowacode,nowbcode;
var MODE=0;
var fixercode="",autofix=false,getChest=false;
var x1,y1,z1,x2,y2,z2,x3,y3,z3;
var blocks=0,acode,ftt="0";
var MainWindow=null,ft=null,fx=null;
function newLevel()
{
	if(first)
	{
		print(msg);
		first=false;
	}
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				clip=ctx.getSystemService(ctx.CLIPBOARD_SERVICE);
				MainWindow = new android.widget.PopupWindow();
				var layout = new android.widget.RelativeLayout(ctx);
				var button = new android.widget.Button(ctx);
				button.setText("C");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick:function(viewarg)
					{
						
						Menu_open(new Array(
							{kind:"text",text:"建筑代码生成器",color:"",size:24},
							{kind:"text",text:"by 风鸟",color:"",size:16},
							{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
							{kind:"button",text:"使用帮助",data:"help"},
							{kind:"button",text:"脚下生成方块",data:"under"},
							{kind:"button",text:"设置手中物品为金子",data:"gold"},
							{kind:"button",text:"设置手中物品为钻石",data:"diamond"},
							{kind:"check",text:"启用方块修复(禁用后速度更快但部分方块会在解析时掉落或不正常导致需解析两次，一般不建议禁用)",data:"fixblocks",torf:fixblocks},
							{kind:"check",text:"生成箱子内物品代码(启用后解析代码时会还原箱子内的物品，但生成的代码略大，不是特别需要建议禁用)",data:"getChest",torf:getChest},
							{kind:"button",text:"开始生成",data:"getcode"},
							{kind:"text",text:"过滤器：",color:"",size:18},
							{kind:"filter"},
							{kind:"text",text:"过滤器使用说明:\n  在编辑框内输入要过滤的方块ID即可，如过滤空气输入0，石头输入1，在多个方块ID间使用英文逗号隔开，也可以过滤指定附加值的方块，如1:2，中间使用英文冒号隔开，若不输入附加值则过滤此ID的所有方块",color:android.graphics.Color.YELLOW,size:16},
							{kind:"button",text:"建筑代码解析器",data:"FIX"}));
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx, 42));
				MainWindow.setHeight(dip2px(ctx, 42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0, 50);
			}
			catch(err)
			{
				catchmsg(10,err);
			}
		}
	}));
}
function leaveGame()
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				if(MainWindow != null)//关闭主按钮
				{
					MainWindow.dismiss();
					MainWindow = null;
				}
			}
			catch(err)
			{
				catchmsg(13,err);
			}
		}
	}));
}
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function catchmsg(id,msg)//GUI报错
{
	function cth(msge)
	{
		selectDialog("建筑代码生成器 - "+build+" - 出现错误",msge,android.R.drawable.stat_notify_error,"确定","退出存档","","ModPE.leaveGame()");
		clientMessage("建筑代码生成器 - "+build+" - 出现错误\n"+msge);
	}
	switch(id)
	{
	case 10:
		cth("GUI显示出错(10)\n"+msg);
		break;
	case 11:
		cth("Eval执行错误(11)\n"+msg);
		break;
	case 12:
		cth("文件流出错(12)\n"+msg);
		break;
	case 13:
		cth("关闭组件出错(13)\n"+msg);
		break;
	default:
		cth("未知错误("+id+")\n"+msg);
		break;
	}
}
function print(str)
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			android.widget.Toast.makeText(ctx,str,0).show();
		}
	}));
}
function selectDialog(title,text,icon,button1text,button2text,button1code,button2code)
{
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				var builder = new android.app.AlertDialog.Builder(ctx);
				builder.setIcon(icon);
				builder.setTitle(title);
				builder.setMessage(text);
				builder.setPositiveButton(button1text, new android.content.DialogInterface.OnClickListener()
				{
					onClick:function()
					{
						if(button1code!="" && button1code!=undefined)
						{
							eval(button1code);
						}
						dialog.dismiss();
					}
				});
				builder.setNegativeButton(button2text, new android.content.DialogInterface.OnClickListener()
				{
					onClick: function()
					{
						if(button2code!="" && button2code!=undefined)
						{
							eval(button2code);
						}
						dialog.dismiss();
					}
				});
				var dialog = builder.create();
				dialog.show();
			}
			catch(err)
			{
				catchmsg(12,err);
			}
		}
	}));
}
function useItem(x,y,z,itemId)
{
	if(itemId==267)
	{
		if(now)
		{
			CM("设置点1成功");
			x1=x,y1=y,z1=z;
		}
		else
		{
			CM("设置点2成功");
			x2=x,y2=y,z2=z;
		}
		now=!now;
		preventDefault();
	}
	if(itemId==264)
	{
		CM("设置基准点成功");
		x3=x,y3=y,z3=z;
		preventDefault();
	}
	if(autofix && itemId==266)
	{
		var a=fixCode(x,y,z,fixercode);
		if(a!=-1)
		{
			CM("解析完毕 ,共放置 "+a+"个方块");
		}
		preventDefault();
	}
}
function fixPOS(pos)
{
	if(pos<0)
	{
		return pos-1;
	}
	return pos;
}
function setHand(ID,Data)
{
	Entity.setCarriedItem(Player.getEntity(), parseInt(ID), 1, parseInt(Data));
}
function modTick()
{
	if(MODE==1)
	{
		MODE=0;
		nowacode=getCode(x3,y3,z3,ftt);
		nowbcode="function fixCode(jx,jy,jz){var code,a=0;try{eval(\"code=["+nowacode+"]\");}catch(err){print(\"不是标准的建筑代码！\");return -1;}for(i=0;i<code.length;i=i+5){if(code[i+3]==63 || code[i+3]==68){Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4][0]);for(ii=1;ii<code[i+4].length;ii++){Level.setSignText(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,ii-1,code[i+4][ii]);}}else if(code[i+3]==54){Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4][0]);var arr=code[i+4];arr.shift();for(ii=0;ii<arr.length;ii=ii+3){Level.setChestSlot(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,ii/3,arr[ii],arr[ii+1],arr[ii+2]);}}else{Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4]);}a++;}return a;}";
		ctx.runOnUiThread(new java.lang.Runnable(
		{
			run: function()
			{
				try
				{
					Menu_open(new Array(
						{kind:"text",text:"建筑代码生成器",color:"",size:24},
						{kind:"text",text:"by 风鸟",color:"",size:16},
						{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
						{kind:"text",text:"生成完毕，共"+blocks+"个方块",color:android.graphics.Color.YELLOW,size:18},
						{kind:"button",text:"复制可调用代码",data:"copy b"},
						{kind:"button",text:"复制纯建筑代码",data:"copy a"},
						{kind:"button",text:"保存为可调用代码",data:"save b"},
						{kind:"button",text:"保存为纯建筑代码",data:"save a"}));
				}
				catch(err)
				{
					catchmsg(10,err);
				}
			}
		}));
	}
}
function save(ia)
{
	if(ia=="a")
	{
		if(writeText(new android.os.Environment.getExternalStorageDirectory() +"/建筑代码_纯建筑代码.txt","["+nowacode+"]"))
		{
			print("已保存到 "+new android.os.Environment.getExternalStorageDirectory() +"/建筑代码_纯建筑代码.txt");
		}
		else
		{
			print("保存失败！");
		}
	}
	else
	{
		if(writeText(new android.os.Environment.getExternalStorageDirectory() +"/建筑代码_可调用代码.txt",nowbcode))
		{
			print("已保存到 "+new android.os.Environment.getExternalStorageDirectory() +"/建筑代码_可调用代码.txt");
		}
		else
		{
			print("保存失败！");
		}
	}
}
function copy(ia)
{
	if(ia=="a")
	{
		clip.setText("["+nowacode+"]");
		print("已复制到剪贴板");
	}
	else
	{
		clip.setText(nowbcode);
		print("已复制到剪贴板");
	}
}
function getCode(jx,jy,jz,filterss)
{
	print("开始生成...请耐心等待，请勿再次点击生成按钮");
	var lx=Math.min(x1, x2),ly=Math.min(y1, y2),lz=Math.min(z1, z2);
	var hx=Math.max(x1, x2)+1,hy=Math.max(y1, y2)+1,hz=Math.max(z1, z2)+1;
	var x,y,z,blockId=0,blockData=0;
	blocks=0;
	var code=new Array(),lastblocks=new Array();
	var filter=filterss.split(","),f=false,ff;
	for(x=lx;x<hx;x++)
	{
		for(y=ly;y<hy;y++)
		{
			for(z=lz;z<hz;z++)
			{
				blockId=Level.getTile(x,y,z);
				blockData=Level.getData(x,y,z);
				for(i=0;i<filter.length;i++)
				{
					ff=filter[i].split(":");
					if(ff.length==2)
					{
						if(blockId==parseInt(ff[0]) && blockData==parseInt(ff[1]))
						{
							f=true;
						}
					}
					else
					{
						if(blockId==filter[i])
						{
							f=true;
						}
					}
				}
				if(!f)
				{
					if(fixblocks)
					{
						for(i=0;i<lastBlockid.length;i++)
						{
							if(blockId==lastBlockid[i])
							{
								lastblocks.push([x-jx,y-jy,z-jz,blockId,blockData]);
								f=true;
							}
						}
					}
					if(!f)
					{
						if(blockId==63 || blockId==68)
						{
							var arr=[blockData];
							for(i=0;i<4;i++)
							{
								arr.push("\""+new java.lang.String(Level.getSignText(x,y,z,i)).replace("\\","\\\\").replace("\"","\\\"")+"\"");
							}
							lastblocks.push([x-jx,y-jy,z-jz,blockId,"["+arr+"]"]);
						}
						else if(blockId==54)
						{
							var arr=[blockData];
							if(getChest)
							{
								for(i=0;i<54;i++)
								{
									arr.push(Level.getChestSlot(x,y,z,i));
									arr.push(Level.getChestSlotData(x,y,z,i));
									arr.push(Level.getChestSlotCount(x,y,z,i));
								}
							}
							code.push([x-jx,y-jy,z-jz,blockId,"["+arr+"]"]);
						}
						else
						{
							code.push([x-jx,y-jy,z-jz,blockId,blockData]);
						}
					}
					blocks++;
				}
				f=false;
			}
		}
	}
	for(i=0;i<lastblocks.length;i++)
	{
		code.push(lastblocks[i]);
	}
	return code.toString();
}
function CM(msg)
{
	clientMessage("<建筑代码生成器> "+msg);
}
function writeText(pth,data)
{
	try
	{
		var pathh=pth.split("/");
		var path="";
		for(i=0;i<pathh.length;i++)
		{
			if(i!=pathh.length-1)
			{
				path="/"+pathh[i];
			}
		}
		var dir = new java.io.File(path);
		if(!dir.exists())
		{
			dir.mkdirs();
		}
		var file=new java.io.File(pth);
		var Bytes=new java.lang.String(data).getBytes();
		if(file.exists())
		{
			if(file.isFile())
			{
				var writer = new java.io.FileOutputStream(file);
				writer.write(Bytes);
				writer.close();
				return true;
			}
			else
			{
				return false;
			}
		}
		else
		{
			file.createNewFile();
			var writer = new java.io.FileOutputStream(file);
			writer.write(Bytes);
			writer.close();
			return true;
		}
	}
	catch(err)
	{
		catchmsg(12,err);
		return false;
	}
}
function switchData(data)
{
	Data=data.split(" ");
	switch(Data[0])
	{
	case"getcode":
		if(x1==undefined)
		{
			CM("请先设置点一");
			return;
		}
		if(x2==undefined)
		{
			CM("请先设置点二");
			return;
		}
		if(x3==undefined)
		{
			CM("请先设置基准点");
			return;
		}
		ftt=ft.getText().toString();
		MODE=1;
		break;
	case"fix":
		if(x3==undefined)
		{
			CM("请先设置基准点");
			return;
		}
		var a=fixCode(x3,y3,z3,fx.getText());
		if(a!=-1)
		{
			CM("解析完毕 ,共放置 "+a+"个方块");
		}
		break;
	case"getChest":
		getChest=!getChest;
		break;
	case"FIX":
		Menu_open(new Array(
			{kind:"text",text:"建筑代码解析器",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"button",text:"开始解析",data:"fix"},
			{kind:"check",text:"金锭点击方块自动解析(先输完建筑代码再勾选)",data:"autofix",torf:autofix},
			{kind:"button",text:"粘贴",data:"pause"},
			{kind:"fixer"}));
		break;
	case"autofix":
		autofix=!autofix;
		if(autofix)
		{
			fixercode=fx.getText();
		}
		else
		{
			fixercode="";
		}
		break;
	case"pause":
		fx.setText(clip.getText());
		print("剪贴板内容已粘贴");
		break;
	case"fixblocks":
		fixblocks=!fixblocks;
		break;
	case"save":
		save(Data[1]);
		break;
	case"copy":
		copy(Data[1]);
		break;
	case"under":
		Level.setTile(fixPOS(Player.getX()),fixPOS(Player.getY())-2,fixPOS(Player.getZ()),1);
		CM("脚下已生成方块");
		break;
	case"gold":
		setHand(266,0);
		break;
	case"diamond":
		setHand(264,0);
		break;
	case"help":
		selectDialog("建筑代码生成器 - 使用帮助","本JS可以帮助其他JS作者快速生成一个建筑，或者与你的朋友共享建筑或备份自己的作品\n使用方法:\n  1、用铁剑点击要生成的建筑物两个相对点\n  2、用钻石点击选择一个基准点\n  3、调整过滤器筛选不要的方块\n  4、点击\"开始生成\"按钮获取建筑代码\n  5、点击\"保存为可调用代码\"按钮，将建筑代码保存到sd卡\n  6、打开sd卡中的\"建筑代码.txt\"文件，复制其中的内容到你的JS中\n  7、在你的JS中调用fixCode(基准点坐标)即可生成建筑！\n本JS也可解析建筑代码并生成建筑:\n  1、用钻石点击选择一个基准点\n  2、在编辑框内粘贴纯建筑代码(如[0,0,0,1,0])\n  3、点击\"开始解析\"按钮即可生成建筑",android.R.drawable.stat_notify_chat,"确定","","","");
		break;
	}
}
function fixCode(jx,jy,jz,codee)
{
	var code="";
	var a=0;
	try
	{
		eval("code="+codee);
	}
	catch(err)
	{
		print("不是标准的建筑代码！");
		return -1;
	}
	for(i=0;i<code.length;i=i+5)
	{
		if(code[i+3]==63 || code[i+3]==68)
		{
			Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4][0]);
			for(ii=1;ii<code[i+4].length;ii++)
			{
				Level.setSignText(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,ii-1,code[i+4][ii]);
			}
		}
		else if(code[i+3]==54)
		{
			Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4][0]);
			var arr=code[i+4];
			arr.shift();
			for(ii=0;ii<arr.length;ii=ii+3)
			{
				Level.setChestSlot(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,ii/3,arr[ii],arr[ii+1],arr[ii+2]);
			}
		}
		else
		{
			Level.setTile(parseInt(code[i+0])+jx,parseInt(code[i+1])+jy,parseInt(code[i+2])+jz,code[i+3],code[i+4]);
		}
		a++;
    }
    return a;
}
//**********************************************************打开菜单**********************************************************
function Menu_open(MenuData)
{
	Menu_make(MenuData).showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}
function Menu_make(MenuData)//打开新菜单
{
	try{
		var menu = new android.widget.PopupWindow();
		menu.setFocusable(true);
		var layout = new android.widget.LinearLayout(ctx);
		layout.setOrientation(1);
		var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
		for(var i=0;i<MenuData.length;i++)
		{
			switch(MenuData[i].kind)
			{
			case"text":
				Menu_addText(layout,textParams,MenuData[i].text,MenuData[i].color,MenuData[i].size);
				break;
			case"button":
				Menu_addButton(layout, MenuData[i].text, MenuData[i].data,MenuData[i].color,MenuData[i].size);
				break;
			case"check":
				Menu_addCheck(layout,MenuData[i].text,MenuData[i].data,MenuData[i].torf,MenuData[i].color,MenuData[i].size);
				break;
			case"filter":
				ft=new android.widget.EditText(ctx);
				ft.setText(ftt);
				layout.addView(ft);
				break;
			case"fixer":
				fx=new android.widget.EditText(ctx);
				fx.setHint("请输入建筑代码");
				fx.setText(fixercode);
				layout.addView(fx);
				break;
			default:
				Menu_addText(layout,textParams,"[组件不存在]",android.graphics.Color.RED,16);
				break;
			}
		}
		var closebutton = new android.widget.Button(ctx);
		var btnParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
		btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
		closebutton.setLayoutParams(btnParams);
		closebutton.setText("X");
		closebutton.setWidth(18);
		closebutton.setHeight(18);
		closebutton.setOnClickListener(new android.view.View.OnClickListener(
		{
			onClick: function()
			{
				menu.dismiss();
				menu=null;
			}
		}));
		var scrollview = new android.widget.ScrollView(ctx);
		var mlayout = new android.widget.RelativeLayout(ctx); 
		scrollview.setPadding(dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5));
		scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
		scrollview.addView(layout);
		mlayout.addView(scrollview);
		mlayout.addView(closebutton);
		menu.setContentView(mlayout);
		menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/3);
		menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
		menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK));
		return menu;
		}catch(err){
			catchmsg(10,err);
		}
}
function Menu_addText(layout,Params,text,color,size)//添加文本
{
	var Text = new android.widget.TextView(ctx);
	Text.setTextSize(size);
	if(color!="" && color!=undefined)
	{
		Text.setTextColor(color);
	}
	Text.setText(text);
	Text.setLayoutParams(Params);
	layout.addView(Text);
}
function Menu_addButton(layout,text,data,color,size)//添加按钮
{
	var button = new android.widget.Button(ctx);
	button.setText(text);
	if(color!="" && color!=undefined)
	{
		button.setTextColor(color);
	}
	if(size!=undefined)
	{
		button.setTextSize(size);
	}
	//button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	button.setOnClickListener(new android.view.View.OnClickListener({
		onClick: function(){
			switchData(data);
		}
	}));
	layout.addView(button);
}
function Menu_addCheck(layout,text,data,isch,color,size)//添加选择框
{
	var Check = new android.widget.CheckBox(ctx);
	Check.setText(text);
	Check.setChecked(isch);
	if(color!="" && color!=undefined)
	{
		Check.setTextColor(color);
	}
	if(size!=undefined)
	{
		Check.setTextSize(size);
	}
	//Check.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	Check.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener() {
		onCheckedChanged: function(){
			switchData(data);
		}
	});
	layout.addView(Check);
}
