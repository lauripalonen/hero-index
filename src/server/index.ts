require('dotenv').config({path: './src/server/.env'})
import 'reflect-metadata';
import { useContainer, ConnectionOptions, createConnection } from 'typeorm';
import { Container } from 'typedi';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import * as TypeGraphQl from 'type-graphql';
import * as jwt from 'jsonwebtoken';

import { Hero } from './entities/hero';
import { Skill } from './entities/skill';
import { Attribute } from './entities/attribute';
import { Vault } from './entities/vault';
import { Role } from './entities/role';

import { HeroResolver } from './resolvers/hero-resolver';
import { VaultResolver } from './resolvers/vault-resolver';
import { AuthTokenResolver } from './resolvers/auth-resolver';

import { AuthService } from './services/auth-service'

import { seedDatabase } from './helpers';

useContainer(Container);

const databaseOptions: ConnectionOptions = {
	type: 'sqlite',
	database: `${path.resolve(__dirname, '.')}/data/db.sqlite`,
	entities: [Hero, Attribute, Skill, Vault, Role],
	logging: false, // switch to 'all' or true to enable database query logging
};

const DROP_DATABASE = true;

const bootstrapApp = async () => {
	try {
		const connection = await createConnection(databaseOptions);
		await connection.synchronize(DROP_DATABASE); // this flushes data and syncronizes structural changes to db
		await seedDatabase();

		const schema = await TypeGraphQl.buildSchema({
			resolvers: [HeroResolver, VaultResolver, AuthTokenResolver],
			container: Container,
			authChecker: AuthService().customAuthChecker
		});

		const server = new ApolloServer({
			schema,
			context: async ({ req }) => {
				const context = { req, roles: [] }
				const token = req.headers.authorization

				if (!token) {
					return context
				}

				const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

				const heroRepository = connection.getRepository(Hero)
				const hero = await heroRepository.findOne((<any>decodedToken).userId)

				if (!hero) {
					return context
				}

				return { ...context, roles: hero.roles }
			},
		});

		const { url } = await server.listen(4000);
		console.log(`Server is running, GraphQL Playground available at ${url}`);
	} catch (error) {
		console.error(error);
	}
};

bootstrapApp();
