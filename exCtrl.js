myApp.controller('FirstController', ['$scope', function ($scope) {
    $scope.msg = 'This Must Work!';

    function Actor(fname, lname, photo, imdbLink, bDate) {
        this.fname = fname;
        this.lname = lname;
        this.photo = photo;
        this.imdbLink = imdbLink;
        this.bDate = new Date(bDate);
        // this.age = function() {
        //   return Math.round((new Date().getFullYear() - this.bDate.getFullYear()));
        // }
    }

    var actor1 = new Actor("Jack", "Nicholson",
        "https://ia.media-imdb.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000197/?ref_=nmls_pst", "04-22-1937");
    //  alert(JSON.stringify(actor1));

    var actor2 = new Actor("Jack", "Nicholson",
        "https://ia.media-imdb.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000197/?ref_=nmls_pst", "04-22-1937");

    var actor3 = new Actor("Jack", "Nicholson",
        "https://ia.media-imdb.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000197/?ref_=nmls_pst", "04-22-1937");

    var actor4 = new Actor("Jack", "Nicholson",
        "https://ia.media-imdb.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000197/?ref_=nmls_pst", "04-22-1937");

    var actor5 = new Actor("Jack", "Nicholson",
        "https://ia.media-imdb.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000197/?ref_=nmls_pst", "04-22-1937");


    var actor6 = new Actor("Jack", "Nicholson",
        "https://ia.media-imdb.com/images/M/MV5BMTQ3OTY0ODk0M15BMl5BanBnXkFtZTYwNzE4Njc4._V1_UY317_CR7,0,214,317_AL_.jpg",
        "http://www.imdb.com/name/nm0000197/?ref_=nmls_pst", "04-22-1937");

    $scope.actors = [actor1, actor2, actor3, actor4, actor5, actor6];

}]);