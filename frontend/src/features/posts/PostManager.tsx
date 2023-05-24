import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Stack,
  Typography,
} from "@mui/material"
import { MdBook } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useGetPostQuery, useGetPostsQuery } from "../../services/posts"

import PostsList from "./PostsList"
import AddPostForm from "./AddPostForm"

// const PostList = () => {
//   const { data: posts, isLoading } = useGetPostsQuery()
//   const navigate = useNavigate()

//   if (isLoading) {
//     return <div>Loading</div>
//   }

//   if (!posts) {
//     return <div>No posts :(</div>
//   }

//   return (
//     <List>
//       {posts.map(({ id, name }) => (
//         <ListItem key={id} onClick={() => navigate(`/posts/${id}`)}>
//           <ListItemAvatar color="green.500">
//             <MdBook />
//           </ListItemAvatar>{" "}
//           {name}
//         </ListItem>
//       ))}
//     </List>
//   )
// }

const PostNameSubscribed = ({ id }: { id: string }) => {
  const { data, isFetching } = useGetPostQuery(id)
  const navigate = useNavigate()

  console.log("data", data, isFetching)

  if (!data) return null

  return (
    <ListItem key={id} onClick={() => navigate(`/posts/${id}`)}>
      <ListItemAvatar color="green.500">
        <MdBook />
      </ListItemAvatar>
      {data.name}
    </ListItem>
  )
}

const PostListSubscribed = () => {
  const { data: posts, isLoading } = useGetPostsQuery()

  if (isLoading) {
    return <div>Loading</div>
  }

  if (!posts) {
    return <div>No posts :</div>
  }

  return (
    <List>
      {posts.map(({ id }) => (
        <PostNameSubscribed id={id} key={id} />
      ))}
    </List>
  )
}

export const PostsCountStat = () => {
  const { data: posts } = useGetPostsQuery()

  if (!posts) return null

  return (
    <Stack direction="row">
      <Typography>Active Posts</Typography>
      <Badge>{posts?.length}</Badge>
    </Stack>
  )
}

export const PostsManager = () => {
  return (
    <Box>
      <Stack p={4}>
        {/* bgColor="#011627" */}
        <Box>
          <Typography fontSize="xl">Manage Posts</Typography>
        </Box>
        <Divider />
        <Box>
          <PostsCountStat />
        </Box>
      </Stack>
      <Divider />
      <AddPostForm />
      <Divider />
      <Stack>
        <Box flex={1} borderRight="1px solid #eee">
          <Box p={4} borderBottom="1px solid #eee">
            <Typography fontSize="sm">Posts</Typography>
          </Box>
          <Box p={4}>
            <PostsList />
          </Box>
          <Box p={4} borderBottom="1px solid #eee">
            <Typography fontSize="sm">Posts (subscribed)</Typography>
          </Box>
          <Box p={4}>
            <PostListSubscribed />
          </Box>
        </Box>
        <Box flex={2}>
          {/* <Routes>
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route
              path="*"
              element={
                <Center h="200px">
                  <Heading size="md">Select a post to edit!</Heading>
                </Center>
              }
            />
          </Routes> */}
        </Box>
      </Stack>
    </Box>
  )
}

export default PostsManager
