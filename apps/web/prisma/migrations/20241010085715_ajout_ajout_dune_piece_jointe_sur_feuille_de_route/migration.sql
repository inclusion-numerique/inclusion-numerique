/*
  Warnings:

  - A unique constraint covering the columns `[piece_jointe]` on the table `feuille_de_route` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "feuille_de_route" ADD COLUMN     "piece_jointe" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "feuille_de_route_piece_jointe_key" ON "feuille_de_route"("piece_jointe");

-- AddForeignKey
ALTER TABLE "feuille_de_route" ADD CONSTRAINT "feuille_de_route_piece_jointe_fkey" FOREIGN KEY ("piece_jointe") REFERENCES "uploads"("key") ON DELETE SET NULL ON UPDATE CASCADE;
