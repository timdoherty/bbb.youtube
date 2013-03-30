// Search module
define(function(require) {

  var app = require('app');
  var Model = require('../models/nowPlaying/nowPlaying');
  var SearchResultModel = require('../models/search/result');
  var RelatedVideosCollection = require('../collections/nowPlaying/related');
  var SearchBarView = require('../views/searchBar');
  var NowPlayingView = require('../views/nowPlaying/nowPlaying');
  var SearchBarModel = require('../models/search/searchBar');
  var RelatedVideosView = require('../views/nowPlaying/relatedList');

  // Create a new module.
  var Module = app.module();

  // Default Model.
  Module.Model = Model;
  Module.SearchBarModel = SearchBarModel;
  Module.RelatedVideosCollection = RelatedVideosCollection.extend({
    model: SearchResultModel
  });

  // Default View.
  Module.Views.Layout = Backbone.Layout.extend({
    template: "search/search"
  });

  Module.Views.NowPlaying = NowPlayingView;
  Module.Views.Comments = Backbone.View.extend({});
  Module.Views.Related = RelatedVideosView;
  Module.Views.SearchBar = SearchBarView;

  // Return the module for AMD compliance.
  return Module;

});
