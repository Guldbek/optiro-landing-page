'use client';

import { Container, Title, Text, Accordion } from '@mantine/core';
import classes from './FAQ.module.css';

const faqData = [
  {
    question: 'Hvem er Optiro lavet til?',
    answer: 'Optiro er bygget til projektbaserede virksomheder der lever af timer – konsulenter, IT-virksomheder, arkitekter, designere, rådgivere, ingeniører, håndværkere og andre fagfolk. Hvis du sælger tid og ekspertise, er Optiro til dig.',
  },
  {
    question: 'Hvad koster det?',
    answer: 'Lige nu kan du prøve Optiro helt gratis – ingen kreditkort, ingen binding. Vi er i beta, så du får fuld adgang til alle funktioner uden at betale noget.',
  },
  {
    question: 'Kan mit team bruge det på farten?',
    answer: 'Ja. Optiro er cloud-baseret og virker på telefon, tablet og computer. Dit team kan registrere timer, tjekke projektstatus og se dagens opgaver – uanset hvor de er.',
  },
  {
    question: 'Hvordan hjælper Optiro med at øge indtjeningen?',
    answer: 'Optiro giver dig transparens på projektniveau. Se om projekter giver overskud, hvor timer bliver brugt, og om budgetter overholdes. Identificér problemer tidligt og optimer løbende.',
  },
  {
    question: 'Skal jeg være teknisk for at bruge det?',
    answer: 'Nej. Optiro er bygget til at være intuitivt. Hvis du kan bruge en smartphone eller en browser, kan du bruge Optiro. Kom i gang på minutter, ikke dage.',
  },
  {
    question: 'Kan Optiro integrere med andre systemer?',
    answer: 'Vi arbejder på integrationer med økonomisystemer og andre værktøjer. Kontakt os for at høre om dit system er understøttet eller på udviklingsplanen.',
  },
];

export function FAQ() {
  return (
    <section className={classes.section}>
      <Container size="md">
        <Title order={2} className={classes.title} ta="center">
          Ofte stillede spørgsmål
        </Title>
        <Text size="lg" c="dimmed" ta="center" mt="md" mb="xl">
          Alt du skal vide om Optiro
        </Text>
        
        <Accordion variant="separated" radius="md" classNames={{ item: classes.accordionItem }}>
          {faqData.map((item, index) => (
            <Accordion.Item key={index} value={`item-${index}`}>
              <Accordion.Control>
                <Text fw={600} size="md">{item.question}</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm" c="dimmed">{item.answer}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
