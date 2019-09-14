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
        usuarios() {
            return [{
                id: '1',
                nombre: 'Anartz',
                email: 'anartz@anartz.com'
            },
            {
                id: '2',
                nombre: 'Curso',
                email: 'curso@graphql.com'
            }]
        },
        mensaje() {
            return {
                id: '1',
                texto: 'Hola',
                usuario: {
                    id: '1',
                    nombre: 'Anartz',
                    email: 'anartz@anartz.com'
                }
            }
        }
    }
};

export default resolvers;