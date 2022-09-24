/*
  Warnings:

  - Added the required column `detail` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "detail" TEXT NOT NULL;
