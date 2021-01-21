export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

import '../styles/index.css'
import './app-grid.css'
import html from './app-grid.html'
export default {
  title: 'app-grid',
  component: html,
}
export const base = () => html
