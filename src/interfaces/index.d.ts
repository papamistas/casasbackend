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
}
