/* Compiled by kdc on Fri Mar 21 2014 19:22:57 GMT+0000 (UTC) */
(function() {
/* KDAPP STARTS */
/* BLOCK STARTS: index.coffee */
var ZorroController, ZorroMainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ZorroMainView = (function(_super) {
  __extends(ZorroMainView, _super);

  function ZorroMainView(options, data) {
    if (options == null) {
      options = {};
    }
    options.cssClass = 'zorro main-view';
    ZorroMainView.__super__.constructor.call(this, options, data);
  }

  ZorroMainView.prototype.viewAppended = function() {
    return this.addSubView(new KDView({
      partial: "Welcome to Zorro app!",
      cssClass: "welcome-view"
    }));
  };

  return ZorroMainView;

})(KDView);

ZorroController = (function(_super) {
  __extends(ZorroController, _super);

  function ZorroController(options, data) {
    if (options == null) {
      options = {};
    }
    options.view = new ZorroMainView;
    options.appInfo = {
      name: "Zorro",
      type: "application"
    };
    ZorroController.__super__.constructor.call(this, options, data);
  }

  return ZorroController;

})(AppController);

(function() {
  var view;
  if (typeof appView !== "undefined" && appView !== null) {
    view = new ZorroMainView;
    return appView.addSubView(view);
  } else {
    return KD.registerAppClass(ZorroController, {
      name: "Zorro",
      routes: {
        "/:name?/Zorro": null,
        "/:name?/dicle/Apps/Zorro": null
      },
      dockPath: "/dicle/Apps/Zorro",
      behavior: "application"
    });
  }
})();

/* KDAPP ENDS */
}).call();