import prismaImport from '@prisma/client';

const { PrismaClient } = prismaImport;
const { articles } = new PrismaClient();

// eslint-disable-next-line no-extend-native
BigInt.prototype.toJSON = function () { return +this.toString(); };

export default articles;
