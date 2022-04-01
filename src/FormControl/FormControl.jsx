import style from "./FormControl.module.css"


const FormCreate = ({field, form, ...props}) => {
    const errors = form.touched[`${field.name}`] && form.errors[`${field.name}`]
    return <div className={errors && style.errors}>
        {props.children}
        {errors && <div className={style.errors}>{form.errors[`${field.name}`]}</div>}
    </div>


}
export const FormCreateInput = (props) => {
    const {field, form, ...restProps} = props
    return <div>
        <FormCreate  {...props} >
            <input  {...restProps} {...field} {...form}/>
        </FormCreate>
    </div>
}
export const FormCreateTexterare = (props) => {
    const {field, form, ...restProps} = props
    return <div>
        <FormCreate  {...props} >
            <textarea className={style.textarea} {...restProps} {...field} {...form}/>
        </FormCreate>
    </div>
}

