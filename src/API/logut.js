// function logout() {
//   const logoutFetch = fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/logout', {
//     method: 'post',
//     credentials: 'true'
//   });

//   logoutFetch.then((response) => {
//     if(response) {
//       console.log('Запрос на логаут случился');
//     }
//   })
// };

// export default logout;

// Функция для логина(входа в личный кабинет)
async function logout() {
  try {
    let register = await fetch('https://lexashvetsoff-onlineconsultantai-api-cfe7.twc1.net/auth/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (register.ok) {
      console.log('Анлогин');
    }
  }

  catch {
    console.log('Какие то проблемы)))');
  }
}
export default logout;

