import { configure } from '@storybook/react'

const loadStories = () => {
  require('../stories/index.js')  // 你可以引入你所需的story模块
}

configure(loadStories, module)