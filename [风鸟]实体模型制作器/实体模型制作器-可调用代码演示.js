var id=code2modelyoo();//这个函数执行一次就够了，最好在放在JS开头，不要放在newLevel里，定义一个变量储存它返回的ID
function attackHook(a,v)//当攻击实体时
{
	Entity.setRenderType(v,id);//设置这个实体的模型为返回的id
	Entity.setMobSkin(v,"mob/char.png");//设置一下皮肤
}
//下面是生成的代码，直接粘贴进来就好，可以改改函数名称
function code2modelyoo(){var render=Renderer.createHumanoidRenderer();var Data="addBox,body,-3,3,-4,1,1,4,1,,addBox,body,2,3,-4,1,1,4,1,".split(",");for(var i=0;i<Data.length;i=i+10){switch(Data[i]){case"addBox":render.getModel().getPart(Data[i+1]).addBox(Number(Data[i+2]),Number(Data[i+3]),Number(Data[i+4]),Number(Data[i+5]),Number(Data[i+6]),Number(Data[i+7]),Number(Data[i+8]));break;case"clear":if(Data[i+1]=="all"){clearRender();}else{render.getModel().getPart(Data[i+1]).clear();};break;case"setTextureOffset":render.getModel().getPart(Data[i+1]).setTextureOffset(Number(Data[i+2]),Number(Data[i+3]),Boolean(Data[i+4]));break;};};return render.getRenderType();};
