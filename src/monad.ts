let username ="Gustave"
let userObject = database.fetch(username)
let userFriends = userObject.userFriends
let firstFiend = userFriends.first()
let firstFriendGender = userFriends.gender 

class Maybe{
    constructor(value){
        this.value = value
    }
    bind = function(func){
        if (this.value==null){
            return this 
        }
        value = func(this.value)
        return Maybe(value)
    }
}

let firstFriendGender =Maybe("Gustave")
.bind(database.fetch)
.bind(user=>user.friends)
.bind(friends => friends.first())
.bind(friend => friend.gender)