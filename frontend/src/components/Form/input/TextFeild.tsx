import { UseFormRegister } from "react-hook-form"

type Props = {
    name: string
    register: UseFormRegister<any>
    label: string
    placeholder?: string
    errorMessage?: string
    helperText?: string
}

const TextFeild = ({
    name,
    label,
    errorMessage,
    placeholder = "",
    helperText = "",
    register,
}: Props) => {
    return (
        <div className="text-field-group">
            <label htmlFor="title" className="label">
                {label}
            </label>
            <input placeholder={placeholder} {...register(name)} />
            {errorMessage ? (
                <p className="error-text">{errorMessage}</p>
            ) : (
                <p className="helper-text">{helperText}</p>
            )}
        </div>
    )
}

export default TextFeild
