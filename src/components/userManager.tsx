import Header from './userManagerHeader';
import Menu from './userManagerMenu';
import UserCard from './userManagerUserCard';
import { Box } from '@chakra-ui/react';

function userManager() {
    return (
        <Box 
        bg="aliceblue"
        
        >
            <Header />

            <Menu />

            <UserCard/>
        </Box>

    )

};

export default userManager;