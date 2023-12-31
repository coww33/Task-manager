import {Avatar, Flex,} from "@chakra-ui/react";
import {AiOutlineHome} from "react-icons/ai";
import {BsChat, BsBell, BsGear, BsBoxArrowRight, BsFolder2Open} from "react-icons/bs";
import {SidebarIcon} from "./SidebarIcon.tsx";
import {Link, Outlet} from "react-router-dom";

function Layout() {
    return (
        <Flex>
            <Flex borderRadius='20' bg='gray.100' p={2} minHeight='calc(100vh - 32px)' justifyContent='space-between'
                  minWidth='max-content' maxWidth='40px' flexDirection='column' alignItems='center' marginLeft='2'
                  marginY='4'>
                <Flex flexDirection='column' gap='4' alignItems='center'>
                    <Avatar size='md' borderRadius='20%' name='Dan Abrahmov' src='https://bit.ly/dan-abramov'/>
                    <Link to="/"><SidebarIcon icon={<AiOutlineHome/>}/></Link>
                    <Link to="/notify"><SidebarIcon icon={<BsBell/>}/></Link>
                    <Link to="/chat"><SidebarIcon icon={<BsChat/>}/></Link>
                    <Link to="/projects"><SidebarIcon icon={<BsFolder2Open/>}/></Link>
                </Flex>
                <Flex flexDirection='column' gap='4'>
                    <Link to="/options"><SidebarIcon icon={<BsGear/>}/></Link>
                    <SidebarIcon icon={<BsBoxArrowRight/>}/>
                </Flex>
            </Flex>
              <Flex marginLeft='5' marginY='4'>
              <Outlet/>
              </Flex>

        </Flex>

    );
}

export default Layout;
