import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@admin.com",
        password: bcrypt.hashSync("Freealiens2#", 10),
        isAdmin: true,
    },
    {
        name: "João da Silva",
        email: "joao@email.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Maria da Silva",
        email: "maria@email.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
