import mongoose from "mongoose"

const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/blog"

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

export { close, connect, dbUrl }

export default connect
