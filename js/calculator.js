var vm = new Vue({
	el:'#calculator',
	data: {
		auction: '',
		location: '',
		port: '',
		cost: '',
		lot:''
	},
	computed: {

	},	
	methods: {
		ifCopart: function() {
			alert("this is copart /" + this.lot);
		},
		ifIaai: function() {
			alert("this is iaai /" + this.lot);
		},
		getLocation: function () {
          let locationEl = document.getElementById('location');
          //location.innerHTML = '';
          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'vote', true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) return;
            if (xhr.status != 200) {
              // обработать ошибку
              alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
              return;
            }
            // обработать результат
            locationEl.innerHTML  = 'Location: ' + xhr.responseText;
            //this.location =  xhr.responseText;
          }
          xhr.send();
        },
        scanF: function() {
            let auctions = document.getElementsByName("auctionScanVar");
            let auction='';
            for (let i=0; i<auctions.length; i++) {
                if (auctions[i].matches('input[type="radio"]:checked')) {
                    auction = auctions[i].value;
                };
            }
            this.auction = auction;
            this.location = 'ff';
            this.port = 'pp';
            if (auction=='copart') this.ifCopart();
            if (auction=='iaai') this.ifIaai();
		}
	}
	
})