import { Flex, Spacer, Text, Box, HStack } from '@chakra-ui/react'
import CartWidget from '../CartWidget';
import { Button } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <>
      <Flex bg="gray.200" justify='start' wrap='wrap' alignItems='center'>
        <HStack spacing='5px'>
          <NavLink to="/">
            <Box p='20px'><img src="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/448/812/themes/common/logo-1295407933-1648242173-88f421349de894ac7565d3260ec220d51648242173.png?0" alt="logo" className='altura'/></Box>
          </NavLink>
          <NavLink to="category/noAlcohol">
          <Text p='20px' fontSize='20px' fontWeight='bold'>Bebidas sin alcohol</Text>
          </NavLink>
          <NavLink to="category/alcohol">
          <Text p='20px' fontSize='20px' fontWeight='bold'>Bebidas con alcohol</Text>
          </NavLink>
          <NavLink to="category/energizantes">
          <Text p='20px' fontSize='20px' fontWeight='bold'>Enegizantes</Text>
          </NavLink>
        </HStack>
        <Spacer />
        <Button p='20px' mr='5' colorScheme='green'><CartWidget/></Button>
      </Flex>
    </>


  );
}

export default NavBar;


