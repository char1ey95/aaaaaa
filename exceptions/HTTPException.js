class HttpException extends Error {
    constructor(message, status) {
        super(message)
        this.status = status
    }
}

// const e = new HttpException("요청데이터가 없다", 500)

module.exports = HttpException