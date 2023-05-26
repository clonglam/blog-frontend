import { useNavigate } from "react-router-dom"

interface Props {
    title: string
    to: string
}

const CreateButton = ({ title, to }: Props) => {
    const navigate = useNavigate()
    return <button onClick={() => navigate(to)}>{title}</button>
}

export default CreateButton
