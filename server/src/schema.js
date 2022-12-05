const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome:[Track]!
}  
"A Tract is a group of Modules that teaches about a specific topic"    
type Track{
    id: ID!
    title: String!
    author: Author!   
    thumbnail:String
    length: Int
    modulesCount:Int
}

type Author {
    id: ID!
    name: String!
    "Author profile pic link url"
    photo: String
}

`;


module.exports = typeDefs;
