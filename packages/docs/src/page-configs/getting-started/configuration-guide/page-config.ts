import { ApiDocsBlock } from '@/types/configTypes'
import { PageGenerationHelper } from '@/helpers/DocsHelper'
import {
  colorsConfig,
  iconsInstallObject,
  iconsSetup,
  iconsConfig,
  componentsConfig,
  colorsClasses,
} from './code-examples'

const block = new PageGenerationHelper(__dirname)

const config: ApiDocsBlock[] = [
  block.title('configurationGuide.title'),
  block.paragraph('configurationGuide.description'),
  block.subtitle('configurationGuide.colors.title'),
  block.paragraph('configurationGuide.colors.description'),
  block.code(colorsConfig),
  block.link('configurationGuide.readMore', '/services/colors-config'),

  block.subtitle('configurationGuide.icons.title'),
  block.paragraph('configurationGuide.icons.description[0]'),
  block.code(iconsInstallObject, 'bash'),
  block.paragraph('configurationGuide.icons.description[1]'),
  block.code(iconsSetup),

  block.headline('configurationGuide.icons.subtitle'),
  block.paragraph('configurationGuide.icons.subDescription'),
  block.code(iconsConfig),
  block.link('configurationGuide.readMore', '/services/icons-config'),

  block.subtitle('configurationGuide.colorsClasses.title'),
  block.paragraph('configurationGuide.colorsClasses.description'),

  block.headline('configurationGuide.colorsClasses.subtitle'),
  block.paragraph('configurationGuide.colorsClasses.subDescription'),
  block.code(colorsClasses),
  block.link('configurationGuide.readMore', '/services/colors-classes'),

  block.subtitle('configurationGuide.components.title'),
  block.paragraph('configurationGuide.components.intro'),
  block.paragraph('configurationGuide.components.description'),
  block.example('PageConfigButtonDefault', { hideCode: true }),
  block.paragraph('configurationGuide.components.action'),
  block.code(componentsConfig),
  block.paragraph('configurationGuide.components.result'),
  block.example('PageConfigButton', { hideCode: true }),
  block.paragraph('configurationGuide.components.example'),
  block.paragraph('configurationGuide.components.more'),
  block.link('configurationGuide.readMore', '/services/components-config'),
]

export default config
