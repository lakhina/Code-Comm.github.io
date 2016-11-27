var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    .when("/course", {
        templateUrl : "course.html"
    })
    .when("/course-detail", {
        templateUrl : "course-detail.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    })
    .when("/gallery", {
        templateUrl : "gallery.html"
    })
    .when("/blog-single", {
        templateUrl : "blog-single.html"
    })
    .when("/blog-archive", {
        templateUrl : "blog-archive.html"
    });
});