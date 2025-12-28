'use client';

import { Container, Group, Anchor, Stack } from '@mantine/core';
import Image from 'next/image';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.logo}>
            <a href="/" className={classes.logoLink}>
              <Image src="/optiro.svg" alt="Optiro" width={140} height={40} />
            </a>
            <p className={classes.description}>
              Optiro er et moderne ERP-system til projektstyring og ressourceplanlægning. Vi
              hjælper danske virksomheder med at optimere projektflow, forbedre
              ressourceudnyttelse og få bedre overblik gennem smart planlægning og integrerede
              budgetfunktioner.
            </p>
          </div>

          <div className={classes.links}>
            <Stack gap="xs">
              <Anchor
                href="https://app.optiro.dk/experiences/create-new-company/sign-up"
                className={classes.link}
                target="_blank"
              >
                Prøv nu
              </Anchor>
              <Anchor
                href="https://app.optiro.dk/experiences/login"
                className={classes.link}
                target="_blank"
              >
                Gå til app
              </Anchor>
            </Stack>
          </div>
        </div>

        <div className={classes.bottom}>
          <Group gap="md" justify="center">
            <Anchor
              href="/privacy-policy"
              size="sm"
              c="dimmed"
              className={classes.bottomLink}
            >
              Privatlivspolitik
            </Anchor>
            <span className={classes.separator}>•</span>
            <Anchor
              href="/terms-and-conditions"
              size="sm"
              c="dimmed"
              className={classes.bottomLink}
            >
              Vilkår & betingelser
            </Anchor>
          </Group>
          <p className={classes.copyright}>
            © {new Date().getFullYear()} Optiro. Alle rettigheder forbeholdes.
          </p>
        </div>
      </Container>
    </footer>
  );
}
