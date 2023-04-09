let div2 = div.cloneNode(true);
div2.querySelector('strong').innerHTML = 'Всем пока!';

div.after(div2);