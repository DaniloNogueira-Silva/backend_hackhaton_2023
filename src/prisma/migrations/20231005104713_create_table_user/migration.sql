-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT,
    "expiresIn" DATETIME,
    "used" BOOLEAN
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
