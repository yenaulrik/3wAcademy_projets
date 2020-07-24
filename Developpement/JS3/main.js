document.addEventListener('DOMContentLoaded', function(){
    localStorage.setItem('live25', 'The best')
    
    
    let text = localStorage.getItem('live25')
    
    console.log(text)
    document.querySelector('.container1').textContent = text
    
    //---------- EX avec via JSON
    
    const students = [
        { 
            nom: 'seb',
            ville: 'Troie'
        },
        {  
            nom: 'Cati',
            ville: 'St Etienne'
        },
        { 
            nom: 'Vincent',
            ville: 'The Moon'
        },
        {  
            nom: 'Baptiste',
            ville: 'Lile'
        }
    ]
    
    //BEFORE
    console.log('Before convert' , students)
    // convertir via JSON
    const studentsMinify = JSON.stringify(students)
    
    
    //AFTER
    console.log('AFTER convert' , studentsMinify)
    
    localStorage.setItem('live25-list-student', studentsMinify)
    let text2 = localStorage.getItem('live25-list-student')
    console.log(text2)
    document.querySelector('.container2').textContent = text2
    
    let newList = JSON.parse(text2)
    console.log(newList)
    
    const  c2 = document.querySelector('.container2')
    
    newList.map( student => {
        console.log(students)
        let p = document.createElement('p')
        p.textContent = student.nom
        c2.appendChild(p)
        
    })
    
    for (var i = 0; i < students.length; i++) {
        students[i];
        let p = document.createElement('p')
        p.textContent = students[i].nom
        c2.appendChild(p)
    }
    
})