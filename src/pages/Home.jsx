import { useState } from 'react'
import { Container, Center, Heading, Text, Box, InputRightElement, Input, Button, InputGroup } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

function Home() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Header name="PDM"></Header>
            <Container maxW='container.lg'>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={4}>
                    <GridItem w='100%'>
                        <HomeCard
                            imageUrl="https://images.pexels.com/photos/7319158/pexels-photo-7319158.jpeg"
                            heading="Create Person"
                            description="See Persons"
                            route="/createPerson"
                        ></HomeCard>
                    </GridItem>
                    <GridItem w='100%'>
                        <HomeCard
                            imageUrl="https://images.pexels.com/photos/45113/pexels-photo-45113.jpeg"
                            heading="Edit person info"
                            description="Edits a person's info"
                            route="/persons"
                        ></HomeCard>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
export default Home;