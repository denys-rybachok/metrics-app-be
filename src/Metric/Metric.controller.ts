import { Controller, Get, Put, Query, Param, Body } from '@nestjs/common';
import { MetricService } from './Metric.service';
import { MetricEnum } from '@prisma/client';
import { UpdateMetricDto } from './update-metric.dto';

@Controller('metrics')
export class MetricController {
  constructor(private readonly metricService: MetricService) {}

  @Get('general')
  async getGeneralMetrics(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return await this.metricService.getMetricsByPeriod(start, end);
  }

  @Put(':key')
  async updateMetric(
    @Param('key') key: MetricEnum,
    @Body() dto: UpdateMetricDto,
  ) {
    return this.metricService.updateMetric(key, dto.value);
  }
}
