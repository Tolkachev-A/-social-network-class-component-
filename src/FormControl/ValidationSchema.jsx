import * as yup from "yup";

export const validationSchemaLogin = yup.object().shape({
    email: yup.string().email('Укажите верный email').required('Обязательное поле'),
    password: yup.string().min(4,'min 4 символа ').required('Обязательное поле'),
})
export const validationSchema = yup.object().shape({
    text: yup.string().min(4,'min 4 символа ').max(100,'max 100 символа '),
})