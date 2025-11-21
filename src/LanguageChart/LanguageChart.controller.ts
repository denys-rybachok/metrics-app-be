import { Controller, Get } from '@nestjs/common';
import { LanguageChartService } from './LanguageChart.service';
import { LanguageStatDto } from './LanguageChart.dto';

@Controller('language-chart')
export class LanguageChartController {
  constructor(private readonly languageChartService: LanguageChartService) {}

  @Get('')
  getStats(): LanguageStatDto[] {
    return this.languageChartService.getRandomStats();
  }
}
