import { Container, Title, Text, Stack, Button } from '@mantine/core';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './projektstyring-smaa-teams.module.css';

export const metadata = {
  title: 'Projektstyring for små teams | Optiro',
  description: 'Projektstyring for små danske teams uden unødvendig kompleksitet. Styr projekter, timer og budgetter på ét sted. Gratis for op til 10 brugere.',
};

export default function ProjektstyringSmaateamsPage() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Container size="md" py={80}>
          <Title order={1} className={classes.pageTitle}>
            Projektstyring for små teams
          </Title>

          <Stack gap="xl" mt="xl">
            <section>
              <Text className={classes.text}>
                Små teams har brug for projektstyring, der virker uden at tage overhånd. Mange værktøjer er bygget til store virksomheder med projektledelsesafdelinger, dedikeret support og flere lag af godkendelser. Men for et team på 5-20 mennesker er det overkill.
              </Text>
              <Text className={classes.text} mt="md">
                Optiro er bygget til små teams, der arbejder med projekter og timer. Det er enkelt nok til at komme i gang på minutter, men kraftfuldt nok til at give dig det overblik, du har brug for. Ingen masterklasser, ingen onboarding-forløb – bare projektstyring der fungerer.
              </Text>
              <Text className={classes.text} mt="md">
                Hvis I i dag holder styr på projekter i Excel, Trello eller Google Sheets, ved I præcis, hvorfor det er svært: data bliver ikke opdateret, budgetter er ude af sync, og timeoverblikket mangler.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Typiske udfordringer
              </Title>
              <Text className={classes.text} component="div">
                <ul>
                  <li>
                    <strong>Manglende budgetoverblik:</strong> Det er svært at se om et projekt er rentabelt, når timer og udgifter er spredt over flere systemer
                  </li>
                  <li>
                    <strong>Forældet planlægning:</strong> Projekter udvikler sig, men Excel-arket bliver ikke opdateret i takt
                  </li>
                  <li>
                    <strong>Ingen tidsoverblik:</strong> Projektlederen ved ikke præcist, hvor mange timer der er tilbage på budgettet
                  </li>
                  <li>
                    <strong>Komplekse værktøjer:</strong> Store projektstyringssystemer kræver for meget opsætning og vedligeholdelse
                  </li>
                  <li>
                    <strong>Spredt kommunikation:</strong> Opgaver i Trello, timer i Excel, budgetter i Google Sheets
                  </li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Sådan løser Optiro det
              </Title>
              <Text className={classes.text}>
                Optiro samler projektstyring, tidsregistrering og budgetoverblik på ét sted. Du får et klart billede af hver enkelt projekts status, uden at skulle slå op flere steder.
              </Text>
              <Text className={classes.text} component="div" mt="md">
                <ul>
                  <li>
                    <strong>Projektoverblik:</strong> Se alle aktive projekter, deres status og økonomi på ét dashboard
                  </li>
                  <li>
                    <strong>Integreret tidsregistrering:</strong> Når medarbejdere registrerer timer, opdateres budgettet automatisk
                  </li>
                  <li>
                    <strong>Gantt diagram:</strong> Visuel planlægning af projekter med tidslinjer og afhængigheder
                  </li>
                  <li>
                    <strong>Simpel ressourceplanlægning:</strong> Se hvem der arbejder på hvad, og hvem der har kapacitet
                  </li>
                  <li>
                    <strong>Realtidsbudgetter:</strong> Hold øje med om projekter tjener penge eller taber
                  </li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Hvem er det relevant for?
              </Title>
              <Text className={classes.text}>
                Optiro er skabt til projektbaserede virksomheder med mellem 3 og 50 medarbejdere. Det kan være:
              </Text>
              <Text className={classes.text} component="div" mt="md">
                <ul>
                  <li>Konsulentvirksomheder</li>
                  <li>IT- og softwareudviklingsteams</li>
                  <li>Arkitektfirmaer</li>
                  <li>Designbureauer</li>
                  <li>Ingeniør- og rådgivningsfirmaer</li>
                  <li>Kreative bureauer</li>
                </ul>
              </Text>
              <Text className={classes.text} mt="md">
                Fælles for dem alle er, at de lever af timer og projekter, og at de har brug for et enkelt, dansk værktøj til at holde styr på det hele.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                Projektstyring uden Excel
              </Title>
              <Text className={classes.text}>
                Excel er fremragende til meget, men projektstyring er ikke en af dets styrker. Med Optiro får du:
              </Text>
              <Text className={classes.text} component="div" mt="md">
                <ul>
                  <li>Automatisk synkronisering mellem timer, budgetter og ressourcer</li>
                  <li>Visuel planlægning med gantt diagram</li>
                  <li>Realtidsopdateringer, så alle ser den samme data</li>
                  <li>Adgangsstyring, så medarbejdere kun ser deres egne projekter</li>
                  <li>Historik og rapporter over tidligere projekter</li>
                </ul>
              </Text>
            </section>

            <section className={classes.cta}>
              <Title order={2} className={classes.ctaTitle}>
                Gratis for op til 10 brugere
              </Title>
              <Text className={classes.text} mb="lg">
                Kom i gang på under 5 minutter. Ingen kreditkort påkrævet.
              </Text>
              <Button
                component="a"
                href="https://app.optiro.dk/experiences/create-new-company/sign-up"
                size="lg"
                className={classes.ctaButton}
              >
                Prøv Optiro nu
              </Button>
              <Text size="sm" c="dimmed" mt="sm">
                Se også: <a href="/ressourceplanlaegning" className={classes.link}>ressourceplanlægning for små teams</a> og <a href="/gantt-diagram" className={classes.link}>gantt diagram til projektstyring</a>
              </Text>
            </section>
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
