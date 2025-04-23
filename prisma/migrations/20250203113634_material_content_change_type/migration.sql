/*
  Warnings:

  - The values [LearningVideo,LearningArticle,PreTest,PostTest] on the enum `material_content_type_title` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `material_content_type` MODIFY `title` ENUM('VIDEO', 'READING', 'PRE_TEST', 'POST_TEST') NOT NULL;
