import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Ruta} from './ruta.model';

@model()
export class Vuelo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInicio: string;

  @property({
    type: 'string',
    required: true,
  })
  horaInicio: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaFin: string;

  @property({
    type: 'string',
    required: true,
  })
  horaFin: string;
  
  @property({
    type: 'number',
    required: true,
  })
  asientosVendidos: number;

  @property({
    type: 'string',
    required: true,
  })
  nombrePiloto: string;
  
  @belongsTo(() => Ruta, {name: 'rutaId'})
  ruta: string;


  constructor(data?: Partial<Vuelo>) {
    super(data);
  }
}

export interface VueloRelations {
  // describe navigational properties here
}

export type VueloWithRelations = Vuelo & VueloRelations;
