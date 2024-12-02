-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comment" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "poemId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_poemId_fkey" FOREIGN KEY ("poemId") REFERENCES "Poem" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("comment", "createdAt", "id", "updatedAt", "userId") SELECT "comment", "createdAt", "id", "updatedAt", "userId" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
