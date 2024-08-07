// Функция для регистрации)
async function register(userData) {
  try {
    let register = await fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/register', {
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

export default register; 

