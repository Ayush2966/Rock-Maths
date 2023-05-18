import soloPlay from '../assets/images/play-solo.svg';
import teamPlay from '../assets/images/play-team.svg';

import { Flex, Stack, Heading, Text, useColorModeValue, Wrap, WrapItem } from '@chakra-ui/react';

import SimpleCard from '../components/SimpleCard';

export default function Home() {
    return (
        <Flex
            minH="calc(100vh - 3.5rem)"
            align={'center'}
            justify={'center'}
            bgGradient={useColorModeValue(
                'linear(to-br, #faaca8,#ddd6f3)',
                'linear(to-br, #c33764,#1d2671)'
            )}
        >
            <Stack spacing={8} mx={'auto'} py={12} px={6} minW={'xs'}>
                <Stack align={'center'}>
                    <Heading textAlign="center" fontSize={'4xl'}>
                        Welcome Captain 🚀
                    </Heading>
                    <Text fontSize={'lg'}>Choose your adventure</Text>
                </Stack>
                <Wrap justify={'center'} maxW={'5xl'} spacing={4}>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={0.5}
                            title="Play"
                            imageSrc={soloPlay}
                            bodyText="Practice your skills and level up"
                            linkTo="/levels"
                            buttonText="Play Now"
                        />
                    </WrapItem>
                    <WrapItem>
                        <SimpleCard
                            transitionDuration={1}
                            title="Learn"
                            progressValue={6}
                            imageSrc={teamPlay}
                            bodyText="A fun way to learn math"
                            linkTo="/learn"
                            buttonText="Learn Now"
                        />
                    </WrapItem>
                </Wrap>
            </Stack>
        </Flex>
    );
}
<footer>
<p>Created with love ❤️ by AJ</p>
</footer>