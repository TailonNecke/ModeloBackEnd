import { initialize as MonDataSource } from "../../database/connections/MonConnection";


import Modele_Exemplo from '../models/Monitor/Modelo_Exemplo'

export async function editarMensagem( id: number, nome: string, mensagem: string){
    const conn = await MonDataSource()
    const Monitor = conn.getRepository(Modele_Exemplo);

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