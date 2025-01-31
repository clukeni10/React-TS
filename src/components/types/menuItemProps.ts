import { BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export type MenuItemProps = BoxProps & {
    children: ReactNode;
  };