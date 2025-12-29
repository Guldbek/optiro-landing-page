import { Metadata } from 'next';
import { Container, Title, Text, List, ListItem, Button, Stack, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './page.module.css';

export const metadata: Metadata = {
  title: 'Projektstyring for Små Teams | Optiro',
  description: 'Projektstyring bygget til små teams. Simpel planlægning, tidsregistrering og økonomi på ét sted. Uden overflødige funktioner. Prøv gratis.',
  keywords: 'projektstyring, projektledelse, projekt software, lille team, projektplanlægning, timeregistrering',
  openGraph: {
    title: 'Projektstyring for Små Teams | Optiro',
    description: 'Få styr på projekter, timer og økonomi med projektstyring bygget til små teams.',
    url: 'https://optiro.dk/projektstyring-smaa-teams',
  },
};

export default function ProjektstyringSmaateamsPage() {
  return (
    <>
      <Header />
      <main>
        <div className={classes.hero}>
          <Container size="md">
            <Title className={classes.h1} order={1}>
              Projektstyring for små teams der ikke har tid til bøvl
            </Title>
            <Text className={classes.intro} size="lg" mt="md">
              Hvor langt er vi med projektet? Hvor mange timer har vi brugt? Hvornår skal vi være 
              færdige? Og overholder vi budgettet? Hvis du leder et lille team, kender du disse 
              spørgsmål alt for godt.
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Problemet med de fleste projektstyringsværktøjer er, at de enten er bygget til store 
              virksomheder med dedikerede projektledere, eller også mangler de de grundlæggende 
              funktioner du faktisk har brug for – som tidsregistrering og økonomioverblik.
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Optiro er projektstyring til små teams der bare vil have styr på tingene uden at 
              bruge halve dagen på administration.
            </Text>
          </Container>
        </div>

<div className={classes.section}>
        <Container size="md" >
          <Title className={classes.h2} order={2}>
            Typiske udfordringer for små teams
          </Title>
          <List spacing="md" size="md" mt="lg" icon={<IconCheck size={20} className={classes.listIcon} />}>
            <ListItem>
              <strong>For komplekse værktøjer:</strong> Enterprise-software med funktioner du aldrig 
              får brug for, og som kræver en uges træning bare for at komme i gang.
            </ListItem>
            <ListItem>
              <strong>Manglende integration:</strong> Timer registreres ét sted, projekter planlægges 
              et andet, og økonomi skal tastes ind manuelt i Excel.
            </ListItem>
            <ListItem>
              <strong>Ingen overblik over økonomi:</strong> Du ved ikke om projektet går i nul før 
              det er for sent at rette op på det.
            </ListItem>
            <ListItem>
              <strong>Kaos i kommunikationen:</strong> Aftaler ligger i mails, opgaver i Trello, 
              filer i Google Drive, og ingen ved hvor tingene er.
            </ListItem>
            <ListItem>
              <strong>Spildtid på status-møder:</strong> Fordi ingen har et samlet overblik, skal 
              I bruge mødetid på at afstemme hvor I er henne.
            </ListItem>
          </List>
        </Container>
  </div>


        <div className={classes.solutionSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Sådan fungerer projektstyring i Optiro
            </Title>
            <Text size="md" mt="md" mb="xl" c="#2d5a4a">
              Optiro samler de funktioner små teams faktisk har brug for – og skærer resten væk:
            </Text>

            <Stack gap="lg">
              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Projektplanlægning med gantt-visning
                </Title>
                <Text>
                  Planlæg opgaver visuelt med et{' '}
                  <a href="/gantt-diagram" className={classes.link}>gantt diagram</a>. Træk opgaver, 
                  tilføj deadlines, og se hele projektets tidslinje på ét sted. Systemet advarer dig 
                  hvis deadlines kolliderer.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Tidsregistrering direkte i projektet
                </Title>
                <Text>
                  Medarbejdere registrerer timer direkte på opgaver. Du kan se i realtid hvor mange 
                  timer der er brugt på hver opgave, og hvor mange der er tilbage af budgettet.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Automatisk økonomioverblik
                </Title>
                <Text>
                  Se med ét blik om projektet går i nul eller minus. Baseret på timepriser og 
                  registrerede timer beregner Optiro automatisk forventet indtjening og forbrug.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Ressourceplanlægning
                </Title>
                <Text>
                  Planlæg hvem der skal arbejde på hvad og hvornår. Se om teamet har kapacitet til 
                  nye projekter, eller om nogen er overbelastet. Læs mere om{' '}
                  <a href="/ressourceplanlaegning" className={classes.link}>
                    ressourceplanlægning for små teams
                  </a>
                  .
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Simpel fakturering
                </Title>
                <Text>
                  Når projektet er færdigt, kan du oprette fakturaer direkte ud fra registrerede timer. 
                  Ingen copy-paste mellem systemer.
                </Text>
              </Paper>
            </Stack>
          </Container>
        </div>

<div className={classes.section}>
  
        <Container size="md" >
          <Title className={classes.h2} order={2}>
            Hvem er det relevant for?
          </Title>
          <Text size="md" mt="md" c="#2d5a4a">
            Optiro er bygget til små og mellemstore teams der fakturerer timer og har brug for 
            overskuelig projektstyring:
          </Text>
          <List spacing="sm" size="md" mt="lg">
            <ListItem>IT-konsulenter og softwareudviklere (3-20 medarbejdere)</ListItem>
            <ListItem>Arkitekt- og ingeniørvirksomheder</ListItem>
            <ListItem>Kreative bureauer (reklame, design, kommunikation)</ListItem>
            <ListItem>Håndværksteams med projektbaseret arbejde</ListItem>
            <ListItem>Rådgivningsvirksomheder og konsulenter</ListItem>
            <ListItem>Advokatfirmaer og revisionshuse</ListItem>
          </List>
          <Text size="md" mt="lg" c="#2d5a4a">
            Hvis dit team lever af projekter, har brug for at holde styr på timer og økonomi, og 
            ikke vil drukne i administration – så er Optiro noget for dig.
          </Text>
        </Container>
        </div>

        <div className={classes.comparisonSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Hvorfor ikke bare bruge Excel og Trello?
            </Title>
            <Text size="md" mt="md" c="#2d5a4a">
              Mange små teams starter med en kombination af Excel (til økonomi), Trello eller Asana 
              (til opgaver), og måske Google Sheets til tidsregistrering. Det fungerer fint i starten, 
              men hurtigt opstår problemerne:
            </Text>
            <List spacing="sm" size="md" mt="lg">
              <ListItem>
                <strong>Ingen sammenhæng:</strong> Timer registreres ét sted, projekter planlægges 
                et andet. Du skal selv lægge tallene sammen for at vide om projektet går i plus eller minus.
              </ListItem>
              <ListItem>
                <strong>Manuelt vedligehold:</strong> Hver gang nogen registrerer timer, skal det 
                opdateres i Excel. Hver gang en opgave forskydes, skal gantt-arket rettes manuelt.
              </ListItem>
              <ListItem>
                <strong>Kun én kender systemet:</strong> Typisk er det én person der har styr på 
                Excel-formler og pivot-tabeller. Hvis de er syge, står resten af teamet i stampe.
              </ListItem>
              <ListItem>
                <strong>Svært at skalere:</strong> Med 3-5 projekter går det. Med 10+ bliver det 
                uoverskueligt og risikoen for fejl stiger drastisk.
              </ListItem>
            </List>
            <Text size="md" mt="lg" c="#2d5a4a">
              Optiro samler det hele på ét sted. Timer, økonomi, planlægning og opgaver synkroniserer 
              automatisk, så du altid har et aktuelt overblik.
            </Text>
          </Container>
        </div>

        <div className={classes.ctaSection}>
          <Container size="sm">
            <Title className={classes.h2} order={2} ta="center">
              Få bedre styr på projekter uden bøvl
            </Title>
            <Text size="lg" mt="md" ta="center">
              Prøv Optiro gratis i 14 dage. Ingen kreditkort, ingen binding. Bare simpel 
              projektstyring fra dag ét.
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
