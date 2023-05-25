import { FieldValue, useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
    title: z
        .string()
        .max(255, "Product Title should not longer than 255 letter")
        .nonempty("Product Title is required."),
    slug: z
        .string()
        .max(255, "Slug should not longer than 255 letter")
        .nonempty("Slug is required."),
    content: z
        .string()
        .nonempty("Description is required")
        .max(1024, "Description should not longer than 1024 letter"),
})

type FromData = z.infer<typeof schema>

function AddPostForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data: FieldValue<FromData>) => {
        console.log("data", data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Async Submit Validation</h1>
            <label htmlFor="title">Title</label>
            <input placeholder="title" {...register("title")} />

            <label htmlFor="slug">Slug</label>
            <input placeholder="slug" {...register("slug")} />

            <label htmlFor="content">content</label>
            <input placeholder="content" {...register("content")} />

            <div style={{ color: "red" }}>
                {Object.keys(errors).length > 0 &&
                    "There are errors, check your console."}
            </div>
            <input type="submit" />
        </form>
    )
}

export default AddPostForm
