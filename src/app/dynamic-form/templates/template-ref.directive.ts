import {Directive, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';

import {TemplateRegistry} from './template-registry';

@Directive({
  selector: '[appTemplateRef]'
})
export class TemplateRefDirective implements OnInit, OnDestroy {
  @Input('appTemplateRef')
  templateRef: string;
  private name: string;

  constructor(private registry: TemplateRegistry, private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
    this.name = this.templateRef;
    this.registry.templates[this.name] = this.template;
  }

  ngOnDestroy(): void {
    delete this.registry.templates[this.name];
  }
}
