myApp.controller('FirstController', ['$scope', function ($scope) {
    $scope.msg = 'This Must Work!';

    function Actor(fname, lname, photo, imdbLink, bDate) {
        this.fname = fname;
        this.lname = lname;
        this.photo = photo;
        this.imdbLink = imdbLink;
        this.bDate = new Date(bDate);
        this.fullName = function () {
            return this.fname + " " + this.lname;
        }
    }

    var actor1 = new Actor("Jack", "Nicholson",
        "https://ia.media-imdb.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000197/?ref_=nmls_pst",
        "04-22-1937");
    //  alert(JSON.stringify(actor1));

    var actor2 = new Actor("Dustin", "Hoffman",
        "https://ia.media-imdb.com/images/M/MV5BMTc3NzU0ODczMF5BMl5BanBnXkFtZTcwODEyMDY5Mg@@._V1_UY209_CR8,0,140,209_AL_.jpg",
        "http://www.imdb.com/name/nm0000163/?ref_=nmls_hd",
        "08-08-1937");

    var actor3 = new Actor("Paul", "Newman",
        "https://ia.media-imdb.com/images/M/MV5BODUwMDYwNDg3N15BMl5BanBnXkFtZTcwODEzNTgxMw@@._V1_UY317_CR22,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000056/?ref_=nmls_hd",
        "01-26-1925");

    var actor4 = new Actor("Charles", "Chaplin",
        "https://ia.media-imdb.com/images/M/MV5BNDcwMDc0ODAzOF5BMl5BanBnXkFtZTgwNTY2OTI1MDE@._V1_UX214_CR0,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000122/?ref_=nmls_hd",
        "12-25-1889");
    var actor5 = new Actor("Johnny", "Depp",
        "https://ia.media-imdb.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY209_CR3,0,140,209_AL_.jpg",
        "http://www.imdb.com/name/nm0000136/?ref_=nmls_hd",
        "06-09-1963");

    var actor6 = new Actor("Robert", "Redford",
        "https://ia.media-imdb.com/images/M/MV5BMTk1Nzc5MzQyMV5BMl5BanBnXkFtZTcwNjQ5OTA0Mg@@._V1_UY209_CR5,0,140,209_AL_.jpg",
        "http://www.imdb.com/name/nm0000602/?ref_=nmls_hd",
        "08-18-1936");

    $scope.actors = [actor1, actor2, actor3, actor4, actor5, actor6];


    // Initializing searchText so it won't be undefined before the user enters text
    $scope.search1 = "";
    $scope.search2 = 0;

    $scope.searchData = function (actor) {
        // Case insensitive search in model and brand properties

        var namefilter = actor.fname.toLowerCase().includes($scope.search1.toLowerCase()) ||
            actor.lname.toLowerCase().includes($scope.search1.toLowerCase());
        var datefilter = true;
        if ($scope.search2 > 0) {
            ((actor.bDate.getMonth()) + 1) === ($scope.search2);
        }
        return (namefilter);
    }


    $scope.orderProp = "";
    $scope.changeSort = function (propName) {
    $scope.orderProp = propName;
    }
}]);