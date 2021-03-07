import * as jwt from 'jsonwebtoken';
import { AuthChecker } from 'type-graphql'
import { Hero } from '../entities/hero'

const generateJwtForUserId = (userId: string) => jwt.sign(
	{ userId }, process.env.JWT_SECRET
);

const customAuthChecker: AuthChecker<Hero> = async ({ context }, roles) => {
	const requiredRole = roles[0]
	const userRoles = (await context.roles).map(role => role.title)

	if (userRoles.includes(requiredRole)) {
		return true
	}

	return false
}

export const AuthService = () => ({
	generateJwtForUserId,
	customAuthChecker
});