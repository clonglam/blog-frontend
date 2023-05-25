import React, { useRef } from "react"

import FooterTitle from "./FooterTitle"

const MailChainInput = () => {
    const emailchainInputRef = useRef<HTMLInputElement>(null)

    const submitMailChainForm = (event: React.FormEvent) => {
        event.preventDefault()
        if (emailchainInputRef.current) {
            if (!emailchainInputRef.current.value) {
                console.log("email", emailchainInputRef.current.value)
            }
        }
    }
    return (
        <div className="mail-chain">
            <FooterTitle>Receive Offers, Invites and Updates</FooterTitle>

            <div
                className="mail-container"
                onSubmit={event => submitMailChainForm(event)}
            >
                <input
                    // width="70%"
                    // border="solid 1px"
                    // borderRadius={1}
                    // borderColor="gray.500"
                    ref={emailchainInputRef}
                    placeholder="Enjoy the Rewards"
                    // variant="outline"
                />
                <button
                    className="btn"
                    // border="2px solid"
                    // borderColor="primary.500"
                    // paddingY={3}
                    // paddingX={10}
                    // width="30%"
                    // background="transparent"
                    // alignItems="center"
                    // marginBottom={5}
                    // borderRadius={1}
                    // _hover={{ background: "primary.500", textColor: "#fff" }}
                >
                    SIGN UP
                </button>
            </div>
        </div>
    )
}

export default MailChainInput
