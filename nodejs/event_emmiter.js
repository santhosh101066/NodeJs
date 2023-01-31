import {EventEmitter} from 'events'
export default function eventEmitterFun(){
    const eventEmitter=new EventEmitter()
    eventEmitter.on('rundelay',(a)=>{
       setTimeout(()=>console.log("Running with delay",a),1000)
    })
    eventEmitter.on('run',(a)=>{
        console.log("Running",a)
     })
    eventEmitter.emit('rundelay',"value to a delay runner")
    eventEmitter.emit("run","value sent from emmit")

}
eventEmitterFun()