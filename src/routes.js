// eslint-disable-next-line max-len
const {addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNotebyIdhandler,
  deleteNotebyIdHandler} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotebyIdhandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotebyIdHandler,
  },
];


module.exports = routes;
