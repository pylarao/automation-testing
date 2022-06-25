var config = {
    DATABASE_HOST: process.env.DATABASE_HOST?process.env.DATABASE_HOST:"testing.cco34hgoktkv.ap-south-1.rds.amazonaws.com",
    DATABASE_NAME: process.env.DATABASE_NAME?process.env.DATABASE_NAME:"testing",
    DATABASE_USER: process.env.DATABASE_USER?process.env.DATABASE_USER:"user",
    DATABASE_PASS: process.env.DATABASE_PASS?process.env.DATABASE_PASS:"pass1234",
}

module.exports = config;
