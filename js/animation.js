FSS = {FRONT:0, BACK:1, DOUBLE:2, SVGNS:"http://www.w3.org/2000/svg"};
FSS.Array = "function" === typeof Float32Array ? Float32Array : Array;
FSS.Utils = {isNumber:function(a) {
  return!isNaN(parseFloat(a)) && isFinite(a);
}};
(function() {
  for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;c < b.length && !window.requestAnimationFrame;++c) {
    window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function(b, c) {
    var f = (new Date).getTime(), g = Math.max(0, 16 - (f - a)), r = window.setTimeout(function() {
      b(f + g);
    }, g);
    a = f + g;
    return r;
  });
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    clearTimeout(a);
  });
})();
Math.PIM2 = 2 * Math.PI;
Math.PID2 = Math.PI / 2;
Math.randomInRange = function(a, b) {
  return a + (b - a) * Math.random();
};
Math.clamp = function(a, b, c) {
  a = Math.max(a, b);
  return a = Math.min(a, c);
};
FSS.Vector3 = {create:function(a, b, c) {
  var e = new FSS.Array(3);
  this.set(e, a, b, c);
  return e;
}, clone:function(a) {
  var b = this.create();
  this.copy(b, a);
  return b;
}, set:function(a, b, c, e) {
  a[0] = b || 0;
  a[1] = c || 0;
  a[2] = e || 0;
  return this;
}, setX:function(a, b) {
  a[0] = b || 0;
  return this;
}, setY:function(a, b) {
  a[1] = b || 0;
  return this;
}, setZ:function(a, b) {
  a[2] = b || 0;
  return this;
}, copy:function(a, b) {
  a[0] = b[0];
  a[1] = b[1];
  a[2] = b[2];
  return this;
}, add:function(a, b) {
  a[0] += b[0];
  a[1] += b[1];
  a[2] += b[2];
  return this;
}, addVectors:function(a, b, c) {
  a[0] = b[0] + c[0];
  a[1] = b[1] + c[1];
  a[2] = b[2] + c[2];
  return this;
}, addScalar:function(a, b) {
  a[0] += b;
  a[1] += b;
  a[2] += b;
  return this;
}, subtract:function(a, b) {
  a[0] -= b[0];
  a[1] -= b[1];
  a[2] -= b[2];
  return this;
}, subtractVectors:function(a, b, c) {
  a[0] = b[0] - c[0];
  a[1] = b[1] - c[1];
  a[2] = b[2] - c[2];
  return this;
}, subtractScalar:function(a, b) {
  a[0] -= b;
  a[1] -= b;
  a[2] -= b;
  return this;
}, multiply:function(a, b) {
  a[0] *= b[0];
  a[1] *= b[1];
  a[2] *= b[2];
  return this;
}, multiplyVectors:function(a, b, c) {
  a[0] = b[0] * c[0];
  a[1] = b[1] * c[1];
  a[2] = b[2] * c[2];
  return this;
}, multiplyScalar:function(a, b) {
  a[0] *= b;
  a[1] *= b;
  a[2] *= b;
  return this;
}, divide:function(a, b) {
  a[0] /= b[0];
  a[1] /= b[1];
  a[2] /= b[2];
  return this;
}, divideVectors:function(a, b, c) {
  a[0] = b[0] / c[0];
  a[1] = b[1] / c[1];
  a[2] = b[2] / c[2];
  return this;
}, divideScalar:function(a, b) {
  0 !== b ? (a[0] /= b, a[1] /= b, a[2] /= b) : (a[0] = 0, a[1] = 0, a[2] = 0);
  return this;
}, cross:function(a, b) {
  var c = a[0], e = a[1], d = a[2];
  a[0] = e * b[2] - d * b[1];
  a[1] = d * b[0] - c * b[2];
  a[2] = c * b[1] - e * b[0];
  return this;
}, crossVectors:function(a, b, c) {
  a[0] = b[1] * c[2] - b[2] * c[1];
  a[1] = b[2] * c[0] - b[0] * c[2];
  a[2] = b[0] * c[1] - b[1] * c[0];
  return this;
}, min:function(a, b) {
  a[0] < b && (a[0] = b);
  a[1] < b && (a[1] = b);
  a[2] < b && (a[2] = b);
  return this;
}, max:function(a, b) {
  a[0] > b && (a[0] = b);
  a[1] > b && (a[1] = b);
  a[2] > b && (a[2] = b);
  return this;
}, clamp:function(a, b, c) {
  this.min(a, b);
  this.max(a, c);
  return this;
}, limit:function(a, b, c) {
  var e = this.length(a);
  null !== b && e < b ? this.setLength(a, b) : null !== c && e > c && this.setLength(a, c);
  return this;
}, dot:function(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}, normalise:function(a) {
  return this.divideScalar(a, this.length(a));
}, negate:function(a) {
  return this.multiplyScalar(a, -1);
}, distanceSquared:function(a, b) {
  var c = a[0] - b[0], e = a[1] - b[1], d = a[2] - b[2];
  return c * c + e * e + d * d;
}, distance:function(a, b) {
  return Math.sqrt(this.distanceSquared(a, b));
}, lengthSquared:function(a) {
  return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
}, length:function(a) {
  return Math.sqrt(this.lengthSquared(a));
}, setLength:function(a, b) {
  var c = this.length(a);
  0 !== c && b !== c && this.multiplyScalar(a, b / c);
  return this;
}};
FSS.Vector4 = {create:function(a, b, c, e) {
  e = new FSS.Array(4);
  this.set(e, a, b, c);
  return e;
}, set:function(a, b, c, e, d) {
  a[0] = b || 0;
  a[1] = c || 0;
  a[2] = e || 0;
  a[3] = d || 0;
  return this;
}, setX:function(a, b) {
  a[0] = b || 0;
  return this;
}, setY:function(a, b) {
  a[1] = b || 0;
  return this;
}, setZ:function(a, b) {
  a[2] = b || 0;
  return this;
}, setW:function(a, b) {
  a[3] = b || 0;
  return this;
}, add:function(a, b) {
  a[0] += b[0];
  a[1] += b[1];
  a[2] += b[2];
  a[3] += b[3];
  return this;
}, multiplyVectors:function(a, b, c) {
  a[0] = b[0] * c[0];
  a[1] = b[1] * c[1];
  a[2] = b[2] * c[2];
  a[3] = b[3] * c[3];
  return this;
}, multiplyScalar:function(a, b) {
  a[0] *= b;
  a[1] *= b;
  a[2] *= b;
  a[3] *= b;
  return this;
}, min:function(a, b) {
  a[0] < b && (a[0] = b);
  a[1] < b && (a[1] = b);
  a[2] < b && (a[2] = b);
  a[3] < b && (a[3] = b);
  return this;
}, max:function(a, b) {
  a[0] > b && (a[0] = b);
  a[1] > b && (a[1] = b);
  a[2] > b && (a[2] = b);
  a[3] > b && (a[3] = b);
  return this;
}, clamp:function(a, b, c) {
  this.min(a, b);
  this.max(a, c);
  return this;
}};
FSS.Color = function(a, b) {
  this.rgba = FSS.Vector4.create();
  this.hex = a || "#000000";
  this.opacity = FSS.Utils.isNumber(b) ? b : 1;
  this.set(this.hex, this.opacity);
};
FSS.Color.prototype = {set:function(a, b) {
  a = a.replace("#", "");
  var c = a.length / 3;
  this.rgba[0] = parseInt(a.substring(0 * c, 1 * c), 16) / 255;
  this.rgba[1] = parseInt(a.substring(1 * c, 2 * c), 16) / 255;
  this.rgba[2] = parseInt(a.substring(2 * c, 3 * c), 16) / 255;
  this.rgba[3] = FSS.Utils.isNumber(b) ? b : this.rgba[3];
  return this;
}, hexify:function(a) {
  a = Math.ceil(255 * a).toString(16);
  1 === a.length && (a = "0" + a);
  return a;
}, format:function() {
  var a = this.hexify(this.rgba[0]), b = this.hexify(this.rgba[1]), c = this.hexify(this.rgba[2]);
  return this.hex = "#" + a + b + c;
}};
FSS.Object = function() {
  this.position = FSS.Vector3.create();
};
FSS.Object.prototype = {setPosition:function(a, b, c) {
  FSS.Vector3.set(this.position, a, b, c);
  return this;
}};
FSS.Light = function(a, b) {
  FSS.Object.call(this);
  this.ambient = new FSS.Color(a || "#FFFFFF");
  this.diffuse = new FSS.Color(b || "#FFFFFF");
  this.ray = FSS.Vector3.create();
};
FSS.Light.prototype = Object.create(FSS.Object.prototype);
FSS.Vertex = function(a, b, c) {
  this.position = FSS.Vector3.create(a, b, c);
};
FSS.Vertex.prototype = {setPosition:function(a, b, c) {
  FSS.Vector3.set(this.position, a, b, c);
  return this;
}};
FSS.Triangle = function(a, b, c) {
  this.a = a || new FSS.Vertex;
  this.b = b || new FSS.Vertex;
  this.c = c || new FSS.Vertex;
  this.vertices = [this.a, this.b, this.c];
  this.u = FSS.Vector3.create();
  this.v = FSS.Vector3.create();
  this.centroid = FSS.Vector3.create();
  this.normal = FSS.Vector3.create();
  this.color = new FSS.Color;
  this.polygon = document.createElementNS(FSS.SVGNS, "polygon");
  this.polygon.setAttributeNS(null, "stroke-linejoin", "round");
  this.polygon.setAttributeNS(null, "stroke-miterlimit", "1");
  this.polygon.setAttributeNS(null, "stroke-width", "1");
  this.computeCentroid();
  this.computeNormal();
};
FSS.Triangle.prototype = {computeCentroid:function() {
  this.centroid[0] = this.a.position[0] + this.b.position[0] + this.c.position[0];
  this.centroid[1] = this.a.position[1] + this.b.position[1] + this.c.position[1];
  this.centroid[2] = this.a.position[2] + this.b.position[2] + this.c.position[2];
  FSS.Vector3.divideScalar(this.centroid, 3);
  return this;
}, computeNormal:function() {
  FSS.Vector3.subtractVectors(this.u, this.b.position, this.a.position);
  FSS.Vector3.subtractVectors(this.v, this.c.position, this.a.position);
  FSS.Vector3.crossVectors(this.normal, this.u, this.v);
  FSS.Vector3.normalise(this.normal);
  return this;
}};
FSS.Geometry = function() {
  this.vertices = [];
  this.triangles = [];
  this.dirty = !1;
};
FSS.Geometry.prototype = {update:function() {
  if (this.dirty) {
    var a, b;
    for (a = this.triangles.length - 1;0 <= a;a--) {
      b = this.triangles[a], b.computeCentroid(), b.computeNormal();
    }
    this.dirty = !1;
  }
  return this;
}};
FSS.Plane = function(a, b, c, e) {
  FSS.Geometry.call(this);
  this.width = a || 100;
  this.height = b || 100;
  this.segments = c || 4;
  this.slices = e || 4;
  this.segmentWidth = this.width / this.segments;
  this.sliceHeight = this.height / this.slices;
  var d, f, g;
  c = [];
  d = -.5 * this.width;
  f = .5 * this.height;
  for (a = 0;a <= this.segments;a++) {
    for (c.push([]), b = 0;b <= this.slices;b++) {
      e = new FSS.Vertex(d + a * this.segmentWidth, f - b * this.sliceHeight), c[a].push(e), this.vertices.push(e);
    }
  }
  for (a = 0;a < this.segments;a++) {
    for (b = 0;b < this.slices;b++) {
      e = c[a + 0][b + 0], d = c[a + 0][b + 1], f = c[a + 1][b + 0], g = c[a + 1][b + 1], t0 = new FSS.Triangle(e, d, f), t1 = new FSS.Triangle(f, d, g), this.triangles.push(t0, t1);
    }
  }
};
FSS.Plane.prototype = Object.create(FSS.Geometry.prototype);
FSS.Material = function(a, b) {
  this.ambient = new FSS.Color(a || "#444444");
  this.diffuse = new FSS.Color(b || "#FFFFFF");
  this.slave = new FSS.Color;
};
FSS.Mesh = function(a, b) {
  FSS.Object.call(this);
  this.geometry = a || new FSS.Geometry;
  this.material = b || new FSS.Material;
  this.side = FSS.FRONT;
  this.visible = !0;
};
FSS.Mesh.prototype = Object.create(FSS.Object.prototype);
FSS.Mesh.prototype.update = function(a, b) {
  var c, e, d, f, g;
  this.geometry.update();
  if (b) {
    for (c = this.geometry.triangles.length - 1;0 <= c;c--) {
      e = this.geometry.triangles[c];
      FSS.Vector4.set(e.color.rgba);
      for (d = a.length - 1;0 <= d;d--) {
        f = a[d], FSS.Vector3.subtractVectors(f.ray, f.position, e.centroid), FSS.Vector3.normalise(f.ray), g = FSS.Vector3.dot(e.normal, f.ray), this.side === FSS.FRONT ? g = Math.max(g, 0) : this.side === FSS.BACK ? g = Math.abs(Math.min(g, 0)) : this.side === FSS.DOUBLE && (g = Math.max(Math.abs(g), 0)), FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.ambient.rgba, f.ambient.rgba), FSS.Vector4.add(e.color.rgba, this.material.slave.rgba), FSS.Vector4.multiplyVectors(this.material.slave.rgba, 
        this.material.diffuse.rgba, f.diffuse.rgba), FSS.Vector4.multiplyScalar(this.material.slave.rgba, g), FSS.Vector4.add(e.color.rgba, this.material.slave.rgba);
      }
      FSS.Vector4.clamp(e.color.rgba, 0, 1);
    }
  }
  return this;
};
FSS.Scene = function() {
  this.meshes = [];
  this.lights = [];
};
FSS.Scene.prototype = {add:function(a) {
  a instanceof FSS.Mesh && !~this.meshes.indexOf(a) ? this.meshes.push(a) : a instanceof FSS.Light && !~this.lights.indexOf(a) && this.lights.push(a);
  return this;
}, remove:function(a) {
  a instanceof FSS.Mesh && ~this.meshes.indexOf(a) ? this.meshes.splice(this.meshes.indexOf(a), 1) : a instanceof FSS.Light && ~this.lights.indexOf(a) && this.lights.splice(this.lights.indexOf(a), 1);
  return this;
}};
FSS.Renderer = function() {
  this.halfHeight = this.halfWidth = this.height = this.width = 0;
};
FSS.Renderer.prototype = {setSize:function(a, b) {
  if (this.width !== a || this.height !== b) {
    return this.width = a, this.height = b, this.halfWidth = .5 * this.width, this.halfHeight = .5 * this.height, this;
  }
}, clear:function() {
  return this;
}, render:function(a) {
  return this;
}};
FSS.CanvasRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElement("canvas");
  this.element.style.display = "block";
  this.element.setAttribute("id", "myCanvas");
  this.context = this.element.getContext("2d");
  this.setSize(this.element.width, this.element.height);
};
FSS.CanvasRenderer.prototype = Object.create(FSS.Renderer.prototype);
FSS.CanvasRenderer.prototype.setSize = function(a, b) {
  FSS.Renderer.prototype.setSize.call(this, a, b);
  this.element.width = a;
  this.element.height = b;
  this.context.setTransform(1, 0, 0, -1, this.halfWidth, this.halfHeight);
  return this;
};
FSS.CanvasRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  this.context.clearRect(-this.halfWidth, -this.halfHeight, this.width, this.height);
  return this;
};
FSS.CanvasRenderer.prototype.render = function(a) {
  FSS.Renderer.prototype.render.call(this, a);
  var b, c, e, d, f;
  this.clear();
  this.context.lineJoin = "round";
  this.context.lineWidth = 1;
  for (b = a.meshes.length - 1;0 <= b;b--) {
    if (c = a.meshes[b], c.visible) {
      for (c.update(a.lights, !0), e = c.geometry.triangles.length - 1;0 <= e;e--) {
        d = c.geometry.triangles[e], f = d.color.format(), this.context.beginPath(), this.context.moveTo(d.a.position[0], d.a.position[1]), this.context.lineTo(d.b.position[0], d.b.position[1]), this.context.lineTo(d.c.position[0], d.c.position[1]), this.context.closePath(), this.context.strokeStyle = f, this.context.fillStyle = f, this.context.stroke(), this.context.fill();
      }
    }
  }
  return this;
};
FSS.WebGLRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElement("canvas");
  this.element.style.display = "block";
  this.lights = this.vertices = null;
  this.gl = this.getContext(this.element, {preserveDrawingBuffer:!1, premultipliedAlpha:!0, antialias:!0, stencil:!0, alpha:!0});
  if (this.unsupported = !this.gl) {
    return "WebGL is not supported by your browser.";
  }
  this.gl.clearColor(0, 0, 0, 0);
  this.gl.enable(this.gl.DEPTH_TEST);
  this.setSize(this.element.width, this.element.height);
};
FSS.WebGLRenderer.prototype = Object.create(FSS.Renderer.prototype);
FSS.WebGLRenderer.prototype.getContext = function(a, b) {
  var c = !1;
  try {
    if (!(c = a.getContext("experimental-webgl", b))) {
      throw "Error creating WebGL context.";
    }
  } catch (e) {
    console.error(e);
  }
  return c;
};
FSS.WebGLRenderer.prototype.setSize = function(a, b) {
  FSS.Renderer.prototype.setSize.call(this, a, b);
  if (!this.unsupported) {
    return this.element.width = a, this.element.height = b, this.gl.viewport(0, 0, a, b), this;
  }
};
FSS.WebGLRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  if (!this.unsupported) {
    return this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT), this;
  }
};
FSS.WebGLRenderer.prototype.render = function(a) {
  FSS.Renderer.prototype.render.call(this, a);
  if (!this.unsupported) {
    var b, c, e, d, f, g, r, t;
    g = !1;
    var p = a.lights.length, k, m, h, l = 0;
    this.clear();
    if (this.lights !== p) {
      if (this.lights = p, 0 < this.lights) {
        this.buildProgram(p);
      } else {
        return;
      }
    }
    if (this.program) {
      for (b = a.meshes.length - 1;0 <= b;b--) {
        c = a.meshes[b], c.geometry.dirty && (g = !0), c.update(a.lights, !1), l += 3 * c.geometry.triangles.length;
      }
      if (g || this.vertices !== l) {
        for (r in this.vertices = l, this.program.attributes) {
          g = this.program.attributes[r];
          g.data = new FSS.Array(l * g.size);
          k = 0;
          for (b = a.meshes.length - 1;0 <= b;b--) {
            for (c = a.meshes[b], e = 0, d = c.geometry.triangles.length;e < d;e++) {
              for (f = c.geometry.triangles[e], m = 0, h = f.vertices.length;m < h;m++) {
                vertex = f.vertices[m];
                switch(r) {
                  case "side":
                    this.setBufferData(k, g, c.side);
                    break;
                  case "position":
                    this.setBufferData(k, g, vertex.position);
                    break;
                  case "centroid":
                    this.setBufferData(k, g, f.centroid);
                    break;
                  case "normal":
                    this.setBufferData(k, g, f.normal);
                    break;
                  case "ambient":
                    this.setBufferData(k, g, c.material.ambient.rgba);
                    break;
                  case "diffuse":
                    this.setBufferData(k, g, c.material.diffuse.rgba);
                }
                k++;
              }
            }
          }
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, g.buffer);
          this.gl.bufferData(this.gl.ARRAY_BUFFER, g.data, this.gl.DYNAMIC_DRAW);
          this.gl.enableVertexAttribArray(g.location);
          this.gl.vertexAttribPointer(g.location, g.size, this.gl.FLOAT, !1, 0, 0);
        }
      }
      this.setBufferData(0, this.program.uniforms.resolution, [this.width, this.height, this.width]);
      for (g = p - 1;0 <= g;g--) {
        b = a.lights[g], this.setBufferData(g, this.program.uniforms.lightPosition, b.position), this.setBufferData(g, this.program.uniforms.lightAmbient, b.ambient.rgba), this.setBufferData(g, this.program.uniforms.lightDiffuse, b.diffuse.rgba);
      }
      for (t in this.program.uniforms) {
        switch(g = this.program.uniforms[t], b = g.location, a = g.data, g.structure) {
          case "3f":
            this.gl.uniform3f(b, a[0], a[1], a[2]);
            break;
          case "3fv":
            this.gl.uniform3fv(b, a);
            break;
          case "4fv":
            this.gl.uniform4fv(b, a);
        }
      }
    }
    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.vertices);
    return this;
  }
};
FSS.WebGLRenderer.prototype.setBufferData = function(a, b, c) {
  if (FSS.Utils.isNumber(c)) {
    b.data[a * b.size] = c;
  } else {
    for (var e = c.length - 1;0 <= e;e--) {
      b.data[a * b.size + e] = c[e];
    }
  }
};
FSS.WebGLRenderer.prototype.buildProgram = function(a) {
  if (!this.unsupported) {
    var b = FSS.WebGLRenderer.VS(a), c = FSS.WebGLRenderer.FS(a), e = b + c;
    if (!this.program || this.program.code !== e) {
      var d = this.gl.createProgram(), b = this.buildShader(this.gl.VERTEX_SHADER, b), c = this.buildShader(this.gl.FRAGMENT_SHADER, c);
      this.gl.attachShader(d, b);
      this.gl.attachShader(d, c);
      this.gl.linkProgram(d);
      if (!this.gl.getProgramParameter(d, this.gl.LINK_STATUS)) {
        return a = this.gl.getError(), d = this.gl.getProgramParameter(d, this.gl.VALIDATE_STATUS), console.error("Could not initialise shader.\nVALIDATE_STATUS: " + d + "\nERROR: " + a), null;
      }
      this.gl.deleteShader(c);
      this.gl.deleteShader(b);
      d.code = e;
      d.attributes = {side:this.buildBuffer(d, "attribute", "aSide", 1, "f"), position:this.buildBuffer(d, "attribute", "aPosition", 3, "v3"), centroid:this.buildBuffer(d, "attribute", "aCentroid", 3, "v3"), normal:this.buildBuffer(d, "attribute", "aNormal", 3, "v3"), ambient:this.buildBuffer(d, "attribute", "aAmbient", 4, "v4"), diffuse:this.buildBuffer(d, "attribute", "aDiffuse", 4, "v4")};
      d.uniforms = {resolution:this.buildBuffer(d, "uniform", "uResolution", 3, "3f", 1), lightPosition:this.buildBuffer(d, "uniform", "uLightPosition", 3, "3fv", a), lightAmbient:this.buildBuffer(d, "uniform", "uLightAmbient", 4, "4fv", a), lightDiffuse:this.buildBuffer(d, "uniform", "uLightDiffuse", 4, "4fv", a)};
      this.program = d;
      this.gl.useProgram(this.program);
      return d;
    }
  }
};
FSS.WebGLRenderer.prototype.buildShader = function(a, b) {
  if (!this.unsupported) {
    var c = this.gl.createShader(a);
    this.gl.shaderSource(c, b);
    this.gl.compileShader(c);
    return this.gl.getShaderParameter(c, this.gl.COMPILE_STATUS) ? c : (console.error(this.gl.getShaderInfoLog(c)), null);
  }
};
FSS.WebGLRenderer.prototype.buildBuffer = function(a, b, c, e, d, f) {
  d = {buffer:this.gl.createBuffer(), size:e, structure:d, data:null};
  switch(b) {
    case "attribute":
      d.location = this.gl.getAttribLocation(a, c);
      break;
    case "uniform":
      d.location = this.gl.getUniformLocation(a, c);
  }
  f && (d.data = new FSS.Array(f * e));
  return d;
};
FSS.WebGLRenderer.VS = function(a) {
  return["precision mediump float;", "#define LIGHTS " + a, "attribute float aSide;\nattribute vec3 aPosition;\nattribute vec3 aCentroid;\nattribute vec3 aNormal;\nattribute vec4 aAmbient;\nattribute vec4 aDiffuse;\nuniform vec3 uResolution;\nuniform vec3 uLightPosition[LIGHTS];\nuniform vec4 uLightAmbient[LIGHTS];\nuniform vec4 uLightDiffuse[LIGHTS];\nvarying vec4 vColor;\nvoid main() {\nvColor = vec4(0.0);\nvec3 position = aPosition / uResolution * 2.0;\nfor (int i = 0; i < LIGHTS; i++) {\nvec3 lightPosition = uLightPosition[i];\nvec4 lightAmbient = uLightAmbient[i];\nvec4 lightDiffuse = uLightDiffuse[i];\nvec3 ray = normalize(lightPosition - aCentroid);\nfloat illuminance = dot(aNormal, ray);\nif (aSide == 0.0) {\nilluminance = max(illuminance, 0.0);\n} else if (aSide == 1.0) {\nilluminance = abs(min(illuminance, 0.0));\n} else if (aSide == 2.0) {\nilluminance = max(abs(illuminance), 0.0);\n}\nvColor += aAmbient * lightAmbient;\nvColor += aDiffuse * lightDiffuse * illuminance;\n}\nvColor = clamp(vColor, 0.0, 1.0);\ngl_Position = vec4(position, 1.0);\n}"].join("\n");
};
FSS.WebGLRenderer.FS = function(a) {
  return "precision mediump float;\nvarying vec4 vColor;\nvoid main() {\ngl_FragColor = vColor;\n}";
};
FSS.SVGRenderer = function() {
  FSS.Renderer.call(this);
  this.element = document.createElementNS(FSS.SVGNS, "svg");
  this.element.setAttribute("xmlns", FSS.SVGNS);
  this.element.setAttribute("version", "1.1");
  this.element.style.display = "block";
  this.setSize(300, 150);
};
FSS.SVGRenderer.prototype = Object.create(FSS.Renderer.prototype);
FSS.SVGRenderer.prototype.setSize = function(a, b) {
  FSS.Renderer.prototype.setSize.call(this, a, b);
  this.element.setAttribute("width", a);
  this.element.setAttribute("height", b);
  return this;
};
FSS.SVGRenderer.prototype.clear = function() {
  FSS.Renderer.prototype.clear.call(this);
  for (var a = this.element.childNodes.length - 1;0 <= a;a--) {
    this.element.removeChild(this.element.childNodes[a]);
  }
  return this;
};
FSS.SVGRenderer.prototype.render = function(a) {
  FSS.Renderer.prototype.render.call(this, a);
  var b, c, e, d, f, g;
  for (b = a.meshes.length - 1;0 <= b;b--) {
    if (c = a.meshes[b], c.visible) {
      for (c.update(a.lights, !0), e = c.geometry.triangles.length - 1;0 <= e;e--) {
        d = c.geometry.triangles[e], d.polygon.parentNode !== this.element && this.element.appendChild(d.polygon), f = this.formatPoint(d.a) + " ", f += this.formatPoint(d.b) + " ", f += this.formatPoint(d.c), g = this.formatStyle(d.color.format()), d.polygon.setAttributeNS(null, "points", f), d.polygon.setAttributeNS(null, "style", g);
      }
    }
  }
  return this;
};
FSS.SVGRenderer.prototype.formatPoint = function(a) {
  return this.halfWidth + a.position[0] + "," + (this.halfHeight - a.position[1]);
};
FSS.SVGRenderer.prototype.formatStyle = function(a) {
  return a = "fill:" + a + ";" + ("stroke:" + a + ";");
};
(function() {
  function a() {
    l.remove(u);
    h.clear();
    q = new FSS.Plane(d.width * h.width, d.height * h.height, d.segments, d.slices);
    v = new FSS.Material(d.ambient, d.diffuse);
    u = new FSS.Mesh(q, v);
    l.add(u);
    var a, b;
    for (a = q.vertices.length - 1;0 <= a;a--) {
      b = q.vertices[a], b.anchor = FSS.Vector3.clone(b.position), b.step = FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1)), b.time = Math.randomInRange(0, Math.PIM2);
    }
  }
  function b(b, c) {
    h.setSize(b, c);
    FSS.Vector3.set(t, h.halfWidth, h.halfHeight);
    a();
  }
  function c() {
    g = Date.now() - r;
    var a, b, h, k, n, m = d.depth / 2;
    FSS.Vector3.copy(f.bounds, t);
    FSS.Vector3.multiplyScalar(f.bounds, f.xyScalar);
    FSS.Vector3.setZ(p, f.zOffset);
    f.autopilot && (a = Math.sin(f.step[0] * g * f.speed), b = Math.cos(f.step[1] * g * f.speed), FSS.Vector3.set(p, f.bounds[0] * a, f.bounds[1] * b, f.zOffset));
    for (a = l.lights.length - 1;0 <= a;a--) {
      b = l.lights[a], FSS.Vector3.setZ(b.position, f.zOffset), h = Math.clamp(FSS.Vector3.distanceSquared(b.position, p), f.minDistance, f.maxDistance), h = f.gravity * b.mass / h, FSS.Vector3.subtractVectors(b.force, p, b.position), FSS.Vector3.normalise(b.force), FSS.Vector3.multiplyScalar(b.force, h), FSS.Vector3.set(b.acceleration), FSS.Vector3.add(b.acceleration, b.force), FSS.Vector3.add(b.velocity, b.acceleration), FSS.Vector3.multiplyScalar(b.velocity, f.dampening), FSS.Vector3.limit(b.velocity, 
      f.minLimit, f.maxLimit), FSS.Vector3.add(b.position, b.velocity);
    }
    for (k = q.vertices.length - 1;0 <= k;k--) {
      n = q.vertices[k], a = Math.sin(n.time + n.step[0] * g * d.speed), b = Math.cos(n.time + n.step[1] * g * d.speed), h = Math.sin(n.time + n.step[2] * g * d.speed), FSS.Vector3.set(n.position, d.xRange * q.segmentWidth * a, d.yRange * q.sliceHeight * b, d.zRange * m * h - m), FSS.Vector3.add(n.position, n.anchor);
    }
    q.dirty = !0;
    e();
    requestAnimationFrame(c);
  }
  function e() {
    h.render(l);
    if (f.draw) {
      var a, b, c, d;
      for (a = l.lights.length - 1;0 <= a;a--) {
        d = l.lights[a], b = d.position[0], c = d.position[1], h.context.lineWidth = .5, h.context.beginPath(), h.context.arc(b, c, 10, 0, Math.PIM2), h.context.strokeStyle = d.ambientHex, h.context.stroke(), h.context.beginPath(), h.context.arc(b, c, 4, 0, Math.PIM2), h.context.fillStyle = d.diffuseHex, h.context.fill();
      }
    }
  }
  var d = {width:1.2, height:1.2, depth:9.5, segments:25, slices:13, xRange:0, yRange:0, zRange:0, ambient:"#102e64", diffuse:"#be0b0b", speed:1E-4},
f = {count:0.5, xyScalar:.6, zOffset:120, ambient:"#B10D88", diffuse:"#ffffff", speed:.10, gravity:400, dampening:.95, minLimit:7, maxLimit:null, minDistance:20, maxDistance:600, autopilot:!0, draw:!1, bounds:FSS.Vector3.create(), step:FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1))}, g, r = Date.now(), 
  t = FSS.Vector3.create(), p = FSS.Vector3.create(), k = document.getElementById("animation"), m = document.getElementById("cover"), h, l, u, q, v, w;
  w = new FSS.CanvasRenderer;
  h && m.removeChild(h.element);
  h = w;
  h.setSize(k.offsetWidth, k.offsetHeight);
  m.appendChild(h.element);
  l = new FSS.Scene;
  a();
  (function() {
    var a, b;
    for (a = l.lights.length - 1;0 <= a;a--) {
      b = l.lights[a], l.remove(b);
    }
    h.clear();
    for (a = 0;a < f.count;a++) {
      b = new FSS.Light(f.ambient, f.diffuse), b.ambientHex = b.ambient.format(), b.diffuseHex = b.diffuse.format(), l.add(b), b.mass = Math.randomInRange(.5, 1), b.velocity = FSS.Vector3.create(), b.acceleration = FSS.Vector3.create(), b.force = FSS.Vector3.create(), b.ring = document.createElementNS(FSS.SVGNS, "circle"), b.ring.setAttributeNS(null, "stroke", b.ambientHex), b.ring.setAttributeNS(null, "stroke-width", "0.5"), b.ring.setAttributeNS(null, "fill", "none"), b.ring.setAttributeNS(null, 
      "r", "10"), b.core = document.createElementNS(FSS.SVGNS, "circle"), b.core.setAttributeNS(null, "fill", b.diffuseHex), b.core.setAttributeNS(null, "r", "4");
    }
  })();
  window.addEventListener("resize", function(a) {
    b(k.offsetWidth, k.offsetHeight);
    e();
  });
  b(k.offsetWidth, k.offsetHeight);
  c();
})();