class CommentService {
    constructor({ commentRepository, config }) {
        this.commentRepository = commentRepository
        this.config = config
        this.HttpException = config.exception.HttpException
    }

    async list() {
        try {
            const list = await this.commentRepository.findAll()
            if( list.length === 0 ) throw new this.HttpException("내용이 없습니다.")
            throw "내용이 없음"
            return list 
        } catch (error) {
            throw new this.HttpException(error)
        }
    }
}

module.exports = CommentService