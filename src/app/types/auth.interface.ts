
export interface Login {
    status: boolean
    mensagem: string
    token?: string
}

export interface Saldo{
    saldo: number
    mensagem: string
    codigo: string
    cpf_cnpj: string
    nome: string
}