import prismaImport from '@prisma/client';

const { PrismaClient } = prismaImport;
const { articles, user } = new PrismaClient();

// eslint-disable-next-line no-extend-native
BigInt.prototype.toJSON = function () { return +this.toString(); };

export { articles, user };
