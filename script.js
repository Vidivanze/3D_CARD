
window.onload = function () {
  init();
};

let loadedModel;

const mouse = new THREE.Vector2();
const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );

function init() {

  // SCENE / CAMERA
  const sceneInstance = new SceneInit('myCanvas');
  sceneInstance.initialize();
  sceneInstance.animate();

  let glftLoader = new THREE.GLTFLoader();
  glftLoader.load('./assets/MagicPass_card.gltf', (gltf) => {

    gltf.scene.rotation.z = Math.PI / 24;
    gltf.scene.rotation.y = Math.PI / 12;
    gltf.scene.position.y = 0.2;
    gltf.scene.scale.setScalar(0.9);

    loadedModel = gltf.scene;

    sceneInstance.scene.add(loadedModel);
  });

  document.addEventListener( 'mousemove', onMouseMove, false );

  animate();
}

function onMouseMove(event) {
	mouse.x = ( event.clientX - windowHalf.x );
	mouse.y = ( event.clientY - windowHalf.y );
}

  // LIGHTS HELPERS
  
  const helper1 = new THREE.DirectionalLightHelper( frontLight1, 5 );
  sceneInstance.scene.add( helper1 );
  const helper2 = new THREE.DirectionalLightHelper( frontLight2, 5 );
  sceneInstance.scene.add( helper2 );

  const helper3 = new THREE.DirectionalLightHelper( backLight1, 5 );
  scene.add( helper3 );
  const helper4 = new THREE.DirectionalLightHelper( backLight2, 5 );
  scene.add( helper4 );
  */
 
  // MODEL LOADER
  /*
    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
    loader.setDRACOLoader( dracoLoader );
    */

    let loadedModel;
    const glftLoader = new THREE.GLTFLoader();
    glftLoader.load('./assets/MagicPass_card.gltf', (gltfScene) => {
      loadedModel = gltfScene;
      
      gltfScene.scene.rotation.z = Math.PI / 10;
      gltfScene.scene.rotation.y = Math.PI / 5;
      gltfScene.scene.position.y = 0.5;
      gltfScene.scene.scale.setScalar(1);

      sceneInstance.scene.add(gltfScene.scene);
    });

    const animate = () => {
     /*  if (loadedModel) {
        loadedModel.scene.rotation.x += 0.01;
        loadedModel.scene.rotation.y += 0.01;
        loadedModel.scene.rotation.z += 0.01;
      } */
      requestAnimationFrame(animate);
    };

  animate();
}
