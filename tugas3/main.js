let scene; 
let camera; 
let renderer;
let aLight; 
let pLight; 
let rayCast; 
let mouse;

let current = document.getElementById("score_id");
let getRandom = function (min, max) {
    let random = Math.random() * (max - min) + min;
    return random;
}

const colorList = [0xC0E4FF, 
                    0xFFA2E1, 
                    0xEDFC6A, 
                    0xFD8890, 
                    0xFFB56B, 
                    0x6BFF8E, 
                    0xC46BFF, 
                    0xDADADA, 
                    0xAE86F3];

let minArea = -40; let maxArea = 40;

let init = function () {
    // 1. create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // 2. create an locate the camera       
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
            1, 1000);
    camera.position.set(0, 0, 50);

    aLight = new THREE.AmbientLight(0xffffff, 1);
    pLight = new THREE.PointLight(0xffffff, 1);
    pLight.position.set(0, 0, 0);
    scene.add(aLight);
    scene.add(pLight);

    rayCast = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    mouse.x = mouse.y = -1;
         
    for(let i = 0; i < 30; i++){
        createCube();
    }
  
    document.addEventListener("click", onMouseClick);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    renderer.render(scene, camera, controls);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

let cube;
let createCube = function() {
    const color = colorList[Math.floor(getRandom(0, 9))];
    let geometry = new THREE.BoxGeometry(3);
    let material = new THREE.MeshPhongMaterial({color: color,});
    cube = new THREE.Mesh(geometry, material);
    let x = getRandom(minArea, maxArea);
    let y = getRandom(minArea, maxArea);
    let z = getRandom(minArea, maxArea);
    cube.position.set(x, y, z);
    scene.add(cube);
}

let disposed = function (obj) {
    obj.geometry.dispose();
    obj.material.dispose();
    scene.remove(obj);
    renderer.renderLists.dispose();
}

let score = 0;let select = [];let origin = [];

let score_calculate = function () {
    if (select[0].material.color.getHex() === select[1].material.color.getHex()) {
        select.forEach(object => {
            disposed(object);
        });
        score += 1;
    }
    else {
        score -= 1;
    }
    current.innerHTML = score;
    origin.length = 0;
    select.length = 0;
}

let onMouseClick = function (e) {
    clicked = 0; mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
    rayCast.setFromCamera(mouse, camera);

    let intersects = rayCast.intersectObjects(scene.children, false);

    if (intersects[0]) {
        let firstObject = intersects[0].object;
        if (select.length > 0) {
            if (firstObject.uuid === select[0].uuid) {
                firstObject.material.emissive.setHex(0x000000);
                select = [];
                originColors = [];
                return;
            }
        }

        select.push(firstObject);
        origin.push(firstObject.material.color.getHex());
        if (select.length == 1) {
            if (clicked == 1) {
                select.pop(firstObject);
                origin.pop(firstObject.material.color.getHex());
            }
            clicked = 1;
        }
        if (select.length > 1) {
            score_calculate();
        }
    }
}
let clock = new THREE.Clock();let flag = 0;let speed = 0.04;let base = 0.02;
let action = function () {
    if (scene.children.length >= 30) {
        flag = 0;
        speed = base;
        current.innerHTML = score;
    } 
    else {
        flag += speed;
    }
    if (flag > 1) {
        createCube();
        flag = 0;
        speed += 0.002;

    }

    const elapsedTime = clock.getElapsedTime();

    if (select.length > 0) {
        select[0].material.emissive.setHex(elapsedTime % 0.5 >= 0.25 ? origin[0] : 0x000000);
    }

    renderer.render(scene, camera);
    requestAnimationFrame(action);
};
init();action();
document.getElementById("btn_id").addEventListener("click", function () {
    location.reload();
});