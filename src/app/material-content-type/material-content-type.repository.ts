import { prisma } from "../../setup/prisma";

export const getAllMaterialContentType = async () => await prisma.materialContentType.findMany()