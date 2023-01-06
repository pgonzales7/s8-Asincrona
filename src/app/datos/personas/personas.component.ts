import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  nombre = '';
  apellido = '';
  edad = 0;
  esMayor = false;

  users = [
    { nombre: 'Santiago', apellido: 'Sanchez', edad: 28},
    { nombre: 'Pablo', apellido: 'Torres', edad: 11},
  ];

  constructor() {}

  addUser(name:string, lastName:string, age:string){
    event?.preventDefault();
    console.log(name, lastName, age);
    this.nombre = name;
    this.apellido = lastName;
    this.edad = parseInt(age);
    this.users.push({nombre: this.nombre, apellido: this.apellido, edad: this.edad});
  }
}
