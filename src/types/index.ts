import { gql } from 'apollo-server-express'

const typeDefs = gql`
type Mutation {
  login(email: String!, password: String!): String
}
`

export default typeDefs