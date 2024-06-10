import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Cliente } from '../domain/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  getClientes(){
    let url = environment.WS_PATH + "/calificaciones/listar"
    return this.http.get<any>(url)
  }

  //Metodo para guardar calificaciones
  saveCliente(Cliente: Cliente){
    let url = environment.WS_PATH + "/calificaciones/agregar"
    return this.http.post<any>(url, Cliente);
  }

  //Metodo para eliminar
  deleteCliente(cliente: Cliente){
    let url = environment.WS_PATH + `/calificaciones/eliminar?codigo=${cliente.codigo}`
    return this.http.delete<any>(url);
  }

  //MEtodo para devolver un cliente:
  getClientePorId(codigo: number){
    let url = environment.WS_PATH + `/calificaciones/buscar?codigo=${codigo}`
    return this.http.get<any>(url)
  }
}
