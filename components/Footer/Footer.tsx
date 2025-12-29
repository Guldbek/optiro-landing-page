'use client';

import { Container, Group, Anchor, Stack, ActionIcon } from '@mantine/core';
import { IconBrandLinkedin, IconBrandFacebook, IconBrandInstagram } from '@tabler/icons-react';
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
                href="/ressourceplanlaegning"
                className={classes.link}
              >
                Ressourceplanlægning
              </Anchor>
              <Anchor
                href="/projektstyring-smaa-teams"
                className={classes.link}
              >
                Projektstyring
              </Anchor>
              <Anchor
                href="/gantt-diagram"
                className={classes.link}
              >
                Gantt diagram
              </Anchor>
              <Anchor
                href="/tidsregistrering"
                className={classes.link}
              >
                Tidsregistrering
              </Anchor>
              <Anchor
                href="/gratis"
                className={classes.link}
              >
                Prøv gratis
              </Anchor>
            </Stack>

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

          <div className={classes.social}>
            <p className={classes.socialTitle}>Følg os</p>
            <Group gap="sm">
              <ActionIcon
                component="a"
                href="https://www.linkedin.com/company/optiro-planning/"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="gray"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={20} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://www.facebook.com/profile.php?id=61574950835799"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="gray"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={20} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://www.instagram.com/optiroapp/"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                color="gray"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={20} />
              </ActionIcon>

            </Group>
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
