import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../providers/chat.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit  {

  mensaje = '';
  elemento: any;

  constructor(public chatService: ChatService ) {

    // this._cs.cargarMensajes()
    //         .subscribe( (mensajes: any[]) => {

    //           console.log( mensajes );
    //         } );

    this.chatService.cargarMensajes()
            .subscribe( () => {

              this.elemento.scrollTop = this.elemento.scrollHeight;
            });

  }

  ngOnInit(): void {

    this.elemento = document.getElementById('app-mensajes');

  }


  enviar_mensaje(){
    console.log( this.mensaje );

    if ( this.mensaje.length === 0){
      return;
    }

    this.chatService.agregarMensaje( this.mensaje )
                    .then( () => this.mensaje = '' )
                    .catch( (err) => console.error ('Error al enviar', err ) );

  }

}
