/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `material_content` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `syllabus_content` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `material_content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `syllabus_content` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `material_content` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `syllabus` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `syllabus_content` ADD COLUMN `slug` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `material_content_slug_key` ON `material_content`(`slug`);

-- CreateIndex
CREATE UNIQUE INDEX `syllabus_content_slug_key` ON `syllabus_content`(`slug`);
