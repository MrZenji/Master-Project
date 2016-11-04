import System;
import System.IO;
import System.Text;
import System.Net.Sockets;

var port = 7778;
var host = "127.0.0.1";

private var client : TcpClient;
private var stream : NetworkStream;
private var writer : StreamWriter;


function send(command) {
    writer.Write(command+" ;"+ "\r\n");
    writer.Flush();
}

function setupTCP() {
    try
    {
       client = new TcpClient(host, port);
       stream = client.GetStream();
       writer = new StreamWriter(stream); 
       Debug.Log("Socket ok");          
    }
    catch (e : Exception) {
       Debug.Log("Socket error: " + e);
    }
}

function Awake(){
	setupTCP();	
}

function Update () {
}