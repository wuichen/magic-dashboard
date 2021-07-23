/*
  Warnings:

  - You are about to drop the column `collectionId` on the `Request` table. All the data in the column will be lost.
  - Added the required column `storyId` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_collectionId_fkey";

-- AlterTable
ALTER TABLE "Request" DROP COLUMN "collectionId",
ADD COLUMN     "storyId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Request" ADD FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
