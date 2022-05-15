/* Expresiones regulares */
const passwordRegExp = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"
);
const phoneRegExp = new RegExp(/^\d{10}$/);
const emailRegExp = new RegExp(/\S+@\S+\.\S+/);
const namesRegExp = new RegExp(/^[a-zA-Z]+( ?.+[a-zA-Z]+)+$/);
const addressRegExp = new RegExp(/^\w+(\s\w+){2,}/);

export { passwordRegExp, phoneRegExp, emailRegExp, namesRegExp, addressRegExp }