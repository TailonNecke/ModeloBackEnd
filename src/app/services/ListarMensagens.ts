import MonDataSource from '../../database/data_sources/MonDatasource';

import Modele_Exemplo from '../Entity/Monitor/Modelo_Exemplo'

export async function listarMensagens(){
   
    const Monitor = MonDataSource.getRepository(Modele_Exemplo);

    try{
    const mensagens = await Monitor.createQueryBuilder().select().orderBy("Modelo_Exemplo.modelo_id").getRawMany()
    if(!mensagens[0]){
        return {Error: "Sem mensagens cadastradas"}
    }
    return mensagens
    }catch(err){
        return err
    } 

}