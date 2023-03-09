var app = new Vue({
    el: '#spa',
    data: {
        paginaC:"Home",
        login: false,
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
        
    },
    methods: {
        paginaCorrente: function(paginaNuova){
            var self=this;
            if(paginaNuova != "Home"){
                document.getElementById("riquadroVideo").style.width = "100%";
            }else{
                document.getElementById("riquadroVideo").style.width = "45.8%";
            }
            if(paginaNuova != self.paginaC){
                if(paginaNuova !== "Short"){
                    self.mostraVideo(paginaNuova);
                }
                document.getElementById(paginaNuova).style.backgroundColor = "grey";
                document.getElementById(self.paginaC).style.backgroundColor = "white";
                self.paginaC= paginaNuova;
            }
        },
        Paginalogin: function(){
            var self=this;
            self.login=true;
        },
        overMouse: function(indice){
            document.getElementById(indice).style.scale = 1.1;
        },
        leaveMouse: function(indice){
            document.getElementById(indice).style.scale = 1.0;
        },
        mostraVideo: function(videoDaMostra){
            var self=this;
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
        }
    },
    mounted() {
        var self=this;
        self.video = self.tutti;
        document.getElementById("Home").style.backgroundColor = "grey";
    }
});