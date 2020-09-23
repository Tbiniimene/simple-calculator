const numbers = document.getElementsByName('number')
const operations = document.getElementsByName('operation')
const current = document.getElementById('currentValue')
const equals = document.getElementById('equals')
const deleteLast = document.getElementById('delete')
const clear = document.getElementById('ac')
var reset =false;
let nop=0;
var ListOfopeartions=["+","-","%","*","÷"];

  numbers.forEach(button => {
    button.addEventListener('click', () => {
        //reset to the current value after completing equation
        if(reset===true){
                current.innerText =''
                reset=false;
        }
        //disable 0
        if( current.innerText.toString()==='' && button.innerText.toString()==='0'){
            current.innerText =''
            return
        }
        //current value streaming
        current.innerText =current.innerText.toString()+ button.innerText.toString();
    })
  })

  operations.forEach(button => {
    button.addEventListener('click', () => {
        //disable operations
        if (current.innerText === '') return
        if(nop>0) return
        if(reset===true){
            reset=false;
        }
        operation = button.innerText
        nop+=1;
        //percent the current value
        if(operation == '%'){
            current.innerText = current.innerText * 0.01
            nop=0;
            return
        }
        //add operation to the equation
        current.innerText = current.innerText + operation
        
    })
  })

  equals.addEventListener('click', button => {
  
    const equation=current.innerText.toString();
    let result;
    let n;
    if (current.innerText==='') return
    
    if(operation==='+'){
      n=equation.indexOf('+');
      first=equation.slice(0,n);
      second=equation.slice(n+1,equation.length)
      result = parseFloat(first) + parseFloat(second)
        }
        else if(operation==='-'){
          n=equation.indexOf('-');
          first=equation.slice(0,n);
          second=equation.slice(n+1,equation.length)
          result = parseFloat(first) - parseFloat(second)
            }
            else if(operation==='*'){
              n=equation.indexOf('*');
              first=equation.slice(0,n);
              second=equation.slice(n+1,equation.length)
              result = parseFloat(first) * parseFloat(second)
                }
                else if(operation==='÷'){
                  n=equation.indexOf('÷');
                  first=equation.slice(0,n);
                  second=equation.slice(n+1,equation.length)
                  result = parseFloat(first) / parseFloat(second)
                    }
                    else{
                      return
                      }
        reset =true;
        nop=0;
        operation = undefined
        current.innerText = result
  })
 
  clear.addEventListener('click', button => {
    current.innerText = ''
    operation = undefined
    rest=false
    nop=0
  })

  deleteLast.addEventListener('click', button => {
    
    if(ListOfopeartions.includes(current.innerText.toString().charAt(current.innerText.toString().length-1))){
        nop=0;
      }
    current.innerText = current.innerText.toString().slice(0, -1)
    
  })