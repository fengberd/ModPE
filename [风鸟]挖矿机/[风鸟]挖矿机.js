/*本js由风鸟制作！严禁抄袭或修改版权！*/
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//公用ctx
var first=true;
//ID表：太阳能发电机，电池，挖矿机
var bids=[180,181,182];
var miniList=[[1,4],[2,3],[3],[4],[12],[13],[14],[15],[16,263],[21,351,4,6],[48],[49],[56,264],[73,331,0,6],[74,331,0,6],[82,337,0,4],[24],[121],[110,3],[129,388],[243,3]];//矿物定义
var mining_machines=[];//挖矿机
var batBoxs=[];//电池
var solar_generator=[];//太阳能发电机
function newLevel()
{
	if(first)
	{
		print(msg);
		first=false;
	}
	loadMachines();
}
function destroyBlock(x,y,z,side)
{
	var blockId=Level.getTile(x,y,z);
	
}
function useItem(x,y,z,itemId,blockId,side,itemData,blockData)
{
	if(itemId==bids[0] || itemId==bids[1] || itemId==bids[2] || itemId==bids[3])
	{
		var x=x,y=y,z=z;
		switch(side)
		{
		case 0:
			y--;
			break;
		case 1:
			y++;
			break;
		case 2:
			z--;
			break;
		case 3:
			z++;
			break;
		case 4:
			x--;
			break;
		case 5:
			x++;
			break;
		}
		var bid2=Level.getTile(x,y,z)
		if(bid2==0 || (bid2<=11 && bid2>=8))
		{
			switch(itemId)
			{
			case bids[0]:
				solar_generator.push({x:x,y:y,z:z,power:0});
				break;
			case bids[1]:
				batBoxs.push({x:x,y:y,z:z,power:0});
				break;
			case bids[2]:
				mining_machines.push({x:x,y:y,z:z,on:false,leftTime:21,dy:y-1});
				break;
			case bids[3]:
				pulverizers.push({x:x,y:y,z:z,leftTime:-1,outputItem:[-1,0,0],smashing:[-1,0,0]});
				break;
			}
		}
	}
	if(itemId==280)
	{
		switch(blockId)
		{
		case bids[0]:
			for(var i=0;i<solar_generator.length;i++)
			{
				if(solar_generator[i].x==x && solar_generator[i].y==y && solar_generator[i].z==z)
				{
					clientMessage("----------\n太阳能发电机\nPower:"+solar_generator[i].power+"/50");
				}
			}
			break;
		case bids[1]:
			for(var i=0;i<batBoxs.length;i++)
			{
				if(batBoxs[i].x==x && batBoxs[i].y==y && batBoxs[i].z==z)
				{
					clientMessage("----------\n存电箱\nPower:"+batBoxs[i].power+"/500");
				}
			}
			break;
		case bids[2]:
			function switchite(a)
			{
				if(a)
				{
					return "运行中";
				}
				return "未运行";
			}
			for(var i=0;i<mining_machines.length;i++)
			{
				if(mining_machines[i].x==x && mining_machines[i].y==y && mining_machines[i].z==z)
				{
					clientMessage("----------\n挖矿机\n当前挖掘高度 :"+mining_machines[i].dy+"\n"+switchite(mining_machines[i].on));
				}
			}
			break;
		}
	}
	else if(blockId==bids[2])
	{
		for(var i=0;i<mining_machines.length;i++)
		{
			if(mining_machines[i].x==x && mining_machines[i].y==y && mining_machines[i].z==z)
			{
				mining_machines[i].on=!mining_machines[i].on;
				if(mining_machines[i].on)
				{
					CM("挖矿机已启动","green");
				}
				else
				{
					CM("挖矿机已关闭","yellow");
					mining_machines[i].dy=y;
				}
			}
		}
	}
	saveMachines();
}
function modTick()
{
	for(var i=0;i<solar_generator.length;i++)
	{
		if(Level.getTile(solar_generator[i].x,solar_generator[i].y,solar_generator[i].z)!=bids[0])
		{
			solar_generator.splice(i,1);
		}
		else if(Math.sin(Level.getTime()/9600*Math.PI)<=0)
		{
			break;
		}
		else
		{
			solar_generator[i].power=solar_generator[i].power+0.1;
			if(solar_generator[i].power>50)
			{
				solar_generator[i].power=50;
			}
		}
	}
	for(var i=0;i<batBoxs.length;i++)
	{
		if(Level.getTile(batBoxs[i].x,batBoxs[i].y,batBoxs[i].z)!=bids[1])
		{
			batBoxs.splice(i,1);
		}
		else
		{
			var powerId=getPower(batBoxs[i].x,batBoxs[i].y,batBoxs[i].z);
			for(var ii=0;ii<powerId.length;ii=ii+2)
			{
				if(powerId[ii]!=-1 && powerId[ii+1]=="solar_generator")
				{
					if(solar_generator[powerId[ii]].power>=0.5 && batBoxs[i].power<499.6)
					{
						solar_generator[powerId[ii]].power=solar_generator[powerId[ii]].power-0.5;
						batBoxs[i].power=batBoxs[i].power+0.5;
						if(batBoxs[i].power>500)
						{
							batBoxs[i].power=500;
						}
					}
				}
			}
		}
	}
	for(var i=0;i<mining_machines.length;i++)
	{
		if(Level.getTile(mining_machines[i].x,mining_machines[i].y,mining_machines[i].z)!=bids[2])
		{
			mining_machines.splice(i,1);
		}
		else
		{
			var powerId=getPower(mining_machines[i].x,mining_machines[i].y,mining_machines[i].z);
			if(mining_machines[i].on && powerId[0]!=-1)
			{
				if(mining_machines[i].leftTime<=0)
				{
					mining_machines[i].leftTime=25;
					var keep=true;
					while(keep)
					{
						for(var x=mining_machines[i].x-5;x<mining_machines[i].x+5;x++)
						{
							for(var z=mining_machines[i].z-5;z<mining_machines[i].z+5;z++)
							{
								var blockId=Level.getTile(x,mining_machines[i].dy,z);
								for(var w=0;w<miniList.length;w++)
								{
									if(blockId==miniList[w][0])
									{
										keep=false;
										break;
									}
								}
								if(!keep)
								{
									break;
								}
							}
							if(!keep)
							{
								break;
							}
						}
						if(mining_machines[i].dy<=0)
						{
							mining_machines[i].on=false;
							CM("已挖掘到最深处，挖矿机已关闭","yellow");
							return;
						}
						if(keep)
						{
							mining_machines[i].dy--;
						}
					}
					var powerLow=false;
					for(var x=mining_machines[i].x-5;x<mining_machines[i].x+5;x++)
					{
						for(var z=mining_machines[i].z-5;z<mining_machines[i].z+5;z++)
						{
							if(powerId[1]=="batbox")
							{
								if(batBoxs[powerId[0]].power<=0)
								{
									batBoxs[powerId[0]].power=0;
									powerLow=true;
									break;
								}
							}
							if(powerId[1]=="solar_generator")
							{
								if(solar_generator[powerId[0]].power<=0)
								{
									solar_generator[powerId[0]].power=0;
									powerLow=true;
									break;
								}
							}
							var blockId=Level.getTile(x,mining_machines[i].dy,z);
							for(var w=0;w<miniList.length;w++)
							{
								if(blockId==miniList[w][0])
								{
									var dropId=miniList[w][1];
									var num=miniList[w][2];
									var data=miniList[w][3];
									if(dropId==undefined)
									{
										dropId=blockId;
									}
									if(num==undefined)
									{
										num=1;
									}
									if(data==undefined)
									{
										data=Level.getData(x,mining_machines[i].dy,z);
									}
									if(dropId!=0)
									{
										Level.dropItem(mining_machines[i].x+0.5,mining_machines[i].y+0.5,mining_machines[i].z+0.5,0.3,dropId,num,data);
									}
									Level.setTile(x,mining_machines[i].dy,z,0);
									if(powerId[1]=="batbox")
									{
										batBoxs[powerId[0]].power=batBoxs[powerId[0]].power-0.2;
										if(batBoxs[powerId[0]].power<=0)
										{
											batBoxs[powerId[0]].power=0;
											powerLow=true;
										}
									}
									if(powerId[1]=="solar_generator")
									{
										solar_generator[powerId[0]].power=solar_generator[powerId[0]].power-0.2;
										if(solar_generator[powerId[0]].power<=0)
										{
											solar_generator[powerId[0]].power=0;
											powerLow=true;
										}
									}
									break;
								}
							}
							if(powerLow)
							{
								break;
							}
						}
						if(powerLow)
						{
							break;
						}
					}
				}
				mining_machines[i].leftTime--;
			}
		}
	}
}
function loadMachines()
{
	var NaN=0;
	var tmpString=load("mining_machines");
	//print(tmpString);
	if(tmpString!="")
	{
		eval("mining_machines="+tmpString);
	}
	tmpString=load("batboxs");
	//print(tmpString);
	if(tmpString!="")
	{
		eval("batBoxs="+tmpString);
	}
	tmpString=load("solar_generator");
	//print(tmpString);
	if(tmpString!="")
	{
		eval("solar_generator="+tmpString);
	}
}
function saveMachines()
{
	var tmpString="[";
	for(i=0;i<mining_machines.length;i++)
	{
		tmpString=tmpString+"{x:"+mining_machines[i].x+",y:"+mining_machines[i].y+",z:"+mining_machines[i].z+",on:"+mining_machines[i].on+",leftTime:"+parseInt(mining_machines[i].leftTime)+",dy:"+mining_machines[i].y-1+"}";
		if(i!=mining_machines.length-1)
		{
			tmpString=tmpString+",";
		}
	}
	tmpString=tmpString+"];";
	save("mining_machines",tmpString);
	tmpString="[";
	for(i=0;i<batBoxs.length;i++)
	{
		tmpString=tmpString+"{x:"+batBoxs[i].x+",y:"+batBoxs[i].y+",z:"+batBoxs[i].z+",power:"+batBoxs[i].power+"}";
		if(i!=batBoxs.length-1)
		{
			tmpString=tmpString+",";
		}
	}
	tmpString=tmpString+"];";
	save("batboxs",tmpString);
	tmpString="[";
	for(i=0;i<solar_generator.length;i++)
	{
		tmpString=tmpString+"{x:"+solar_generator[i].x+",y:"+solar_generator[i].y+",z:"+solar_generator[i].z+",power:"+solar_generator[i].power+"}";
		if(i!=solar_generator.length-1)
		{
			tmpString=tmpString+",";
		}
	}
	tmpString=tmpString+"];";
	save("solar_generator",tmpString);
}
function leaveGame()
{
	saveMachines();
}
function getPower(x,y,z)
{
	var returnArray=[-1,""];
	function switchit(x,y,z)
	{
		if(Level.getTile(x,y,z)==bids[1])
		{
			for(var i=0;i<batBoxs.length;i++)
			{
				if(batBoxs[i].x==x && batBoxs[i].y==y && batBoxs[i].z==z && batBoxs[i].power!=0)
				{
					returnArray.push(i);
					returnArray.push("batbox");
					return true;
				}
			}
		}
		return false;
	}
	function switchit2(x,y,z)
	{
		if(Level.getTile(x,y,z)==bids[0])
		{
			for(var i=0;i<solar_generator.length;i++)
			{
				if(solar_generator[i].x==x && solar_generator[i].y==y && solar_generator[i].z==z && solar_generator[i].power!=0)
				{
					returnArray.push(i);
					returnArray.push("solar_generator");
					return true;
				}
			}
		}
		return false;
	}
	switchit(x+1,y,z);
	switchit(x-1,y,z);
	switchit(x,y+1,z);
	switchit(x,y-1,z);
	switchit(x,y,z+1);
	switchit(x,y,z-1);
	switchit2(x+1,y,z);
	switchit2(x-1,y,z);
	switchit2(x,y+1,z);
	switchit2(x,y-1,z);
	switchit2(x,y,z+1);
	switchit2(x,y,z-1);
	if(returnArray.length>2)
	{
		returnArray.splice(0,2);
	}
	return returnArray;
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
function jumpToUrl(url)//跳转到网页
{
	ctx.startActivity(android.content.Intent(android.content.Intent.ACTION_VIEW,android.net.Uri.parse(url)));
}
function CM(msg,color)//彩字输出
{
	clientMessage(getColor(color)+msg);
}
function readFile(path)
{
	try
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
	catch(err)
	{
		print(err);
		return false;
	}
}
function writeText(pth,data)
{
	try
	{
		var pathe=pth.split("/");
		var path="";
		pathe.pop();
		for(i=0;i<pathe.length;i++)
		{
			path=path+pathe[i]+"/";
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
		print(err);
		return false;
	}
}
function getColor(name)//获取颜色
{
	if(true)
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
}
function save(name,Data)//保存数据
{
	writeText(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/PowerFactory/datas/"+name+".f_dat",Data);
}
function load(name)//读取数据
{
	return readFile(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/PowerFactory/datas/"+name+".f_dat");
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/PowerFactory/datas/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
			return "";
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftWorlds/"+Level.getWorldDir()+"/PowerFactory/datas/"+name+".f_dat");
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
		print(err);
		return "";
	}
}
function save2(name,Data)//保存数据(全局)
{
	writeText(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/PowerFactory/datas/"+name+".f_dat",Data);
}
function load2(name)//读取数据(全局)
{
	try
	{
		var vdir = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/PowerFactory/datas/")
		if(!vdir.exists())
		{
			vdir.mkdirs();
			return "";
		}
		var vfile = new java.io.File(new android.os.Environment.getExternalStorageDirectory() +"/games/com.mojang/minecraftpe/PowerFactory/datas/"+name+".f_dat");
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
		print(err);
		return "";
	}
}
function dip2px(dips)//计算DIP
{
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
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
				print(err);
			}
		}
	}));
}

Block.newBlock=function(ID,name,texture,oldID,dtime,explode,light,category,addCreativeInv)
{
	Block.defineBlock(ID,name,texture,oldID,true,0);
	Block.setDestroyTime(ID,dtime);
	Block.setExplosionResistance(ID,explode);
	Block.setLightLevel(ID,light);
	Item.setCategory(ID,category,0);
	if(addCreativeInv)
	{
		Player.addItemCreativeInv(ID,1,0);
	}
}
Block.newBlock(bids[0],"太阳能发电机",[["piston_top_normal",0],["piston_side",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0]],20,0.8,5,1,-1,true);
Block.newBlock(bids[1],"电池",[["piston_top_normal",0],["piston_inner",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0]],20,0.8,5,1,-1,true);
Block.newBlock(bids[2],"挖矿机",[["piston_top_normal",0],["stonecutter",2],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0],["piston_top_sticky",0]],20,0.8,5,1,-1,true);

