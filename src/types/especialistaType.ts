import {z} from "zod"
import { esquemaCadastroEnderecoEspecialista } from "../esquemas/esquemasEspecialista"
export type EnderecoProps = {
    logradouro: string,
    bairro: string,
    localidade: string,
    uf: string,
  }
 export type FormCadastroEnderecoEspecialista = z.infer<typeof esquemaCadastroEnderecoEspecialista>