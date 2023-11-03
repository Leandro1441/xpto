import { AbstractControl } from "@angular/forms"

export function regexEmail() {
    return (control: AbstractControl) => {
        if (control.value !== undefined) {
            const match = control.value.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)
            return match ? null : { notEmailValid: true }
        }
        return null
    }
}
