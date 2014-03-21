class ZorroMainView extends KDView

  constructor:(options = {}, data)->
    options.cssClass = 'zorro main-view'
    super options, data

  viewAppended:->
    @addSubView new KDView
      partial  : "Welcome to Zorro app!"
      cssClass : "welcome-view"

class ZorroController extends AppController

  constructor:(options = {}, data)->
    options.view    = new ZorroMainView
    options.appInfo =
      name : "Zorro"
      type : "application"

    super options, data

do ->

  # In live mode you can add your App view to window's appView
  if appView?

    view = new ZorroMainView
    appView.addSubView view

  else

    KD.registerAppClass ZorroController,
      name     : "Zorro"
      routes   :
        "/:name?/Zorro" : null
        "/:name?/dicle/Apps/Zorro" : null
      dockPath : "/dicle/Apps/Zorro"
      behavior : "application"