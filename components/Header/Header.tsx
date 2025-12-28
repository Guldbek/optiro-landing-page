'use client';

import { Container, Group, Button, Menu } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <Container size="lg" h="100%">
        <Group justify="space-between" h="100%" align="center">
          <a href="/" className={classes.logoLink}>
            <Image src="/optiro.svg" alt="Optiro" width={120} height={40} priority />
          </a>
          <Group gap="md" align="center">
            <Menu shadow="md" width={260} position="bottom-end">
              <Menu.Target>
                <Button
                  variant="subtle"
                  color="optiro"
                  className={classes.menuButton}
                  rightSection={<IconChevronDown size={16} />}
                >
                  Løsninger
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item component="a" href="/ressourceplanlaegning">
                  Ressourceplanlægning
                </Menu.Item>
                <Menu.Item component="a" href="/projektstyring-smaa-teams">
                  Projektstyring for små teams
                </Menu.Item>
                <Menu.Item component="a" href="/gantt-diagram">
                  Gantt diagram
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
            <Button
              component="a"
              href="https://app.optiro.dk/experiences/login"
              variant="outline"
              color="optiro"
              className={classes.loginButton}
            >
              Gå til app
            </Button>
            <Button
              component="a"
              href="https://app.optiro.dk/experiences/create-new-company/sign-up"
              className={classes.ctaButton}
            >
              Prøv nu
            </Button>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
