import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
import { z } from "zod"
import TextArea from "../../../components/Form/input/TextArea"
import TextFeild from "../../../components/Form/input/TextFeild"
import { useAddPostMutation } from "../../../app/services/posts"
import { useNavigate } from "react-router-dom"

const schema = z.object({
    title: z
        .string()
        .max(255, "Product Title should not longer than 255 letter")
        .nonempty("Product Title is required."),
    slug: z
        .string()
        .max(255, "Slug should not longer than 255 letter")
        .nonempty("Slug is required."),
    content: z.string().nonempty("Description is required"),
    ogImage: z.string(),
    description: z.string(),
    // featured: z.boolean(),
    // .max(1024, "Description should not longer than 1024 letter"),
})

const defaultValues = {
    title: "",
    slug: "",
    content: "",
}

type FromData = z.infer<typeof schema>

function AddPostForm() {
    const [addPost, { isLoading }] = useAddPostMutation()
    const naviagate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FromData>({
        defaultValues,
        resolver: zodResolver(schema),
        mode: "onSubmit",
    })

    const onSubmit = async (data: FromData) => {
        try {
            await addPost({ ...data, userId: 1 }).unwrap()
            naviagate("/blog")
            // setPost(initialValue)
        } catch (err: any) {
            console.log("error", err)
            toast(err.data || err.error || "Ops! There is an error.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
            // theme: "light",
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <ToastContainer />
            <h1>Create New Post</h1>

            <TextFeild
                register={register}
                name="title"
                label="Title"
                placeholder="project title"
                errorMessage={errors["title"]?.message as string}
                helperText="Enter a Post title"
            />
            <TextFeild
                register={register}
                name="slug"
                label="Slug"
                placeholder="project-slug"
                errorMessage={errors["slug"]?.message as string}
                helperText={`slug should not contain space or symbol that other then -`}
            />

            <TextFeild
                register={register}
                name="ogImage"
                label="ogImage"
                placeholder="https://"
                errorMessage={errors["ogImage"]?.message as string}
                helperText={`ogImage should not contain space or symbol that other then -`}
            />
            <TextFeild
                register={register}
                name="description"
                label="description"
                placeholder="description"
                errorMessage={errors["description"]?.message as string}
                helperText={`description should not contain space or symbol that other then -`}
            />

            <TextArea
                register={register}
                textAreaProps={{ rows: 18 }}
                name="content"
                placeholder="Post contain in md form"
                errorMessage={errors["content"]?.message as string}
                helperText="accept md formate"
                label={"Content"}
            />

            <input
                type="submit"
                className="submit-button"
                disabled={isLoading}
            />
        </form>
    )
}

export default AddPostForm
