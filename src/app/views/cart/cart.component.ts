import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  productosCarrito = [
    {
      titulo: 'Audífonos Bluetooth',
      imagen: 'assets/images/audifonos.jpg',
      precio: 1200,
      descripcion: 'Audífonos inalámbricos con cancelación de ruido.'
    },
    {
      titulo: 'Smartwatch Xiaomi',
      imagen: 'assets/images/smartwatch.jpg',
      precio: 2500,
      descripcion: 'Reloj inteligente con monitoreo de salud y notificaciones.'
    },
    {
      titulo: 'Cámara Web HD',
      imagen: 'assets/images/camara.jpg',
      precio: 800,
      descripcion: 'Cámara web con resolución HD y micrófono integrado.'
    },
    {
      titulo: 'Disco Duro Externo',
      imagen: 'assets/images/disco-duro.jpg',
      precio: 1500,
      descripcion: 'Disco duro externo de 1TB para almacenamiento portátil.'
    },
    {
      titulo: 'Bocina Portátil',
      imagen: 'assets/images/bocina.jpg',
      precio: 1800,
      descripcion: 'Bocina portátil con sonido estéreo y batería de larga duración.'
    }
  ];
}
