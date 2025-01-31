import Header from './userManagerHeader';
import Menu from './userManagerMenu';
import UserCard from './userManagerUserCard';
import { Box, Grid, GridItem } from '@chakra-ui/react';



function userManager() {
    return (
        <Box
            bg="aliceblue"

        >
            <Grid
                templateAreas={`"header header"
                     "nav main"
                     `}
                gridTemplateRows={"30px 1fr 30px"}
                gridTemplateColumns={"250px auto"}
                gap={8}
            >
                <GridItem area={"header"}>
                    <Header />
                </GridItem>

                <GridItem area={"nav"}>
                <Menu />
                    
                    
                </GridItem>

                <GridItem area={"main"}>
                    <UserCard />
                </GridItem>






            </Grid>

        </Box>

    )

};

export default userManager;