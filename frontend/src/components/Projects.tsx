import { Box, Button, Flex, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { Outlet, Route, Routes} from "react-router-dom";
import {BsArrowDownCircle,} from "react-icons/bs";
import {useParams} from 'react-router';





function ProjectsLayout() {
    return <Flex>
        <Box display='flex' justifyContent='center' width='200px' maxW='100%' maxH='100vh' borderRadius='lg'
             overflow='hidden'>
            <Menu>
                <MenuButton textAlign='start' width='80%' as={Button} padding='15px' rightIcon={<BsArrowDownCircle/>}>
                    Active
                </MenuButton>
                <MenuList>
                    <MenuItem>Lorem</MenuItem>
                    <MenuItem>Lorem Lorem</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton textAlign='start' width='80%' as={Button} padding='15px' rightIcon={<BsArrowDownCircle/>}>
                    Active
                </MenuButton>
                <MenuList>
                    <MenuItem>Lorem</MenuItem>
                    <MenuItem>Lorem Lorem</MenuItem>
                </MenuList>
            </Menu>
            <Menu>
                <MenuButton textAlign='start' width='80%' as={Button} padding='15px' rightIcon={<BsArrowDownCircle/>}>
                    Active
                </MenuButton>
                <MenuList>
                    <MenuItem>Lorem</MenuItem>
                    <MenuItem>Lorem Lorem</MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Outlet/>
    </Flex>
}


export function Projects() {
    return (
        <Routes>
            <Route path="/" element={<ProjectsLayout/>}>
                <Route path="" element={<></>}/>
                <Route path="/:id" element={<ProjectDetails/>}/>
            </Route>
        </Routes>


    )
}

export function ProjectDetails() {
    const {id: projectId} = useParams();
    return <>{projectId}</>
}