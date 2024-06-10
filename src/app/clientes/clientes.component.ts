import { Component } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: any
  cliente: Cliente = new Cliente();


    constructor(private ClienteService: ClienteService) {

    }

    ngOnInit(): void {
      this.obtenerClientes();
    }

    obtenerClientes() {
      this.ClienteService.getClientes()
      .subscribe((res) => {
        this.clientes = res;
        console.log(this.clientes);
      })
    }

    guardar(){
      this.ClienteService.saveCliente(this.cliente).subscribe(data => {
        console.log(data);
        if (data.codigo == 1)
          this.ngOnInit()
        else
          alert("no se pudo ingresar" + data.mensaje);
      })
    }

    eliminar(cliente: Cliente){
       this.ClienteService.deleteCliente(cliente).subscribe(data => {
        if (data.codigo == 1)
          this.ngOnInit()
        else
          alert("no se pudo ingresar" + data.mensaje);
       });
    }

    verCLiente(cliente: Cliente){
      this.cliente = { ...cliente };
    }
}
