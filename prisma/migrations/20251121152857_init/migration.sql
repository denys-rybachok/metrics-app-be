-- CreateEnum
CREATE TYPE "MetricEnum" AS ENUM ('Subscribers', 'PostViews', 'ReactionsToPosts', 'NotificationsEnabled', 'ForwardingPosts');

-- CreateTable
CREATE TABLE "Metric" (
    "id" SERIAL NOT NULL,
    "key" "MetricEnum" NOT NULL,
    "value" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Metric_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Metric_key_key" ON "Metric"("key");
