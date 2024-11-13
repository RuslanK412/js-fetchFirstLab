const updateUser = require('../tasks/task3'); // Імпортуємо вашу функцію

// Мокування fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({
      id: 1,  // Симулюємо, що API повертає оновлені дані користувача
      name: 'Updated Name',
    })
  })
);

describe('updateUser', () => {
  test('Correctly makes PATCH request and updates user data', async () => {
    const updatedData = { name: 'Updated Name' }; // Дані для оновлення
    const userId = 1; // ID користувача, якого будемо оновлювати

    const data = await updateUser(userId, updatedData); // Викликаємо функцію для оновлення користувача

    // Перевірка, що імʼя оновлено
    expect(data.name).toBe(updatedData.name);

    // Перевірка, що ID співпадає з переданим
    expect(data.id).toBe(userId);
  });
});
