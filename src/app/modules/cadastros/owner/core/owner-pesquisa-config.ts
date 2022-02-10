import { PesquisaConfig } from 'src/app/modules/pesquisa/models/pesquisa-config';

export const PESQUISA_OWNER_CONFIG: PesquisaConfig = {
    colunas: [
        {
            label: 'Código',
            nome: 'id'
        },
        {
            label: 'Agente',
            nome: 'businessName'
        },
        {
            label: 'Email',
            nome: 'email'
        }
    ],
    pagina: 0,
    pathApi: 'owner'
};
