class CommentRepository {
    constructor({ mysql }) {
        this.mysql = mysql
    }

    async findAll(){
        try {
            const [list] = await this.mysql.query("SELECT * FROM comment")
            return list
        } catch (error) {
            throw new Error()
        }
    }

    async create(){

    }

    async view(){

    }

    async update(){

    }

}

module.exports = CommentRepository