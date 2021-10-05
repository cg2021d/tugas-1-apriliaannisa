function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    /*
        A(-0.5, 0.5)
        B(0.5, 0.5)
        C(0.5, -0.5)
        D(-0.5, -0.5)
    */

    var vertices = [
        0.49, 0.0, 1.0, 0.0, 0.0, //a
        0.48, 0.04, 1.0, 0.0, 0.0, //b
        0.45, 0.09, 1.0, 0.0, 0.0, //c
        0.42, 0.14, 1.0, 0.0, 0.0, //d
        0.40, 0.17, 1.0, 0.0, 0.0, //e
        0.37, 0.21, 1.0, 0.0, 0.0, //f
        0.35, 0.25, 1.0, 0.0, 0.0, 
        0.31, 0.28, 1.0, 0.0, 0.0,
        0.26, 0.31, 1.0, 0.0, 0.0,
        0.22, 0.34, 1.0, 0.0, 0.0,
        0.17, 0.38, 1.0, 0.0, 0.0,
        0.14, 0.41, 1.0, 0.0, 0.0,
        0.10, 0.45, 1.0, 0.0, 0.0,
        0.06, 0.47, 1.0, 0.0, 0.0,
        0.0, 0.05, 1.0, 0.0, 0.0,
        -0.03, 0.5, 1.0, 0.0, 0.0,
        -0.08, 0.49, 1.0, 0.0, 0.0,
        -0.13, 0.47, 1.0, 0.0, 0.0,
        -0.17, 0,44, 1.0, 0.0, 0.0,
        -0.2, 0.42, 1.0, 0.0, 0.0,
        -0.23, 0.40, 1.0, 0.0, 0.0,
        -0.26, 0.38, 1.0, 0.0, 0.0,
        -0.29, 0.36, 1.0, 0.0, 0.0,
        -0.31, 0.34, 1.0, 0.0, 0.0,
        -0.34, 0.32, 1.0, 0.0, 0.0,
        -0.36, 0.29, 1.0, 0.0, 0.0,
        -0.37, 0.27, 1.0, 0.0, 0.0,
        -0.39, 0.25, 1.0, 0.0, 0.0,
        -0.41, 0.21, 1.0, 0.0, 0.0,
        -0.43, 0.19, 1.0, 0.0, 0.0,
        -0.44, 0.15, 1.0, 0.0, 0.0,
        -0.46, 0.11, 1.0, 0.0, 0.0,
        -0.48, 0.08, 1.0, 0.0, 0.0,
        -0.51, 0.03, 1.0, 0.0, 0.0,
        -0.51, 0.0, 1.0, 0.0, 0.0,
        -0.50, -0.06, 1.0, 0.0, 0.0,
        -0.49, -0.1, 1.0, 0.0, 0.0,
        -0.46, -0.15, 1.0, 0.0, 0.0,
        -0.44, -0.20, 1.0, 0.0, 0.0,
        -0.39, -0.27, 1.0, 0.0, 0.0,
        -0.35, -0.32, 1.0, 0.0, 0.0,
        -0.30, -0.36, 1.0, 0.0, 0.0,
        -0.25, -0.39, 1.0, 0.0, 0.0,
        -0.19, -0.42, 1.0, 0.0, 0.0,
        -0.12, -0.45, 1.0, 0.0, 0.0,
        -0.04, -0.48, 1.0, 0.0, 0.0,
        0.0, -0.49, 1.0, 0.0, 0.0,
        0.07, -0.44, 1.0, 0.0, 0.0,
        0.16, -0.37, 1.0, 0.0, 0.0,
        0.23, -0.30, 1.0, 0.0, 0.0,
        0.27, -0.26, 1.0, 0.0, 0.0,
        0.32, -0.19, 1.0, 0.0, 0.0,
        0.36, -0.13, 1.0, 0.0, 0.0,
        0.39, -0.04, 1.0, 0.0, 0.0,
        0.40, 0.05, 1.0, 0.0, 0.0,
        0.36, 0.13, 1.0, 0.0, 0.0,
        0.33, 0.17, 1.0, 0.0, 0.0,
        0.29, 0.23, 1.0, 0.0, 0.0,
        0.23, 0.28, 1.0, 0.0, 0.0,
        0.17, 0.32, 1.0, 0.0, 0.0,
        0.12, 0.34, 1.0, 0.0, 0.0,
        0.06, 0.36, 1.0, 0.0, 0.0,
        0.03, 0.39, 1.0, 0.0, 0.0,
        -0.01, 0.39, 1.0, 0.0, 0.0,
        -0.05, 0.39, 1.0, 0.0, 0.0,
        -0.11, 0.37, 1.0, 0.0, 0.0,
        -0.14, 0.35, 1.0, 0.0, 0.0,
        -0.18, 0.33, 1.0, 0.0, 0.0,
        -0.21, 0.31, 1.0, 0.0, 0.0,
        -0.23, 0.28, 1.0, 0.0, 0.0,
        -0.25, 0.26, 1.0, 0.0, 0.0,
        -0.27, 0.24, 1.0, 0.0, 0.0,
        -0.28, 0.21, 1.0, 0.0, 0.0,
        -0.30, 0.18, 1.0, 0.0, 0.0,
        -0.32, 0.15, 1.0, 0.0, 0.0,
        -0.33, 0.12, 1.0, 0.0, 0.0,
        -0.35, 0.08, 1.0, 0.0, 0.0,
        -0.36, 0.05, 1.0, 0.0, 0.0,
        -0.36, 0.01, 1.0, 0.0, 0.0,
        -0.37, -0.03, 1.0, 0.0, 0.0,
        -0.39, -0.06, 1.0, 0.0, 0.0,
        -0.38, -0.10, 1.0, 0.0, 0.0,
        -0.37, -0.14, 1.0, 0.0, 0.0,
        -0.36, -0.18, 1.0, 0.0, 0.0,
        -0.34, -0.22, 1.0, 0.0, 0.0,
        -0.32, -0.24, 1.0, 0.0, 0.0,
        -0.29, -0.28, 1.0, 0.0, 0.0,
        -0.27, -0.30, 1.0, 0.0, 0.0,
        -0.24, -0.33, 1.0, 0.0, 0.0,
        -0.18, -0.37, 1.0, 0.0, 0.0,
        -0.12, -0.39, 1.0, 0.0, 0.0,
        -0.05, -0.41, 1.0, 0.0, 0.0,
        0.04, -0.40, 1.0, 0.0, 0.0,
        0.11, -0.37, 1.0, 0.0, 0.0,
        0.18, -0.30, 1.0, 0.0, 0.0,
        0.23, -0.24, 1.0, 0.0, 0.0,
        0.27, -0.17, 1.0, 0.0, 0.0,
        0.29, -0.10, 1.0, 0.0, 0.0,
        0.32, -0.02, 1.0, 0.0, 0.0,
        0.34, 0.05, 1.0, 0.0, 0.0,
        0.32, 0.10, 1.0, 0.0, 0.0,
        0.30, 0.13, 1.0, 0.0, 0.0,
        0.27, 0.17, 1.0, 0.0, 0.0,
        0.25, 0.19, 1.0, 0.0, 0.0,
    ];

    // Linked list for vertices
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;

        mat4 translation = mat4(
            1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.0, uChange, 0.0, 1.0
        );
        
        void main() {
            gl_Position = vec4(aPosition + uChange, 0.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;

        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    // Preparing .exe
    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

   //sesuai nrp
    let speed = 0.0199;
    let change = 0;
    const uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function render() {
        if (change >= 1.5 || change <= -0.2) speed *= -1.0;
        change += speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 31);
        gl.drawArrays(gl.TRIANGLE_STRIP, 32, 18);

        gl.uniform1f(uChange, 0.0);

        gl.drawArrays(gl.TRIANGLE_STRIP, 50, 40);
        gl.drawArrays(gl.TRIANGLE_STRIP, 90, 28);
    }

    setInterval(render, 1000 / 60);
}
