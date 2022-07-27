import { initialize as MonDataSource } from "../../database/connections/MonConnection";


import Modele_Exemplo from '../models/Monitor/Modelo_Exemplo'

export async function cadastrarMensagem(nome: string, mensagem: string){
    const conn = await MonDataSource()
    const Monitor = conn.getRepository(Modele_Exemplo);

    try{
    await Monitor.createQueryBuilder().insert().values([{nome: nome, mensagem: mensagem }]).execute();
    return {nome, mensagem}
    }catch(err){
        return err
    } 

}