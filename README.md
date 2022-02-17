# acm-website

Visit it at usd-acm-website.herokuapp.com

Website for USD's ACM Club

to run:
1. make sure you are in the directory with manage.py
2. type python manage.py runserver in the terminal
3. Open up a webpage, type in localhost:8000 in the search bar, as well /*insert page* to get to a specific page
4. on a new terminal, type "cd frontend"
5. from frontend, type npm run dev to get live code updates

If the page is not updating changes you make to the code, use CTRL Shift R.

to create a new page:
1. on acm-website/frontend/src/components/Pages, create a JS file with the react component you intend to render (https://reactjs.org/docs/react-component.html)
2. on the top of your JS file, include the line "import React, { Component } from 'react';"
3. on the bottom of your JS file, include the line "export default *componentName*"
4. next, go to Routes.js on the /components/App folder, and import the created component
5. inside the <Switch> statement of the Routes component, create a new Route and specify its path using <Route exact path='/*path*'>
6. include your react component inside this route and close the route
7. next, go to frontend/urls.py and include the path using path('*path*/', index) inside the urlpatterns array

