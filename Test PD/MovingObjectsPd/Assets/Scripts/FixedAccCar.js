var acc : float;

var hitSound: AudioClip;
var driveSound : AudioClip;

private var speed : float;
private var forward : Vector3 = Vector3(1,0,0); // move in x axix direction

function OnTriggerEnter(collider: Collider) {
	GetComponent.<AudioSource>().loop = false;
	GetComponent.<AudioSource>().clip = hitSound;
	GetComponent.<AudioSource>().pitch = 1.0;	
	GetComponent.<AudioSource>().Play();
	acc = 0.0;
}

function Start() {
	GetComponent.<AudioSource>().clip = driveSound;
	GetComponent.<AudioSource>().loop = true;
	GetComponent.<AudioSource>().pitch = 1.0;
	GetComponent.<AudioSource>().Play();
}

function Update () {

	// Calculate speed from acceleration and time
	speed = acc * Time.time;
		
	// Move the object forward along its x axis speed unit/second.
    transform.Translate(speed * forward * Time.deltaTime);    
}
