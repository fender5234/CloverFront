// Функция для получения агентов
async function getAll() {
  try {
    let register = await fetch('http://127.0.0.1:8000/agents/get_all', {
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

