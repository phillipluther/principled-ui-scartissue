import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import SkipTo, { SkipToProps } from './skip-to';

export default {
  title: 'Components/Skip-To',
  component: SkipTo,
} as Meta;

const Template: Story<SkipToProps> = (args) => <SkipTo {...args} />;

export const DefaultSkipTo = Template.bind({});
DefaultSkipTo.args = { id: 'skipNav' };

export const CustomLabelSkipTo = Template.bind({});
CustomLabelSkipTo.args = {
  id: 'skipNav',
  label: 'Skip Navigation',
};
