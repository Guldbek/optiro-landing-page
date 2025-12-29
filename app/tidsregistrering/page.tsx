import { Metadata } from 'next';
import { Container, Title, Text, List, ListItem, Button, Stack, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './page.module.css';

export const metadata: Metadata = {
  title: 'Tidsregistrering til Små Teams | Optiro',
  description: 'Nem tidsregistrering for konsulenter og teams. Registrér timer på projekter, få automatisk økonomioverblik og fakturer nemt. Prøv gratis.',
  keywords: 'tidsregistrering, timeregistrering, timer tracking, timeseddel, konsulent tidsregistrering, projekt timer',
  openGraph: {
    title: 'Tidsregistrering til Små Teams | Optiro',
    description: 'Nem tidsregistrering med automatisk økonomioverblik. Bygget til konsulenter og projektbaserede teams.',
    url: 'https://optiro.dk/tidsregistrering',
  },
};

export default function TidsregistreringPage() {
  return (
    <>
      <Header />
      <main>
        <div className={classes.hero}>
          <Container size="md">
            <Title className={classes.h1} order={1}>
              Tidsregistrering der faktisk giver mening
            </Title>
            <Text className={classes.intro} size="lg" mt="md">
              Hvor mange timer har jeg brugt i dag? Har vi overskridet budgettet på projektet? 
              Og hvor meget skal vi fakturere kunden? Hvis du lever af at sælge timer, ved du 
              hvor vigtig præcis tidsregistrering er.
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Problemet med de fleste tidsregistreringssystemer er, at de enten er alt for simple 
              (bare et timeskema uden kontekst), eller alt for komplicerede (enterprise-software 
              der kræver certificering for at bruge).
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Optiro giver dig tidsregistrering der er nem at bruge, men stadig giver dig det 
              overblik du har brug for – uden bøvl.
            </Text>
          </Container>
        </div>


<div className={classes.section}>
        <Container size="md">
          <Title className={classes.h2} order={2}>
            Typiske problemer med tidsregistrering
          </Title>
          <List spacing="md" size="md" mt="lg" icon={<IconCheck size={20} className={classes.listIcon} />}>
            <ListItem>
              <strong>Folk glemmer at registrere timer:</strong> Registrering sker manuelt i slutningen 
              af ugen, og ingen kan huske hvad de lavede mandag formiddag.
            </ListItem>
            <ListItem>
              <strong>Ingen kobling til projekter:</strong> Timer registreres, men du ved ikke om 
              projektet går i plus eller minus før det er for sent.
            </ListItem>
            <ListItem>
              <strong>Besværligt at udfylde:</strong> Skal logge ind på et separat system, finde 
              projektet, finde opgaven, taste timer – det tager længere tid end selve arbejdet.
            </ListItem>
            <ListItem>
              <strong>Manglende kontrol:</strong> Medarbejdere kan registrere hvad som helst, og 
              ingen opdager fejl før det skal faktureres.
            </ListItem>
            <ListItem>
              <strong>Svært at fakturere fra:</strong> Timer skal eksporteres til Excel, redigeres, 
              og så tastes ind i faktureringssystemet. Risiko for fejl i hvert trin.
            </ListItem>
          </List>
        </Container>

</div>
        <div className={classes.solutionSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Sådan fungerer tidsregistrering i Optiro
            </Title>
            <Text size="md" mt="md" mb="xl" c="#2d5a4a">
              Optiro gør tidsregistrering enkel, men giver dig stadig fuld kontrol og indsigt:
            </Text>

            <Stack gap="lg">
              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Registrér timer direkte på opgaver
                </Title>
                <Text>
                  Åbn projektet, find opgaven, registrér timer. Ingen komplicerede menuer eller 
                  projektcodes at huske. Timer knyttes automatisk til kunde, projekt og opgave.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Se budgetforbrug i realtid
                </Title>
                <Text>
                  Når timer registreres, ser du øjeblikkeligt hvor mange timer der er tilbage på 
                  opgaven og på projektet. Advarsler hvis du er ved at overskride budgettet.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Automatisk faktureringsgrundlag
                </Title>
                <Text>
                  Når projektet er færdigt, opretter du fakturaen direkte fra registrerede timer. 
                  Alle timer er allerede godkendt og kategoriseret – ingen manuel gennemgang nødvendig.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Godkendelsesflow for ledere
                </Title>
                <Text>
                  Som projektleder kan du godkende eller afvise registrerede timer. Se hvem der har 
                  registreret hvad, og ret fejl før fakturering.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Mobile-first design
                </Title>
                <Text>
                  Medarbejdere kan registrere timer fra telefonen når de er på farten. Registrér 
                  timer lige efter mødet, så det ikke glemmes.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Rapporter og indsigt
                </Title>
                <Text>
                  Se hvor meget tid hvert projekt bruger, hvilke medarbejdere der er mest effektive, 
                  og hvor mange fakturerbare timer I leverer om måneden.
                </Text>
              </Paper>
            </Stack>

            <Text size="md" mt="xl" c="#2d5a4a">
              Tidsregistrering i Optiro er en del af{' '}
              <a href="/projektstyring-smaa-teams" className={classes.link}>
                projektstyring for små teams
              </a>
              , så timer, opgaver, økonomi og planlægning hænger sammen på ét sted.
            </Text>
          </Container>
        </div>
        <div className={classes.section}>

        <Container size="md">
          <Title className={classes.h2} order={2}>
            Hvem har brug for tidsregistrering?
          </Title>
          <Text size="md" mt="md" c="#2d5a4a">
            Optiros tidsregistrering passer perfekt til projektbaserede virksomheder der fakturerer timer:
          </Text>
          <List spacing="sm" size="md" mt="lg">
            <ListItem>IT-konsulenter og softwareudviklingsteams</ListItem>
            <ListItem>Advokat- og revisionskontorer</ListItem>
            <ListItem>Rådgivningsvirksomheder og strategiske konsulenter</ListItem>
            <ListItem>Arkitekt- og ingeniørfirmaer</ListItem>
            <ListItem>Kreative bureauer (design, reklame, kommunikation)</ListItem>
            <ListItem>Håndværksteams med fakturering på timebasis</ListItem>
          </List>
          <Text size="md" mt="lg" c="#2d5a4a">
            Hvis din forretning lever af at sælge timer, og du har brug for præcis tidsregistrering 
            med automatisk økonomioverblik – så er Optiro bygget til dig.
          </Text>
        </Container>
        </div>

        <div className={classes.comparisonSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Optiro vs. Excel-timesedler
            </Title>
            <Text size="md" mt="md" c="#2d5a4a">
              Mange små teams starter med Excel-ark til tidsregistrering. Det er gratis og 
              fleksibelt, men hurtigt opstår begrænsningerne:
            </Text>
            <List spacing="sm" size="md" mt="lg">
              <ListItem>
                <strong>Excel:</strong> Timer ligger isoleret i et ark. Du skal selv beregne hvor 
                meget tid der er tilbage på projektet, og om budgettet overholdes.
              </ListItem>
              <ListItem>
                <strong>Optiro:</strong> Timer opdaterer automatisk projektøkonomi. Se øjeblikkeligt 
                om projektet går i plus eller minus, uden at skulle lave beregninger.
              </ListItem>
            </List>
            <List spacing="sm" size="md" mt="md">
              <ListItem>
                <strong>Excel:</strong> Kræver manuel opdatering. Hvis nogen glemmer at udfylde 
                arket, ved du ikke hvor mange timer der reelt er brugt.
              </ListItem>
              <ListItem>
                <strong>Optiro:</strong> Påmindelser til medarbejdere der ikke har registreret timer. 
                Systemet holder styr på hvem der mangler at registrere.
              </ListItem>
            </List>
            <List spacing="sm" size="md" mt="md">
              <ListItem>
                <strong>Excel:</strong> Svært at bruge på telefonen. Medarbejdere venter til de 
                kommer tilbage til kontoret, og glemmer halvdelen af timerne.
              </ListItem>
              <ListItem>
                <strong>Optiro:</strong> Mobil-optimeret. Registrér timer med et par klik direkte 
                fra telefonen – hvor som helst, når som helst.
              </ListItem>
            </List>
            <Text size="md" mt="lg" c="#2d5a4a">
              Kombiner tidsregistrering med{' '}
              <a href="/ressourceplanlaegning" className={classes.link}>ressourceplanlægning</a>
              {' '}og{' '}
              <a href="/gantt-diagram" className={classes.link}>gantt-diagrammer</a>
              {' '}for komplet overblik over projekter, økonomi og kapacitet.
            </Text>
          </Container>
        </div>

        <div className={classes.ctaSection}>
          <Container size="sm">
            <Title className={classes.h2} order={2} ta="center">
              Prøv nem tidsregistrering gratis
            </Title>
            <Text size="lg" mt="md" ta="center">
              Start din gratis 14-dages prøveperiode. Ingen kreditkort nødvendigt, ingen binding. 
              Få styr på timer fra dag ét.
            </Text>
            <Button
              component="a"
              href="https://app.optiro.dk/experiences/create-new-company/sign-up"
              size="lg"
              mt="xl"
              fullWidth
              className={classes.ctaButton}
            >
              Kom i gang gratis
            </Button>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  );
}
