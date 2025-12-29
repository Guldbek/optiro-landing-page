import { Container, Title, Text, Stack, Button } from '@mantine/core';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './ressourceplanlaegning.module.css';

export const metadata = {
  title: 'Ressourceplanlægning til små teams | Optiro',
  description: 'Få styr på ressourceplanlægning uden Excel. Optiro hjælper små danske teams med at planlægge ressourcer, undgå overbooking og optimere kapacitet. Gratis for op til 10 brugere.',
};

export default function RessourceplanlaegningPage() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Container size="md" py={80}>
          <Title order={1} className={classes.pageTitle}>
            Ressourceplanlægning til små teams
          </Title>

          <Stack gap="xl" mt="xl">
            <section>
              <Text className={classes.text}>
                Ressourceplanlægning handler om at få det rigtige antal medarbejdere til de rigtige projekter på det rigtige tidspunkt. For små teams er det en daglig udfordring at balancere kapacitet, undgå overbooking og sikre, at ingen sidder stille.
              </Text>
              <Text className={classes.text} mt="md">
                Mange virksomheder bruger Excel eller manuelle systemer, men det kræver konstant vedligeholdelse og giver sjældent det overblik, du har brug for. Når tingene sker hurtigt, og projektplanerne ændrer sig, bliver regneark hurtigt forældede.
              </Text>
              <Text className={classes.text} mt="md">
                Optiro er bygget til netop det: at give dig et enkelt overblik over hvem der er booket, hvem der har kapacitet, og hvor meget tid der reelt er tilbage på dine projekter.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Typiske udfordringer
              </Title>
              <Text className={classes.text} component="div">
                <ul>
                  <li>
                    <strong>Overbooking:</strong> Medarbejdere bliver tildelt mere arbejde, end de har tid til, fordi der mangler et samlet overblik
                  </li>
                  <li>
                    <strong>Spildtid:</strong> Folk sidder stille mellem projekter, fordi ressourceplanlægningen ikke er tæt nok på hverdagen
                  </li>
                  <li>
                    <strong>Uklar kapacitet:</strong> Det er svært at vide, om I kan tage et nyt projekt, når I ikke har realtidsoverblik over teamets tilgængelighed
                  </li>
                  <li>
                    <strong>Forældede planer:</strong> Excel-ark bliver sjældent opdateret, og tilliden til dataene forsvinder
                  </li>
                  <li>
                    <strong>Manglende indsigt:</strong> Projektledere ved ikke, hvor mange timer der reelt er tilbage på budgettet
                  </li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Sådan løser Optiro det
              </Title>
              <Text className={classes.text}>
                Med Optiro får du et visuelt overblik over alle ressourcer og projekter. Du kan se hvem der er booket, hvor meget de har tilbage, og hvilke projekter der kræver ekstra opmærksomhed.
              </Text>
              <Text className={classes.text} component="div" mt="md">
                <ul>
                  <li>
                    <strong>Ressourceoverblik:</strong> Se alle medarbejderes kapacitet og bookinger på ét sted
                  </li>
                  <li>
                    <strong>Tidsregistrering integreret:</strong> Når folk registrerer timer, opdateres budgettet automatisk
                  </li>
                  <li>
                    <strong>Planlægning i realtid:</strong> Træk og slip medarbejdere mellem projekter uden Excel
                  </li>
                  <li>
                    <strong>Budgetoverblik:</strong> Se om projekter holder sig inden for budgettet
                  </li>
                  <li>
                    <strong>Notifikationer:</strong> Få besked når projekter er ved at løbe tør for timer
                  </li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Hvem er det relevant for?
              </Title>
              <Text className={classes.text}>
                Optiro er bygget til små og mellemstore virksomheder der lever af timer og projekter. Det kan være konsulentvirksomheder, IT-teams, arkitekter, designere, rådgivere eller håndværkere.
              </Text>
              <Text className={classes.text} mt="md">
                Hvis I er mellem 3 og 50 medarbejdere, og I har brug for bedre styr på hvem der arbejder med hvad, er Optiro det rigtige værktøj. Særligt hvis I i dag bruger Excel, Google Sheets eller bare holder styr på det i hovedet.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Hvorfor ikke bare Excel?
              </Title>
              <Text className={classes.text}>
                Excel er et fantastisk værktøj til mange ting, men ressourceplanlægning kræver noget mere dynamisk. Med Optiro får du:
              </Text>
              <Text className={classes.text} component="div" mt="md">
                <ul>
                  <li>Automatisk opdatering når folk registrerer timer</li>
                  <li>Visuel planlægning med gantt diagram til projektstyring</li>
                  <li>Notifikationer når projekter løber tør for budget</li>
                  <li>Mulighed for at give medarbejdere adgang uden at dele hele planen</li>
                  <li>Historik over tidligere projekter og ressourceforbrug</li>
                </ul>
              </Text>
            </section>

            <section className={classes.cta}>
              <Title order={2} className={classes.ctaTitle}>
                Prøv Optiro gratis
              </Title>
              <Text className={classes.text} mb="lg">
                Op til 10 brugere er gratis. Ingen kreditkort påkrævet. Kom i gang på under 5 minutter.
              </Text>
              <Button
                component="a"
                href="https://app.optiro.dk/experiences/create-new-company/sign-up"
                size="lg"
                className={classes.ctaButton}
              >
                Kom i gang nu
              </Button>
              <Text size="sm" c="dimmed" mt="sm">
                Se også: <a href="/projektstyring-smaa-teams" className={classes.link}>projektstyring for små teams</a> og <a href="/gantt-diagram" className={classes.link}>gantt diagram til projektstyring</a>
              </Text>
            </section>
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
