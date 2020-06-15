export default interface GenericValidation<O> {
    validationRead(object : O):void;
    validationUpdate(object : O):void;
    validationCreate(object : O):void;
}