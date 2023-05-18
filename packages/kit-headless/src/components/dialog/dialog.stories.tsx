import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';
import { Meta, StoryObj } from 'storybook-framework-qwik';
import * as Dialog from './public_api';

const meta: Meta = {
  component: Dialog.Root,
};

type Story = StoryObj;

export default meta;

export const Primary: Story = {
  args: {
    dialogTrigger: {
      text: 'Open Dialog',
    },
    dialogPortal: {
      text: 'Hello World',
    },
    dialogClose: {
      text: 'Close',
    },
  },
  render: (args) => (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <button>{args.dialogTrigger.text}</button>
        </Dialog.Trigger>
        <Dialog.Portal>
          {args.dialogPortal.text}
          <Dialog.Close>
            <button>{args.dialogClose.text}</button>
          </Dialog.Close>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  ),
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    userEvent.click(canvas.getByText(args.dialogTrigger.text));
    expect(canvas.getByText(args.dialogPortal.text)).toBeTruthy();
    userEvent.click(canvas.getByText(args.dialogClose.text));
  },
};
