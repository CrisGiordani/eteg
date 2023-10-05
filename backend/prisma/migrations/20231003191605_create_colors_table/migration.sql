/*
  Warnings:

  - You are about to drop the column `color` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `color_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "color",
DROP COLUMN "name",
ADD COLUMN     "color_id" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "colors" (
    "id" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "colors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "colors_color_key" ON "colors"("color");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "colors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
