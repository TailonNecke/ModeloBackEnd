import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity('Modelo_Exemplo')
class Modelo_Exemplo {

    @PrimaryGeneratedColumn("increment")
    modelo_id: number;

    @Column()
    nome: string;

    @Column()
    mensagem: string;
    
}

export default Modelo_Exemplo;