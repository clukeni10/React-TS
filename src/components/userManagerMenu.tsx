import { Box, Flex } from "@chakra-ui/react";
import { FaList, FaUserPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosSettings } from "react-icons/io";
import { TbLogout } from "react-icons/tb";





function Menu() {
    return (
        <Box
            marginTop="5"
            marginLeft="5"
            bg="aliceblue"
            color="black"

        >
            <Flex
                direction="column"
                gap="1"
            >

                <Box
                    display="flex"
                    direction="row"
                    alignItems="center"
                    gap="2"
                    rounded="md"
                    border="1px solid rgba(0, 0, 0, 0.2)"
                    width="60"
                    height="10"
                    zIndex="10"
                    bg="white"
                    px="4"
                >
                    <FaList />
                    User List
                </Box>
                <Box
                    display="flex"
                    direction="row"
                    alignItems="center"
                    gap="2"
                    rounded="md"
                    border="1px solid rgba(0, 0, 0, 0.2)"
                    width="60"
                    height="10"
                    zIndex="10"
                    bg="white"
                    px="4"

                >
                    <FaUserPlus />
                    Create User
                </Box>
                <Box
                    display="flex"
                    direction="row"
                    alignItems="center"
                    gap="2"
                    rounded="md"
                    border="1px solid rgba(0, 0, 0, 0.2)"
                    width="60"
                    height="10"
                    zIndex="10"
                    bg="white"
                    px="4"

                >
                    <CgProfile />
                    Profile
                </Box>
                <Box
                    display="flex"
                    direction="row"
                    alignItems="center"
                    gap="2"
                    rounded="md"
                    border="1px solid rgba(0, 0, 0, 0.2)"
                    width="60"
                    height="10"
                    zIndex="10"
                    bg="white"
                    px="4"

                >
                    <IoIosSettings />
                    Setting
                </Box>
                <Box
                    display="flex"
                    direction="row"
                    alignItems="center"
                    gap="2"
                    rounded="md"
                    border="1px solid rgba(0, 0, 0, 0.2)"
                    width="60"
                    height="10"
                    zIndex="10"
                    bg="white"
                    px="4"

                >
                    <TbLogout />
                    Log out
                </Box>
            </Flex>
        </Box>
    )
}

export default Menu;