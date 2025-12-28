'use client';

import { Container, Title, Text, Card, SimpleGrid, Badge } from '@mantine/core';
import { IconClipboardCheck, IconChartBar, IconTrendingUp, IconX } from '@tabler/icons-react';
import classes from './ProjectFlow.module.css';

const projectSteps = [
  {
    icon: IconClipboardCheck,
    title: 'TILBUD',
    description: 'Hvor mange timer skal der bruges? Optiro hjælper dig med at estimere tid, ressourcer og omkostninger, så du kan afgive realistiske tilbud der giver god forretning.',
    color: 'blue',
  },
  {
    icon: IconChartBar,
    title: 'PLANLÆGNING',
    description: 'Hvem har kapacitet? Se hvem der er ledige, allokér ressourcer til projekter, og undgå overbooking. Få overblik over hvem der arbejder på hvad, hvornår.',
    color: 'cyan',
  },
  {
    icon: IconTrendingUp,
    title: 'I GANG',
    description: 'Kører det efter planen? Følg projektfremgang i realtid, se timeregistreringer løbende, og justér ressourcer hvis projektet kræver det. Fuld transparens.',
    color: 'green',
  },
  {
    icon: IconClipboardCheck,
    title: 'AFSLUTTET',
    description: 'Hvad blev resultatet? Se faktisk tidsforbrug vs. estimat, analyser om projektet gav overskud, og brug læringen til at forbedre fremtidige projekter.',
    color: 'teal',
  },
  {
    icon: IconX,
    title: 'TABT',
    description: 'Det blev ikke til noget. Dokumentér hvorfor projektet ikke blev vundet, lær af det, og optimer din tilgang til næste mulighed.',
    color: 'red',
  },
];

export function ProjectFlow() {
  return (
    <section className={classes.section}>
      <Container size="lg">
        <div className={classes.header}>
          <Badge size="lg" variant="light" color="optiro">SÅDAN VIRKER DET</Badge>
          <Title order={2} className={classes.title} mt="md">
            Fra tilbud til afslutning – fuld kontrol over projekter og ressourcer
          </Title>
          <Text className={classes.subtitle} size="lg" mt="md">
            Optiro følger dine projekter gennem hele livscyklussen. Se hvem der arbejder på hvad, 
            hvor mange timer der er brugt, og om projekterne giver overskud. Alt samlet ét sted.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl">
          {projectSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} shadow="sm" padding="lg" radius="md" withBorder className={classes.card}>
                <div className={classes.iconWrapper} style={{ backgroundColor: `var(--mantine-color-${step.color}-1)` }}>
                  <Icon size={32} stroke={1.5} style={{ color: `var(--mantine-color-${step.color}-6)` }} />
                </div>
                <Text fw={700} size="sm" mt="md" className={classes.cardTitle}>
                  {step.title}
                </Text>
                <Text size="sm" c="dimmed" mt="sm" className={classes.cardDescription}>
                  {step.description}
                </Text>
              </Card>
            );
          })}
        </SimpleGrid>
      </Container>
    </section>
  );
}
