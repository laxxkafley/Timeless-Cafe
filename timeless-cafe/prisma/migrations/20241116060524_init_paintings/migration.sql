/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Paintings` table. All the data in the column will be lost.
  - You are about to drop the column `done` on the `Paintings` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Paintings` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paintings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Paintings" ("description", "id", "image", "title") SELECT "description", "id", "image", "title" FROM "Paintings";
DROP TABLE "Paintings";
ALTER TABLE "new_Paintings" RENAME TO "Paintings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
