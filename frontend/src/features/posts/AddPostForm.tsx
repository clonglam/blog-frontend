import { useState } from "react"
import { Post, useAddPostMutation } from "../../services/posts"
import { nanoid } from "nanoid"
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@mui/material"

const AddPostForm = () => {
  const initialValue: Post = { id: nanoid(), name: "" }
  const [post, setPost] = useState(initialValue)
  const [addPost, { isLoading }] = useAddPostMutation()

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prev) => ({
      ...prev,
      [target.name]: target.value,
    }))
  }

  const handleAddPost = () => addPost(post).then(() => setPost(initialValue))

  return (
    <Stack p={5}>
      <Box flex={10}>
        <FormControl>
          {/* <FormControl isInvalid={Boolean(post.name.length < 3 && post.name)}> */}
          <FormLabel htmlFor="name">Post name</FormLabel>
          <Input
            id="name"
            name="name"
            placeholder="Enter post name"
            value={post.name}
            onChange={handleChange}
          />
        </FormControl>
      </Box>
      <Divider />
      <Box>
        <Button
          //   mt={8}
          //   colorScheme="purple"
          //   isLoading={isLoading}
          onClick={handleAddPost}
        >
          Add Post
        </Button>
      </Box>
    </Stack>
  )
}

export default AddPostForm
