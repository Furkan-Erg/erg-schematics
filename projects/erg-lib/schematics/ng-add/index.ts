import {Rule, Tree, SchematicContext, SchematicsException} from '@angular-devkit/schematics'
import {NodePackageInstallTask,RunSchematicTask} from '@angular-devkit/schematics/tasks'
import {applyToUpdateRecorder} from '@schematics/angular/utility/change';
import {addImportToModule} from '@schematics/angular/utility/ast-utils';
import * as ts from "typescript"

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info('Adding library Module to the app...');
    const modulePath = '/src/app/app.module.ts';
    if (!tree.exists(modulePath)) {
      throw new SchematicsException(`The file ${modulePath} doesn't exist...`);
    }
    const recorder = tree.beginUpdate(modulePath);

    const text = tree.read(modulePath);

    if (text === null) {
      throw new SchematicsException(`The file ${modulePath} doesn't exist...`)
    }


    const source = ts.createSourceFile(
      modulePath,
      text.toString(),
      ts.ScriptTarget.Latest,
      true
    );

    context.logger.info('Adding imports to Appmodule.ts')
    applyToUpdateRecorder(recorder,
      addImportToModule(source, modulePath, 'ErgLibModule', 'erg-lib')
    );

    applyToUpdateRecorder(recorder,
      addImportToModule(source, modulePath, 'ReactiveFormsModule', '@angular/forms')
    );
    applyToUpdateRecorder(recorder,
      addImportToModule(source, modulePath, 'NgbModule', '@ng-bootstrap/ng-bootstrap')
    );


    tree.commitUpdate(recorder);


    context.logger.info('Installing dependencies');
    context.logger.info('{ng-bootstrap,poper.js,bootstrap} will be added to your package.json');
    const installTaskId = context.addTask(new NodePackageInstallTask());
    context.addTask(new NodePackageInstallTask({packageName:"@popperjs/core@^2.11.5"}));
    context.addTask(new NodePackageInstallTask({packageName:"bootstrap@5.1.3"}));
    context.addTask(new NodePackageInstallTask({packageName:"@ng-bootstrap/ng-bootstrap@^12.1.2"}));
    context.addTask(new NodePackageInstallTask({packageName:"@angular/cdk@^13.3.9"}));
    context.logger.info('Bootstrap.css will be added to your angular.json file')
    context.addTask(new RunSchematicTask('setup-css',{}),[installTaskId]);
    return tree;
  }

}
