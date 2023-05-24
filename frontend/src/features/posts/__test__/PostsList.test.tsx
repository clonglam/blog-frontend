import { describe, it, vi } from "vitest"
import { Post } from "../../../services/posts"
import { render } from "../../../tests/test-utils"
import PostsList from "../PostsList"

const posts: Post[] = [{ id: "1", name: "1123" }]
const onClickHandler = vi.fn().mockImplementation(() => "onClickFuncition")

describe("PostsList", () => {
    it("should render a PostsList", () => {
        const wrapper = render(
            <PostsList onClickHandler={onClickHandler} posts={posts} />
        )

        expect(wrapper).toBeTruthy()
        expect(wrapper.queryByLabelText("posts-lists")).toBeTruthy()
    })
})
