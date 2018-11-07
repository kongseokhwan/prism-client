import Utils from './utils';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

export default {
  connected: false,
  topicPrefix: "/topic",
  wsApiPrefix: "/ws/api",
  manualDisconnect: false,
  listeners: [],
  connect (callback) {
    this.manualDisconnect = false;
    if(!Utils.isDefined(this.stomp)){
      let socket = new SockJS('/stomp');
      this.stomp = Stomp.over(socket);
      this.stomp.connect({}, 
        (frame) => {
          this.connected = true;
          this.listeners.forEach(listener => {
            if(listener.uuid && listener.topic && listener.callback) {
              this.stomp.subscribe(listener.topic, listener.callback, {id: listener.uuid});
            }
          });
          if(Utils.isDefined(callback)){
            callback();
          }
        },
        () => {
          this.clear();
          if(!this.manualDisconnect) {
            setTimeout(() => {
              this.connect(callback);
            }, 5000);
          }
        }
      );
    }
  },
  disconnect () {
    if(this.isConnected()){
      let self = this;
      this.manualDisconnect = true;
      this.stomp.disconnect(function(){
        self.clear();
      });
    }
  },
  clear () {
    this.stomp = null;
    this.connected = false;
  },
  isConnected(){
    return Utils.isDefined(this.stomp) && this.connected;
  },
  subscribe(topic, callback){
    if(!Utils.isDefined(topic) || typeof topic !== "string" ||
        !Utils.isDefined(callback) || typeof callback !== "function"){
      console.error("Cannot subscribe to stomp for invalid topic or function: " + topic + ", " + callback);
      return;
    }
    
    if(!topic.startsWith("/")){
      topic = "/" + topic;
    }

    if(!topic.startsWith(this.topicPrefix)){
      topic = this.topicPrefix + topic;
    }

    let uuid = Utils.uuid();
    this.listeners.push({ uuid, topic, callback })
    if(this.isConnected()){
      this.stomp.subscribe(topic, callback, {id: uuid});
    }else{
      this.connect();
    }
    
    return uuid;
  },
  unsubscribe(uuid){
    this.listeners.forEach((listener, index, array) => {
      if(listener.uuid === uuid) {
        array.splice(index, 1);
      }
    });

    if(this.isConnected()){
      this.stomp.unsubscribe(uuid);
    }
  },
  publish (topic, obj){
    if(!Utils.isDefined(topic) || typeof topic !== "string" ||
        !Utils.isDefined(obj) || typeof callback !== "object"){
      console.error("Cannot send to stomp for invalid topic or object of message: " + topic + ", " + obj);
      return;
    }
    
    if(!topic.startsWith("/")){
      topic = "/" + topic;
    }

    if(!topic.startsWith(this.wsApiPrefix)){
      topic = this.wsApiPrefix + topic;
    }

    if(this.isConnected()){
      this.stomp.send(topic, {}, JSON.stringify(obj));
    }else{
      let self = this;
      let timerId = setInterval(() => {
        if(self.isConnected()) {
          clearInterval(timerId);
          self.stomp.send(topic, {}, JSON.stringify(obj));
        }
      });
    }
  }
}
