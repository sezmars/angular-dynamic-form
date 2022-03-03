import {Injectable, TemplateRef} from '@angular/core';

@Injectable()
export class TemplateRegistry {
  templates: { [name: string]: TemplateRef<any> } = Object.create(null);
}
