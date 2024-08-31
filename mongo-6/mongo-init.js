db.createUser({
    user: "test",
    pwd: "test.123456",
    roles: [
        {
            role: "readWrite",
            db: "test_db",
        },
    ],
});