import {Avatar, Box, Flex, Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {SidebarIcon} from "./SidebarIcon.tsx";
import {AiOutlineHome} from "react-icons/ai";
import {BsBell, BsBoxArrowRight, BsChat, BsFolder2Open, BsGear} from "react-icons/bs";

export function Notify(){
    return (

                <Box maxW='sm' maxH='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Text>Тут уведомления</Text>
                </Box>


    )
}