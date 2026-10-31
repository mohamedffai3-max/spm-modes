const mods = [
 {id:1,name:"Better World",category:"World",edition:"Java",version:"1.21",size:"38 MB",downloads:128400,popular:true,newest:false,icon:"🏰",description:"حوّل عالمك إلى تجربة أكثر تنوعًا مع مناطق جديدة وتفاصيل بيئية محسّنة. هذا وصف تجريبي يمكنك تغييره عند إضافة المود الحقيقي.",download:"#",video:""},
 {id:2,name:"Dynamic Movement",category:"Movement",edition:"Java",version:"1.20.1",size:"12 MB",downloads:98200,popular:true,newest:true,icon:"🏃",description:"أضف حركات جديدة وسلاسة أكبر لشخصيتك داخل اللعبة. استبدل هذا النص بوصف المود الفعلي.",download:"#",video:""},
 {id:3,name:"Dragon Creatures",category:"Mobs",edition:"Java",version:"1.20.1",size:"64 MB",downloads:87500,popular:true,newest:false,icon:"🐉",description:"اكتشف مخلوقات جديدة وتحديات مختلفة في عالم Minecraft. أضف هنا تفاصيل المود وطريقة استخدامه.",download:"#",video:""},
 {id:4,name:"Modern Furniture",category:"Furniture",edition:"Bedrock",version:"1.21",size:"22 MB",downloads:76100,popular:false,newest:true,icon:"🛋️",description:"أثاث وديكورات عصرية لتصميم منزلك داخل Minecraft. هذا نص تجريبي قابل للتعديل.",download:"#",video:""},
 {id:5,name:"Epic Weapons",category:"Weapons",edition:"Bedrock",version:"1.20",size:"31 MB",downloads:65400,popular:true,newest:false,icon:"⚔️",description:"مجموعة أسلحة ومعدات جديدة تضيف خيارات متنوعة للقتال والاستكشاف.",download:"#",video:""},
 {id:6,name:"Explorer Tools",category:"Tools",edition:"Java",version:"1.21",size:"9 MB",downloads:42900,popular:false,newest:true,icon:"🧭",description:"أدوات مساعدة للاستكشاف والبناء مع إضافات عملية لعالمك.",download:"#",video:""},
 {id:7,name:"Wild Biomes",category:"World",edition:"Bedrock",version:"1.19+",size:"48 MB",downloads:38600,popular:false,newest:false,icon:"🌲",description:"بيئات طبيعية جديدة وتنوع أكبر في المناظر والعالم.",download:"#",video:""},
 {id:8,name:"Combat Moves",category:"Movement",edition:"Bedrock",version:"1.21",size:"16 MB",downloads:29700,popular:false,newest:true,icon:"🥷",description:"حركات قتالية وحركات شخصية إضافية لتحسين أسلوب اللعب.",download:"#",video:""}
];
let edition = localStorage.getItem("spm-edition") || "Java";
let currentCategory = "";
function selectEdition(value){edition=value;localStorage.setItem("spm-edition",value);document.querySelectorAll(".edition-btn").forEach(b=>b.classList.toggle("selected",b.dataset.edition===value));document.getElementById("editionNote").textContent=`Showing ${value} mods`;renderMods();}
function card(mod){return `<article class="mod-card" onclick="openMod(${mod.id})"><div class="mod-image"><span>${mod.icon}</span></div><div class="mod-content"><p class="mod-title">${mod.name}</p><div class="mod-meta"><span class="tag red">${mod.version}</span><span class="tag">${mod.edition}</span><span>${mod.size}</span></div><div class="mod-bottom"><span>⬇ ${formatDownloads(mod.downloads)} downloads</span><strong>View details →</strong></div></div></article>`}
function formatDownloads(n){return n>=1000?(n/1000).toFixed(1)+"K":n}
function renderMods(){
 const q=(document.getElementById("searchInput")?.value||"").toLowerCase();
 let list=mods.filter(m=>m.edition===edition&&(!currentCategory||m.category===currentCategory)&&(!q||m.name.toLowerCase().includes(q)||m.category.toLowerCase().includes(q)));
 const most=[...list].sort((a,b)=>b.downloads-a.downloads).slice(0,4);
 const popular=list.filter(m=>m.popular).slice(0,4);
 const newest=list.filter(m=>m.newest).slice(0,4);
 document.getElementById("mostGrid").innerHTML=most.length?most.map(card).join(""):emptyMessage();
 document.getElementById("popularGrid").innerHTML=popular.length?popular.map(card).join(""):emptyMessage();
 document.getElementById("newGrid").innerHTML=newest.length?newest.map(card).join(""):emptyMessage();
}
function emptyMessage(){return `<p class="detail-description">لا توجد مودات في هذا القسم حاليًا.</p>`}
function filterCategory(category){currentCategory=category;document.getElementById("searchInput").value="";renderMods();document.getElementById("most-downloaded").scrollIntoView({behavior:"smooth"});showToast("Category: "+category)}
function openMod(id){
 const m=mods.find(x=>x.id===id);if(!m)return;
 document.getElementById("home-view").classList.add("hidden");document.getElementById("details-view").classList.remove("hidden");
 document.getElementById("detailTitle").textContent=m.name;document.getElementById("detailEdition").textContent=m.edition;document.getElementById("detailVersion").textContent=m.version;document.getElementById("detailSize").textContent=m.size;document.getElementById("detailDescription").textContent=m.description;
 const download=document.getElementById("downloadButton");download.href=m.download||"#";
 const video=document.getElementById("detailVideo");video.innerHTML=m.video?`<iframe src="${m.video}" title="Mod tutorial video" allowfullscreen></iframe>`:`<div class="play-button">▶</div><span>أضف رابط فيديو الشرح لهذا المود</span>`;
 document.getElementById("similarGrid").innerHTML=mods.filter(x=>x.id!==id&&x.edition===m.edition&&x.category===m.category).slice(0,4).map(card).join("")||mods.filter(x=>x.id!==id&&x.edition===m.edition).slice(0,4).map(card).join("");
 window.scrollTo({top:0,behavior:"smooth"});
}
function showHome(){document.getElementById("details-view").classList.add("hidden");document.getElementById("home-view").classList.remove("hidden");currentCategory="";renderMods();window.scrollTo({top:0,behavior:"smooth"})}
function openTrailer(){showToast("أضف رابط التريلر داخل script.js لتشغيل الفيديو هنا.");}
function showToast(message){const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}
document.querySelectorAll(".edition-btn").forEach(b=>b.classList.toggle("selected",b.dataset.edition===edition));
document.getElementById("editionNote").textContent=`Showing ${edition} mods`;
renderMods();
