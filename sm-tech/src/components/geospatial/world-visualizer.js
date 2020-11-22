import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";
import "./world-visualizer.css";

function WorldVisualizer() {
  return (
    <Viewer
      clock={false}
      homeButton={false}
      fullscreenButton={false}
      timeline={false}
      navigationHelpButton={false}
      animation={false}
      infoBox={false}
      className="world-visualizer"
    >
      <Entity
        name="tokyo"
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
        point={{ pixelSize: 2 }}
      ></Entity>
    </Viewer>
  );
}

export default WorldVisualizer;
