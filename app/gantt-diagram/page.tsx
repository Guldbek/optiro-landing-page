import { Container, Title, Text, Stack, Button } from '@mantine/core';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './gantt-diagram.module.css';

export const metadata = {
  title: 'Gantt Diagram til Projektstyring | Optiro',
  description: 'Gantt diagram til små danske teams. Planlæg projekter visuelt med tidslinjer, afhængigheder og ressourceoverblik. Gratis for op til 10 brugere.',
};

export default function GanttDiagramPage() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Container size="md" py={80}>
          <Title order={1} className={classes.pageTitle}>
            Gantt Diagram til Projektstyring
          </Title>

          <Stack gap="xl" mt="xl">
            <section>
              <Text className={classes.text}>
                Et gantt diagram er en visuel tidslinje, der viser hvornår forskellige opgaver og faser i et projekt skal løses. For små teams er det en effektiv måde at få overblik over projekter uden at skulle dykke ned i komplekse projektplaner.
              </Text>
              <Text className={classes.text} mt="md">
                Problemet med mange gantt-værktøjer er, at de enten er for simple (kun tidslinjer uden økonomioverblik), eller for komplekse (bygget til enterprise-projekter med hundredvis af tasks og flere lag af godkendelser).
              </Text>
              <Text className={classes.text} mt="md">
                Optiro giver dig et gantt diagram, der er integreret med tidsregistrering, budgetter og ressourceplanlægning. Så du ikke kun ser hvornår opgaver skal løses, men også hvem der arbejder på dem, og hvor mange timer der er tilbage.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Typiske udfordringer
              </Title>
              <Text className={classes.text} component="div">
                <ul>
                  <li>
                    <strong>Manglende visualisering:</strong> Det er svært at se det store billede, når projekter kun eksisterer i Excel eller i hovedet
                  </li>
                  <li>
                    <strong>Ingen ressourceoverblik:</strong> Gantt-værktøjer viser tidslinjer, men ikke hvem der faktisk har tid til opgaverne
                  </li>
                  <li>
                    <strong>Statiske planer:</strong> Traditionelle gantt-diagrammer er svære at opdatere, når projektet ændrer sig
                  </li>
                  <li>
                    <strong>Manglende økonomisk kontekst:</strong> Tidslinjer uden budgetinformation giver ikke fuld værdi
                  </li>
                  <li>
                    <strong>For komplekse systemer:</strong> Enterprise-værktøjer kræver certificeringer og onboarding
                  </li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Sådan løser Optiro det
              </Title>
              <Text className={classes.text}>
                Optiro kombinerer gantt-visualisering med ressourceplanlægning og budgetoverblik. Du får et komplet billede af projektet – ikke kun hvornår opgaver skal løses, men også hvem der gør det, og om projektet holder budgettet.
              </Text>
              <Text className={classes.text} component="div" mt="md">
                <ul>
                  <li>
                    <strong>Visuel tidslinje:</strong> Se projektfaser og opgaver i en overskuelig gantt-visning
                  </li>
                  <li>
                    <strong>Ressourcetildeling:</strong> Tildel medarbejdere direkte i diagrammet
                  </li>
                  <li>
                    <strong>Dynamisk opdatering:</strong> Når folk registrerer timer, opdateres gantt-diagrammet automatisk
                  </li>
                  <li>
                    <strong>Budgetintegration:</strong> Se økonomi og tidslinjer side om side
                  </li>
                  <li>
                    <strong>Enkelt at bruge:</strong> Træk og slip til at flytte opgaver, ingen teknisk kompetence krævet
                  </li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Hvem er det relevant for?
              </Title>
              <Text className={classes.text}>
                Gantt-diagrammer i Optiro er bygget til projektbaserede teams, der arbejder med flere parallelle projekter og har brug for en visuel måde at planlægge på.
              </Text>
              <Text className={classes.text} mt="md">
                Det er særligt nyttigt for:
              </Text>
              <Text className={classes.text} component="div" mt="md">
                <ul>
                  <li>IT-teams der arbejder med udviklingsprojekter</li>
                  <li>Konsulentvirksomheder med længere engagementer</li>
                  <li>Arkitekter og ingeniører med faseopdelte projekter</li>
                  <li>Designbureauer med kreative processer</li>
                  <li>Håndværkere med større projekter</li>
                </ul>
              </Text>
              <Text className={classes.text} mt="md">
                Hvis du har brug for at visualisere projektforløb, koordinere flere medarbejdere og holde styr på deadlines, er gantt-visualisering et kraftfuldt værktøj.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Gantt diagram vs. manuel planlægning
              </Title>
              <Text className={classes.text}>
                Mange små teams planlægger manuelt i Excel, Google Sheets eller på whiteboards. Det fungerer i starten, men bliver hurtigt utidssvarende når projekter ændrer sig.
              </Text>
              <Text className={classes.text} mt="md">
                Med et gantt diagram i Optiro får du:
              </Text>
              <Text className={classes.text} component="div" mt="md">
                <ul>
                  <li>Automatisk opdatering når opgaver bliver udført</li>
                  <li>Visuel oversigt over afhængigheder mellem opgaver</li>
                  <li>Integration med projektstyring og ressourceplanlægning</li>
                  <li>Realtidsdata, så hele teamet ser den samme plan</li>
                  <li>Historik over hvordan projekter egentlig forløb</li>
                </ul>
              </Text>
            </section>

            <section className={classes.cta}>
              <Title order={2} className={classes.ctaTitle}>
                Gratis for op til 10 brugere
              </Title>
              <Text className={classes.text} mb="lg">
                Optiro er gratis for små teams. Ingen kreditkort påkrævet. Kom i gang nu.
              </Text>
              <Button
                component="a"
                href="https://app.optiro.dk/experiences/create-new-company/sign-up"
                size="lg"
                className={classes.ctaButton}
              >
                Prøv gantt diagram nu
              </Button>
              <Text size="sm" c="dimmed" mt="sm">
                Se også: <a href="/projektstyring-smaa-teams" className={classes.link}>projektstyring for små teams</a> og <a href="/ressourceplanlaegning" className={classes.link}>ressourceplanlægning uden Excel</a>
              </Text>
            </section>
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
