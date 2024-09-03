const countVotes = (votos) => {
    let resultado ={};
    votos.forEach ((voto) => {
        
        resultado[voto.candidate]=(resultado[voto.candidate] ||0)+1;
    });
}

const showResults = (resultado) => {
    alert ("Resultados de la votacion->");
    for (let candidate in resultado) {
        alert(`${candidate}: ${resultado[candidate]} votos`);
        
    }
}

const main = () => {
    let votos = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    const resultado=countVotes(votos);
    showResults(resultado);

}

main();
