import MonDataSource from '../../database/data_sources/MonDatasource';

import Modele_Exemplo from '../Entity/Monitor/Modelo_Exemplo'

export async function deletarMensagem(id: number){

    const Monitor = MonDataSource.getRepository(Modele_Exemplo);

    try{
        const mensagens = await Monitor.createQueryBuilder().select().where({modelo_id: id}).getRawOne()
        if(!mensagens){
            return {Error: "mensagem não encontrada"}
        }
    await Monitor.createQueryBuilder().delete().where({modelo_id: id}).execute()
    return {message: "mensagem deletada com sucesso"}
    }catch(err){
        return err
    } 

}