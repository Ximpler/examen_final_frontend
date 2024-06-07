import { useState } from 'react'
import { Container, Center, Heading, Text, Box, InputRightElement, Input, Button, InputGroup } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import HomeCard from '../components/HomeCard';

function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Container maxW='container.lg'>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>
                    <GridItem w='100%'>
                        <HomeCard
                            imageUrl="https://images.pexels.com/photos/7319158/pexels-photo-7319158.jpeg"
                            heading="See Students"
                            description="See students"
                            route="/all"
                        ></HomeCard>
                    </GridItem>
                    <GridItem w='100%'>
                        <HomeCard
                            imageUrl="https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg"
                            heading="Edit student info"
                            description="Edits a student's info"
                            route="/edit"
                        ></HomeCard>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
export default Home;