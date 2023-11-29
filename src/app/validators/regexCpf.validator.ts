
import { AbstractControl } from "@angular/forms"

export function validatorCpf() {
    return (control: AbstractControl) => {
        const strCPF: string = control.value
        var soma
        var resto
        soma = 0

        const numberRegex = !/^\d+$/.test(strCPF)
        if (
            strCPF == "00000000000" ||
            strCPF.length !== 11 ||
            numberRegex
        ) return { cpfNaoValid: true }

        for (var i = 1; i <= 9; i++) soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
        resto = (soma * 10) % 11

        if ((resto == 10) || (resto == 11)) resto = 0
        if (resto != parseInt(strCPF.substring(9, 10))) return { cpfNaoValid: true }

        soma = 0
        for (i = 1; i <= 10; i++) soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
        resto = (soma * 10) % 11
   
        if ((resto == 10) || (resto == 11)) resto = 0;
        if (resto != parseInt(strCPF.substring(10, 11))) return { cpfNaoValid: true }
        return null
    }
}
