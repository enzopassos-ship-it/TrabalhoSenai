

    function calcular() {

        var qtdCpu = parseFloat(document.getElementById('qtdcpu').value) || 0;
        var wattsCpu = parseFloat(document.getElementById('wattscpu').value) || 0;
        var horasCpu = parseFloat(document.getElementById('horascpu').value) || 0;
        var diasCpu = parseFloat(document.getElementById('diascpu').value) || 0;
        var totalCpu = (qtdCpu * wattsCpu * horasCpu * diasCpu) / 1000;


        var qtdMonitor = parseFloat(document.getElementById('qtdmonitor').value) || 0;
        var wattsMonitor = parseFloat(document.getElementById('wattsmonitor').value) || 0;
        var horasMonitor = parseFloat(document.getElementById('horasmonitor').value) || 0;
        var diasMonitor = parseFloat(document.getElementById('diasmonitor').value) || 0;
        var totalMonitor = (qtdMonitor * wattsMonitor * horasMonitor * diasMonitor) / 1000;


        var qtdSkfa = parseFloat(document.getElementById('qtdskfa').value) || 0;
        var wattsSkfa = parseFloat(document.getElementById('wattsskfa').value) || 0;
        var horasSkfa = parseFloat(document.getElementById('horasskfa').value) || 0;
        var diasSkfa = parseFloat(document.getElementById('diasskfa').value) || 0;
        var totalSkfa = (wattsSkfa * horasSkfa * diasSkfa * qtdSkfa) / 1000;


        var qtdPs = parseFloat(document.getElementById('qtdps').value) || 0;
        var wattsPs = parseFloat(document.getElementById('wattsps').value) || 0;
        var horasPs = parseFloat(document.getElementById('horasps').value) || 0;
        var diasPs = parseFloat(document.getElementById('diasps').value) || 0;
        var totalPs = (wattsPs * horasPs * diasPs * qtdPs) / 1000;


        var qtdGerador = parseFloat(document.getElementById('qtdgerador').value) || 0;
        var wattsGerador = parseFloat(document.getElementById('wattsgerador').value) || 0;
        var horasGerador = parseFloat(document.getElementById('horasgerador').value) || 0;
        var diasGerador = parseFloat(document.getElementById('diasgerador').value) || 0;
        var totalGerador = (wattsGerador * horasGerador * diasGerador * qtdGerador) / 1000;


        var qtdOsc = parseFloat(document.getElementById('qtdosc').value) || 0;
        var wattsOsc = parseFloat(document.getElementById('wattsosc').value) || 0;
        var horasOsc = parseFloat(document.getElementById('horasosc').value) || 0;
        var diasOsc = parseFloat(document.getElementById('diasosc').value) || 0;
        var totalOsc = (wattsOsc * horasOsc * diasOsc * qtdOsc) / 1000;


        var qtdAr = parseFloat(document.getElementById('qtdar').value) || 0;
        var wattsAr = parseFloat(document.getElementById('wattsar').value) || 0;
        var horasAr = parseFloat(document.getElementById('horasar').value) || 0;
        var diasAr = parseFloat(document.getElementById('diasar').value) || 0;
        var totalAr = (wattsAr * horasAr * diasAr * qtdAr) / 1000;


        var qtdTv = parseFloat(document.getElementById('qtdtv').value) || 0;
        var wattsTv = parseFloat(document.getElementById('wattstv').value) || 0;
        var horasTv = parseFloat(document.getElementById('horastv').value) || 0;
        var diasTv = parseFloat(document.getElementById('diastv').value) || 0;
        var totalTv = (wattsTv * horasTv * diasTv * qtdTv) / 1000;


        var qtdLed = parseFloat(document.getElementById('qtdled').value) || 0;
        var wattsLed = parseFloat(document.getElementById('wattsled').value) || 0;
        var horasLed = parseFloat(document.getElementById('horasled').value) || 0;
        var diasLed = parseFloat(document.getElementById('diasled').value) || 0;
        var totalLed = (wattsLed * horasLed * diasLed * qtdLed) / 1000;


        var consumoTotal = totalCpu + totalMonitor + totalSkfa + totalPs + totalGerador + totalOsc + totalAr + totalTv + totalLed;

        



        var custoDinheiro = consumoTotal * 0.85;



        var mensagemFinal = "";

        if (consumoTotal <= 850) {
            mensagemFinal = "O gasto foi baixo. Indica que o laboratório operou abaixo da capacidade esperada para os dois turnos.";
        } 
        else if (consumoTotal > 850 && consumoTotal <= 1250) {
            mensagemFinal = "Gasto normal e totalmente condizente com a média de uso do Laboratório";
        } 
        else {
            mensagemFinal = "O gasto foi muito alto. Ultrapassou a média calculada para o laboratório. Verifique desperdícios ou aparelhos extras.";
        }


        document.getElementById('resultadokwh').innerHTML = consumoTotal.toFixed(2);
        document.getElementById('resultadoreais').innerHTML = custoDinheiro.toFixed(2);
        document.getElementById('mensagemstatus').innerHTML = mensagemFinal;
    }