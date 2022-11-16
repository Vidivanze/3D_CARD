class SceneInit {
  constructor(canvasId) {
    // Required elements
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // Camera params;
    this.width = window.innerWidth - (window.innerWidth * 0.3);
    this.height = window.innerHeight- (window.innerHeight * 0.3);
    this.fov = 50;
    this.nearPlane = 0.01;
    this.farPlane = 100;
    this.canvasId = canvasId;
    this.controls = undefined;

    // Lighting.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xffffff);

    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.width / this.height,
      this.nearPlane,
      this.farPlane
    );
    this.camera.position.set(0, 0, 10);

    // SCENE CANVAS
    const canvas = document.getElementById(this.canvasId);

    // RENDERER
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      // NOTE: Anti-aliasing smooths out the edges.
      antialias: true,
    });
    
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    // LIGHTS
    // ambient light which is for the whole scene
    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    // directional light - parallel sun rays
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    this.directionalLight.castShadow = true;
    this.directionalLight.position.set(0, 5, 64);
    this.scene.add(this.directionalLight);

    // if window resizes
    window.addEventListener("resize", () => this.onWindowResize(), false);

    
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
