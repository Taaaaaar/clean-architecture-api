import {UserData} from '../user-data'
import {InMemoryUserRepository} from './in-memory-user-repository'


describe('In memory User repository', () =>{
  test('should return null is user is not found', async () => {
    const users: UserData[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@gmail.com')
    expect(user).toBeNull()
  })

  test('shoudl return user if it is found in the repository', async () => {
    const users: UserData[] = []
    const name = 'any_name'
    const email = 'any@mail.com'
    const userRepo = new InMemoryUserRepository(users)
    await userRepo.add({name,email}) 
    const user = await userRepo.findUserByEmail('any@mail.com')
    expect(user.name).toBe('any_name')
  })
})