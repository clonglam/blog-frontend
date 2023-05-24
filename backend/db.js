const monoose = require("mongoose")

const dbUrl = process.env.DB_URL || "mongodb://localhost/blog"

// const dbUrl = (config.get("db") as string) || "mongodb://localhost/blog"

const connect = async () => {
    await mongoose
        .connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then(() => console.log(`Connected to ${dbUrl}...`))
        .catch(err => console.log("Error", err))
}

const close = () => mongoose.connection.close()

module.exports = { connect, close, url: dbUrl }
