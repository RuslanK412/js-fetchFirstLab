async function fetchUsers() {
  try {
    // Виконуємо GET-запит до API
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Перевіряємо, чи запит був успішним
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    // Отримуємо дані у форматі JSON
    const data = await response.json();
    
    // Повертаємо масив з користувачами, де кожен об'єкт містить тільки id та name
    return data.map(user => ({
      id: user.id,
      name: user.name
    }));
  } catch (error) {
    // Виводимо помилку, якщо сталася проблема з запитом
    console.error('Fetching users failed:', error);
    return [];
  }
}

// Приклад використання
fetchUsers().then(users => console.log(users));

module.exports = fetchUsers;
