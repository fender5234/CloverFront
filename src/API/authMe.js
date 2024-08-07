// Функция проверки авторизации
async function authMe() {
  try {
    let register = await fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/me', {
      method: 'get',
      credentials: 'include',
    });

    if (register.ok) {
      console.log(register);
    }
  }

  catch {
    console.log('Какие то проблемы)))');
  }
}

export default authMe; 

