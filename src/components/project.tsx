import {Badge, Card, createStyles, Group, Text} from "@mantine/core";
import Link from "next/link";

const useStyles = createStyles((theme, _params, getRef) => ({
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "auto",
    paddingTop: "65%",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  link: {
    ref: getRef("link"),
    textDecoration: "none",
    color: "inherit",
  },
  title: {
    [`.${getRef("link")}:hover &`]: {
      color: theme.colors.blue[4],
    },
  },
}));

const badgeColor = {
  "vite": "yellow",
  "react": "blue",
  "react-aria": "red",
  "tailwind": "cyan",
  "svelte": "orange",
  "vue": "green",
  "lit": "blue",
  "styled-components": "blue",
  "sass": "pink",
  "swiper": "violet",
  "gsap": "teal",
  "mantine": "blue",
  "axios": "indigo",
  "redux": "violet",
  "framer-motion": "gray",
}

function Project({ project }) {
  const {classes} = useStyles();
  return (
    <Card>
      <Card.Section>
        <div className={classes.imageContainer}>
          <img
            className={classes.image}
            src={project.image}
            alt={project.name}
          />
        </div>
      </Card.Section>
      <Link href={project.url}>
        <a target="_blank" className={classes.link}>
          <Text className={classes.title} size="lg" weight={600} my={16}>{project.name}</Text>
        </a>
      </Link>
      <Text size="sm" weight={400} mb={16} color="dimmed">{project.description}</Text>
      <Group spacing="xs">
        {project.tools.map((tool) => (
          <Badge key={tool} color={badgeColor[tool]}>{tool}</Badge>
        ))}
      </Group>
    </Card>
  );
}

export default Project;