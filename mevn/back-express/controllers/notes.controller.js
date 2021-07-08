const { response, request } = require('express');

// Importacion de libreria para autoimportaciones de VsCode
// Renombrado de response para utilizar ayuda IDE
const noteGet = (req = request, res = response) => {
  console.log('ver');
  const { query, nombre = 'not name', apikey, page, limit = 5 } = req.query;

  res.json({
    msg: 'get API - controller',
    query,
    nombre,
    apikey,
    page,
    limit,
  });
};

// http://localhost:3000/api/notes/new-note
const notePost = (req, res = response) => {
  const body = req.body;

  try {
    console.log(body);
    return;
  } catch (error) {
    return res.status(500).json({
      msg: 'post API - Error!',
      error,
    });
  }
};

const notePut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: 'put API - Controller',
    id,
  });
};

const notePatch = (req, res = response) => {
  res.json({
    msg: 'patch API - Controller',
  });
};

const noteDelete = (req, res = response) => {
  res.json({
    msg: 'delete API - Controller',
  });
};

module.exports = { noteGet, notePost, notePut, notePatch, noteDelete };
