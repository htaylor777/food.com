import $ from "jquery";

class Search {
  // 1. describe and create/initiate our object
  constructor() {
    // see bottom of footer.php for the divs to these below
    this.addsearchHTML();
    this.resultsDiv = $("#search-overlay__results");
    this.openButton = $(".js-search-trigger");
    this.closeButton = $(".search-overlay__close");
    this.searchOverlay = $(".search-overlay");
    this.searchField = $("#search-term");
    this.events();
    this.isOverlayOpen = false;
    this.isSpinnerVisible = false;
    this.previousValue;
    this.typingTimer;

  }

  // 2. events
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    $(document).on("keydown", this.keyPressDispatcher.bind(this));
    this.searchField.on("keyup", this.typingLogic.bind(this));
  }

  // 3. methods (function, action...)
  typingLogic() {
    if (this.searchField.val() != this.previousValue) {
      clearTimeout(this.typingTimer);

      if (this.searchField.val()) {
        if (!this.isSpinnerVisible) {
          this.resultsDiv.html('<div class="spinner-loader"></div>');
          this.isSpinnerVisible = true;
        }
        this.typingTimer = setTimeout(this.getResults.bind(this), 100);
      } else {
        this.resultsDiv.html("");
        this.isSpinnerVisible = false;
      }
    }

    this.previousValue = this.searchField.val();
  }

  getResults() {
    // loop through JSON results:
    // i.e.results.generalInfo.length ? -> all mapped from "function SearchResults" in "inc/search-route.php"
    $.getJSON(
      recipeapiData.root_url +
      "/wp-json/dynamic/v1/search?term=" +
      this.searchField.val(),
      results => {
        this.resultsDiv.html(`
      <div class="row">
 
        <div class="one-third">
          <h2 class="search-overlay__section-title">Recipes</h2>
          ${results.recipesget.length
            ? '<ul class="professor-cards">'
            : `<p>No Cultures match that search. </p>`
          }
            ${results.recipesget
            .map(
              item => `
          <li><a href="${item.permalink}">${item.title}</a> ${item.postType == "recipes" ? `by ${item.authorName}` : ""}</li>
          <li   class="professor-card__list-item">
          <a    class="professor-card" href="${item.permalink}">
          <img  class="professor-card__image" src="${item.image}">
          <span class="professor-card__name">${item.title}</span>
          </a>
          </li>
          `
            )
            .join("")}
          ${results.recipesget.length ? "</ul>" : ""}
        </div>


        <div class="one-third">
        <h2 class="search-overlay__section-title">General Info Pages</h2>
        ${results.generalInfo.length
            ? '<ul class="link-list min-list">'
            : `<p>No general match that search. <a href="${recipeapiData.root_url}/recipes">View all recipes</a></p>`
          }
          ${results.generalInfo
            .map(
              item =>
                `<li><a href="${item.permalink}">${item.title}</a></li>`
            )
            .join("")}
        ${results.generalInfo.length ? "</ul>" : ""}
        </div>

        <div class="one-third"> 
        <h2 class="search-overlay__section-title">Culture</h2>
        ${results.culturesget.length
            ? '<ul class="link-list min-list">'
            : `<p>No culture match that search. <a href="${recipeapiData.root_url}/recipes">View all cultures</a></p>`
          }
          ${results.culturesget
            .map(
              item =>
                `<li><a href="${item.permalink}">${item.title}</a></li>`
            )
            .join("")}
        ${results.culturesget.length ? "</ul>" : ""}
         </div>

         <div class="one-third">     
	            <h2 class="search-overlay__section-title">Tutorials</h2>
	            ${results.tutorialsget.length
            ? '<ul class="link-list min-list">'
            : `<p>No tutorials match that search. <a href="${recipeapiData.root_url}/tutorials">View all tutorials</a></p>`
          }
                ${results.tutorialsget
            .map(
              item =>
                `<li><a href="${item.permalink}">${item.title}</a></li>`
            )
            .join("")}
	            ${results.tutorialsget.length ? "</ul>" : ""}

            
	          </div>
	        </div>
	      `);
        this.isSpinnerVisible = false;
      }
    );
  }

  keyPressDispatcher(e) {
    if (
      e.keyCode == 83 &&
      !this.isOverlayOpen &&
      !$("input, textarea").is(":focus")
    ) {
      this.openOverlay();
    }

    if (e.keyCode == 27 && this.isOverlayOpen) {
      this.closeOverlay();
    }
  }

  openOverlay() {
    this.searchOverlay.addClass("search-overlay--active");
    $("body").addClass("body-no-scroll");
    this.searchField.val("");
    setTimeout(() => this.searchField.focus(), 301); // allows page to reload with spinner
    console.log("our open method just ran!");
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    $("body").removeClass("body-no-scroll");
    console.log("our close method just ran!");
    this.isOverlayOpen = false;
  }

  addsearchHTML() {
    $("body").append(`
 <div class="search-overlay">
 <div class="search-overlay__top">
 <div class="container">
 <i class="fa fa-search search-overlay__icon" aria-hidden="true"></i>
 <input type="text" class="search-term" placeholder="What are you searching for?" id="search-term">
 <i class="fa fa-window-close search-overlay__close" aria-hidden="true"></i>
 </div>
</div>
<div class='container'>
<div id="search-overlay__results"></div>
</div>
</div> 
`);
  }
}

export default Search;
