angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
  .factory('Cakes',function(){
            var cakes=[{
                 id: 0,
                name: 'Max Lynx',
                lastText: 'Hey, it\'s me',
                face: 'img/1.jpg'
              }, {
                id: 1,
                name: 'Adam Bradleyson',
                lastText: 'I should buy a boat',
                face: 'img/2.jpg'
              }, {
                id: 2,
                name: 'Perry Governor',
                lastText: 'Look at my mukluks!',
                face: 'img/3.jpg'
              }, {
                id: 3,
                name: 'Mike Harrington',
                lastText: 'This is wicked good ice cream.',
                face: 'img/4.jpg'
              },{
                id: 4,
                name: 'Mike Harrington',
                lastText: 'This is wicked good ice cream.',
                face: 'img/1.jpg'    },
            {
                id: 5,
                name: 'Mike Harrington',
                lastText: 'This is wicked good ice cream. i am stream',
                face: 'img/3.jpg'    }];
                
          return {
              all: function() {
                return cakes;
              },
              remove: function(cakes) {
                cakes.splice(cakes.indexOf(cake), 1);
              },
              get: function(chatId) {
                for (var i = 0; i < cakes.length; i++) {
                  if (cakes[i].id === parseInt(chatId)) {
                    return cakes[i];
                  }
                }
                return null;
              }
            };
        });
     