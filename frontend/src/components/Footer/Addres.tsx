// import { Box, Stack, Text } from '@chakra-ui/react'
import { Box, Stack, Typography } from "@mui/material"
import React from "react"

const Addres = () => {
  return (
    <Stack paddingY={5} color="gray.600">
      <Typography>HORNE</Typography>
      <Box textDecoration="underline">
        <Typography>{`747 6th St South Building C,`}</Typography>
        <Typography>{` Kirkland, WA 98033,`} </Typography>
        <Typography>{`United States`}</Typography>
      </Box>
    </Stack>
  )
}

export default Addres
