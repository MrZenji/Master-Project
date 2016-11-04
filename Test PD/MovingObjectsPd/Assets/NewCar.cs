using UnityEngine;

public class NewCar : MonoBehaviour
{

    private float speed;
    private Vector3 forward = new Vector3(1, 0, 0); // move in x axix direction

    private TCPclient client = new TCPclient();

    void Start()
    {
        client = GameObject.FindGameObjectWithTag("MainCamera").GetComponent<TCPclient>();
        if (client != null)
        {
            client.send("Start " + 0.5);
        }
        else
        {
            Debug.Log("no script");
        }
    }

    void Update()
    {

        // Move the object forward along its x axis speed unit/second.
        transform.Translate(speed * forward * Time.deltaTime);

        if (transform.position.x < 0.0)
            speed = 0.5f * (transform.position.x + 10);
        else
            speed = -0.5f * (transform.position.x - 10);

        // Stop when x = 9.9 
        if (transform.position.x >= 9.9)
        {
            speed = 0.0f;
            client.send("Stop");
        }

        client.send("Speed " + speed);
    }
}