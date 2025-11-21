import { Injectable } from '@nestjs/common';
import { LanguageStatDto } from './LanguageChart.dto';

@Injectable()
export class LanguageChartService {
  private languages = [
    { name: 'English' },
    { name: 'Ukrainian' },
    { name: 'Italian' },
    { name: 'Chinese' },
  ];

  getRandomStats(): LanguageStatDto[] {
    const percentages = this.randomPercentages(this.languages.length);

    return this.languages.map((language, index) => ({
      language: language.name,
      percentage: percentages[index],
    }));
  }

  private randomPercentages(n: number): number[] {
    let remaining = 100;
    const percentages: number[] = [];
    for (let i = 0; i < n - 1; i++) {
      const max = remaining - (n - i - 1);
      const value = Math.floor(Math.random() * max) + 1;
      percentages.push(value);
      remaining -= value;
    }
    percentages.push(remaining);
    return percentages.sort(() => Math.random() - 0.5);
  }
}
