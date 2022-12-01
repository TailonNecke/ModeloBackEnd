import MonDataSource from '../../database/data_sources/MonDatasource';

import Modele_Exemplo from '../Entity/Monitor/Modelo_Exemplo'

export async function cadastrarMensagem(nome: string, mensagem: string){

    const Monitor = MonDataSource.getRepository(Modele_Exemplo);

    try{
    await Monitor.createQueryBuilder().insert().values([{nome: nome, mensagem: mensagem }]).execute();
    return {nome, mensagem}
    }catch(err){
        return err
    } 

}