import { Typography } from "@mui/material"
import React from "react"

type Props = { children: string }

const FooterTitle = ({ children }: Props) => {
  return (
    <Typography
      fontWeight="700"
      letterSpacing="1px"
      fontSize="12px"
      textAlign="left"
      textTransform="uppercase"
      color="gray.700"
    >
      {children}
    </Typography>
  )
}

export default FooterTitle
