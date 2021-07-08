const { Router } = require('express');

const {
  noteGet,
  notePost,
  notePut,
  notePatch,
  noteDelete,
} = require('../controllers/notes.controller');

const router = Router();

router.get('/', noteGet);

router.post('/new-note', notePost);

router.put('/:id', notePut);

router.patch('/', notePatch);

router.delete('/', noteDelete);

module.exports = router;
