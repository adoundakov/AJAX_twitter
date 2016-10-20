class TweetCompose {
  constructor(el) {
    this.el.on("submit", this.submit(event).bind(this));
  }

  submit(event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serialize();

    $.ajax({
      url: "tweets",
      type: "POST",
      data: formData,
      datatype: "json",
      success() {
        this.handleSuccess();
      }
    });
    //disable the form

  }

  clearInput() {
    var allInputs = $( ":input" );
    allInputs.forEach(el => {
      $(el).val("");
    });
  }

  handleSuccess() {
    this.clearInput();
    // reenable form
  }


}
