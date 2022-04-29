import {Card, Container, SimpleGrid, Title} from "@mantine/core";

function Grid() {
  return (
    <Container size={1280}>
      <SimpleGrid cols={3}>
        <Card>
          <Title order={4}>Card title</Title>
        </Card>
        <Card>
          <Title order={4}>Card title</Title>
        </Card>
        <Card>
          <Title order={4}>Card title</Title>
        </Card>
        <Card>
          <Title order={4}>Card title</Title>
        </Card>
        <Card>
          <Title order={4}>Card title</Title>
        </Card>
        <Card>
          <Title order={4}>Card title</Title>
        </Card>
        <Card>
          <Title order={4}>Card title</Title>
        </Card>
        <Card>
          <Title order={4}>Card title</Title>
        </Card>
      </SimpleGrid>
    </Container>
  );
}

export default Grid;