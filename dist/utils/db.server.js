import { PrismaClient } from '@prisma/client';
let db;
if (!global.__db) {
    global.__db = new PrismaClient();
}
db = global.__db;
export { db };
