# Back-End

## ORM

-   Table --> Object
-   Object --> table
-   Object <-- table

## SQL

-   프로그래머스 SQL

## TDD

# 수업

-   dotenv :

```js
require("dotenv").config();
```

## ORM

-   SQL 구문을 사용하지 않을 수도 있다.

```SQL

CREATE TABLE user(
    idx int(11) PRIMARY KEY AUTO_INCREMENT,
    userid varchar(150) NOT NULL,
)

```

```js
class User {
	constructor() {
		this.id;
		this.userid;
	}
}

User.find();
```

`sequelize` - javascript 기반

typeORM - typescript 기반
