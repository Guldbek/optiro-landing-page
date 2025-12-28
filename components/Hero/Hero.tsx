'use client';

import { Button, Container, Title, Text, Stack } from '@mantine/core';
import Image from 'next/image';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title} order={1}>
              Styr på projekter, timer og ressourcer
            </Title>
            <Text className={classes.description} size="lg" mt="md">
              Hvem arbejder på hvad? Hvor mange timer er der tilbage på projektet? Har vi kapacitet til det nye projekt? 
              Optiro giver dig overblik over projekter, ressourcer og økonomi – uanset om du driver konsulentvirksomhed, 
              tegner boliger eller bygger dem. Start simpelt, voks efter behov.
            </Text>
            <Stack gap="md" mt="xl">
              <Button
                component="a"
                href="https://app.optiro.dk/experiences/create-new-company/sign-up"
                size="lg"
                className={classes.ctaButton}
              >
                Prøv gratis
              </Button>
              <Text size="sm" c="dimmed">
                Gratis at prøve – ingen binding, intet kreditkort. Bare kom i gang.
              </Text>
            </Stack>
          </div>
          <div className={classes.imageWrapper}>
            <Image
              src="/gantt-diagram.png"
              alt="Optiro Gantt diagram - Projektstyring og ressourceplanlægning"
              width={2624}
              height={1648}
              priority
              loading="eager"
              fetchPriority="high"
              quality={75}
              className={classes.image}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
