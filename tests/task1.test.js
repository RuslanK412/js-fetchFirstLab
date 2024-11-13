const fetchUsers = require('../tasks/task1'); // Імпортуємо вашу функцію

// Мокування fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' }
    ])
  })
);

describe('fetchUsers', () => {
  test('Correctly makes GET request and returns user data', async () => {
    const data = await fetchUsers(); // викликаємо функцію fetchUsers
    
    // Перевірка, що результат — масив
    expect(Array.isArray(data)).toBe(true);
    
    // Перевірка, що масив не порожній
    expect(data.length).toBeGreaterThan(0);
    
    // Перевірка, що перший обʼєкт має id і name
    expect(data[0]).toHaveProperty('id');
    expect(data[0]).toHaveProperty('name');
    
    // Додаткові перевірки, щоб переконатися, що моковані дані правильні
    expect(data[0].id).toBe(1);
    expect(data[0].name).toBe('John Doe');
  });
});
