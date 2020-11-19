import faker from 'faker'
import { v4 } from 'uuid'

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dob?: string;
  createdOn?: string;
}

const userFactory = (count: number, user?: Partial<User>): User[] => {
  const users: User[] = []

  for (let i = 0; i < count; i++) {
    users.push({
      id: v4(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      dob: faker.date.past(10).toISOString(),
      createdOn: new Date().toISOString(),
      ...user
    })
  }

  return users
}

export const getUsers = (count = 100) => {
  return userFactory(count)
}