import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  useDeletePostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
} from "../../services/posts"
import { Box, Button, Divider, Input, Stack, Typography } from "@mui/material"

const EditablePostName = ({
  name: initialName,
  onUpdate,
  onCancel,
  isLoading = false,
}: {
  name: string
  onUpdate: (name: string) => void
  onCancel: () => void
  isLoading?: boolean
}) => {
  const [name, setName] = useState(initialName)

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => setName(value)

  const handleUpdate = () => onUpdate(name)
  const handleCancel = () => onCancel()

  return (
    <Stack>
      <Box flex={10}>
        <Input
          type="text"
          onChange={handleChange}
          value={name}
          disabled={isLoading}
        />
      </Box>
      <Divider />
      <Box>
        <Stack spacing={4} direction="row">
          {/* <Button onClick={handleUpdate} isLoading={isLoading}>
            Update
          </Button> */}
          {/* <CloseButton bg="red" onClick={handleCancel} disabled={isLoading} /> */}
        </Stack>
      </Box>
    </Stack>
  )
}

const PostJsonDetail = ({ id }: { id: string }) => {
  const { data: post } = useGetPostQuery(id)

  return (
    <Box mt={5} bgcolor="#eee">
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </Box>
  )
}

export const PostDetail = () => {
  const { id } = useParams<{ id: any }>()
  const navigate = useNavigate()

  //   const toast = useToast()

  const [isEditing, setIsEditing] = useState(false)

  const { data: post, isLoading } = useGetPostQuery(id)

  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation()

  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!post) {
    return (
      <Box height="200px">
        <Typography fontSize="md">
          Post {id} is missing! Try reloading or selecting another post...
        </Typography>
      </Box>
    )
  }

  return (
    <Box p={4}>
      {isEditing ? (
        <EditablePostName
          name={post.name}
          onUpdate={async (name) => {
            try {
              await updatePost({ id, name }).unwrap()
            } catch {
              //   toast({
              //     title: "An error occurred",
              //     description: "We couldn't save your changes, try again!",
              //     status: "error",
              //     duration: 2000,
              //     isClosable: true,
              //   })
            } finally {
              setIsEditing(false)
            }
          }}
          onCancel={() => setIsEditing(false)}
          isLoading={isUpdating}
        />
      ) : (
        <Stack>
          <Box>
            <Typography fontSize="md">{post.name}</Typography>
          </Box>
          <Divider />
          <Box>
            <Stack spacing={4} direction="row">
              <Button
                onClick={() => setIsEditing(true)}
                disabled={isDeleting || isUpdating}
              >
                {isUpdating ? "Updating..." : "Edit"}
              </Button>
              {/* <Button
                onClick={() => deletePost(id).then(() => navigate("/posts"))}
                disabled={isDeleting}
                colorScheme="red"
              > */}
              {/* {isDeleting ? "Deleting..." : "Delete"}
              </Button> */}
            </Stack>
          </Box>
        </Stack>
      )}
      <PostJsonDetail id={post.id} />
    </Box>
  )
}
