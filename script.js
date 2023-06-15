// Variável de controle para alternar a exibição dos contêineres
let containersVisible = false;

function handleButtonClick() {
  const apiUrl = 'https://raw.githubusercontent.com/lukasbryt/trilhafront/main/test.json';

  const container1 = document.getElementById('userContainer1');
  const container2 = document.getElementById('userContainer2');

  if (containersVisible) {
    container1.style.display = 'none';
    container2.style.display = 'none';

    fetchButton.textContent = 'Obter Usuários';
    containersVisible = false;
  } else {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        container1.innerHTML = '';
        container2.innerHTML = '';

        const obj1 = data.find(obj => obj.id === 1);
        const obj2 = data.find(obj => obj.id === 2);

        if (obj1) {
          obj1.userName.forEach(userName => {
            const userDiv = document.createElement('div');
            const userNameSpan = document.createElement('span');
            userNameSpan.textContent = userName;
            userDiv.appendChild(userNameSpan);
            container1.appendChild(userDiv);
          });

          const welcomeText = document.createElement('p');
          welcomeText.textContent = 'Seja bem-vindo(a) à TT&T!';

          container1.appendChild(welcomeText);
        }

        if (obj2) {
          obj2.userName.forEach(userName => {
            const userDiv = document.createElement('div');
            const userNameSpan = document.createElement('span');

            userNameSpan.textContent = userName;
            userDiv.appendChild(userNameSpan);
            container2.appendChild(userDiv);
          });

           const messageContainer2 = document.createElement('p');
           messageContainer2.textContent = 'Somos os novos estagiários e estamos prontos para aprender coisas novas';
           container2.appendChild(messageContainer2);
         }
 
         container1.style.display = 'block';
         container1.classList.add('centered-container');
         container2.style.display = 'block';
         container2.classList.add('centered-container');
 
         fetchButton.textContent = 'Ocultar Usuários';
         containersVisible = true;
       })
       .catch(error => {
         console.error('Ocorreu um erro:', error);
       });
   }
 }
 
 const fetchButton = document.getElementById('fetchButton');
 
 fetchButton.addEventListener('click', handleButtonClick);