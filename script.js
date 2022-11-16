
window.onload = function () {
  init();
};

function init() {

  // SCENE / CAMERA
  const sceneInstance = new SceneInit('myCanvas');
  sceneInstance.initialize();
  sceneInstance.animate();



  // LIGHTS 
  /*
  var frontLight1 = new THREE.DirectionalLight(0xffffff);
  frontLight1.position.set(-400, 0, 1000);
  sceneInstance.scene.add(frontLight1);

  var frontLight2 = new THREE.DirectionalLight(0xffffff);
  frontLight2.position.set(400, 0, 2000);
  sceneInstance.scene.add(frontLight2);


  var backLight1 = new THREE.DirectionalLight(0xffffff);
  backLight1.position.set(-400, 0, -2000);
  scene.add(backLight1);

  var backLight2 = new THREE.DirectionalLight(0xffffff);
  backLight2.position.set(400, 0, -2000);
  scene.add(backLight2);

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
