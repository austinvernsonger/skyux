/* global angular */
(function () {
    'use strict';

    function bbListbuilder() {
        /* list builder
            contains a toolbar with Add button, Search, filter button, sort dropdown,
            column chooser (when in grid mode), custom buttons, and view switcher (which has buttons for grid, card, and repeater).

            contains <bb-listbuilder-grid></bb-listbuilder-grid> and <bb-listbuilder-card></bb-listbuilder-card>

            should be able to coordinate multiselect for views

        */

    }

    angular.module('sky.listbuilder.directive', [])
        .directive('bbListbuilder', bbListbuilder);
}());
