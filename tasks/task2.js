async function createUser(user) {
  try {
    // Виконуємо POST-запит до API
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST', // Метод запиту
      headers: {
        'Content-Type': 'application/json' // Вказуємо, що дані відправляються у форматі JSON
      },
      body: JSON.stringify(user) // Перетворюємо об'єкт в JSON рядок для відправки
    });

    // Перевіряємо, чи запит пройшов успішно
    if (!response.ok) {
      throw new Error('Щось пішло не так');
    }

    // Повертаємо відповідь від сервера
    const result = await response.json();
    return result; // Повертаємо отримані дані
  } catch (error) {
    console.error('Помилка:', error);
    return null; // У разі помилки повертаємо null
  }
}

// Приклад виклику функції
createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" })
  .then(result => console.log(result)) // Виводимо результат після успішного створення користувача
  .catch(error => console.log('Помилка:', error));
