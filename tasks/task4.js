async function deleteUser(id) {
  try {
    // Формуємо URL для DELETE-запиту, де {userId} - це id користувача
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    // Виконуємо DELETE-запит
    const response = await fetch(url, {
      method: 'DELETE', // Метод запиту
    });

    // Перевіряємо, чи запит пройшов успішно
    if (!response.ok) {
      throw new Error('Не вдалося видалити користувача');
    }

    // Повертаємо статус відповіді (наприклад, 200 OK для успіху)
    return response.status;
  } catch (error) {
    console.error('Помилка:', error);
    return null; // Якщо сталася помилка, повертаємо null
  }
}

// Приклад виклику функції
deleteUser(1)
  .then(status => console.log(`Статус відповіді: ${status}`)) // Виводимо статус відповіді
  .catch(error => console.log('Помилка:', error));
