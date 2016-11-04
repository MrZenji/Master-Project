private var speed : float;
private var forward : Vector3 = Vector3(1,0,0); // move in x axix direction

private var client : TCPclient2;

function Start() {
    client = FindObjectOfType(TCPclient2);
    if ( client != null ) {
    	client.send("Start " + 0.5);
    }
    else {
    	Debug.Log("no script");
    }
}

function Update () {
	
	// Move the object forward along its x axis speed unit/second.
    transform.Translate(speed * forward * Time.deltaTime);
    
    if ( transform.position.x < 0.0 )
    	speed = 0.5*(transform.position.x+10);
    else
    	speed = -0.5*(transform.position.x-10);
	    	    
    // Stop when x = 9.9 
    if ( transform.position.x >= 9.9 )
    {
    	speed = 0.0;
    	client.send("Stop");
    }
        
    client.send("Speed "+ speed);
}