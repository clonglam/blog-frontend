import * as React from "react"

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import { LoginRequest, useLoginMutation } from "../../app/services/auth"
import { setCredentials } from "./authSlice"

function PasswordInput({
    name,
    onChange,
}: {
    name: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}) {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div>
            <input
                // pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name={name}
                onChange={onChange}
            />
            <div>
                <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
            </div>
        </div>
    )
}

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const toast = useToast()

    const [formState, setFormState] = React.useState<LoginRequest>({
        email: "",
        password: "",
    })

    const [login, { isLoading }] = useLoginMutation()

    const handleChange = ({
        target: { name, value },
    }: React.ChangeEvent<HTMLInputElement>) =>
        setFormState(prev => ({ ...prev, [name]: value }))

    return (
        <div>
            <ToastContainer />

            <div>
                {/* <Box>Hint: enter anything, or leave it blank and hit login</Box> */}
                <div>
                    <input
                        onChange={handleChange}
                        name="email"
                        type="text"
                        placeholder="Email"
                    />
                </div>

                <div>
                    <PasswordInput onChange={handleChange} name="password" />
                </div>
                <button
                    onClick={async () => {
                        try {
                            const user = await login(formState).unwrap()
                            dispatch(setCredentials(user))
                            navigate("/admin/blog")
                        } catch (err) {
                            toast("Error", {
                                type: "error",
                            })
                        }
                    }}
                    disabled={isLoading}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
