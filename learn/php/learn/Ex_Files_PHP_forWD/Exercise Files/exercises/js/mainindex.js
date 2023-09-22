(function() {
	var headings = document.getElementsByTagName('h2'),
		lists = [], para, toggle;
	if (!headings[0].nextElementSibling) return;
	for (var i = 0; i < headings.length; i++) {
		headings[i].style.cursor = 'pointer';
		lists[i] = headings[i].nextElementSibling;
		headings[i].onclick = function(num) {
			return function() {
				for (var j = 0; j < lists.length; j++) {
					lists[j].className = 'closed';
					headings[j].className = '';
				}
				lists[num].className = 'open';
				headings[num].className = 'open';
			}
		}(i);
		if (i == 0) {
			headings[i].className = 'open';
			continue;
		}
		headings[i].nextElementSibling.className = 'closed';
	}
	para = document.createElement('p');
	toggle = document.createElement('a');
	toggle.href = '#';
	toggle.innerHTML = 'Show All';
	toggle.onclick = function (e) {
		e.preventDefault();
		for (var i = 0; i < lists.length; i++) {
			if (toggle.innerHTML == 'Show All') {
				lists[i].className = 'open';
				headings[i].className = 'open';
			} else {
				lists[i].className = 'closed';
				headings[i].className = '';
			}
		}
		if (toggle.innerHTML == 'Show All') {
			toggle.innerHTML = 'Close All';
		} else {
			toggle.innerHTML = 'Show All';
		}
	};
	para.appendChild(toggle);
	document.body.insertBefore(para, headings[0]);
})();