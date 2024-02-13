const { buildSchema } = require("graphql"); 

module.exports = buildSchema(`

    type User {
        _id: ID!
        name: String!
        email: String!
        password: String! 
        status: String!
    }
 
    input UserInputData {
        email: String!
        name: String!
        passqord: String!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User! 
    }

    schema {
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
