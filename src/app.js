const express = require('express');
const { Cat } = require ('./models');

const app = express();

app.use(express.json());

app.post('/cats', (req, res) => {
    Cat.create(req.body).then((cat) => res.status(201).json(cat)).catch((error) => res.status(404))
});

app.get('/cats', (req, res) => {
    Cat.findAll({ where: req.query }).then((cats) =>
    res.status(200).json({ cats })).catch((error) => res.status(404))
});

app.get('/cats/:catId', (req, res) => {
    Cat.findByPk(req.params.catId).then((cats) => 
    res.status(200).json( { cats })).catch((error) => res.status(404))
});

app.patch("/feed/:catId", (req, res) => {
    Cat.update(
      { lastFed: new Date() },
      { where: { id: req.params.catId } }
    ).then(() => res.status(201).send());
  });

app.delete("/cats/:catId", (req, res) => {
    Cat.destroy(
      { where: { id: req.params.catId } }
    ).then(catsDeleted => res.status(201).send({ catsDeleted })).catch((error) => res.status(404));
  });
  
  app.get('*', (_, res) => {
    res.redirect('/');
  });

module.exports = app;