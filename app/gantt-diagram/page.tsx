import { Metadata } from 'next';
import { Container, Title, Text, List, ListItem, Button, Stack, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import Image from 'next/image';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './page.module.css';

export const metadata: Metadata = {
  title: 'Gantt Diagram til Projektstyring | Optiro',
  description: 'Planlæg projekter visuelt med gantt diagram. Træk-og-slip planlægning, automatisk ressourceoverblik og økonomistyring. Prøv Optiro gratis.',
  keywords: 'gantt diagram, gantt chart, projektplanlægning, tidslinje, projektvisualisering, projekt tidsplan',
  openGraph: {
    title: 'Gantt Diagram til Projektstyring | Optiro',
    description: 'Visualiser projektplaner med gantt diagram og få overblik over deadlines og ressourcer.',
    url: 'https://optiro.dk/gantt-diagram',
  },
};

export default function GanttDiagramPage() {
  return (
    <>
      <Header />
      <main>
        <div className={classes.hero}>
          <Container size="md">
            <Title className={classes.h1} order={1}>
              Gantt diagram der gør projektplanlægning enkel
            </Title>
            <Text className={classes.intro} size="lg" mt="md">
              Et gantt diagram er den visuelle måde at planlægge projekter på. I stedet for lister 
              med opgaver og datoer ser du hele projektets tidslinje på ét blik – hvilke opgaver 
              overlapper, hvem der venter på hvad, og hvor deadlines ligger.
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Problemet er, at de fleste gantt-værktøjer enten kræver Microsoft Project (dyrt og 
              besværligt), eller de mangler de funktioner små teams har brug for – som 
              tidsregistrering og økonomioverblik.
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Optiro giver dig et gantt diagram der faktisk virker for små teams, uden at du skal 
              være projektleder-uddannet for at bruge det.
            </Text>
          </Container>
        </div>

        <Container size="md" className={classes.section}>
          <div className={classes.imageWrapper}>
            <Image
              src="/gantt-diagram.png"
              alt="Gantt diagram til projektstyring i Optiro"
              width={2624}
              height={1648}
              className={classes.image}
              priority
            />
            <Text size="sm" c="#2d5a4a" ta="center" mt="xs">
              Optiros gantt diagram viser projektets tidslinje, opgaver og ressourcer visuelt
            </Text>
          </div>
        </Container>

        <Container size="md" className={classes.section}>
          <Title className={classes.h2} order={2}>
            Typiske problemer med gantt-planlægning
          </Title>
          <List spacing="md" size="md" mt="lg" icon={<IconCheck size={20} className={classes.listIcon} />}>
            <ListItem>
              <strong>Komplicerede værktøjer:</strong> Microsoft Project og lignende kræver træning 
              og koster tusindvis af kroner per bruger. Alt for tungt til små teams.
            </ListItem>
            <ListItem>
              <strong>Excel-gantt-charts:</strong> Du kan tegne et gantt diagram i Excel, men det 
              kræver manuel opdatering hver gang noget ændrer sig. Og det synkroniserer ikke med 
              resten af projektet.
            </ListItem>
            <ListItem>
              <strong>Manglende integration:</strong> Selvom du planlægger i et gantt-værktøj, skal 
              timer stadig registreres et andet sted, og økonomi skal følges i Excel.
            </ListItem>
            <ListItem>
              <strong>Svært at opdatere:</strong> Når deadlines forskydes eller opgaver tager længere 
              tid end forventet, skal du manuelt rykke rundt på tingene – og håbe du ikke laver fejl.
            </ListItem>
            <ListItem>
              <strong>Ingen sammenhæng til virkeligheden:</strong> Planen i gantt-diagrammet bliver 
              hurtigt forældet fordi den ikke opdateres når folk registrerer timer eller opgaver 
              bliver færdige.
            </ListItem>
          </List>
        </Container>

        <div className={classes.solutionSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Sådan fungerer gantt diagram i Optiro
            </Title>
            <Text size="md" mt="md" mb="xl" c="#2d5a4a">
              Optiros gantt diagram kombinerer visuel planlægning med de funktioner små teams faktisk 
              har brug for:
            </Text>

            <Stack gap="lg">
              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Træk-og-slip planlægning
                </Title>
                <Text>
                  Opret opgaver, træk dem rundt på tidslinjen, og forlæng eller forkort dem ved at 
                  trække i kanterne. Ingen formler eller komplicerede indstillinger – bare intuitiv 
                  planlægning.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Se hele projektets tidslinje
                </Title>
                <Text>
                  Få overblik over alle opgaver, deadlines og milepæle på ét sted. Zoom ind for at 
                  se detaljer, eller zoom ud for at se hele projektet på en gang.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Automatisk ressourceoverblik
                </Title>
                <Text>
                  Se hvem der er tildelt hvilke opgaver direkte i gantt-diagrammet. Systemet viser 
                  automatisk hvis nogen er overbooked. Læs mere om{' '}
                  <a href="/ressourceplanlaegning" className={classes.link}>
                    ressourceplanlægning for små teams
                  </a>
                  .
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Integration med tidsregistrering
                </Title>
                <Text>
                  Når medarbejdere registrerer timer på opgaver, opdateres gantt-diagrammet automatisk. 
                  Du ser i realtid hvor mange timer der er brugt vs. budgetteret, og om opgaver er på vej 
                  mod at blive forsinkede.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Økonomi direkte i planen
                </Title>
                <Text>
                  Se ikke bare hvornår opgaver skal være færdige, men også hvad de koster. Optiro viser 
                  automatisk om projektet går i nul baseret på registrerede timer og timepriser.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Deling med kunder og team
                </Title>
                <Text>
                  Del gantt-diagrammet med kunder så de kan følge med i fremdriften, eller giv teamet 
                  adgang så alle ved hvad der skal ske hvornår.
                </Text>
              </Paper>
            </Stack>

            <Text size="md" mt="xl" c="#2d5a4a">
              Optiro kombinerer gantt diagram med fuld{' '}
              <a href="/projektstyring-smaa-teams" className={classes.link}>
                projektstyring for små teams
              </a>
              , så du både kan planlægge visuelt, registrere timer, og følge med i økonomi – alt sammen 
              på ét sted.
            </Text>
          </Container>
        </div>

        <Container size="md" className={classes.section}>
          <Title className={classes.h2} order={2}>
            Hvem har brug for gantt diagram?
          </Title>
          <Text size="md" mt="md" c="#2d5a4a">
            Gantt diagram passer perfekt til teams der arbejder med projekter der strækker sig over 
            flere uger eller måneder, og hvor opgaver afhænger af hinanden:
          </Text>
          <List spacing="sm" size="md" mt="lg">
            <ListItem>
              <strong>IT-projekter og softwareudvikling:</strong> Planlæg sprints, releases og 
              afhængigheder mellem funktioner.
            </ListItem>
            <ListItem>
              <strong>Bygge- og anlægsprojekter:</strong> Visualiser hvilke håndværkere skal være 
              på pladsen hvornår, og hvilke opgaver der venter på andre.
            </ListItem>
            <ListItem>
              <strong>Kreative projekter:</strong> Koordiner design, indhold, godkendelser og 
              lancering på tværs af teamet.
            </ListItem>
            <ListItem>
              <strong>Konsulentprojekter:</strong> Hold styr på analyser, møder, leverancer og 
              deadlines i længerevarende rådgivningsforløb.
            </ListItem>
            <ListItem>
              <strong>Event- og kampagneplanlægning:</strong> Koordiner mange parallelle opgaver 
              der skal falde på plads samtidig.
            </ListItem>
          </List>
          <Text size="md" mt="lg" c="#2d5a4a">
            Hvis dit projekt har mere end 5-10 opgaver, flere involverede personer, og en deadline 
            der ligger mere end en uge ude i fremtiden – så vil et gantt diagram give dig betydeligt 
            bedre overblik end simple opgavelister.
          </Text>
        </Container>

        <div className={classes.comparisonSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Gantt diagram vs. opgavelister
            </Title>
            <Text size="md" mt="md" c="#2d5a4a">
              Mange teams starter med opgavelister i Trello, Asana eller Todoist. Det fungerer fint 
              for simple projekter, men når kompleksiteten stiger, bliver det hurtigt uoverskueligt:
            </Text>
            <List spacing="sm" size="md" mt="lg">
              <ListItem>
                <strong>Opgavelister:</strong> Viser hvad der skal gøres, men ikke hvornår det skal 
                være færdigt eller i hvilken rækkefølge.
              </ListItem>
              <ListItem>
                <strong>Gantt diagram:</strong> Viser både hvad, hvornår og i hvilken rækkefølge. 
                Du ser med ét blik hvis opgaver overlapper eller blokerer for hinanden.
              </ListItem>
            </List>
            <List spacing="sm" size="md" mt="md">
              <ListItem>
                <strong>Opgavelister:</strong> Svært at se det store billede. Hvordan går det med 
                projektet som helhed? Er vi på vej mod deadline eller bagud?
              </ListItem>
              <ListItem>
                <strong>Gantt diagram:</strong> Det store billede er helt centralt. Du ser hele 
                tidslinjen på én gang og kan hurtigt spotte hvis noget er ved at gå galt.
              </ListItem>
            </List>
            <List spacing="sm" size="md" mt="md">
              <ListItem>
                <strong>Opgavelister:</strong> Ingen visuel sammenhæng mellem opgaver. Hvis opgave 
                A bliver forsinket, skal du selv finde ud af hvilke andre opgaver det påvirker.
              </ListItem>
              <ListItem>
                <strong>Gantt diagram:</strong> Afhængigheder vises visuelt. Når en opgave forskydes, 
                ser du med det samme hvilke andre opgaver der bliver påvirket.
              </ListItem>
            </List>
            <Text size="md" mt="lg" c="#2d5a4a">
              Det betyder ikke at opgavelister er dårlige – de er gode til hurtige daglige to-do's. 
              Men til projektplanlægning giver gantt diagram et overblik som opgavelister simpelthen 
              ikke kan matche.
            </Text>
          </Container>
        </div>

        <div className={classes.ctaSection}>
          <Container size="sm">
            <Title className={classes.h2} order={2} ta="center">
              Prøv gantt diagram uden bøvl
            </Title>
            <Text size="lg" mt="md" ta="center">
              Optiros gantt diagram er en del af den komplette projektstyring. Prøv gratis i 14 dage 
              – ingen kreditkort, ingen binding.
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
