/*
  Warnings:

  - You are about to drop the column `user_id` on the `course` table. All the data in the column will be lost.
  - Added the required column `estimated_time` to the `material_content` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `course_user_id_fkey` ON `course`;

-- AlterTable
ALTER TABLE `course` DROP COLUMN `user_id`;

-- AlterTable
ALTER TABLE `material_content` ADD COLUMN `estimated_time` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `course_creator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `as` ENUM('OWNER', 'COLLABORATOR') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `course_logging` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `course_id` INTEGER NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `syllabus_content_id` INTEGER NOT NULL,
    `material_content_id` INTEGER NULL,
    `exam_id` INTEGER NULL,
    `is_read` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `course_creator` ADD CONSTRAINT `course_creator_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_creator` ADD CONSTRAINT `course_creator_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`gid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_logging` ADD CONSTRAINT `course_logging_course_id_fkey` FOREIGN KEY (`course_id`) REFERENCES `course`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_logging` ADD CONSTRAINT `course_logging_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`gid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_logging` ADD CONSTRAINT `course_logging_syllabus_content_id_fkey` FOREIGN KEY (`syllabus_content_id`) REFERENCES `syllabus_content`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_logging` ADD CONSTRAINT `course_logging_material_content_id_fkey` FOREIGN KEY (`material_content_id`) REFERENCES `material_content`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course_logging` ADD CONSTRAINT `course_logging_exam_id_fkey` FOREIGN KEY (`exam_id`) REFERENCES `exam`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
