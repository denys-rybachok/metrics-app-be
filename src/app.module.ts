import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LanguageChartModule } from './LanguageChart/LanguageChart.module';
import { MetricModule } from './Metric/Metric.module';

@Module({
  imports: [MetricModule, LanguageChartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
