var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.set(0, 0, 10);
var renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.setScalar(10);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 1));

var canvasTexture = new THREE.CanvasTexture(cnvs);
canvasTexture.wrapS = THREE.RepeatWrapping;
canvasTexture.wrapT = THREE.RepeatWrapping;
canvasTexture.repeat.set(2, 2);

var geometry = new THREE.PlaneGeometry(10, 10, 20, 20);
geometry.vertices.forEach((v) => {
  v.z = Math.cos(v.x) * Math.sin(-v.y * 0.5) * 0.5;
});
geometry.computeFaceNormals();
geometry.computeVertexNormals();

var mesh = new THREE.Mesh(
  geometry,
  new THREE.MeshStandardMaterial({
    map: canvasTexture,
    metalness: 0.25,
    roughness: 0.25,
  })
);
scene.add(mesh);

var canvas = new fabric.Canvas("cnvs", {
  backgroundColor: "white",
});
canvas.on("after:render", function () {
  mesh.material.map.needsUpdate = true;
});

var rect = new fabric.Rect({
  width: 50,
  height: 50,
  left: 50,
  top: 128,
  stroke: "#aaf",
  strokeWidth: 5,
  fill: "#faa",
  selectable: false,
  originX: "center",
  originY: "center",
});
canvas.add(rect);
function animateRandom() {
  var randomX = THREE.Math.randInt(50, 206);
  var randomY = THREE.Math.randInt(50, 206);

  rect.animate(
    { left: randomX, top: randomY },
    {
      duration: 1000,
      onChange: canvas.renderAll.bind(canvas),
      easing: fabric.util.ease.easeOutExpo,
    }
  );
}

var text = new fabric.IText("Three.js\n+\nFaBric.js", {
  fontSize: 40,
  textAlign: "center",
  fontWeight: "bold",
  left: 128,
  top: 128,
  angle: 30,
  originX: "center",
  originY: "center",
  shadow: "blue -5px 6px 5px",
  styles: {
    0: {
      0: {
        fontSize: 60,
        fontFamily: "Impact",
        fontWeight: "normal",
        fill: "orange",
      },
    },
    1: {
      0: {
        fill: "blue",
      },
    },
    2: {
      0: {
        textBackgroundColor: "red",
      },
      2: {
        fill: "fuchsia",
        stroke: "orange",
        strokeWidth: 1,
      },
    },
  },
});
text.setSelectionStyles(
  {
    fontStyle: "italic",
    fill: "",
    stroke: "red",
    strokeWidth: 2,
  },
  1,
  5
);
canvas.add(text);
canvas.setActiveObject(text);

animateRandom();
setInterval(animateRandom, 1000);

var clock = new THREE.Clock();
var time = 0;
render();

function render() {
  requestAnimationFrame(render);
  time += clock.getDelta();
  mesh.lookAt(Math.cos(time * 0.314) * 20, Math.sin(time * 0.157) * 10, 40);
  renderer.render(scene, camera);
}
