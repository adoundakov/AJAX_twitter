const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require("./users_search.js");

$(() => {
  // adds user search functionality
  $("nav.users-search").each(function(index, el) {
    new UsersSearch($(el));
  });

  // adds follow button functionality
  $("button.follow-toggle").each(function(index, el) {
    new FollowToggle($(el));
  });
});
