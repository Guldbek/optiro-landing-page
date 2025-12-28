import { Container, Title, Text, Stack } from '@mantine/core';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './privacy-policy.module.css';

export const metadata = {
  title: 'Privatlivspolitik - Optiro',
  description: 'Læs om hvordan Optiro håndterer og beskytter dine personoplysninger i overensstemmelse med GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Container size="md" py={80}>
          <Title order={1} className={classes.pageTitle}>
            Privatlivspolitik
          </Title>

          <Stack gap="xl" mt="xl">
            <section>
              <Title order={2} className={classes.sectionTitle}>
                1. Generelt
              </Title>
              <Text className={classes.text}>
                Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter
                dine personoplysninger, når du bruger vores SaaS-løsning. Vi er forpligtet til at
                beskytte dine data i overensstemmelse med GDPR (Databeskyttelsesforordningen).
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                2. Dataansvarlig
              </Title>
              <Text className={classes.text}>
                Optiro<br />
                CVR: 45457672<br />
                Adresse: Nørregade 95E, 5592 Ejby<br />
                E-mail: guldbek26@gmail.com
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                3. Hvilke data indsamler vi?
              </Title>
              <Text className={classes.text} component="div">
                <ul>
                  <li>Kontaktoplysninger (navn, e-mail, telefonnummer)</li>
                  <li>Loginoplysninger (brugernavn, krypteret adgangskode)</li>
                  <li>Brugsdata (IP-adresse, enhedsoplysninger, browserdata)</li>
                  <li>Uploadede filer og billeder</li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                4. Hvordan indsamler vi data?
              </Title>
              <Text className={classes.text} component="div">
                <ul>
                  <li>Registrering af en konto</li>
                  <li>Brugerens aktivitet på platformen</li>
                  <li>Cookies og tracking-værktøjer (Sentry og Vercel)</li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                5. Formål med behandling af data
              </Title>
              <Text className={classes.text} component="div">
                <ul>
                  <li>Levere og forbedre vores tjenester</li>
                  <li>Sikre stabil drift og sikkerhed (via Sentry til fejlhåndtering)</li>
                  <li>Opbevare filer og billeder (via AWS S3 Bucket)</li>
                  <li>Overholde lovgivningskrav</li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                6. Deling af data
              </Title>
              <Text className={classes.text}>
                Vi deler ikke dine personoplysninger med tredjepart, undtagen:
              </Text>
              <Text className={classes.text} component="div">
                <ul>
                  <li>Sentry (fejlrapportering og overvågning)</li>
                  <li>Vercel (hosting af frontend)</li>
                  <li>AWS (lagring af filer og billeder)</li>
                </ul>
              </Text>
              <Text className={classes.text}>
                Alle disse tjenester er GDPR-kompatible, og vi har databehandleraftaler med dem.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                7. Opbevaring af data
              </Title>
              <Text className={classes.text}>
                Dine data opbevares så længe det er nødvendigt for at levere vores tjenester
                eller for at overholde lovgivning. Du kan bede om sletning af dine data ved at
                kontakte os.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                8. Dine rettigheder
              </Title>
              <Text className={classes.text} component="div">
                <ul>
                  <li>Få indsigt i de oplysninger, vi har om dig</li>
                  <li>Anmode om berigtigelse eller sletning af dine data</li>
                  <li>Trække dit samtykke tilbage</li>
                  <li>Indgive en klage til Datatilsynet</li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                9. Cookies og tracking
              </Title>
              <Text className={classes.text}>
                Vi bruger cookies til at forbedre brugeroplevelsen. Nærmere detaljer kan findes
                i vores cookiepolitik.
              </Text>
              <Title order={3} className={classes.subsectionTitle}>
                Hvilke cookies bruger vi?
              </Title>
              <Text className={classes.text} component="div">
                <ul>
                  <li>Nødvendige cookies: Bruges til login, sessionhåndtering og sikkerhed.</li>
                  <li>Analysecookies (Sentry og Vercel): Bruges til at forstå, hvordan brugere interagerer med platformen.</li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                10. Kontakt
              </Title>
              <Text className={classes.text}>
                Hvis du har spørgsmål, kan du kontakte os på: guldbek26@gmail.com
              </Text>
            </section>
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
