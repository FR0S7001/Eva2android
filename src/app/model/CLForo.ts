export class CLForo{

    id: number;
    nombre: string;
    descripcion: string;

    constructor(obj: any){
        this.id = obj && obj.id || null
        this.nombre = obj && obj.nombre || null
        this.descripcion = obj && obj.descripcion || null
    } 
}