import { Container, Title, Text, Stack } from '@mantine/core';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import classes from './terms-and-conditions.module.css';

export const metadata = {
  title: 'Vilkår og betingelser - Optiro',
  description: 'Læs Optiros vilkår og betingelser for brug af vores ERP-system til projektstyring og ressourceplanlægning.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Container size="md" py={80}>
          <Title order={1} className={classes.pageTitle}>
            Vilkår og betingelser for brug af Optiro
          </Title>

          <Text className={classes.updateDate}>
            Dato for seneste opdatering: 7 April 2025
          </Text>

          <Text className={classes.intro} mt="md">
            Velkommen til Optiro! Ved at oprette en konto og bruge vores tjeneste accepterer
            du nedenstående vilkår og betingelser.
          </Text>

          <Stack gap="xl" mt="xl">
            <section>
              <Title order={2} className={classes.sectionTitle}>
                1. Accept af vilkår
              </Title>
              <Text className={classes.text}>
                Ved at oprette en konto eller benytte Optiro accepterer du at være bundet af
                disse vilkår og vores Privatlivspolitik. Hvis du ikke accepterer vilkårene, må du
                ikke bruge tjenesten.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                2. Tjenesten
              </Title>
              <Text className={classes.text}>
                Optiro er et online værktøj til projekt- og ressourceplanlægning. Du er
                ansvarlig for al aktivitet på din konto og for at sikre, at din brug overholder gældende
                lovgivning.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                3. Brugeransvar
              </Title>
              <Text className={classes.text}>
                Du forpligter dig til at:
              </Text>
              <Text className={classes.text} component="div">
                <ul>
                  <li>Give korrekte oplysninger ved oprettelse af konto</li>
                  <li>Holde dine loginoplysninger sikre</li>
                  <li>Ikke misbruge eller forsøge at skade platformens funktionalitet, sikkerhed eller tilgængelighed</li>
                </ul>
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                4. Betaling og abonnement
              </Title>
              <Text className={classes.text}>
                Optiro er gratis for op til 10 brugere. Herefter kræver videre brug et betalt
                abonnement. Alle priser er angivet ekskl. moms og faktureres månedligt eller
                årligt efter valgt plan.
              </Text>
              <Text className={classes.text} mt="sm">
                Vi forbeholder os retten til at ændre priser og vilkår med rimeligt varsel.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                5. Opsigelse og sletning af konto
              </Title>
              <Text className={classes.text}>
                Du kan til enhver tid opsige din konto. Vi forbeholder os retten til at
                suspendere eller slette konti, der overtræder disse vilkår eller bruges til ulovlige
                formål.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                6. Ansvarsfraskrivelse
              </Title>
              <Text className={classes.text}>
                Vi tilstræber høj oppetid og sikkerhed, men vi kan ikke garantere uafbrudt
                adgang til tjenesten. Optiro kan ikke holdes ansvarlig for datatab, afbrydelser, fejl
                eller indirekte tab.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                7. Ændringer i vilkår
              </Title>
              <Text className={classes.text}>
                Vi kan opdatere disse vilkår fra tid til anden. Du vil blive informeret via
                e-mail eller i appen. Din fortsatte brug af Optiro efter ændringerne udgør accept af
                de opdaterede vilkår.
              </Text>
            </section>

            <section>
              <Title order={2} className={classes.sectionTitle}>
                8. Gældende lovgivning
              </Title>
              <Text className={classes.text}>
                Disse vilkår er underlagt dansk ret. Eventuelle tvister afgøres ved de danske
                domstole med værneting i København.
              </Text>
            </section>
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
