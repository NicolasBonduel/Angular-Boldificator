# Angular-Boldificator
An angular filter that bold a list of words in a sentence.

```javascript
var m = angular.module('yourModule'  ['boldificator', 'ngSanitize']);

m.controller('defaultCtrl', function($scope) {
  $scope.text = "Bacon ipsum dolor amet short loin et eu porchetta ut ipsum, cupim lorem cow qui kielbasa.";
  $scope.bold = ["Bacon", "porchetta", "cow"];
});
```

```html
<div ng-controller='defaultCtrl'>
  <p ng-bind-html="text | boldificator:bold"></p>
</div>
```

Result :
**Bacon** ipsum dolor amet short loin et eu **porchetta** ut ipsum, cupim lorem **cow** qui kielbasa.

Be careful, you may need "ngSanitize" for the rendering.

---

Thanks to the [Bacon Ipsum API](https://baconipsum.com/json-api/) for the nice example ;)

---

[Nicolas Bonduel](http://nicolas.bonduel.net)
