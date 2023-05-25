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
        <div>
            <FooterTitle>Follow Us On:</FooterTitle>
            {socialMedias.map((sm, index) => (
                <p
                    key={`${index}`}

                    // color="gray.600"
                    // _hover={{ textDecoration: "underline" }}
                >
                    {sm.label}
                </p>
            ))}
        </div>
    )
}

export default SocialMedia
