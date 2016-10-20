const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor(el) {
    this.el = el;
    this.input = $(el.children()[0]).val();
    this.ul = $(el.find('ul'));
    this.handleInput();
  }

  handleInput() {
    let self = this;
    this.el.on('input', event => {
      let nav = $(event.currentTarget);
      let input = $(nav.children()[0]).val();
      $.ajax({
        url: 'search',
        type: 'GET',
        dataType: 'json',
        data: { "query": input},
        success(users) {
          self.renderResults(users);
        }
      });
    });
  }

  renderResults(users) {
    this.ul.empty();
    for (var i = 0; i < users.length; i++) {
      let user = users[i];
      let $li = $("<li>");
      let $button = $('<button></button>');
      let options = {
        user_id: user.id,
        followed_state: (user.followed ? "followed" : "unfollowed")
      };
      let ft = new FollowToggle($button, options);
      $li.wrapInner(`<a href="/users/${user.id}">${user.username}</a>`);
      $li.append($button);
      this.ul.append($li);
    }
  }
}

module.exports = UsersSearch;
