const { buildSchema } = require("graphql"); 

module.exports = buildSchema(` 

    type User {
        name: String!
        email: String!
        password: String! 
    }

    type AuthData {
        token: String!
        userId: String!
    }

    type Product {
        name: String!
    }

    input ProductInputData {
        id: String!
    }
 
    input UserInputData {
        email: String!
        name: String!
        password: String!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        getUsers(id: String!): User!  
    }

    type RootMutation { 
        createUser(userInput: UserInputData): User! 
        createProduct(product: ProductInputData): Product! 
    } 

    schema {
        query: RootQuery
        mutation: RootMutation 
    }

`);



// module.exports = buildSchema(`

//     type TestData {
//         text: String!
//         views: Int!
//     }

//     type RootQuery {
//         hello: TestData!
//     }

//     schema {
//         query: RootQuery
//     }

// `);
