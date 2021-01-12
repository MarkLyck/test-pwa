import React from 'react'
import { Meta } from '@storybook/react'
import { Card, Typography } from 'antd'

import ThemeSwitch from './index'

const { Title } = Typography

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

const Template = (args: {}) => (
  <Card>
    <Title level={5}>Theme Switcher</Title>
    <ThemeSwitch {...args} />
  </Card>
)

export const theme_switch = Template.bind({})