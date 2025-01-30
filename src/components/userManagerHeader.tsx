import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";

function Header() {


    return (
        <Box
        bg="white"
        color="black"
        >
            <Flex 
                direction="row"
                justify="space-between"
                align="center"
            >
            <Heading>Simple User Manager</Heading>

            <Box>
                <Flex
                gap="2"
                justify="space-evenly"
                align="center"

                >
                <Text>User Admin</Text>
                <Image
                    src="../9703596.png"
                    fit="cover"
                    borderRadius="full"
                    boxSize="50px"

                />
                </Flex>
               
            </Box>
            </Flex>
        </Box>
        
    )
}

export default Header;