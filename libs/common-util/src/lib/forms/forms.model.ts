import { FormControl } from "@angular/forms";

export type FromControlType<T> = { [key in keyof T]: FormControl<T[key]>};


export type FormFieldType = 'textbox' | 'textarea' |'button' ;

export type TextBoxAttributes = {
    placeholder : string;
}
export type ButtonAttributes = {
    caption : string;
}
export type TextAreaAttributes = {
   rows : number;
   cols : number;}

export type Border = {
    color : string;
    size : string;
}

export interface BaseAttributes {
    type : FormFieldType;
    border : Border, 
    name : string;
    id : string;
}


export type FormField<T extends FormFieldType> = BaseAttributes & (
    T extends 'textbox' ? TextBoxAttributes : 
    T extends 'textarea' ? TextAreaAttributes :
    T extends 'button' ? ButtonAttributes : never 
);

export interface ComponentConfig<T extends FormFieldType> {
    fieldType : T;
    component : ()=>any;
    options : FormField<T>;
}


// export interface FieldComponentInterface<T extends FormFieldType> {
    
//     // mapFieldComponent : (field : FormField<T>) => ComponentConfig<T>;
// }