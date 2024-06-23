var a = document.getElementsByClassName('up-card-list-section')

for (var n=0; n<a.length; n++) {
	var b = a[n]
	var hb = b.getElementsByClassName('display-inline-block')[0]
	if (!hb) { continue; }
	var ht = hb.textContent
	var url = b.getElementsByClassName('job-tile-title')[0].getElementsByTagName('a')[0].href
	if (ht.match(/(second|minute)/) && ht.includes('Fixed-price')) {
		if (!localStorage['exViewed'+url]) {
			var div = document.createElement('a')
			div.innerHTML = ' [X] '
			div.setAttribute('data-url', url)
			div.onclick = function (c) {
				localStorage['exViewed'+c.path[0].getAttribute('data-url')] = 1
				c.path[0].remove()
				return false;
			}
			hb.prepend(div)

			document.getElementsByClassName('up-card-header')[0].innerHTML='<audio controls autoplay><source src="https://homserv.net/email.mp3" type="audio/mp3"></audio>'
		}
	}

}

setTimeout(function () { location.reload(); }, 25000)

