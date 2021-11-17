var req = new XMLHttpRequest();
// Get RDF File (XML)
req.open('GET', 'https://www.heise.de/rss/heise-Rubrik-IT.rdf', true);
req.onreadystatechange = function() 
{
    if (req.readyState === 4) 
    {
        var doc = req.responseXML;
        // All items
        var items = doc.getElementsByTagName('item');
        // Create appendable Element
        var div = document.createElement('div');
        // i < 3 == 3 Articles
        for (var i = 0; i < 3; i++) 
        {   
            // Each item
            var item = items[i];
            // Item infos
            var title = item.getElementsByTagName('title')[0];					
            var pubDate = item.getElementsByTagName('pubDate')[0];
            var description = item.getElementsByTagName('description')[0];
            // Elements to append infos
            var h2 = document.createElement('h2');
            var h3 = document.createElement('h3');
            var p = document.createElement('p');
            // Append Infos to Elements
            h2.appendChild(document.createTextNode
            (
                title.textContent
            ));
            h3.appendChild(document.createTextNode
                (
                    pubDate.textContent
                ));
            p.appendChild(document.createTextNode
            (
                description.textContent
            ));     
            // Add classes
            div.classList.add('news-container');
            h2.classList.add("news-title");
            h3.classList.add("news-pub-title");
            p.classList.add("news-text");
            // Append to DIV
            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(p);
        }
        // Append to parent DIV
        document.getElementById('news').appendChild(div);
    }
};
req.send(null);