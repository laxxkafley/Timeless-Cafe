/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `author` on the `Poem` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Poem` table. All the data in the column will be lost.
  - Added the required column `Author` to the `Poem` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Comment";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Poem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "Author" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Poem" ("content", "createdAt", "id", "title") SELECT "content", "createdAt", "id", "title" FROM "Poem";
DROP TABLE "Poem";
ALTER TABLE "new_Poem" RENAME TO "Poem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
