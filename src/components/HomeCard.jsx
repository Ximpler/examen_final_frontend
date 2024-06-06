import React from 'react';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomeCard = ({ imageUrl, heading, description, route }) => {

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={imageUrl} alt="Card Image" w="100%" h="200px" objectFit='cover' />

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Heading size="md" mr={2}>
                        {heading}
                    </Heading>
                </Box>

                <Text mt="2" color="gray.600">
                    {description}
                </Text>
                <Link to={route}>
                    <Button mt={4} colorScheme="teal">
                        Go
                    </Button>
                </Link>

            </Box>
        </Box>
    );
};

export default HomeCard;
