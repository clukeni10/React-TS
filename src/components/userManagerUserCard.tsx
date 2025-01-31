import { Box, Image, Text, Button } from "@chakra-ui/react";



function UserCard() {
    return (
        <Box
            bg="white"
            height="150px"
            width="350px"
            color="black"
            zIndex="10"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            px="4"
            borderRadius="md"
            marginTop="5"

        >
            <Image
                src="../user.png"
                width="100px"
                height="100px"

            />
            <Box margin="2">
                <Box>
                    <Text>Name: </Text>
                    <Text>Age: </Text>
                </Box>


                <Box
                    display="flex"
                    gap="2"
                >
                    <Button
                        bg="blue.600"
                        color="white"
                        _hover={{
                            bg: "blue.700"
                        }}
                    >
                        Update
                    </Button>
                    <Button
                        bg="red.600"
                        color="white"
                        _hover={{
                            bg: "red.700",
                        }}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>


        </Box>

        
    )
}

export default UserCard;