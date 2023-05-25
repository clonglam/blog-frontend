import MarkDown from "../components/blog/components/Markdown"

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`

const PostDetail = () => {
    return (
        <div>
            This is POst Details
            <MarkDown markdown={{ content: markdown }} />
        </div>
    )
}

export default PostDetail
