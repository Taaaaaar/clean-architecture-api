import {UserData} from '../user-data'
import {InMemoryUserRepository} from './in-memory-user-repository'


describe('In memory User repository', () =>{
  test('should return null is user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@gmail.com')
    expect(user).toBeNull()
  })
})