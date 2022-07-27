import { initialize as MonDataSource } from "../../database/connections/MonConnection";


import Modele_Exemplo from '../models/Monitor/Modelo_Exemplo'

export async function listarMensagens(){
    const conn = await MonDataSource()
    const Monitor = conn.getRepository(Modele_Exemplo);

    try{
    const mensagens = await Monitor.createQueryBuilder().select().getRawMany()
    if(!mensagens[0]){
        return {Error: "Sem mensagens cadastradas"}
    }
    return mensagens
    }catch(err){
        return err
    } 

}