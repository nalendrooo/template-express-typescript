/*
  Warnings:

  - The values [Exam,Material] on the enum `syllabus_content_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `syllabus` MODIFY `is_active` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `syllabus_content` MODIFY `type` ENUM('EXAM', 'MATERIAL') NOT NULL;
