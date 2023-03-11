var app = new Vue({
    el: '#spa',
    data: {
        paginaC:"Home",
        loggato: false,
        tutti:[{"descrizione":"descrzione1"},{"descrizione":"descrzione2"},{"descrizione":"descrzione3"},{"descrizione":"descrzione4"},{"descrizione":"descrzione5"},
               {"descrizione":"descrzione6"},{"descrizione":"descrzione7"},{"descrizione":"descrzione8"},{"descrizione":"descrzione9"},{"descrizione":"descrzione10"},
               {"descrizione":"descrzione11"},{"descrizione":"descrzione12"},{"descrizione":"descrzione13"},{"descrizione":"descrzione14"},{"descrizione":"descrzione15"}],
        calcio:[{"descrizione":"calcio1"},{"descrizione":"calcio2"},{"descrizione":"calcio3"},{"descrizione":"calcio4"},{"descrizione":"calcio5"}],
        sport:[{"descrizione":"sport1"},{"descrizione":"sport2"},{"descrizione":"sport3"},{"descrizione":"sport4"},{"descrizione":"sport5"}],
        video: [],
        videoPiacuti: [{"descrizione":"calcio1"},{"descrizione":"descrzione6"},{"descrizione":"sport5"},{"descrizione":"calcio4"},{"descrizione":"descrzione5"}],
        iscrizioni: [{"descrizione":"iscrizione1"},{"descrizione":"iscrizione2"},{"descrizione":"iscrizione3"},{"descrizione":"iscrizione4"},{"descrizione":"iscrizione5"}],
        cronologia: [{"descrizione":"cronologia1"},{"descrizione":"cronologia2"},{"descrizione":"cronologia3"},{"descrizione":"cronologia4"},{"descrizione":"cronologia5"}],
        guardaPiuTardi: [{"descrizione":"guardaPiuTardi1"},{"descrizione":"guardaPiuTardi2"},{"descrizione":"guardaPiuTardi3"},{"descrizione":"guardaPiuTardi4"},{"descrizione":"guardaPiuTardi5"}],
        burgerOn: true,
        paginaLogin : false,
    },
    methods: {
        paginaCorrente: function(paginaNuova){
            var self=this;
            if(paginaNuova != self.paginaC){
                if(paginaNuova !== "Short"){
                    document.getElementsByClassName("article")[0].style.display = "flex";
                    document.getElementsByClassName("article")[0].style.flexDirection= "row";
                    var lista = document.querySelectorAll(".riquadri");
                    for(var i = 0 ; i <lista.length;i++){ 
                        document.getElementsByClassName("riquadri")[i].style.height = "200px";
                        document.getElementsByClassName("riquadri")[i].style.width = "200px";
                        document.getElementsByClassName("riquadri")[i].style.marginLeft = "25px";
                        document.getElementsByClassName("descrizioneVideo")[i].style.marginLeft = "0%";
                    }
                    self.mostraVideo(paginaNuova);
                }else{
                    /*SHORT*/
                    document.getElementsByClassName("article")[0].style.display = "inline-flex";
                    document.getElementsByClassName("article")[0].style.flexDirection = "column";
                    var shortList = document.querySelectorAll(".riquadri");
                    for(var i = 0 ; i <shortList.length;i++){
                        document.getElementsByClassName("riquadri")[i].style.height = "510px";
                        document.getElementsByClassName("riquadri")[i].style.width = "300px";
                        document.getElementsByClassName("riquadri")[i].style.marginLeft = "100%";
                        document.getElementsByClassName("descrizioneVideo")[i].style.marginLeft = "100%";
                    } 
                }
                console.log(self.burgerOn);
                if(self.burgerOn){ /* Se burger è stato cliccato non cambio colore*/
                    document.getElementById(paginaNuova).style.backgroundColor = "#d3d3d3";
                    document.getElementById(self.paginaC).style.backgroundColor = "white";
                }
                self.paginaC= paginaNuova;
            }
        },
        Paginalogin: function(){
            var self=this;
            self.paginaLogin=true;
        },
        autenticazione: function(){
            var self=this;
            self.loggato=true;
            self.paginaLogin=false;
        },
        overMouse: function(indice){
            document.getElementById(indice).style.scale = 1.1;
        },
        leaveMouse: function(indice){
            document.getElementById(indice).style.scale = 1.0;
        },
        mostraVideo: function(videoDaMostra){
            var self=this;
            console.log("mostraVideo"+videoDaMostra);
            switch(videoDaMostra){
                case "sport":
                    self.video = self.sport;
                    break;
                case "calcio":
                    self.video = self.calcio;
                    break;
                case "tutti":
                    self.video = self.tutti;
                    break; 
                case "videoPiacuti":
                    self.video = self.videoPiacuti;
                    break; 
                case "iscrizioni":
                    self.video = self.iscrizioni;
                    break;
                case "cronologia":
                    self.video = self.cronologia;
                    break;
                case "guardaPiuTardi":
                    self.video = self.guardaPiuTardi;
                    break;
                case "raccolta":
                    self.cronologia = self.cronologia.concat.apply(self.cronologia,self.guardaPiuTardi);
                    self.cronologia = self.cronologia.concat.apply(self.cronologia,self.videoPiacuti);
                    self.video= self.cronologia;
                    break;
                default:
                    self.video = self.tutti;
                    break;
            }            
        },
        burgerMenu: function(){
            var self=this;
            var list = document.querySelectorAll(".iconeLaterali");
            for(var i=0;i<list.length;i++){
                if(self.burgerOn){
                    document.getElementsByClassName("iconeLaterali")[i].style.display= "inline-flex";
                    document.getElementsByClassName("iconeLaterali")[i].style.flexDirection= "column";
                    document.getElementsByClassName("iconeLaterali")[i].style.alignItems ="center";
                    if(i === 0 || i === 1){
                        document.getElementsByClassName("iconeLaterali")[i].style.marginLeft  ="10px";
                    }
                    document.getElementsByClassName("iconeLaterali")[i].style.backgroundColor = "white";
                    document.getElementsByTagName("article")[0].style.height= "600px"; //cambio grandezza tag aside
                }else{
                    document.getElementsByClassName("iconeLaterali")[i].style.display= "flex";
                    document.getElementsByClassName("iconeLaterali")[i].style.flexDirection= "row";
                    if(i === 0 || i === 1){
                        document.getElementsByClassName("iconeLaterali")[i].style.marginLeft  ="0px";
                    }
                    document.getElementById(self.paginaC).style.backgroundColor = "#d3d3d3";
                }
            }
            if(self.burgerOn){
                self.burgerOn = false;
            }else{
                self.burgerOn = true;
            }
        },
        overBottoneAside: function(indice){
            document.getElementById(indice).style.backgroundColor = "#d3d3d3";
        },
        leaveBottoneAside: function(indice){
            var self=this;
            document.getElementById(indice).style.backgroundColor = "white";
            console.log(self.burgerOn);
            if(self.burgerOn){
                document.getElementById(self.paginaC).style.backgroundColor = "#d3d3d3";
            }
        }
    },
    mounted() {
        var self=this;
        self.video = self.tutti;
        document.getElementById("Home").style.backgroundColor = "#d3d3d3";
    }
});