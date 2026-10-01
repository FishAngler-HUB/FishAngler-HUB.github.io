const LIMITS={pe:{min:0.1,max:30,label:'PE号数'},diameter:{min:0.01,max:2,label:'ライン直径'},length:{min:1,max:10000,label:'糸巻き量'}};
export function validateNumber(value,type,fieldName){if(value===''||value===null||value===undefined)return`${fieldName}を入力してください。`;const number=Number(value);if(!Number.isFinite(number))return`${fieldName}は数字で入力してください。`;const limit=LIMITS[type];if(number<limit.min)return`${fieldName}は${limit.min}${type==='diameter'?'mm':type==='pe'?'号':'m'}以上で入力してください。`;if(number>limit.max)return`${fieldName}は${limit.max}${type==='diameter'?'mm':type==='pe'?'号':'m'}以下で入力してください。`;return'';}
export function sizeFactor(basis,size){const n=Number(size);if(basis==='nylon'){if(!NYLON_DIAMETERS[n])throw new Error('Unsupported nylon number');return NYLON_DIAMETERS[n]**2;}return basis==='diameter'?n*n:n;}
export function calculateCapacity({basis,referenceSize,referenceLength,targetSize}){const capacity=sizeFactor(basis,referenceSize)*Number(referenceLength);const length=capacity/sizeFactor(basis,targetSize);return{status:'ok',capacity,length,precision:basis==='diameter'?'higher':'standard'};}
export function calculateBacking({basis,referenceSize,referenceLength,targetSize,targetLength,backingSize}){const capacity=sizeFactor(basis,referenceSize)*Number(referenceLength);const topUsed=sizeFactor(basis,targetSize)*Number(targetLength);const remaining=capacity-topUsed;const maximumTopLength=capacity/sizeFactor(basis,targetSize);if(remaining<0)return{status:'over',capacity,topUsed,remaining,maximumTopLength,precision:basis==='diameter'?'higher':'standard'};if(Math.abs(remaining)<1e-9)return{status:'none',capacity,topUsed,remaining:0,backingLength:0,maximumTopLength,precision:basis==='diameter'?'higher':'standard'};return{status:'ok',capacity,topUsed,remaining,backingLength:remaining/sizeFactor(basis,backingSize),maximumTopLength,precision:basis==='diameter'?'higher':'standard'};}
export function roundMeters(value){if(value<10)return Math.round(value*10)/10;return Math.round(value);}


// Nylon standard diameters: Sunline Machinegun Cast manufacturer specifications.
export const NYLON_DIAMETERS={1:.165,1.25:.190,1.5:.205,2:.235,2.5:.260,3:.285,3.5:.310,4:.330,4.5:.350,5:.370};
export function calculateNylonBacking({referenceSize,referenceLength,targetSize,targetLength,nylonReferenceSize,nylonReferenceLength,backingSize}){
 const values=[referenceSize,referenceLength,targetSize,targetLength,nylonReferenceLength].map(Number);
 if(values.some(x=>!Number.isFinite(x)||x<=0)||!NYLON_DIAMETERS[nylonReferenceSize]||!NYLON_DIAMETERS[backingSize])throw new Error('Invalid backing inputs');
 const maximumTopLength=Number(referenceSize)*Number(referenceLength)/Number(targetSize);
 const remainingFraction=1-Number(targetLength)/maximumTopLength;
 if(remainingFraction< -1e-9)return{status:'over',maximumTopLength,precision:'standard'};
 if(Math.abs(remainingFraction)<=1e-9)return{status:'none',maximumTopLength,backingLength:0,precision:'standard'};
 return{status:'ok',maximumTopLength,backingLength:Number(nylonReferenceLength)*(NYLON_DIAMETERS[nylonReferenceSize]/NYLON_DIAMETERS[backingSize])**2*remainingFraction,precision:'standard'};
}

// Shimano electric-reel Q&A provides a rough nylon-to-PE length correction of /1.2.
// This is an empirical capacity approximation, NOT a PE diameter or JAFS conversion.
export const PE_CAPACITY_CORRECTION=1.2;
export function calculateMixedSpool({referenceMaterial,targetMaterial,referenceSize,referenceLength,targetSize,targetLength,backingSize,mode}){
 if(!['pe','nylon'].includes(referenceMaterial)||!['pe','nylon'].includes(targetMaterial))throw new Error('Invalid material');
 for(const [v,t] of [[referenceSize,'pe'],[referenceLength,'length'],[targetSize,'pe']])if(validateNumber(v,t,'入力値'))throw new Error('Invalid inputs');
 const factor=(material,size)=>material==='pe'?Number(size)*PE_CAPACITY_CORRECTION:Number(size);
 // Same-material nylon retains the existing standard-diameter ratio.
 const sameNylon=referenceMaterial==='nylon'&&targetMaterial==='nylon';
 const f=(m,s)=>sameNylon?sizeFactor('nylon',s):factor(m,s);
 const capacity=f(referenceMaterial,referenceSize)*Number(referenceLength);
 const maximumTopLength=capacity/f(targetMaterial,targetSize);
 const approximate=referenceMaterial!==targetMaterial||(mode==='backing'&&targetMaterial==='pe');
 if(mode==='capacity')return{status:'ok',length:maximumTopLength,maximumTopLength,approximate};
 if(validateNumber(targetLength,'length','上糸')||!NYLON_DIAMETERS[backingSize])throw new Error('Invalid backing inputs');
 const remaining=capacity-f(targetMaterial,targetSize)*Number(targetLength);
 if(remaining < -1e-9)return{status:'over',maximumTopLength,approximate};
 return{status:Math.abs(remaining)<=1e-9?'none':'ok',backingLength:Math.max(0,remaining)/f('nylon',backingSize),maximumTopLength,approximate};
}
