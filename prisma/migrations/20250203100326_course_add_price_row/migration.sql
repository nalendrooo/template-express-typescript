/*
  Warnings:

  - Added the required column `price` to the `course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `course` ADD COLUMN `price` INTEGER NOT NULL,
    MODIFY `user_id` INTEGER NULL,
    MODIFY `is_active` BOOLEAN NOT NULL DEFAULT false;
