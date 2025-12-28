'use client';

import { Container, Title, Text, Button, Stack } from '@mantine/core';
import classes from './CTA.module.css';

export function CTA() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <div className={classes.content}>
          <Title order={2} className={classes.title}>
            Klar til bedre styr på projekter og ressourcer?
          </Title>
          <Text size="lg" className={classes.description} mt="md">
            Prøv Optiro gratis og oplev hvor nemt det kan være at holde styr på projekter, timer og økonomi. 
            Ingen binding, ingen kreditkort – kom i gang på minutter.
          </Text>
          <Stack gap="sm" mt="xl" align="center">
            <Button
              component="a"
              href="https://app.optiro.dk/experiences/create-new-company/sign-up"
              size="xl"
              className={classes.ctaButton}
            >
              Prøv gratis
            </Button>
          </Stack>
        </div>
      </Container>
    </section>
  );
}
