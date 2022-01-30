import { AgenteCategory } from "./agenteCategory";
import { AgenteJustification } from "./agenteJustification";
import { AgenteTickets } from "./agenteTickets";
import { AnosCategory } from "./anosCategory";
import { Category } from "./category";
import { Justification } from "./justification";
import { TicketsAnos } from "./TicketsAnos";
import { TicketsMesesDias } from "./TicketsMesesDias";
import { TicketsSituacao } from "./ticketsSituacao";
import { TicketsType } from "./ticketsType";
import { TicketsUrgency } from "./ticketsUrgencia";

export interface ResolvedConfig {
    registros?: TicketsSituacao;
    urgency?: TicketsUrgency;
    type?: TicketsType;
    agente?: AgenteTickets[];
    agenteCategory?: AgenteCategory[];
    agenteJustification?: AgenteJustification[];
    category?: Category;
    justification?: Justification;
    anos?: TicketsAnos[];
    anoscategory?: AnosCategory[];
    mesescategory?: TicketsMesesDias[];
    sevensituacao?: TicketsSituacao;
    sevenurgency?: TicketsUrgency;
    sevencategory?: Category;
    sevenagente?: AgenteTickets[];
    sevendaycategory?: TicketsMesesDias[];
    daysituacao?: TicketsSituacao;
    dayurgency?: TicketsUrgency;
    daycategory?: Category;
    dayagente?: AgenteTickets[];
    daydaycategory?: TicketsMesesDias[];
}