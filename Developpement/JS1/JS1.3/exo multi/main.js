let nbrMulti = undefined
let maxTab = undefined

while(isNaN(nbrMulti) || isNaN(maxTab)){
    nbrMulti = prompt('Entrez un nombre à multiplier : ')
    maxTab = prompt('Donnez une taille maximum pour le tableau ')
}
let tab = []
for(let i = 1 ; i <= maxTab ; i++){
    tab[i] = []
    for(let y = 1 ; y <= maxTab ; y++){
        tab[i][y] = i * y
    }
}
document.write('<table style="border:2px solid black">')

for(let i = 1 ; i <= maxTab ; i++){
    document.write('<tr>')
    for(let y = 1 ; y <= maxTab ; y++){
        if(y == i){
            if(i == nbrMulti){
                document.write('<td style="background-color:red">')
            }else{
                document.write('<td style="background-color:red">')
            }
        }else{
            if(y == nbrMulti || i == nbrMulti ){
                document.write('<td style="background-color:yellow">')
            }else{
                document.write('<td>')
            }
        }
        document.write(tab[i][y])
        document.write('</td>')
    }
    document.write('</tr>')
}
document.write('</table>')