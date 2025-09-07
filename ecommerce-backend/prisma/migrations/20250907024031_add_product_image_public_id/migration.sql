-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "imagenPublicId" TEXT,
ALTER COLUMN "imagenUrl" DROP NOT NULL;
