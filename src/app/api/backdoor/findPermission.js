import permission from "@/seeds/permissions"

const findPermission = (name) => {
    return permission.find(permission =>  permission.name === name)
}

export default findPermission