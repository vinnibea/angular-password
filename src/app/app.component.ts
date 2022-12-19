import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title: string = '';

  handleTitleChange(value: string) {
    this.title = value;
  }

  isPasswordShort(): boolean {
    return this.title.length < 8 && this.title.length > 0;
  }

  isPasswordWeak(): boolean {
    let reg = /^\d+$/gi;
    let regLetters = /^[a-zA-Z]+$/gi;
    let regSymbols = /^[?*=.@#$%!^":,/;<'>+\-_]+$/gi;
    const weakPasswordRegx = [reg, regLetters, regSymbols];

    return weakPasswordRegx.some((reg) => this.title.match(reg));
  }

  isPasswordMedium(): boolean {
    const letterAndNumber = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
    const letterAndSymbol = /^(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const symbolAndNumber = /^(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return [letterAndNumber, symbolAndNumber, letterAndSymbol].some(
      (regExp) => regExp.test(this.title.toLowerCase())
    );
  }

  isPasswordStrong(): boolean {
    const strongRegExp = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return strongRegExp.test(this.title.toLowerCase());
  }


}

