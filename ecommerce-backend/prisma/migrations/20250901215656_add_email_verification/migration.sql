-- AlterTable
ALTER TABLE "User" ADD COLUMN     "verificado" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verificationExpires" TIMESTAMP(3),
ADD COLUMN     "verificationToken" VARCHAR(64);
