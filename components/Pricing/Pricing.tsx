'use client';

import { Container, Title, Text, Card, Button, Badge, SimpleGrid, Group } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './Pricing.module.css';

export function Pricing() {
  const features = [
    'Alle funktioner',
    'Ubegrænsede projekter',
    'Ubegrænsede brugere',
    'Gantt & ressourceplanlægning',
    'Tidsregistrering',
    'Budgetoverblik',
  ];

  return (
    <section className={classes.section}>
      <Container size="lg">
        <Group justify="space-between" align="flex-start" className={classes.wrapper}>
          <div className={classes.content}>
            <Badge size="lg" variant="light" color="gray">PRISER</Badge>
            <Title order={2} className={classes.title} mt="md">
              Vores komplicerede prisstruktur
            </Title>
            <Text className={classes.subtitle} size="md" mt="sm" c="dimmed">
              Bare rolig, der er ingen fine detaljer. Ingen skjulte gebyrer. Ingen "kontakt os for pris".
            </Text>
          </div>

          <Card className={classes.priceCard} shadow="md" radius="md" withBorder>
            <Group justify="space-between" align="center" mb="lg">
              <div>
                <Title order={3} className={classes.planName}>
                  Early Access
                </Title>
                <Text size="xs" c="dimmed">Gratis lige nu</Text>
              </div>
              <div className={classes.priceAmount}>
                <span className={classes.currency}>Kr</span>
                <span className={classes.amount}>0</span>
                <span className={classes.period}>/md</span>
              </div>
            </Group>

            <SimpleGrid cols={2} spacing="xs" mb="lg">
              {features.map((feature, index) => (
                <Group key={index} gap="xs" wrap="nowrap">
                  <IconCheck size={16} className={classes.checkIcon} />
                  <Text size="sm">{feature}</Text>
                </Group>
              ))}
            </SimpleGrid>

            <Button
              component="a"
              href="https://app.optiro.dk/experiences/create-new-company/sign-up"
              size="md"
              fullWidth
              className={classes.ctaButton}
            >
              Kom i gang nu
            </Button>

            <Text size="xs" c="dimmed" ta="center" mt="md">
              Vi er i en tidlig fase og udvikler aktivt. Når vi introducerer betalte planer, 
              får I besked i god tid – og selvfølgelig early adopter fordele.
            </Text>
          </Card>
        </Group>
      </Container>
    </section>
  );
}
