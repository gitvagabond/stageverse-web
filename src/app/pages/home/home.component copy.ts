// import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
// import { PubSubService } from '../../core/pub-sub.service';

// import { BoxGeometry, Clock, WebGLRenderer, Scene, PerspectiveCamera, MeshLambertMaterial, Mesh, PlaneGeometry, DirectionalLight, ImageUtils, TextureLoader } from 'three';
// // import * as Stats from 'stats-js';
// import videojs from 'video.js';
// import { ElementRef, Renderer2, ViewChild } from '@angular/core';

// // const mediaSources = require('videojs-contrib-media-sources'); increase browser support with MSE polyfill
// // require('videojs-contrib-hls'); // auto attaches hlsjs handler
// // const hlsjs = require('videojs-contrib-hls.js'); auto attaches hlsjs handler
// // const panorama = require('videojs-panorama');

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

//   private _videoPlayer: any;
//   private camera;
//   private scene;
//   private renderer;
//   private geometry;
//   private material;
//   private mesh;
//   private cubeSineDriver;
//   private clock;
//   private smokeParticles;
//   private delta;
//   // private stats;
//   private animateFn = this.animate;

//   private debounceTimeout: any = null;

//   // private get canvas(): HTMLCanvasElement {
//   //   return this.canvasRef.nativeElement;
//   // }

//   @ViewChild('deviceContainer') deviceContainer: ElementRef;

//   @ViewChild('test') testRef: ElementRef;
//   @ViewChild('canvas') canvasRef: ElementRef;
//   @ViewChild('anchor') _anchor: ElementRef;

//   constructor(private _pubSubService: PubSubService,
//       private _renderer: Renderer2) { }

//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll(event) {
//     console.log("windows scrolling...");
//     // console.log('deviceContainer.scrollTop: ' + this.deviceContainer.nativeElement.scrollTop);    
//   }

//   onDeviceContainerScroll(event): void {
//     console.log("device container scroll!!");
//   }

//   @HostListener('window:resize', [])
//   onWindowResize() {
//     clearTimeout(this.debounceTimeout);
//     this.debounceTimeout = setTimeout(() => {
//       console.log('finished resizing');
//       this.init();
//     }, 100);
//   }

//   ngOnInit() {

//     this._pubSubService.isDarkScheme.emit(true);
//     this._pubSubService.isNavFixed.emit(true);
//     this._pubSubService.isNavTransparent.emit(false);
//     // this._pubSubService.isDarkScheme.emit(this.isDarkScheme);
//     // this._pubSubService.setNavBackgroundColor.emit('linear-gradient(0deg, #ffffff, #f7f7f7)');
//     this._pubSubService.setNavBackgroundColor.emit('linear-gradient(0deg, transparent, rgba(0,0,0,0.7))');
//     this._pubSubService.setBodyBackgroundColor.emit('linear-gradient(to bottom, #001F3C 0%, #000A0E 100%)');
//     this._pubSubService.resetFooterBackgroundColor.emit(null);

//   }

//   ngAfterViewInit() {

//     this.init();
//     this.animate();

//     // console.log('testRef: ' + this.testRef.nativeElement);
//     // console.log('canvasRef: ' + this.canvasRef.nativeElement);

//     this._videoPlayer = videojs(document.getElementById('homeHeroVideo'), {}, () => {
//       // setTimeout(() => {
//       // console.log('this._videoPlayer.duration()', this._videoPlayer.duration());
//       // }, 1000);

//       //   this._videoPlayer.src({
//       //     src: 'http://localhost:4200/assets/melodyvr-hero-video-new-loop-small.mp4',
//       //     // src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
//       //     // src: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
//       //     // src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
//       //     // src: 'https://dq7wri6k81hb6.cloudfront.net/AST2017123011285696970E83D6F56035B56402A568DFA5641AAF38CDBC0/playlist.m3u8',
//       //     // type: 'application/x-mpegURL'
//       //     type: 'video/mp4'
//       //   });
//       //   // this._videoPlayer.panorama({
//       //   //   clickAndDrag: true,
//       //   //   callback: () => {
//       //   //     console.log("callback");
//       //   //     this._videoPlayer.play();
//       //   //   }
//       //   // });
//       //   console.log('this._videoPlayer.duration()', this._videoPlayer.duration());
//       //   // This is functionally the same as the previous example.
//     });


//   }

//   ngOnDestroy() {
//     // this._videoPlayer.dispose();
//   }


//   init() {
//     // this.stats = new Stats();
//     // this.stats.setMode(0);
//     // // this.stats.domElement.style.position = 'fixed';
//     // this.stats.domElement.style.position = 'absolute';
//     // this.stats.domElement.style.zIndex = 1;
//     // // this.stats.domElement.style.zIndex = 1000;
//     // this.stats.domElement.style.left = '0px';
//     // this.stats.domElement.style.top = '0px';
//     // document.body.appendChild(this.stats.domElement);

//     this.clock = new Clock();

//     // renderer = new WebGLRenderer({ alpha: true});
//     this.renderer = new WebGLRenderer({ canvas: this.canvasRef.nativeElement, alpha: true });

//     this.renderer.setSize(window.innerWidth, window.innerHeight);
//     this.renderer.setClearColor(0x000000, 0);

//     this.scene = new Scene();

//     this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
//     this.camera.position.z = 1000;
//     this.scene.add(this.camera);

//     this.geometry = new BoxGeometry(200, 200, 200);
//     // material = new MeshLambertMaterial({ color: 0xaa6666, wireframe: false });
//     this.material = new MeshLambertMaterial({ color: 0xff0000, wireframe: false });
//     this.mesh = new Mesh(this.geometry, this.material);
//     // scene.add( mesh );
//     this.cubeSineDriver = 0;

//     ImageUtils.crossOrigin = ''; // Need this to pull in crossdomain images from AWS


//     const light = new DirectionalLight(0xffffff, 4.5);
//     // const light = new DirectionalLight(0x000000, 1);
//     light.position.set(-1, 0, 1);
//     this.scene.add(light);

//     // const smokeTexture = new TextureLoader().load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
//     const smokeTexture = new TextureLoader().load('/assets/Smoke-Element.png');
//     // const smokeMaterial = new MeshLambertMaterial({ color: 0x79dbd5, map: smokeTexture, transparent: true });
//     // const smokeMaterial = new MeshLambertMaterial({ color: 0x468984, map: smokeTexture, transparent: true });
//     const smokeMaterial = new MeshLambertMaterial({ color: 0xff0032, map: smokeTexture, transparent: true });
//     const smokeGeo = new PlaneGeometry(300, 300);
//     this.smokeParticles = [];


//     for (let p = 0; p < 80; p++) {
//       const particle = new Mesh(smokeGeo, smokeMaterial);
//       particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
//       particle.rotation.z = Math.random() * 360;
//       this.scene.add(particle);
//       this.smokeParticles.push(particle);
//     }

//     // console.log('stats: ' + this.stats);
//     // document.body.appendChild(renderer.domElement);

//   }

//   animate() {

//     const _this = this;

//     function animateCallback() {
//       // note: js includes requestAnimationFrame shim
//       // console.log('animateCallback: ' + _this.delta);
//       // _this.stats.begin();
//       _this.delta = _this.clock.getDelta();
//       requestAnimationFrame(animateCallback);
//       _this.evolveSmoke();
//       _this.render();
//       // _this.stats.end();
//     }

//     animateCallback();

//   }

//   evolveSmoke() {
//     let sp = this.smokeParticles.length;
//     while (sp--) {
//       this.smokeParticles[sp].rotation.z += (this.delta * 0.2);
//     }
//   }

//   render() {

//     this.mesh.rotation.x += 0.005;
//     this.mesh.rotation.y += 0.01;
//     this.cubeSineDriver += .01;
//     this.mesh.position.z = 100 + (Math.sin(this.cubeSineDriver) * 500);
//     this.renderer.render(this.scene, this.camera);

//   }

//   goToAnchor() {
//     this._anchor.nativeElement.scrollIntoView({ behavior: 'smooth' });
//   }

// }
