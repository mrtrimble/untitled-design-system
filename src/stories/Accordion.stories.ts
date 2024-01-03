import type { StoryObj, Meta } from '@storybook/html';
import type { AccordionProps } from './Accordion';
import { createAccordion } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  render: (args) => {
    return createAccordion(args);
  },
  argTypes: {
    header: {
      control: 'text',
    },
    content: {
      control: 'text',
    },
  },
} satisfies Meta<AccordionProps>;

export default meta;
type Story = StoryObj<AccordionProps>;

export const Accordion: Story = {
  args: {
    header: 'Accordion Header',
    content: 'This is the accordion content!'
  }
}