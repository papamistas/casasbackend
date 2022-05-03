export interface IDestino {
  idDestino: number;
  destino: string;
}

export interface ITipo {
  idTipo: number;
  tipo: string;
}

export interface ICasa {
  codCasa: number;
  seoTitle: string;
  tipo: string;
  localidade: string;
  destino: IDestino;
  tipo: ITipo;
  casaimages: { id: number };
}

export interface ICasaimages {
  id: number;
  codCasa: number;
  img1: string;
}

export interface ICasageodata {
  id: number;
  pais: string;
  distrito: string;
  endereco: string;
  codpostal: string;
  lat: string;
  lng: string;
  altitude: string;
  localidade: string;
  concelho: string;
}

export interface ICasaattributes {
  id: number;

  piscina: number;

  televisao: number;

  arCondicionado: number;

  roupascama: number;

  roupasbanho: number;

  limpeza: number;

  utilcozinha: number;

  fogao: number;

  frigorif: number;

  congel: number;

  forno: number;

  barbecue: number;

  microndas: number;

  mlavaloica: number;

  mlavaroupa: number;

  aqcentral: number;

  satcabo: number;

  internet: number;

  fengomar: number;

  estacionamento: number;

  telefone: number;

  despertador: number;

  dvd: number;

  torradeira: number;
}
