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