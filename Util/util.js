import util from 'util'


async function f1(){
   // throw 'happy'
    return 'hello'
}
const callback=util.callbackify(f1)

callback((err,ret)=>{
    if (err) console.log(err);
    console.log(ret);
    
})
const debuglog=util.debuglog('test')
debuglog("testing on me")
debuglog.enabled&&console.log('Debug "test" Enabled')
const exporter=util.deprecate(()=>{
    console.log('working');
},'exporter() is deprecated')
exporter()
const ast= util.formatWithOptions({colors:true},'see me %o',{try:'123'})
console.log(ast);
console.log(util.inspect.styles.string);