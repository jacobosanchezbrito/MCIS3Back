-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "stockMinimo" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Alerta" (
    "id" SERIAL NOT NULL,
    "mensaje" TEXT NOT NULL,
    "productoId" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atendida" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Alerta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alerta" ADD CONSTRAINT "Alerta_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
