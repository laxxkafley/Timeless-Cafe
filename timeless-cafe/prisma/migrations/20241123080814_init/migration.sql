/*
  Warnings:

  - You are about to drop the column `datePublished` on the `Poem` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Poem` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "poemId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Comment_poemId_fkey" FOREIGN KEY ("poemId") REFERENCES "Poem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Poem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Poem" ("author", "content", "id", "title") SELECT "author", "content", "id", "title" FROM "Poem";
DROP TABLE "Poem";
ALTER TABLE "new_Poem" RENAME TO "Poem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
