
window.onload = function () {
  init();
};

let loadedModel;
const mouse = new THREE.Vector2();
const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

function init() {

  // SCENE
  const sceneInstance = new SceneInit('myCanvas');
  sceneInstance.initialize();
  sceneInstance.animate();

  // MODEL LOADER
  let glftLoader = new THREE.GLTFLoader();
  glftLoader.load('./assets/MagicPass_card.gltf', (gltf) => {
    
    gltf.scene.rotation.z = Math.PI / 24;
    gltf.scene.rotation.y = Math.PI / 12;
    gltf.scene.position.y = 0.2;
    gltf.scene.scale.setScalar(0.9);

    loadedModel = gltf.scene;

    sceneInstance.scene.add(loadedModel);
  });
   
  //MOUSE MOVEMENT
  document.addEventListener( 'mousemove', onMouseMove, false );

  animate();
}

function onMouseMove(event) {
	mouse.x = ( event.clientX - windowHalf.x );
	mouse.y = ( event.clientY - windowHalf.y );
}

function animate() {
  if(loadedModel) {
    loadedModel.rotation.y = THREE.MathUtils.lerp(loadedModel.rotation.y, (mouse.x * Math.PI) / 7000, 0.1)
    loadedModel.rotation.x = THREE.MathUtils.lerp(loadedModel.rotation.x, (mouse.y * Math.PI) / 5000, 0.1)
  }

  requestAnimationFrame( animate );
}
