import { createColumnHelper } from "@tanstack/react-table"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import { Post, useGetPostsQuery } from "../../../app/services/posts"
import Table from "../../../components/Table"

const columnHelper = createColumnHelper<Post>()

const BlogTable = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery()

    const columns = [
        columnHelper.accessor("title", {
            cell: info => info.getValue(),
            header: "Title",
        }),
        columnHelper.accessor("slug", {
            cell: info => info.getValue(),
            header: "Slug",
            enableHiding: true,
        }),
        columnHelper.accessor("id", {
            cell: info => info.getValue(),
            header: "Product Id",
        }),

        columnHelper.accessor("createdAt", {
            cell: info => `${format(new Date(info.getValue()), "MM/dd/yyyy")}`,
            header: "Created At",
            meta: {
                isDate: true,
            },
        }),

        columnHelper.display({
            id: "actions",
            cell: info => (
                <div>
                    <Link to={`${info.row.getValue("slug")}`}>
                        <button>Edit</button>
                    </Link>

                    <button
                        onClick={
                            () => console.log("Button Clicked")
                            // deleteProductHandler(info.row.getValue("id"))
                        }
                    >
                        Delete
                    </button>
                </div>
            ),
            header: "Actions",
            meta: {
                isAction: true,
            },
        }),
    ]
    return (
        <>
            {/* <DeleteProductModal
                isOpen={isOpen}
                onClose={onClose}
                productId={selectedProductId}
            /> */}
            {isLoading ? (
                "loading"
            ) : error ? (
                "Error"
            ) : (
                <Table
                    columns={columns}
                    data={posts!}
                    columnVisibility={{ slug: false }}
                />
            )}
        </>
    )
}

export default BlogTable
