// Live 3D Jabali mark for the home page hero.
//
// Plain WebGL (no libraries): one full-screen fragment shader ray-marches the
// Jabali smiley (eye, wink and smile) as glossy red lacquer, with a few game
// pieces orbiting it and soft shadows on an invisible floor. The background is
// transparent, so it sits on the page in both light and dark themes.
//
// - Tilts toward the pointer; the pieces drift apart while you hover.
// - Pauses when it's off screen or the tab is hidden.
// - Draws a single still frame when the reader prefers reduced motion.
// - Lowers its resolution on slow devices.
// - If WebGL isn't available, the flat SVG mark in the same box stays visible.

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 uRes;
uniform float uTime;
uniform vec2 uRot;     // yaw, pitch of the mark
uniform float uSpread; // how far the mark's three pieces drift apart
uniform float uLight;  // 1.0 on the light theme

const float MARK_S = 1.0;  // mark size in scene units (the mark is 2 units tall before scaling)
const float H = 0.15;      // half thickness of the mark
const float RR = 0.07;     // edge rounding
const vec3 LIGHT = vec3(-0.4496, 0.7491, 0.4857); // normalize(-0.45, 0.75, 0.486)

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }
float sdBox2(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0); }
float extrude(float d2, float z, float h) {
	vec2 w = vec2(d2 + RR, abs(z) - h + RR);
	return min(max(w.x, w.y), 0.0) + length(max(w, 0.0)) - RR;
}
float sdRoundBox(vec3 p, vec3 b, float r) { vec3 q = abs(p) - b + r; return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r; }
float sdTorus(vec3 p, vec2 t) { vec2 q = vec2(length(p.xz) - t.x, p.y); return length(q) - t.y; }
float sdOcta(vec3 p, float s) { p = abs(p); return (p.x + p.y + p.z - s) * 0.57735027; }

// The three pieces of the Jabali mark, traced from the logo (y up, 2 units tall).
float eye(vec3 p) { return extrude(length(p.xy - vec2(-0.589, 0.604)) - 0.354, p.z, H); }
float wink(vec3 p) {
	float a = sdBox2(p.xy - vec2(0.725, 0.543), vec2(0.218, 0.457));
	float b = sdBox2(p.xy - vec2(0.553, 0.820), vec2(0.391, 0.180));
	return extrude(min(a, b), p.z, H);
}
float smile(vec3 p) {
	vec2 q = p.xy - vec2(0.069, -0.126);
	return extrude(max(abs(length(q) - 0.6545) - 0.2195, q.y), p.z, H);
}

vec3 orbitPos(float i, float t) {
	float a = t * (0.30 + 0.04 * i) + i * 1.5708;
	return vec3(1.5 * cos(a), 0.7 * sin(t * 0.55 + i * 1.9) + 0.1, 1.1 * sin(a));
}

vec2 opU(vec2 a, vec2 b) { return a.x < b.x ? a : b; }

// x: distance, y: material (1 lacquer red, 2 ceramic, 3 graphite, 4 coral gem)
vec2 map(vec3 p) {
	float t = uTime;
	vec3 q = p;
	q.y -= 0.05 * sin(t * 0.9);
	q.xz = rot(uRot.x) * q.xz;
	q.yz = rot(uRot.y) * q.yz;
	q /= MARK_S;
	vec2 res;
	float bound = length(q) - 1.6;
	if (bound < 0.3) {
		float s = uSpread;
		float d = eye(q - vec3(0.0, 0.0, s * (0.30 + 0.06 * sin(t * 1.3))));
		d = min(d, wink(q - vec3(0.0, 0.0, s * (-0.14 + 0.05 * sin(t * 1.1 + 1.0)))));
		d = min(d, smile(q - vec3(0.0, 0.0, s * 0.08 * sin(t * 0.9 + 2.0))));
		res = vec2(d * MARK_S, 1.0);
	} else {
		res = vec2(bound * MARK_S, 1.0);
	}

	vec3 o = p - orbitPos(0.0, t);
	o.xy = rot(t * 0.7) * o.xy; o.yz = rot(t * 0.5) * o.yz;
	res = opU(res, vec2(sdRoundBox(o, vec3(0.15), 0.04), 2.0));

	o = p - orbitPos(1.0, t);
	o.xy = rot(t * 0.6 + 0.8) * o.xy; o.yz = rot(t * 0.9) * o.yz;
	res = opU(res, vec2(sdTorus(o, vec2(0.17, 0.06)), 3.0));

	o = p - orbitPos(2.0, t);
	res = opU(res, vec2(length(o) - 0.105, 1.0));

	o = p - orbitPos(3.0, t);
	o.xz = rot(t * 0.8) * o.xz; o.xy = rot(0.35) * o.xy;
	res = opU(res, vec2(sdOcta(o, 0.2), 4.0));
	return res;
}

vec3 calcNormal(vec3 p) {
	const vec2 e = vec2(1.0, -1.0) * 0.0008;
	return normalize(e.xyy * map(p + e.xyy).x + e.yyx * map(p + e.yyx).x +
		e.yxy * map(p + e.yxy).x + e.xxx * map(p + e.xxx).x);
}

float softShadow(vec3 ro, vec3 rd) {
	float res = 1.0;
	float t = 0.02;
	for (int i = 0; i < 28; i++) {
		float h = map(ro + rd * t).x;
		res = min(res, 9.0 * h / t);
		t += clamp(h, 0.02, 0.25);
		if (res < 0.002 || t > 5.0) break;
	}
	return clamp(res, 0.0, 1.0);
}

float calcAO(vec3 p, vec3 n) {
	float occ = 0.0;
	float sca = 1.0;
	for (int i = 0; i < 5; i++) {
		float h = 0.01 + 0.09 * float(i);
		occ += (h - map(p + n * h).x) * sca;
		sca *= 0.8;
	}
	return clamp(1.0 - 2.2 * occ, 0.0, 1.0);
}

// A rectangular studio light seen from direction r.
float softbox(vec3 r, vec3 d, vec2 size) {
	vec3 u = normalize(cross(d, vec3(0.0, 1.0, 0.0)));
	vec3 v = cross(u, d);
	vec2 q = abs(vec2(dot(r, u), dot(r, v)));
	return step(0.0, dot(r, d)) * smoothstep(size.x, size.x * 0.6, q.x) * smoothstep(size.y, size.y * 0.75, q.y);
}

vec3 env(vec3 r) {
	vec3 col = mix(vec3(0.015, 0.014, 0.018), vec3(0.20, 0.20, 0.23), smoothstep(-0.2, 0.9, r.y));
	col += vec3(4.0, 3.8, 3.6) * softbox(r, normalize(vec3(-0.55, 0.7, 0.5)), vec2(0.34, 0.2));
	col += vec3(1.7, 1.9, 2.3) * softbox(r, normalize(vec3(0.95, 0.15, 0.35)), vec2(0.06, 0.55));
	// Big diffuser in front of the mark: a soft sheen sweeps across the faces as it turns.
	vec3 fd = normalize(vec3(-0.3, 0.35, 0.89));
	col += vec3(2.6, 2.5, 2.4) * smoothstep(0.55, 0.98, dot(r, fd)) * smoothstep(-0.35, 0.25, r.y - 0.15 * r.x);
	col += vec3(0.35, 0.04, 0.05) * smoothstep(0.1, -0.7, r.y);
	return col;
}

vec3 shade(vec3 p, vec3 rd, float m) {
	vec3 n = calcNormal(p);
	float sh = softShadow(p + n * 0.004, LIGHT);
	float ao = calcAO(p, n);
	float ndl = clamp(dot(n, LIGHT), 0.0, 1.0);
	float ndv = clamp(dot(n, -rd), 0.0, 1.0);
	vec3 hv = normalize(LIGHT - rd);
	float fre = pow(1.0 - ndv, 5.0);
	vec3 R = reflect(rd, n);

	vec3 base = vec3(0.83, 0.040, 0.050);
	float coat = 1.0;
	float metal = 0.0;
	float shin = 120.0;
	if (m > 3.5) { base = vec3(0.95, 0.52, 0.48); coat = 0.8; shin = 200.0; }
	else if (m > 2.5) { base = vec3(0.10, 0.10, 0.11); metal = 1.0; shin = 90.0; }
	else if (m > 1.5) { base = vec3(0.86, 0.84, 0.80); coat = 0.35; shin = 40.0; }

	vec3 col = base * (0.06 * ao + 1.25 * ndl * sh * vec3(1.0, 0.95, 0.9));
	col += base * 0.18 * ao * vec3(1.0, 0.85, 0.85) * clamp(0.5 - 0.5 * n.y, 0.0, 1.0);
	col *= 1.0 - metal;
	vec3 refl = env(R) * mix(vec3(1.0), base * 4.0 + 0.2, metal);
	float F = mix(mix(0.04, 1.0, fre), 0.6 + 0.4 * fre, metal);
	col += refl * F * coat * ao;
	col += vec3(1.0, 0.97, 0.94) * pow(clamp(dot(n, hv), 0.0, 1.0), shin) * sh * coat * 3.0;
	return col;
}

void main() {
	vec2 uv = (2.0 * gl_FragCoord.xy - uRes) / uRes.y;
	vec3 ro = vec3(0.0, 0.08, 4.6);
	vec3 ww = normalize(vec3(0.0, -0.05, 0.0) - ro);
	vec3 uu = normalize(cross(ww, vec3(0.0, 1.0, 0.0)));
	vec3 vv = cross(uu, ww);
	const float fl = 2.4;
	vec3 rd = normalize(uv.x * uu + uv.y * vv + fl * ww);
	float px = 2.0 / (uRes.y * fl);

	float t = 0.0;
	vec2 h = vec2(0.0);
	bool hit = false;
	float cov = 1e5;
	float tCov = 0.0;
	float mCov = 1.0;
	for (int i = 0; i < 100; i++) {
		h = map(ro + rd * t);
		if (t > 0.5) {
			float c = h.x / (t * px);
			if (c < cov) { cov = c; tCov = t; mCov = h.y; }
		}
		if (h.x < 0.0005 * t) { hit = true; break; }
		t += h.x * 0.9;
		if (t > 9.0) break;
	}

	vec4 outc = vec4(0.0);
	if (hit) {
		outc = vec4(shade(ro + rd * t, rd, h.y), 1.0);
	} else {
		// Soft shadows on an invisible floor under the mark, faded out well before the canvas edges.
		float tp = (-1.45 - ro.y) / rd.y;
		if (rd.y < 0.0 && tp > 0.0) {
			vec3 g = ro + rd * tp;
			float sh = softShadow(g, LIGHT);
			float r2 = dot(g.xz, g.xz);
			float contact = exp(-r2 * 1.6);
			float fade = exp(-r2 * 0.35) * smoothstep(1.0, 0.6, abs(uv.y)) * smoothstep(1.0, 0.7, abs(uv.x) / (uRes.x / uRes.y));
			float a = ((1.0 - sh) * 0.5 + contact * 0.22) * fade * mix(1.0, 0.6, uLight);
			outc = vec4(0.0, 0.0, 0.0, a);
		}
		// Anti-aliased silhouette.
		if (cov < 1.0) {
			float a = 1.0 - clamp(cov, 0.0, 1.0);
			outc = vec4(shade(ro + rd * tCov, rd, mCov), 1.0) * a + outc * (1.0 - a);
		}
	}

	vec3 c = outc.rgb / max(outc.a, 1e-4);
	c = c * (2.51 * c + 0.03) / (c * (2.43 * c + 0.59) + 0.14);
	c = pow(clamp(c, 0.0, 1.0), vec3(1.0 / 2.2));
	gl_FragColor = vec4(c * outc.a, outc.a);
}
`;

/** @param {WebGLRenderingContext} gl @param {number} type @param {string} src */
function compile(gl, type, src) {
	const s = gl.createShader(type);
	if (!s) return null;
	gl.shaderSource(s, src);
	gl.compileShader(s);
	if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
		console.warn('[hero-3d]', gl.getShaderInfoLog(s));
		return null;
	}
	return s;
}

/** @param {HTMLElement} root */
function start(root) {
	const canvas = root.querySelector('canvas');
	if (!canvas) return;
	const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: 'low-power' });
	if (!gl) return;

	const vs = compile(gl, gl.VERTEX_SHADER, VERT);
	const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
	if (!vs || !fs) return;
	const prog = gl.createProgram();
	if (!prog) return;
	gl.attachShader(prog, vs);
	gl.attachShader(prog, fs);
	gl.linkProgram(prog);
	if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
	gl.useProgram(prog);

	const buf = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buf);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
	const aPos = gl.getAttribLocation(prog, 'aPos');
	gl.enableVertexAttribArray(aPos);
	gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

	const u = {
		res: gl.getUniformLocation(prog, 'uRes'),
		time: gl.getUniformLocation(prog, 'uTime'),
		rot: gl.getUniformLocation(prog, 'uRot'),
		spread: gl.getUniformLocation(prog, 'uSpread'),
		light: gl.getUniformLocation(prog, 'uLight'),
	};

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	let scale = Math.min(window.devicePixelRatio || 1, 1.5);
	let visible = true;
	let raf = 0;
	let live = false;
	const pointer = { x: 0, y: 0, over: false };
	const state = { yaw: 0, pitch: 0, spread: 0.3 };
	let slowFrames = 0;
	let last = performance.now();

	function resize() {
		const w = Math.max(1, Math.round(canvas.clientWidth * scale));
		const h = Math.max(1, Math.round(canvas.clientHeight * scale));
		if (canvas.width !== w || canvas.height !== h) {
			canvas.width = w;
			canvas.height = h;
		}
	}

	/** @param {number} time */
	function draw(time) {
		resize();
		gl.viewport(0, 0, canvas.width, canvas.height);
		gl.uniform2f(u.res, canvas.width, canvas.height);
		gl.uniform1f(u.time, time);
		gl.uniform2f(u.rot, state.yaw, state.pitch);
		gl.uniform1f(u.spread, state.spread);
		gl.uniform1f(u.light, document.documentElement.dataset.theme === 'light' ? 1 : 0);
		gl.drawArrays(gl.TRIANGLES, 0, 3);
		if (!live) {
			live = true;
			root.classList.add('is-live');
		}
	}

	function stillFrame() {
		state.yaw = -0.38;
		state.pitch = -0.1;
		state.spread = 0.3;
		draw(3.0);
	}

	/** @param {number} now */
	function frame(now) {
		raf = 0;
		const t = now / 1000;
		const dt = Math.min(0.1, (now - last) / 1000);
		last = now;
		const k = 1 - Math.exp(-dt * 4);
		const yaw = 0.42 * Math.sin(t * 0.33) + (pointer.over ? pointer.x * 0.7 : 0);
		const pitch = -0.08 + 0.1 * Math.sin(t * 0.27) + (pointer.over ? pointer.y * 0.35 : 0);
		state.yaw += (yaw - state.yaw) * k;
		state.pitch += (pitch - state.pitch) * k;
		state.spread += ((pointer.over ? 1 : 0.3) - state.spread) * k;

		const t0 = performance.now();
		draw(t);
		// Lower the resolution if frames take too long (slow or software GPUs).
		if (performance.now() - t0 > 24 || dt > 0.045) slowFrames++;
		else slowFrames = Math.max(0, slowFrames - 1);
		if (slowFrames > 20 && scale > 0.5) {
			scale = Math.max(0.5, scale * 0.75);
			slowFrames = 0;
		}
		loop();
	}

	function loop() {
		if (!raf && visible && !document.hidden && !reduceMotion.matches) raf = requestAnimationFrame(frame);
	}

	function restart() {
		if (reduceMotion.matches) {
			if (raf) cancelAnimationFrame(raf);
			raf = 0;
			stillFrame();
		} else {
			last = performance.now();
			loop();
		}
	}

	const hero = root.closest('.hero') || root;
	hero.addEventListener('pointermove', (e) => {
		const r = canvas.getBoundingClientRect();
		pointer.x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1));
		pointer.y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1));
		pointer.over = e.pointerType === 'mouse';
	});
	hero.addEventListener('pointerleave', () => (pointer.over = false));

	new IntersectionObserver((entries) => {
		visible = entries.some((e) => e.isIntersecting);
		restart();
	}).observe(canvas);
	document.addEventListener('visibilitychange', restart);
	reduceMotion.addEventListener('change', restart);
	new ResizeObserver(() => reduceMotion.matches && stillFrame()).observe(canvas);
	new MutationObserver(() => reduceMotion.matches && stillFrame()).observe(document.documentElement, {
		attributes: true,
		attributeFilter: ['data-theme'],
	});

	restart();
}

for (const root of document.querySelectorAll('.jabali-hero-3d')) {
	if (root instanceof HTMLElement) start(root);
}
