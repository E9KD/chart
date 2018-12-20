
export class socket {
  constructor() {
    this.socket = new WebSocket('ws://appnode.biergao.vip:7272');
  }
  SocketOpen(data) {
    let that=this
    this.socket.addEventListener('open', function (event) {
      that.SocketSend(data)
    });
  }
  SocketSend(data) {
    this.socket.send(data);
  }
  ListenMessage() {
    this.socket.addEventListener('message', function (event) {
      console.log('Message from server ', event.data);
    });
  }
  CloseSocket(){
    this.socket.close()
    console.log(`关闭了socket`);
  }
}