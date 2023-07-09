/*
  Warnings:

  - Added the required column `countryCode` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "Recommended" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "countryCode" TEXT NOT NULL;
