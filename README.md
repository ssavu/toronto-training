# toronto-training

INSTALLATION:
- install nodejs and npm:
http://shapeshed.com/setting-up-nodejs-and-npm-on-mac-osx/

- install bower using npm:
npm install -g bower

- install project dependency, go into project source folder:
npm install

- run the local server on localhost:8000:
npm start

- you can leave the server running and start modifying the project source code
  it will be automatically refresh in the browser



INSTRUCTIONS:
This application will display a small list of jahia modules, and also the detail for each one.

The application will have two views, try to structure your project correctly,
remove the view1 and view2 by something more meaningful

first view:
    - you need to find a way to request the modules.json, it's the database of modules
    - the view should display the list of modules
    - add a filter in the page, for filtering the module list, the "name" property of the modules should be use for the filtering
    - the modules should be order by "score"
    - each module should have a link to a detail view

second view
    - you need to find a way to request the good module in the /db/modules/moduleID.json to be able to retreive the module information
    - this view will display the detail of a module, it should display the descriptions and the name, but also the tabs:
    - module have a "tabs" property, for each tab I want an html tab that display the information contain in it.
      example of html tab: http://www.w3schools.com/bootstrap/bootstrap_tabs_pills.asp
      for exemple tag-module.json have 3 tabs: information, contact, related
      this mean that the detail view of the tag-module should display 3 tabs, each one displaying the good information
      this behavior need to be generic so it can be used in all cases

bonnus:
    - Error should be handle properly, if for some reason a module doesn't exist (it's the case for the macro module)
      when clicking on the detail view for the macro module, an error message should be display to the user
      and the transition from list to detail view need to be canceled, so the user stay on the list view

