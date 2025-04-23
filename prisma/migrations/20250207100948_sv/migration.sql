-- AlterTable
ALTER TABLE `course` MODIFY `user_id` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `sv_users` (
    `gid` VARCHAR(191) NOT NULL,
    `full_name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `school` VARCHAR(191) NULL,
    `user_type` INTEGER NULL,

    UNIQUE INDEX `sv_users_email_key`(`email`),
    PRIMARY KEY (`gid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sv_users_type` (
    `id` INTEGER NOT NULL,
    `title_id` VARCHAR(191) NULL,
    `title_en` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `sv_users` ADD CONSTRAINT `sv_users_user_type_fkey` FOREIGN KEY (`user_type`) REFERENCES `sv_users_type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `course` ADD CONSTRAINT `course_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `sv_users`(`gid`) ON DELETE SET NULL ON UPDATE CASCADE;
