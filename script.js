
let expressao = '';  
let resultado = '0';


const displayExpressao = document.querySelector('.expressao');
const displayResultado = document.querySelector('.resultado');


function atualizarDisplay() {
    displayExpressao.textContent = expressao;
    displayResultado.textContent = resultado;
}


document.querySelectorAll('.btn').forEach(botao => {
    botao.addEventListener('click', () => {

        const valor = botao.textContent; 

        if (valor === 'C') {
         
            expressao = '';
            resultado = '0';

        } else if (valor === '+/-') {
    
            resultado = String(parseFloat(resultado) * -1);

        } else if (valor === '%') {
  
            resultado = String(parseFloat(resultado) / 100);
            expressao = resultado;

        } else if (valor === '=') {
         
            try {
               
                expressao = expressao.replace(/×/g, '*').replace(/÷/g, '/');
                resultado = String(eval(expressao));
                expressao = '';
            } catch {
                resultado = 'Erro';
                expressao = '';
            }

        } else if (['÷', '×', '-', '+'].includes(valor)) {
          
            expressao += valor;
            resultado = '0';

        } else {
      
            expressao += valor;
            resultado = expressao;
        }

        atualizarDisplay();
    });
});
