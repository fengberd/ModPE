//本js由风鸟制作！严禁盗版或修改版权！！
var first=true;
var msg="\n合成所有地毯JS\n效果：可以在工作台合成所有地毯(启动器1.6.8及以上可用)\n由风鸟制作，盗版杀无赦！！";
function newLevel()
{
	if(first)
	{
		print(msg);
		print(msg);
		print(msg);
		first=false;
		Item.addCraftRecipe(171,3,0,[35,2,0]);
		Item.addCraftRecipe(171,3,1,[35,2,1]);
		Item.addCraftRecipe(171,3,2,[35,2,2]);
		Item.addCraftRecipe(171,3,3,[35,2,3]);
		Item.addCraftRecipe(171,3,4,[35,2,4]);
		Item.addCraftRecipe(171,3,5,[35,2,5]);
		Item.addCraftRecipe(171,3,6,[35,2,6]);
		Item.addCraftRecipe(171,3,7,[35,2,7]);
		Item.addCraftRecipe(171,3,8,[35,2,8]);
		Item.addCraftRecipe(171,3,9,[35,2,9]);
		Item.addCraftRecipe(171,3,10,[35,2,10]);
		Item.addCraftRecipe(171,3,11,[35,2,11]); 
		Item.addCraftRecipe(171,3,12,[35,2,12]);
		Item.addCraftRecipe(171,3,13,[35,2,13]); 
		Item.addCraftRecipe(171,3,15,[35,2,15]);
	}
}
