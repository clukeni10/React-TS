import { Heading } from "@chakra-ui/react";


function Header() {
    return (
        <Heading
            size="4xl"
            fontWeight="bold"
            textAlign="center"
            marginBottom="2"
            bg="white"
            color="blackAlpha.950"
        >

            <h1
                className='title'>Gerenciador de Usuários
            </h1>
        </Heading>
    )

}

export default Header;