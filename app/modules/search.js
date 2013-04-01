// Search module
define(function(require) {

  var app = require('app');
  var Collection = require('../collections/searchResults');
  var SearchBarView = require('../views/searchBar');
  var SearchListView = require('../views/searchList');
  var SearchResultModel = require('../models/search/result');
  var SearchBarModel = require('../models/search/searchBar');

  // Create a new module.
  var Search = app.module();

  // Default Model.
  Search.Model = SearchResultModel;
  Search.SearchBarModel = SearchBarModel;

  // Default Collection.
  Search.Collection = Collection.extend({
    model: Search.Model
  });

  // Default View.
  Search.Views.Layout = Backbone.Layout.extend({
    template: "search/search"
  });

  Search.Views.List = SearchListView;
  Search.Views.SearchBar = SearchBarView;

  // Return the module for AMD compliance.
  return Search;

});