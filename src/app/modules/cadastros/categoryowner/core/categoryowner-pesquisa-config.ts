import { PesquisaConfig } from 'src/app/modules/pesquisa/models/pesquisa-config';

export const PESQUISA_CATEGORYOWNER_CONFIG: PesquisaConfig = {
    colunas: [
        {
            label: 'Código',
            nome: 'id'
        },
        {
            label: 'Descrição',
            nome: 'desCategoria'
        }
    ],
    pagina: 0,
    pathApi: 'controllercategory'
};
