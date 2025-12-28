'use client';

import { Container, Title, Text, SimpleGrid, ThemeIcon, Badge } from '@mantine/core';
import { IconUsers, IconClock, IconChartLine, IconCloud, IconLayout, IconDatabase } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './Benefits.module.css';

const benefitSections = [
  {
    badge: 'DERFOR OPTIRO',
    title: 'Lavet til virksomheder der lever af timer',
    subtitle: 'Optiro giver dig styr på ressourcer, projekter og økonomi uden at drukne dig i kompleksitet. Simpel tidsregistrering, smart ressourceplanlægning og budgetoverblik. Til konsulenter, arkitekter, designere, håndværkere – alle der sælger tid og ekspertise.',
    image: '/project-overview-page.png',
    imageAlt: 'Optiro projektoverblik - Dashboard med projektmetrikker og statusoversigt',
    imageWidth: 2649,
    imageHeight: 1542,
    features: [
      {
        icon: IconUsers,
        title: 'Ressourceoverblik i realtid',
        description: 'Se hvem der er booket og hvem der har kapacitet. Allokér folk til projekter, undgå overbooking, og optimer udnyttelsen af dine ressourcer.',
      },
      {
        icon: IconClock,
        title: 'Timer og økonomi – altid opdateret',
        description: 'Følg timeregistreringer løbende, se budgetforbrug på projekter, og få advarsler hvis et projekt er ved at overskride. Ingen ubehagelige overraskelser.',
      },
      {
        icon: IconChartLine,
        title: 'Data der gør dig klogere',
        description: 'Hvilke projekter er mest profitable? Hvor estimerer I forkert? Brug historiske data til at forbedre planlægning og øge overskuddet.',
      },
    ],
  },
  {
    badge: 'VØK MED OS',
    title: 'Start simpelt – voks når du har brug for det',
    subtitle: 'Optiro er bygget til at følge din virksomhed. Start med grundlæggende projektstyring og tidsregistrering. Tilføj ressourceplanlægning når teamet vokser. Integrér økonomi når det giver mening. Du bestemmer tempoet.',
    image: '/project-economy-forecast.png',
    imageAlt: 'Optiro budget og økonomi - Detaljeret omkostningsoversigt og prognoser',
    imageWidth: 2694,
    imageHeight: 1159,
    features: [
      {
        icon: IconCloud,
        title: 'Cloud-baseret og altid tilgængeligt',
        description: 'Ingen installation, automatiske opdateringer. Tilgå dine data fra kontoret, hjemme eller på farten. Alt synkroniseret i realtid.',
      },
      {
        icon: IconLayout,
        title: 'Intuitiv og nem at lære',
        description: 'Kom hurtigt i gang uden omfattende træning. Brugervenligt interface der giver mening – også for dem der ikke er super-tekniske.',
      },
      {
        icon: IconDatabase,
        title: 'Rapporter og indsigt når du har brug for det',
        description: 'Timeforbrugsrapporter, projektoverblik, rentabilitetsanalyser. Få svar på dine spørgsmål uden at skulle bygge komplicerede Excel-ark.',
      },
    ],
  },
];

export function Benefits() {
  return (
    <section className={classes.section}>
      <Container size="lg">
        {benefitSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className={classes.benefitSection}>
            <div className={sectionIndex % 2 === 0 ? classes.contentWrapper : classes.contentWrapperReverse}>
              <div className={classes.textContent}>
                <Badge size="lg"  color="optiro">{section.badge}</Badge>
                <Title order={2} className={classes.title} mt="md">
                  {section.title}
                </Title>
                <Text className={classes.subtitle} size="md" mt="md">
                  {section.subtitle}
                </Text>

                <SimpleGrid cols={1} spacing="lg" mt="xl">
                  {section.features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className={classes.feature}>
                        <ThemeIcon size={48} radius="md" color="optiro">
                          <Icon size={24} stroke={1.5} />
                        </ThemeIcon>
                        <div className={classes.featureContent}>
                          <Text fw={600} size="md" className={classes.featureTitle}>
                            {feature.title}
                          </Text>
                          <Text size="sm" c="dimmed" mt={4}>
                            {feature.description}
                          </Text>
                        </div>
                      </div>
                    );
                  })}
                </SimpleGrid>
              </div>

              <div className={classes.imageWrapper}>
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  width={section.imageWidth}
                  height={section.imageHeight}
                  className={classes.image}
                />
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
