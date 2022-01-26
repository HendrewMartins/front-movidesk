import { AgenteCategory } from "./agenteCategory";
import { AgenteJustification } from "./agenteJustification";
import { AgenteTickets } from "./agenteTickets";
import { Category } from "./category";
import { Justification } from "./justification";
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
}