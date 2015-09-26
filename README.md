# Angular-Boldificator
An angular filter that bold a list of words in a sentence.

```javascript
var m = angular.module('yourModule'  ['boldificator']);

m.controller('parrot', function($scope) {
  $scope.text = "Bacon ipsum dolor amet short loin et eu porchetta ut ipsum, cupim lorem cow qui kielbasa";
  $scope.bold = ["Bacon", "porchetta", "cow"];
});
```

```html
<div ng-controller='parrot'>
  <p>{{text|boldificator:bold}}</p>
</div>
```

Thanks to the [Bacon Ipsum API](https://baconipsum.com/json-api/) for the nice example ;)

## Who am I?

[Nicolas Bonduel](http://nicolas.bonduel.net)
