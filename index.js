const express = require('express');
const app = express();
const cors = require('cors');
const fs = require('fs');


app.use(cors());
app.use(express.json());

app.get('/contactos', (req, res) => {
    fs.readFile('./contactos.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    }
    );
}
);

app.get('/contactos/:id', (req, res) => {
    fs.readFile('./contactos.json', (err, data) => {
        if (err) throw err;
        res.send(JSON.parse(data));
    }
    );
}
);

// app.post('/contactos', (req, res) => {
//     fs.readFile('./contactos.json', (err, data) => {    
//         if (err) throw err;
//         let contactos = JSON.parse(data);
//         contactos.push(req.body);
//         fs.writeFile('./contactos.json', JSON.stringify(contactos), (err) => {
//             if (err) throw err;
//             res.send(contactos);
//         }
//         );
//     }
//     );
// }
// );

app.delete('/contactos/:id', (req, res) => {
    fs.readFile('./contactos.json', (err, data) => {
        if (err) throw err;
        let contactos = JSON.parse(data);
        contactos = contactos.filter(contacto => contacto.id != req.params.id);
        fs.writeFile('./contactos.json', JSON.stringify(contactos), (err) => {
            if (err) throw err;
            res.send(contactos);
        }
        );
    }
    );
}
);

app.put('/contactos/:id', (req, res) => {
    fs.readFile('./contactos.json', (err, data) => {
        if (err) throw err;
        let contactos = JSON.parse(data);
        contactos = contactos.map(contacto => {
            if (contacto.id == req.params.id) {
                contacto = req.body;
            }
            return contacto;
        }
        );
        fs.writeFile('./contactos.json', JSON.stringify(contactos), (err) => {
            if (err) throw err;
            res.send(contactos);
        }
        );
    }
    );
}
);

//loooooooooooooooooool//

app.listen(3000, () => {
    console.log('Server running on port 3000');
}
);