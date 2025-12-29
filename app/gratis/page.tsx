import { Metadata } from 'next';
import { Container, Title, Text, List, ListItem, Button, Paper, SimpleGrid } from '@mantine/core';
import { IconCheck, IconClock, IconUsers, IconChartBar, IconCalendar, IconFileInvoice } from '@tabler/icons-react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './page.module.css';

export const metadata: Metadata = {
  title: 'Gratis Projektstyring & Tidsregistrering | Optiro',
  description: 'Gratis projektstyring, tidsregistrering og ressourceplanlægning i beta-perioden. Early adopter fordele. Ingen kreditkort, ingen binding.',
  keywords: 'gratis projektstyring, gratis tidsregistrering, gratis ressourceplanlægning, gratis budgetoverblik, gratis gantt diagram, gratis timeregistrering',
  openGraph: {
    title: 'Gratis Projektstyring & Tidsregistrering | Optiro',
    description: 'Gratis i beta. Projektstyring, tidsregistrering, ressourceplanlægning og mere. Early adopter fordele.',
    url: 'https://optiro.dk/gratis',
  },
};

export default function GratisPage() {
  return (
    <>
      <Header />
      <main>
        <div className={classes.hero}>
          <Container size="md">
            <Title className={classes.h1} order={1}>
              Gratis mens vi er i beta
            </Title>
            <Text className={classes.intro} size="xl" mt="md">
              Ingen kreditkort. Ingen binding. Fuld adgang så længe vi udvikler systemet.
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Optiro er i beta, og vi udvikler aktivt systemet sammen med vores brugere. 
              Lige nu kan du bruge alt gratis – og når vi lancerer officielt, får du som 
              early adopter en særlig pris.
            </Text>
            <Button
              component="a"
              href="https://app.optiro.dk/experiences/create-new-company/sign-up"
              size="xl"
              mt="xl"
              className={classes.heroButton}
            >
              Kom i gang gratis
            </Button>
          </Container>
        </div>
        <div className={classes.section}>

        <Container size="lg" >
          <Title className={classes.h2} order={2} ta="center">
            Alt er gratis i beta-perioden
          </Title>
          <Text size="lg" mt="md" ta="center" c="#2d5a4a">
            Ingen begrænsede funktioner. Ingen "premium upgrades". Fuld adgang til hele systemet – gratis.
          </Text>

          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl">
            <Paper className={classes.feature} p="lg" radius="md">
              <IconClock size={40} className={classes.featureIcon} />
              <Title order={3} size="h4" mt="md" mb="xs">
                Gratis tidsregistrering
              </Title>
              <Text size="sm">
                Nem tidsregistrering direkte på projekter og opgaver. Mobil-optimeret så medarbejdere 
                kan registrere timer på farten. Se budgetforbrug i realtid.
              </Text>
              <Text size="sm" mt="md">
                <a href="/tidsregistrering" className={classes.link}>
                  Læs mere om tidsregistrering →
                </a>
              </Text>
            </Paper>

            <Paper className={classes.feature} p="lg" radius="md">
              <IconUsers size={40} className={classes.featureIcon} />
              <Title order={3} size="h4" mt="md" mb="xs">
                Gratis ressourceplanlægning
              </Title>
              <Text size="sm">
                Planlæg hvem der arbejder på hvad og hvornår. Visuelt overblik over teamets kapacitet. 
                Undgå overbooking og spildtid.
              </Text>
              <Text size="sm" mt="md">
                <a href="/ressourceplanlaegning" className={classes.link}>
                  Læs mere om ressourceplanlægning →
                </a>
              </Text>
            </Paper>

            <Paper className={classes.feature} p="lg" radius="md">
              <IconChartBar size={40} className={classes.featureIcon} />
              <Title order={3} size="h4" mt="md" mb="xs">
                Gratis budgetoverblik
              </Title>
              <Text size="sm">
                Se øjeblikkeligt om projekter går i plus eller minus. Automatisk beregning baseret 
                på registrerede timer og timepriser. Advarsler ved budgetoverskridelser.
              </Text>
            </Paper>

            <Paper className={classes.feature} p="lg" radius="md">
              <IconCalendar size={40} className={classes.featureIcon} />
              <Title order={3} size="h4" mt="md" mb="xs">
                Gratis gantt-diagrammer
              </Title>
              <Text size="sm">
                Visualiser projektets tidslinje med gantt-diagrammer. Træk opgaver, tilføj deadlines, 
                se afhængigheder. Perfekt til projektplanlægning.
              </Text>
              <Text size="sm" mt="md">
                <a href="/gantt-diagram" className={classes.link}>
                  Læs mere om gantt-diagrammer →
                </a>
              </Text>
            </Paper>

            <Paper className={classes.feature} p="lg" radius="md">
              <IconFileInvoice size={40} className={classes.featureIcon} />
              <Title order={3} size="h4" mt="md" mb="xs">
                Gratis fakturering
              </Title>
              <Text size="sm">
                Opret fakturaer direkte fra registrerede timer. Ingen manuel gennemgang eller 
                copy-paste mellem systemer. Eksportér til dit økonomisystem.
              </Text>
            </Paper>

            <Paper className={classes.feature} p="lg" radius="md">
              <IconCheck size={40} className={classes.featureIcon} />
              <Title order={3} size="h4" mt="md" mb="xs">
                Gratis projektstyring
              </Title>
              <Text size="sm">
                Komplet projektstyring for små teams. Opgaver, deadlines, samarbejde, økonomi og 
                rapportering – alt på ét sted.
              </Text>
              <Text size="sm" mt="md">
                <a href="/projektstyring-smaa-teams" className={classes.link}>
                  Læs mere om projektstyring →
                </a>
              </Text>
            </Paper>
          </SimpleGrid>
        </Container>

</div>
        <div className={classes.benefitsSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Hvorfor er det gratis?
            </Title>
            <Text size="lg" mt="md" c="#2d5a4a">
              Optiro er i beta, og vi udvikler aktivt systemet sammen med vores brugere. 
              Vi vil gerne have din feedback, og vi vil gerne bevise at Optiro kan gøre en 
              reel forskel for dit team.
            </Text>
            <Text size="lg" mt="md" c="#2d5a4a">
              Når vi lancerer officielt, introducerer vi priser – men alle der bruger Optiro 
              i beta-perioden får en særlig early adopter-rabat. Vi annoncerer priserne i god tid, 
              så du har mulighed for at tage stilling.
            </Text>

            <Title className={classes.h3} order={3} mt="xl" mb="md">
              Hvad får du i beta-perioden?
            </Title>
            <List spacing="md" size="md" icon={<IconCheck size={20} className={classes.listIcon} />}>
              <ListItem>
                <strong>Fuld adgang til alle funktioner</strong> – projektstyring, tidsregistrering, 
                ressourceplanlægning, budgetoverblik, gantt-diagrammer og fakturering
              </ListItem>
              <ListItem>
                <strong>Ubegrænset antal projekter og brugere</strong> – invitér hele teamet uden 
                ekstra omkostninger
              </ListItem>
              <ListItem>
                <strong>Gratis så længe vi er i beta</strong> – ingen kreditkort nødvendigt, ingen tidsbegrænsning
              </ListItem>
              <ListItem>
                <strong>Early adopter fordele</strong> – særlig rabat når vi lancerer officielt
              </ListItem>
              <ListItem>
                <strong>Personlig onboarding</strong> – vi hjælper dig med at komme godt i gang
              </ListItem>
              <ListItem>
                <strong>Support via mail og chat</strong> – få hjælp når du har brug for det
              </ListItem>
              <ListItem>
                <strong>Eksportér dine data</strong> – dine data er altid dine, og du kan tage dem 
                med dig hvis Optiro ikke passer til dig
              </ListItem>
            </List>
          </Container>
        </div>

        <div className={classes.section}>
        

        <Container size="md" >
          <Title className={classes.h2} order={2}>
            Hvem er Optiro til?
          </Title>
          <Text size="md" mt="md" c="#2d5a4a">
            Optiros beta-program er perfekt til projektbaserede virksomheder der lever af timer:
          </Text>
          <List spacing="sm" size="md" mt="lg">
            <ListItem>IT-konsulenter og softwareudviklingsteams (3-20 medarbejdere)</ListItem>
            <ListItem>Arkitekt- og ingeniørfirmaer</ListItem>
            <ListItem>Kreative bureauer (design, reklame, kommunikation)</ListItem>
            <ListItem>Advokat- og revisionskontorer</ListItem>
            <ListItem>Rådgivningsvirksomheder og strategiske konsulenter</ListItem>
            <ListItem>Håndværksteams med projektbaseret fakturering</ListItem>
          </List>
          <Text size="md" mt="lg" c="#2d5a4a">
            Hvis dit team fakturerer timer, jonglerer flere projekter samtidig, og har brug for 
            bedre overblik over tid, økonomi og ressourcer – så er Optiro bygget til dig.
          </Text>
        </Container>
        </div>



        <div className={classes.ctaSection}>
          <Container size="sm">
            <Title className={classes.h2} order={2} ta="center">
              Klar til at komme i gang?
            </Title>
            <Text size="xl" mt="md" ta="center">
              Gratis tidsregistrering, ressourceplanlægning, budgetoverblik og projektstyring. 
              Begynd nu – helt uden binding.
            </Text>
            <Button
              component="a"
              href="https://app.optiro.dk/experiences/create-new-company/sign-up"
              size="xl"
              mt="xl"
              fullWidth
              className={classes.ctaButton}
            >
              Kom i gang gratis
            </Button>
            <Text size="sm" mt="md" ta="center" style={{ opacity: 0.9 }}>
              Gratis i beta-perioden · Ingen binding · Early adopter fordele senere
            </Text>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
