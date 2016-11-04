using UnityEngine;
using System.Collections;
using System;
using System.IO;
using System.Text;
using System.Net.Sockets;

public class TCPclient : MonoBehaviour {

    public int port = 7778;
    public string host = "127.0.0.1";

    private TcpClient client;
    private NetworkStream stream;
    private StreamWriter writer;


    public void send(string command)
    {
        writer.Write(command + " ;" + "\r\n");
        writer.Flush();
    }

    void setupTCP()
    {
        try
        {
            client = new TcpClient(host, port);
            stream = client.GetStream();
            writer = new StreamWriter(stream);
            Debug.Log("Socket ok");
        }
        catch (Exception e) {
            Debug.Log("Socket error: " + e);
        }
        }

        void Awake(){
            setupTCP();
        }
    }
