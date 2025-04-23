/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `sub_category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `topic` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `sub_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `topic` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `sub_category` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `topic` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `category_slug_key` ON `category`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `sub_category_slug_key` ON `sub_category`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `topic_slug_key` ON `topic`(`slug`);
