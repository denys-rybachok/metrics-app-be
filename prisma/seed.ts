import { PrismaClient, MetricEnum } from '@prisma/client';

const prisma = new PrismaClient();

function generateDates(count: number) {
  const dates: Date[] = [];
  const now = new Date();

  for (let i = count; i > 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i * 2);
    dates.push(date);
  }

  return dates;
}

function generateWaveTrend(count: number, base: number) {
  const values: number[] = [];

  const amplitude = base * 0.4;
  const noiseLevel = base * 0.1;

  for (let i = 0; i < count; i++) {
    const wave = Math.sin(i / 2) * amplitude;
    const noise = (Math.random() - 0.5) * noiseLevel;

    const value = Math.max(1, Math.floor(base + wave + noise));
    values.push(value);
  }

  return values;
}

async function main() {
  const metrics = Object.values(MetricEnum);
  const historyCount = 20;

  await prisma.metric.deleteMany();

  for (const key of metrics) {
    const baseValue = Math.floor(Math.random() * 100) + 30;
    const dates = generateDates(historyCount);
    const values = generateWaveTrend(historyCount, baseValue);

    for (let i = 0; i < historyCount; i++) {
      await prisma.metric.create({
        data: {
          key,
          value: values[i],
          createdAt: dates[i],
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
