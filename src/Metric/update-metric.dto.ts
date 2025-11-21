import { IsNumber, Min } from 'class-validator';

export class UpdateMetricDto {
  @IsNumber({}, { message: 'Value must be a number' })
  @Min(0, { message: 'Value cannot be negative' })
  value: number;
}
