import {AbstractControl} from '@angular/forms';

export class CustomValidators
{

// static checkName(control:AbstractControl):{"checkName":true} | null {
//     let namePattern1 : RegExp=/^[a-zA-Z ]+/;
//     let namePattern2 : RegExp=/^[^ ].*/;
//     let namePattern3 : RegExp=/.*[^ ]$/;
//     let value = control.value;
//     let matches: boolean = namePattern1.test(value) && namePattern2.test(value) && namePattern3.test(value);

//     if(!matches)
//     {
//        // alert("name checked")
//        return {"checkName": true}

//     }
//       return null;
// }


// static checkName(fc: FormControl){
static checkName(control:AbstractControl):{"checkName":true} | null {
    let value = control.value;
    if(value.toLowerCase() === "abc123" || value.toLowerCase() === "123abc"){
      return ({"checkName": true});
    } else {
      return (null);
    }
  }


}