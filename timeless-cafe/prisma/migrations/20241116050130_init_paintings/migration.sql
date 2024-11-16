/*
  Warnings:

  - Added the required column `image` to the `Paintings` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Paintings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Paintings" ("createdAt", "description", "done", "id", "title", "updatedAt") SELECT "createdAt", "description", "done", "id", "title", "updatedAt" FROM "Paintings";
DROP TABLE "Paintings";
ALTER TABLE "new_Paintings" RENAME TO "Paintings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
