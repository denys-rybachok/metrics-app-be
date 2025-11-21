import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MetricEnum } from '@prisma/client';

@Injectable()
export class MetricService {
  constructor(private prisma: PrismaService) {}

  async getMetricsByPeriod(startDate: Date, endDate: Date) {
    const metrics = await this.prisma.metric.findMany({
      where: { createdAt: { gte: startDate, lt: endDate } },
    });

    const latestMetrics = await this.prisma.metric.findMany({
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    const result: Record<MetricEnum, { value: number; difference: number }> = {
      [MetricEnum.Subscribers]: { value: 0, difference: 0 },
      [MetricEnum.PostViews]: { value: 0, difference: 0 },
      [MetricEnum.ReactionsToPosts]: { value: 0, difference: 0 },
      [MetricEnum.NotificationsEnabled]: { value: 0, difference: 0 },
      [MetricEnum.ForwardingPosts]: { value: 0, difference: 0 },
    };

    for (const m of metrics) {
      result[m.key].value = m.value;
    }
    for (const m of latestMetrics) {
      result[m.key].difference = result[m.key].value - m.value;
    }

    return result;
  }

  async updateMetric(key: MetricEnum, value: number) {
    const metric = await this.prisma.metric.create({
      data: { key, value },
    });

    return metric;
  }
}
