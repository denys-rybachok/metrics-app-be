import { Module } from '@nestjs/common';
import { LanguageChartService } from './LanguageChart.service';
import { LanguageChartController } from './LanguageChart.controller';

@Module({
  providers: [LanguageChartService],
  controllers: [LanguageChartController],
})
export class LanguageChartModule {}
