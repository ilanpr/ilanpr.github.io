// EDIT HERE: distances are pixels, timing is milliseconds, and positions are 0–1.
// The background can be 'graphic', 'image', or 'video'. Replace media in index.html.
const playgroundSettings = {
 background: {mode:'graphic', purple:'#963bff', pink:'#ef319b', yellow:'#ffe742', blue:'#55d9ee'},
 cover: {distance:18, tilt:3, duration:[7200,11800], hoverScale:1.20, size:220, mobileSize:112},
 box: {distance:3, duration:[8500,13000], hoverScale:1.06, width:208, height:274, mobileWidth:136, mobileHeight:174},
 // Order matches the four projects in app.js. Artwork moves independently of its card.
 artwork: [
  {distance:5,tilt:9,duration:[3800,5900]}, // pencil: playful tilt
  {distance:6,tilt:2,duration:[4600,6900]}, // chip: suspended bob
  {distance:4,tilt:6,duration:[5200,7600]}, // folder: gentle rock
  {distance:6,tilt:5,duration:[4100,6300]}  // handheld: loose float
 ],
 backdrop: {distance:14,tilt:2,duration:[11000,19000]},
 // EDIT THE CRT ART HERE: x/y are screen percentages; size is % of screen height.
 // Each src is a separate transparent file. Mobile overrides only the listed values.
 screenSprites: {
  invader:{src:'assets/screen-invader.webp',x:10,y:18,size:20,rotation:0,float:4,tilt:3,duration:7800,mobile:{x:12,y:14,size:16}},
  ghost:{src:'assets/screen-ghost.webp',x:8,y:49,size:27,rotation:0,float:5,tilt:4,duration:9200,mobile:{x:12,y:46,size:21}},
  ship:{src:'assets/screen-ship.webp',x:17,y:83,size:42,rotation:0,float:6,tilt:2,duration:11000,mobile:{x:14,y:83,size:27}},
  star:{src:'assets/screen-star.webp',x:89,y:17,size:37,rotation:0,float:4,tilt:5,duration:8500,mobile:{x:88,y:13,size:25}},
  meteor:{src:'assets/screen-meteor.webp',x:94,y:55,size:30,rotation:0,float:6,tilt:3,duration:10400,mobile:{x:87,y:46,size:24}},
  crystal:{src:'assets/screen-crystal.webp',x:83,y:86,size:17,rotation:0,float:4,tilt:4,duration:9600,mobile:{x:89,y:86,size:17}}
 },
 // x, y, rotation, scale, opacity. These are preferred positions; content clearance wins.
 coverObjects: {
  gamepad:{desktop:[.105,.17,-15,.62,1],mobile:[.24,.25,-10,.50,1],mobileWideX:.100},
  chip:{desktop:[.9,.65,12,.63,1],mobile:[.77,.58,7,.65,1],mobileWideX:.88},
  folder:{desktop:[.095,.64,-10,.82,1],mobile:[.23,.58,-7,.70,1],mobileWideX:.12},
  handheld:{desktop:[.895,.17,14,.78,1],mobile:[.78,.25,10,.58,1],mobileWideX:.88}
 }
};
// Scene poses: x, y (fractions of the stage), rotation, scale, opacity.
const cardPoses = [
 [[.22,.9,-35,.25,0],[.4,.95,-15,.25,0],[.6,.95,15,.25,0],[.78,.9,35,.25,0]],
 [[.145,.60,0,.90,1],[.856,.60,0,.90,1],[.382,.60,0,.90,1],[.619,.60,0,.90,1]],
 [[.46,.76,-8,.42,1],[.81,.54,0,1.05,1],[.55,.77,0,.42,1],[.64,.76,8,.42,1]],
 [[-.2,.7,-30,.35,0],[1.2,.55,25,.7,0],[-.2,.9,-20,.35,0],[1.2,.9,25,.35,0]],
 [[-.2,.5,-35,.5,0],[1.2,.5,35,.5,0],[-.2,.8,-35,.5,0],[1.2,.8,35,.5,0]]
];
const mobileCardPoses = [cardPoses[0],[[.28,.435,0,.82,1],[.72,.69,0,.82,1],[.72,.435,0,.82,1],[.28,.69,0,.82,1]],[[-.4,.6,-20,.5,0],[.5,.58,-4,1.2,1],[1.4,.6,20,.5,0],[1.4,.8,20,.5,0]],cardPoses[3],cardPoses[4]];
// The light follows the visual focus as each world comes into view.
const spotlightPoses=[[[.5,.39]],[[.5,.51]],[[.72,.49]],[[.7,.51]],[[.71,.43]]];
const objectPoses = [
 [[.105,.55,-12,.74,1],[.89,.65,8,.64,1],[.28,.24,-5,.38,1],[.75,.22,9,.40,1],[.13,.77,-6,.32,1],[.91,.43,7,.36,1],[.34,.79,-12,.38,1],[.68,.80,4,.38,1]],
 [[.06,.65,-20,.55,1],[.94,.6,12,.55,1],[.14,.24,-10,.5,1],[.9,.2,12,.55,1],[.11,.84,-12,.4,1],[.87,.86,12,.4,1],[.6,.22,-20,.65,1],[.43,.84,12,.4,1]],
 [[.08,.32,-15,.6,1],[.9,.86,10,.5,1],[.51,.19,0,.5,1],[.91,.25,12,.55,1],[.44,.82,-12,.4,1],[.5,.58,0,1.1,1],[.1,.86,-15,.45,1],[.88,.55,10,.4,1]],
 [[.08,.26,-20,.5,1],[.94,.63,15,.45,1],[.18,.19,-10,.5,1],[.1,.8,12,.5,1],[.31,.85,-12,.45,1],[.29,.58,5,.7,1],[.92,.22,-20,.5,1],[.25,.65,-5,1,1]],
 [[.1,.35,-20,.7,1],[.89,.33,15,.6,1],[.18,.78,-10,.5,1],[.85,.79,12,.6,1],[.34,.66,-12,1.25,1],[.45,.88,12,.45,1],[.59,.18,-20,.55,1],[.91,.6,12,.4,1]]
];
const mobileObjectPoses=objectPoses.map(row=>row.map(p=>[...p.slice(0,3),Math.max(.44,p[3]*.48),p[4]]));
mobileObjectPoses[0]=[[.15,.65,-8,.58,1],[.85,.67,6,.58,1],[.17,.24,-5,.44,1],[.83,.25,8,.44,1],[.12,.80,-6,.44,1],[.88,.80,6,.44,1],[.38,.76,-12,.44,1],[.62,.76,4,.44,1]];
for(const [name,index] of [['gamepad',0],['handheld',1],['chip',5],['folder',7]]){
 objectPoses[0][index]=playgroundSettings.coverObjects[name].desktop;
 mobileObjectPoses[0][index]=playgroundSettings.coverObjects[name].mobile;
}
function clamp01(v){return Math.max(0,Math.min(1,v));}
function smoothstep(start,end,value){const t=clamp01((value-start)/(end-start));return t*t*(3-2*t);}
function mixPose(a,b,t){const smooth=t*t*(3-2*t);return a.map((v,i)=>v+(b[i]-v)*smooth);}
function poseAt(poses,progress,index){const p=clamp01(progress)*(poses.length-1);const start=Math.min(Math.floor(p),poses.length-2);return mixPose(poses[start][index],poses[start+1][index],p-start);}
function worldAt(progress){return Math.min(4,Math.max(0,Math.round(clamp01(progress)*4)));}
// Morph around each chapter boundary; hold readable compositions between transitions.
function scrollScene(progress,still=false){
 const chapter=worldAt(progress);
 if(still)return {chapter,from:chapter,to:chapter,mix:0,poseProgress:chapter/4,headlineOpacity:1,stable:true};
 const p=clamp01(progress)*4,from=Math.floor(p),to=Math.min(4,from+1),mix=smoothstep(.28,.72,p-from);
 return {chapter,from,to,mix,poseProgress:(from+mix)/4,headlineOpacity:Math.pow(Math.abs(1-2*mix),3),stable:mix===0||mix===1};
}
function sceneWeight(scene,level){
 if(scene.from===scene.to)return level===scene.from?1:0;
 return level===scene.from?1-scene.mix:level===scene.to?scene.mix:0;
}
// Initial sheets stay centered on their owner. Only the enlarged sheet fits to the viewport.
function previewAnchor(x,y,cardHeight,w,h){
 const width=Math.min(280,w-100),height=Math.min(310,h-170);
 const scale=Math.min(.68*cardHeight/274,.70,(Math.min(x,w-x)-16)/(width*1.04+height*Math.sin(5*Math.PI/180)));
 const top=y-cardHeight/2+Math.min(64,cardHeight*.24);
 const sheets=[-1,0,1].map(side=>{
  const angle=side*5*Math.PI/180,half=width/2*Math.cos(angle)+height*Math.abs(Math.sin(angle));
  const compactX=side*width*.54*scale;
  const center=Math.max(half+16,Math.min(w-half-16,x+compactX));
  const bottom=Math.max(height*Math.cos(angle)+width/2*Math.abs(Math.sin(angle))+16,Math.min(h-130,top));
  return {compactX,expandX:center-x,expandY:bottom-top};
 });
 return {left:x,top,width,height,scale,sheets};
}
// A shared transit region keeps the fan open between its owner and the sheets.
function previewHit(point,card,panels){
 if(!point||!card||!panels.length)return false;
 const inside=r=>point[0]>=r.left-6&&point[0]<=r.right+6&&point[1]>=r.top-6&&point[1]<=r.bottom+6;
 if([card,...panels].some(inside))return true;
 // Only a narrow path below a sheet counts as transit, not the whole bounding box.
 return panels.some(r=>{
  if(card.top<=r.bottom||point[1]<r.bottom||point[1]>card.top)return false;
  const center=(card.left+card.right)/2,start=Math.max(r.left,Math.min(r.right,center));
  const t=(point[1]-r.bottom)/(card.top-r.bottom),x=start+(center-start)*t;
  return Math.abs(point[0]-x)<=24;
 });
}
function skinAt(index,count=2){return ((index%count)+count)%count;}
function pointerInStage(client,rect,width,height){return [(client[0]-rect.left)*width/rect.width,(client[1]-rect.top)*height/rect.height];}
function lightPosition(progress,client,rect,focus){
 if(focus)return [(focus.left+focus.width/2-rect.left)/rect.width,(focus.top+focus.height/2-rect.top)/rect.height];
 if(client&&client[0]>=rect.left&&client[0]<=rect.left+rect.width&&client[1]>=rect.top&&client[1]<=rect.top+rect.height)return [(client[0]-rect.left)/rect.width,(client[1]-rect.top)/rect.height];
 return poseAt(spotlightPoses,progress,0);
}
function keepInFrame(pose,w,h,size,zoom,range){
 const out=[...pose],r=out[2]*Math.PI/180,half=(size*zoom/2+range)*out[3]*(Math.abs(Math.sin(r))+Math.abs(Math.cos(r)));
 out[0]=Math.max((half+8)/w,Math.min(1-(half+8)/w,out[0]));
 out[1]=Math.max((half+8)/h,Math.min(1-(half+8)/h,out[1]));
 return out;
}
// Native compositor motion has different waypoints, timing and phase for every object.
function driftSpec(range,tilt,random=Math.random,timing=[6500,12000]){
 const keyframes=[{translate:'0px 0px',rotate:'0deg',easing:'ease-in-out'}];
 for(let i=0;i<5;i++)keyframes.push({translate:`${(random()*2-1)*range}px ${(random()*2-1)*range}px`,rotate:`${(random()*2-1)*tilt}deg`,easing:'ease-in-out'});
 keyframes.push({...keyframes[0]});
 const duration=timing[0]+random()*(timing[1]-timing[0]);
 return {keyframes,options:{duration,delay:-random()*duration,iterations:Infinity,easing:'linear'}};
}
function syncFloat(entry,blocked,previewOwner=null){
 const active=entry.hovered||entry.el===previewOwner||entry.el.matches(':focus-visible');
 entry.el.classList.toggle('is-hovered',active);
 const stopped=blocked||entry.el.inert||entry.el.getAttribute('aria-hidden')==='true';
 if(stopped||active){
  if(entry.animation.playState!=='paused')entry.animation.pause();
 }else if(entry.animation.playState!=='running')entry.animation.play();
 // The card holds still on hover while its artwork continues on a separate timeline.
 for(const animation of entry.children||[]){
  if(stopped){if(animation.playState!=='paused')animation.pause();}
  else if(animation.playState!=='running')animation.play();
 }
}
function coverLetters(text,start=0){return [...text].map((letter,i)=>`<i class="title-letter letter-${i+start}" aria-hidden="true">${letter}</i>`).join('');}
function projectPreviews(p){
 const panels=[
  ['01 / VISUAL',p.assets.Image?`<img src="${safeSrc(p.assets.Image.src)}" alt="${escapeText(p.assets.Image.alt||p.name)}">`:p.cover,p.kind],
  ['02 / PROCESS',`<div class="preview-notes"><b>${escapeText(p.name)}</b><p>${escapeText(p.process)}</p></div>`,'notes'],
  ['03 / TOOLKIT',`<div class="preview-toolkit"><b>${escapeText(p.category)}</b><p>${escapeText(p.tools)}</p><div>${p.tags.map(tag=>`<span>${escapeText(tag)}</span>`).join('')}</div></div>`,'toolkit']
 ];
 return panels.map(([label,content,kind],i)=>`<div class="cartridge-preview preview-${i}" tabindex="0" role="group" aria-label="${escapeText(p.name+' — '+label)}"><div class="preview-caption">${label} / PROJECT</div><div class="preview-content ${kind}">${content}</div></div>`).join('');
}
// Initialization stays reusable for the website and its isolated in-chat preview.
function cameraTarget(pointer,progress,still=false) {
 if(still)return {x:0,y:0,zoom:1,rotation:0};
 const distance=Math.min(1,Math.hypot(...pointer));
 return {x:-pointer[0]*20,y:-pointer[1]*14-progress*6,zoom:1.025+progress*.03+distance*.018,rotation:Math.sin(progress*Math.PI*4)*.8};
}
function initArcade(scope,scroller) {
 const stage=scope.querySelector('.arcade-stage');
 if(!stage)return;
 const page=scope===document?document.body:scope.querySelector('.preview-page');
 const journey=scope.querySelector('.arcade-journey');
 const particleRoot=scope.querySelector('.pixel-particles');
 particleRoot.innerHTML=Array.from({length:28},(_,i)=>`<i class="pixel-particle" style="--x:${(i*37+11)%100}%;--size:${i%7===0?5:2+i%2}px;--duration:${21+i%9*3}s;--delay:-${i*3.7}s;--sway:${(i%2?1:-1)*(18+i%5*12)}px;--tint:${['#d0aeff','#65ddef','#ffe479'][i%3]}"></i>`).join('');
 const camera=scope.querySelector('.arcade-camera');
 const meteorRoot=scope.querySelector('.crt-meteors');
 meteorRoot.innerHTML=Array.from({length:9},(_,i)=>`<i style="--mx:${(i*29+9)%115}%;--my:${(i*23)%80}%;--ms:${2+i%3}px;--mt:${['#72eaff','#ff87df','#ffd773'][i%3]};--md:${7+i%4*2}s;--delay:-${i*2.3}s"></i>`).join('');
 const cabinet=scope.querySelector('.arcade-cabinet');
 const video=scope.querySelector('.cover-video');
 const archiveVideo=scope.querySelector('.archive-video');
 const previewLayer=scope.querySelector('.arcade-preview-layer');
 const screenRoot=scope.querySelector('.screen-illustrations');
 screenRoot.innerHTML=Object.entries(playgroundSettings.screenSprites).map(([name,config])=>`<span class="screen-sprite" data-screen-sprite="${name}"><img class="screen-sprite-motion" src="${config.src}" alt="" width="320" height="320"></span>`).join('');
 const screenSprites=[...screenRoot.querySelectorAll('.screen-sprite')].map(el=>{
  const config=playgroundSettings.screenSprites[el.dataset.screenSprite],spec=driftSpec(config.float,config.tilt,Math.random,[config.duration,config.duration+1400]);
  const animation=el.querySelector('img').animate(spec.keyframes,spec.options);animation.pause();return {el,config,animation};
 });
 let previewCard=null,previewTimer=null,previewCollapseTimer=null,expandedSheet=null,previewPointer=null,screenSize='';
 const skinSelector=scope.querySelector('.skin-selector'),skinImages=[...skinSelector.querySelectorAll('.skin-image')];
 let skinIndex=1;
 function changeSkin(index,animate=true){
  skinIndex=skinAt(index,skinImages.length);
  skinImages.forEach((img,i)=>{img.getAnimations().forEach(a=>a.cancel());img.hidden=i!==skinIndex;});
  skinSelector.querySelector('.skin-name').textContent=skinIndex?'Chibi':'Ilan';
  skinSelector.querySelector('.skin-count').textContent='0'+(skinIndex+1)+' / 02';
  if(animate&&!motionPaused())skinImages[skinIndex].animate([{opacity:0,translate:'12px 0'},{opacity:1,translate:'0 0'}],{duration:220,easing:'steps(5,end)'});
 }
 skinSelector.querySelectorAll('[data-skin-step]').forEach(button=>button.addEventListener('click',()=>changeSkin(skinIndex+Number(button.dataset.skinStep))));
 skinSelector.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();changeSkin(skinIndex+(event.key==='ArrowLeft'?-1:1));}});
 changeSkin(1,false);
 const designBoard=scope.querySelector('.scene-design-board'),buildBoard=scope.querySelector('.scene-build-board'),archiveBoard=scope.querySelector('.scene-archive-board');
 function visual(p){return p.assets.Image?`<img src="${safeSrc(p.assets.Image.src)}" alt="${escapeText(p.assets.Image.alt||p.name)}">`:p.cover;}
 designBoard.querySelector('.design-media').innerHTML=projects[0].assets.Image.items.map(item=>`<div class="design-media-tile design"><img src="${safeSrc(item.src)}" alt="" loading="lazy"></div>`).join('');
 buildBoard.querySelector('.build-media').innerHTML=visual(projects[1]);
 function cancelPreviewClose(){clearTimeout(previewTimer);previewTimer=null;}
 function cancelPreviewCollapse(){clearTimeout(previewCollapseTimer);previewCollapseTimer=null;}
 function closePreview(){
  cancelPreviewClose();cancelPreviewCollapse();if(!previewCard)return;
  previewCard=null;expandedSheet=null;previewLayer.hidden=true;stage.classList.remove('preview-open');syncMedia();
 }
 function previewHasFocus(includeOwner=true){const focused=scope.activeElement||document.activeElement;return ((includeOwner&&previewCard===focused)||previewLayer.contains(focused))&&focused?.matches(':focus-visible');}
 function previewKeepsPointer(){return previewCard&&!previewLayer.hidden&&previewHit(previewPointer,previewCard.getBoundingClientRect(),[...previewLayer.children].map(el=>el.getBoundingClientRect()));}
 function queuePreviewClose(fromFocus=false){
  if(fromFocus)cancelPreviewClose();
  if(previewTimer!==null)return;
  previewTimer=setTimeout(()=>{previewTimer=null;if(!previewHasFocus()&&(fromFocus||!previewKeepsPointer()))closePreview();},320);
 }
 function expandPreview(sheet){
  cancelPreviewCollapse();if(sheet)cancelPreviewClose();if(expandedSheet===sheet)return;
  expandedSheet=sheet;
  [...previewLayer.children].forEach(el=>el.classList.toggle('is-expanded',el===sheet));
 }
 function queuePreviewCollapse(){
  cancelPreviewCollapse();
  previewCollapseTimer=setTimeout(()=>{previewCollapseTimer=null;if(!previewHasFocus(false))expandPreview(null);},120);
 }
 function showPreview(el){
  const project=projects.find(p=>p.id===el.dataset.project);if(!project||el.inert)return;
  cancelPreviewClose();if(previewCard===el&&!previewLayer.hidden)return;
  cancelPreviewCollapse();expandedSheet=null;previewCard=el;previewLayer.innerHTML=projectPreviews(project);
  previewLayer.hidden=false;stage.classList.add('preview-open');syncMedia();schedule();
 }
 previewLayer.addEventListener('pointerenter',cancelPreviewClose);
 previewLayer.addEventListener('pointerover',event=>{if(event.pointerType==='mouse')expandPreview(event.target.closest('.cartridge-preview'));});
 previewLayer.addEventListener('pointerout',event=>{
  const sheet=event.target.closest('.cartridge-preview');
  if(sheet&&!sheet.contains(event.relatedTarget))queuePreviewCollapse();
 });
 previewLayer.addEventListener('pointerleave',()=>{queuePreviewCollapse();queuePreviewClose();});
 previewLayer.addEventListener('focusin',event=>expandPreview(event.target.closest('.cartridge-preview')));
 previewLayer.addEventListener('focusout',event=>{if(!previewLayer.contains(event.relatedTarget))queuePreviewClose(true);});
 scope.addEventListener('keydown',event=>{if(event.key==='Escape')closePreview();});
 stage.addEventListener('pointerleave',()=>{previewPointer=null;queuePreviewClose();});
 stage.dataset.background=playgroundSettings.background.mode;
 for(const color of ['purple','pink','yellow','blue'])stage.style.setProperty('--poster-'+color,playgroundSettings.background[color]);
 for(const [key,value] of Object.entries({
  'object-size':playgroundSettings.cover.size+'px','mobile-object-size':playgroundSettings.cover.mobileSize+'px',
  'object-hover':playgroundSettings.cover.hoverScale,'card-hover':playgroundSettings.box.hoverScale,
  'card-width':playgroundSettings.box.width+'px','card-height':playgroundSettings.box.height+'px',
  'mobile-card-width':playgroundSettings.box.mobileWidth+'px','mobile-card-height':playgroundSettings.box.mobileHeight+'px'
 }))stage.style.setProperty('--'+key,value);
 const cursor=scope.querySelector('.camera-cursor');
 const objects=['gamepad','handheld','coin','star','heart','chip','pencil','folder'].map(name=>scope.querySelector(`[data-object="${name}"]`));
 const cardsRoot=scope.querySelector('#arcade-cards');
 const labels=['START SCREEN','DESIGN','ENGINEERING','PLAYBACK','ILAN'];
 const headings=[['PORT','FOLIO'],['SELECT','YOUR LEVEL'],['BUILD','& BREAK'],['IN','MOTION'],['ILAN','PRASOJO']];
 const kickers=['','01 / SELECTED WORKS','02 / COMPUTER ENGINEERING','03 / THE PLAYBACK ROOM','04 / ILAN HAWWARI PRASOJO'];
 const subtitles=['Design meets engineering.','Pick a project. Take a closer look.','From a sensor reading to a clearer picture.','Two edits. Two different moods.','I’m happiest where design and engineering meet.'];
 const sprites=['pencil','chip','folder','handheld'];
 cardsRoot.innerHTML=projects.map((p,i)=>`<button class="cartridge ${p.kind}" data-project="${p.id}" tabindex="-1" aria-hidden="true"><div class="cartridge-face motion-visual"><span class="arcade-card-badge">${p.kind==='engineering'?'PROTOTYPE':'PORTFOLIO'}</span><div class="cartridge-art"><span class="art-accent accent-a" aria-hidden="true"></span><span class="art-accent accent-b" aria-hidden="true"></span><img src="assets/${sprites[i]}.webp" alt="" width="280" height="280"></div><h3>${p.name}</h3><span class="mono">${p.category}</span><span>OPEN PROJECT / 0${i+1}</span></div></button>`).join('');
 const cards=[...cardsRoot.querySelectorAll('.cartridge')];
 for(const card of cards){card.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse')showPreview(card);});card.addEventListener('pointerleave',()=>queuePreviewClose());card.addEventListener('focus',()=>showPreview(card));card.addEventListener('blur',()=>queuePreviewClose(true));card.addEventListener('click',closePreview);}
 let progress=0,chapter=-1,frame=null,toastTimer,sceneVisible=true,displayedObjectSize;
 let pointer=[0,0],cursorPoint=[0,0],pointerClient=null;
 const cameraPose={x:0,y:0,zoom:1.025,rotation:0};
 const floats=new Map([...objects.filter(Boolean),...cards].map(el=>{
  const sprite=el.classList.contains('arcade-object'),config=sprite?playgroundSettings.cover:playgroundSettings.box;
  const range=config.distance*(.8+Math.random()*.2);
  const spec=driftSpec(range,sprite?config.tilt:0,Math.random,config.duration);
  const animation=el.querySelector('.motion-visual').animate(spec.keyframes,spec.options);
  animation.pause();
  const children=sprite?[]:[...el.querySelectorAll('.cartridge-art img,.art-accent')].map((child,index)=>{
   const art=playgroundSettings.artwork[cards.indexOf(el)%playgroundSettings.artwork.length];
   const track=driftSpec(index?art.distance*1.5:art.distance,index?12:art.tilt,Math.random,art.duration);
   const childAnimation=child.animate(track.keyframes,track.options);childAnimation.pause();return childAnimation;
  });
  const entry={el,range,zoom:config.hoverScale,animation,children,hovered:false};
  el.addEventListener('pointerenter',event=>{if(event.pointerType==='mouse'){entry.hovered=true;syncMedia();schedule();}});
  el.addEventListener('pointerleave',()=>{entry.hovered=false;syncMedia();schedule();});
  el.addEventListener('focus',()=>{syncMedia();schedule();});el.addEventListener('blur',()=>{syncMedia();schedule();});
  return [el,entry];
 }));
 const backdropAnimations=[...scope.querySelectorAll('.backdrop-visual')].filter(el=>!el.closest('.poster-ribbon,.poster-halftone,.backdrop-token')).map(el=>{
  const config=playgroundSettings.backdrop,depth=el.dataset.depth;
  const spec=driftSpec(depth?config.distance*Number(depth):config.distance,config.tilt,Math.random,config.duration);
  const animation=el.animate(spec.keyframes,spec.options);animation.pause();return animation;
 });
 video.muted=true;
 function motionPaused(){return reduceMotion.matches||page.classList.contains('paused');}
 function syncMedia(){
  const blocked=motionPaused()||page.classList.contains('modal-open')||document.hidden||!sceneVisible;
  skinSelector.querySelector('.skin-projection').style.animationPlayState=blocked||chapter!==4?'paused':'running';
  if(blocked||chapter!==3)archiveVideo.pause();
  for(const sprite of screenSprites){if(blocked||Number(cabinet.style.opacity)<.01)sprite.animation.pause();else if(sprite.animation.playState!=='running')sprite.animation.play();}
  cabinet.querySelector('.crt-grid').style.animationPlayState=blocked||chapter!==0?'paused':'running';
  meteorRoot.querySelectorAll('i').forEach(el=>el.style.animationPlayState=blocked||chapter!==0?'paused':'running');
  for(const entry of floats.values())syncFloat(entry,blocked,previewCard);
  for(const animation of backdropAnimations){
   if(blocked||playgroundSettings.background.mode!=='graphic'){if(animation.playState!=='paused')animation.pause();}
   else if(animation.playState!=='running')animation.play();
  }
  const play=!blocked&&chapter===0&&playgroundSettings.background.mode==='video';
  if(play&&video.paused)video.play().catch(()=>stage.classList.add('video-unavailable'));
  else if(!play&&!video.paused)video.pause();
 }
 function metrics(){
  const win=scroller===window,top=win?window.scrollY:scroller.scrollTop;
  const start=journey.getBoundingClientRect().top+top-(win?0:scroller.getBoundingClientRect().top);
  return {top,start,travel:Math.max(1,journey.offsetHeight-stage.offsetHeight)};
 }
 function place(el,pose,w,h,size,opacity=pose[4]){
  const [x,y,r,s]=pose;
  el.style.transform=`translate(${x*w-size[0]/2}px,${y*h-size[1]/2}px) rotate(${r}deg) scale(${s})`;
  el.style.opacity=opacity;
 }
 const headline=scope.querySelector('.arcade-headline'),profile=scope.querySelector('.arcade-player-note');
 const light=scope.querySelector('.arcade-light'),timeline=scope.querySelector('.arcade-timeline i');
 let geometry=null,layoutDirty=true,paintedScene='';
 function invalidateLayout(){layoutDirty=true;paintedScene='';schedule();}
 function draw(){
  frame=null;
  if(!sceneVisible||document.hidden)return;
  if(page.classList.contains('modal-open'))return;
  // Read geometry before any writes; pointer easing reuses the scene composition.
  if(layoutDirty){const m=metrics();geometry={start:m.start,travel:m.travel,w:stage.clientWidth,h:stage.clientHeight,screenW:screenRoot.clientWidth,screenH:screenRoot.clientHeight};layoutDirty=false;}
  const {w,h,screenW,screenH}=geometry,rect=stage.getBoundingClientRect(),mobile=w<=900,still=motionPaused();
  const top=scroller===window?window.scrollY:scroller.scrollTop;
  progress=clamp01((top-geometry.start)/geometry.travel);
  if(pointerClient){cursorPoint=pointerInStage(pointerClient,rect,w,h);pointer=[Math.max(-1,Math.min(1,(cursorPoint[0]/w-.5)*2)),Math.max(-1,Math.min(1,(cursorPoint[1]/h-.5)*2))];}
  const focused=[...floats.values()].find(entry=>!entry.el.inert&&entry.el.matches(':focus-visible'));
  const focusRect=!still&&focused?focused.el.getBoundingClientRect():null;
  const scene=scrollScene(progress,still),next=scene.chapter,poseProgress=scene.poseProgress;
  const coverWeight=sceneWeight(scene,0),sceneOpacity=scene.headlineOpacity;
  const sceneKey=[progress,w,h,still,previewCard?.dataset.project].join('|'),sceneChanged=paintedScene!==sceneKey;
  if(sceneChanged){
  paintedScene=sceneKey;
  if(!scene.stable)closePreview();
  cabinet.style.opacity=coverWeight;
  cabinet.style.scale=String(.82+.18*coverWeight);cabinet.style.translate=`0 ${-(1-coverWeight)*70}px`;
  const screenKey=screenW+'x'+screenH+'x'+mobile;
  if(screenSize!==screenKey){
   screenSize=screenKey;
   for(const sprite of screenSprites){const config=mobile?{...sprite.config,...sprite.config.mobile}:sprite.config;sprite.el.style.left=config.x+'%';sprite.el.style.top=config.y+'%';sprite.el.style.width=screenH*config.size/100+'px';sprite.el.style.transform=`translate(-50%,-50%) rotate(${config.rotation}deg)`;}
  }
  headline.style.opacity=sceneOpacity;headline.inert=sceneOpacity<.6;
  const titleShift=still?0:scene.chapter===scene.from?-scene.mix*44:(1-scene.mix)*44;
  headline.style.translate=`0 ${titleShift}px`;headline.style.scale=next===0?String(.9+.1*coverWeight):'1';
  const profileWeight=sceneWeight(scene,4);profile.style.opacity=next===4?profileWeight*sceneOpacity:0;profile.inert=profileWeight<.85;profile.style.translate=`0 ${(1-profileWeight)*70}px`;
  skinSelector.style.display=profileWeight>0?'grid':'none';skinSelector.style.opacity=next===4?profileWeight*sceneOpacity:0;skinSelector.style.translate=`0 ${(1-profileWeight)*70}px`;skinSelector.inert=next!==4||profileWeight<.85||sceneOpacity<.6;
  for(const [board,level] of [[designBoard,1],[buildBoard,2],[archiveBoard,3]]){const weight=sceneWeight(scene,level);board.style.display=weight>0?(level===3?'grid':'block'):'none';board.style.opacity=weight;board.style.scale=String(.93+.07*weight);board.style.translate=`0 ${(1-weight)*65}px`;board.inert=weight<.85;}
  if(chapter!==next){
   closePreview();
   chapter=next;stage.dataset.world=String(next);
   const title=scope.querySelector('.arcade-title');
   if(next===0){title.setAttribute('aria-label','Portfolio');scope.querySelector('#world-title-top').innerHTML=coverLetters('PORT');scope.querySelector('#world-title-bottom').innerHTML=coverLetters('FOLIO',4);}
   else {title.removeAttribute('aria-label');scope.querySelector('#world-title-top').textContent=headings[next][0];scope.querySelector('#world-title-bottom').textContent=headings[next][1];}
   scope.querySelector('.arcade-kicker').textContent=kickers[next];
   scope.querySelector('#world-subtitle').textContent=subtitles[next];
   scope.querySelector('#world-label').textContent='0'+next+' / '+labels[next];
   scope.querySelectorAll('.arcade-levels [data-level]').forEach(button=>{
    if(Number(button.dataset.level)===next)button.setAttribute('aria-current','step');
    else button.removeAttribute('aria-current');
   });
  }
  const cardSize=mobile?[playgroundSettings.box.mobileWidth,playgroundSettings.box.mobileHeight]:[playgroundSettings.box.width,playgroundSettings.box.height];
  for(const i of [0,1,2,3]){
   const card=cards[i],pose=poseAt(mobile?mobileCardPoses:cardPoses,poseProgress,i);
   if(mobile)pose[3]*=Math.min(1,h/650);
   const opacity=pose[4];
   place(card,pose,w,h,cardSize,opacity);
   const active=opacity>.6&&next>0&&next<3&&scene.stable;
   card.inert=!active;card.style.pointerEvents=active?'auto':'none';
   card.tabIndex=active?0:-1;card.setAttribute('aria-hidden',String(!active));
   if(previewCard===card){
    const anchor=previewAnchor(pose[0]*w,pose[1]*h,cardSize[1]*pose[3],w,h);
    for(const key of ['left','top'])previewLayer.style[key]=anchor[key]+'px';
    previewLayer.style.setProperty('--sheet-width',anchor.width+'px');previewLayer.style.setProperty('--sheet-height',anchor.height+'px');previewLayer.style.setProperty('--compact-scale',anchor.scale);
    [...previewLayer.children].forEach((sheet,index)=>{const position=anchor.sheets[index];sheet.style.setProperty('--compact-x',position.compactX+'px');sheet.style.setProperty('--expand-x',position.expandX+'px');sheet.style.setProperty('--expand-y',position.expandY+'px');});
   }
  }
  // Cover accents use the same chapter fade as the cabinet and its text.
  const objectSize=mobile?playgroundSettings.cover.mobileSize:Math.min(playgroundSettings.cover.size,Math.max(160,w*.16));
  if(objectSize!==displayedObjectSize){stage.style.setProperty('--resolved-object-size',objectSize+'px');displayedObjectSize=objectSize;}
  for(const i of [2,0,1,3,4,5,6,7]){
   const object=objects[i];if(!object)continue;const targetPose=poseAt(mobile?mobileObjectPoses:objectPoses,poseProgress,i);
   if(mobile&&scene.from===0){const positions=playgroundSettings.coverObjects[object.dataset.object];if(positions?.mobileWideX!==undefined)targetPose[0]+=clamp01((w-320)/330)*(positions.mobileWideX-positions.mobile[0])*coverWeight;}
   if(mobile)targetPose[3]=Math.max(.44,targetPose[3]);
   const fitted=keepInFrame(targetPose,w,h,objectSize,playgroundSettings.cover.hoverScale,playgroundSettings.cover.distance);
   const opacity=fitted[4]*coverWeight;
   place(object,fitted,w,h,[objectSize,objectSize],opacity);
   const active=opacity>.45;object.inert=!active;object.style.pointerEvents=active?'auto':'none';
   object.setAttribute('aria-hidden',String(!active));
  }
  stage.style.setProperty('--scene-shift',still?'0px':(-progress*32)+'px');
  timeline.style.transform=`scaleX(${progress})`;
  syncMedia();
  }
  const target=cameraTarget(pointer,progress,still);let moving=false;
  for(const key of Object.keys(cameraPose)){
   if(still)cameraPose[key]=target[key];
   else {const delta=target[key]-cameraPose[key];cameraPose[key]+=delta*.12;if(Math.abs(delta)>(key==='zoom'?.0003:.025))moving=true;}
  }
  camera.style.transform=still?'none':`translate3d(${cameraPose.x}px,${cameraPose.y}px,0) scale(${cameraPose.zoom}) rotate(${cameraPose.rotation}deg)`;
  const spotlight=lightPosition(poseProgress,still?null:pointerClient,rect,focusRect);
  light.style.setProperty('--light-x',(spotlight[0]*w).toFixed(1)+'px');
  light.style.setProperty('--light-y',(spotlight[1]*h).toFixed(1)+'px');
  cursor.style.transform=`translate(${cursorPoint[0]+8}px,${cursorPoint[1]+10}px) rotate(-9deg)`;
  if(still)cursor.classList.remove('tracking');
  if(moving&&sceneVisible&&!document.hidden)schedule();
 }
 function schedule(){if(frame===null)frame=requestAnimationFrame(draw);}
 function seek(level){
  closePreview();
  const m=metrics();
  scroller.scrollTo({top:m.start+clamp01(level/4)*m.travel,behavior:motionPaused()?'instant':'smooth'});
 }
 function toast(text){
  const el=scope.querySelector('.arcade-toast');el.textContent=text;el.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),1600);
 }
 scope.addEventListener('click',event=>{
  const level=event.target.closest('[data-level]');
  if(level){seek(Number(level.dataset.level));return;}
  const object=event.target.closest('[data-object]');if(!object)return;
  switch(object.dataset.object){
   case 'gamepad':seek(1);break;
   case 'handheld':openProject('type-in-motion','Video');break;
   case 'star':seek((chapter+1)%5);toast('WORLD 0'+((chapter+1)%5));break;
   case 'chip':seek(2);break;
   case 'pencil':seek(1);break;
   case 'folder':seek(3);break;
  }
  schedule();
 });
 stage.addEventListener('pointermove',event=>{
  if(event.pointerType!=='mouse')return;
  previewPointer=[event.clientX,event.clientY];
  if(previewCard){
   const sheet=event.target.closest('.cartridge-preview');
   const onSheet=sheet&&previewLayer.contains(sheet),onOwner=event.target.closest('.cartridge')===previewCard;
   if(onSheet||onOwner)cancelPreviewClose();else queuePreviewClose();
  }
  if(motionPaused())return;
  pointerClient=[event.clientX,event.clientY];
  cursor.classList.add('tracking');schedule();
 });
 stage.addEventListener('pointerleave',()=>{pointer=[0,0];pointerClient=null;cursor.classList.remove('tracking');schedule();});
 scroller.addEventListener('scroll',schedule,{passive:true});
 window.addEventListener('resize',invalidateLayout);
 document.fonts.ready.then(invalidateLayout);
 const layoutObserver=new ResizeObserver(invalidateLayout);layoutObserver.observe(stage);layoutObserver.observe(journey);
 reduceMotion.addEventListener('change',schedule);
 scope.querySelector('.motion-toggle').addEventListener('click',schedule);
 new MutationObserver(()=>{syncMedia();schedule();}).observe(page,{attributes:true,attributeFilter:['class']});
 document.addEventListener('visibilitychange',()=>{syncMedia();if(!document.hidden)schedule();});
 video.addEventListener('error',()=>stage.classList.add('video-unavailable'));
 new IntersectionObserver(entries=>{sceneVisible=entries[0].isIntersecting;syncMedia();if(sceneVisible)schedule();},{threshold:.01}).observe(stage);
 draw();
}
if(typeof document!=='undefined')initArcade(document,window);
