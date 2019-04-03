export interface Product {
    title:string;
    description:string;
    price:number;
    pictures:string [];
    created_at:Date;
    category:string;
    state:string;
    id:string;
    avaibility:Avaibility;
    city:string;
    averagStar:number;

}

export interface Avaibility {
    availabe:boolean;
    type:string;
    feed?:number;
}
