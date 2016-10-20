class FollowToggle {
  constructor(el, options) {
    if (options) {
      this.user_id = options.user_id;
      this.followed_state = options.followed_state;
    } else {
      let user = el.data('user');
      this.user_id = user['user_id'];
      this.followed_state = user['followed_state'];
    }
    this.el = el;
    this.el.click(this.handleClick.bind(this));
    this.render();
  }

  render() {
    console.log(this.followed_state);
    switch (this.followed_state) {
      case "followed":
        this.el.text("unfollow");
        break;
      case "unfollowed":
        console.log(this.el);
        this.el.text("follow");
        break;
    }
  }

  handleClick() {
      event.preventDefault();
      this.adjustfollowers();
  }

  adjustfollowers() {
    if (this.followed_state === "followed") {
      this.makeFollowRequest("DELETE");
      this.toggleFollow();
      this.render();
    } else {
      this.makeFollowRequest("POST");
      this.toggleFollow();
      this.render();
    }
  }

  makeFollowRequest(action) {
    let el = this.el;
    el.prop("disabled", true);
    $.ajax({
      url: `${this.user_id}/follow`,
      type: `${action}`,
      dataType: "json",
      data: {},
      success() {
        console.log(el);
        el.prop("disabled", false);
      }
    });
  }

  toggleFollow() {
    this.followed_state = (this.followed_state === "followed" ? "unfollowed" : "followed");
  }
}




module.exports = FollowToggle;
