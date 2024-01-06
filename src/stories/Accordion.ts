import '../styles/scss/style.scss';

export interface AccordionProps {
  header: string;
  content: string;
}

export const createAccordion = ({ header, content }: AccordionProps) => {
  const accordion = Object.assign(document.createElement('details'), {
    classList: ['accordion'].join(' '),
  });

  const accordionHeader = Object.assign(document.createElement('summary'), {
    classList: ['accordion-header'].join(' '),
    innerText: header,
  });

  const accordionContent = Object.assign(document.createElement('div'), {
    classList: ['accordion-content'].join(' '),
    innerText: content,
  });

  accordion.append(accordionHeader);
  accordion.append(accordionContent);

  return accordion;
};
