webpackJsonp([26],{62:function(n,t){n.exports="## Top App Bar\n\nTop App Bar acts as a container for items such as application title, navigation icon, and action items.\n\n## Usage\n\n```html\n<m-top-app-bar\n  title='Omim'\n  short\n  onNavigation\n  navigation-icon=\"{\n    view: 24,\n    path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'\n  }\"\n  onAction0\n  action-items=\"[\n    {\n      view: 48,\n      path: 'M34.02 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-12.99-13-12.99S9.03 12 9.02 19H4l7.68 8L20 19h-6.98c.01-5 4.03-8.99 9-8.99s9 4.03 9 9-4.03 9-9 9c-1.29 0-2.52-.28-3.63-.77l-2.96 2.96c1.93 1.14 4.18 1.81 6.59 1.81 3.23 0 6.17-1.18 8.44-3.13l.54.54V31l10.01 9.98L43.99 38l-9.97-10z'\n    }\n  ]\"\n></m-top-app-bar>\n```\n\n## Used in Omi\n\nJSX:\n\n```jsx\n<m-top-app-bar\n  adjust\n  heading='Click to show menus'\n  onNavigation={this.onDemoStart}\n  navigation-icon={{\n    view: 24,\n    path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'\n  }}\n  onAction0={this.onDemoStart}\n  action-items={[\n    {\n      view: 24,\n      path: 'M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6z'\n    }\n  ]}\n/>\n```\n\n## API\n\n### Props\n\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\n| ------------- |:-------------:|:-----:|:-------------:|\n| heading | string | -- | title content |\n| short | boolean | -- | With shortened animation |\n| shortCollapsed | boolean | -- | Fixed to a shortened state |\n| prominent | boolean | -- | Highlight title |\n| dense | boolean | -- | More compact top app bar |\n| fixed | boolean | -- | Fixation top app bar |\n| adjust | boolean | -- | Automatically fills the top app bar height |\n| navigationIcon | object | -- | Left button |\n| actionItems | object | -- | Right button |\n| scrollTarget | EventTarget | -- | Sets the target scroll bar(used in JSX) |\n| scrollTargetDrawer | boolean | -- | Sets the target scroll bar(m-drawer Component usage 'frame' property, and is used under specific conditions) |\n| onNav | function | -- | Click the left navigation bar to trigger |\n| onNavigation | function | -- | Click the left navigation bar to trigger |\n| onAction(0-N) | function | -- | Click the right button to trigger, and the number of the right button will correspond to the tail number |\n"}});
//# sourceMappingURL=26.328457c5.chunk.js.map