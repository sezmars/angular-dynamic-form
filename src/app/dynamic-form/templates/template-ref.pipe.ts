import {Pipe, PipeTransform, TemplateRef} from '@angular/core';

import {TemplateRegistry} from './template-registry';

@Pipe({
  name: 'templateRef'
})
export class TemplateRefPipe implements PipeTransform {

  constructor(private registry: TemplateRegistry) {
  }

  transform(name: string): TemplateRef<any> | undefined {
    return this.registry.templates[name];
  }
}
