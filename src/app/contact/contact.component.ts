import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageModel} from '../service/message.model';
import {MessageService} from "../service/message.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  onEmailSend(form: NgForm) {

    const message = {
      title: form.value.title,
      body: form.value.text,
      city: form.value.city,
      email: form.value.email,
    };

    const booleanObservable = this.messageService.addMessage(message);
    booleanObservable.subscribe(send => {
      if (send) {
        alert('email sent');
        form.reset();
      } else {
        alert(' we could not send your message -try again ');
      }
    });

    console.log('wyslano wiadomsoc : ' + JSON.stringify(message));
    form.reset()
  }
}




