var _ = require('underscore');

function getValueByProperty(prop, arr) { 
	return _.map(arr, function(num, key) { 
			return num[prop]; 
			});
}

function getUniqProperty(arr) {
	return _.keys(_.first(arr)); 
}

function getEnhancedValueByProperty(uniqstr, arr) {
	return _.flatten(_.pluck(arr, uniqstr));
}

function getTotalInJSON(arr) {
	return _.chain(getUniqProperty(arr)).map(function(num, key){ return getEnhancedValueByProperty(num, arr); }).union().value();

}
