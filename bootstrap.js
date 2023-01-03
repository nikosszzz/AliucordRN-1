(()=>{function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return}if(info.done){resolve(value);}else {Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,'next',value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,'throw',err);}_next(undefined);})}}_asyncToGenerator(function*(){var{externalStorageDirectory,requestPermissions,download,checkPermissions}=nativeModuleProxy.AliucordNative;try{var granted=yield checkPermissions();var constants=nativeModuleProxy.DialogManagerAndroid.getConstants();if(!granted){var dialogResult=yield new Promise((res,rej)=>{nativeModuleProxy.DialogManagerAndroid.showAlert({title:'Storage Permissions',message:'Aliucord needs access to your storage to load plugins and themes.',cancelable:true,buttonPositive:'Ok',buttonNegative:'Cancel'},rej,(action,key)=>{if(action===constants.buttonClicked&&key===constants.buttonPositive)res(true);else res(false);});});if(!(dialogResult&&(yield requestPermissions()))){nativeModuleProxy.DialogManagerAndroid.showAlert({title:'Storage Permissions',message:'Access to your storage is required for aliucord to load.',cancelable:true,buttonPositive:'Ok'},()=>null,()=>null);return}}var aliucordDir=externalStorageDirectory+'/AliucordRN';AliuFS.mkdir(aliucordDir);var bundlePath=aliucordDir+'/Aliucord.js.bundle';if(!AliuFS.exists(bundlePath))yield download('https://raw.githubusercontent.com/Aliucord/AliucordRN/builds/Aliucord.js.bundle',bundlePath);globalThis.aliucord=AliuHermes.run(bundlePath);}catch(error){nativeModuleProxy.DialogManagerAndroid.showAlert({title:'Error',message:'Something went wrong while loading aliucord, check logs for the specific error.',cancelable:true,buttonPositive:'Ok'},()=>null,()=>null);console.error(error.stack);}})();})();