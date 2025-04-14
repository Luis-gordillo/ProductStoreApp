import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  producto: any;
  productos = [
    { id: 1, nombre: 'Laptop Lenovo', descripcion: 'Laptop con procesador Intel Core i7.', precio: 18999 },
    { id: 2, nombre: 'Smartphone Samsung', descripcion: 'Un smartphone con pantalla AMOLED.', precio: 9999 },
    { id: 3, nombre: 'Monitor LG 24"', descripcion: 'Monitor Full HD de 24 pulgadas.', precio: 3999 },
    { id: 4, nombre: 'Teclado Mecánico Redragon', descripcion: 'Teclado mecánico retroiluminado.', precio: 1299 },
    { id: 5, nombre: 'Mouse Inalámbrico Logitech', descripcion: 'Mouse inalámbrico ergonómico.', precio: 799 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtén el ID del producto desde la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Busca el producto correspondiente en la lista
    this.producto = this.productos.find(p => p.id === id);
  }

  agregarAlCarrito() {
    alert('Producto agregado al carrito');
  }
}