import { Box, Flex } from "@chakra-ui/react";
import { FaList, FaUserPlus } from "react-icons/fa";
import { TbLogout } from "react-icons/tb";
import MenuItem from "./shared/menuItems";







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

                <MenuItem>
                    <FaList />
                    User List
                </MenuItem>

                <MenuItem>
                    <FaUserPlus />
                    Create User
                </MenuItem>

                <MenuItem> 
                <TbLogout />
                    Log 
                </MenuItem>


            </Flex>
        </Box>
    )
}

export default Menu;