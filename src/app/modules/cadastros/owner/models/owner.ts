import { CategoryOwner } from "../../categoryowner/models/categoryowner";

export interface Owner{
    id?: number;
    personType?: number;
    profileType?: number;
    businessName?: string;
    email?: string;
    phone?: string;
    pathPicture?: string;
    categoryOwner?:CategoryOwner;
}