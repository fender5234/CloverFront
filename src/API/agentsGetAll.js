// Функция для получения агентов
async function getAll() {
  try {
    let register = await fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/agents/get_all', {
      method: 'get',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
  
    });

    if (register.ok) {
      console.log(register);
    }
  }

  catch {
    console.log('Какие то проблемы)))');
  }
}

export default getAll; 

