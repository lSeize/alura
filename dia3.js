let bemVindo = alert('==============================\n=========== Bem Vindo ===========\n=======Qual area deseja estudar?======\n==============================');

frontEnd = [];
backEnd = [];


main();

function main(){
  
  let opcao = prompt('1 - Front - End.\n2 - Back - End.\n3 - N. D. A.');

  if (opcao == 1){
    alert('Front - End ! Você podera aprender React e/ou Vue!');
    alert('Agora vc pode escolher em continuar se especialuzando em fron - end, ou estudar tbm Back - end para se tornar um Fullstack');        
    while(opcao == 1 ){
      let continuarFront = prompt('1 - Continuiar na formação Fron - End! \n2 - Estudar Back - End e se tornar um Fullstack\n3 - Sair');
      if(continuarFront == 1){
        alert('Voce escolheu continuar a estudar front - End!!');
        alert('Entre com as outras tecnoligas e/ou linguagens que vc gostaria de aprender ou conhecer dentro do Front - End. digite sair para sair.');
        for(let i = 0; ; i++){
          frontEnd.push(prompt('Novas tecnoligas e/ou linguagens!'));
          let sair = prompt('1 - Proxima tecnoligas e/ou linguagens.\n2 - Sair.')
          i++
          if(sair == 2 ){
            alert(`Obrigado, aqui estão usas tecnolias e/ou linguages q deseja setudar e/ou conhecer: ${frontEnd} `) 
            break;
          }       
        } 
        break;
      }else if(continuar == 2){
        alert('Voce escolheu começar estudar Back - End e se tornar um Fullstack!!');
      }else if(continuar == 3){
        alert('Sair. Obrigado!');
        break;
      }else{
        alert('Entre com um valor valido!')
      }      
    }    
  }else if(opcao == 2){
    alert('Back - End ! Você podera aprender Python e/ou Java!');
    alert('Agora vc pode escolher em continuar se especialuzando em Back - end, ou estudar tbm Front - end para se tornar um Fullstack');        
    while(opcao == 2 ){
      let continuarBack = prompt('1 - Continuiar na formação Back - End! \n2 - Estudar Front - End e se tornar um Fullstack\n3 - Sair');
      if(continuarBack == 1){
        alert('Voce escolheu continuar a estudar Back - End!!');
        alert('Entre com as outras tecnoligas e/ou linguagens que vc gostaria de aprender ou conhecer dentro do Back - End. digite sair para sair.');
        for(let i = 0; ; i++){
          backEnd.push(prompt('Novas tecnoligas e/ou linguagens!'));
          let sair = prompt('1 - Proxima tecnoligas e/ou linguagens.\n2 - Sair.')
          i++
          if(sair == 2 ){
            alert(`Obrigado, aqui estão usas tecnolias e/ou linguages q deseja setudar e/ou conhecer: ${backEnd} `) 
            break;
          }       
        } 
        break;
      }else if(continuar == 2){
        alert('Voce escolheu começar estudar Front - End e se tornar um Fullstack!!');
      }else if(continuar == 3){
        alert('Sair. Obrigado!');
        break;
      }else{
        alert('Entre com um valor valido!')
      }      
    }
  }else if(opcao == 3){
    alert('Nenhuma das alternativas. Não pretendo estudar programação.');
  }else{
    alert('Entre com um valor valido!')
    main();
  }
}

