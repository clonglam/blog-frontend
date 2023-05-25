// import { screen } from "@testing-library/react"
// import { describe, it, vi } from "vitest"
// import { render } from "../../tests/test-utils"
// import PostsPage from "../BlogPage"

// import { setupServer } from "msw/node"

// import { rest } from "msw"
// import { setupStore } from "../../app/store"
// import { handlers } from "./postHandler"
// import { postApi } from "../../services/posts"

// const store = setupStore({})
// const server = setupServer(...handlers)

// // Establish API mocking before all tests.
// beforeAll(() => server.listen())
// afterEach(() => {
//     server.resetHandlers()
//     store.dispatch(postApi.util.resetApiState())
// })
// afterAll(() => server.close())

// // const navigate = vi.fn()

// // vi.mock("react-router-dom", () => ({
// //     ...(vi.importActual("react-router-dom") as any),
// //     useNavigate: vi.fn(),
// // }))

// vi.mock("react-router-dom", () => ({
//     ...(vi.importActual("react-router-dom") as any),
//     useNavigate: () => ({
//         slug: "post-slug",
//     }),
// }))

// describe("Post Page", () => {
//     it("should render Posts Page", async () => {
//         const { container } = render(<PostsPage />)
//     })

//     it("handles Loading skelton", async () => {
//         server.use(
//             rest.get("http://localhost:3001/api/posts", (req, res, ctx) => {
//                 return res(ctx.delay(20), ctx.status(500))
//             })
//         )

//         render(<PostsPage />)
//         screen.findByLabelText(/loading/i)

//         await screen.findByText(/error/i)
//     })

//     it("handles error response", async () => {
//         server.use(
//             rest.get("http://localhost:3001/api/posts", (req, res, ctx) => {
//                 return res(ctx.delay(20), ctx.status(500))
//             })
//         )

//         render(<PostsPage />)

//         await screen.findByText(/error/i)
//     })
// })
