module.exports = (mysql) => {
    return {
        findAll: async () => {
            const result = await mysql.query("SELECT * FROM comment")
            return result
        }
    }
}