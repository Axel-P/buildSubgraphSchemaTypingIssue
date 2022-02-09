const resolvers = {
    Mutation: {
        login: (parent: unknown, inputs: { email: string, password: string }) => {
            return `success! inputs: ${inputs.email}, ${inputs.password}`
        }
    }
}
export default resolvers