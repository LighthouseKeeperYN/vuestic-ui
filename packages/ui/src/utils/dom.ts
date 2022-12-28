import { isServer } from './ssr'

/**
 * Create and append to head provided styles or update if exists.
 *
 * @param id - used to identify block for removal etc
 * @param getStyles - closure to get styles
 */
export const addOrUpdateStyleElement = (id: string, getStyles: () => string): void => {
  if (isServer()) {
    return
  }

  let stylesElement = document.getElementById(id)

  if (stylesElement) {
    stylesElement.innerHTML = getStyles()
  } else {
    stylesElement = document.createElement('style')
    stylesElement.setAttribute('type', 'text/css')
    stylesElement.setAttribute('id', id)
    stylesElement.innerHTML = getStyles()
  }

  const styleAnchor = document.head.querySelector('[name="vuestic-style"]')
  styleAnchor?.after(stylesElement)
}
