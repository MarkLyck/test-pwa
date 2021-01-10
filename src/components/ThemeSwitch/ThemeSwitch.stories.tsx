import React from 'react'
import { Meta } from '@storybook/react'

import ThemeSwitch from './index'

export default {
  title: 'Example/ThemeSwitch',
  component: ThemeSwitch,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'centered'
  }
} as Meta

const Template = (args: {}) => <ThemeSwitch {...args} />

export const theme_switch = Template.bind({})