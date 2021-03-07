import * as jwt from 'jsonwebtoken';
import { AuthChecker } from 'type-graphql'
import { Hero } from '../entities/hero'

const JWT_SIGNING_SECRET = process.env.JWT_SECRET;

const generateJwtForUserId = (userId: string) => jwt.sign({ userId }, JWT_SIGNING_SECRET);

const customAuthChecker: AuthChecker<Hero> = async (
	{ root, args, context, info },
	roles,
) => {
	const userRoles = await context.roles
	const roleTitles = userRoles.map(role => role.title)
	if (roleTitles.includes('TREASURER')) {
		return true
	}
	return false
}


export const AuthService = () => ({
	generateJwtForUserId,
	customAuthChecker
});