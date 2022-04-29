import {Container, Image, Stack, Text, Title, createStyles, Button} from "@mantine/core";
import logo from "@assets/images/logo.svg";
import {DiGithubBadge} from "react-icons/di";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 800,
    fontSize: 48,
    letterSpacing: -1,
    color: theme.white,
    textAlign: "center",
  },
  description: {
    width: 328,
  }
}));

function Hero() {
  const { classes } = useStyles();
  return (
    <Container py={80} size="sm">
      <Stack spacing="xl" align="center">
        <Image width={128} src={logo.src} alt="Personal logo" />
        <Title className={classes.title} order={1}>
          Personal{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} inherit>
            Frontend
          </Text>{' '}
          projects
        </Title>
        <Text className={classes.description} align="center" size="lg" color="dimmed">Find all my frontend projects made with modern tools</Text>
        <Link href="https://github.com/john-mirage">
          <a>
            <Button size="lg" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} leftIcon={<DiGithubBadge size={24} />}>GitHub repository</Button>
          </a>
        </Link>
      </Stack>
    </Container>
  );
}

export default Hero;