import { Box } from "@chakra-ui/react";
import { MenuItemProps } from "../types/menuItemProps";

function MenuItem({children, ...rest}: MenuItemProps) {
    return (
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
            {...rest}
        >
            {children}
        </Box>
    )
}

export default MenuItem;