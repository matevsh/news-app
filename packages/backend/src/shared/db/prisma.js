import prismaImport from '@prisma/client';

const { PrismaClient } = prismaImport;
const { articles, user } = new PrismaClient();

BigInt.prototype.toJSON = function () { return +this.toString(); };

export { articles, user };
