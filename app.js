// Module
angular.module('app', ['ngRoute', 'ngTable']);

// Route
angular.module('app').config(function($routeProvider) {
    $routeProvider
        .when('/ce-sharif-journals-main', {
            controller: 'ceSharifJournalsMainCtrl as vm',
            templateUrl: './journals.html'
        })
        .when('/ce-sharif-journals-a-star', {
            controller: 'ceSharifJournalsAStarCtrl as vm',
            templateUrl: './journals.html'
        })
        .when('/ce-sharif-journals-a', {
            controller: 'ceSharifJournalsACtrl as vm',
            templateUrl: './journals.html'
        })
        .when('/ce-sharif-journals-all', {
            controller: 'ceSharifJournalsAllCtrl as vm',
            templateUrl: './journals.html'
        })
        .otherwise({
            redirectTo: '/ce-sharif-journals-main'
        });
});

// Controllers
// - Tabs
angular.module('app').controller('tabsCtrl', function() {
    // Properties
    this.tabs = [
        {
            name: 'ce-sharif-journals-main',
            title: 'Main'
        },
        {
            name: 'ce-sharif-journals-a-star',
            title: 'A*'
        },
        {
            name: 'ce-sharif-journals-a',
            title: 'A'
        },
        {
            name: 'ce-sharif-journals-all',
            title: 'All'
        }
    ];
    this.activeName = 'ce-sharif-journals-main';

    // Methods
    this.setName = function(name) {
        this.activeName = name;
    };
    this.isActive = function(name) {
        return this.activeName === name;
    };
});
// - Main
angular
    .module('app')
    .controller('ceSharifJournalsMainCtrl', function($http, NgTableParams) {
        this.title = 'Main';
        this.description = 'List of journals used by the Department of Computer Engineering, Sharif University of Technology, in the last 10 years';
        this.cols = [
            {
                field: 'id',
                title: '',
                // filter: { id: 'number' },
                // sortable: 'id',
                show: true
            },
            {
                field: 'title',
                title: 'Title',
                filter: { title: 'text' },
                sortable: 'title',
                show: true
            },
            {
                field: 'sjr-title',
                title: 'SJR Title',
                filter: { 'sjr-title': 'text' },
                sortable: 'sjr-title',
                show: true
            },
            {
                field: 'issn',
                title: 'ISSN',
                filter: { issn: 'text' },
                sortable: 'issn',
                show: true
            },
            {
                field: 'if',
                title: 'IF',
                filter: { if: 'text' },
                sortable: 'if',
                show: true
            },
            {
                field: 'sjr-q',
                title: 'SJR Q',
                filter: { 'sjr-q': 'text' },
                sortable: 'sjr-q',
                show: true
            },
            {
                field: 'sharif-score',
                title: 'Sharif Score',
                filter: { 'sharif-score': 'text' },
                sortable: 'sharif-score',
                show: true
            }
        ];
        $http.get('./json/ce-sharif-journals-main.json').then(response => {
            this.tableParams = new NgTableParams(
                {},
                { dataset: response.data }
            );
        });
    });
// - A*
angular
    .module('app')
    .controller('ceSharifJournalsAStarCtrl', function($http, NgTableParams) {
        this.title = 'A*';
        this.description = 'Joint conferences in all three lists (SJR-Q: Q1, Sharif Score: 7).';
        this.cols = [
            {
                field: 'id',
                title: '',
                // filter: { id: 'number' },
                // sortable: 'id',
                show: true
            },
            {
                field: 'code',
                title: 'Code',
                filter: { code: 'text' },
                sortable: 'code',
                show: true
            },
            {
                field: 'title',
                title: 'Title',
                filter: { title: 'text' },
                sortable: 'title',
                show: true
            },
            {
                field: 'rank',
                title: 'Rank',
                filter: { rank: 'text' },
                sortable: 'rank',
                show: true
            },
            {
                field: 'sharif-score',
                title: 'Sharif Score',
                filter: { 'sharif-score': 'text' },
                sortable: 'sharif-score',
                show: true
            }
        ];
        $http.get('./json/ce-sharif-journals-a-star.json').then(response => {
            this.tableParams = new NgTableParams(
                {},
                { dataset: response.data }
            );
        });
    });
// - A
angular
    .module('app')
    .controller('ceSharifJournalsACtrl', function($http, NgTableParams) {
        this.title = 'A';
        this.description = 'Joint conferences in two lists of three lists (SJR-Q: Q2, Sharif Score: 5).';
        this.cols = [
            {
                field: 'id',
                title: '',
                // filter: { id: 'number' },
                // sortable: 'id',
                show: true
            },
            {
                field: 'code',
                title: 'Code',
                filter: { code: 'text' },
                sortable: 'code',
                show: true
            },
            {
                field: 'title',
                title: 'Title',
                filter: { title: 'text' },
                sortable: 'title',
                show: true
            },
            {
                field: 'rank',
                title: 'Rank',
                filter: { rank: 'text' },
                sortable: 'rank',
                show: true
            },
            {
                field: 'sharif-score',
                title: 'Sharif Score',
                filter: { 'sharif-score': 'text' },
                sortable: 'sharif-score',
                show: true
            }
        ];
        $http.get('./json/ce-sharif-journals-a.json').then(response => {
            this.tableParams = new NgTableParams(
                {},
                { dataset: response.data }
            );
        });
    });
// - Main
angular
    .module('app')
    .controller('ceSharifJournalsAllCtrl', function($http, NgTableParams) {
        this.title = 'All';
        this.description = 'General list of computer engineering journals.';
        this.cols = [
            {
                field: 'id',
                title: '',
                // filter: { id: 'number' },
                // sortable: 'id',
                show: true
            },
            {
                field: 'sjr-title',
                title: 'SJR Title',
                filter: { 'sjr-title': 'text' },
                sortable: 'sjr-title',
                show: true
            },
            {
                field: 'categories',
                title: 'Categories',
                filter: { categories: 'text' },
                sortable: 'categories',
                show: true
            },
            {
                field: 'issn',
                title: 'ISSN',
                filter: { issn: 'text' },
                sortable: 'issn',
                show: true
            },
            {
                field: 'sjr-score',
                title: 'SJR Score',
                filter: { 'sjr-score': 'text' },
                sortable: 'sjr-score',
                show: true
            },
            {
                field: 'sjr-q',
                title: 'SJR Q',
                filter: { 'sjr-q': 'text' },
                sortable: 'sjr-q',
                show: true
            },
            {
                field: 'sharif-score',
                title: 'Sharif Score',
                filter: { 'sharif-score': 'text' },
                sortable: 'sharif-score',
                show: true
            }
        ];
        $http.get('./json/ce-sharif-journals-all.json').then(response => {
            this.tableParams = new NgTableParams(
                {},
                { dataset: response.data }
            );
        });
    });
