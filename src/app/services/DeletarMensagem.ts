import { initialize as MonDataSource } from "../../database/connections/MonConnection";


import Modele_Exemplo from '../models/Monitor/Modelo_Exemplo'

export async function deletarMensagem(id: number){
    const conn = await MonDataSource()
    const Monitor = conn.getRepository(Modele_Exemplo);

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