function fuckWaters()
{
	Block.defineBlock(254, "savewater", "flowing_water", 8, false, 4);
	Block.defineBlock(255, "savelava", "flowing_lava", 10, false, 4);

	Block.defineBlock(8, "water", "flowing_water", 1, false, 0);
	Block.defineBlock(9, "water", "flowing_water", 1, false, 0);
	Block.defineBlock(10, "lava", "flowing_lava", 1, false, 0);
	Block.defineBlock(11, "lava", "flowing_lava", 1, false, 0);
}
fuckWaters();