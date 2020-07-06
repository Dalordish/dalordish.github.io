import Typography from "typography"
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.overrideThemeStyles = ({ rhythm}, options) => ({
  'a': {
    color: 'unset',
    'text-shadow': 'none'
  },
  'h1,h2,h3,h4,h5':{ 
    'margin-top': '0rem',
    'padding-top': '0rem'
  }

})
const typography = new Typography(fairyGatesTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
