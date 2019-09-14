import { IResolvers } from "graphql-tools";

// Los resolvers de las operaciones de consulta para devolver información
const resolvers: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello world!!';
        },
        helloWithName(_: void, args: any): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse (): string {
            return 'Hello to GraphQL Course!!';
        },
        users() {
            return [{
                id: '1',
                name: 'Anartz',
                lastname: 'Mugika'
            },
            {
                id: '2',
                name: 'Curso',
                lastname: 'GraphQL'
            }]
        }
    }
};

export default resolvers;