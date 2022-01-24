import { Owner } from "./Owner";

export interface Tickets{
    id?: number;
    baseStatus?: string;
    status?: string;
    urgency?: string;
    category?: string;
    createdDate?: string;
    subject?: string;
    type?: number;
    owner?: Owner;
    
    
}