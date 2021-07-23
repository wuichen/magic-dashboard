-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Story" ALTER COLUMN "description" DROP NOT NULL;
