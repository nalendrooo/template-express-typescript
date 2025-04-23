/*
  Warnings:

  - You are about to drop the `sv_users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sv_users_type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `course` DROP FOREIGN KEY `course_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `sv_users` DROP FOREIGN KEY `sv_users_user_type_fkey`;

-- DropTable
DROP TABLE `sv_users`;

-- DropTable
DROP TABLE `sv_users_type`;

-- CreateTable
CREATE TABLE `users` (
    `gid` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `school` VARCHAR(191) NULL,
    `user_type` INTEGER NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`gid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
