import type { StoryObj, Meta } from '@storybook/html';
import type { ButtonProps } from './Button';
import { createButton } from './Button';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => {
    return createButton(args);
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'plain'],
      description:
        'There are three different types of buttons: primary, secondary, and plain.',
    },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    type: 'secondary',
  },
};

export const Plain: Story = {
  args: {
    label: 'Plain Button',
    type: 'plain',
  },
};
