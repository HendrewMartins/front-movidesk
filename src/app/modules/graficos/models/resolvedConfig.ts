import { AgenteTickets } from "./agenteTickets";
import { TicketsSituacao } from "./ticketsSituacao";
import { TicketsType } from "./ticketsType";
import { TicketsUrgency } from "./ticketsUrgencia";

export interface ResolvedConfig {
    registros?: TicketsSituacao;
    urgency?: TicketsUrgency;
    type?: TicketsType;
    agente?: AgenteTickets[];
}