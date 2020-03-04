import singletonify from '../singletonify';

describe('test singletonify', () => {

  test('01 测试单例', async () => {
    class User {
      constructor(name) {
        this.name = name;
      }

      getUserName() {
        return this.name;
      }
    }

    const UserSingletonClass = singletonify(User);

    const user = new UserSingletonClass('jack');
    let userName1 = user.getUserName();

    const user2 = new UserSingletonClass('mark');
    let userName2 = user2.getUserName();

    expect(userName1).toEqual(userName2);

  });

});
