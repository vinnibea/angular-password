import { Component, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  checkPass,
  weakPasswordRegx as weak,
  mediumPasswordRegx as medium,
  strongRegExp as strong,
} from '../../__helpers';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  title = 'app-input';

  @Output() password = new FormControl('', [
    Validators.minLength(8),
    checkPass(strong, 'strong'),
    checkPass(weak, 'weak'),
    checkPass(medium, 'medium'),
  ]);
}
