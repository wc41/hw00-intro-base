import {vec3, vec4} from 'gl-matrix';
import Drawable from '../rendering/gl/Drawable';
import {gl} from '../globals';

class Cube extends Drawable {
  indices: Uint32Array;
  positions: Float32Array;
  normals: Float32Array;
  center: vec4;
  

  constructor(center: vec3) {
    super(); // Call the constructor of the super class. This is required.
    this.center = vec4.fromValues(center[0], center[1], center[2], 1);
  }

  create() {
    this.indices = new Uint32Array([0, 1, 2,
      0, 2, 3,
      1, 5, 6,
      1, 6, 2,
      5, 4, 7,
      5, 7, 6,
      4, 0, 3,
      4, 3, 7,
      2, 6, 7,
      2, 7, 3,
      0, 1, 5,
      0, 5, 4
      ]);
    this.normals = new Float32Array([0, 0, 1, 0,
          0, 0, 1, 0,
          0, 0, 1, 0,
          0, 0, 1, 0,
          0, 0, 1, 0,
          0, 0, 1, 0,
          0, 0, 1, 0,
          0, 0, 1, 0
        ]);
    this.positions = new Float32Array([-1, -1, 1, 1,
            1, -1, 1, 1,
            1, 1, 1, 1,
            -1, 1, 1, 1,
            -1, -1, -1, 1,
            1, -1, -1, 1,
            1, 1, -1, 1,
            -1, 1, -1, 1,
            ]);

    this.generateIdx();
    this.generatePos();
    this.generateNor();

    this.count = this.indices.length;
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.bufIdx);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufNor);
    gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.STATIC_DRAW);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.bufPos);
    gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

    console.log(`Created cube`);
  }
};

export default Cube;
