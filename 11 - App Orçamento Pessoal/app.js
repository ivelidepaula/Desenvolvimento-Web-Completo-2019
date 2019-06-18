class Despesa {
    constructor(ano, mes, dia, tipo, descricao, valor) {
        this.ano = document.getElementById('ano')
        this.mes = document.getElementById('mes')
        this.dia = document.getElementById('dia')
        this.tipo = document.getElementById('tipo')
        this.descricao = document.getElementById('descricao')
        this.valor = document.getElementById('valor')
    }
}

function cadastrarDespesa () {

    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    let despesa = new Despesa(ano.value, mes.value, dia.value, tipo.value, descricao.value, valor.value)
}