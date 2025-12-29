'use client';

import { Container, Title, Text, SimpleGrid, Paper, Anchor } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './LearnMore.module.css';

const topics = [
  {
    title: 'Ressourceplanlægning',
    description: 'Få styr på hvem der arbejder på hvad, undgå overbooking, og optimer teamets kapacitet.',
    href: '/ressourceplanlaegning',
  },
  {
    title: 'Projektstyring for små teams',
    description: 'Simpel projektstyring uden bøvl. Timer, økonomi og planlægning på ét sted.',
    href: '/projektstyring-smaa-teams',
  },
  {
    title: 'Gantt diagram',
    description: 'Visualiser projektplaner og få overblik over deadlines, opgaver og ressourcer.',
    href: '/gantt-diagram',
  },
];

export function LearnMore() {
  return (
    <section className={classes.section}>
      <Container size="lg">
        <div className={classes.header}>
          <Title order={2} className={classes.title}>
            Lær mere om Optiro
          </Title>
          <Text className={classes.subtitle} size="lg" mt="md">
            Dyk dybere ned i hvordan Optiro kan hjælpe dit team med bedre projektstyring
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl">
          {topics.map((topic, index) => (
            <Anchor
              key={index}
              href={topic.href}
              className={classes.cardLink}
            >
              <Paper className={classes.card} p="xl" radius="md">
                <Title order={3} size="h4" className={classes.cardTitle}>
                  {topic.title}
                </Title>
                <Text className={classes.cardDescription} size="sm" mt="sm" mb="md">
                  {topic.description}
                </Text>
                <div className={classes.arrow}>
                  <IconArrowRight size={20} />
                </div>
              </Paper>
            </Anchor>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
