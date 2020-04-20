var ctx= com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
function newLevel()
{
var shared=ctx.getSharedPreferences("net.zhuoweizhang.mcpelauncher.pro_preferences", 0);
shared.putString("zz_safe_mode", "true");
}
