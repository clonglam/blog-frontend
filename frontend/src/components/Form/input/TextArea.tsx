import React from "react"
import { UseFormRegister } from "react-hook-form"

type Props = {
    name: string
    register: UseFormRegister<any>
    label: string
    placeholder?: string
    errorMessage?: string
    helperText?: string
    textAreaProps?: React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >
}

const TextArea = ({
    name,
    label,
    errorMessage,
    placeholder = "",
    helperText = "",
    textAreaProps,
    register,
}: Props) => {
    return (
        <div className="text-area-group">
            <label htmlFor="title" className="label">
                {label}
            </label>
            <textarea
                placeholder={placeholder}
                {...textAreaProps}
                {...register(name)}
            />
            {errorMessage ? (
                <p className="error-text">{errorMessage}</p>
            ) : (
                <p className="helper-text">{helperText}</p>
            )}
        </div>
    )
}

export default TextArea
