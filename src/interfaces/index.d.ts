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
    id: number,
    pais: string,
    distrito: string,
    endereco: string,
    codpostal: string,
    lat: string,
    lng: string,
    altitude: string,
    localidade: string,
    concelho: string
}