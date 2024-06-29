import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {

  static equalTo(otherField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fieldValue = control.value;
      const otherFielValue = control.root.get(otherField)?.value;

      if(fieldValue !== otherFielValue){
         return { equalTo: true}
      }
        return null;
    }
  }

}
