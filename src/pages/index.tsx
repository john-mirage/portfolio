import { Avatar, Button, Card, Container, createStyles, Group, Header, Image, SimpleGrid, Text, Title } from "@mantine/core";
import logo from "../assets/images/logo.png";
import { DiGithubBadge } from "react-icons/di";
import orderSummaryComponent from "../assets/images/order-summary-component.jpg";
import ntfPreviewCardComponent from "../assets/images/nft-preview-card-component.jpg";

const useStyles = createStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
    }
}));

function HomePage() {
    const { classes } = useStyles();

    return (
        <>
            <Header height={80} mb={32}>
                <Container className={classes.container}>
                    <Group align="center">
                        <Avatar src={logo.src} radius="xl" />
                        <Title order={2}>Portfolio</Title>
                    </Group>
                    <Button leftIcon={<DiGithubBadge size={20} />}>GitHub</Button>
                </Container>
            </Header>
            <Container>
                <SimpleGrid cols={3} spacing="lg">
                    <Card>
                        <Card.Section mb={24}>
                            <Image src={orderSummaryComponent.src} height={200} fit="cover" />
                        </Card.Section>
                        <Text size="sm" style={{ lineHeight: 1.5 }}>
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>
                    </Card>
                    <Card>
                        <Card.Section mb={24}>
                            <Image src={ntfPreviewCardComponent.src} height={200} fit="cover" />
                        </Card.Section>
                        <Text size="sm" style={{ lineHeight: 1.5 }}>
                            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                            activities on and around the fjords of Norway
                        </Text>
                    </Card>
                </SimpleGrid>
            </Container>
        </>
    );
}

export default HomePage;