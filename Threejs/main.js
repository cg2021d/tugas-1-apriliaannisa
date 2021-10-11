//make scene
var scene = new THREE.Scene();

//make camera
var camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 100);
camera.position.z += 25;

//make renderer
var renderer = new THREE.WebGLRenderer();


//make geometry 1 
function CubeGeo(){

    //light left
    light1 = new THREE.PointLight(0xffffff, 1); //use point light
    light1.position.set(-1, 5, 5);
    scene.add(light1);

    //light down
    light2 = new THREE.PointLight(0xffffff, 1); //use point light
    light2.position.set(1, -5, 5);
    scene.add(light2);

    geometry = new THREE.BoxGeometry( 3, 3, 3 ); 
    material = new THREE.MeshLambertMaterial( {color: 0x11FD50} ); // use MeshLambertMaterial
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    cube.position.set(0, 5, 0);

}


//make geometry 2 
function CylinderGeo (){

    const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 ); //use hemisphere light
    scene.add( light );

    geometry1 = new THREE.CylinderGeometry( 1, 1, 4, 32 );
    material1 = new THREE.MeshLambertMaterial( {color: 0xed198b} ); // use MeshLambertMaterial
    cylinder = new THREE.Mesh( geometry1, material1);
    scene.add( cylinder );
    cylinder.position.set(10, 5, 0);

}


//make geometry 3 
function ConeGeo(){

    geometry2 = new THREE.ConeGeometry( 2, 4, 32 );
    material2 = new THREE.MeshPhongMaterial( { // use MeshPhongMaterial
        color: 0xEC79D1, 
        wireframe: true,
        shininess: 100,
    } ); 
    cone2 = new THREE.Mesh( geometry2, material2);
    scene.add( cone2 );
    cone2.position.set(-10, 5, 0);

}


//make geometry 4 
function TorusKnotGeo(){

    light = new THREE.AmbientLight( 0x47e6f2 ); // use ambient light
    scene.add( light );

    geometry3 = new THREE.TorusKnotGeometry( 2, 0.4, 100, 16 );
    material3 = new THREE.MeshStandardMaterial( { // use MeshStandardMaterial
        color: 0xf4a204,
        roughness: 0.4,
        metalness: 0.7,
    } );
    torusKnot = new THREE.Mesh( geometry3, material3 );
    scene.add( torusKnot );
    torusKnot.position.set(-10, -5, 0);
    
}


//make geometry 5 
function SphereGeo(){

    directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 ); //use directional light
    directionalLight.position.set(0, -1, 2).normalize();
    scene.add( directionalLight );

    geometry4 = new THREE.SphereGeometry( 2.5, 32, 16 );
    material4 = new THREE.MeshBasicMaterial( { color: 0x00EFFF, wireframe: true} ); //MeshBasicMaterial
    sphere = new THREE.Mesh( geometry4, material4 );
    scene.add( sphere );
    sphere.position.set(0, -5, 0);

}


//make geometry 6 
function RingGeo(){

    spotLight = new THREE.SpotLight( 0xffffff ); // use spotlight 
    spotLight.position.set( 100, 1000, 100 );

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 30;

    scene.add( spotLight );
    
    geometry5 = new THREE.RingGeometry( 1, 3, 32 );
    material5 = new THREE.MeshPhongMaterial( { color: 0x7A40FF, side: THREE.DoubleSide} ); // use MeshPhongMaterial
    mesh = new THREE.Mesh( geometry5, material5 );
    scene.add( mesh );
    mesh.position.set(10, -5, 0);
}


//call function Geometry
CubeGeo();
CylinderGeo();
ConeGeo();
TorusKnotGeo();
SphereGeo();
RingGeo();


renderer.setSize(innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);


//refresh windows
window.addEventListener('resize', function(){

    renderer.setSize(this.window.innerWidth, this.window.innerHeight);
    camera.aspect = this.window.innerWidth/this.window.innerHeight;
    camera.updateProjectionMatrix();
    
});


//make function to loop
function draw(){
    requestAnimationFrame(draw);
    
    //cube rotation
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    cube.rotation.x += 0.01;

    //cylinder rotation
    cylinder.rotation.x += -0.01;
    cylinder.rotation.z += -0.01;
    cylinder.rotation.y += -0.01;

    //cone rotation
    cone2.rotation.x += 0.01;
    cone2.rotation.z += -0.01;
    cone2.rotation.y += -0.01;

    //torusKnot rotation
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.z += -0.01;
    torusKnot.rotation.y += -0.01;

    //sphere rotation
    sphere.rotation.x += 0.01;
    sphere.rotation.z += -0.01;
    sphere.rotation.y += -0.01;

    //ring rotation
    mesh.rotation.x += 0.01;
    mesh.rotation.z += -0.01;
    mesh.rotation.y += -0.01;

    renderer.render(scene, camera);
}

//call function
draw();


