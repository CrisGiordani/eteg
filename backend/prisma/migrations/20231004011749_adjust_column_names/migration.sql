/*
  Warnings:

  - You are about to drop the column `color_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `users` table. All the data in the column will be lost.
  - Added the required column `color` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_color_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "color_id",
DROP COLUMN "nome",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;
