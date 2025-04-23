/*
  Warnings:

  - You are about to drop the column `material_id` on the `material_content` table. All the data in the column will be lost.
  - You are about to drop the `materials` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `syllabus_content_id` to the `material_content` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `material_content` DROP FOREIGN KEY `material_content_material_id_fkey`;

-- DropForeignKey
ALTER TABLE `materials` DROP FOREIGN KEY `materials_syllabus_content_id_fkey`;

-- AlterTable
ALTER TABLE `material_content` DROP COLUMN `material_id`,
    ADD COLUMN `syllabus_content_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `materials`;

-- CreateIndex
CREATE INDEX `idx_slug` ON `syllabus_content`(`slug`);

-- AddForeignKey
ALTER TABLE `material_content` ADD CONSTRAINT `material_content_syllabus_content_id_fkey` FOREIGN KEY (`syllabus_content_id`) REFERENCES `syllabus_content`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
