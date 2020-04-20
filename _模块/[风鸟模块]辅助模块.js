function GetSuperFlat(flatcode) //生成超平坦地形
{
	var one=flatcode.split(","),two,done=-1,a=0,Block=0;
	for(i=one.length-1;i>=0;i--)
	{
		two=one[i].split("x");
		a++;
		print("解析中...第"+a+"层");
		print("高度"+two[0]+",ID"+two[1]);
		for(b=0;b<two[0];b++)
		{
			done++;
			for(x=-1;x<=255;x++)
			{
					for(z=-1;z<=255;z++)
					{
						setTile(x,done,z,two[1]);
						Block++;
					}
				}
		}
		print("共操作"+Block+"个方块");
		Block=0;
	}
	Level.setSpawn(64,done+1,64);
}
