module.exports = (repository) => {
    return {
        list: async () => {
            try {
                const list = await repository.findAll()
                return list
            } catch (error) {
                console.log(error)
            }
        },
    }
}