//本js由风鸟制作！严禁盗版或修改版权！！
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var clip=null;
var build="Build #0004";
var first=true;
var msg="实体模型制作器\n由风鸟制作，盗版杀无赦！！";
var MainWindow=null;
var mobid=-1,render;
var parts=[];
var mobfollow=true,moblock=false,moblocky=0,moblockp=0,silent=false;
var sets=[],c2m="";
var isGame=false;
var EDITBOX=null,EDITBOXES=null;
function newLevel()
{
	if(isGame)
	{
		return;
	}
	isGame=true;
	if(first)
	{
		print(msg);
		GUI_init();
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
				button.setText("M");
				button.setOnClickListener(new android.view.View.OnClickListener({
					onClick:function(viewarg)
					{
						var arr=new Array(
							{kind:"text",text:"实体模型制作器",color:"",size:24},
							{kind:"text",text:"by 风鸟",color:"",size:16},
							{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
							{kind:"button",text:"创建/导入/关闭模型",data:"Menu_Input"},
							{kind:"button",text:"添加块",data:"Dialog_addBox"},
							{kind:"button",text:"块管理",data:"Menu_BoxEdit"},
							{kind:"button",text:"设置材质Offset",data:"Dialog_setTextureOffset"},
							{kind:"button",text:"模型清除工具",data:"Menu_Clear"},
							{kind:"button",text:"查看当前模型ID",data:"showID"},
							{kind:"button",text:"演示实体管理",data:"Menu_ShowMob"},
							{kind:"button",text:"输出模型",data:"Menu_Output"});
						Menu_open(arr);
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx, 42));
				MainWindow.setHeight(dip2px(ctx, 42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 0,dip2px(ctx, 85));
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
	if(!isGame)
	{
		return;
	}
	isGame=false;
	mobid=-1;
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
		selectDialog("实体模型制作器 - "+build+" - 出现错误",msge,android.R.drawable.stat_notify_error,"确定","退出存档","","ModPE.leaveGame()");
		clientMessage("实体模型制作器 - "+build+" - 出现错误\n"+msge);
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
function inputDialog(ttext1,ttext2,text1,htext1,text2,htext2,title,btn1text,btn2text,data)//输入型Dialog
{
	try{
		var layout = new android.widget.LinearLayout(ctx);
		var btn1 = new android.widget.Button(ctx);
		var btn2 = new android.widget.Button(ctx);
		var Text1=null,Text2=null;
		btn1.setText(btn1text);
		btn2.setText(btn2text);
		if(ttext1)
		{
			Text1=new android.widget.EditText(ctx);
			Text1.setHint(htext1);
			if(text1!="")
			{
				Text1.setText(text1);
			}
		}
		if(ttext2)
		{
			Text2=new android.widget.EditText(ctx);
			Text2.setHint(htext2);
			if(text2!="")
			{
				Text2.setText(text2);
			}
		}
		layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		if(ttext1)
		{
			layout.addView(Text1);
		}
		if(ttext2)
		{
			layout.addView(Text2);
		}
		layout.addView(btn1);
		layout.addView(btn2);
		var Dialogw = new android.app.Dialog(ctx);
		Dialogw.setContentView(layout);
		Dialogw.setTitle(title);
		btn1.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			var temptext="";
			if(ttext1)
			{
				temptext=temptext+Text1.getText();
			}
			if(ttext2)
			{
				temptext=temptext+" "+Text2.getText();
			}
			if(temptext=="" || temptext==" ")
			{
				CM("请勿输入空参数","red");
			}	
			else
			{
				switchData(data+temptext);
			}
			Dialogw.dismiss();
		}});
		btn2.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			Dialogw.dismiss();
		}
		});
		Dialogw.show();
	}catch(err){
		catchmsg(10,err);
	}
}
function setTextureOffsetDialog()
{
	try{
		var layout=new android.widget.LinearLayout(ctx);
		var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
		layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		layout.addView(Menu_makeText(textParams,"要设置的部分:","",16));
		var Spinner=new android.widget.Spinner(ctx);
		var names=["head","body","leftArm","rightArm","leftLeg","rightLeg"];
		Spinner.setAdapter(new android.widget.ArrayAdapter(ctx,android.R.layout.simple_spinner_item,new java.lang.String(names.toString()).split(",")));
		layout.addView(Spinner);
		var text1=new android.widget.EditText(ctx);
		text1.setHint("X           ");
		var text2=new android.widget.EditText(ctx);
		text2.setHint("Y           ");
		var layout2=new android.widget.LinearLayout(ctx);
		layout2.addView(text1);
		layout2.addView(text2);
		layout.addView(layout2);
		layout.addView(Menu_makeText(textParams,"是否透明:","",16));
		var Spinner2=new android.widget.Spinner(ctx);
		Spinner2.setAdapter(new android.widget.ArrayAdapter(ctx,android.R.layout.simple_spinner_item,new java.lang.String("true,false").split(",")));
		layout.addView(Spinner2);
		var btn1 = new android.widget.Button(ctx);
		var btn2 = new android.widget.Button(ctx);
		btn1.setText("添加");
		btn2.setText("取消");
		layout.addView(btn1);
		layout.addView(btn2);
		
		text1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		text2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		
		var Dialogw = new android.app.Dialog(ctx);
		Dialogw.setContentView(layout);
		Dialogw.setTitle("设置材质Offset");
		btn1.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			try{
			switchData("setTextureOffset "+Spinner.getSelectedItem().replace(" ","")+" "+text1.getText()+" "+text2.getText()+" "+Spinner2.getSelectedItem().replace(" ",""));
			}catch(err){catchmsg(-1,err);}
			Dialogw.dismiss();
		}});
		btn2.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			Dialogw.dismiss();
		}
		});
		Dialogw.show();
	}catch(err){
		catchmsg(10,err);
	}
}
function addBoxDialog()
{
	try{
		var layout = new android.widget.LinearLayout(ctx);
		var textParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		textParams.setMargins(dip2px(ctx, 5), 0, 0, 0);
		layout.setOrientation(android.widget.LinearLayout.VERTICAL);
		layout.addView(Menu_makeText(textParams,"添加到:","",16));
		var Spinner=new android.widget.Spinner(ctx);
		var names=["head","body","leftArm","rightArm","leftLeg","rightLeg"];
		Spinner.setAdapter(new android.widget.ArrayAdapter(ctx,android.R.layout.simple_spinner_item,new java.lang.String(names.toString()).split(",")));
		layout.addView(Spinner);
		var text1=new android.widget.EditText(ctx);
		text1.setHint("X       ");
		var text2=new android.widget.EditText(ctx);
		text2.setHint("Y       ");
		var text3=new android.widget.EditText(ctx);
		text3.setHint("Z       ");
		var layout2 = new android.widget.LinearLayout(ctx);
		layout2.addView(text1);
		layout2.addView(text2);
		layout2.addView(text3);
		layout.addView(layout2);
		var text4=new android.widget.EditText(ctx);
		text4.setHint("长度");
		var text5=new android.widget.EditText(ctx);
		text5.setHint("宽度");
		var text6=new android.widget.EditText(ctx);
		text6.setHint("厚度");
		var text7=new android.widget.EditText(ctx);
		text7.setHint("缩放比例");
		var layout2 = new android.widget.LinearLayout(ctx);
		layout2.addView(text4);
		layout2.addView(text5);
		layout2.addView(text6);
		layout2.addView(text7);
		layout.addView(layout2);
		layout.addView(Menu_makeText(textParams,"提示:可以先添加，然后在块操作里用拖动条调整","",16));
		var btn1 = new android.widget.Button(ctx);
		var btn2 = new android.widget.Button(ctx);
		btn1.setText("添加");
		btn2.setText("取消");
		layout.addView(btn1);
		layout.addView(btn2);
		
		text1.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		text2.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		text3.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		text4.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		text5.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		text6.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		text7.setInputType(android.text.InputType.TYPE_CLASS_NUMBER);
		text7.setText("1");
		
		var Dialogw = new android.app.Dialog(ctx);
		Dialogw.setContentView(layout);
		Dialogw.setTitle("添加块");
		btn1.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			try{
			switchData("addBox "+Spinner.getSelectedItem().replace(" ","")+" "+text1.getText()+" "+text2.getText()+" "+text3.getText()+" "+text4.getText()+" "+text5.getText()+" "+text6.getText()+" "+text7.getText());
			}catch(err){catchmsg(-1,err);}
			Dialogw.dismiss();
		}});
		btn2.setOnClickListener(new android.view.View.OnClickListener(){
		onClick: function(){
			Dialogw.dismiss();
		}
		});
		Dialogw.show();
	}catch(err){
		catchmsg(10,err);
	}
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
		
		preventDefault();
	}
	if(itemId==264)
	{
		
		preventDefault();
	}
}
function fixPos(pos)
{
	if(pos<0)
	{
		return pos-1;
	}
	return pos;
}
function getColor(name)//获取颜色
{
	switch(name)
	{
		case"red":
			return ChatColor.RED;
			break;
		case"yellow":
			return ChatColor.YELLOW;
			break;
		case"blue":
			return ChatColor.BLUE;
			break;
		case"green":
			return ChatColor.GREEN;
			break;
		case"black":
			return ChatColor.BLACK;
			break;
		case"white":
			return ChatColor.WHITE;
			break;
		case"gray":
			return ChatColor.GRAY;
			break;
		default:
			return ChatColor.WHITE;
	}
}
function CM(msg,color)//彩字输出
{
	if(silent)
	{
		return;
	}
	clientMessage(getColor(color)+msg);
}
function readFile(path)
{
	var file=new java.io.File(path);
	if(file.isFile() && file.exists())
	{
		var outputstr="";
		var read = new java.io.InputStreamReader(new java.io.FileInputStream(file),"UTF-8");
		var bufferedReader = new java.io.BufferedReader(read); 
		var lineTxt = null; 
		while((lineTxt = bufferedReader.readLine()) != null)
		{ 
			outputstr=outputstr+lineTxt+"\n";
		}
		read.close();
		return outputstr;
	}
	else
	{
		return "";
	}
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
	case"loadrender":
		if(render!=null)
		{
			CM("模型已经创建 /导入过 ！ID :"+render.getRenderType(),"yellow");
			return;
		}
		if(Data.length==2)
		{
			render=Renderer.get(parseInt(Data[1]));
			CM("模型已载入 ，ID :"+Data[1],"green");
		}
		else
		{
			inputDialog(true,false,"","请输入模型ID","","","从ID载入模型","确定","取消","loadrender ");
		}
		break;
	case"createrender":
		if(render!=null)
		{
			CM("模型已经创建 /导入过 ！ID :"+render.getRenderType(),"yellow");
			return;
		}
		render=Renderer.createHumanoidRenderer();
		//clearRender();
		CM("新模型已创建 ，ID :"+render.getRenderType(),"green");
		break;
	case"createmob":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		if(mobid!=-1)
		{
			Entity.remove(mobid);
			mobid=-1;
		}
		var a=(getYaw()%360)*Math.PI/180,b=getPitch()*Math.PI/180;
		var xv=-Math.sin(a)*Math.cos(b),yv=-Math.sin(b),zv=Math.cos(a)*Math.cos(b);
		mobid=Level.spawnMob(Player.getX()+xv*2.1,Player.getY()+yv*2.1-0.5,Player.getZ()+zv*2.1,12);
		Entity.setRenderType(mobid,render.getRenderType());
		CM("演示实体已创建","green");
		break;
	case"clear":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		if(Data[1]=="all")
		{
			clearRender();
			parts=[];
			CM("当前模型已清空","red");
		}
		else
		{
			render.getModel().getPart(Data[1]).clear();
			for(var i=0;i<parts.length;i=i+10)
			{
				if(parts[i+1]==Data[1])
				{
					parts.splice(i,10);
					i--;
				}
			}
			CM("已清除"+Data[1],"red");
		}
		parts.push(Data[0],Data[1],Data[2],Data[3],Data[4],Data[5],Data[6],Data[7],Data[8],Data[9]);
		break;
	case"showID":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		CM("当前模型ID :"+render.getRenderType(),"green");
		break;
	case"mobfollow":
		mobfollow=!mobfollow;
		break;
	case"addBox":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		parts.push(Data[0],Data[1],Data[2],Data[3],Data[4],Data[5],Data[6],Data[7],Data[8],Data[9]);
		changeBoxes();
		CM("已添加到"+Data[1]+" ,ID :"+parts.length/10,"green");
		break;
	case"setTextureOffset":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		render.getModel().getPart(Data[1]).setTextureOffset(Number(Data[2]),Number(Data[3]),Boolean(Data[4]));
		parts.push(Data[0],Data[1],Data[2],Data[3],Data[4],Data[5],Data[6],Data[7],Data[8],Data[9]);
		CM("已设置"+Data[1]+"的Offset","green");
		break;
	case"Dialog_addBox":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		addBoxDialog();
		break;
	case"SkinDialog":
		if(mobid==-1)
		{
			CM("请先创建一个演示实体","yellow");
			return;
		}
		inputDialog(true,false,"mob/char.png","请输入皮肤文件游戏内路径，不能有空格","","","设置演示实体皮肤","确定","取消","setSkin ");
		break;
	case"setSkin":
		if(mobid==-1)
		{
			CM("请先创建一个演示实体","yellow");
			return;
		}
		Entity.setMobSkin(mobid,Data[1]);
		CM("皮肤已设置","green");
		break;
	case"Dialog_setTextureOffset":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		setTextureOffsetDialog();
		break;
	case"copy":
		if(Data[1]=="in")
		{
			clip.setText("["+parts.toString()+"]");
			print("已复制到剪贴板");
		}
		else
		{
			clip.setText("function code2model(){var render=Renderer.createHumanoidRenderer();var Data=\""+parts.toString()+'\".split(",");for(var i=0;i<Data.length;i=i+10){switch(Data[i]){case"addBox":render.getModel().getPart(Data[i+1]).addBox(Number(Data[i+2]),Number(Data[i+3]),Number(Data[i+4]),Number(Data[i+5]),Number(Data[i+6]),Number(Data[i+7]),Number(Data[i+8]));break;case"clear":if(Data[i+1]=="all"){var model=render.getModel();model.getPart("head").clear();model.getPart("body").clear();model.getPart("leftArm").clear();model.getPart("rightArm").clear();model.getPart("leftLeg").clear();model.getPart("rightLeg").clear();}else{render.getModel().getPart(Data[i+1]).clear();};break;case"setTextureOffset":render.getModel().getPart(Data[i+1]).setTextureOffset(Number(Data[i+2]),Number(Data[i+3]),Boolean(Data[i+4]));break;};};return render.getRenderType();};');
			print("已复制到剪贴板");
		}
		break;
	case"save":
		if(Data[1]=="in")
		{
			if(writeText(new android.os.Environment.getExternalStorageDirectory() +"/实体模型_内部解析代码.txt","["+parts.toString()+"]"))
			{
				print("已保存到 "+new android.os.Environment.getExternalStorageDirectory() +"/实体模型_内部解析代码.txt");
			}
			else
			{
				print("保存失败！");
			}
		}
		else
		{
			if(writeText(new android.os.Environment.getExternalStorageDirectory() +"/实体模型_可调用代码.txt","function code2model(){var render=Renderer.createHumanoidRenderer();var Data=\""+parts.toString()+'\".split(",");for(var i=0;i<Data.length;i=i+10){switch(Data[i]){case"addBox":render.getModel().getPart(Data[i+1]).addBox(Number(Data[i+2]),Number(Data[i+3]),Number(Data[i+4]),Number(Data[i+5]),Number(Data[i+6]),Number(Data[i+7]),Number(Data[i+8]));break;case"clear":if(Data[i+1]=="all"){var model=render.getModel();model.getPart("head").clear();model.getPart("body").clear();model.getPart("leftArm").clear();model.getPart("rightArm").clear();model.getPart("leftLeg").clear();model.getPart("rightLeg").clear();}else{render.getModel().getPart(Data[i+1]).clear();};break;case"setTextureOffset":render.getModel().getPart(Data[i+1]).setTextureOffset(Number(Data[i+2]),Number(Data[i+3]),Boolean(Data[i+4]));break;};};return render.getRenderType();};'))
			{
				print("已保存到 "+new android.os.Environment.getExternalStorageDirectory() +"/实体模型_可调用代码.txt");
			}
			else
			{
				print("保存失败！");
			}
		}
		break;
	case"close":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		render=null;
		parts=[];
		if(mobid!=-1)
		{
			Entity.remove(mobid);
		}
		CM("当前模型已关闭","yellow");
		break;
	case"moblock":
		moblock=!moblock;
		moblocky=Entity.getYaw(mobid);
		moblockp=Entity.getPitch(mobid);
		break;
	case"clipfix":
		if(render!=null)
		{
			CM("模型已经创建 /导入过 ！ID :"+render.getRenderType(),"yellow");
			return;
		}
		CM("此功能尚未修复","red");
		return;
		parts=clip.getText().replace("[","").replace("]","").split(",");
		changeBoxes();
		CM("已从剪贴板内代码导入","green");
		break;
	case"removeBox":
		parts.splice(Data[2],10);
		CM("已删除ID为"+Data[2]/10+"的块","yellow");
		EDITBOX.dismiss();
		EDITBOXES.dismiss();
		switchData("Menu_BoxEdit");
		changeBoxes();
		break;
	case"Menu_Clear":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		Menu_open(Menus_ClearMenu);
		break;
	case"Menu_Output":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		Menu_open(Menus_OutputMenu);
		break;
	case"Menu_ShowMob":
		if(render==null)
		{
			CM("请先创建或加载一个模型","yellow");
			return;
		}
		Menu_open(new Array(
		{kind:"text",text:"演示实体管理",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"创建演示实体加载模型",data:"createmob"},
		{kind:"button",text:"设置演示实体皮肤",data:"SkinDialog"},
		{kind:"check",text:"演示实体跟随",data:"mobfollow",torf:mobfollow},
		{kind:"check",text:"锁定实体视角",data:"moblock",torf:moblock}));
		break;
	case"Menu_Input":
		Menu_open(Menus_InputMenu);
		break;
	case"editBox":
		try{
		Menus_EditBoxMenu=new Array(
			{kind:"text",text:"块操作",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"text",text:"所在部分:"+Data[1]+",ID:"+Data[2]/10,color:"",size:16},
			{kind:"boxEditor",id:Data[2]},
			{kind:"button",text:"删除此块",data:"removeBox "+Data[1]+" "+Data[2],color:android.graphics.Color.YELLOW});
		EDITBOX=Menu_open(Menus_EditBoxMenu);
			}catch(err){catchmsg(-1,err);}
		break;
	case"Menu_BoxEdit":
		Menus_BoxEditMenu=new Array(
			{kind:"text",text:"块管理",color:"",size:24},
			{kind:"text",text:"by 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16});
		for(var i=0;i<parts.length;i=i+10)
		{
			if(parts[i]=="addBox")
			{
				Menus_BoxEditMenu.push({kind:"button",text:"["+parts[i+1]+"]ID:"+i/10,data:"editBox "+parts[i+1]+" "+i});
			}
		}
		EDITBOXES=Menu_open(Menus_BoxEditMenu);
		break;
	}
}
function entityRemovedHook(e)
{
	
	if(mobid==e)
	{
		mobid=-1;
		CM("警告 :演示实体被移除","red");
	}
}
function changeBoxes()
{
//	clearRender();
	render=Renderer.createHumanoidRenderer();
	var Data=parts;
	for(var i=0;i<Data.length;i=i+10)
	{
		switch(Data[i])
		{
		case"addBox":
			render.getModel().getPart(Data[i+1]).addBox(Number(Data[i+2]),Number(Data[i+3]),Number(Data[i+4]),Number(Data[i+5]),Number(Data[i+6]),Number(Data[i+7]),Number(Data[i+8]));
			break;
		case"clear":
			if(Data[i+1]=="all")
			{
				clearRender();
			}
			else
			{
				render.getModel().getPart(Data[i+1]).clear();
			}
			break;
		case"setTextureOffset":
			render.getModel().getPart(Data[i+1]).setTextureOffset(Number(Data[i+2]),Number(Data[i+3]),Boolean(Data[i+4]));
			break;
		}
	}
	Entity.setRenderType(mobid,render.getRenderType());
}
function modTick()
{
	if(mobid!=-1)
	{
		if(moblock)
		{
			Entity.setRot(mobid,0,0);//moblockp,moblocky);
		}
		if(mobfollow)
		{
			var yaw=Entity.getYaw(Player.getEntity()),pitch=Entity.getPitch(Player.getEntity());
			var mobidDirection={x:-Math.sin(java.lang.Math.toRadians(yaw))*Math.cos(java.lang.Math.toRadians(pitch)),y:-Math.sin(java.lang.Math.toRadians(pitch)),z:Math.cos(java.lang.Math.toRadians(yaw))*Math.cos(java.lang.Math.toRadians(pitch))};
			if(Player.getX()+(mobidDirection.x*3)-Entity.getX(mobid)>0.5||Player.getX()+(mobidDirection.x*3)-Entity.getX(mobid)<-0.5||Player.getY()+(mobidDirection.y*3)-Entity.getY(mobid)>0.5||Player.getY()+(mobidDirection.y*3)-Entity.getY(mobid)<-0.5||Player.getZ()+(mobidDirection.z*3)-Entity.getZ(mobid)>0.5||Player.getZ()+(mobidDirection.z*3)-Entity.getZ(mobid)<-0.5)
			{
				Entity.setVelX(mobid,(Player.getX()+(mobidDirection.x*3)-Entity.getX(mobid))/5)
				Entity.setVelY(mobid,(Player.getY()+(mobidDirection.y*3)-Entity.getY(mobid))/5);
				Entity.setVelZ(mobid,(Player.getZ()+(mobidDirection.z*3)-Entity.getZ(mobid))/5);
			}
			else
			{
				Entity.setVelX(mobid,0);
				Entity.setVelY(mobid,0);
				Entity.setVelZ(mobid,0);
			}
		}
		else
		{
			Entity.setVelX(mobid,0);
			Entity.setVelY(mobid,0);
			Entity.setVelZ(mobid,0);
		}
	}
	else
	{
		moblock=false;
	}
}
function clearRender()
{
	var model=render.getModel();
	model.getPart("head").clear();
	model.getPart("body").clear();
	model.getPart("leftArm").clear();
	model.getPart("rightArm").clear();
	model.getPart("leftLeg").clear();
	model.getPart("rightLeg").clear();
}
function GUI_init()
{
	Menus_ClearMenu=new Array(
		{kind:"text",text:"清除模型",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"清除头",data:"clear head"},
		{kind:"button",text:"清除身体",data:"clear body"},
		{kind:"button",text:"清除左手",data:"clear leftArm"},
		{kind:"button",text:"清除右手",data:"clear rightArm"},
		{kind:"button",text:"清除左腿",data:"clear leftLeg"},
		{kind:"button",text:"清除右腿",data:"clear rightLeg"},
		{kind:"button",text:"清空当前模型",data:"clear all",color:android.graphics.Color.YELLOW});
	Menus_OutputMenu=new Array(
		{kind:"text",text:"输出模型",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"复制可调用代码",data:"copy call"},
		{kind:"button",text:"写出可调用代码",data:"save call"},
		{kind:"button",text:"复制内部解析代码",data:"copy in"},
		{kind:"button",text:"写出内部解析代码",data:"save in"});
	Menus_InputMenu=new Array(
		{kind:"text",text:"创建/导入/关闭模型",color:"",size:24},
		{kind:"text",text:"by 风鸟",color:"",size:16},
		{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
		{kind:"button",text:"创建新的人模型",data:"createrender"},
		//{kind:"button",text:"加载游戏内模型",data:"loadrender"},
		//{kind:"button",text:"从剪贴板内代码导入",data:"clipfix"},
		{kind:"button",text:"关闭当前模型",data:"close",color:android.graphics.Color.YELLOW}/*,
		{kind:"text",text:"手动输入代码:",size:16},
		{kind:"inputer"}*/);
}
//**********************************************************打开菜单**********************************************************
function Menu_open(MenuData)
{
	var menu=Menu_make(MenuData)
	menu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
	return menu;
}
function Menu_make(MenuData,a)//打开新菜单
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
			case"boxEditor":
				var id=Number(MenuData[i].id)+2;
				var text=Menu_makeText(textParams,"X:"+parts[id],"",16);
				var SeekBar=new android.widget.SeekBar(ctx);
				SeekBar.setMax(100);
				SeekBar.setProgress(Number(parts[id])+50);
				SeekBar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						parts[id]=p2-50;
						text.setText("X:"+parts[id]);
						changeBoxes();
					}
				});
				layout.addView(text);
				layout.addView(SeekBar);
				
				var id2=Number(MenuData[i].id)+3;
				var text2=Menu_makeText(textParams,"Y:"+parts[id2],"",16);
				var SeekBar2=new android.widget.SeekBar(ctx);
				SeekBar2.setMax(100);
				SeekBar2.setProgress(Number(parts[id2])+50);
				SeekBar2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						parts[id2]=p2-50;
						text2.setText("Y:"+parts[id2]);
						changeBoxes();
					}
				});
				layout.addView(text2);
				layout.addView(SeekBar2);
				
				var id3=Number(MenuData[i].id)+4;
				var text3=Menu_makeText(textParams,"Z:"+parts[id3],"",16);
				var SeekBar3=new android.widget.SeekBar(ctx);
				SeekBar3.setMax(100);
				SeekBar3.setProgress(Number(parts[id3])+50);
				SeekBar3.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						parts[id3]=p2-50;
						text3.setText("Z:"+parts[id3]);
						changeBoxes();
					}
				});
				layout.addView(text3);
				layout.addView(SeekBar3);
				
				var id4=Number(MenuData[i].id)+5;
				var text4=Menu_makeText(textParams,"长:"+parts[id4],"",16);
				var SeekBar4=new android.widget.SeekBar(ctx);
				SeekBar4.setMax(100);
				SeekBar4.setProgress(Number(parts[id4])+50);
				SeekBar4.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						parts[id4]=p2-50;
						text4.setText("长:"+parts[id4]);
						changeBoxes();
					}
				});
				layout.addView(text4);
				layout.addView(SeekBar4);
				
				var id5=Number(MenuData[i].id)+6;
				var text5=Menu_makeText(textParams,"宽:"+parts[id5],"",16);
				var SeekBar5=new android.widget.SeekBar(ctx);
				SeekBar5.setMax(100);
				SeekBar5.setProgress(Number(parts[id5])+50);
				SeekBar5.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						parts[id5]=p2-50;
						text5.setText("宽:"+parts[id5]);
						changeBoxes();
					}
				});
				layout.addView(text5);
				layout.addView(SeekBar5);
				
				var id6=Number(MenuData[i].id)+7;
				var text6=Menu_makeText(textParams,"厚:"+parts[id6],"",16);
				var SeekBar6=new android.widget.SeekBar(ctx);
				SeekBar6.setMax(100);
				SeekBar6.setProgress(Number(parts[id6])+50);
				SeekBar6.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						parts[id6]=p2-50;
						text6.setText("厚:"+parts[id6]);
						changeBoxes();
					}
				});
				layout.addView(text6);
				layout.addView(SeekBar6);
				
				var id7=Number(MenuData[i].id)+8;
				var text7=Menu_makeText(textParams,"放大倍数:"+parts[id7],"",16);
				var SeekBar7=new android.widget.SeekBar(ctx);
				SeekBar7.setMax(40);
				SeekBar7.setProgress(Number(parts[id7]));
				SeekBar7.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
				{
					onProgressChanged:function(p1,p2,p3)
					{
						parts[id7]=p2;
						text7.setText("放大倍数:"+parts[id7]);
						changeBoxes();
					}
				});
				layout.addView(text7);
				layout.addView(SeekBar7);
				
				
				break;
			default:
				Menu_addText(layout,textParams,"[组件"+MenuData[i].kind+"不存在]",android.graphics.Color.RED,16);
				break;
			}
		}
		var scrollview = new android.widget.ScrollView(ctx);
		var mlayout = new android.widget.RelativeLayout(ctx); 
		scrollview.setPadding(dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5));
		scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
		scrollview.addView(layout);
		mlayout.addView(scrollview);
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
	layout.addView(Menu_makeText(Params,text,color,size));
}
function Menu_makeText(Params,text,color,size)//生成文本
{
	var Text = new android.widget.TextView(ctx);
	Text.setTextSize(size);
	if(color!="" && color!=undefined)
	{
		Text.setTextColor(color);
	}
	Text.setText(text);
	Text.setLayoutParams(Params);
	return Text;
}
function Menu_makeEditText(Params,text,color,size,hint)//生成编辑框
{
	var Text = new android.widget.EditText(ctx);
	Text.setTextSize(size);
	if(color!="" && color!=undefined)
	{
		Text.setTextColor(color);
	}
	Text.setText(text);
	Text.setHint(hint);
	Text.setLayoutParams(Params);
	return Text;
}
function Menu_addButton(layout,text,data,color,size)//添加按钮
{
	layout.addView(Menu_makeButton(text,data,color,size));
}
function Menu_makeButton(text,data,color,size)//生成按钮
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
	return button;
}
function Menu_addCheck(layout,text,data,isch,color,size)//添加选择框
{
	layout.addView(Menu_makeCheck(text,data,isch,color,size));
}
function Menu_makeCheck(text,data,isch,color,size)//生成选择框
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
	return Check;
}








//"function code2model(){var render=Renderer.createHumanoidRenderer();var Data=\""+parts.toString()+"\".split(\",\");for(var i=0;i<Data.length;i=i+10){switch(Data[i]){case\"addBox\":render.getModel().getPart(Data[i+1]).addBox(Number(Data[i+2]),Number(Data[i+3]),Number(Data[i+4]),Number(Data[i+5]),Number(Data[i+6]),Number(Data[i+7]),Number(Data[i+8]));break;case\"clear\":if(Data[i+1]==\"all\"){clearRender();}else{render.getModel().getPart(Data[i+1]).clear();};break;case\"setTextureOffset\":render.getModel().getPart(Data[i+1]).setTextureOffset(Number(Data[i+2]),Number(Data[i+3]),Boolean(Data[i+4]));break;};};return render.getRenderType();};"
