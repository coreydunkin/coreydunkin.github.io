(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,o,e){},15:function(n,o,e){},16:function(n,o,e){"use strict";e.r(o);var r=e(0),t=e.n(r),c=e(7),i=e.n(c),a=(e(14),e(1)),l=e(2),u=e(4),m=e(3),f=e(5),s=(e(15),new(function(){function n(){var o=this;Object(a.a)(this,n),this.newNumber="289.0",this.colorA="vec3(247.0/255.0,178.0/255.0,103.0/255.0);",this.colorB="vec3(247.0/255.0,157.0/255.0,101.0/255.0);",this.colorC="vec3(244.0/255.0,132.0/255.0,95.0/255.0);",this.colorD="vec3(242.0/255.0,112.0/255.0,89.0/255.0);",this.colorE="vec3(242.0/255.0,92.0/255.0,84.0/255.0);",this.colorF="vec3(199.0/255.0,76.0/255.0,69.0/255.0);",this.vertexShaderSource="\n      attribute vec2 a_position;\n      void main() {\n        gl_Position = vec4(a_position, 0, 1);\n      }\n    ",this.clear=function(n,e,r,t){o.gl.clearColor(n,e,r,t),o.gl.clear(o.gl.COLOR_BUFFER_BIT)}}return Object(l.a)(n,[{key:"init",value:function(n,o,e,r){this.gl=n,this.program=o,this.assign=e,this.anim=r,console.log(n),console.log(this.colorA)}},{key:"changeNumbersIceCream",value:function(){this.assign([0,75,227,245,73,172,255],[0,0,99,204,198,237,255],[0,130,151,232,229,255,255])}},{key:"changeNumbersPumpkin",value:function(){this.assign([0,247,247,244,242,242,255],[0,178,157,132,112,92,255],[0,103,101,95,89,84,255])}},{key:"changeNumbersSpooky",value:function(){this.assign([0,190,159,148,248,244,255],[0,175,136,124,246,182,255],[0,211,190,183,190,188,255])}},{key:"changeNumbersAnim",value:function(){this.anim([0,252,165,89,37,243,255],[0,186,1,0,0,243,255],[0,4,4,4,1,243,255])}}]),n}())),v="\n      precision highp float;\n    \n    \n      #define PI 3.14159265359;\n    \n      uniform vec2 color7New;\n      uniform vec2 u_resolution;\n      uniform vec2 u_mouse;\n      uniform float u_time;\n      uniform float u_xpos;\n      uniform float u_ypos;\n\n      uniform float color1;\n      uniform float color2;\n      uniform float color3;\n      uniform float color4;\n      uniform float color5;\n      uniform float color6;\n\n      uniform float colorR1;\n      uniform float colorG1;\n      uniform float colorB1;\n\n      uniform float colorR2;\n      uniform float colorG2;\n      uniform float colorB2;\n\n      uniform float colorR3;\n      uniform float colorG3;\n      uniform float colorB3;\n\n      uniform float colorR4;\n      uniform float colorG4;\n      uniform float colorB4;\n      \n      uniform float colorR5;\n      uniform float colorG5;\n      uniform float colorB5;\n      \n      uniform float colorR6;\n      uniform float colorG6;\n      uniform float colorB6;\n    \n    vec3 mod289(vec3 x) {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n    \n    vec4 mod289(vec4 x) {\n      return x - floor(x * (1.0 / 289.0)) * 289.0;\n    }\n    \n    vec4 permute(vec4 x) {\n         return mod289(((x*34.0)+1.0)*x);\n    }\n    \n    vec4 taylorInvSqrt(vec4 r)\n    {\n      return 1.79284291400159 - 0.85373472095314 * r;\n    }\n    \n    float snoise(vec3 v)\n      { \n      const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n    \n      vec3 i  = floor(v + dot(v, C.yyy) );\n      vec3 x0 =   v - i + dot(i, C.xxx) ;\n    \n      vec3 g = step(x0.yzx, x0.xyz);\n      vec3 l = 1.0 - g;\n      vec3 i1 = min( g.xyz, l.zxy );\n      vec3 i2 = max( g.xyz, l.zxy );\n    \n      vec3 x1 = x0 - i1 + C.xxx;\n      vec3 x2 = x0 - i2 + C.yyy;\n      vec3 x3 = x0 - D.yyy;\n    \n      i = mod289(i); \n      vec4 p = permute( permute( permute( \n                 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n               + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) \n               + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n    \n      float n_ = 0.142857142857;\n      vec3  ns = n_ * D.wyz - D.xzx;\n    \n      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);\n    \n      vec4 x_ = floor(j * ns.z);\n      vec4 y_ = floor(j - 7.0 * x_ );\n    \n      vec4 x = x_ *ns.x + ns.yyyy;\n      vec4 y = y_ *ns.x + ns.yyyy;\n      vec4 h = 1.0 - abs(x) - abs(y);\n    \n      vec4 b0 = vec4( x.xy, y.xy );\n      vec4 b1 = vec4( x.zw, y.zw );\n    \n      vec4 s0 = floor(b0)*2.0 + 1.0;\n      vec4 s1 = floor(b1)*2.0 + 1.0;\n      vec4 sh = -step(h, vec4(0.0));\n    \n      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n    \n      vec3 p0 = vec3(a0.xy,h.x);\n      vec3 p1 = vec3(a0.zw,h.y);\n      vec3 p2 = vec3(a1.xy,h.z);\n      vec3 p3 = vec3(a1.zw,h.w);\n    \n      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n      p0 *= norm.x;\n      p1 *= norm.y;\n      p2 *= norm.z;\n      p3 *= norm.w;\n    \n      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n      m = m * m;\n      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), \n                                    dot(p2,x2), dot(p3,x3) ) );\n      }\n    \n      void main() {\n\n        vec3 color1 = vec3(colorR1/255.0,colorG1/255.0,colorB1/255.0);\n        vec3 color2 = vec3(colorR2/255.0,colorG2/255.0,colorB2/255.0);\n        vec3 color3 = vec3(colorR3/255.0,colorG3/255.0,colorB3/255.0);\n        vec3 color4 = vec3(colorR4/255.0,colorG4/255.0,colorB4/255.0);\n        vec3 color5 = vec3(colorR5/255.0,colorG5/255.0,colorB5/255.0);\n        vec3 color6 = vec3(colorR6/255.0,colorG6/255.0,colorB6/255.0);\n        vec2 lt = vec2(gl_FragCoord.x + u_xpos, gl_FragCoord.y + u_ypos);\n        vec2 st = lt.xy/u_resolution.xy;\n        st.x *= u_resolution.x/u_resolution.y;\n        vec3 color = vec3(0.0);\n        vec2 pos = vec2(st*0.6);\n        float DF = 0.0;\n        float a = 0.0;\n        vec2 vel = vec2(u_time*.1);\n        st.xy *= 0.4;\n        float r = snoise(vec3(st.x,st.y,u_time * 0.1));\n        if(r >= -1.0 && r < -0.6){\n          color = color1;\n        } else if(r >= -0.6 && r < -0.2){\n       color = color2;\n        } else if(r >= -0.2 && r < 0.2){\n          color = color3;\n        } else if(r >= 0.2 && r < 0.6){\n           color = color4;\n        } else {\n          color = color5;\n        }\n        gl_FragColor = vec4(color,1.0);\n      }\n    ",h=function(n){function o(){return Object(a.a)(this,o),Object(u.a)(this,Object(m.a)(o).apply(this,arguments))}return Object(f.a)(o,n),Object(l.a)(o,[{key:"componentDidMount",value:function(){!function(){var n,o,e,r,t,c,i,a,l,u=[],m=[],f=[],h=[],d=[],x=[],y=(new Date).getTime(),p=0;h[1]=247,d[1]=178,x[1]=103,h[2]=247,d[2]=157,x[2]=101,h[3]=244,d[3]=132,x[3]=95,h[4]=242,d[4]=112,x[4]=89,h[5]=242,d[5]=92,x[5]=84,h[6]=199,d[6]=76,x[6]=69;var w,g=s.vertexShaderSource;n=document.getElementById("webgl"),o=n.getContext("webgl")||n.getContext("experimental-webgl"),n.width=window.innerWidth,n.height=window.innerHeight,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight),r=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,r),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),o.STATIC_DRAW),e=s.vertexShaderSource,g=o.createShader(o.VERTEX_SHADER),o.shaderSource(g,e),o.compileShader(g),e=v,w=o.createShader(o.FRAGMENT_SHADER),o.shaderSource(w,e),o.compileShader(w),l=o.createProgram(),o.attachShader(l,g),o.attachShader(l,w),o.linkProgram(l),o.useProgram(l),c=o.getUniformLocation(l,"u_resolution"),t=o.getUniformLocation(l,"u_time"),i=o.getUniformLocation(l,"numNumber");var b=function(n,e,r){for(var t=1;t<7;t++)u[t]=o.getUniformLocation(l,"colorR"+t),o.uniform1f(u[t],n[t]);for(var c=1;c<7;c++)m[c]=o.getUniformLocation(l,"colorG"+c),o.uniform1f(m[c],e[c]);for(var i=1;i<7;i++)f[i]=o.getUniformLocation(l,"colorB"+i),o.uniform1f(f[i],r[i])};b(h,d,x),o.uniform2f(c,n.width,n.height),o.uniform1f(t,p),o.uniform1f(i,"vec3(147.0/255.0,178.0/255.0,103.0/255.0)"),function e(){var r=(new Date).getTime();p=(r-y)/1e3,o.uniform1f(t,p),window.requestAnimationFrame(e,n),a=o.getAttribLocation(l,"a_position"),o.enableVertexAttribArray(a),o.vertexAttribPointer(a,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLES,0,6)}(),window.addEventListener("load",function(n){}),window.addEventListener("resize",function(e){n.width=window.innerWidth,n.height=window.innerHeight,o.viewport(0,0,window.innerWidth,window.innerHeight),c=o.getUniformLocation(l,"u_resolution")}),s.init(o,l,b,function(n,e,r){for(var t=function(t){u[t]=o.getUniformLocation(l,"colorR"+t),m[t]=o.getUniformLocation(l,"colorG"+t),f[t]=o.getUniformLocation(l,"colorB"+t);var c=function n(){d[t]>e[t]?(d[t]--,o.uniform1f(m[t],d[t]),window.requestAnimationFrame(n)):d[t]<e[t]?(d[t]++,o.uniform1f(m[t],d[t]),window.requestAnimationFrame(n)):i()},i=function n(){x[t]>r[t]?(x[t]--,o.uniform1f(f[t],x[t]),window.requestAnimationFrame(n)):x[t]<r[t]&&(x[t]++,o.uniform1f(f[t],x[t]),window.requestAnimationFrame(n))};requestAnimationFrame(function e(){h[t]>n[t]?(h[t]--,o.uniform1f(u[t],h[t]),window.requestAnimationFrame(e)):h[t]<n[t]?(h[t]++,o.uniform1f(u[t],h[t]),window.requestAnimationFrame(e)):c()})},c=1;c<7;c++)t(c)})}()}},{key:"render",value:function(){return t.a.createElement("canvas",{id:"webgl"})}}]),o}(r.Component),d=function(n){function o(){var n,e;Object(a.a)(this,o);for(var r=arguments.length,t=new Array(r),c=0;c<r;c++)t[c]=arguments[c];return(e=Object(u.a)(this,(n=Object(m.a)(o)).call.apply(n,[this].concat(t)))).handleClickPumpkin=function(n){s.changeNumbersPumpkin()},e.handleClickIceCream=function(n){s.changeNumbersIceCream()},e.handleClickSpooky=function(n){s.changeNumbersSpooky()},e.handleClickAnim=function(n){s.changeNumbersAnim()},e}return Object(f.a)(o,n),Object(l.a)(o,[{key:"render",value:function(){return t.a.createElement("div",null,t.a.createElement("button",{className:"pumpkin",onClick:this.handleClickPumpkin},"Pumpkin themed"),t.a.createElement("button",{className:"icecream",onClick:this.handleClickIceCream},"Ice Cream themed"),t.a.createElement("button",{className:"spooky",onClick:this.handleClickSpooky},"Spooky themed"),t.a.createElement("button",{className:"animate maccas",onClick:this.handleClickAnim},"Maccas themed"))}}]),o}(r.Component),x=function(n){function o(){return Object(a.a)(this,o),Object(u.a)(this,Object(m.a)(o).apply(this,arguments))}return Object(f.a)(o,n),Object(l.a)(o,[{key:"render",value:function(){return t.a.createElement("div",{className:"App"},t.a.createElement(h,null),t.a.createElement(d,null))}}]),o}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(t.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},8:function(n,o,e){n.exports=e(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.1700e70c.chunk.js.map