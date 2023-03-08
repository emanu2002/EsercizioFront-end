var app = new Vue({
    el: '#spa',
    data: {
        paginaC:"Home",
    },
    methods: {
        paginaCorrente: function(paginaNuova){
            var self=this;
            console.log("vue #"+ self.paginaC);
            console.log("vecc #"+ paginaNuova);
            document.getElementById(paginaNuova).style.backgroundColor = "grey";
            document.getElementById(self.paginaC).style.backgroundColor = "white";
            self.paginaC= paginaNuova;
            console.log("dopo #"+ self.paginaC);
        }
    },
    mounted() {
        console.log("inizio");
        document.getElementById("Home").style.backgroundColor = "grey";
    }
});