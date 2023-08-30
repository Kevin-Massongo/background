const operators = document.querySelectorAll('.list')

operators.forEach(operator =>{
    operator.addEventListener('click', (e)=>{
        document.body.classList.remove('red', 'yellow', 'blue', 'black')
        switch(e.target.id){
            case 'red' :
                document.body.classList.add('red');
                break
            case 'yellow' :
                document.body.classList.add('yellow');
                break
            case 'blue' :
                document.body.classList.add('blue');
                break
            case 'black' :
                document.body.classList.add('black')
                break
            default : null;
        }
    })
})