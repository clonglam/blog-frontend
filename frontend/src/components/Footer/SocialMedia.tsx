import { Stack, Typography } from "@mui/material"
import FooterTitle from "./FooterTitle"

const socialMedias = [
  {
    href: "",
    label: "Github",
  },
  {
    href: "",
    label: "Instagram",
  },
]

const SocialMedia = () => {
  return (
    <Stack>
      <FooterTitle>Follow Us On:</FooterTitle>
      {socialMedias.map((sm, index) => (
        <Typography
          key={`${index}`}
          fontWeight="400"
          // color="gray.600"
          // _hover={{ textDecoration: "underline" }}
        >
          {sm.label}
        </Typography>
      ))}
    </Stack>
  )
}

export default SocialMedia
