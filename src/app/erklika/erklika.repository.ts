import { erklikaPrisma } from "../../setup/prisma"

export const getUserById = async ({
    gid
}: {
    gid: string
}) => {
    return await erklikaPrisma.svUser.findUnique({
        where: {
            gid
        }
    })
}