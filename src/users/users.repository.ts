
export class Users {
    id: number;
    email: string;
    password: string;
}

export class UsersRepository {
    db: Users[] = []

    createUser(user: Users) {
        this.db.push(user);
    }

   getUsers() {
       return this.db;
   }
   
   dataSeeder() {
    this.db.push(
        {
          "id": 1337,
          "email": "augusto@tagchat.com",
          "password": "1222"
        },
        {
          "id": 520,
          "email": "danilo@tagchat.com",
          "password": "1222"
        },
        {
          "id": 337,
          "email": "nestjs@nestjs.com",
          "password": "1222"
        },
        {
          "id": 120,
          "email": "example@example.com",
          "password": "1222"
        },
        {
            "id": 350,
            "email": "tagchat@tagchat.com",
            "password": "1222"
        }
    );
   }
}