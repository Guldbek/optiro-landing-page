import { Metadata } from 'next';
import { Container, Title, Text, List, ListItem, Button, Stack, Paper } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './page.module.css';

export const metadata: Metadata = {
  title: 'Ressourceplanlægning til Små Teams | Optiro',
  description: 'Effektiv ressourceplanlægning for små teams. Undgå overbooking, få overblik over kapacitet og planlæg medarbejdere nemt. Prøv Optiro gratis.',
  keywords: 'ressourceplanlægning, ressourcestyring, kapacitetsplanlægning, medarbejderplanlægning, teamplanlægning',
  openGraph: {
    title: 'Ressourceplanlægning til Små Teams | Optiro',
    description: 'Få styr på ressourcer og kapacitet med effektiv planlægning for små teams.',
    url: 'https://optiro.dk/ressourceplanlaegning',
  },
};

export default function RessourceplanlaegningPage() {
  return (
    <>
      <Header />
      <main>
        <div className={classes.hero}>
          <Container size="md">
            <Title className={classes.h1} order={1}>
              Ressourceplanlægning der virker for små teams
            </Title>
            <Text className={classes.intro} size="lg" mt="md">
              Hvem arbejder på hvad? Har vi kapacitet til det nye projekt? Og hvorfor er Mette 
              booket 120% i næste uge? Hvis du kender disse spørgsmål, så kender du også behovet 
              for bedre ressourceplanlægning.
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Mange små teams bruger Excel, whiteboards eller kalendere til at holde styr på 
              medarbejdere og projekter. Det fungerer måske i starten, men det bliver hurtigt 
              uoverskueligt når projekter overlapper, folk bliver syge, eller nye opgaver dukker op.
            </Text>
            <Text className={classes.intro} size="lg" mt="md">
              Optiro giver dig den enkle ressourceplanlægning du mangler – uden at drukne i 
              funktioner du aldrig får brug for.
            </Text>
          </Container>
        </div>


<div className={classes.section}>
        <Container size="md" >
          <Title className={classes.h2} order={2}>
            Typiske udfordringer med ressourceplanlægning
          </Title>
          <List spacing="md" size="md" mt="lg" icon={<IconCheck size={20} className={classes.listIcon} />}>
            <ListItem>
              <strong>Overbooking:</strong> Medarbejdere bliver tildelt flere timer end de har 
              til rådighed, hvilket skaber stress og forsinkelser.
            </ListItem>
            <ListItem>
              <strong>Manglende overblik:</strong> Det er svært at se om teamet har kapacitet 
              til nye projekter uden at lægge alt data sammen manuelt.
            </ListItem>
            <ListItem>
              <strong>Spildtid:</strong> Folk sidder uden opgaver fordi ingen ved hvem der er 
              ledig, eller der er glemt at planlægge frem.
            </ListItem>
            <ListItem>
              <strong>Excel-kaos:</strong> Forskellige versioner af planlægningsark, formler der 
              går i stykker, ogark der ikke opdateres når virkeligheden ændrer sig.
            </ListItem>
            <ListItem>
              <strong>Dårlige estimater:</strong> Uden historiske data er det svært at vide hvor 
              mange timer projekter egentlig kræver.
            </ListItem>
          </List>
        </Container>
  </div>


        <div className={classes.solutionSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Sådan løser Optiro det
            </Title>
            <Text size="md" mt="md" mb="xl" c="#2d5a4a">
              Optiro er bygget til teams der har brug for ressourceplanlægning uden det 
              administrative overhead. Her er hvordan det virker:
            </Text>

            <Stack gap="lg">
              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Visuelt overblik over kapacitet
                </Title>
                <Text>
                  Se med ét blik hvem der er booket hvornår. Farver viser automatisk om nogen er 
                  overbelastet (rød) eller har ledig kapacitet (grøn). Ingen matematik – bare et klart overblik.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Træk-og-slip planlægning
                </Title>
                <Text>
                  Planlæg medarbejdere på projekter ved at trække opgaver direkte ind i kalenderen. 
                  Systemet advarer dig automatisk hvis nogen bliver overbooked.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Realtidsdata fra tidsregistrering
                </Title>
                <Text>
                  Når medarbejdere registrerer timer, opdateres ressourceplanen automatisk. Du ved 
                  altid præcis hvor mange timer der er tilbage på hvert projekt.
                </Text>
              </Paper>

              <Paper className={classes.feature} p="md" radius="md">
                <Title order={3} size="h4" mb="xs">
                  Prognose og historik
                </Title>
                <Text>
                  Brug data fra tidligere projekter til at lave bedre estimater fremadrettet. Se 
                  om teamet historisk har overskudt eller underskudt timebudgetterne.
                </Text>
              </Paper>
            </Stack>

            <Text size="md" mt="xl" c="#2d5a4a">
              Optiro kombinerer ressourceplanlægning med{' '}
              <a href="/projektstyring-smaa-teams" className={classes.link}>
                projektstyring for små teams
              </a>
              , så du både kan planlægge hvem der arbejder på hvad, og følge med i fremdrift og 
              økonomi på samme sted.
            </Text>
          </Container>
        </div>

        <div className={classes.section}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Hvem er det relevant for?
            </Title>
            <Text size="md" mt="md">
              Optiro passer perfekt til små og mellemstore teams der arbejder projektbaseret:
            </Text>
            <List spacing="sm" size="md" mt="lg">
              <ListItem>Konsulentvirksomheder (IT, strategi, kommunikation)</ListItem>
              <ListItem>Arkitekt- og ingeniørfirmaer</ListItem>
              <ListItem>Designbureauer og kreative teams</ListItem>
              <ListItem>Håndværksteams med flere projekter parallelt</ListItem>
              <ListItem>Advokat- og revisionskontorer</ListItem>
              <ListItem>Softwareudviklingsvirksomheder</ListItem>
            </List>
            <Text size="md" mt="lg">
              Hvis dit team fakturerer timer, jonglerer flere projekter ad gangen, og har brug for 
              at vide om I har kapacitet til nye opgaver – så er ressourceplanlægning i Optiro noget 
              for dig.
            </Text>
          </Container>
        </div>

        <div className={classes.comparisonSection}>
          <Container size="md">
            <Title className={classes.h2} order={2}>
              Optiro vs. Excel til ressourceplanlægning
            </Title>
            <Text size="md" mt="md" c="#2d5a4a">
              Mange små teams starter med Excel. Det er billigt og fleksibelt, men hurtigt bliver 
              det også til en flaskehals:
            </Text>
            <List spacing="sm" size="md" mt="lg">
              <ListItem>
                <strong>Excel:</strong> Skal opdateres manuelt. Hvis nogen glemmer at opdatere arket, 
                er dine planer forældede.
              </ListItem>
              <ListItem>
                <strong>Optiro:</strong> Opdaterer automatisk når timer registreres. Du ved altid 
                hvor meget tid der er tilbage.
              </ListItem>
            </List>
            <List spacing="sm" size="md" mt="md">
              <ListItem>
                <strong>Excel:</strong> Kræver formler, pivot-tabeller og manuelt vedligehold. 
                Kun én person kender til arket.
              </ListItem>
              <ListItem>
                <strong>Optiro:</strong> Ingen formler. Alle kan se planen og opdatere den uden 
                at skulle forstå hvordan et Excel-ark er bygget.
              </ListItem>
            </List>
            <List spacing="sm" size="md" mt="md">
              <ListItem>
                <strong>Excel:</strong> Svært at få overblik på tværs af projekter, medarbejdere 
                og tidsperioder.
              </ListItem>
              <ListItem>
                <strong>Optiro:</strong> Visuel ressourceoversigt som et{' '}
                <a href="/gantt-diagram" className={classes.link}>gantt diagram</a>. Se hele teamets 
                belastning på tværs af projekter.
              </ListItem>
            </List>
          </Container>
        </div>

        <div className={classes.ctaSection}>
          <Container size="sm">
            <Title className={classes.h2} order={2} ta="center">
              Få bedre styr på dine ressourcer
            </Title>
            <Text size="lg" mt="md" ta="center">
              Prøv Optiro gratis i 14 dage. Ingen binding, intet kreditkort – bare bedre 
              ressourceplanlægning fra dag ét.
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
