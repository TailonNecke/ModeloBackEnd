import MonDataSource from '../../database/data_sources/MonDatasource';

import Modele_Exemplo from '../Entity/Monitor/Modelo_Exemplo'

export async function editarMensagem( id: number, nome: string, mensagem: string){

    const Monitor = MonDataSource.getRepository(Modele_Exemplo);

    try{
        const mensagens = await Monitor.createQueryBuilder().select().where({modelo_id: id}).getRawOne()
        if(!mensagens){
            return {Error: "mensagem não encontrada"}
        }
        await Monitor.createQueryBuilder().update().where({modelo_id: id}).set({nome: nome, mensagem: mensagem }).execute();
        return {nome, mensagem}
    }catch(err){
        return err
    } 

}