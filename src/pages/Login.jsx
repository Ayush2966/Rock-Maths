import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, Text, useColorModeValue } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <Flex minH="calc(100vh - 3.5rem)" align={'center'} justify={'center'} bgGradient={useColorModeValue('linear(to-br, #faaca8,#ddd6f3)', 'linear(to-br, #c33764,#1d2671)')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Join a room</Heading>
                    <Text fontSize={'lg'}>to begin your Rocket Maths Journey 🚀</Text>
                </Stack>

                <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="username">
                            <FormLabel>User Name</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="roomId">
                            <FormLabel>Room Id</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500'
                                }}
                            >
                                <Link to="/calculator">Join</Link>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
