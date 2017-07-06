angular.module("serialGenerator", []);

angular.module("serialGenerator").provider("genarator", function () {

    var _x = "10";

    this.getX = function () {
        return _x;
    }

    this.setX = function (x) {
        _x = x;
    }

    this.$get = function () {
        return {
            generate: function () {
                return "213o4kjh23ojkh32lkj";
            }
        }
    }

});