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

export interface ICategory {
    id: string;
    title: string;
}

export interface IPost {
    id: string;
    title: string;
    content: string;
    status: "published" | "draft" | "rejected";
    createdAt: string;
    category: ICategory;
}