import {
    Fade,
    Box,
    Stack,
    Heading,
    Image,
    Text,
    Button,
    useColorModeValue,
    Spacer,
    HStack,
    Badge,
    CircularProgressLabel,
    CircularProgress
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SimpleCard = (props) => {
    return (
        <Fade in transition={{ enter: { duration: props.transitionDuration } }}>
            <Box
                rounded={'lg'}
                bg={useColorModeValue('whiteAlpha.600', 'rgba(	26, 32, 44,0.85)')}
                boxShadow={'lg'}
                minW={'xs'}
                p={8}
            >
                <Stack>
                    <HStack h={'40px'}>
                        {/* Card Heading */}
                        <Heading fontSize={'2xl'}>{props.title}</Heading>
                        <Spacer />
                        {/* Badge */}
                        {props.badgeText && (
                            <Badge
                                fontSize="0.6rem"
                                rounded={'md'}
                                variant="subtle"
                                p={1}
                                colorScheme={props.badgeColorScheme}
                            >
                                {props.badgeText}
                            </Badge>
                        )}
                        {/* Progress Circle */}
                        {props.progressValue && (
                            <CircularProgress
                                value={props.progressValue}
                                size="40px"
                                thickness={8}
                                color="purple.400"
                            >
                                <CircularProgressLabel>{`${props.progressValue}%`}</CircularProgressLabel>
                            </CircularProgress>
                        )}
                    </HStack>
                    <Stack>
                        {/* Image */}
                        <Image w={'12rem'} h={'16rem'} src={props.imageSrc} alignSelf="center" />
                        {/* Body Text */}
                        <Text maxW={'26ch'} noOfLines={2}>
                            {props.bodyText}
                        </Text>
                        <Spacer />
                        {/* Button */}
                        <Link to={props.linkTo}>
                            <Button width={'100%'} colorScheme={'purple'}>
                                {props.buttonText}
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            </Box>
        </Fade>
    );
};

SimpleCard.defaultProps = {
    transitionDuration: 0.5,
    title: 'Default Title ',
    bodyText: 'Default Body Text',
    linkTo: '/',
    buttonText: 'Default',
    badgeColorScheme: 'purple'
};

export default SimpleCard;
