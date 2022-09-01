import {
  apply,
  applyTemplates,
  chain,
  externalSchematic,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  url
} from "@angular-devkit/schematics";
import {normalize, strings} from "@angular-devkit/core"
import {FooterSchema} from "./footer";

export function footerGenerator(options: FooterSchema): Rule {
  return () => {
    const templateSource = apply(
      url('./files'), [
        applyTemplates({
          classify: strings.classify,
          dasherize: strings.dasherize,
          name: options.name,
        }),
        move(normalize(`/${options.path}/${strings.dasherize(options.name)}`))
      ]
    )
    return chain([
      externalSchematic('@schematics/angular', 'component', options),
      mergeWith(templateSource, MergeStrategy.Overwrite)
    ])
  }
}
