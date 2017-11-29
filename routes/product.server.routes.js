module.exports = function(app){

 var songs = require('./../controllers/songs.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');


 app.route('/new')
    .get(songs.new);
    
    
 app.route('/all')
    .get(songs.all);
    
/* app.route('/:songId')
    .get(songs.view);
*/
 app.route('/api/songs')
	.get(songs.list)
	.post(/*users.requiresLogin,*/ songs.create);

/*  app.route('/api/songs/:songId')
	.get(songs.read)
  .delete(users.requiresLogin, songs.delete);

	app.route('/api/songs/edit/:songId')
	.get(songs.read)
	.put(users.requiresLogin, songs.update);


app.param('songId', songs.songByID);
*/

}