import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.css']
})
export class TabelasComponent implements OnInit {

  constructor() { }

  public produtos: any[] = []

  ngOnInit(): void {

    this.produtos.push(
      {
        id: 1,
        nome: 'Banana',
        descricao: 'Uma banana nanica',
        preco: 5.5
      }
    )

    this.produtos.push(
      {
        id: 2,
        nome: 'Maça',
        descricao: 'Uma maça pera',
        preco: 8.5
      }
    )

    this.produtos.push(
      {
        id: 3,
        nome: 'Melão',
        descricao: 'Um melão amarelo',
        preco: 6.50
      }
    )

    this.produtos.push(
      {
        id: 4,
        nome: 'Romã',
        descricao: 'Um romã',
        preco: 15.5
      }
    )

    this.produtos.push(
      {
        id: 5,
        nome: 'Melância',
        descricao: 'Uma melância',
        preco: 11.5
      }
    )
  }

}
