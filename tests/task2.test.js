const createUser = require('../tasks/task2'); // Імпортуємо вашу функцію

// Мокування fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      id: 1,  // Симулюємо, що API повертає ID нового користувача
      name: 'John',
      email: 'john@example.com'
    })
  })
);

describe('createUser', () => {
  test('Correctly makes POST request and creates new user', async () => {
    const newUser = { name: 'John', email: 'john@example.com' };
    const data = await createUser(newUser); // викликаємо функцію для створення користувача

    // Перевірка, що відповідь містить поле id
    expect(data).toHaveProperty('id');

    // Перевірка, чи імʼя і email відповідають значенням, переданим у запиті
    expect(data.name).toBe(newUser.name);
    expect(data.email).toBe(newUser.email);
  });
});
