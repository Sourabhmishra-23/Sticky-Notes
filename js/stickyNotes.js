// Use Strict Mode
"use strict";

(function stickyNotes() {

    /*
    ---------------------------
        Functions
    ---------------------------
    */

    // Define a function to get link parameter
    function getParam(query) {
        var param = {};
        var link = window.location.search;
        link = link.replace('?', '');
        var divide = link.split('&').forEach(function(variable){
           var half = variable.split('=');
           param[half[0]] = half[1];
        });
        
        if (param[query]) {
            return param[query];
        } else {
            return '';
        }
    }

    // Vue Instances
    var header = new Vue({
        el: '#header',
        data: {
            isHashtag: getParam('s')
        }
    });


    var addNote = new Vue({
        el: '#notes',
        components: {
            'sticky-notes': httpVueLoader('components/multiNotes.vue'),
            'shared-note': httpVueLoader('components/sharedNote.vue')
        }
    });    

})();

	Swal.fire({
  title: 'Custom width, padding, background.',
  width: 600,
  padding: '3em',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://tenor.com/view/kevin-the-office-giggle-laughing-cute-gif-4986298")
    left top
    no-repeat
  `
})
