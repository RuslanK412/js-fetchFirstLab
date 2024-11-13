async function updateUser(id, updatedData) {
  try {
    // Формуємо URL для PATCH-запиту, де {userId} - це id користувача
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    // Виконуємо PATCH-запит
    const response = await fetch(url, {
      method: 'PATCH', // Метод запиту
      headers: {
        'Content-Type': 'application/json' // Вказуємо, що дані відправляються у форматі JSON
      },
      body: JSON.stringify(updatedData) // Перетворюємо об'єкт оновлених даних в JSON
    });

    // Перевіряємо, чи запит пройшов успішно
    if (!response.ok) {
      throw new Error('Щось пішло не так');
    }

    // Повертаємо відповідь від сервера
    const result = await response.json();
    return result; // Повертаємо оновлені дані користувача
  } catch (error) {
    console.error('Помилка:', error);
    return null; // У разі помилки повертаємо null
  }
}

// Приклад виклику функції
updateUser(1, { name: 'New Name' })
  .then(result => console.log(result)) // Виводимо результат після успішного оновлення користувача
  .catch(error => console.log('Помилка:', error));
