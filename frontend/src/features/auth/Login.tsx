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
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()
        setShow(!show)
    }

    return (
        <div className="input-field-container">
            <label>Password</label>

            <div className="password-field-container ">
                <input
                    className="password-field"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    name={name}
                    onChange={onChange}
                />

                <div className="show-and-hide-container">
                    <button
                        className="show-and-hide-button"
                        onClick={e => handleClick(e)}
                    >
                        {show ? "Hide" : "Show"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        <>
            <ToastContainer />
            <div className="login">
                <div className="login-form-container">
                    <form className="login-form">
                        {/* <Box>Hint: enter anything, or leave it blank and hit login</Box> */}
                        <h3>Login</h3>
                        <div className="input-field-container">
                            <label>Email</label>

                            <div className="field-container">
                                <input
                                    onChange={handleChange}
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                        </div>

                        <PasswordInput
                            onChange={handleChange}
                            name="password"
                        />

                        <button
                            className="login-button"
                            onClick={async () => {
                                try {
                                    const user = await login(formState).unwrap()
                                    dispatch(setCredentials(user))
                                    toast(`Hi ${user.user.name}`)
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
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
