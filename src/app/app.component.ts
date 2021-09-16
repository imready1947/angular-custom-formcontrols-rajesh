import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
      <h1>NgModel</h1>

      <form #form="ngForm">
        <json-input [(ngModel)]="result" name="result"></json-input>
      </form>
      
      <p>form is valid: {{ form.valid ? 'true' : 'false' }}</p>
      
      <p>Value:</p>
      <pre>{{ result | json }}</pre>
      
      <h1>Reactive Form</h1>
      
      <form [formGroup]="reactiveForm">
      <input type="text" formControlName="name">
        <json-input formControlName="result"></json-input>
      </form>
      
      <p>form is valid: {{ reactiveForm.valid ? 'true' : 'false' }}</p>
      
      <p>Value:</p>
      <pre>{{ reactiveForm.value | json }}</pre>
    `,
})
export class AppComponent {
  public result = {};
  public reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.result = { hello: 'world' };

    this.reactiveForm = this.fb.group({
      name: [{ ksdafj: 'ksjdfk' }],
      result: [{ test123: 'test456' }],
    });
  }
}
