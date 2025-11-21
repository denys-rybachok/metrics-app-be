import { Module } from '@nestjs/common';
import { MetricController } from './Metric.controller';
import { MetricService } from './Metric.service';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [MetricController],
  providers: [MetricService],
})
export class MetricModule {}
