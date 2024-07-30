// Функция для логина(входа в личный кабинет)
async function login(userData) {
  try {
    let register = await fetch('http://127.0.0.1:8000/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (register.ok) {
      console.log('Все получилось!');
    }
  }

  catch {
    console.log('Какие то проблемы)))');
  }
}

export default login; 

