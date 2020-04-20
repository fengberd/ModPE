//本ModPE Script由风鸟制作，严禁抄袭或修改版权！
//This ModPE script was made by FENGberd,don't change author info,thanks!

////Start import////
DatagramSocket=java.net.DatagramSocket;
DatagramPacket=java.net.DatagramPacket;
InetAddress=java.net.InetAddress;

StrictMode=android.os.StrictMode;
Process=android.os.Process;

Executors=java.util.concurrent.Executors;
TimeUnit=java.util.concurrent.TimeUnit;

Runnable=java.lang.Runnable;
/////End import/////

StrictMode.setThreadPolicy(new StrictMode.ThreadPolicy.Builder().detectDiskReads().detectDiskWrites().detectNetwork().penaltyLog().build());
StrictMode.setVmPolicy(new StrictMode.VmPolicy.Builder().detectLeakedSqlLiteObjects().detectLeakedClosableObjects().penaltyLog().penaltyDeath().build());

var socket_c2s=new DatagramSocket(23333),socket_s2c=new DatagramSocket();
var faddr=InetAddress.getByName("fw.fengberd.net");
var fport=19132;
var localport=0;

var public_buffer=java.nio.ByteBuffer.allocate(4096);
function makeBuffer()
{
	return public_buffer.array();
}

thread_s2c=Executors.newSingleThreadScheduledExecutor().scheduleWithFixedDelay(new Runnable(function()
{
	Process.setThreadPriority(Process.THREAD_PRIORITY_BACKGROUND);
	try
	{
		var buffer=makeBuffer();
		var pk=new DatagramPacket(buffer,buffer.length);
		socket_c2s.receive(pk);
		localport=pk.getPort();
		pk.setPort(fport);
		pk.setAddress(faddr);
		socket_s2c.send(pk);
	}
	catch(e)
	{
		print(e.toString());
	}
}),0,1,TimeUnit.MILLISECONDS);

thread_c2s=Executors.newSingleThreadScheduledExecutor().scheduleWithFixedDelay(new Runnable(function()
{
	Process.setThreadPriority(Process.THREAD_PRIORITY_BACKGROUND);
	try
	{
		var buffer=makeBuffer();
		var pk=new DatagramPacket(buffer,buffer.length);
		socket_s2c.receive(pk);
		pk.setPort(localport);
		pk.setAddress(InetAddress.getByName("127.0.0.1"));
		socket_c2s.send(pk);
	}
	catch(e)
	{
		print(e.toString());
	}
}),0,1,TimeUnit.MILLISECONDS);

print("转发开始\n目标地址:"+faddr+":"+fport);

