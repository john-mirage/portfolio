import {SimpleGrid, createStyles, useMantineTheme} from "@mantine/core";
import Project from "@components/project";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "auto",
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 48,

    [`@media screen and (min-width: ${theme.breakpoints.xs}px)`]: {
      maxWidth: theme.breakpoints.xs,
      marginLeft: "auto",
      marginRight: "auto",
    },

    [`@media screen and (min-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: theme.breakpoints.sm,
    },

    [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
      maxWidth: theme.breakpoints.md,
    },

    [`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
      maxWidth: theme.breakpoints.lg,
    }
  }
}));

function ProjectList({filteredProjects}) {
  const {classes} = useStyles();
  const theme = useMantineTheme();
  return (
    <main className={classes.container}>
      <SimpleGrid
        cols={1}
        spacing="lg"
        breakpoints={[
          { minWidth: theme.breakpoints.sm, cols: 2, spacing: 'lg' },
          { minWidth: theme.breakpoints.md, cols: 3, spacing: 'lg' },
        ]}
      >
        {filteredProjects.map((project) => (
          <Project
            key={project.name}
            project={project}
          />
        ))}
      </SimpleGrid>
    </main>
  );
}

export default ProjectList;