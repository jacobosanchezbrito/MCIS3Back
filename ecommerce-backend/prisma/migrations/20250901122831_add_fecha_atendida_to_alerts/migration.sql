/*
  Warnings:

  - You are about to drop the column `fecha` on the `Alerta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Alerta" DROP COLUMN "fecha",
ADD COLUMN     "fechaAtendida" TIMESTAMP(3),
ADD COLUMN     "fechaGeneracion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
