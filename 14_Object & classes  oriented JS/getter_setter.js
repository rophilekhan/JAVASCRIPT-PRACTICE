class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rophile`
    }

    set password(value){
        this._password = value
    }
}

const rophile = new User("r@rophile.ai", "abc")
console.log(rophile.email);