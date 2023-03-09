var app = new Vue({
    el: '#spa',
    data: {
        paginaC:"Home",
        login: false,
    },
    methods: {
        paginaCorrente: function(paginaNuova){
            var self=this;
            if(paginaNuova != self.paginaC){
                document.getElementById(paginaNuova).style.backgroundColor = "grey";
                document.getElementById(self.paginaC).style.backgroundColor = "white";
                self.paginaC= paginaNuova;
            }
        },
        Paginalogin: function(){
            var self=this;
            self.login=true;
        }
    },
    mounted() {
        document.getElementById("Home").style.backgroundColor = "grey";
    }
});