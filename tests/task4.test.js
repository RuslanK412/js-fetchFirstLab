const deleteUser = require('../tasks/task4'); // Імпортуємо вашу функцію

// Мокування fetch для DELETE-запиту
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,  // Симулюємо успішну відповідь (статус 200)
  })
);

describe('deleteUser', () => {
  test('Correctly makes DELETE request and removes user', async () => {
    const userId = 1;  // ID користувача, якого потрібно видалити

    const response = await deleteUser(userId); // Викликаємо функцію для видалення користувача

    // Перевірка, що статус відповіді - 200
    expect(response.status).toBe(200);
  });
});
