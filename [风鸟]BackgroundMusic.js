/*本js由风鸟制作，请不要修改版权，非常感谢您的配合
BUG反馈或建议：
	联系QQ：1943601164（第一栏填写“ModPE Bug反馈”,“优惠码”一栏填写“Background Music”）
	搜索群“风鸟神教”加入（群验证填写“ModPE Bug反馈”）
	请在反馈时标明Build号、错误现象、出现方式
	
特别感谢：
	感谢张卓伟的Block Launcher启动器
	感谢MojangAB的MinecraftPE
	请有能力的人支持正版
	
转载说明：
	个人来说并不是很反对葫芦侠，多玩盒子等转载
	任何人均可转载，请注明原作者
*/
//********************************变量声明区开始********************************
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var isgame=false;//虽然续修复了但说不定以后启动器还抽风，留下
var musicPlayer=new android.media.MediaPlayer(),bgm={on:false,needsleep:true,isplaying:false,mustplayfinish:true,time:0,fulltime:0,nowplaying:-1,random:true,list:new Array()};//背景音乐
var build="Build #0001";
var MainWindow = null;//主按钮

function modTick()
{
	if(!isgame)
	{
		return;
	}
	if(bgm.on)
	{
		if(!bgm.needsleep && !bgm.isplaying)
		{
			bgm.fulltime=0;
		}
		if(!bgm.mustplayfinish)
		{
			bgm.time++;
			if(bgm.time>=bgm.fulltime)
			{
				bgm.time=0;
				if(!bgm.isplaying)
				{
					bgm.fulltime=Math.random()*100*20+200;
					playNew();
				}
				else
				{
					stopMusic();
					bgm.fulltime=(Math.random()*60)*20;
				}
				bgm.isplaying=!bgm.isplaying;
			}
		}
	}
}
function leaveGame()//退出存档
{
	if(!isgame)
	{
		return;
	}
	//重置功能
	isgame=false;
	bgm.isplaying=false,bgm.mustplayfinish=false,bgm.on=false;stopMusic();//停止BGM
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
function newLevel()//进入世界
{
	if(isgame)
	{
		return;
	}
	isgame=true;
	usecmd("bgm reloadlist");
	if(load2("bgm_on")=="true")
	{
		usecmd("bgm on");
	}
	if(load2("bgm_needsleep")=="true")
	{
		bgm.needsleep=true;
	}
	if(load2("bgm_mustplayfinish")=="true")
	{
		usecmd("bgm mustplayfinish");
	}
	if(load2("bgm_random")=="false")
	{
		bgm.random=false;
	}
	//载入按钮
	ctx.runOnUiThread(new java.lang.Runnable(
	{
		run: function()
		{
			try
			{
				MainWindow = new android.widget.PopupWindow(ctx);
				var layout = new android.widget.RelativeLayout(ctx);
				var button = new android.widget.Button(ctx);
				button.setText("M");
				button.setOnClickListener(new android.view.View.OnClickListener(
				{
					onClick:function(viewarg)
					{
						switchData("BGMMENU");
					}
				}));
				layout.addView(button);
				MainWindow.setContentView(layout);
				MainWindow.setWidth(dip2px(ctx, 42));
				MainWindow.setHeight(dip2px(ctx, 42));
				MainWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
				MainWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 86, 0);
			}
			catch(err)
			{
				catchmsg(10,err);
			}
		}
	}));
}
//********************************自定义函数区********************************
function playNew()//下一首音乐
{
	var a=0;
	if(bgm.random)
	{
		for(a=parseInt(bgm.list.length*Math.random());a>=bgm.list.length;a=parseInt(bgm.list.length*Math.random()));
		bgm.nowplaying=a;
	}
	else
	{
		a=bgm.nowplaying+1
		if(a>=bgm.list.length)
		{
			a=0;
		}
	}
	playMusic(bgm.list[a]);
}
function playMusic(path)//播放音乐
{
	try
	{
		musicPlayer.reset();
		musicPlayer.setDataSource(new android.os.Environment.getExternalStorageDirectory() + "/games/com.mojang/minecraftpe/supercheat/sounds/" + path);
		musicPlayer.prepare();
		musicPlayer.start();
	}
	catch(err)
	{
		catchmsg(-1,err);
	}
}
function stopMusic()//停止音乐
{
	if(musicPlayer.isPlaying())
	{
		musicPlayer.reset();
	}
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
function catchmsg(id,msg)//GUI报错
{
	selectDialog("BackgroundMusic - "+build+" - 出现错误",msg,android.R.drawable.stat_notify_error,"确定","退出存档","","ModPE.leaveGame()");
	clientMessage("BackgroundMusic - "+build+" - 出现错误\n"+msg);
}
function save2(name,Data)//保存数据(全局)
{
	writeText(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/datas/"+name+".supercheat_dat",Data);
}
function load2(name)//读取数据(全局)
{
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/datas/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
			return "";
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/supercheat/datas/"+name+".supercheat_dat");
		if(vfile.exists())
		{
			var reader = new java.io.BufferedReader(new java.io.FileReader(vfile),8192);
			var ttext=reader.readLine();
			reader.close();
			return ttext;
		}
		else
		{
			vfile.createNewFile();
			return "";
		}
	}
	catch(err)
	{
		catchmsg(12,err);
		return "";
	}
}
function dip2px(ctx, dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
function usecmd(cmd)//核心函数
{
	var Data = cmd.split(" ");
	switch(Data[0])
	{
	case"eval":
		var tmpt="";
		for(i=1;i<Data.length;i++)
		{
			if(i!=Data.length-1)
			{
				tmpt=tmpt+Data[i]+" ";
			}
			else
			{
				tmpt=tmpt+Data[i];
			}
		}
		try
		{
			lasteval=tmpt;
			eval("try{"+tmpt+"}catch(err){catchmsg(11,err)}");
		}
		catch(err)
		{
			catchmsg(11,err);
		}
		break;
	case"bgm":
		switch(Data[1])
		{
		case"on":
			if(!bgm.on)
			{
				if(bgm.list.length<1)
				{
					print("没有BGM文件！");
					return;
				}
				else
				{
					if(bgm.mustplayfinish)
					{
						playNew();
					}
					else
					{
						bgm.time=0;
						bgm.fulltime=30;
					}
				}
			}
			else
			{
				stopMusic();
			}
			bgm.on=!bgm.on;
			save2("bgm_on",bgm.on);
			break;
		case"random":
			bgm.random=!bgm.random;
			save2("bgm_random",bgm.random);
			break;
		case"reloadlist":
			bgm.list=new Array();
			var file=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/minecraftpe/supercheat/sounds/");
			if(!file.exists())
			{
				file.mkdirs();
			}
			var list=file.list();
			for(i=0;i<list.length;i++)
			{
				splits=list[i].split("/")[list[i].split("/").length-1];
				bgm.list.push(splits);
			}
			print("BGM列表已更新");
			break;
		case"needsleep":
			bgm.needsleep=!bgm.needsleep;
			save2("bgm_needsleep",bgm.needsleep);
			break;
		case"mustplayfinish":
			bgm.mustplayfinish=!bgm.mustplayfinish;
			musicPlayer.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener(
			{
				onCompletion:function(p1)
				{
					if(bgm.mustplayfinish)
					{
						if(bgm.needsleep)
						{
							new android.os.Handler().postDelayed(new java.lang.Runnable(
							{ 
								run: function()
								{
									try
									{
										if(bgm.mustplayfinish && bgm.on)
										{
											playNew();
										}
									}
									catch(err)
									{
										catchmsg(10,err);
									}
								}
							}),60000);
						}
						else
						{
							playNew();
						}
					}
				}
			}));
			if(bgm.on)
			{
				bgm.on=false;
				usecmd("bgm on");
			}
			save2("bgm_mustplayfinish",bgm.mustplayfinish);
			break;
		}
		break;
	}
}
//**********************************************************打开菜单**********************************************************
function switchData(Data)//GUI判断指令
{
	data=Data.split(" ");
	switch(data[0])
	{
	case"BGMMENU":
		var Menus_BGMMenu=new Array(
			{kind:"text",text:"背景音乐系统",color:"",size:24},
			{kind:"text",text:"Copyright © 2015 风鸟",color:"",size:16},
			{kind:"text",text:build,color:android.graphics.Color.GREEN,size:16},
			{kind:"check",text:"开启背景音乐",data:"bgm on",torf:bgm.on},
			{kind:"check",text:"完整播放每首BGM",data:"bgm mustplayfinish",torf:bgm.mustplayfinish},
			{kind:"check",text:"启用播放间隔(0-60秒)",data:"bgm needsleep",torf:bgm.needsleep},
			{kind:"check",text:"随机播放BGM",data:"bgm random",torf:bgm.random},
			{kind:"button",text:"刷新BGM列表",data:"bgm reloadlist"});
		var tmptext="当前BGM列表:";
		for(i=0;i<bgm.list.length;i++)
		{
			tmptext=tmptext+"\n - "+bgm.list[i];
		}
		if(tmptext=="当前BGM列表:")
		{
			tmptext="没有BGM文件！";
		}
		Menus_BGMMenu.push(
			{kind:"text",text:tmptext,color:android.graphics.Color.YELLOW,size:18},
			{kind:"button",text:"打开浏览器下载BGM文件包",data:"eval jumpToUrl(\"http://pan.baidu.com/s/1hq45Ope\");print(\"请打开“超级辅助”文件夹下载！\");"},
			{kind:"text",text:"下载BGM文件后请解压到/games/com.mojang/minecraftpe/supercheat/sounds/内（其他.mp3格式的文件也可以）",color:android.graphics.Color.GREEN,size:18},
			{kind:"text",text:"请不要在此文件夹内放入其他文件或创建目录",color:android.graphics.Color.YELLOW,size:18});
		Menu_open(Menus_BGMMenu);
		break;
	default:
		usecmd(Data);
		break;
	}
}
function jumpToUrl(url)//跳转到网页
{
	ctx.startActivity(android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(url)));
}
function selectDialog(title,text,icon,button1text,button2text,button1code,button2code)
{
	var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
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
				catchmsg(10,err);
			}
		}
	}));
}
//**********************************************************打开菜单**********************************************************
function Menu_open(MenuData)
{
	Menu_make(MenuData).showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
}
function Menu_make(MenuData)//打开新菜单
{
	try{
		var menu = new android.widget.PopupWindow(ctx);
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
			case"image":
				Menu_addImageView(layout,MenuData[i].base64);
				break;
			default:
				Menu_addText(layout,textParams,"[组件"+MenuData[i].kind+"不存在]",android.graphics.Color.RED,18);
				break;
			}
		}
		var closebutton = new android.widget.Button(ctx);
		var btnParams = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
		btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
		btnParams.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
	/*	closebutton.setLayoutParams(btnParams);
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
		}));*/
		var scrollview = new android.widget.ScrollView(ctx);
		var mlayout = new android.widget.RelativeLayout(ctx); 
		scrollview.setPadding(dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5), dip2px(ctx,5));
		scrollview.setLayoutParams(new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT, android.widget.RelativeLayout.LayoutParams.FILL_PARENT));
		scrollview.addView(layout);
		mlayout.addView(scrollview);
	//	mlayout.addView(closebutton);
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
			if((typeof data)=="function")
			{
				data();
			}
			else
			{
				switchData(data);
			}
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
function Menu_addImageView(layout,base64Data)//添加图片
{
	layout.addView(Menu_makeImageView(base64Data));
}
function Menu_makeImageView(base64Data)//生成图片
{
	var imgbase=android.util.Base64.decode(base64Data,0);
	var ImageView=new android.widget.ImageView(ctx);
	ImageView.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
	ImageView.setLayoutParams(new android.widget.LinearLayout.LayoutParams(-1,-1,1));
	ImageView.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(imgbase,0,imgbase.length));
	return ImageView;
}
