import { Box, Image, Text, Button } from "@chakra-ui/react";

function UserCard() {
    return (
        <Box
            bg="white"
            height="200px"
            color="black"
            zIndex="10"
        >
            <Image
                src="../user.png"
                width="100px"

            />
            <Text>Name: </Text>
            <Text>Age: </Text>
            <Button
                bg="blue.400"
            >
                View
            </Button>
            <Button
                bg="blue.400"

            >
                Update
            </Button>
        </Box>
    )
}

export default UserCard;